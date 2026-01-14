'use client';

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Node, Edge } from '@xyflow/react';
import ReactFlowCurriculum from './ReactFlowCurriculum';

export default function OpenUSDCertificationPage() {
    const t = useTranslations('openUSDCertification');

    // Placeholder links - you can update these later
    const courseLinks: Record<string, string> = {
        'learnOpenUSDStagesPrimsAttributes': '#',
        'learnOpenUSDWorkingPrimsSchemas': '#',
        'learnOpenUSDUsingAttributes': '#',
        'learnOpenUSDTraversingStages': '#',
        'learnOpenUSDUnderstandingModelKinds': '#',
        'learnOpenUSDSettingUpAnimations': '#',
        'learnOpenUSDCreatingCompositionArcs': '#',
        'learnOpenUSDAssetStructurePrinciples': '#',
        'learnOpenUSDDevelopingDataExchangePipelines': '#',
        'professionalCertificationExam': '#',
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
            // Professional Certification Section
            {
                id: 'title-professional-certification',
                type: 'title',
                position: { x: startX, y: rowStartY },
                data: { label: t('sections.professionalCertification') },
                style: { background: 'transparent', border: 'none' },
            },

            // Fundamentals Section
            {
                id: 'title-fundamentals',
                type: 'title',
                position: { x: startX, y: rowStartY + titleHeight },
                data: { label: t('sections.fundamentals') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'learnOpenUSDStagesPrimsAttributes',
                type: 'course',
                position: { x: startX, y: rowStartY + titleHeight * 2 },
                data: {
                    title: t('courses.learnOpenUSDStagesPrimsAttributes'),
                    duration: '90 Minutes',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.learnOpenUSDStagesPrimsAttributes,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'learnOpenUSDWorkingPrimsSchemas',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + titleHeight * 2 },
                data: {
                    title: t('courses.learnOpenUSDWorkingPrimsSchemas'),
                    duration: '30 Minutes',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.learnOpenUSDWorkingPrimsSchemas,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'learnOpenUSDUsingAttributes',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + titleHeight * 2 },
                data: {
                    title: t('courses.learnOpenUSDUsingAttributes'),
                    duration: '30 Minutes',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.learnOpenUSDUsingAttributes,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'learnOpenUSDTraversingStages',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 3, y: rowStartY + titleHeight * 2 },
                data: {
                    title: t('courses.learnOpenUSDTraversingStages'),
                    duration: '20 Minutes',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.learnOpenUSDTraversingStages,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'learnOpenUSDUnderstandingModelKinds',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 4, y: rowStartY + titleHeight * 2 },
                data: {
                    title: t('courses.learnOpenUSDUnderstandingModelKinds'),
                    duration: '15 Minutes',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.learnOpenUSDUnderstandingModelKinds,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'learnOpenUSDSettingUpAnimations',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 5, y: rowStartY + titleHeight * 2 },
                data: {
                    title: t('courses.learnOpenUSDSettingUpAnimations'),
                    duration: '15 Minutes',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.learnOpenUSDSettingUpAnimations,
                },
                style: { width: nodeWidth },
            },

            // Applied Concepts Section
            {
                id: 'title-applied-concepts',
                type: 'title',
                position: { x: startX, y: rowStartY + rowSpacing },
                data: { label: t('sections.appliedConcepts') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'learnOpenUSDCreatingCompositionArcs',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.learnOpenUSDCreatingCompositionArcs'),
                    duration: '3 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.learnOpenUSDCreatingCompositionArcs,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'learnOpenUSDAssetStructurePrinciples',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.learnOpenUSDAssetStructurePrinciples'),
                    duration: '3 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.learnOpenUSDAssetStructurePrinciples,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'learnOpenUSDDevelopingDataExchangePipelines',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.learnOpenUSDDevelopingDataExchangePipelines'),
                    duration: '90 Minutes',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.learnOpenUSDDevelopingDataExchangePipelines,
                },
                style: { width: nodeWidth },
            },

            // Certification Section
            {
                id: 'title-certification',
                type: 'title',
                position: { x: startX, y: rowStartY + rowSpacing * 2 },
                data: { label: t('sections.certification') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'professionalCertificationExam',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.professionalCertificationExam'),
                    duration: '2 Hours',
                    price: '$200',
                    type: 'blue',
                    hasDoubleAsterisk: true,
                    link: courseLinks.professionalCertificationExam,
                },
                style: { width: nodeWidth },
            },
        ];
    }, [t, courseLinks]);

    // Define edges (arrows) to show flow
    const initialEdges: Edge[] = useMemo(() => [
        // Fundamentals section - sequential flow
        {
            id: 'e1',
            source: 'learnOpenUSDStagesPrimsAttributes',
            target: 'learnOpenUSDWorkingPrimsSchemas',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e2',
            source: 'learnOpenUSDWorkingPrimsSchemas',
            target: 'learnOpenUSDUsingAttributes',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e3',
            source: 'learnOpenUSDUsingAttributes',
            target: 'learnOpenUSDTraversingStages',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e4',
            source: 'learnOpenUSDTraversingStages',
            target: 'learnOpenUSDUnderstandingModelKinds',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e5',
            source: 'learnOpenUSDUnderstandingModelKinds',
            target: 'learnOpenUSDSettingUpAnimations',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Applied Concepts section - sequential flow
        {
            id: 'e6',
            source: 'learnOpenUSDCreatingCompositionArcs',
            target: 'learnOpenUSDAssetStructurePrinciples',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e7',
            source: 'learnOpenUSDAssetStructurePrinciples',
            target: 'learnOpenUSDDevelopingDataExchangePipelines',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Flow from Applied Concepts to Certification
        {
            id: 'e8',
            source: 'learnOpenUSDDevelopingDataExchangePipelines',
            target: 'professionalCertificationExam',
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

                {/* Main Content - ReactFlow */}
                <div className="shadow-2xl">
                    <ReactFlowCurriculum
                        nodes={initialNodes}
                        edges={initialEdges}
                        containerHeight="h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]"
                        showControls={true}
                        alignToTopRight={false}
                    />
                </div>

                {/* Course Legend */}
                <div className="mt-8 flex justify-end">
                    <div className="bg-white border-2 border-gray-300 rounded-lg p-3 sm:p-4 w-full md:w-auto min-w-[200px] sm:min-w-[250px]">
                        <h3 className="text-xs sm:text-sm font-bold text-black mb-2 sm:mb-3">
                            {t('courseLegend.title')}
                        </h3>
                        <div className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs">
                            <div className="flex items-center gap-2">
                                <span className="text-black font-semibold">**</span>
                                <span className="text-gray-700">{t('courseLegend.doubleAsterisk')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-3 sm:w-12 sm:h-4 bg-green-500 rounded"></div>
                                <span className="text-gray-700">{t('courseLegend.greenBar')}</span>
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
