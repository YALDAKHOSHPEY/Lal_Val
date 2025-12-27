'use client';

import { Users, Target, Award, Clock, Heart, Sparkles, Code, Cpu, Database, Globe, Shield, Zap } from 'lucide-react';

const teamMembers = [
  {
    name: 'یلدا',
    role: 'فول استک',
    expertise: 'Next.js, Node.js, TypeScript, REST API, سیستم‌های مقیاس‌پذیر',
    bio: 'تخصص در توسعه برنامه‌های وب مدرن با تمرکز بر عملکرد و تجربه کاربری بی‌نظیر',
    color: 'from-blue-500 to-cyan-500',
    emoji: '⚡',
    skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    name: 'ویدا',
    role: 'فول استک',
    expertise: 'Django, Python, هوش مصنوعی، Frontend پیشرفته',
    bio: 'متخصص در پیاده‌سازی راه‌حل‌های هوشمند و توسعه وب‌سایت‌های پیچیده',
    color: 'from-purple-500 to-pink-500',
    emoji: '🤖',
    skills: ['Django', 'Python', 'React', 'AI Integration', 'MongoDB', 'Docker']
  }
];

const coreValues = [
  {
    icon: <Target className="w-7 h-7" />,
    title: 'تمرکز بر اهداف تجاری',
    description: 'هر پروژه را با درک کامل از نیازهای کسب‌وکار شما توسعه می‌دهیم'
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: 'عملکرد بهینه',
    description: 'بهینه‌سازی سرعت و تجربه کاربری در اولویت کار ماست'
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'امنیت و قابلیت اطمینان',
    description: 'پیاده‌سازی استانداردهای امنیتی پیشرفته برای محافظت از داده‌ها'
  },
  {
    icon: <Code className="w-7 h-7" />,
    title: 'کیفیت در کدنویسی',
    description: 'تولید کدهای تمیز، قابل نگهداری و مستند شده'
  }
];

const technologies = [
  { name: 'Next.js', icon: '⚡', desc: 'فریمورک مدرن React برای SSR' },
  { name: 'Django', icon: '🐍', desc: 'فریمورک قدرتمند پایتون' },
  { name: 'React', icon: '⚛️', desc: 'کتابخانه پیشرو UI' },
  { name: 'TypeScript', icon: '📘', desc: ' کدهای قابل اطمینان' },
  { name: 'Node.js', icon: '🟢', desc: 'محیط اجرای جاوااسکریپت' },
  { name: 'Python', icon: '🐼', desc: 'زبان برنامه‌نویسی همه‌کاره' },
  { name: 'PostgreSQL', icon: '🐘', desc: 'دیتابیس رابطه‌ای پیشرفته' },
  { name: 'Tailwind', icon: '🎨', desc: 'فریمورک CSS مدرن' }
];

const services = [
  {
    title: 'طراحی وب‌سایت شرکتی',
    description: 'وب‌سایت‌های سازمانی با طراحی حرفه‌ای و مدیریت محتوای آسان'
  },
  {
    title: 'فروشگاه اینترنتی',
    description: 'سیستم‌های تجارت الکترونیک کامل و امن'
  },
  {
    title: 'پنل مدیریت اختصاصی',
    description: 'سیستم‌های مدیریتی سفارشی برای کسب‌وکارها'
  },
  {
    title: 'وب‌سایت شخصی',
    description: 'پورتفولیو و رزومه آنلاین حرفه‌ای'
  },
  {
    title: 'اتوماسیون فرآیندها',
    description: 'سیستم‌های خودکارسازی کارهای تکراری'
  },
  {
    title: 'بروزرسانی و نگهداری',
    description: 'ارتقاء و پشتیبانی وب‌سایت‌های موجود'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10" />
        <div className="container relative mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-blue-500/30 mb-8">
              <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                دو میرور | Duo Mirror
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white">
              تخصص در 
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                طراحی وب‌سایت حرفه‌ای
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              در <span className="font-bold text-blue-600 dark:text-blue-400">دو میرور</span>، با ترکیب تخصص فول استک، 
              وب‌سایت‌هایی خلق می‌کنیم که نه تنها زیبا هستند، بلکه عملکردی عالی و تجربه کاربری بی‌نظیری ارائه می‌دهند.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                <span className="font-medium text-gray-700 dark:text-gray-300">طراحی اختصاصی</span>
              </div>
              <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                <span className="font-medium text-gray-700 dark:text-gray-300">توسعه فول استک</span>
              </div>
              <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                <span className="font-medium text-gray-700 dark:text-gray-300">پشتیبانی بلندمدت</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              تیم طراحی وب‌سایت دو میرور
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              دو توسعه‌دهنده فول استک که تضمین‌کننده کیفیت و حرفه‌ای‌بودن هر پروژه طراحی وب‌سایت هستند
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <span className="text-2xl">{member.emoji}</span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {member.name}
                      </h3>
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-3">
                        <span className="text-base font-semibold text-blue-600 dark:text-blue-400">
                          {member.role}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {member.expertise}
                      </p>
                    </div>
                  </div>
                  
                  {/* Bio */}
                  <div className="mb-8">
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed border-r-4 border-blue-500 pr-4">
                      {member.bio}
                    </p>
                  </div>
                  
                  {/* Skills */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                      مهارت‌های اصلی
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              تکنولوژی‌های مورد استفاده
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              از تکنولوژی‌های روز دنیا برای ساخت وب‌سایت‌های مدرن و پایدار استفاده می‌کنیم
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl mb-3">
                  {tech.icon}
                </div>
                <h4 className="font-bold text-gray-800 dark:text-white mb-1">
                  {tech.name}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              اصول کاری ما
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              استانداردهایی که در هر پروژه طراحی وب‌سایت رعایت می‌کنیم
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="mb-5 inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                  <div className="text-blue-600 dark:text-blue-400">
                    {value.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-white">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              خدمات طراحی وب‌سایت
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              انواع راه‌حل‌های وب برای نیازهای مختلف کسب‌وکارها
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-5">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <Cpu className="w-5 h-5 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              فرآیند طراحی وب‌سایت
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              مراحل استاندارد از مشاوره تا تحویل پروژه
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  ۱
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">مشاوره و آنالیز</h3>
                  <p className="text-gray-600 dark:text-gray-300">درک کامل نیازهای شما و ارائه راه‌حل مناسب</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  ۲
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">طراحی و نمونه‌سازی</h3>
                  <p className="text-gray-600 dark:text-gray-300">طراحی UI/UX و ارائه نمونه اولیه برای تایید</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  ۳
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">توسعه و پیاده‌سازی</h3>
                  <p className="text-gray-600 dark:text-gray-300">کدنویسی و پیاده‌سازی کامل پروژه</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  ۴
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">تست و تحویل</h3>
                  <p className="text-gray-600 dark:text-gray-300">تست کامل و آموزش استفاده از سیستم</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            برای طراحی وب‌سایت حرفه‌ای آماده‌اید؟
          </h2>
          <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg">
            یک جلسه مشاوره رایگان رزرو کنید تا بهترین راه‌حل برای کسب‌وکارتان را بررسی کنیم
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
              درخواست مشاوره رایگان
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors">
              تماس با ما
            </button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 text-sm">
              طراحی وب‌سایت | توسعه فول استک | پشتیبانی تخصصی
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}