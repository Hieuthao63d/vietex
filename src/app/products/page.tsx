import ProductsCatalogueClient from "@/components/products/ProductsCatalogueClient";
import { API_BASE_URL } from "@/lib/api";

export default async function ProductsPage() {
  let products = [];
  try {
    const res = await fetch(`${API_BASE_URL}/api/products`, { next: { revalidate: 0 } });
    if (res.ok) {
      products = await res.json();
    }
  } catch (err) {
    console.error("Failed to fetch products", err);
  }

  return <ProductsCatalogueClient products={products} />;
}
