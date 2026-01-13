'use client';

import { useTranslations } from 'next-intl';

export default function TitlePage() {
  const t = useTranslations('nvidia');

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with diagonal green stripes */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-green-50 to-green-600">
        {/* Diagonal stripe pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `repeating-linear-gradient(
                   45deg,
                   transparent,
                   transparent 40px,
                   rgba(34, 197, 94, 0.1) 40px,
                   rgba(34, 197, 94, 0.1) 80px
                 )`
               }}
          />
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `repeating-linear-gradient(
                   -45deg,
                   transparent,
                   transparent 40px,
                   rgba(34, 197, 94, 0.15) 40px,
                   rgba(34, 197, 94, 0.15) 80px
                 )`
               }}
          />
        </div>
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-green-600/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex items-start justify-start p-12 md:p-16">
          <div className="max-w-4xl">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
              {t('title')}
            </h1>
            
            {/* Date */}
            <p className="text-lg md:text-xl text-black/70 font-medium">
              {t('date')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

