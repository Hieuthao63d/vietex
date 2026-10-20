"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomeAnimations({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Hero Checkpoints Entrance (Slide up and fade)
    gsap.from("section:nth-of-type(1) .max-w-7xl > div", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.5
    });

    // 2. Who We Are (About Section) ScrollTrigger
    gsap.from("section:nth-of-type(2) .grid > div:first-child", {
      scrollTrigger: {
        trigger: "section:nth-of-type(2)",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      },
      x: -50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
    
    gsap.from("section:nth-of-type(2) .grid > div:last-child", {
      scrollTrigger: {
        trigger: "section:nth-of-type(2)",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        toggleActions: "play reverse play reverse"
      },
      scale: 0.9,
      opacity: 0,
      ease: "none"
    });

    // 3. Our Expertise ScrollTrigger
    gsap.from("section:nth-of-type(3) .grid > div", {
      scrollTrigger: {
        trigger: "section:nth-of-type(3)",
        start: "top 75%",
        toggleActions: "play reverse play reverse"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.2)"
    });

    // 4. Products Catalogue ScrollTrigger
    gsap.from("section:nth-of-type(4) .grid > a", {
      scrollTrigger: {
        trigger: "section:nth-of-type(4)",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      },
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

  }, { scope: container });

  return <div ref={container} className="h-full">{children}</div>;
}
