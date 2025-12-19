'use client';

import { Code, Palette, Smartphone, Database, Cloud, Shield } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'توسعه Frontend',
    description: 'ساخت اپلیکیشن‌های مدرن با Next.js و React',
    features: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'توسعه Backend',
    description: 'APIهای قدرتمند با Django و Node.js',
    features: ['Django REST', 'PostgreSQL', 'Authentication', 'RESTful APIs'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'توسعه موبایل',
    description: 'اپلیکیشنهای iOS و Android با React Native',
    features: ['React Native', 'iOS & Android', 'Push Notifications', 'App Store'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'طراحی UI/UX',
    description: 'طراحی رابط کاربری زیبا و تجربه کاربری عالی',
    features: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'DevOps & Deployment',
    description: 'استقرار و نگهداری سرویسهای ابری',
    features: ['AWS', 'Docker', 'CI/CD', 'Monitoring'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'امنیت و تست',
    description: 'تضمین کیفیت و امنیت محصولات نرمافزاری',
    features: ['Security Audit', 'Penetration Test', 'QA Testing', 'Performance'],
    color: 'from-yellow-500 to-amber-500'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* هیرو */}
      <section className="py-20 bg-gradient-to-r from-purple-600/5 via-pink-500/5 to-rose-500/5 dark:from-purple-900/10 dark:via-pink-900/10 dark:to-rose-900/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              خدمات تخصصی ما
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              با تخصص در فناوریهای مدرن راهحلهای دیجیتالی کاملی ارائه میدهیم
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10">
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                 ویژا و یلدا - تیم دوقلوهای فولاستک
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* خدمات */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                {/* دایره آیکون */}
                <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <div className="pt-12 text-center">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  {/* ویژگیها */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">قابلیتها:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors flex items-center justify-center gap-2">
                    مشاهده نمونهکارها
                    <span className="group-hover:translate-x-1 transition-transform"></span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            پروژه بعدی خود را به ما بسپارید
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            برای دریافت مشاوره رایگان و استارت پروژه همین الان با ما در ارتباط باشید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl hover:scale-105 transform duration-300">
              درخواست مشاوره رایگان
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
              تماس تلفنی
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
