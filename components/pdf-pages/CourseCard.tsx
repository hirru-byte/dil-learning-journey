'use client';

import { ArrowDown } from 'lucide-react';
interface CourseCardProps {
    title: string;
    duration: string;
    price?: string;
    type?: 'green' | 'purple' | 'blue' | 'split';
    hasAsterisk?: boolean;
    hasDoubleAsterisk?: boolean;
    link?: string;
    greenPrice?: string;
    purplePrice?: string;
    purpleDuration?: string;
    arrowDirection?: 'top' | 'bottom' | 'left' | 'right' | 'none';
    topTitle?: string;
}

function ArrowIcon({ direction }: { direction: 'top' | 'bottom' | 'left' | 'right' }) {
    const rotationMap = {
        top: 'rotate-180',
        bottom: 'rotate-0',
        left: 'rotate-90',
        right: '-rotate-90',
    };

    return (
        <div className={`absolute ${getArrowPosition(direction)} flex items-center justify-center`}>
            <ArrowDown className={`w-6 h-6 text-gray-400 ${rotationMap[direction]}`} />
        </div>
    );
}

function getArrowPosition(direction: 'top' | 'bottom' | 'left' | 'right'): string {
    switch (direction) {
        case 'top':
            return 'top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
        case 'bottom':
            return '-bottom-4 left-1/2 transform -translate-x-1/2 translate-y-1/2';
        case 'left':
            return '-left-4 top-1/2 transform -translate-y-1/2 -translate-x-1/2';
        case 'right':
            return '-right-4 top-1/2 transform -translate-y-1/2 translate-x-1/2';
        default:
            return '';
    }
}

export default function CourseCard({
    title,
    duration,
    price,
    type = 'green',
    hasAsterisk = false,
    hasDoubleAsterisk = false,
    link = '#',
    greenPrice,
    purplePrice,
    purpleDuration,
    arrowDirection = 'none',
    topTitle,
}: CourseCardProps) {
    const renderBottomSection = () => {
        if (type === 'split') {
            // For split type, use purpleDuration if provided, otherwise use the main duration
            const finalPurpleDuration = purpleDuration || duration;
            return (
                <div className="flex">
                    <div className="flex-1 bg-green-500 py-2 sm:py-3 px-2 sm:px-4 text-white text-xs sm:text-sm font-semibold text-center">
                        {duration} | {greenPrice || '$90'}
                    </div>
                    <div className="flex-1 bg-purple-600 py-2 sm:py-3 px-2 sm:px-4 text-white text-xs sm:text-sm font-semibold text-center">
                        {finalPurpleDuration} | {purplePrice || '$500'}
                    </div>
                </div>
            );
        }

        const bgColor =
            type === 'green' ? 'bg-green-500' :
                type === 'purple' ? 'bg-purple-600' :
                    'bg-blue-600';
        return (
            <div className={`${bgColor} py-2 sm:py-3 px-2 sm:px-4 text-white text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold text-center`}>
                {duration} | {price || '$30'}
            </div>
        );
    };

    return (
        <div className="relative w-full ">
            {/* Arrow Icon */}


            {/* Top Title (optional) */}
            {topTitle && (
                <div className="mb-2 absolute top-0 left-0 z-20 overflow-hidden">
                    <h3 className=" text-lg font-semibold text-black text-left">
                        {topTitle}
                    </h3>
                </div>
            )}

            <div className="relative">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-lg overflow-hidden hover:opacity-90 transition-opacity bg-violet-400 cursor-pointer shadow-sm "
                >
                    {/* Top Section - Light Gray with Title */}
                    <div className="bg-gray-200 py-3 sm:py-4 px-3 sm:px-4 min-h-[70px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[150px] flex items-center justify-center">
                        <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold text-black text-center leading-tight">
                            {title}
                            {hasAsterisk && <span className="text-black">*</span>}
                            {hasDoubleAsterisk && <span className="text-black">**</span>}
                        </h3>
                    </div>


                    {/* Bottom Section - Colored Bar(s) */}
                    {renderBottomSection()}
                </a>
                {arrowDirection !== 'none' && <ArrowIcon direction={arrowDirection} />}
            </div>
        </div>
    );
}

