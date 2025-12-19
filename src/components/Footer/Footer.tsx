"use client";

import { useState, useEffect } from "react";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* درباره */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <div className="text-white font-bold text-lg">لل ول</div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">لل ول</h3>
                <p className="text-gray-600 dark:text-gray-400">طراحی سایت حرفه‌ای</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              ارائه خدمات طراحی و توسعه وب‌سایت با جدیدترین تکنولوژی‌ها و طراحی مدرن.
            </p>
          </div>

          {/* لینک‌ها */}
          <div>
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">لینک‌ها</h4>
            <div className="space-y-3">
              {['خانه', 'درباره ما', 'خدمات', 'نمونه کارها', 'تماس'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* تماس */}
          <div>
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">تماس</h4>
            <div className="space-y-3">
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                 info@lalval.com
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                   
              </div>
            </div>
          </div>
        </div>

        {/* خط جداکننده */}
        <div className="border-t border-gray-200 dark:border-gray-800 my-8"></div>

        {/* کپی رایت */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
             {new Date().getFullYear()} لل ول. تمامی حقوق محفوظ است.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">
              حریم خصوصی
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">
              شرایط استفاده
            </a>
          </div>
        </div>
        
        {/* دکمه بازگشت به بالا */}
        {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl transition-colors duration-200 flex items-center justify-center z-40"
            title="برگشت به بالا"
            aria-label="برگشت به بالا"
          >
            {/* فلش رو به بالا */}
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3"
              className="transform -translate-y-0.5"
            >
              <path d="M18 15l-6-6-6 6"/>
            </svg>
          </button>
        )}
      </div>
    </footer>
  );
}