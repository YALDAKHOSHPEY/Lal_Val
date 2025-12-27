"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // راه‌حل تم - با بررسی وجود window
  useEffect(() => {
    if (typeof window !== "undefined") {
      // اول بررسی ترجیح سیستم
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      // سپس بررسی localStorage
      try {
        const saved = localStorage.getItem("theme");
        if (saved === "dark" || saved === "light") {
          setTheme(saved);
          document.documentElement.className = saved === "dark" ? "dark" : "";
        } else if (prefersDark) {
          setTheme("dark");
          document.documentElement.className = "dark";
        }
      } catch {
        if (prefersDark) {
          setTheme("dark");
          document.documentElement.className = "dark";
        }
      }
    }
  }, []);

  // تابع تغییر تم
  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    try {
      localStorage.setItem("theme", newTheme);
    } catch (e) {
      console.log("خطا در ذخیره تم");
    }
  };

  const navItems = [
    { href: "/", label: "خانه" },
    { href: "/about", label: "درباره" },
    { href: "/services", label: "خدمات" },
    { href: "/portfolio", label: "نمونه‌کارها" },
    { href: "/contact", label: "تماس" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* لوگو جدید با عکس */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16">
              <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-pink-200 dark:ring-pink-900/50 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 transition-all duration-300 group-hover:scale-105 group-hover:ring-pink-300 dark:group-hover:ring-pink-800">
                <Image
                  src="/images/Dumirror.png" // آدرس عکس لوگو PNG
                  alt="Duo Mirror - دو میرور"
                  width={64}
                  height={64}
                  className="object-contain"
                  priority
                  style={{
                    backgroundColor: 'transparent'
                  }}
                />
              </div>
            </div>
            
            {/* متن برند - نسخه جدید */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                {/* نام فارسی درشت */}
                <span className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                  دو میرور
                </span>
                {/* نام انگلیسی کوچکتر */}
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                  | Duo Mirror
                </span>
              </div>
              <div className="text-[13px] text-gray-600 dark:text-gray-400 tracking-wide mt-1">
                where minds reflect
              </div>
            </div>
          </Link>

          {/* منو اصلی */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* دکمه‌های کناری */}
          <div className="flex items-center gap-3">
            {/* دکمه CTA */}
            <Link 
              href="/contact" 
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>شروع همکاری</span>
            </Link>
            
            {/* دکمه تم - ساده و واضح */}
            <button
              onClick={handleThemeToggle}
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              title={theme === "dark" ? "تغییر به تم روشن" : "تغییر به تم تیره"}
              aria-label="تغییر تم"
            >
              {/* آیکون تم */}
              <div className="relative w-5 h-5">
                {/* خورشید */}
                <div className={`absolute inset-0 transition-all duration-500 ${theme === "dark" ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full mx-auto"></div>
                  <div className="absolute top-0 left-1/2 w-0.5 h-2 bg-yellow-400 transform -translate-x-1/2 -translate-y-full"></div>
                  <div className="absolute top-1/2 right-0 w-2 h-0.5 bg-yellow-400 transform -translate-y-1/2 translate-x-full"></div>
                  <div className="absolute bottom-0 left-1/2 w-0.5 h-2 bg-yellow-400 transform -translate-x-1/2 translate-y-full"></div>
                  <div className="absolute top-1/2 left-0 w-2 h-0.5 bg-yellow-400 transform -translate-y-1/2 -translate-x-full"></div>
                </div>
                
                {/* ماه */}
                <div className={`absolute inset-0 transition-all duration-500 ${theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
                  <div className="w-4 h-4 bg-gray-300 rounded-full mx-auto"></div>
                  <div className="absolute top-0 right-1 w-3 h-3 bg-gradient-to-br from-gray-900 to-gray-800 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
                  <div className="absolute bottom-1 left-1 w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </button>
            
            {/* دکمه منوی موبایل */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-11 h-11 flex flex-col items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="منو"
            >
              <span className={`w-5 h-0.5 bg-gray-700 dark:bg-gray-300 mb-1.5 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`w-5 h-0.5 bg-gray-700 dark:bg-gray-300 mb-1.5 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
          </div>
        </div>

        {/* منوی موبایل */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800 pt-4 animate-fadeIn">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-900 rounded-xl transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
              
              <div className="border-t border-gray-300 dark:border-gray-700 my-3"></div>
              
              {/* بخش تم در موبایل */}
              <button
                onClick={handleThemeToggle}
                className="w-full py-3 px-4 flex items-center justify-between bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-gray-900">
                    <div className="w-4 h-4">
                      {theme === "dark" ? (
                        <div className="w-3 h-3 bg-gray-300 rounded-full shadow-inner"></div>
                      ) : (
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">تغییر تم</span>
                </div>
                <span className="text-sm px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                  {theme === "dark" ? "تیره 🌙" : "روشن ☀️"}
                </span>
              </button>
              
              {/* دکمه CTA در موبایل */}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl text-center hover:from-pink-600 hover:to-purple-700 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                شروع پروژه
              </Link>
            </div>
          </div>
        )}
      </div>
      
      {/* استایل‌های انیمیشن */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};