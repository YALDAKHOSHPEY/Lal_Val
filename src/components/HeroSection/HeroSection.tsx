'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: 'توسعهی نرمافزارهای مدرن',
      subtitle: 'با Next.js و Django',
      description: 'ساخت اپلیکیشنهای سریع امن و مقیاسپذیر با آخرین تکنولوژیها',
      color: 'from-purple-600 via-pink-500 to-rose-500',
      emoji: ''
    },
    {
      title: 'تجربه کاربری خارقالعاده',
      subtitle: 'طراحی UI/UX حرفهای',
      description: 'ساخت رابطهای کاربری زیبا و intuitive که کاربران عاشقش میشوند',
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      emoji: '🎨'
    },
    {
      title: 'پشتیبانی و نگهداری',
      subtitle: 'همراه شما در هر مرحله',
      description: 'از ایده تا اجرا و نگهداری، کنار شما هستیم',
      color: 'from-green-500 via-emerald-500 to-lime-500',
      emoji: ''
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* گرادینت پسزمینه */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20"></div>
      
      {/* افکتهای گرافیکی */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl dark:bg-purple-900/20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl dark:bg-pink-900/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* متنها */}
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 mb-6">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                خوش آمدید به لل ول
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block mb-4">ما میسازیم</span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                آینده دیجیتال
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 lg:mr-auto">
              ویژا و یلدا دو خواهر دوقلو با تخصص در توسعه فولاستک همراه شما در ساخت محصولات دیجیتالی بینظیر.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <span className="relative z-10">شروع پروژه</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white font-bold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 hover:shadow-lg transition-all duration-300">
                <span className="flex items-center justify-center gap-2">
                  <span>مشاهده نمونه کارها</span>
                  <ArrowLeft className="w-4 h-4" />
                </span>
              </button>
            </div>
            
            {/* آمارهای سریع */}
            <div className="flex justify-center lg:justify-start gap-8 mt-12">
              {[
                { number: '50+', label: 'پروژه موفق' },
                { number: '100%', label: 'رضایت مشتری' },
                { number: '/', label: 'پشتیبانی' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* اسلایدر */}
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-90`}></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                    <div className="text-6xl mb-6 animate-bounce">{slide.emoji}</div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h3>
                    <p className="text-xl mb-2 opacity-90">{slide.subtitle}</p>
                    <p className="text-lg opacity-80 max-w-md text-center">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* کنترلهای اسلایدر */}
            <div className="flex justify-center gap-4 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-purple-600 w-8'
                      : 'bg-gray-300 dark:bg-gray-700 hover:bg-purple-400'
                  }`}
                  aria-label={`برو به اسلاید ${index + 1}`}
                />
              ))}
            </div>
            
            {/* فلشهای ناوبری */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
              <ArrowRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
      
      {/* اسکرول پایین */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
