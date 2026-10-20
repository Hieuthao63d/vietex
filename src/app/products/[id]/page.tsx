import { notFound } from "next/navigation";
import ProductDetailClient from "@/components/products/ProductDetailClient";
import { API_BASE_URL, getImageUrl } from "@/lib/api";

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Fetch from the backend API directly using the slug (id)
  let product = null;
  try {
    const res = await fetch(`${API_BASE_URL}/api/products/${id}`, { next: { revalidate: 0 } });
    if (res.ok) {
      product = await res.json();
    }
  } catch (err) {
    console.error("Failed to fetch product from backend", err);
  }
  
  if (!product) {
    notFound();
  }

  // Map API images
  const finalImages = product.images && product.images.length > 0
    ? product.images.map((img: any) => getImageUrl(img.imageUrl))
    : ["/images/products/placeholder.png"];

  return <ProductDetailClient product={product} finalImages={finalImages} />;
}
