'use client';

import { useTranslations } from 'next-intl';

export default function TACFIPPage() {
    const t = useTranslations('TACFIP');

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background with diagonal green stripes */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: 'url(/bg-page-ncrop.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 0,
                }}
                aria-hidden="true"
            />
            <div className='absolute bg-brand top-0 left-0 w-5 h-1/3 z-20' />


            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Main Content */}
                <div className="flex flex-col flex-1 items-start justify-between p-12  md:p-16 py-12 md:py-24">
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
                        {t('header')}
                    </h1>


                </div>
            </div>
        </div>
    );
}
