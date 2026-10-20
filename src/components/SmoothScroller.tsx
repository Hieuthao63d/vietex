"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Khởi tạo Lenis với cấu hình lerp: 0.1 để có quán tính mượt mà
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // 2. Đồng bộ Lenis với GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // 3. Gắn Lenis vào vòng lặp ticker của GSAP thay vì dùng requestAnimationFrame mặc định
    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);

    // 4. Tắt tính năng lagSmoothing của GSAP để tránh xung đột với Lenis
    gsap.ticker.lagSmoothing(0);

    // 5. Cleanup khi unmount
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
