"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl animate-pulse shadow-lg"></div>
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden"
      aria-label={`????? ?? ???? ${isDark ? "????" : "????"}`}
      title={`???? ????: ${isDark ? "????" : "????"}`}
    >
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Sun/Moon container */}
      <div className="relative z-10">
        {/* Sun - Light mode */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${isDark ? "opacity-0 scale-0 rotate-180" : "opacity-100 scale-100 rotate-0"}`}>
          <div className="relative">
            {/* Sun core */}
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
            {/* Sun rays */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
        
        {/* Moon - Dark mode */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 -rotate-180"}`}>
          <div className="relative">
            {/* Moon */}
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full shadow-lg"></div>
            {/* Moon craters */}
            <div className="absolute top-1 right-1 w-2 h-2 bg-blue-300/80 rounded-full"></div>
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-indigo-500/80 rounded-full"></div>
            {/* Stars */}
            <div className="absolute -top-2 -right-2 w-1 h-1 bg-white rounded-full animate-twinkle"></div>
            <div className="absolute -bottom-2 -left-2 w-1 h-1 bg-white rounded-full animate-twinkle delay-500"></div>
          </div>
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/30 dark:group-hover:border-purple-400/30 transition-all duration-500"></div>
      
      {/* Tooltip */}
      <div className="absolute -bottom-12 right-1/2 translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
        {isDark ? "???? ????" : "???? ????"}
        <div className="absolute -top-1 right-1/2 translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"></div>
      </div>
      
      {/* Style for twinkle animation */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle 2s infinite;
        }
      `}</style>
    </button>
  )
}
