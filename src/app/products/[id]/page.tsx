import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Package, MapPin, Tag } from "lucide-react";
import { getProductById, getCategoryById } from "@/data/products";
import { notFound } from "next/navigation";
import ImageGallery from "@/components/ImageGallery";
import fs from "fs";
import path from "path";

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const product = getProductById(id);
  
  if (!product) {
    notFound();
  }

  const category = getCategoryById(product.categoryId);
  const categoryName = category ? category.name : "Products";

  // Dynamically check which images actually exist in the folder
  const productDir = path.join(process.cwd(), 'public', 'images', 'products', product.id);
  let availableImages: string[] = [];
  
  try {
    if (fs.existsSync(productDir)) {
      const files = fs.readdirSync(productDir);
      // Filter for image files and sort them (e.g. 1.png, 2.png)
      const imageFiles = files
        .filter(f => f.match(/\.(png|jpe?g|webp)$/i))
        .sort((a, b) => {
          // Extract numbers to sort correctly (1, 2, ..., 10) instead of (1, 10, 2)
          const numA = parseInt(a.replace(/\D/g, '')) || 0;
          const numB = parseInt(b.replace(/\D/g, '')) || 0;
          return numA - numB;
        });
      availableImages = imageFiles.map(f => `/images/products/${product.id}/${f}`);
    }
  } catch (error) {
    console.error("Error reading image directory:", error);
  }

  // Fallback to the predefined images if directory read fails or is empty
  const finalImages = availableImages.length > 0 ? availableImages : product.images;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 pb-32">
      <Link href={`/products/category/${product.categoryId}`} className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-golden transition-colors mb-12 font-medium tracking-wide uppercase">
        <ArrowLeft size={18} /> BACK TO {categoryName}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Product Image Gallery */}
        <div className="lg:col-span-7">
          <div className="relative">
             <div className="absolute top-6 left-6 glass-golden px-5 py-2 rounded-full font-bold shadow-sm z-20">
              {categoryName}
            </div>
            <ImageGallery images={finalImages} productName={product.name} />
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-5 flex flex-col pt-4">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">{product.name}</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
              Premium quality {product.name.toLowerCase()} sourced directly from trusted facilities in Vietnam.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our {product.name.toLowerCase()} is processed and packaged under strict international quality standards (ISO, HACCP, HALAL, BRC) to ensure the highest level of safety, freshness, and flavor for our global partners.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary-golden flex-shrink-0" size={24} />
              <div>
                <p className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-1">Origin</p>
                <p className="font-medium text-gray-900 text-lg">Vietnam</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Tag className="text-primary-golden flex-shrink-0" size={24} />
              <div>
                <p className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-1">Certifications</p>
                <p className="font-medium text-gray-900 text-lg">ISO, HACCP, HALAL, BRC</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-10">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Package className="text-gray-400" /> General Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
               <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-1">Quality</span>
                  <span className="font-medium text-gray-900">Export Standard</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-1">Packaging</span>
                  <span className="font-medium text-gray-900">As requested / OEM</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-1">Shelf Life</span>
                  <span className="font-medium text-gray-900">12 - 36 months</span>
                </div>
            </div>
          </div>

          <div className="mt-auto flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-primary-golden hover:bg-yellow-600 text-white py-4 rounded-full font-bold text-lg transition-all shadow-lg transform hover:-translate-y-1">
              Request a Quote
            </button>
            <a href="/documents/catalog.pdf" download className="flex-1 bg-transparent border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 py-4 rounded-full font-bold text-lg transition-all text-center flex items-center justify-center">
              Download Catalog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
