import { getCategoryById } from "@/data/products";
import { notFound } from "next/navigation";
import CategoryPageClient from "@/components/products/CategoryPageClient";
import { API_BASE_URL } from "@/lib/api";

export default async function CategoryPage({ params }: { params: Promise<{ categoryId: string }> }) {
  const { categoryId } = await params;
  
  const category = getCategoryById(categoryId);
  if (!category) {
    notFound();
  }

  let products = [];
  try {
    const res = await fetch(`${API_BASE_URL}/api/products`, { next: { revalidate: 0 } });
    if (res.ok) {
      const allProducts = await res.json();
      products = allProducts.filter((p: any) => p.category?.slug === categoryId);
    }
  } catch (err) {
    console.error("Failed to fetch products", err);
  }

  return <CategoryPageClient category={category} products={products} />;
}
