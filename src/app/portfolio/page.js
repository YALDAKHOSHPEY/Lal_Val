'use client';

import { ExternalLink, Github, Smartphone, Globe, ShoppingCart } from 'lucide-react';

const projects = [
  {
    title: 'فروشگاه آنلاین مد',
    category: 'E-commerce',
    tech: ['Next.js', 'Django', 'PostgreSQL', 'Tailwind'],
    description: 'فروشگاه آنلاین با سیستم پرداخت امن و پنل مدیریت پیشرفته',
    imageColor: 'from-purple-500 to-pink-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'اپلیکیشن مدیریت مالی',
    category: 'Mobile App',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    description: 'اپلیکیشن مدیریت مالی شخصی با نمودارهای تعاملی',
    imageColor: 'from-blue-500 to-cyan-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'سایت شرکتی نوآوران',
    category: 'Corporate Website',
    tech: ['Next.js', 'TypeScript', 'Framer Motion'],
    description: 'وبسایت شرکتی با انیمیشنهای مدرن و سئو عالی',
    imageColor: 'from-green-500 to-emerald-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    title: 'پنل مدیریت رستوران',
    category: 'Dashboard',
    tech: ['React', 'Django REST', 'Chart.js'],
    description: 'پنل مدیریت آنالytics و سفارشات برای شبکه رستورانها',
    imageColor: 'from-orange-500 to-red-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    title: 'پلتفرم آموزش آنلاین',
    category: 'EdTech',
    tech: ['Next.js', 'Django', 'WebRTC', 'Stripe'],
    description: 'پلتفرم آموزش با کلاسهای زنده و سیستم پرداخت',
    imageColor: 'from-indigo-500 to-purple-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'اپلیکیشن ورزشی',
    category: 'Health & Fitness',
    tech: ['React Native', 'Firebase', 'Google Fit API'],
    description: 'اپلیکیشن ردیابی ورزش و تغذیه با همگامسازی wearable',
    imageColor: 'from-yellow-500 to-amber-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* هیرو */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              نمونه کارهای ما
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              پروژههای موفق ما که با آخرین تکنولوژیها ساخته شدهاند
            </p>
            
            {/* فیلترها */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['همه', 'Frontend', 'Backend', 'Mobile', 'E-commerce', 'Dashboard'].map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* پروژهها */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                {/* برچسب Featured */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold rounded-full">
                      Featured
                    </span>
                  </div>
                )}
                
                {/* تصویر پروژه */}
                <div className={`h-48 ${project.imageColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.category === 'Mobile App' ? (
                      <Smartphone className="w-16 h-16 text-white/80" />
                    ) : project.category === 'E-commerce' ? (
                      <ShoppingCart className="w-16 h-16 text-white/80" />
                    ) : (
                      <Globe className="w-16 h-16 text-white/80" />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* محتوای پروژه */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          aria-label="مشاهده لایو"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          aria-label="مشاهده کد"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  {/* تکنولوژیها */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                    مشاهده جزئیات
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* آمار */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'پروژه تکمیل شده' },
              { number: '30+', label: 'مشتری راضی' },
              { number: '15+', label: 'تکنولوژی مختلف' },
              { number: '100%', label: 'رضایت مشتری' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
