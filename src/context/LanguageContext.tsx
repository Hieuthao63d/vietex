"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@/locales/en.json";
import vi from "@/locales/vi.json";
import ko from "@/locales/ko.json";
import th from "@/locales/th.json";
import ms from "@/locales/ms.json";
import id from "@/locales/id.json";

export type Locale = "en" | "vi" | "ko" | "th" | "ms" | "id";

export interface LanguageOption {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", flag: "🇻🇳" },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷" },
  { code: "th", name: "Thai", nativeName: "ภาษาไทย", flag: "🇹🇭" },
  { code: "ms", name: "Malay", nativeName: "Bahasa Melayu", flag: "🇲🇾" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", flag: "🇮🇩" },
];

const dictionaries: Record<Locale, any> = { en, vi, ko, th, ms, id };

interface LanguageContextType {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  t: (path: string, defaultValue?: string) => string;
  getLocalizedProduct: (product: any) => {
    name: string;
    shortDescription: string;
    content: string;
    origin: string;
    quality: string;
    packaging: string;
    shelfLife: string;
  };
  getLocalizedCategoryName: (category: any) => string;
  getLocalizedCategoryDescription: (category: any) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    // Read from localStorage if available
    const saved = localStorage.getItem("vietex_locale") as Locale;
    if (saved && dictionaries[saved]) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("vietex_locale", newLocale);
    // Also set document lang attribute
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLocale;
    }
  };

  // Helper function to resolve nested keys like "nav.about"
  const t = (path: string, defaultValue?: string): string => {
    const keys = path.split(".");
    let current: any = dictionaries[locale] || dictionaries.en;
    
    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        // Fallback to English
        let fallbackCurrent: any = dictionaries.en;
        for (const fKey of keys) {
          if (fallbackCurrent && typeof fallbackCurrent === "object" && fKey in fallbackCurrent) {
            fallbackCurrent = fallbackCurrent[fKey];
          } else {
            return defaultValue || path;
          }
        }
        return typeof fallbackCurrent === "string" ? fallbackCurrent : defaultValue || path;
      }
    }

    return typeof current === "string" ? current : defaultValue || path;
  };

  // Helper function to resolve product translations from DB
  const getLocalizedProduct = (product: any) => {
    if (!product) {
      return {
        name: "",
        shortDescription: "",
        content: "",
        origin: "",
        quality: "",
        packaging: "",
        shelfLife: ""
      };
    }

    let trans = product.translations;
    if (typeof trans === "string") {
      try {
        trans = JSON.parse(trans);
      } catch (e) {
        trans = null;
      }
    }

    const locData = trans?.[locale];

    return {
      name: locData?.name || product.name || "",
      shortDescription: locData?.shortDescription || product.shortDescription || "",
      content: locData?.content || product.content || "",
      origin: locData?.origin || product.origin || "",
      quality: locData?.quality || product.quality || "",
      packaging: locData?.packaging || product.packaging || "",
      shelfLife: locData?.shelfLife || product.shelfLife || ""
    };
  };

  // Helper function to resolve category translations
  const getLocalizedCategoryName = (category: any) => {
    if (!category) return "";
    let trans = category.translations;
    if (typeof trans === "string") {
      try {
        trans = JSON.parse(trans);
      } catch (e) {
        trans = null;
      }
    }
    return trans?.[locale]?.name || category.name || "";
  };

  const getLocalizedCategoryDescription = (category: any) => {
    if (!category) return "";
    let trans = category.translations;
    if (typeof trans === "string") {
      try {
        trans = JSON.parse(trans);
      } catch (e) {
        trans = null;
      }
    }
    return trans?.[locale]?.description || category.description || "";
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, getLocalizedProduct, getLocalizedCategoryName, getLocalizedCategoryDescription }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
