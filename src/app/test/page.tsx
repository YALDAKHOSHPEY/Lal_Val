'use client';

import { useTheme } from 'next-themes';

export default function TestPage() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* کارت تست */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl font-bold mb-6 gradient-text">
            تست تم دارک/روشن
          </h1>
          
          {/* اطلاعات تم */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">وضعیت فعلی:</h3>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {currentTheme === 'dark' ? ' حالت تاریک فعال' : ' حالت روشن فعال'}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">تغییر تم:</h3>
              <p className="text-gray-600 dark:text-gray-400">
                از دکمه در هدر برای تغییر استفاده کنید
              </p>
            </div>
          </div>
          
          {/* نمونههای رنگ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { name: 'پس‌زمینه', light: 'bg-white', dark: 'bg-gray-900' },
              { name: 'متن', light: 'bg-gray-800', dark: 'bg-gray-100' },
              { name: 'رنگ اول', light: 'bg-purple-600', dark: 'bg-purple-400' },
              { name: 'رنگ دوم', light: 'bg-pink-500', dark: 'bg-pink-400' },
            ].map((color, index) => (
              <div key={index} className="text-center">
                <div className={`h-20 rounded-lg mb-2 ${
                  currentTheme === 'dark' ? color.dark : color.light
                }`}></div>
                <p className="text-sm font-medium dark:text-white">{color.name}</p>
              </div>
            ))}
          </div>
          
          {/* متن نمونه */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              نمونه متن برای تست
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              این یک متن نمونه است که باید در هر دو حالت تاریک و روشن به خوبی خوانده شود.
              رنگها باید به صورت خودکار تغییر کنند و کنتراست مناسبی داشته باشند.
            </p>
            <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700">
              <code className="text-sm text-gray-700 dark:text-gray-300">
                console.log('تم فعلی:', '{currentTheme}');
              </code>
            </div>
          </div>
        </div>
        
        {/* راهنمای رفع مشکل */}
        <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
          <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
            اگر تم تغییر نمیکند:
          </h3>
          <ul className="list-disc list-inside space-y-1 text-yellow-700 dark:text-yellow-300">
            <li>مطمئن شوید tailwind.config.js خط `darkMode: 'class'` دارد</li>
            <li>مرورگر را ریلود کنید (Ctrl + F5)</li>
            <li>از ابزار توسعهدهنده (F12) کلاس html را چک کنید</li>
            <li>کنسول مرورگر را برای خطا بررسی کنید</li>
          </ul>
        </div>
        
        {/* دکمه تست */}
        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            بازگشت به صفحه اصلی
          </a>
        </div>
      </div>
    </div>
  );
}
