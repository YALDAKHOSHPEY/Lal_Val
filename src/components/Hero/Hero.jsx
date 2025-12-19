'use client';

export default function Hero() {
  return (
    <div className="text-center py-16 md:py-24">
      <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 mb-8">
        <span className="text-purple-600 dark:text-purple-400 font-semibold">
          👯 دوقلوهای فول‌استک
        </span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          لل ول
        </span>
        <span className="block text-2xl md:text-3xl mt-4 text-gray-600 dark:text-gray-300">
          Lal Val Studio
        </span>
      </h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
        ما ویژا و یلدا دو خواهر دوقلو هستیم که با تخصص در <span className="font-bold text-purple-600 dark:text-purple-400">Next.js</span> <span className="font-bold text-green-600 dark:text-green-400">Django</span> و <span className="font-bold text-blue-600 dark:text-blue-400">Node.js</span> پروژههای شما را به واقعیت تبدیل میکنیم.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95">
          مشاهده نمونه کارها
        </button>
        <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-bold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 hover:shadow-lg transition-all duration-300">
          درباره ما بیشتر بدانید
        </button>
      </div>
      
      {/* آواتارهای دوقلوها */}
      <div className="flex justify-center gap-8 mt-16">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 shadow-xl"></div>
          <h3 className="font-bold text-gray-800 dark:text-white">ویژا</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Frontend Specialist</p>
        </div>
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 shadow-xl"></div>
          <h3 className="font-bold text-gray-800 dark:text-white">یلدا</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Backend Expert</p>
        </div>
      </div>
    </div>
  );
}
