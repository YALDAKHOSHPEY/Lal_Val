"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* برند */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {/* لوگو */}
              <div className="relative w-14 h-14">
                <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-pink-200 dark:ring-pink-900/50 ring-offset-1 ring-offset-white dark:ring-offset-gray-900">
                  <Image
                    src="/images/Dumirror.png"
                    alt="Duo Mirror - دو میرور"
                    width={56}
                    height={56}
                    className="object-contain"
                    style={{
                      backgroundColor: 'transparent'
                    }}
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">دو میرور</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Where minds reflect</p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md">
              هر ایده ای را مانند آینه دریافت کرده و آن را دوچندان میکنیم تا به واقعیتی زیبا تبدیل شود.
            </p>
          </div>

          {/* لینک ها */}
          <div>
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">دسترسی سریع</h4>
            <div className="space-y-2">
              {['خانه', 'درباره ما', 'خدمات', 'نمونه کارها', 'بلاگ', 'تماس'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="block text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* تماس */}
          <div>
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">ارتباط با ما</h4>
            <div className="space-y-3">
              {/* ایمیل */}
              <div>
                <div className="text-gray-800 dark:text-gray-200 text-xs font-medium mb-1">ایمیل</div>
                <a 
                  href="mailto:hello@duomirror.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 text-sm flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  missyaldatw.com
                </a>
              </div>
              
              {/* گیت هاب */}
              <div>
                <div className="text-gray-800 dark:text-gray-200 text-xs font-medium mb-1">گیت هاب</div>
                <a 
                  href="https://github.com/duomirror" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 text-sm flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  github.com/YALDAKHOSHPEY
                </a>
              </div>
              
              {/* اینستاگرام */}
              <div>
                <div className="text-gray-800 dark:text-gray-200 text-xs font-medium mb-1">اینستاگرام</div>
                <a 
                  href="https://instagram.com/yalda_twinn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 text-sm flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @yalda_twinn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* کپی رایت */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} دو میرور. تمامی حقوق محفوظ است.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 text-sm">
              حریم خصوصی
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 text-sm">
              شرایط استفاده
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 text-sm">
              کوکیها
            </a>
          </div>
        </div>
        
        {/* دکمه بازگشت به بالا */}
        {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="fixed bottom-4 left-4 md:bottom-6 md:left-6 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40 hover:scale-105"
            title="بازگشت به بالا"
            aria-label="بازگشت به بالا"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
              className="transform rotate-180"
            >
              <path d="M5 15l7-7 7 7"/>
            </svg>
          </button>
        )}
      </div>
    </footer>
  );
}