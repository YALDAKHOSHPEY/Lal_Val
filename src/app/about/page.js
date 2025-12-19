'use client';

import { Users, Target, Award, Clock, Heart, Sparkles } from 'lucide-react';

const teamMembers = [
  {
    name: 'ویژا',
    role: 'Frontend Specialist',
    expertise: 'Next.js, React, TypeScript, UI/UX',
    bio: 'علاقهمند به ساخت رابطهای کاربری زیبا و تجربههای کاربری فراموشنشدنی',
    color: 'from-purple-500 to-pink-500',
    emoji: ''
  },
  {
    name: 'یلدا',
    role: 'Backend Expert',
    expertise: 'Django, Node.js, PostgreSQL, DevOps',
    bio: 'متخصص در ساخت API‌های امن و مقیاس‌پذیر و معماری سیستم‌های پیچیده',
    color: 'from-blue-500 to-cyan-500',
    emoji: '👩‍🔧'
  }
];

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'اشتیاق به کار',
    description: 'با عشق کد میزنیم و هر پروژه رو مثل بچه خودمون میبینیم'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'تعهد به کیفیت',
    description: 'هیچ پروژهای رو تحویل نمیدیم مگر اینکه از کیفیتش مطمئن باشیم'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'تحویل به موقع',
    description: 'زمانبندی برامون مقدسه و همیشه طبق برنامه پیش میریم'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'نوآوری مستمر',
    description: 'همیشه در حال یادگیری تکنولوژیهای جدید و بهبود فرآیندهامون هستیم'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* هیرو */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 mb-6">
              <Users className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                درباره لل ول
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              دو نفر دو تخصص یک هدف
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              ویژا و یلدا دو خواهر دوقلو که با ترکیب تخصص Frontend و Backend 
              آژانس لل ول رو تأسیس کردن تا بهترین راهحلهای دیجیتالی رو ارائه بدن.
            </p>
          </div>
        </div>
      </section>

      {/* تیم */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            تیم ما
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                {/* دایره آیکون */}
                <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <span className="text-2xl">{member.emoji}</span>
                </div>
                
                <div className="pt-8 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-lg text-purple-600 dark:text-purple-400 mb-4">
                    {member.role}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">تخصصها:</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {member.expertise}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "{member.bio}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ارزشها */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            ارزشهای ما
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 mb-6">
                  <div className="text-purple-600 dark:text-purple-400">
                    {value.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* داستان ما */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
              داستان لل ول
            </h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-lg">
                همه چیز از یک اتاق کوچک شروع شد جایی که دو خواهر دوقلو با یک لپتاپ و کلی ایده 
                اولین پروژه وبشون رو ساختند. اون روزها رو به خاطر میاریم که تا صبح کد میزدیم و 
                با خستگی اما پر از اشتیاق روز جدید رو شروع میکردیم.
              </p>
              
              <p className="text-lg">
                بعد از چند سال کار فریلنس و تجربه در پروژههای مختلف تصمیم گرفتیم تخصصهامون رو 
                با هم ترکیب کنیم. ویژا در Frontend و یلدا در Backend تخصص گرفتن و با هم آژانس 
                <span className="font-bold text-purple-600 dark:text-purple-400"> لل ول </span>
                رو تأسیس کردن.
              </p>
              
              <p className="text-lg">
                امروز با افتخار میتونیم بگیم که دهها پروژه موفق رو تحویل دادیم و همیشه سعی کردیم 
                فراتر از انتظار مشتریامون عمل کنیم. هدف ما فقط کد زدن نیست ساخت محصولاتی هست که 
                واقعا در زندگی مردم تأثیر مثبت بذاره.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            بیا با هم کار کنیم
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            اگر به دنبال تیمی متخصص و پرانرژی برای پروژه بعدیت هستی ما اینجام!
          </p>
          <button className="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl hover:scale-105 transform duration-300">
            شروع همکاری
          </button>
        </div>
      </section>
    </div>
  );
}
