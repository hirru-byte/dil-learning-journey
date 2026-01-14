'use client';

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Node, Edge } from '@xyflow/react';
import ReactFlowCurriculum from './ReactFlowCurriculum';

export default function IndustryRelatedTrainingPage() {
    const t = useTranslations('industryRelatedTraining');

    // Placeholder links - you can update these later
    const courseLinks: Record<string, string> = {
        'computerVisionIndustrialInspection': '#',
        'applicationsAIPredictiveMaintenance': '#',
        'acceleratingCAENVIDIAAIPhysicsTechnology': '#',
        'accelerateDataScienceLeverageFoundationModelsDigitalBiology': '#',
        'streamliningDrugDiscoveryBioNeMo': '#',
        'gettingStartedNVIDIAToolsGenerativeAIDigitalHealth': '#',
        'medicalAIDevelopmentMONAI': '#',
        'introductionFederatedLearningNVIDIAFLARE': '#',
        'decentralizedAIScaleNVIDIAFlare': '#',
        'acceleratingPortfolioOptimization': '#',
        'applicationsAIAnomalyDetection': '#',
    };

    // Define nodes based on the curriculum structure
    const nodeWidth = 500;
    const nodeSpacing = 50;
    const titleHeight = 50;
    const rowStartY = 20;
    const rowSpacing = 270; // Space between rows

    const initialNodes: Node[] = useMemo(() => {
        const startX = 50;

        return [
            // Section 1: Energy and Manufacturing
            {
                id: 'title-energy-manufacturing',
                type: 'title',
                position: { x: startX, y: rowStartY },
                data: { label: t('sections.energyAndManufacturing') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'computerVisionIndustrialInspection',
                type: 'course',
                position: { x: startX, y: rowStartY + titleHeight },
                data: {
                    title: t('courses.computerVisionIndustrialInspection'),
                    duration: '8 Hours',
                    price: '$500',
                    type: 'purple',
                    hasAsterisk: true,
                    link: courseLinks.computerVisionIndustrialInspection,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'applicationsAIPredictiveMaintenance',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + titleHeight },
                data: {
                    title: t('courses.applicationsAIPredictiveMaintenance'),
                    duration: '8 Hours',
                    price: '$500',
                    type: 'purple',
                    hasAsterisk: true,
                    link: courseLinks.applicationsAIPredictiveMaintenance,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'acceleratingCAENVIDIAAIPhysicsTechnology',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.acceleratingCAENVIDIAAIPhysicsTechnology'),
                    duration: '8 Hours',
                    price: '$90',
                    type: 'green',
                    link: courseLinks.acceleratingCAENVIDIAAIPhysicsTechnology,
                },
                style: { width: nodeWidth },
            },

            // Section 2: Healthcare and Life Sciences
            {
                id: 'title-healthcare-life-sciences',
                type: 'title',
                position: { x: startX, y: rowStartY + rowSpacing * 2 },
                data: { label: t('sections.healthcareAndLifeSciences') },
                style: { background: 'transparent', border: 'none' },
            },
            // Row 1
            {
                id: 'accelerateDataScienceLeverageFoundationModelsDigitalBiology',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.accelerateDataScienceLeverageFoundationModelsDigitalBiology'),
                    duration: '2 Hours',
                    price: '$30',
                    type: 'green',
                    link: courseLinks.accelerateDataScienceLeverageFoundationModelsDigitalBiology,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'streamliningDrugDiscoveryBioNeMo',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.streamliningDrugDiscoveryBioNeMo'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.streamliningDrugDiscoveryBioNeMo,
                },
                style: { width: nodeWidth },
            },
            // Row 2
            {
                id: 'gettingStartedNVIDIAToolsGenerativeAIDigitalHealth',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing * 3 + titleHeight },
                data: {
                    title: t('courses.gettingStartedNVIDIAToolsGenerativeAIDigitalHealth'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.gettingStartedNVIDIAToolsGenerativeAIDigitalHealth,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'medicalAIDevelopmentMONAI',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 3 + titleHeight },
                data: {
                    title: t('courses.medicalAIDevelopmentMONAI'),
                    duration: '2 Hours',
                    price: '$30',
                    type: 'green',
                    link: courseLinks.medicalAIDevelopmentMONAI,
                },
                style: { width: nodeWidth },
            },
            // Row 3
            {
                id: 'introductionFederatedLearningNVIDIAFLARE',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing * 4 + titleHeight },
                data: {
                    title: t('courses.introductionFederatedLearningNVIDIAFLARE'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.introductionFederatedLearningNVIDIAFLARE,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'decentralizedAIScaleNVIDIAFlare',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 4 + titleHeight },
                data: {
                    title: t('courses.decentralizedAIScaleNVIDIAFlare'),
                    duration: '4 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.decentralizedAIScaleNVIDIAFlare,
                },
                style: { width: nodeWidth },
            },

            // Section 3: Financial Services
            {
                id: 'title-financial-services',
                type: 'title',
                position: { x: startX, y: rowStartY + rowSpacing * 5 },
                data: { label: t('sections.financialServices') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'acceleratingPortfolioOptimization',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing * 5 + titleHeight },
                data: {
                    title: t('courses.acceleratingPortfolioOptimization'),
                    duration: '2 Hours',
                    price: '$30',
                    type: 'purple',
                    link: courseLinks.acceleratingPortfolioOptimization,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'applicationsAIAnomalyDetection',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing * 6 + titleHeight },
                data: {
                    title: t('courses.applicationsAIAnomalyDetection'),
                    duration: '8 Hours',
                    price: '$500',
                    type: 'purple',
                    hasAsterisk: true,
                    link: courseLinks.applicationsAIAnomalyDetection,
                },
                style: { width: nodeWidth },
            },
        ];
    }, [t, courseLinks]);

    // Define edges (arrows) - only for Energy and Manufacturing section
    const initialEdges: Edge[] = useMemo(() => [
        // Section 1: Energy and Manufacturing - only first two courses are connected
        {
            id: 'e1',
            source: 'computerVisionIndustrialInspection',
            target: 'applicationsAIPredictiveMaintenance',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
    ], []);

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
                </div>

                {/* Main Content - ReactFlow */}
                <div className="shadow-2xl">
                    <ReactFlowCurriculum
                        nodes={initialNodes}
                        edges={initialEdges}
                        containerHeight="h-[500px] sm:h-[600px] md:h-[800px] lg:h-[2000px]"
                        showControls={true}
                        alignToTopRight={false}
                    />
                </div>

                {/* Disclaimer */}
                <div className="mt-4 text-xs sm:text-sm text-gray-600 italic">
                    {t('disclaimer')}
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
                                <div className="w-10 h-3 sm:w-12 sm:h-4 bg-green-500 rounded"></div>
                                <span className="text-gray-700">{t('courseLegend.greenBar')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-3 sm:w-12 sm:h-4 bg-purple-600 rounded"></div>
                                <span className="text-gray-700">{t('courseLegend.purpleBar')}</span>
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
