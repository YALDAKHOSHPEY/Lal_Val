'use client';

import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* لوگو */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">LV</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-800 dark:text-white">لل ول</span>
              <span className="block text-xs text-gray-500 dark:text-gray-400">Lal Val Studio</span>
            </div>
          </div>

          {/* فقط Navbar - بقیه دکمهها توشن */}
          <Navbar />
        </div>
      </div>
    </header>
  );
}
