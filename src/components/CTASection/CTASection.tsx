export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">آماده‌ای پروژه‌تون رو شروع کنید</h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
          همین الان با ما تماس بگیرید و از مشاوره رایگان بهرهمند شوید
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl hover:scale-105 transform duration-300">
            درخواست مشاوره رایگان
          </button>
          <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
            تماس با ما
          </button>
        </div>
      </div>
    </section>
  );
}
