import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { categories, products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 pb-32">
      <div className="mb-16">
        <h4 className="text-primary-golden font-bold tracking-[0.2em] uppercase text-sm mb-4">
          Catalogue
        </h4>
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
          Sourced with heart, shared with pride.
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Our core catalogue focuses on agricultural products where Vietnam has a proven, global competitive advantage. Explore our premium selections below.
        </p>
      </div>

      <div className="space-y-24">
        {categories.map((category) => {
          // Get products for this category
          const categoryProducts = products.filter((p) => p.categoryId === category.id);
          // Show only up to 3 products as a preview
          const previewProducts = categoryProducts.slice(0, 3);

          if (previewProducts.length === 0) return null;

          return (
            <div key={category.id} className="border-t border-gray-100 pt-16 first:border-0 first:pt-0">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
                </div>
                <Link 
                  href={`/products/category/${category.id}`}
                  className="inline-flex items-center gap-2 text-primary-golden font-bold hover:text-yellow-600 transition-colors"
                >
                  View All {category.name} <ArrowRight size={20} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {previewProducts.map((product) => (
                  <div key={product.id} className="group cursor-pointer">
                    <Link href={`/products/${product.id}`} className="block">
                      <div className="h-[300px] bg-gray-100 rounded-3xl overflow-hidden relative mb-6">
                        <Image 
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-6 right-6 glass-golden px-4 py-2 rounded-full text-xs font-bold shadow-sm z-10">
                          {category.name}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-start pr-2">
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-golden transition-colors">{product.name}</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-primary-golden group-hover:text-white group-hover:border-primary-golden transition-all shrink-0 ml-4">
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
