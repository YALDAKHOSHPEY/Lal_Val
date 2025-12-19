"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../../components/ThemeProvider";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 hover:shadow-xl transition-all duration-300 group overflow-hidden"
      aria-label={theme === "dark" ? "تغییر به تم روشن" : "تغییر به تم تیره"}
    >
      {/* افکت پس‌زمینه */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* دایره متحرک */}
      <div className={`absolute w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 ${theme === "dark" ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}></div>
      <div className={`absolute w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-500 ${theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}></div>
      
      {/* آیکون */}
      <div className="relative z-10 text-xl transition-transform duration-500 group-hover:scale-110">
        {theme === "dark" ? "" : ""}
      </div>
      
      {/* حلقه چرخان */}
      <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-400/30 dark:group-hover:border-purple-400/30 transition-all duration-500"></div>
    </button>
  );
};