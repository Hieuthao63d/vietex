"use client";

import { useState, useEffect } from "react";
import { Upload, Trash2, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { API_BASE_URL, getImageUrl } from "@/lib/api";

export default function EditProductPage() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
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
  
  // Q&A State
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [author, setAuthor] = useState("");
  const [likes, setLikes] = useState("0");
  
  // Files
  const [existingImages, setExistingImages] = useState<{ id: string, imageUrl: string }[]>([]);
  const [deletedImageIds, setDeletedImageIds] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [status, setStatus] = useState("PUBLISHED");

  const moveImage = (index: number, direction: 'left' | 'right') => {
    const newImages = [...existingImages];
    if (direction === 'left' && index > 0) {
      [newImages[index - 1], newImages[index]] = [newImages[index], newImages[index - 1]];
    } else if (direction === 'right' && index < newImages.length - 1) {
      [newImages[index + 1], newImages[index]] = [newImages[index], newImages[index + 1]];
    }
    setExistingImages(newImages);
  };

  const removeExistingImage = (id: string) => {
    setExistingImages(prev => prev.filter(img => img.id !== id));
    setDeletedImageIds(prev => [...prev, id]);
  };

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

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.id) {
          setName(data.name || "");
          setSlug(data.slug || "");
          setShortDescription(data.shortDescription || "");
          setContent(data.content || "");
          setSku(data.sku || "");
          setBrand(data.brand || "");
          setMinPrice(data.minPrice || "");
          setMaxPrice(data.maxPrice || "");
          setStatus(data.status || "PUBLISHED");
          
          setOrigin(data.origin || "Vietnam");
          setCertifications(data.certifications || "ISO, HACCP, HALAL, BRC");
          setQuality(data.quality || "Export Standard");
          setPackaging(data.packaging || "As requested / OEM");
          setShelfLife(data.shelfLife || "12 - 36 months");

          if (data.translations) {
            const parsed = typeof data.translations === 'string' ? JSON.parse(data.translations) : data.translations;
            setTranslations(prev => ({
              ...prev,
              ...parsed,
              en: parsed.en || {
                name: data.name || "",
                shortDescription: data.shortDescription || "",
                content: data.content || "",
                origin: data.origin || "Vietnam",
                quality: data.quality || "Export Standard",
                packaging: data.packaging || "As requested / OEM",
                shelfLife: data.shelfLife || "12 - 36 months"
              }
            }));
          } else {
            setTranslations(prev => ({
              ...prev,
              en: {
                name: data.name || "",
                shortDescription: data.shortDescription || "",
                content: data.content || "",
                origin: data.origin || "Vietnam",
                quality: data.quality || "Export Standard",
                packaging: data.packaging || "As requested / OEM",
                shelfLife: data.shelfLife || "12 - 36 months"
              }
            }));
          }

          setExistingImages(data.images || []);

          if (data.seo) {
            setWard(data.seo.ward || "");
            setCity(data.seo.city || "");
            setZipCode(data.seo.zipCode || "");
            setRating(data.seo.rating || "");
            setReviewCount(data.seo.reviewCount?.toString() || "0");
            
            if (data.seo.qaSchema && data.seo.qaSchema.length > 0) {
              const qa = data.seo.qaSchema[0];
              setQuestion(qa.question || "");
              setAnswer(qa.answer || "");
              setAuthor(qa.author || "");
              setLikes(qa.likes?.toString() || "0");
            }
          }
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, [id]);

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
    setIsSaving(true);
    setMessage("");

    const token = localStorage.getItem("token");
    
    const qaSchema = question && answer ? [{
      question,
      answer,
      author,
      likes: parseInt(likes) || 0
    }] : null;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("slug", slug);
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

    // Pass the new order of existing images and deleted ones
    const reorderedIds = existingImages.map(img => img.id);
    formData.append("reorderedImageIds", JSON.stringify(reorderedIds));
    formData.append("deletedImageIds", JSON.stringify(deletedImageIds));

    selectedFiles.forEach(file => {
      formData.append("images", file);
    });

    try {
      const res = await fetch(`${API_BASE_URL}/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error updating product");
      
      setMessage("✅ Product updated successfully!");
      
      // Update existing images array with new data if any returned
      if (data.product && data.product.images) {
         setExistingImages(data.product.images);
         setSelectedFiles([]); // clear selected
      }

    } catch (error: any) {
      setMessage(`❌ ${error.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="p-8">Loading product data...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto pb-20">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/products" className="p-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Edit Product</h1>
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
              Editing: <span className="uppercase text-primary-golden font-bold">{selectedTab}</span>
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
                required
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
                <input type="text" className="w-full border rounded p-2 text-sm outline-none" value={slug} onChange={(e) => setSlug(e.target.value)} />
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

          {/* Local SEO & Q&A */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
             <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 font-bold text-gray-700">
              <span>SEO SCHEMA</span>
            </div>
            <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-2">
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Quận/Huyện</label>
                <input type="text" className="w-full border rounded p-2 text-sm outline-none" value={ward} onChange={(e) => setWard(e.target.value)} />
              </div>
              <div className="col-span-2">
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Tỉnh/Thành</label>
                <input type="text" className="w-full border rounded p-2 text-sm outline-none" value={city} onChange={(e) => setCity(e.target.value)} />
              </div>
            </div>
          </div>

          {/* Masonry Gallery */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 font-bold text-gray-700 flex justify-between items-center">
              <span>Product Images</span>
            </div>
            <div className="p-4">
              {/* Ảnh đã có trên server */}
              {existingImages.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3">Current Images (Drag/Click arrows to sort):</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {existingImages.map((img, index) => (
                      <div key={img.id} className="relative group aspect-square rounded-lg border border-gray-200 overflow-hidden">
                        <img 
                          src={getImageUrl(img.imageUrl)} 
                          alt="product" 
                          className="w-full h-full object-cover" 
                        />
                        
                        {index === 0 && (
                          <div className="absolute top-2 left-2 bg-primary-golden text-white text-xs font-bold px-2 py-1 rounded shadow-md z-10">
                            Cover Image
                          </div>
                        )}

                        {/* Overlay Controls */}
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            type="button" 
                            onClick={() => moveImage(index, 'left')}
                            disabled={index === 0}
                            className="p-1.5 bg-white rounded text-gray-800 disabled:opacity-50 hover:bg-gray-200 transition-colors"
                            title="Move Left"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          
                          <button 
                            type="button" 
                            onClick={() => removeExistingImage(img.id)}
                            className="p-1.5 bg-red-500 rounded text-white hover:bg-red-600 transition-colors"
                            title="Delete this image"
                          >
                            <Trash2 size={20} />
                          </button>
                          
                          <button 
                            type="button" 
                            onClick={() => moveImage(index, 'right')}
                            disabled={index === existingImages.length - 1}
                            className="p-1.5 bg-white rounded text-gray-800 disabled:opacity-50 hover:bg-gray-200 transition-colors"
                            title="Move Right"
                          >
                            <ChevronRight size={20} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Upload ảnh mới (Thêm) */}
              <label className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                <Upload className="text-gray-400 mb-2" size={32} />
                <span className="text-sm text-gray-500">Upload new images</span>
                <input 
                  type="file" 
                  multiple 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleFileChange}
                />
              </label>

              {selectedFiles.length > 0 && (
                <div className="mt-4 grid grid-cols-4 gap-4">
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

              <button 
                type="submit" 
                disabled={isSaving}
                className="w-full py-3 bg-gray-900 text-white rounded-lg font-bold hover:bg-black transition-colors disabled:opacity-50"
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

