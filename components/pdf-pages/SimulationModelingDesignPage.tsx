'use client';

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Node, Edge } from '@xyflow/react';
import ReactFlowCurriculum, { CourseNodeData, TitleNodeData } from './ReactFlowCurriculum';

// Inner component that uses ReactFlow hooks
function ReactFlowContent() {
    const t = useTranslations('simulationModelingDesign');

    // Placeholder links - you can update these later
    const courseLinks: Record<string, string> = {
        'developingOmniverseKitApp': '#',
        'buildOpenUSDIndustrialTwins': '#',
        'fundamentalsWorkingOpenUSD': '#',
        'building3DProductConfigurator': '#',
        'developingAIBackgroundGenerator': '#',
        'creatingCustomizingOmniverseExtension': '#',
        'buildNativeOpenUSDXRApp': '#',
        'developCustomizePublishOmniverse': '#',
        'syntheticDataGenerationComputerVision': '#',
        'buildingDigitalAvatarPipelines': '#',
        'syntheticDataGenerationIsaacSim': '#',
        'learnOpenUSDStagesPrimsAttributes': '#',
        'learnOpenUSDWorkingPrimsSchemas': '#',
        'learnOpenUSDUsingAttributes': '#',
        'learnOpenUSDTraversingStages': '#',
        'learnOpenUSDUnderstandingModelKinds': '#',
        'learnOpenUSDSettingUpAnimations': '#',
        'learnOpenUSDIntroductionStrengthOrdering': '#',
        'learnOpenUSDCreatingCompositionArcs': '#',
        'learnOpenUSDAssetStructurePrinciples': '#',
        'learnOpenUSDDevelopingDataExchange': '#',
    };

    // Define nodes based on the curriculum structure
    const nodeWidth = 500;
    const nodeSpacing = 50;
    const titleHeight = 20;
    const sectionSpacing = 100; // Space between sections
    const rowSpacing = 270; // Space between rows
    const nodeHeight = 220; // Approximate node height

    const initialNodes: Node[] = useMemo(() => {
        // Calculate responsive positions
        // Omniverse section: 3 courses in first row
        const omniverseSectionEnd = 50 + (nodeWidth + nodeSpacing) * 2 + nodeWidth;
        const simulationSectionStartX = omniverseSectionEnd + sectionSpacing;

        // OpenUSD section positions
        const openUSDRow1Y = 930;
        const openUSDRow2Y = openUSDRow1Y + rowSpacing;

        return [
            // Omniverse Kit-Based Development Section (Top-Left)
            {
                id: 'title-omniverse-kit',
                type: 'title',
                position: { x: 50, y: -titleHeight },
                data: { label: t('categories.omniverseKitBased') },
                style: { background: 'transparent', border: 'none' },
            },
            // Row 1
            {
                id: 'developingOmniverseKitApp',
                type: 'course',
                position: { x: 50, y: 70 },
                data: {
                    title: t('courses.developingOmniverseKitApp'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.developingOmniverseKitApp,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'buildOpenUSDIndustrialTwins',
                type: 'course',
                position: { x: 50 + nodeWidth + nodeSpacing, y: 70 },
                data: {
                    title: t('courses.buildOpenUSDIndustrialTwins'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.buildOpenUSDIndustrialTwins,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'fundamentalsWorkingOpenUSD',
                type: 'course',
                position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: 70 },
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
                id: 'buildingDigitalAvatarPipelines',
                type: 'course',
                position: { x: 50 + (nodeWidth + nodeSpacing) * 4, y: 70 },
                data: {
                    title: t('courses.buildingDigitalAvatarPipelines'),
                    duration: '8 Hours',
                    price: '$2H',
                    type: 'purple',
                    hasAsterisk: true,
                    link: courseLinks.buildingDigitalAvatarPipelines,
                },
                style: { width: nodeWidth },
            },
            // Row 2 (branching from buildOpenUSDIndustrialTwins)
            {
                id: 'building3DProductConfigurator',
                type: 'course',
                position: { x: 50 + nodeWidth + nodeSpacing, y: 340 },
                data: {
                    title: t('courses.building3DProductConfigurator'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.building3DProductConfigurator,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'developingAIBackgroundGenerator',
                type: 'course',
                position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: 340 },
                data: {
                    title: t('courses.developingAIBackgroundGenerator'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.developingAIBackgroundGenerator,
                },
                style: { width: nodeWidth },
            },

            // Row 3 (branching from building3DProductConfigurator)
            {
                id: 'buildNativeOpenUSDXRApp',
                type: 'course',
                position: { x: 50 + nodeWidth + nodeSpacing, y: 610 },
                data: {
                    title: t('courses.buildNativeOpenUSDXRApp'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.buildNativeOpenUSDXRApp,
                },
                style: { width: nodeWidth },
            },

            {
                id: 'creatingCustomizingOmniverseExtension',
                type: 'course',
                position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: 610 },
                data: {
                    title: t('courses.creatingCustomizingOmniverseExtension'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.creatingCustomizingOmniverseExtension,
                },
                style: { width: nodeWidth },
            },

            // Simulation and Synthetic Data Section (Top-Right) - Responsive position
            {
                id: 'title-simulation-synthetic',
                type: 'title',
                position: { x: simulationSectionStartX, y: titleHeight },
                data: { label: t('categories.simulationSyntheticData') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'syntheticDataGenerationComputerVision',
                type: 'course',
                position: { x: simulationSectionStartX, y: 70 },
                data: {
                    title: t('courses.syntheticDataGenerationComputerVision'),
                    duration: '3 Hours',
                    price: '$30',
                    type: 'green',
                    link: courseLinks.syntheticDataGenerationComputerVision,
                },
                style: { width: nodeWidth },
            },

            {
                id: 'syntheticDataGenerationIsaacSim',
                type: 'course',
                position: { x: simulationSectionStartX, y: 340 },
                data: {
                    title: t('courses.syntheticDataGenerationIsaacSim'),
                    duration: '1 Hour',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.syntheticDataGenerationIsaacSim,
                },
                style: { width: nodeWidth },
            },

            {
                id: 'developCustomizePublishOmniverse',
                type: 'course',
                position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: 870 },
                data: {
                    title: t('courses.developCustomizePublishOmniverse'),
                    duration: '8 Hours',
                    price: 'Free',
                    type: 'green',
                    hasAsterisk: true,
                    link: courseLinks.developCustomizePublishOmniverse,
                },
                style: { width: nodeWidth },
            },

            // OpenUSD Section (Bottom Half)
            {
                id: 'title-openusd',
                type: 'title',
                position: { x: 50, y: 1080 - titleHeight },
                data: { label: t('categories.openUSD') },
                style: { background: 'transparent', border: 'none' },
            },
            // OpenUSD Row 1
            {
                id: 'learnOpenUSDStagesPrimsAttributes',
                type: 'course',
                position: { x: 50, y: 1130 },
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
                position: { x: 50 + nodeWidth + nodeSpacing, y: 1130 },
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
                position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: 1130 },
                data: {
                    title: t('courses.learnOpenUSDUsingAttributes'),
                    duration: '45 Minutes',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.learnOpenUSDUsingAttributes,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'learnOpenUSDTraversingStages',
                type: 'course',
                position: { x: 50 + (nodeWidth + nodeSpacing) * 3, y: 1130 },
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
                position: { x: 50 + (nodeWidth + nodeSpacing) * 4, y: 1130 },
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
                position: { x: 50 + (nodeWidth + nodeSpacing) * 5, y: 1130 },
                data: {
                    title: t('courses.learnOpenUSDSettingUpAnimations'),
                    duration: '15 Minutes',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.learnOpenUSDSettingUpAnimations,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'learnOpenUSDIntroductionStrengthOrdering',
                type: 'course',
                position: { x: 50 + (nodeWidth + nodeSpacing) * 6, y: 1130 },
                data: {
                    title: t('courses.learnOpenUSDIntroductionStrengthOrdering'),
                    duration: '45 Minutes',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.learnOpenUSDIntroductionStrengthOrdering,
                },
                style: { width: nodeWidth },
            },
            // OpenUSD Row 2 - Responsive position
            {
                id: 'learnOpenUSDCreatingCompositionArcs',
                type: 'course',
                position: { x: 50, y: 1450 },
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
                position: { x: 50 + nodeWidth + nodeSpacing, y: 1450 },
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
                id: 'learnOpenUSDDevelopingDataExchange',
                type: 'course',
                position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: 1450 },
                data: {
                    title: t('courses.learnOpenUSDDevelopingDataExchange'),
                    duration: '90 Minutes',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.learnOpenUSDDevelopingDataExchange,
                },
                style: { width: nodeWidth },
            },
        ];
    }, [t, courseLinks, nodeWidth, nodeSpacing, sectionSpacing, rowSpacing]);

    // Define edges (arrows) to show flow
    const initialEdges: Edge[] = useMemo(() => [
        // Omniverse Kit-Based Development flow
        {
            id: 'e1',
            source: 'developingOmniverseKitApp',
            target: 'buildOpenUSDIndustrialTwins',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 3 },
        },
        {
            id: 'e2',
            source: 'buildOpenUSDIndustrialTwins',
            target: 'fundamentalsWorkingOpenUSD',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 3 },
        },
        {
            id: 'e3',
            source: 'developingOmniverseKitApp',
            target: 'building3DProductConfigurator',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 3 },
        },
        {
            id: 'e4',
            source: 'building3DProductConfigurator',
            target: 'developingAIBackgroundGenerator',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 3 },
        },

        {
            id: 'e5',
            source: 'developingOmniverseKitApp',
            target: 'buildNativeOpenUSDXRApp',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 3 },
        },
        // Simulation and Synthetic Data flow (vertical)

        // OpenUSD Row 1 flow (horizontal)
        {
            id: 'e8',
            source: 'learnOpenUSDStagesPrimsAttributes',
            target: 'learnOpenUSDWorkingPrimsSchemas',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 3 },
        },
        {
            id: 'e9',
            source: 'learnOpenUSDWorkingPrimsSchemas',
            target: 'learnOpenUSDUsingAttributes',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 3 },
        },
        {
            id: 'e10',
            source: 'learnOpenUSDUsingAttributes',
            target: 'learnOpenUSDTraversingStages',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 3 },
        },
        {
            id: 'e11',
            source: 'learnOpenUSDTraversingStages',
            target: 'learnOpenUSDUnderstandingModelKinds',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 3 },
        },
        {
            id: 'e12',
            source: 'learnOpenUSDUnderstandingModelKinds',
            target: 'learnOpenUSDSettingUpAnimations',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 3 },
        },
        {
            id: 'e13',
            source: 'learnOpenUSDSettingUpAnimations',
            target: 'learnOpenUSDIntroductionStrengthOrdering',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 3 },
        },
        {
            id: 'e14',
            source: 'learnOpenUSDIntroductionStrengthOrdering',
            target: 'learnOpenUSDCreatingCompositionArcs',
            sourceHandle: 'bottom', // Connect from bottom handle
            targetHandle: 'top', // Connect to top handle
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 3 },
        },
        // OpenUSD Row 2 flow (horizontal)
        {
            id: 'e15',
            source: 'learnOpenUSDCreatingCompositionArcs',
            target: 'learnOpenUSDAssetStructurePrinciples',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 3 },
        },
        {
            id: 'e16',
            source: 'learnOpenUSDAssetStructurePrinciples',
            target: 'learnOpenUSDDevelopingDataExchange',
            type: 'smoothstep',
            animated: false,

            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 3 },
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
                        containerHeight="h-[600px] sm:h-[800px] md:h-[800px] lg:h-[800px]"
                        showControls={true}
                        alignToTopRight={true}
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
                    <div className="w-32 h-12 bg-green-600 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-sm">NVIDIA</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Main component
export default function SimulationModelingDesignPage() {
    return <ReactFlowContent />;
}

