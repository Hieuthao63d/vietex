"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-gray-100 rounded-[2rem] flex items-center justify-center border border-gray-100">
        <span className="text-gray-400 font-medium">No image available</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      {/* Main Image View */}
      <div className="ag-gallery-container relative aspect-square w-full rounded-[2rem] overflow-hidden bg-[#FDF9F1] border border-[#E8DCC2]">
        
        {/* Sliding Band Wrapper */}
        <div 
          className="ag-wrapper flex h-full transition-transform duration-500 ease-out"
          style={{ 
            width: `${images.length * 100}%`,
            transform: `translate3d(-${activeIndex * (100 / images.length)}%, 0, 0)`
          }}
        >
          {images.map((imgSrc, index) => (
            <div 
              key={index} 
              className={`ag-slide relative h-full w-full flex-shrink-0 ${index === activeIndex ? 'active' : ''}`}
              style={{ width: `${100 / images.length}%` }}
            >
              <Image 
                src={imgSrc}
                alt={`${productName} view ${index + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="ag-main-img object-cover drop-shadow-sm"
                priority={index === 0}
                unoptimized={process.env.NODE_ENV === 'development'}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm border border-gray-100 shadow-md flex items-center justify-center text-gray-700 hover:text-primary-golden transition-all z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm border border-gray-100 shadow-md flex items-center justify-center text-gray-700 hover:text-primary-golden transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails row */}
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar justify-center md:justify-start">
          {images.map((imgSrc, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative h-24 w-24 shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-300 bg-[#FDF9F1] ${
                activeIndex === index 
                  ? 'border-primary-golden shadow-md scale-105' 
                  : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-200'
              }`}
            >
              <Image 
                src={imgSrc}
                alt={`Thumbnail ${index + 1}`}
                fill
                sizes="96px"
                className="object-cover p-2"
                unoptimized={process.env.NODE_ENV === 'development'}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
