import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingMessage from "@/components/FloatingMessage";

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
        <Navigation />
        <main className="min-h-screen pt-[116px]">
          {children}
        </main>
        <Footer />
        <FloatingMessage />
      </body>
    </html>
  );
}
