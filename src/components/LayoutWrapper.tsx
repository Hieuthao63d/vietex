"use client";

import { usePathname } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingMessage from "@/components/FloatingMessage";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const isLogin = pathname?.startsWith("/login");
  const hideChrome = isAdmin || isLogin;

  return (
    <>
      {!hideChrome && <Navigation />}
      <main className={!hideChrome ? "min-h-screen pt-[116px]" : "min-h-screen bg-gray-50"}>
        {children}
      </main>
      {!hideChrome && <Footer />}
      {!hideChrome && <FloatingMessage />}
    </>
  );
}
