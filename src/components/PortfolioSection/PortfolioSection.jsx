export default function PortfolioSection() {
  const projects = [
    { title: 'وبسایت فروشگاهی', category: 'Next.js', color: 'from-purple-500 to-pink-500' },
    { title: 'اپ موبایل', category: 'React Native', color: 'from-blue-500 to-cyan-500' },
    { title: 'پنل مدیریت', category: 'Django', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">نمونه کارها</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`h-48 rounded-xl mb-6 bg-gradient-to-br ${project.color}`}></div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
