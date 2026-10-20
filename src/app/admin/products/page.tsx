"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Edit, Eye, Plus, Search, Filter } from "lucide-react";
import { API_BASE_URL, getImageUrl } from "@/lib/api";

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  status: string;
  images: any[];
  category: Category;
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        
        // Extract unique categories from products
        const uniqueCategories = data.reduce((acc: Category[], product: Product) => {
          if (product.category && !acc.find(c => c.id === product.category.id)) {
            acc.push(product.category);
          }
          return acc;
        }, []);
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Loading data...</div>;
  }

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.slug.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category?.id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Products Management</h1>
          <p className="text-gray-500 mt-1">Total: {filteredProducts.length} products</p>
        </div>
        <Link 
          href="/admin/products/new" 
          className="bg-dark-green hover:bg-[#1b432a] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-sm"
        >
          <Plus size={20} />
          <span>Add New Product</span>
        </Link>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by product name..."
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:ring-primary-green focus:border-primary-green sm:text-sm bg-gray-50 transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="relative w-full sm:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter size={18} className="text-gray-400" />
          </div>
          <select
            className="block w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg focus:ring-primary-green focus:border-primary-green sm:text-sm bg-gray-50 transition-colors appearance-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Product List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {filteredProducts.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            No products match the applied filters.
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredProducts.map(product => {
              const featuredImg = getImageUrl(product.images?.[0]?.imageUrl);

              return (
              <div key={product.id} className="p-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-100 bg-gray-50 shrink-0">
                    {featuredImg && (
                      <img 
                        src={featuredImg} 
                        alt={product.name} 
                        className="w-full h-full object-cover" 
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (!target.src.includes('placeholder.png')) {
                            target.src = '/images/products/placeholder.png';
                          }
                        }}
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">{product.name}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
                        {product.category?.name || "Uncategorized"}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${product.status === 'PUBLISHED' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                        {product.status === 'PUBLISHED' ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Link href={`/products/${product.slug}`} target="_blank" className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="View on website">
                    <Eye size={20} />
                  </Link>
                  <Link href={`/admin/products/${product.id}/edit`} className="p-2 text-gray-400 hover:text-primary-golden hover:bg-yellow-50 rounded-lg transition-colors" title="Edit product">
                    <Edit size={20} />
                  </Link>
                </div>
              </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
