'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Menu, X, Home, Briefcase, Image, User, Phone, MessageSquare } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const menuItems = [
    { title: 'خانه', href: '/', icon: <Home className="w-5 h-5" /> },
    { title: 'خدمات', href: '/services', icon: <Briefcase className="w-5 h-5" /> },
    { title: 'نمونه کارها', href: '/portfolio', icon: <Image className="w-5 h-5" /> },
    { title: 'درباره ما', href: '/about', icon: <User className="w-5 h-5" /> },
    { title: 'تماس', href: '/contact', icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* دسکتاپ */}
      <div className="hidden md:flex items-center space-x-6 space-x-reverse">
        <nav className="flex items-center space-x-6 space-x-reverse">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <ThemeToggle />

        <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          مشاوره رایگان
        </button>
      </div>

      {/* موبایل */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="منو"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* منوی موبایل */}
      {isOpen && (
        <>
          <div 
            className="md:hidden fixed inset-0 z-40 bg-black/50"
            onClick={() => setIsOpen(false)}
          ></div>
          
          <div className="md:hidden fixed top-0 right-0 h-full w-64 z-50 bg-white dark:bg-gray-900 shadow-xl">
            
            <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-800 dark:text-white">منو</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 bg-white dark:bg-gray-900"
                >
                  <X className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                </button>
              </div>
            </div>
            
            <div className="p-4 space-y-4 bg-white dark:bg-gray-900">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="text-gray-600 dark:text-gray-400">
                    {item.icon}
                  </div>
                  <span className="text-gray-800 dark:text-gray-200">{item.title}</span>
                </a>
              ))}
              
              <div className="border-t border-gray-300 dark:border-gray-700 my-2"></div>
              
              <div className="p-3 flex items-center justify-between bg-white dark:bg-gray-900 rounded-lg">
                <span className="text-gray-800 dark:text-gray-200">تغییر تم</span>
                <ThemeToggle />
              </div>
              
              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4" />
                مشاوره رایگان
              </button>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
              <p className="text-center text-xs text-gray-700 dark:text-gray-300">
                لل ول  
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
