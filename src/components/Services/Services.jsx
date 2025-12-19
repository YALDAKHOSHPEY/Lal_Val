'use client';

const services = [
  {
    title: 'Next.js Development',
    description: 'ساخت اپلیکیشنهای مدرن و سریع با آخرین نسخه Next.js',
    icon: '',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Django Backend',
    description: 'توسعه API امن و قدرتمند با Django REST Framework',
    icon: '🐍',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'React Native',
    description: 'ساخت اپلیکیشن موبایل برای iOS و Android',
    icon: '',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'UI/UX Design',
    description: 'طراحی رابط کاربری زیبا و تجربه کاربری عالی',
    icon: '',
    color: 'from-orange-500 to-red-500',
  },
];

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
        >
          <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <span className="text-2xl">{service.icon}</span>
          </div>
          
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            {service.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {service.description}
          </p>
          
          <a href="#" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline inline-flex items-center gap-2">
            بیشتر بدانید
            <span className="group-hover:translate-x-1 transition-transform"></span>
          </a>
        </div>
      ))}
    </div>
  );
}
