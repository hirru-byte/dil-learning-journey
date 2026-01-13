'use client';

import { useTranslations } from 'next-intl';

export default function CertificationFrameworkPage2() {
    const t = useTranslations('certificationFramework2');

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background with diagonal green stripes */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-green-50 to-green-600">
                {/* Diagonal stripe pattern */}
                <div className="absolute inset-0 opacity-20">
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
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-green-600/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Header */}
                <div className="relative">
                    {/* Dark green bar at top */}
                    <div className="h-2 bg-green-900"></div>
                    {/* White line */}
                    <div className="h-1 bg-white"></div>

                    {/* Header content with light green bar */}
                    <div className="relative flex items-center">
                        {/* Light green vertical bar */}
                        <div className="w-4 md:w-6 h-24 md:h-32 bg-green-200"></div>

                        {/* Header text */}
                        <div className="flex-1 pl-4 md:pl-6">
                            <h2 className="text-xl md:text-2xl font-bold text-black">
                                {t('header')}
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Main Content - Just Title
                <div className="flex-1 flex items-center justify-center px-8 md:px-12 py-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center">
                        {t('title')}
                    </h1>
                </div> */}

                {/* Footer */}
                <div className="relative mt-auto">
                    <div className="px-8 md:px-12 py-4">
                        <p className="text-black font-medium">
                            {t('footer')}
                        </p>
                    </div>
                    {/* Dark green bar at bottom */}
                    <div className="h-2 bg-green-900"></div>
                </div>
            </div>
        </div>
    );
}
