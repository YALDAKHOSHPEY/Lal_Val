'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // شبیه‌سازی ارسال فرم
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // ریست فرم بعد از 3 ثانیه
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'ایمیل',
      details: ['info@lalval.com', 'support@lalval.com'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'تلفن',
      details: ['+98 912 123 4567', '+98 21 2345 6789'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'آدرس',
      details: ['تهران خیابان ولیعصر', 'برج میلاد طبقه  واحد '],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const subjects = [
    'درخواست مشاوره',
    'استخدام',
    'پشتیبانی پروژه',
    'همکاری تجاری',
    'سایر'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* هیرو */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              با ما در ارتباط باشید
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              برای دریافت مشاوره رایگان یا هرگونه سؤال فرم زیر رو پر کنید یا از طریق راههای ارتباطی با ما تماس بگیرید
            </p>
          </div>
        </div>
      </section>

      {/* فرم و اطلاعات تماس */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* اطلاعات تماس */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
                راههای ارتباطی
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                  >
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${info.color} mb-4`}>
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                      {info.title}
                    </h3>
                    
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 dark:text-gray-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* ساعات کاری */}
              <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h3 className="font-bold text-gray-800 dark:text-white">ساعات کاری</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300">شنبه تا چهارشنبه:  صبح تا  عصر</p>
                  <p className="text-gray-700 dark:text-gray-300">پنجشنبه:  صبح تا  بعدازظهر</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">پشتیبانی اضطراری: /</p>
                </div>
              </div>
            </div>
            
            {/* فرم تماس */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">ارسال پیام</h2>
                </div>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">پیام شما با موفقیت ارسال شد!</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      به زودی با شما تماس خواهیم گرفت.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          نام و نام خانوادگی
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          placeholder="نام خود را وارد کنید"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          ایمیل
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          شماره تماس
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          placeholder=""
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          موضوع
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        >
                          <option value="">انتخاب موضوع</option>
                          {subjects.map((subject, index) => (
                            <option key={index} value={subject}>{subject}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        متن پیام
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                        placeholder="پیام خود را اینجا بنویسید..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          در حال ارسال...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          ارسال پیام
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                      پیام شما در کمتر از  ساعت پاسخ داده خواهد شد.
                    </p>
                  </form>
                )}
              </div>
              
              {/* اطلاعات اضافه */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200 dark:border-purple-800">
                  <h4 className="font-bold text-gray-800 dark:text-white mb-3">مشاوره رایگان</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    برای پروژههای جدید  دقیقه مشاوره رایگان ارائه میدهیم.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-bold text-gray-800 dark:text-white mb-3">پاسخ سریع</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    معمولا در کمتر از  ساعت به ایمیلها پاسخ میدهیم.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
