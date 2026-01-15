'use client';

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Node, Edge } from '@xyflow/react';
import ReactFlowCurriculum from './ReactFlowCurriculum';
import Image from 'next/image';

export default function DataScienceTrainingPage() {
    const t = useTranslations('dataScienceTraining');

    // Placeholder links - you can update these later
    const courseLinks: Record<string, string> = {
        'acceleratingEndToEndDataScienceWorkflows': '#',
        'acceleratingClusteringAlgorithms': '#',
        'analyzingVisualizingLargeData': '#',
        'gettingStartedDeepLearning': '#',
        'bestPracticesFeatureEngineering': '#',
        'accelerateDataScienceWorkflowsZeroCode': '#',
        'syntheticTabularDataGeneration': '#',
        'introductionMultiModalDataCuration': '#',
        'accelerateDataAnalyticsGPUsRAPIDS': '#',
        'enhancingDataScienceOutcomes': '#',
        'introductionTransformerBasedNLP': '#',
        'augmentLLMUsingRAG': '#',
        'structureFromChaosGraphRAG': '#',
        'useGPUsAccelerateVectorDatabases': '#',
        'exploringAdversarialMachineLearning': '#',
        'accelerateDataScienceLeverageFoundationModels': '#',
        'acceleratingPortfolioOptimization': '#',
    };

    // Define nodes based on the curriculum structure - arranged in rows
    const nodeWidth = 500;
    const nodeSpacing = 50;
    const titleHeight = 50;
    const rowStartY = 20;
    const rowSpacing = 270; // Space between rows

    const initialNodes: Node[] = useMemo(() => [
        // Section 1: Accelerated Data Science Foundations - Row 1
        {
            id: 'title-accelerated-data-science-foundations',
            type: 'title',
            position: { x: 50, y: rowStartY },
            data: { label: t('sections.acceleratedDataScienceFoundations') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'acceleratingEndToEndDataScienceWorkflows',
            type: 'course',
            position: { x: 50, y: rowStartY + titleHeight },
            data: {
                title: t('courses.acceleratingEndToEndDataScienceWorkflows'),
                duration: '8 Hours',
                type: 'split',
                hasAsterisk: true,
                greenPrice: '$90',
                purplePrice: '$500',
                link: courseLinks.acceleratingEndToEndDataScienceWorkflows,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'acceleratingClusteringAlgorithms',
            type: 'course',
            position: { x: 50 + nodeWidth + nodeSpacing, y: rowStartY + titleHeight },
            data: {
                title: t('courses.acceleratingClusteringAlgorithms'),
                duration: '2 Hours',
                price: '$30',
                type: 'green',
                link: courseLinks.acceleratingClusteringAlgorithms,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'analyzingVisualizingLargeData',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: rowStartY + titleHeight },
            data: {
                title: t('courses.analyzingVisualizingLargeData'),
                duration: '2 Hours',
                price: '$30',
                type: 'green',
                link: courseLinks.analyzingVisualizingLargeData,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'gettingStartedDeepLearning',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 3, y: rowStartY + titleHeight },
            data: {
                title: t('courses.gettingStartedDeepLearning'),
                duration: '8 Hours',
                type: 'split',
                hasAsterisk: true,
                greenPrice: '$90',
                purplePrice: '$500',
                link: courseLinks.gettingStartedDeepLearning,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'bestPracticesFeatureEngineering',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 4, y: rowStartY + titleHeight },
            data: {
                title: t('courses.bestPracticesFeatureEngineering'),
                duration: '2 Hours',
                price: '$30',
                type: 'green',
                link: courseLinks.bestPracticesFeatureEngineering,
            },
            style: { width: nodeWidth },
        },
        // Section 2: Data Preparation for Model Training - Row 2
        {
            id: 'title-data-preparation',
            type: 'title',
            position: { x: 50, y: rowStartY + rowSpacing },
            data: { label: t('sections.dataPreparationForModelTraining') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'accelerateDataScienceWorkflowsZeroCode',
            type: 'course',
            position: { x: 50, y: rowStartY + rowSpacing + titleHeight },
            data: {
                title: t('courses.accelerateDataScienceWorkflowsZeroCode'),
                duration: '1 Hour',
                price: 'Free',
                type: 'green',
                link: courseLinks.accelerateDataScienceWorkflowsZeroCode,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'syntheticTabularDataGeneration',
            type: 'course',
            position: { x: 50 + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing + titleHeight },
            data: {
                title: t('courses.syntheticTabularDataGeneration'),
                duration: '4 Hours',
                price: '$30',
                type: 'green',
                link: courseLinks.syntheticTabularDataGeneration,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'introductionMultiModalDataCuration',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing + titleHeight },
            data: {
                title: t('courses.introductionMultiModalDataCuration'),
                duration: '1 Hour',
                price: 'Free',
                type: 'green',
                link: courseLinks.introductionMultiModalDataCuration,
            },
            style: { width: nodeWidth },
        },
        // Section 3: Big Data Processing Pipelines - Row 3
        {
            id: 'title-big-data-processing',
            type: 'title',
            position: { x: 50, y: rowStartY + rowSpacing * 2 },
            data: { label: t('sections.bigDataProcessingPipelines') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'accelerateDataScienceWorkflowsZeroCode2',
            type: 'course',
            position: { x: 50, y: rowStartY + rowSpacing * 2 + titleHeight },
            data: {
                title: t('courses.accelerateDataScienceWorkflowsZeroCode'),
                duration: '1 Hour',
                price: 'Free',
                type: 'green',
                link: courseLinks.accelerateDataScienceWorkflowsZeroCode,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'accelerateDataAnalyticsGPUsRAPIDS',
            type: 'course',
            position: { x: 50 + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 2 + titleHeight },
            data: {
                title: t('courses.accelerateDataAnalyticsGPUsRAPIDS'),
                duration: '2 Hours',
                price: '$30',
                type: 'green',
                link: courseLinks.accelerateDataAnalyticsGPUsRAPIDS,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'enhancingDataScienceOutcomes',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing * 2 + titleHeight },
            data: {
                title: t('courses.enhancingDataScienceOutcomes'),
                duration: '8 Hours',
                price: '$500',
                type: 'purple',
                hasAsterisk: true,
                link: courseLinks.enhancingDataScienceOutcomes,
            },
            style: { width: nodeWidth },
        },
        // Section 4: Data Processing for AI - Row 4
        {
            id: 'title-data-processing-ai',
            type: 'title',
            position: { x: 50, y: rowStartY + rowSpacing * 3 },
            data: { label: t('sections.dataProcessingForAI') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'introductionTransformerBasedNLP',
            type: 'course',
            position: { x: 50, y: rowStartY + rowSpacing * 3 + titleHeight },
            data: {
                title: t('courses.introductionTransformerBasedNLP'),
                duration: '6 Hours',
                type: 'split',
                hasAsterisk: true,
                greenPrice: '$30',
                purplePrice: '$500',
                purpleDuration: '8 Hours',
                link: courseLinks.introductionTransformerBasedNLP,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'augmentLLMUsingRAG',
            type: 'course',
            position: { x: 50 + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 3 + titleHeight },
            data: {
                title: t('courses.augmentLLMUsingRAG'),
                duration: '1 Hour',
                price: 'Free',
                type: 'green',
                link: courseLinks.augmentLLMUsingRAG,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'structureFromChaosGraphRAG',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing * 3 + titleHeight },
            data: {
                title: t('courses.structureFromChaosGraphRAG'),
                duration: '2 Hours',
                price: '$30',
                type: 'green',
                link: courseLinks.structureFromChaosGraphRAG,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'useGPUsAccelerateVectorDatabases',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 3, y: rowStartY + rowSpacing * 3 + titleHeight },
            data: {
                title: t('courses.useGPUsAccelerateVectorDatabases'),
                duration: '2 Hours',
                price: '$30',
                type: 'green',
                link: courseLinks.useGPUsAccelerateVectorDatabases,
            },
            style: { width: nodeWidth },
        },
        // Section 5: Accelerated Data Science for Cybersecurity - Row 5
        {
            id: 'title-cybersecurity',
            type: 'title',
            position: { x: 50, y: rowStartY + rowSpacing * 4 },
            data: { label: t('sections.acceleratedDataScienceForCybersecurity') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'accelerateDataScienceWorkflowsZeroCode3',
            type: 'course',
            position: { x: 50, y: rowStartY + rowSpacing * 4 + titleHeight },
            data: {
                title: t('courses.accelerateDataScienceWorkflowsZeroCode'),
                duration: '1 Hour',
                price: 'Free',
                type: 'green',
                link: courseLinks.accelerateDataScienceWorkflowsZeroCode,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'exploringAdversarialMachineLearning',
            type: 'course',
            position: { x: 50 + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 4 + titleHeight },
            data: {
                title: t('courses.exploringAdversarialMachineLearning'),
                duration: '8 Hours',
                price: '$90',
                type: 'green',
                hasAsterisk: true,
                link: courseLinks.exploringAdversarialMachineLearning,
            },
            style: { width: nodeWidth },
        },
        // Section 6: Accelerated Data Science for Healthcare - Row 6
        {
            id: 'title-healthcare',
            type: 'title',
            position: { x: 50, y: rowStartY + rowSpacing * 5 },
            data: { label: t('sections.acceleratedDataScienceForHealthcare') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'accelerateDataScienceWorkflowsZeroCode4',
            type: 'course',
            position: { x: 50, y: rowStartY + rowSpacing * 5 + titleHeight },
            data: {
                title: t('courses.accelerateDataScienceWorkflowsZeroCode'),
                duration: '1 Hour',
                price: 'Free',
                type: 'green',
                link: courseLinks.accelerateDataScienceWorkflowsZeroCode,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'accelerateDataScienceLeverageFoundationModels',
            type: 'course',
            position: { x: 50 + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 5 + titleHeight },
            data: {
                title: t('courses.accelerateDataScienceLeverageFoundationModels'),
                duration: '2 Hours',
                price: '$30',
                type: 'green',
                link: courseLinks.accelerateDataScienceLeverageFoundationModels,
            },
            style: { width: nodeWidth },
        },
        // Section 7: Accelerated Data Science for Financial Services - Row 7
        {
            id: 'title-financial-services',
            type: 'title',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing * 4 },
            data: { label: t('sections.acceleratedDataScienceForFinancialServices') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'acceleratingPortfolioOptimization',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing * 4 + titleHeight },
            data: {
                title: t('courses.acceleratingPortfolioOptimization'),
                duration: '2 Hours',
                price: '$30',
                type: 'purple',
                link: courseLinks.acceleratingPortfolioOptimization,
            },
            style: { width: nodeWidth },
        },
    ], [t, courseLinks]);

    // Define edges (arrows) to show flow - horizontal connections within each section
    const initialEdges: Edge[] = useMemo(() => [
        // Section 1: Accelerated Data Science Foundations
        {
            id: 'e1',
            source: 'acceleratingEndToEndDataScienceWorkflows',
            target: 'acceleratingClusteringAlgorithms',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e2',
            source: 'acceleratingClusteringAlgorithms',
            target: 'analyzingVisualizingLargeData',
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
            source: 'analyzingVisualizingLargeData',
            target: 'gettingStartedDeepLearning',
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
            source: 'gettingStartedDeepLearning',
            target: 'bestPracticesFeatureEngineering',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Section 2: Data Preparation for Model Training
        {
            id: 'e5',
            source: 'accelerateDataScienceWorkflowsZeroCode',
            target: 'syntheticTabularDataGeneration',
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
            source: 'syntheticTabularDataGeneration',
            target: 'introductionMultiModalDataCuration',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Section 3: Big Data Processing Pipelines
        {
            id: 'e7',
            source: 'accelerateDataScienceWorkflowsZeroCode2',
            target: 'accelerateDataAnalyticsGPUsRAPIDS',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e8',
            source: 'accelerateDataAnalyticsGPUsRAPIDS',
            target: 'enhancingDataScienceOutcomes',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Section 4: Data Processing for AI
        {
            id: 'e9',
            source: 'introductionTransformerBasedNLP',
            target: 'augmentLLMUsingRAG',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e10',
            source: 'augmentLLMUsingRAG',
            target: 'structureFromChaosGraphRAG',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e11',
            source: 'structureFromChaosGraphRAG',
            target: 'useGPUsAccelerateVectorDatabases',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Section 5: Accelerated Data Science for Cybersecurity
        {
            id: 'e12',
            source: 'accelerateDataScienceWorkflowsZeroCode3',
            target: 'exploringAdversarialMachineLearning',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Section 6: Accelerated Data Science for Healthcare
        {
            id: 'e13',
            source: 'accelerateDataScienceWorkflowsZeroCode4',
            target: 'accelerateDataScienceLeverageFoundationModels',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Section 7: No edges (single course)
    ], []);

    return (
        <div className="lg:min-h-screen bg-white relative overflow-hidden">
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
                    <a
                        href="https://www.nvidia.com/en-us/learn/learning-path/accelerated-data-science/"
                        className="text-green-600 underline hover:text-green-700 text-xs sm:text-sm md:text-base whitespace-nowrap"
                    >
                        {t('linkToLearningPath')}
                    </a>
                </div>

                {/* Main Content - ReactFlow */}
                <div>
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

