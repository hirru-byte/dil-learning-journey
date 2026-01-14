'use client';

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Node, Edge } from '@xyflow/react';
import ReactFlowCurriculum from './ReactFlowCurriculum';

export default function IndustrialDigitalTwinsTrainingPage() {
    const t = useTranslations('industrialDigitalTwinsTraining');

    // Placeholder links - you can update these later
    const courseLinks: Record<string, string> = {
        'whatIsDigitalTwin': '#',
        'fundamentalsWorkingOpenUSD': '#',
        'openUSDFoundationsLearningPath': '#',
        'introductionDevelopingNVIDIAOmniverse': '#',
        'creatingOmniverseExtensionPython': '#',
        'extendingOmniverseKitApplicationsDigitalTwins': '#',
        'customizingUIFrontEndDashboardsDigitalTwins': '#',
        'buildingDeployingDigitalTwinApplicationsOmniverseKitAppStreaming': '#',
        'assemblingFirstDigitalTwinOmniverseOpenUSD': '#',
        'preparing3DAssetsSimulationPhysicalAI': '#',
        'learnOpenUSDCreatingCompositionArcs': '#',
        'learnOpenUSDAssetStructurePrinciples': '#',
        'learnOpenUSDDevelopingDataExchangePipelines': '#',
        'learnOpenUSDAssetModularityInstancing': '#',
        'syntheticDataGenerationGenerativeAIReferenceWorkflow': '#',
        'roboticsFundamentalsLearningPath': '#',
        'introductionNVIDIACosmosPhysicalAI': '#',
        'buildingAIAgentsMultimodalModels': '#',
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
            // Section 1: Digital Twin Foundations
            {
                id: 'title-digital-twin-foundations',
                type: 'title',
                position: { x: startX, y: rowStartY },
                data: { label: t('sections.digitalTwinFoundations') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'whatIsDigitalTwin',
                type: 'course',
                position: { x: startX, y: rowStartY + titleHeight },
                data: {
                    title: t('courses.whatIsDigitalTwin'),
                    duration: 'Article',
                    price: '',
                    type: 'grey',
                    link: courseLinks.whatIsDigitalTwin,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'fundamentalsWorkingOpenUSD',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + titleHeight },
                data: {
                    title: t('courses.fundamentalsWorkingOpenUSD'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.fundamentalsWorkingOpenUSD,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'openUSDFoundationsLearningPath',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + titleHeight },
                data: {
                    title: t('courses.openUSDFoundationsLearningPath'),
                    duration: '11 Hours',
                    price: 'Free',
                    type: 'purple',
                    link: courseLinks.openUSDFoundationsLearningPath,
                },
                style: { width: nodeWidth },
            },

            // Section 2: Getting Started with Omniverse Development
            {
                id: 'title-omniverse-development',
                type: 'title',
                position: { x: startX, y: rowStartY + rowSpacing },
                data: { label: t('sections.gettingStartedOmniverseDevelopment') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'introductionDevelopingNVIDIAOmniverse',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.introductionDevelopingNVIDIAOmniverse'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.introductionDevelopingNVIDIAOmniverse,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'creatingOmniverseExtensionPython',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.creatingOmniverseExtensionPython'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.creatingOmniverseExtensionPython,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'extendingOmniverseKitApplicationsDigitalTwins',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.extendingOmniverseKitApplicationsDigitalTwins'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.extendingOmniverseKitApplicationsDigitalTwins,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'customizingUIFrontEndDashboardsDigitalTwins',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 3, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.customizingUIFrontEndDashboardsDigitalTwins'),
                    duration: 'Coming Soon',
                    price: '',
                    type: 'green',
                    link: courseLinks.customizingUIFrontEndDashboardsDigitalTwins,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'buildingDeployingDigitalTwinApplicationsOmniverseKitAppStreaming',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 4, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.buildingDeployingDigitalTwinApplicationsOmniverseKitAppStreaming'),
                    duration: '1.5 Hours',
                    price: '$30',
                    type: 'green',
                    link: courseLinks.buildingDeployingDigitalTwinApplicationsOmniverseKitAppStreaming,
                },
                style: { width: nodeWidth },
            },

            // Section 3: Assembling OpenUSD Data for Digital Twins (First Row)
            {
                id: 'title-assembling-openusd-1',
                type: 'title',
                position: { x: startX, y: rowStartY + rowSpacing * 2 },
                data: { label: t('sections.assemblingOpenUSDDataDigitalTwins') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'assemblingFirstDigitalTwinOmniverseOpenUSD',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.assemblingFirstDigitalTwinOmniverseOpenUSD'),
                    duration: '4 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.assemblingFirstDigitalTwinOmniverseOpenUSD,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'preparing3DAssetsSimulationPhysicalAI',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.preparing3DAssetsSimulationPhysicalAI'),
                    duration: 'Coming Soon',
                    price: '',
                    type: 'green',
                    link: courseLinks.preparing3DAssetsSimulationPhysicalAI,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'learnOpenUSDCreatingCompositionArcs',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing * 2 + titleHeight },
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
                position: { x: startX + (nodeWidth + nodeSpacing) * 3, y: rowStartY + rowSpacing * 2 + titleHeight },
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
                position: { x: startX + (nodeWidth + nodeSpacing) * 4, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.learnOpenUSDDevelopingDataExchangePipelines'),
                    duration: '1.5 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.learnOpenUSDDevelopingDataExchangePipelines,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'learnOpenUSDAssetModularityInstancing',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 5, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.learnOpenUSDAssetModularityInstancing'),
                    duration: 'Coming Soon',
                    price: '',
                    type: 'green',
                    link: courseLinks.learnOpenUSDAssetModularityInstancing,
                },
                style: { width: nodeWidth },
            },

            // Section 4: Assembling OpenUSD Data for Digital Twins (Second Row)
            {
                id: 'syntheticDataGenerationGenerativeAIReferenceWorkflow',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing * 3 + titleHeight },
                data: {
                    title: t('courses.syntheticDataGenerationGenerativeAIReferenceWorkflow'),
                    duration: 'Workflow',
                    price: '',
                    type: 'grey',
                    link: courseLinks.syntheticDataGenerationGenerativeAIReferenceWorkflow,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'roboticsFundamentalsLearningPath',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 3 + titleHeight },
                data: {
                    title: t('courses.roboticsFundamentalsLearningPath'),
                    duration: '28 Hours',
                    price: 'Free',
                    type: 'purple',
                    link: courseLinks.roboticsFundamentalsLearningPath,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'introductionNVIDIACosmosPhysicalAI',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing * 3 + titleHeight },
                data: {
                    title: t('courses.introductionNVIDIACosmosPhysicalAI'),
                    duration: '2 Hours',
                    price: '$30',
                    type: 'green',
                    link: courseLinks.introductionNVIDIACosmosPhysicalAI,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'buildingAIAgentsMultimodalModels',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 3, y: rowStartY + rowSpacing * 3 + titleHeight },
                data: {
                    title: t('courses.buildingAIAgentsMultimodalModels'),
                    duration: 'Coming Soon',
                    price: '',
                    type: 'green',
                    link: courseLinks.buildingAIAgentsMultimodalModels,
                },
                style: { width: nodeWidth },
            },
        ];
    }, [t, courseLinks]);

    // Define edges (arrows) to show flow within each section
    const initialEdges: Edge[] = useMemo(() => [
        // Section 1: Digital Twin Foundations
        {
            id: 'e1',
            source: 'whatIsDigitalTwin',
            target: 'fundamentalsWorkingOpenUSD',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e2',
            source: 'fundamentalsWorkingOpenUSD',
            target: 'openUSDFoundationsLearningPath',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Section 2: Getting Started with Omniverse Development
        {
            id: 'e3',
            source: 'introductionDevelopingNVIDIAOmniverse',
            target: 'creatingOmniverseExtensionPython',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e4',
            source: 'creatingOmniverseExtensionPython',
            target: 'extendingOmniverseKitApplicationsDigitalTwins',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e5',
            source: 'extendingOmniverseKitApplicationsDigitalTwins',
            target: 'customizingUIFrontEndDashboardsDigitalTwins',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e6',
            source: 'customizingUIFrontEndDashboardsDigitalTwins',
            target: 'buildingDeployingDigitalTwinApplicationsOmniverseKitAppStreaming',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Section 3: Assembling OpenUSD Data (First Row)
        {
            id: 'e7',
            source: 'assemblingFirstDigitalTwinOmniverseOpenUSD',
            target: 'preparing3DAssetsSimulationPhysicalAI',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e8',
            source: 'preparing3DAssetsSimulationPhysicalAI',
            target: 'learnOpenUSDCreatingCompositionArcs',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e9',
            source: 'learnOpenUSDCreatingCompositionArcs',
            target: 'learnOpenUSDAssetStructurePrinciples',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e10',
            source: 'learnOpenUSDAssetStructurePrinciples',
            target: 'learnOpenUSDDevelopingDataExchangePipelines',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e11',
            source: 'learnOpenUSDDevelopingDataExchangePipelines',
            target: 'learnOpenUSDAssetModularityInstancing',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Section 4: Assembling OpenUSD Data (Second Row)
        {
            id: 'e12',
            source: 'syntheticDataGenerationGenerativeAIReferenceWorkflow',
            target: 'roboticsFundamentalsLearningPath',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e13',
            source: 'roboticsFundamentalsLearningPath',
            target: 'introductionNVIDIACosmosPhysicalAI',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e14',
            source: 'introductionNVIDIACosmosPhysicalAI',
            target: 'buildingAIAgentsMultimodalModels',
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
                    <a
                        href="#"
                        className="text-green-600 underline hover:text-green-700 text-xs sm:text-sm md:text-base whitespace-nowrap"
                    >
                        {t('linkToLearningPath')}
                    </a>
                </div>

                {/* Main Content - ReactFlow */}
                <div className="shadow-2xl">
                    <ReactFlowCurriculum
                        nodes={initialNodes}
                        edges={initialEdges}
                        containerHeight="h-[500px] sm:h-[600px] md:h-[800px] lg:h-[900px]"
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
