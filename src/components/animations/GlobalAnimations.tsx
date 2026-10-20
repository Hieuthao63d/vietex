"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GlobalAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // Không chạy trên trang chủ (đã có HomeAnimations) hoặc admin/login
    if (pathname === '/' || pathname.startsWith('/admin') || pathname.startsWith('/login')) {
      return;
    }

    // Đợi 1 chút để DOM của trang mới render xong
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Gom nhóm các phần tử cần hiệu ứng xuất hiện dựa theo className chuẩn của layout
        const selectors = [
          "main .max-w-4xl > div", // FAQ
          "main .max-w-5xl > div", // About
          "main .max-w-7xl > .mb-16", // Products header
          "main .space-y-24 > div", // Products & CSR rows
          "main .w-full > div", // Sourcing, CSR, Logistics...
        ];

        // Lấy tất cả các elements
        const elements = gsap.utils.toArray(selectors.join(", "));

        // Lọc bớt các elements bị trùng lặp do phân cấp cha-con (tránh double animate)
        const uniqueElements = elements.filter((el: any) => {
          // Nếu phần tử này có một element cha cũng đang nằm trong mảng elements, thì bỏ qua nó
          // Ngoại trừ trường hợp nó thuộc class .space-y-24 > div
          const parentInList = elements.find((parent: any) => parent !== el && parent.contains(el));
          
          if (parentInList && !el.parentElement.classList.contains("space-y-24")) {
            return false;
          }
          return true;
        });

        // Áp dụng ScrollTrigger
        uniqueElements.forEach((el: any) => {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        });

        // HÌNH ẢNH: Hiệu ứng Cinematic Reveal (Zoom out từ từ khi cuộn tới)
        // Tìm các thẻ bọc ảnh có overflow-hidden
        const imageContainers = gsap.utils.toArray("main .overflow-hidden");
        
        imageContainers.forEach((container: any) => {
          // Tìm thẻ img bên trong
          const img = container.querySelector("img");
          if (img) {
            gsap.fromTo(img, 
              { 
                scale: 1.3, // Bắt đầu zoom to
              },
              {
                scale: 1, // Thu nhỏ về bình thường
                scrollTrigger: {
                  trigger: container,
                  start: "top 95%",
                  end: "bottom 10%",
                  scrub: 1.5, // Gắn với scroll để siêu mượt
                  toggleActions: "play reverse play reverse",
                },
                ease: "power2.out"
              }
            );
          }
        });
        
        ScrollTrigger.refresh();
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
