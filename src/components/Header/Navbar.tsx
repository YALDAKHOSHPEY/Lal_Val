import Link from "next/link";

const navItems = [
  { href: "/", label: "خانه" },
  { href: "/about", label: "درباره ما" },
  { href: "/services", label: "خدمات" },
  { href: "/portfolio", label: "نمونه کارها" },
  { href: "/contact", label: "تماس" },
];

export const Navbar = () => {
  return (
    <nav className="flex items-center space-x-6 space-x-reverse">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="relative group px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        >
          <span className="relative z-10 font-medium">{item.label}</span>
          
          {/* خط زیرین */}
          <span className="absolute bottom-0 right-1/2 translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-500 rounded-full"></span>
          
          {/* افکت پس‌زمینه */}
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-600/0 group-hover:from-blue-500/5 group-hover:to-purple-600/5 rounded-lg transition-all duration-300"></span>
        </Link>
      ))}
    </nav>
  );
};