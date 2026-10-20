"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Search, Bell, Settings, LayoutDashboard, Package, PackagePlus, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!isAuthorized) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] font-sans">
      {/* Sidebar */}
      <aside className="w-[260px] bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-primary-golden flex items-center justify-center text-white font-bold">V</div>
          <h2 className="text-xl font-bold text-gray-900">VietexDash</h2>
        </div>
        
        <div className="px-6 py-2 text-xs font-semibold text-gray-400 tracking-wider">APPLICATIONS</div>
        <nav className="flex-1 px-4 space-y-1 mt-2">
          <Link href="/admin" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${pathname === '/admin' ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-md shadow-green-500/30' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link href="/admin/products" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${pathname === '/admin/products' ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-md shadow-green-500/30' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
            <Package size={20} />
            <span className="font-medium">Products</span>
          </Link>
          <Link href="/admin/products/new" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${pathname === '/admin/products/new' ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-md shadow-green-500/30' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
            <PackagePlus size={20} />
            <span className="font-medium">Add Product</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl hover:bg-red-50 text-gray-500 hover:text-red-600 transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="bg-white/50 backdrop-blur-md sticky top-0 z-10 px-8 py-4 flex justify-between items-center border-b border-gray-100">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="text-gray-500 font-medium cursor-pointer flex items-center gap-1 hover:text-gray-900 transition-colors">
                EN <span className="text-[10px]">▼</span>
              </div>
              <div className="absolute top-full left-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                <div className="py-2">
                  <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm font-medium text-gray-800">English (EN)</div>
                  <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm font-medium text-gray-600">Tiếng Việt (VI)</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-white border border-gray-100 shadow-sm rounded-full py-2.5 pl-11 pr-4 focus:ring-2 focus:ring-green-500 outline-none text-sm transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-gray-400">
              <div className="relative cursor-pointer hover:text-gray-600 transition-colors">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">5</span>
              </div>
              <Settings size={20} className="cursor-pointer hover:text-gray-600 transition-colors" />
            </div>
            
            <div className="relative group">
              <div className="flex items-center gap-3 border-l border-gray-200 pl-6 cursor-pointer">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-200">
                  <img src="https://ui-avatars.com/api/?name=Admin&background=10B981&color=fff" alt="Avatar" />
                </div>
                <div className="text-sm hidden sm:flex items-center gap-1">
                  <div><span className="text-gray-500">Hello, </span><span className="font-semibold text-gray-800">Admin</span></div>
                  <span className="text-[10px] text-gray-400">▼</span>
                </div>
              </div>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                <div className="py-2">
                  <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm font-medium text-gray-700 flex items-center gap-2"><Settings size={16}/> Cài đặt</div>
                  <div className="border-t border-gray-100 my-1"></div>
                  <div onClick={handleLogout} className="px-4 py-2 hover:bg-red-50 cursor-pointer text-sm font-medium text-red-600 flex items-center gap-2"><LogOut size={16}/> Đăng xuất</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
