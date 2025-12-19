export default function TestimonialsSection() {
  const testimonials = [
    { name: 'علی رضایی', role: 'مدیر عامل شرکت نوآوران', content: 'کار عالی و حرفهای انجام دادن.' },
    { name: 'سارا محمدی', role: 'استارتاپ تیک', content: 'بعد از همکاری با لل ول رشد فروشمون  برابر شد!' },
    { name: 'حسین کریمی', role: 'فریلنسر', content: 'بهترین تیم توسعهای که باهاشون کار کردم.' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">نظرات مشتریان</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-gray-800 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
