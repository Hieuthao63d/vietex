export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

/**
 * Helper to resolve image URLs whether they are external (Cloudinary),
 * static assets (/images/...), or uploaded files on the backend (/uploads/...).
 */
export function getImageUrl(url?: string | null): string {
  if (!url) return "/images/products/placeholder.png";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  if (url.startsWith("/") && !url.startsWith("/uploads")) {
    return url;
  }
  const cleanUrl = url.startsWith("/") ? url : `/${url}`;
  return `${API_BASE_URL}${cleanUrl}`;
}
