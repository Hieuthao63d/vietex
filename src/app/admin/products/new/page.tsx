"use client";

import { useState } from "react";
import { Upload, Plus, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { API_BASE_URL } from "@/lib/api";

export default function NewProductPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  
  // Form state
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [content, setContent] = useState("");
  const [sku, setSku] = useState("");
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  
  // Custom fields
  const [origin, setOrigin] = useState("Vietnam");
  const [certifications, setCertifications] = useState("ISO, HACCP, HALAL, BRC");
  const [quality, setQuality] = useState("Export Standard");
  const [packaging, setPackaging] = useState("As requested / OEM");
  const [shelfLife, setShelfLife] = useState("12 - 36 months");

  // Local SEO state
  const [ward, setWard] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [rating, setRating] = useState("");
  const [reviewCount, setReviewCount] = useState("");
  
  // Q&A State (simplified)
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [author, setAuthor] = useState("");
  const [likes, setLikes] = useState("0");
  
  // Files
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [status, setStatus] = useState("PUBLISHED");

  const [selectedTab, setSelectedTab] = useState<"en" | "vi" | "ko" | "th" | "ms" | "id">("en");
  const [translations, setTranslations] = useState<Record<string, {
    name: string;
    shortDescription: string;
    content: string;
    origin: string;
    quality: string;
    packaging: string;
    shelfLife: string;
  }>>({
    en: { name: "", shortDescription: "", content: "", origin: "Vietnam", quality: "Export Standard", packaging: "As requested / OEM", shelfLife: "12 - 36 months" },
    vi: { name: "", shortDescription: "", content: "", origin: "Việt Nam", quality: "Tiêu chuẩn xuất khẩu", packaging: "Theo yêu cầu / OEM", shelfLife: "12 - 36 tháng" },
    ko: { name: "", shortDescription: "", content: "", origin: "베트남", quality: "수출 표준 규격", packaging: "바이어 맞춤 / OEM", shelfLife: "12 - 36개월" },
    th: { name: "", shortDescription: "", content: "", origin: "เวียดนาม", quality: "มาตรฐานส่งออก", packaging: "ตามสั่ง / OEM", shelfLife: "12 - 36 เดือน" },
    ms: { name: "", shortDescription: "", content: "", origin: "Vietnam", quality: "Piawaian Eksport", packaging: "Mengikut permintaan / OEM", shelfLife: "12 - 36 bulan" },
    id: { name: "", shortDescription: "", content: "", origin: "Vietnam", quality: "Standar Ekspor", packaging: "Sesuai pesanan / OEM", shelfLife: "12 - 36 bulan" },
  });

  const handleTranslationChange = (field: string, value: string) => {
    setTranslations(prev => ({
      ...prev,
      [selectedTab]: {
        ...(prev[selectedTab] || { name: "", shortDescription: "", content: "", origin: "", quality: "", packaging: "", shelfLife: "" }),
        [field]: value
      }
    }));

    if (selectedTab === "en") {
      if (field === "name") setName(value);
      if (field === "shortDescription") setShortDescription(value);
      if (field === "content") setContent(value);
      if (field === "origin") setOrigin(value);
      if (field === "quality") setQuality(value);
      if (field === "packaging") setPackaging(value);
      if (field === "shelfLife") setShelfLife(value);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles((prev) => [...prev, ...filesArray]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const token = localStorage.getItem("token");
    
    // Tạo cấu trúc Q&A Schema
    const qaSchema = question && answer ? [{
      question,
      answer,
      author,
      likes: parseInt(likes) || 0
    }] : null;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("slug", slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    formData.append("shortDescription", shortDescription);
    formData.append("content", content);
    formData.append("sku", sku);
    formData.append("brand", brand);
    formData.append("minPrice", minPrice);
    formData.append("maxPrice", maxPrice);
    formData.append("status", status);
    
    formData.append("origin", origin);
    formData.append("certifications", certifications);
    formData.append("quality", quality);
    formData.append("packaging", packaging);
    formData.append("shelfLife", shelfLife);

    formData.append("ward", ward);
    formData.append("city", city);
    formData.append("zipCode", zipCode);
    formData.append("rating", rating);
    formData.append("reviewCount", reviewCount);
    
    if (qaSchema) {
      formData.append("qaSchema", JSON.stringify(qaSchema));
    }

    formData.append("translations", JSON.stringify(translations));

    selectedFiles.forEach(file => {
      formData.append("images", file);
    });

    try {
      const res = await fetch(`${API_BASE_URL}/api/products`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        body: formData, // Không set Content-Type vì browser sẽ tự tạo boundary cho multipart/form-data
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error saving product");
      
      setMessage("✅ Product added successfully!");
      // Có thể reset form ở đây nếu cần
    } catch (error: any) {
      setMessage(`❌ ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto pb-20">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/products" className="p-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Add New Post / Product</h1>
      </div>

      {message && (
        <div className={`p-4 mb-6 rounded-lg font-medium ${message.includes("✅") ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
        {/* Cột trái (Nội dung chính) */}
        <div className="flex-1 space-y-6">
          {/* Language Tabs Selector */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between gap-4 overflow-x-auto">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-1">Language:</span>
              {[
                { code: "en", label: "🇬🇧 English" },
                { code: "vi", label: "🇻🇳 Tiếng Việt" },
                { code: "ko", label: "🇰🇷 한국어" },
                { code: "th", label: "🇹🇭 ภาษาไทย" },
                { code: "ms", label: "🇲🇾 Melayu" },
                { code: "id", label: "🇮🇩 Indonesia" }
              ].map(tab => (
                <button
                  key={tab.code}
                  type="button"
                  onClick={() => setSelectedTab(tab.code as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    selectedTab === tab.code
                      ? "bg-dark-green text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <span className="text-[11px] font-semibold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-200 whitespace-nowrap">
              Entering: <span className="uppercase text-primary-golden font-bold">{selectedTab}</span>
            </span>
          </div>

          {/* Tiêu đề & Nội dung */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Product Title ({selectedTab.toUpperCase()})
              </label>
              <input
                type="text"
                required={selectedTab === "en"}
                placeholder={`Enter product name in ${selectedTab.toUpperCase()}...`}
                className="w-full text-2xl font-bold border-b border-gray-200 pb-2 focus:border-primary-golden outline-none placeholder:text-gray-300"
                value={translations[selectedTab]?.name || ""}
                onChange={(e) => handleTranslationChange("name", e.target.value)}
              />
            </div>
            
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Detailed Description ({selectedTab.toUpperCase()})
              </label>
              <textarea
                placeholder={`Product detailed description in ${selectedTab.toUpperCase()}...`}
                rows={8}
                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-primary-golden outline-none resize-y"
                value={translations[selectedTab]?.content || ""}
                onChange={(e) => handleTranslationChange("content", e.target.value)}
              />
            </div>
          </div>

          {/* General Specifications */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 font-bold text-gray-700 flex justify-between items-center">
              <span>General Specifications ({selectedTab.toUpperCase()})</span>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Origin</label>
                <input 
                  type="text" 
                  className="w-full border rounded p-2 text-sm outline-none" 
                  value={translations[selectedTab]?.origin || ""} 
                  onChange={(e) => handleTranslationChange("origin", e.target.value)} 
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Certifications (Global)</label>
                <input type="text" className="w-full border rounded p-2 text-sm outline-none" value={certifications} onChange={(e) => setCertifications(e.target.value)} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Quality</label>
                <input 
                  type="text" 
                  className="w-full border rounded p-2 text-sm outline-none" 
                  value={translations[selectedTab]?.quality || ""} 
                  onChange={(e) => handleTranslationChange("quality", e.target.value)} 
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Packaging</label>
                <input 
                  type="text" 
                  className="w-full border rounded p-2 text-sm outline-none" 
                  value={translations[selectedTab]?.packaging || ""} 
                  onChange={(e) => handleTranslationChange("packaging", e.target.value)} 
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Shelf Life</label>
                <input 
                  type="text" 
                  className="w-full border rounded p-2 text-sm outline-none" 
                  value={translations[selectedTab]?.shelfLife || ""} 
                  onChange={(e) => handleTranslationChange("shelfLife", e.target.value)} 
                />
              </div>
            </div>
          </div>

          {/* Cấu hình Sản Phẩm */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 font-bold text-gray-700 flex justify-between items-center">
              <span>Product Configuration (Schema)</span>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">URL Slug</label>
                <input type="text" className="w-full border rounded p-2 text-sm outline-none" value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="auto-generated-if-empty" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Short Description ({selectedTab.toUpperCase()})</label>
                <input 
                  type="text" 
                  className="w-full border rounded p-2 text-sm outline-none" 
                  value={translations[selectedTab]?.shortDescription || ""} 
                  onChange={(e) => handleTranslationChange("shortDescription", e.target.value)} 
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">SKU</label>
                <input type="text" className="w-full border rounded p-2 text-sm outline-none" value={sku} onChange={(e) => setSku(e.target.value)} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Brand</label>
                <input type="text" className="w-full border rounded p-2 text-sm outline-none" value={brand} onChange={(e) => setBrand(e.target.value)} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Min Price</label>
                <input type="number" className="w-full border rounded p-2 text-sm outline-none" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Max Price</label>
                <input type="number" className="w-full border rounded p-2 text-sm outline-none" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
              </div>
            </div>
          </div>

          {/* Q&A Schema */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 font-bold text-gray-700">
              <span>FAQ / Q&A SCHEMA</span>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Question</label>
                <input type="text" className="w-full border rounded p-2 text-sm outline-none" value={question} onChange={(e) => setQuestion(e.target.value)} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Author Name</label>
                <input type="text" className="w-full border rounded p-2 text-sm outline-none" value={author} onChange={(e) => setAuthor(e.target.value)} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Upvotes</label>
                <input type="number" className="w-full border rounded p-2 text-sm outline-none" value={likes} onChange={(e) => setLikes(e.target.value)} />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Answer</label>
                <textarea rows={3} className="w-full border rounded p-2 text-sm outline-none resize-y" value={answer} onChange={(e) => setAnswer(e.target.value)} />
              </div>
            </div>
          </div>

          {/* Local SEO */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 font-bold text-gray-700">
              <span>LOCAL SEO & REVIEW SCHEMA</span>
            </div>
            <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-2 md:col-span-4">
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Ward / District</label>
                <input type="text" className="w-full border rounded p-2 text-sm outline-none" value={ward} onChange={(e) => setWard(e.target.value)} />
              </div>
              <div className="col-span-2">
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">City / Province</label>
                <input type="text" className="w-full border rounded p-2 text-sm outline-none" value={city} onChange={(e) => setCity(e.target.value)} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Zip Code</label>
                <input type="text" className="w-full border rounded p-2 text-sm outline-none" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Rating (1-5)</label>
                <input type="number" step="0.1" className="w-full border rounded p-2 text-sm outline-none" value={rating} onChange={(e) => setRating(e.target.value)} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Total Reviews</label>
                <input type="number" className="w-full border rounded p-2 text-sm outline-none" value={reviewCount} onChange={(e) => setReviewCount(e.target.value)} />
              </div>
            </div>
          </div>

          {/* Masonry Gallery */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 font-bold text-gray-700 flex justify-between items-center">
              <span>Masonry Gallery (Product Images)</span>
            </div>
            <div className="p-4">
              <label className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                <Upload className="text-gray-400 mb-2" size={32} />
                <span className="text-sm text-gray-500">Click to upload images (Max 10 images)</span>
                <input 
                  type="file" 
                  multiple 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleFileChange}
                />
              </label>

              {selectedFiles.length > 0 && (
                <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                  {selectedFiles.map((file, idx) => (
                    <div key={idx} className="relative group aspect-square rounded-lg border border-gray-200 overflow-hidden bg-gray-100">
                      <img src={URL.createObjectURL(file)} alt="preview" className="w-full h-full object-cover" />
                      <button 
                        type="button" 
                        onClick={() => removeFile(idx)}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Cột phải (Sidebar Đăng) */}
        <div className="w-full lg:w-72 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-6">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 font-bold text-gray-700">
              Publish
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Status: 
                <select 
                  className="bg-transparent font-semibold outline-none cursor-pointer"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="PUBLISHED">Published</option>
                  <option value="DRAFT">Draft</option>
                </select>
              </div>

              <div className="flex gap-2 pt-2">
                <button type="button" className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50">
                  Save Draft
                </button>
                <button type="button" className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50">
                  Preview
                </button>
              </div>
              
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full py-3 bg-gray-900 text-white rounded-lg font-bold hover:bg-black transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Saving...' : 'Publish'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
