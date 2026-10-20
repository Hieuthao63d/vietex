"use client";

import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FloatingMessage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Social Icons Stack (Middle Right) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4">
        
        {/* LinkedIn */}
        <Link href="https://linkedin.com" target="_blank"
          className="group relative flex items-center justify-center w-12 h-12 bg-white border border-primary-golden/20 text-primary-golden rounded-full shadow-lg hover:shadow-xl hover:bg-primary-golden hover:text-white transition-all duration-300 hover:scale-110 animate-bounce"
          style={{ animationDuration: '3s', animationDelay: '0s' }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <span className="absolute right-14 bg-white/90 backdrop-blur-sm text-primary-golden border border-primary-golden/30 text-sm font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            LinkedIn
          </span>
        </Link>

        {/* Alibaba */}
        <Link href="https://alibaba.com" target="_blank"
          className="group relative flex items-center justify-center w-12 h-12 bg-white border border-primary-golden/20 text-primary-golden rounded-full shadow-lg hover:shadow-xl hover:bg-primary-golden hover:text-white transition-all duration-300 hover:scale-110 animate-bounce"
          style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}
        >
          <span className="font-black text-xl italic tracking-tighter">A</span>
          <span className="absolute right-14 bg-white/90 backdrop-blur-sm text-primary-golden border border-primary-golden/30 text-sm font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            Alibaba
          </span>
        </Link>

        {/* Zalo */}
        <Link href="https://zalo.me" target="_blank"
          className="group relative flex items-center justify-center w-12 h-12 bg-white border border-primary-golden/20 text-primary-golden rounded-full shadow-lg hover:shadow-xl hover:bg-primary-golden hover:text-white transition-all duration-300 hover:scale-110 animate-bounce"
          style={{ animationDuration: '2.8s', animationDelay: '1s' }}
        >
          <span className="font-bold text-[13px]">Zalo</span>
          <span className="absolute right-14 bg-white/90 backdrop-blur-sm text-primary-golden border border-primary-golden/30 text-sm font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            Zalo Chat
          </span>
        </Link>
        
        {/* Phone */}
        <Link href="tel:+84332671167"
          className="group relative flex items-center justify-center w-12 h-12 bg-white border border-primary-golden/20 text-primary-golden rounded-full shadow-lg hover:shadow-xl hover:bg-primary-golden hover:text-white transition-all duration-300 hover:scale-110 animate-bounce"
          style={{ animationDuration: '3.2s', animationDelay: '1.5s' }}
        >
          <Phone size={20} />
          <span className="absolute right-14 bg-white/90 backdrop-blur-sm text-primary-golden border border-primary-golden/30 text-sm font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            Hotline: +84 332 671 167
          </span>
        </Link>
      </div>

      {/* Chat Box (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 mb-4 w-72 md:w-80 border border-primary-golden/20 transform transition-all">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h3 className="font-bold text-gray-800">Chat with us</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800">×</button>
            </div>
            <p className="text-sm text-gray-600 mb-4">Hi there! How can we help you today?</p>
            <div className="flex gap-2">
              <input type="text" placeholder="Type your message..." className="w-full text-sm border rounded-full px-3 py-2 outline-none focus:border-primary-golden" />
              <button className="bg-primary-golden text-white p-2 rounded-full hover:bg-yellow-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
          </div>
        )}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary-golden hover:bg-yellow-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
        >
          <MessageCircle size={28} />
        </button>
      </div>
    </>
  );
}
