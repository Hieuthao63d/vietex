import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import SmoothScroller from "@/components/SmoothScroller";
import GlobalAnimations from "@/components/animations/GlobalAnimations";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Vietex | Your dedicated partner for Vietnamese exports",
  description: "We connect vetted farms and processing facilities across Vietnam with importers worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        <LanguageProvider>
          <SmoothScroller>
            <GlobalAnimations />
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
          </SmoothScroller>
        </LanguageProvider>
      </body>
    </html>
  );
}
