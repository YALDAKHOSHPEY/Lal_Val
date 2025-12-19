import { Vazirmatn } from 'next/font/google';
import { Providers } from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const vazir = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazir',
  display: 'swap',
});

export const metadata = {
  title: 'لل ول | Lal Val - دوقلوهای فولاستک',
  description: 'آژانس طراحی و توسعه وب با Next.js و Django',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazir.variable} antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col bg-white text-gray-900 transition-colors duration-300 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
