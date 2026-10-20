"use client";

import Link from "next/link";
import { ArrowLeft, Package, MapPin, Tag } from "lucide-react";
import ImageGallery from "@/components/ImageGallery";
import { useLanguage } from "@/context/LanguageContext";

interface ProductDetailClientProps {
  product: any;
  finalImages: string[];
}

export default function ProductDetailClient({ product, finalImages }: ProductDetailClientProps) {
  const { t, getLocalizedProduct, getLocalizedCategoryName } = useLanguage();
  const localized = getLocalizedProduct(product);
  const categoryName = product.category 
    ? getLocalizedCategoryName(product.category) || product.category.name 
    : t("nav.products");

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 pb-32">
      <Link 
        href={product.category ? `/products/category/${product.category.slug}` : "/products"} 
        className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-golden transition-colors mb-12 font-medium tracking-wide uppercase"
      >
        <ArrowLeft size={18} /> {t("common.back")} {categoryName}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Product Image Gallery */}
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute top-6 left-6 glass-golden px-5 py-2 rounded-full font-bold shadow-sm z-20">
              {categoryName}
            </div>
            <ImageGallery images={finalImages} productName={localized.name} />
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-7 flex flex-col pt-4">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
              {localized.name}
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium whitespace-pre-wrap">
              {localized.shortDescription}
            </p>
            {localized.content && (
              <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-wrap">
                {localized.content}
              </p>
            )}
          </div>

          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary-golden flex-shrink-0" size={24} />
              <div>
                <p className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-1">{t("common.origin")}</p>
                <p className="font-medium text-gray-900 text-lg">{localized.origin || "Vietnam"}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Tag className="text-primary-golden flex-shrink-0" size={24} />
              <div>
                <p className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-1">{t("common.certifications")}</p>
                <p className="font-medium text-gray-900 text-lg">{product.certifications || "ISO, HACCP, HALAL, BRC"}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-10">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Package className="text-gray-400" /> {t("common.specifications")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-1">{t("common.quality")}</span>
                <span className="font-medium text-gray-900">{localized.quality || "Export Standard"}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-1">{t("common.packaging")}</span>
                <span className="font-medium text-gray-900">{localized.packaging || "As requested / OEM"}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-1">{t("common.shelfLife")}</span>
                <span className="font-medium text-gray-900">{localized.shelfLife || "12 - 36 months"}</span>
              </div>
            </div>
          </div>

          <div className="mt-auto flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-primary-golden hover:bg-yellow-600 text-white py-4 rounded-full font-bold text-lg transition-all shadow-lg transform hover:-translate-y-1">
              {t("common.inquireNow")}
            </button>
            <a href="/documents/catalog.pdf" download className="flex-1 bg-transparent border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 py-4 rounded-full font-bold text-lg transition-all text-center flex items-center justify-center">
              {t("common.downloadCatalog")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
