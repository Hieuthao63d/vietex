import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0D1C12] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Logo & Info */}
          <div>
            <Link href="/" className="inline-block mb-6 relative h-20 w-56 -ml-2">
              <Image src="/logo2.jpg" alt="Vietex Logo" fill className="object-contain object-left" />
            </Link>
            <p className="text-primary-golden font-serif italic text-xl mb-6">
              Sourced with Heart, Shared with Pride.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              A Hanoi-based export partner connecting vetted Vietnamese farms and factories with importers, distributors and food businesses around the world.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-6">Explore</h4>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-4 text-sm text-gray-300">
                <li><Link href="/about" className="hover:text-white transition-colors">About Vietex</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Product catalogue</Link></li>
                <li><Link href="/sourcing" className="hover:text-white transition-colors">Supply chain</Link></li>
                <li><Link href="/logistics" className="hover:text-white transition-colors">Export & logistics</Link></li>
              </ul>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><Link href="/how-we-work" className="hover:text-white transition-colors">How we work</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/csr/policy" className="hover:text-white transition-colors">CSR Policy</Link></li>
                <li><Link href="/csr/community" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link href="/business-partner" className="hover:text-white transition-colors">Partner with us</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Get in touch */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-6">Get in touch</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="mailto:henry.nguyen@vietex-global.com" className="hover:text-white transition-colors">henry.nguyen@vietex-global.com</a></li>
              <li>+84 366 842 600</li>
              <li className="leading-relaxed max-w-[250px]">
                56C Alley 406 Au Co Street,<br />
                Hong Ha Ward, Hanoi, Vietnam
              </li>
              <li><Link href="https://vietex-global.com" className="hover:text-white transition-colors">vietex-global.com</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Vietex Global. All rights reserved.</p>
          <p className="flex gap-2 items-center">
            Poland (EU) <span className="text-primary-golden">•</span> UAE (GCC) <span className="text-primary-golden">•</span> Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
