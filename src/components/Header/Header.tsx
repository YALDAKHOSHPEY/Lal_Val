"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { href: "/", label: "خانه" },
    { href: "/about", label: "درباره ما" },
    { href: "/services", label: "خدمات" },
    { href: "/portfolio", label: "نمونه کارها" },
    { href: "/contact", label: "تماس" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* لوگو */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-xl">
              <span className="text-white font-bold text-lg">لل ول</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-gray-900 dark:text-white">استودیو طراحی سایت</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">طراحی وب‌سایت حرفه‌ای</div>
            </div>
          </Link>

          {/* منوی دسکتاپ - کاملاً بازسازی شده */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 transition-colors duration-200"
                >
                  {item.label}
                </Link>
                {/* خط زیرین */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </nav>

          {/* دکمه‌ها */}
          <div className="flex items-center gap-4">
            {/* دکمه تماس */}
            <Link 
              href="/contact" 
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              <span></span>
              <span>تماس با ما</span>
            </Link>
            
            {/* دکمه تغییر تم - فقط متن */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              <span className="text-gray-700 dark:text-gray-300">
                {theme === "dark" ? "روشن" : "تیره"}
              </span>
              <span className="text-lg">
                {theme === "dark" ? "" : ""}
              </span>
            </button>
            
            {/* منو همبرگری */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-12 h-12 flex flex-col items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800"
              aria-label="منو"
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* منوی موبایل */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 space-y-3">
              {/* آیتم‌های منو */}
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between p-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
                >
                  <span>{item.label}</span>
                  <span></span>
                </Link>
              ))}
              
              {/* خط جداکننده */}
              <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
              
              {/* دکمه تغییر تم در موبایل */}
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">
                    {theme === "dark" ? "" : ""}
                  </span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    تغییر تم
                  </span>
                </div>
                <span className="text-gray-600 dark:text-gray-400 font-medium">
                  {theme === "dark" ? "حالت تیره" : "حالت روشن"}
                </span>
              </button>
              
              {/* دکمه تماس در موبایل */}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-center font-medium flex items-center justify-center gap-2"
              >
                <span></span>
                <span>تماس با ما</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};