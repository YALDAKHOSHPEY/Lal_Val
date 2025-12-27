"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
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
      console.log("Error saving theme");
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
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16">
              <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-pink-200 dark:ring-pink-900/50 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 transition-all duration-300 group-hover:scale-105 group-hover:ring-pink-300 dark:group-hover:ring-pink-800">
                <Image
                  src="/images/Dumirror.png"
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
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                  دو میرور
                </span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                  | Duo Mirror
                </span>
              </div>
              <div className="text-[13px] text-gray-600 dark:text-gray-400 tracking-wide mt-1">
                where minds reflect
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-14">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-[15px] font-semibold text-gray-800 dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400 transition-colors py-2 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={handleThemeToggle}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              title={theme === "dark" ? "تغییر به تم روشن" : "تغییر به تم تیره"}
              aria-label="تغییر تم"
            >
              <div className="relative w-6 h-6">
                <div className={`absolute inset-0 transition-all duration-500 ${theme === "dark" ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}>
                  <div className="w-5 h-5 bg-yellow-400 rounded-full mx-auto"></div>
                  <div className="absolute top-0 left-1/2 w-0.5 h-2.5 bg-yellow-400 transform -translate-x-1/2 -translate-y-full"></div>
                  <div className="absolute top-1/2 right-0 w-2.5 h-0.5 bg-yellow-400 transform -translate-y-1/2 translate-x-full"></div>
                  <div className="absolute bottom-0 left-1/2 w-0.5 h-2.5 bg-yellow-400 transform -translate-x-1/2 translate-y-full"></div>
                  <div className="absolute top-1/2 left-0 w-2.5 h-0.5 bg-yellow-400 transform -translate-y-1/2 -translate-x-full"></div>
                </div>
                
                <div className={`absolute inset-0 transition-all duration-500 ${theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
                  <div className="w-5 h-5 bg-gray-300 rounded-full mx-auto"></div>
                  <div className="absolute top-0 right-1 w-4 h-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
                  <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-12 h-12 flex flex-col items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="منو"
            >
              <span className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 mb-2 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
              <span className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 mb-2 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800 pt-4 animate-fadeIn">
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3.5 px-4 text-[15px] font-medium text-gray-800 dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-900 rounded-xl transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <svg className="w-5 h-5 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
              
              <div className="border-t border-gray-300 dark:border-gray-700 my-4"></div>
              
              <button
                onClick={handleThemeToggle}
                className="w-full py-3.5 px-4 flex items-center justify-between bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white dark:bg-gray-900">
                    <div className="w-5 h-5">
                      {theme === "dark" ? (
                        <div className="w-4 h-4 bg-gray-300 rounded-full shadow-inner"></div>
                      ) : (
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">تغییر تم</span>
                </div>
                <span className="text-sm px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 font-medium">
                  {theme === "dark" ? "تیره 🌙" : "روشن ☀️"}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
      
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