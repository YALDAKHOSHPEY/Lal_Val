export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ستون 1: لوگو و توضیح */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl"></div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  لل ول
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Lal Val Studio</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              آژانس تخصصی توسعه نرمافزار با تمرکز بر تکنولوژیهای مدرن و ارائه راهحلهای خلاقانه.
            </p>
          </div>

          {/* ستون 2: لینکهای سریع */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-800 dark:text-white">لینکهای سریع</h4>
            <ul className="space-y-3">
              {['خانه', 'خدمات', 'درباره ما', 'نمونه کارها', 'تماس با ما'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون 3: تماس */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-800 dark:text-white">ارتباط با ما</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <span></span>
                <span>info@lalval.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <span></span>
                <span>+98 912 123 4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <span></span>
                <span>تهران ایران</span>
              </li>
            </ul>
          </div>
        </div>

        {/* خط جداکننده */}
        <div className="border-t border-gray-200 dark:border-gray-800 my-8"></div>

        {/* کپی رایت */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
             {new Date().getFullYear()} لل ول. تمامی حقوق محفوظ است.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
              حریم خصوصی
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
              شرایط استفاده
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
