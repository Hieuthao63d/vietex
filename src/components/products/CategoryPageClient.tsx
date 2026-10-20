"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getImageUrl } from "@/lib/api";

interface CategoryPageClientProps {
  category: any;
  products: any[];
}

export default function CategoryPageClient({ category, products }: CategoryPageClientProps) {
  const { t, getLocalizedProduct, getLocalizedCategoryName, getLocalizedCategoryDescription } = useLanguage();
  const localizedCatName = getLocalizedCategoryName(category) || category.name;
  const localizedCatDesc = getLocalizedCategoryDescription(category) || category.description;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 pb-32">
      <Link href="/products" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-golden transition-colors mb-12 font-medium tracking-wide uppercase">
        <ArrowLeft size={18} /> {t("common.back")} {t("nav.products")}
      </Link>

      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
          {localizedCatName}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          {localizedCatDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product: any) => {
          const localized = getLocalizedProduct(product);
          const featuredImg = getImageUrl(product.images?.[0]?.imageUrl);
              
          return (
            <Link href={`/products/${product.slug}`} key={product.id} className="group flex flex-col block">
              <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-5 border border-gray-100 relative">
                <img 
                  src={featuredImg} 
                  alt={localized.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('placeholder.png')) {
                      target.src = '/images/products/placeholder.png';
                    }
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-golden transition-colors line-clamp-2">
                {localized.name}
              </h3>
              <div className="mt-auto pt-4 flex items-center text-sm font-bold text-gray-400 group-hover:text-primary-golden transition-colors uppercase tracking-wider">
                {t("common.explore")} <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
      
      {products.length === 0 && (
        <div className="py-20 text-center text-gray-500 text-lg">
          {t("common.noProducts")}
        </div>
      )}
    </div>
  );
}
