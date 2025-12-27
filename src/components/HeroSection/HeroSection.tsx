'use client';

import { useState, useEffect } from 'react';
import { Instagram, Code, Cpu, Database, Globe, Server, Palette } from 'lucide-react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const slides = [
    {
      title: 'طراحی وب‌سایت حرفه‌ای',
      subtitle: 'با Next.js و Django',
      description: 'ساخت وب‌سایت‌های مدرن، سریع و امن با آخرین تکنولوژی‌های روز',
      icon: <Code className="w-16 h-16" />,
      color: 'from-blue-600 to-purple-600',
      gradient: 'bg-gradient-to-br from-blue-600 to-purple-600',
      stats: ['Next.js', 'React', 'TypeScript']
    },
    {
      title: 'توسعه فول استک',
      subtitle: 'Frontend و Backend یکپارچه',
      description: 'ارائه راه‌حل‌های کامل از طراحی رابط کاربری تا توسعه سمت سرور',
      icon: <Server className="w-16 h-16" />,
      color: 'from-purple-600 to-pink-600',
      gradient: 'bg-gradient-to-br from-purple-600 to-pink-600',
      stats: ['Node.js', 'Django', 'PostgreSQL']
    },
    {
      title: 'تجربه کاربری بی‌نظیر',
      subtitle: 'UI/UX طراحی شده',
      description: 'ساخت رابط‌های کاربری زیبا و intuitive که کاربران عاشقش می‌شوند',
      icon: <Palette className="w-16 h-16" />,
      color: 'from-pink-600 to-rose-600',
      gradient: 'bg-gradient-to-br from-pink-600 to-rose-600',
      stats: ['Tailwind CSS', 'Figma', 'Responsive']
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleInstagramClick = () => {
    window.open('https://instagram.com/yalda_twinn', '_blank');
  };

  // تابع برای گرفتن رنگ‌های اسلاید فعلی
  const getCurrentSlideColors = () => {
    return slides[currentSlide];
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/10">
      {/* گرادینت پویا */}
      <div className={`absolute inset-0 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10" />
      </div>
      
      {/* افکت‌های گرافیکی */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      
      {/* الگوی نقطه‌ای */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[length:40px_40px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* متن‌ها */}
          <div className={`text-center lg:text-right transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-blue-500/30 mb-8">
              <span className="text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                دو میرور | تخصص در Next.js
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block mb-4 text-gray-800 dark:text-white">
                طراحی وب‌سایت با
              </span>
              <span className="block">
                <span className={`text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r ${getCurrentSlideColors().color} bg-clip-text text-transparent transition-all duration-700`}>
                  Next.js
                </span>
                <span className="text-gray-800 dark:text-white mx-2">و</span>
                <span className={`text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r ${getCurrentSlideColors().color} bg-clip-text text-transparent transition-all duration-700`}>
                  Django
                </span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 lg:mr-auto leading-relaxed">
              طراحی و توسعه وب‌سایت‌های مدرن، سریع و کاملاً سفارشی با استفاده از آخرین تکنولوژی‌های روز
            </p>
            
            {/* تکنولوژی‌ها */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {slides[currentSlide].stats.map((tech, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 group hover:border-blue-500 transition-all duration-300"
                >
                  <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
            
            {/* بخش ارتباط با ما - اینستاگرام */}
            <div className={`mt-8 lg:mt-12 transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="text-center lg:text-right">
                <button 
                  onClick={handleInstagramClick}
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] mx-auto lg:mx-0"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="relative z-10">
                    سفارش طراحی سایت از طریق اینستاگرام
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
            
            {/* آمارهای کیفی */}
            <div className="flex justify-center lg:justify-start gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
              {[
                { icon: <Cpu className="w-5 h-5" />, label: 'توسعه اختصاصی' },
                { icon: <Database className="w-5 h-5" />, label: 'پایگاه داده امن' },
                { icon: <Globe className="w-5 h-5" />, label: 'پشتیبانی دائمی' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="text-blue-600 dark:text-blue-400">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* اسلایدر */}
          <div className={`relative transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-gray-300/50 dark:border-gray-700/50">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                  }`}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 ${slide.gradient} opacity-90`} />
                  
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,white_2px,transparent_0)] bg-[length:60px_60px]" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                    <div className={`mb-8 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 ${
                      index === currentSlide ? 'animate-pulse' : ''
                    }`}>
                      {slide.icon}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center max-w-md">
                      {slide.title}
                    </h3>
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                      <span className="text-lg font-medium">{slide.subtitle}</span>
                    </div>
                    
                    <p className="text-lg opacity-90 max-w-md text-center leading-relaxed">
                      {slide.description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${slide.gradient} transition-all duration-100`}
                        style={{ width: index === currentSlide ? '100%' : '0%' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* کنترل‌های اسلایدر */}
            <div className="flex justify-center gap-3 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? `w-8 bg-gradient-to-r ${slides[index].color}`
                      : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                  }`}
                  aria-label={`برو به اسلاید ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}