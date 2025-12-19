'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // بررسی اولیه
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (!savedTheme && prefersDark) {
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  if (!mounted) {
    return (
      <div className="invisible">
        {children}
      </div>
    );
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      disableTransitionOnChange={false}
      storageKey="lalval-theme"
    >
      {children}
    </ThemeProvider>
  );
}
