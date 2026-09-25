import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCategoryById, getProductsByCategory } from "@/data/products";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }: { params: Promise<{ categoryId: string }> }) {
  const { categoryId } = await params;
  
  const category = getCategoryById(categoryId);
  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(categoryId);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 pb-32">
      <Link href="/products" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-golden transition-colors mb-12 font-medium tracking-wide">
        <ArrowLeft size={18} /> BACK TO ALL PRODUCTS
      </Link>

      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
          {category.name}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          {category.description || `Explore our premium selection of ${category.name.toLowerCase()} sourced directly from Vietnam.`}
        </p>
      </div>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categoryProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <Link href={`/products/${product.id}`} className="block">
                <div className="h-[350px] bg-gray-100 rounded-3xl overflow-hidden relative mb-6">
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
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-primary-golden transition-colors">{product.name}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-primary-golden group-hover:text-white group-hover:border-primary-golden transition-all shrink-0 ml-4">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-3xl">
          <p className="text-gray-500 text-lg">Products are currently being updated for this category.</p>
        </div>
      )}
    </div>
  );
}
