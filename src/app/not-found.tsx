export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="text-center max-w-2xl">
        <div className="text-9xl font-bold text-blue-600 mb-4"></div>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">صفحه مورد نظر یافت نشد</h1>
        <p className="text-xl text-gray-600 mb-10">
          متأسفیم صفحهای که به دنبال آن هستید وجود ندارد یا منتقل شده است.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/" 
            className="btn-primary inline-block text-center"
          >
            بازگشت به صفحه اصلی
          </a>
          <a 
            href="/contact" 
            className="btn-secondary inline-block text-center"
          >
            تماس با پشتیبانی
          </a>
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4"> پیشنهاد میکنیم:</h3>
          <ul className="text-right space-y-3 text-gray-700">
            <li> از نوار جستجو در بالای صفحه استفاده کنید</li>
            <li> به صفحه <a href="/services" className="text-blue-600 hover:underline">خدمات</a> سر بزنید</li>
            <li> یا با شماره <strong className="text-gray-900">-</strong> تماس بگیرید</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
