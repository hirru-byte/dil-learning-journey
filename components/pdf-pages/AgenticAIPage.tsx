'use client';

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Node, Edge } from '@xyflow/react';
import ReactFlowCurriculum from './ReactFlowCurriculum';
import AAP from '@/public/nvidia/AA-Professional.svg';
import Image from 'next/image';

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

    // Define nodes based on the curriculum structure - arranged in rows
    const nodeWidth = 500;
    const nodeSpacing = 50;
    const titleHeight = 50;
    const rowStartY = 20;
    const rowSpacing = 270; // Space between rows

    const initialNodes: Node[] = useMemo(() => [
        // Fundamentals Section - Row 1
        {
            id: 'title-fundamentals',
            type: 'title',
            position: { x: 50, y: rowStartY },
            data: { label: t('sections.fundamentals') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'buildingRAGAgents',
            type: 'course',
            position: { x: 50, y: rowStartY + titleHeight },
            data: {
                title: t('courses.buildingRAGAgents'),
                duration: '8 Hours',
                type: 'split',
                hasAsterisk: true,
                greenPrice: '$90',
                purplePrice: '$500',
                link: courseLinks.buildingRAGAgents,
            },
            style: { width: nodeWidth },
        },
        // Generative AI and Multimodal Section - Row 2
        {
            id: 'title-generativeAI',
            type: 'title',
            position: { x: 50 + nodeWidth + nodeSpacing, y: rowStartY },
            data: { label: t('sections.generativeAIAndMultimodal') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'evaluatingRAG',
            type: 'course',
            position: { x: 50 + nodeWidth + nodeSpacing, y: rowStartY + titleHeight },
            data: {
                title: t('courses.evaluatingRAG'),
                duration: '3 Hours',
                price: '$30',
                type: 'green',
                link: courseLinks.evaluatingRAG,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'buildingAgenticAI',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: rowStartY + titleHeight },
            data: {
                title: t('courses.buildingAgenticAI'),
                duration: '8 Hours',
                type: 'split',
                hasAsterisk: true,
                greenPrice: '$90',
                purplePrice: '$500',
                link: courseLinks.buildingAgenticAI,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'addingNewKnowledge',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 3, y: rowStartY + titleHeight },
            data: {
                title: t('courses.addingNewKnowledge'),
                duration: '8 Hours',
                price: '$500',
                type: 'purple',
                link: courseLinks.addingNewKnowledge,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'introductionToDeployingRAG',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 4, y: rowStartY + titleHeight },
            data: {
                title: t('courses.introductionToDeployingRAG'),
                duration: '4 Hours',
                type: 'split',
                hasAsterisk: true,
                greenPrice: '$90',
                purplePrice: '$500',
                purpleDuration: '8 Hours',
                link: courseLinks.introductionToDeployingRAG,
            },
            style: { width: nodeWidth },
        },
        // Certification Section - Row 3
        {
            id: 'title-certification',
            type: 'title',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 5, y: rowStartY },
            data: { label: t('sections.certification') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'examAgenticAI',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 5, y: rowStartY + titleHeight },
            data: {
                title: t('courses.examAgenticAI'),
                duration: '2 Hours',
                price: '$200',
                type: 'blue',
                hasDoubleAsterisk: true,
                link: courseLinks.examAgenticAI,
            },
            style: { width: nodeWidth },
        },
    ], [t, courseLinks]);

    // Define edges (arrows) to show flow - horizontal connections
    const initialEdges: Edge[] = useMemo(() => [
        // Flow from Fundamentals to Generative AI section
        {
            id: 'e1',
            source: 'buildingRAGAgents',
            target: 'evaluatingRAG',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Flow within Generative AI section
        {
            id: 'e2',
            source: 'evaluatingRAG',
            target: 'buildingAgenticAI',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e3',
            source: 'buildingAgenticAI',
            target: 'addingNewKnowledge',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e4',
            source: 'addingNewKnowledge',
            target: 'introductionToDeployingRAG',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Flow from Generative AI to Certification section
        {
            id: 'e5',
            source: 'introductionToDeployingRAG',
            target: 'examAgenticAI',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
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
                    <div className="flex items-start gap-4 w-full sm:w-auto ">
                        <a
                            href="https://www.nvidia.com/en-us/learn/learning-path/generative-ai-llm/"
                            className="text-green-600 underline hover:text-green-700 text-xs sm:text-sm md:text-base whitespace-nowrap"
                        >
                            {t('linkToLearningPath')}
                        </a>
                        {/* Certification Badge */}
                        <Image
                            src={AAP.src}
                            alt="Certification Badge"
                            width={200}
                            height={200}

                        />
                    </div>
                </div>

                {/* Main Content - ReactFlow */}
                <div>
                    <div className=" text-lg sm:text-xl md:text-2xl font-bold text-black mb-4">Professional Certification</div>
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
                    <Image
                        src="/nvidia-sq-logo.webp"
                        alt="NVIDIA Logo"
                        width={50}
                        height={50}
                        className="w-10 h-10 sm:w-14 sm:h-14 md:w-[70px] md:h-[70px]"
                    />
                </div>
            </div>
        </div>
    );
}

