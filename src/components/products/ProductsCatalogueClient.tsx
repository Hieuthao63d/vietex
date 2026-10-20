"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { getImageUrl } from "@/lib/api";

export default function ProductsCatalogueClient({ products }: { products: any[] }) {
  const { t, getLocalizedProduct, getLocalizedCategoryName, getLocalizedCategoryDescription } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 pb-32">
      <div className="mb-16">
        <h4 className="text-primary-golden font-bold tracking-[0.2em] uppercase text-sm mb-4">
          {t("catalogue.badge")}
        </h4>
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
          {t("catalogue.title")}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          {t("catalogue.subtitle")}
        </p>
      </div>

      <div className="space-y-24">
        {categories.map((category) => {
          const categoryProducts = products.filter((p: any) => p.category?.slug === category.id);
          if (categoryProducts.length === 0) return null;
          
          const previewProducts = categoryProducts.slice(0, 3);
          const localizedCatName = getLocalizedCategoryName(category) || category.name;
          const localizedCatDesc = getLocalizedCategoryDescription(category) || category.description;

          return (
            <div key={category.id} className="border-t border-gray-100 pt-16 first:border-0 first:pt-0">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <h2 className="text-3xl font-black text-gray-900 mb-2">{localizedCatName}</h2>
                  <p className="text-gray-500 font-medium">{localizedCatDesc}</p>
                </div>
                <Link 
                  href={`/products/category/${category.id}`}
                  className="inline-flex items-center gap-2 text-primary-golden font-bold hover:text-yellow-600 transition-colors whitespace-nowrap"
                >
                  {t("common.explore")} {localizedCatName} <ArrowRight size={18} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {previewProducts.map((product: any) => {
                  const localized = getLocalizedProduct(product);
                  const featuredImg = getImageUrl(product.images?.[0]?.imageUrl);

                  return (
                    <Link href={`/products/${product.slug}`} key={product.id} className="group flex flex-col block">
                      <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-5 border border-gray-100 relative">
                        <img 
                          src={featuredImg} 
                          alt={localized.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
