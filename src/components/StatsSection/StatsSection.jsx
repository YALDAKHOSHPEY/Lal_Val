'use client';

import { useState, useEffect } from 'react';
import { Code, Users, Clock, Award } from 'lucide-react';

export default function StatsSection() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  
  const stats = [
    { icon: <Code className="w-8 h-8" />, end: 87, label: 'پروژه تکمیل شده', suffix: '+' },
    { icon: <Users className="w-8 h-8" />, end: 42, label: 'مشتری راضی', suffix: '+' },
    { icon: <Clock className="w-8 h-8" />, end: 2400, label: 'ساعت کدنویسی', suffix: '+' },
    { icon: <Award className="w-8 h-8" />, end: 15, label: 'جایزه طراحی', suffix: '+' },
  ];

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      let start = 0;
      const duration = 2000;
      const increment = stat.end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= stat.end) {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = stat.end;
            return newCounts;
          });
          clearInterval(timer);
        } else {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(start);
            return newCounts;
          });
        }
      }, 16);
      
      return timer;
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all mb-4">
                <div className="text-purple-600 dark:text-purple-400">
                  {stat.icon}
                </div>
              </div>
              
              <div className="text-4xl font-bold mb-2 gradient-text">
                {counts[index]}{stat.suffix}
              </div>
              
              <p className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
