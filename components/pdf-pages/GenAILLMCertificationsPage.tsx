'use client';

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Node, Edge } from '@xyflow/react';
import ReactFlowCurriculum from './ReactFlowCurriculum';
import GALA from '@/public/nvidia/GAL-Associate.svg';
import Image from 'next/image';

export default function GenAILLMCertificationsPage() {
    const t = useTranslations('genAILLMCertifications');

    // Placeholder links - you can update these later
    const courseLinks: Record<string, string> = {
        'whatIsTrustworthyAI': '#',
        'fundamentalsOfDeepLearning': '#',
        'fundamentalsOfAcceleratedDataScience': '#',
        'buildingTransformerBasedNLP': '#',
        'buildingLLMApplicationsPromptEngineering': '#',
        'rapidApplicationDevelopmentLLMs': '#',
        'associateCertificationExam': '#',
        'buildingRAGAgentsLLMs': '#',
        'addingNewKnowledgeLLMs': '#',
        'modelParallelismLargeNeuralNetworks': '#',
        'deployingRAGPipelinesProduction': '#',
        'optimizingCUDAMLNsight': '#',
        'professionalCertificationExam': '#',
    };

    // Define nodes based on the curriculum structure
    const nodeWidth = 500;
    const nodeSpacing = 50;
    const titleHeight = 50;
    const rowStartY = 20;
    const rowSpacing = 270; // Space between rows
    const sectionSpacing = 100; // Space between sections

    const initialNodes: Node[] = useMemo(() => {
        // Associate Certification Path positions
        const associateFundamentalsX = 50;
        const associateGenAIX = 50;
        const associateExamX = 50;

        // Professional Certification Path positions (to the right)
        const professionalX = 50;

        return [
            // ASSOCIATE CERTIFICATION PATH
            // Fundamentals Section
            {
                id: 'title-associate-fundamentals',
                type: 'title',
                position: { x: associateFundamentalsX, y: rowStartY },
                data: { label: t('sections.fundamentals') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'whatIsTrustworthyAI',
                type: 'course',
                position: { x: associateFundamentalsX, y: rowStartY + titleHeight },
                data: {
                    title: t('courses.whatIsTrustworthyAI'),
                    duration: 'Blog',

                    type: 'grey',
                    link: courseLinks.whatIsTrustworthyAI,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'fundamentalsOfDeepLearning',
                type: 'course',
                position: { x: associateFundamentalsX + nodeWidth + nodeSpacing, y: rowStartY + titleHeight },
                data: {
                    title: t('courses.fundamentalsOfDeepLearning'),
                    duration: '8 Hours',
                    type: 'split',
                    hasAsterisk: true,
                    greenPrice: '$90',
                    purplePrice: '$500',
                    link: courseLinks.fundamentalsOfDeepLearning,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'fundamentalsOfAcceleratedDataScience',
                type: 'course',
                position: { x: associateFundamentalsX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + titleHeight },
                data: {
                    title: t('courses.fundamentalsOfAcceleratedDataScience'),
                    duration: '6 Hours',
                    type: 'split',
                    hasAsterisk: true,
                    greenPrice: '$90',
                    purplePrice: '$500',
                    purpleDuration: '8 Hours',
                    link: courseLinks.fundamentalsOfAcceleratedDataScience,
                },
                style: { width: nodeWidth },
            },

            // Generative AI and LLMs Section
            {
                id: 'title-associate-genai',
                type: 'title',
                position: { x: associateGenAIX + (nodeWidth + nodeSpacing) * 3, y: rowStartY },
                data: { label: t('sections.generativeAIAndLLMs') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'buildingTransformerBasedNLP',
                type: 'course',
                position: { x: associateGenAIX + (nodeWidth + nodeSpacing) * 3, y: rowStartY + titleHeight },
                data: {
                    title: t('courses.buildingTransformerBasedNLP'),
                    duration: '6 Hours',
                    type: 'split',
                    hasAsterisk: true,
                    greenPrice: '$30',
                    purplePrice: '$500',
                    purpleDuration: '8 Hours',
                    link: courseLinks.buildingTransformerBasedNLP,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'buildingLLMApplicationsPromptEngineering',
                type: 'course',
                position: { x: associateGenAIX + (nodeWidth + nodeSpacing) * 4, y: rowStartY + titleHeight },
                data: {
                    title: t('courses.buildingLLMApplicationsPromptEngineering'),
                    duration: '8 Hours',
                    type: 'split',
                    hasAsterisk: true,
                    greenPrice: '$90',
                    purplePrice: '$500',
                    link: courseLinks.buildingLLMApplicationsPromptEngineering,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'rapidApplicationDevelopmentLLMs',
                type: 'course',
                position: { x: associateGenAIX + (nodeWidth + nodeSpacing) * 5, y: rowStartY + titleHeight },
                data: {
                    title: t('courses.rapidApplicationDevelopmentLLMs'),
                    duration: '8 Hours',
                    type: 'split',
                    hasAsterisk: true,
                    greenPrice: '$90',
                    purplePrice: '$500',
                    link: courseLinks.rapidApplicationDevelopmentLLMs,
                },
                style: { width: nodeWidth },
            },

            // Associate Certification Exam
            {
                id: 'associateCertificationExam',
                type: 'course',
                position: { x: associateExamX + (nodeWidth + nodeSpacing) * 5, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.associateCertificationExam'),
                    duration: '1 Hour',
                    price: '$125',
                    type: 'blue',
                    hasDoubleAsterisk: true,
                    link: courseLinks.associateCertificationExam,
                },
                style: { width: nodeWidth },
            },

            // PROFESSIONAL CERTIFICATION PATH
            // Professional Courses Section
            {
                id: 'title-professional',
                type: 'title',
                position: { x: professionalX, y: rowStartY + rowSpacing * 2 },
                data: { label: t('sections.professional') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'buildingRAGAgentsLLMs',
                type: 'course',
                position: { x: professionalX, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.buildingRAGAgentsLLMs'),
                    duration: '8 Hours',
                    type: 'split',
                    hasAsterisk: true,
                    greenPrice: '$90',
                    purplePrice: '$500',
                    link: courseLinks.buildingRAGAgentsLLMs,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'addingNewKnowledgeLLMs',
                type: 'course',
                position: { x: professionalX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.addingNewKnowledgeLLMs'),
                    duration: '8 Hours',
                    price: '$500',
                    type: 'purple',
                    link: courseLinks.addingNewKnowledgeLLMs,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'modelParallelismLargeNeuralNetworks',
                type: 'course',
                position: { x: professionalX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.modelParallelismLargeNeuralNetworks'),
                    duration: '8 Hours',
                    price: '$500',
                    type: 'purple',
                    link: courseLinks.modelParallelismLargeNeuralNetworks,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'deployingRAGPipelinesProduction',
                type: 'course',
                position: { x: professionalX + (nodeWidth + nodeSpacing) * 3, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.deployingRAGPipelinesProduction'),
                    duration: '4 Hours',
                    type: 'split',
                    hasAsterisk: true,
                    greenPrice: '$90',
                    purplePrice: '$500',
                    purpleDuration: '8 Hours',
                    link: courseLinks.deployingRAGPipelinesProduction,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'optimizingCUDAMLNsight',
                type: 'course',
                position: { x: professionalX + (nodeWidth + nodeSpacing) * 4, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.optimizingCUDAMLNsight'),
                    duration: '4 Hours',
                    price: '$30',
                    type: 'green',
                    link: courseLinks.optimizingCUDAMLNsight,
                },
                style: { width: nodeWidth },
            },

            // Professional Certification Exam
            {
                id: 'certificationExamTitle',
                type: 'title',
                position: { x: professionalX + (nodeWidth + nodeSpacing) * 5, y: rowStartY + rowSpacing * 2 },
                data: { label: t('sections.certification') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'professionalCertificationExam',
                type: 'course',
                position: { x: professionalX + (nodeWidth + nodeSpacing) * 5, y: rowStartY + rowSpacing * 2 + titleHeight },
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
        // Associate Certification Path - Flow from Fundamentals to Generative AI
        {
            id: 'e1',
            source: 'fundamentalsOfAcceleratedDataScience',
            target: 'buildingTransformerBasedNLP',
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
            source: 'buildingTransformerBasedNLP',
            target: 'buildingLLMApplicationsPromptEngineering',
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
            source: 'buildingLLMApplicationsPromptEngineering',
            target: 'rapidApplicationDevelopmentLLMs',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Flow from Generative AI to Associate Exam
        {
            id: 'e4',
            source: 'rapidApplicationDevelopmentLLMs',
            target: 'associateCertificationExam',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Professional Certification Path - Flow from courses to exam
        {
            id: 'e5',
            source: 'modelParallelismLargeNeuralNetworks',
            target: 'deployingRAGPipelinesProduction',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e6',
            source: 'deployingRAGPipelinesProduction',
            target: 'optimizingCUDAMLNsight',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e7',
            source: 'optimizingCUDAMLNsight',
            target: 'professionalCertificationExam',
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
                    <div className="flex flex-col items-start sm:items-end gap-4 w-full sm:w-auto">
                        <a
                            href="https://www.nvidia.com/en-us/learn/learning-path/accelerated-data-science/"
                            className="text-green-600 underline hover:text-green-700 text-xs sm:text-sm md:text-base whitespace-nowrap"
                        >
                            {t('linkToLearningPath')}
                        </a>
                        {/* Certification Badge */}
                        <Image
                            src={GALA.src}
                            alt="Certification Badge"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>

                {/* Main Content - ReactFlow */}
                <div>
                    <div className=" text-lg sm:text-xl md:text-2xl font-bold text-black mb-4">Associate Certification</div>
                    <ReactFlowCurriculum
                        nodes={initialNodes}
                        edges={initialEdges}
                        containerHeight="h-[500px] sm:h-[600px] md:h-[700px] lg:h-[900px]"
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
                                <div className="w-10 h-3 sm:w-12 sm:h-4 bg-gray-500 rounded"></div>
                                <span className="text-gray-700">{t('courseLegend.greyBar')}</span>
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
