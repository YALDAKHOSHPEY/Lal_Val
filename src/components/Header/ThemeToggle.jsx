'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors border-2 border-gray-400 dark:border-gray-600"
      aria-label="تغییر تم"
    >
      <div
        className={`
          w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-transform duration-300
          flex items-center justify-center
          ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}
        `}
      >
        {theme === 'dark' ? (
          <Moon className="w-4 h-4 text-purple-500" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500" />
        )}
      </div>
    </button>
  );
}
