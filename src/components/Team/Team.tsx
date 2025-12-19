'use client';

export default function Team() {
  const teamMembers = [
    {
      name: 'ویژا',
      role: 'Frontend Developer',
      expertise: 'Next.js, React, TypeScript',
      color: 'from-purple-500 to-pink-500',
      emoji: '',
    },
    {
      name: 'یلدا', 
      role: 'Backend Developer',
      expertise: 'Django, Node.js, PostgreSQL',
      color: 'from-blue-500 to-cyan-500',
      emoji: '👩‍🔧',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          تیم دوقلوهای ما
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          دو نفر دو تخصص یک هدف: ساخت بهترین محصولات دیجیتالی برای شما
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden group"
          >
            {/* افکت پسزمینه */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${member.color} opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>
            
            <div className="relative z-10">
              <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center mb-6 text-3xl`}>
                {member.emoji}
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                {member.name}
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                {member.role}
              </p>
              
              <div className="mb-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">تخصصها:</p>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {member.expertise}
                </p>
              </div>
              
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                  دوقلو
                </span>
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-sm">
                  فولاستک
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-400 italic">
          "با هم بیشتر از جمع دو فرد میتوانیم انجام دهیم!"
        </p>
      </div>
    </div>
  );
}
