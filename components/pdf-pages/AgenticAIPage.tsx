'use client';

import { useTranslations } from 'next-intl';
import CourseCard from './CourseCard';

function Arrow() {
    return (
        <div className="flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </div>
    );
}

export default function AgenticAIPage() {
    const t = useTranslations('agenticAI');

    // Placeholder links - you can update these later
    const courseLinks: Record<string, string> = {
        'buildingRAGAgents': '#',
        'evaluatingRAG': '#',
        'buildingAgenticAI': '#',
        'addingNewKnowledge': '#',
        'introductionToDeployingRAG': '#',
        'examAgenticAI': '#',
    };

    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* Background with subtle diagonal green stripes */}
            <div className="absolute inset-0 opacity-10">
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
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col p-8 md:p-12">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
                            {t('title')}
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-green-600 font-medium">
                            {t('subtitle')}
                        </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-4 w-full sm:w-auto">
                        <a
                            href="#"
                            className="text-green-600 underline hover:text-green-700 text-xs sm:text-sm md:text-base whitespace-nowrap"
                        >
                            {t('linkToLearningPath')}
                        </a>
                        {/* Certification Badge */}
                        <div className="bg-gray-200 border-2 border-gray-300 rounded-lg p-2 sm:p-3 text-center w-full sm:min-w-[200px]">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <span className="text-white text-[10px] sm:text-xs font-bold">N</span>
                            </div>
                            <p className="text-[10px] sm:text-xs font-semibold text-black leading-tight">
                                {t('certificationBadge')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content - Responsive 6x6 Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-end gap-4 gap-8">
                        {/* Fundamentals Section */}

                        <div className="col-span-1">
                            <CourseCard
                                topTitle={t('sections.fundamentals')}
                                title={t('courses.buildingRAGAgents')}
                                duration="8 Hours"
                                type="split"
                                hasAsterisk={true}
                                greenPrice="$90"
                                purplePrice="$500"
                                link={courseLinks.buildingRAGAgents}
                                arrowDirection="right"
                            />
                        </div>


                        {/* Generative AI and Multimodal Section */}

                        <div className="col-span-1">
                            <CourseCard
                                topTitle={t('sections.generativeAIAndMultimodal')}
                                title={t('courses.evaluatingRAG')}
                                duration="3 Hours"
                                price="$30"
                                type="green"
                                link={courseLinks.evaluatingRAG}
                            />
                        </div>
                        <div className="col-span-1">
                            <CourseCard
                                title={t('courses.buildingAgenticAI')}
                                duration="8 Hours"
                                type="split"
                                hasAsterisk={true}
                                greenPrice="$90"
                                purplePrice="$500"
                                link={courseLinks.buildingAgenticAI}
                            />
                        </div>
                        <div className="col-span-1">
                            <CourseCard
                                title={t('courses.addingNewKnowledge')}
                                duration="8 Hours"
                                price="$500"
                                type="purple"
                                link={courseLinks.addingNewKnowledge}
                            />
                        </div>
                        <div className="col-span-1">
                            <CourseCard
                                title={t('courses.introductionToDeployingRAG')}
                                duration="4 Hours"
                                type="split"
                                hasAsterisk={true}
                                greenPrice="$90"
                                purplePrice="$500"
                                purpleDuration="8 Hours"
                                link={courseLinks.introductionToDeployingRAG}
                            />
                        </div>


                        {/* Certification Section */}
                        <div className="col-span-1">
                            <CourseCard
                                topTitle={t('sections.certification')}
                                title={t('courses.examAgenticAI')}
                                duration="2 Hours"
                                price="$200"
                                type="blue"
                                hasDoubleAsterisk={true}
                                link={courseLinks.examAgenticAI}
                            />
                        </div>
                        {/* Empty cells to fill the row on xl screens */}
                        <div className="hidden xl:block col-span-5"></div>
                    </div>
                </div>

                {/* Course Legend */}
                <div className="mt-8 flex justify-end">
                    <div className="bg-white border-2 border-gray-300 rounded-lg p-3 sm:p-4 w-full md:w-auto min-w-[200px] sm:min-w-[250px]">
                        <h3 className="text-xs sm:text-sm font-bold text-black mb-2 sm:mb-3">
                            {t('courseLegend.title')}
                        </h3>
                        <div className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs">
                            <div className="flex items-center gap-2">
                                <span className="text-black font-semibold">*</span>
                                <span className="text-gray-700">{t('courseLegend.asterisk')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-black font-semibold">**</span>
                                <span className="text-gray-700">{t('courseLegend.doubleAsterisk')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-3 sm:w-12 sm:h-4 bg-green-500 rounded"></div>
                                <span className="text-gray-700">{t('courseLegend.greenBar')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-3 sm:w-12 sm:h-4 bg-purple-600 rounded"></div>
                                <span className="text-gray-700">{t('courseLegend.purpleBar')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-3 sm:w-12 sm:h-4 bg-blue-600 rounded"></div>
                                <span className="text-gray-700">{t('courseLegend.blueBar')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* NVIDIA Logo */}
                <div className="mt-8 flex justify-end">
                    <div className="w-32 h-12 bg-green-600 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-sm">NVIDIA</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

