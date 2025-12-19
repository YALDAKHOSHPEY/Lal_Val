'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeDebug() {
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => {
    console.log(' دیباگ تم:');
    console.log('- theme:', theme);
    console.log('- systemTheme:', systemTheme);
    console.log('- html class:', document.documentElement.className);
    console.log('- localStorage theme:', localStorage.getItem('theme'));
    console.log('- prefers-color-scheme:', window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, [theme]);

  const forceDark = () => {
    setTheme('dark');
    document.documentElement.classList.add('dark');
    console.log(' حالت تاریک اجباری اعمال شد');
  };

  const forceLight = () => {
    setTheme('light');
    document.documentElement.classList.remove('dark');
    console.log(' حالت روشن اجباری اعمال شد');
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black/80 text-white p-4 rounded-lg text-sm hidden">
      <div className="space-y-2">
        <div>Theme: {theme}</div>
        <div>System: {systemTheme}</div>
        <div className="flex space-x-2">
          <button onClick={forceDark} className="px-2 py-1 bg-gray-700 rounded">
            Dark
          </button>
          <button onClick={forceLight} className="px-2 py-1 bg-gray-300 text-black rounded">
            Light
          </button>
        </div>
      </div>
    </div>
  );
}
