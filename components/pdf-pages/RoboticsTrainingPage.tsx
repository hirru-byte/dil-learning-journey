'use client';

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Node, Edge } from '@xyflow/react';
import ReactFlowCurriculum from './ReactFlowCurriculum';
import Image from 'next/image';

export default function RoboticsTrainingPage() {
    const t = useTranslations('roboticsTraining');

    // Placeholder links - you can update these later
    const courseLinks: Record<string, string> = {
        'beginnersGuideAutonomousRobots': '#',
        'introductionNVIDIACosmosPhysicalAI': '#',
        'openUSDFoundationsLearningPath': '#',
        'gettingStartedSimulatingFirstRobotIsaacSim': '#',
        'ingestingRobotAssetsSimulatingRobotIsaacSim': '#',
        'syntheticDataGenerationPerceptionModelTrainingIsaacSim': '#',
        'developingRobotsSoftwareInLoopIsaacSim': '#',
        'leveragingROS2HardwareInLoopIsaacSim': '#',
        'developSimulateDeployRobotIntelligenceScaledFoundations': '#',
        'generatingHighQualityMotionDataRoboticsMobilityGen': '#',
        'softwareInLoopTestingRobotsOpenUSDIsaacSIMROS': '#',
        'introductionRobotLearningIsaacLab': '#',
        'transferringRobotLearningPoliciesSimulationReality': '#',
        'trainFirstRobotIsaacLab': '#',
        'trainSecondRobotIsaacLab': '#',
        'bringYourOwnRobotIntegratingAssetsIsaacLab': '#',
        'imitationLearningGROOTMimic': '#',
        'introductionAIBasedRobotDevelopmentIsaacROS': '#',
        'acceleratingROS2NVIDIAGPUPoweredLibrariesAIModels': '#',
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
            // Section 1: Robotics Foundations
            {
                id: 'title-robotics-foundations',
                type: 'title',
                position: { x: startX, y: rowStartY },
                data: { label: t('sections.roboticsFoundations') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'beginnersGuideAutonomousRobots',
                type: 'course',
                position: { x: startX, y: rowStartY + titleHeight },
                data: {
                    title: t('courses.beginnersGuideAutonomousRobots'),
                    duration: '1 Hour',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.beginnersGuideAutonomousRobots,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'introductionNVIDIACosmosPhysicalAI',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + titleHeight },
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

            // Section 2: Getting Started with Isaac Sim
            {
                id: 'title-isaac-sim',
                type: 'title',
                position: { x: startX, y: rowStartY + rowSpacing },
                data: { label: t('sections.gettingStartedIsaacSim') },
                style: { background: 'transparent', border: 'none' },
            },
            // Track 1 (Top Row)
            {
                id: 'gettingStartedSimulatingFirstRobotIsaacSim',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.gettingStartedSimulatingFirstRobotIsaacSim'),
                    duration: '1.5 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.gettingStartedSimulatingFirstRobotIsaacSim,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'ingestingRobotAssetsSimulatingRobotIsaacSim',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.ingestingRobotAssetsSimulatingRobotIsaacSim'),
                    duration: '1 Hour',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.ingestingRobotAssetsSimulatingRobotIsaacSim,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'syntheticDataGenerationPerceptionModelTrainingIsaacSim',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.syntheticDataGenerationPerceptionModelTrainingIsaacSim'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.syntheticDataGenerationPerceptionModelTrainingIsaacSim,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'developingRobotsSoftwareInLoopIsaacSim',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 3, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.developingRobotsSoftwareInLoopIsaacSim'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.developingRobotsSoftwareInLoopIsaacSim,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'leveragingROS2HardwareInLoopIsaacSim',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 4, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.leveragingROS2HardwareInLoopIsaacSim'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.leveragingROS2HardwareInLoopIsaacSim,
                },
                style: { width: nodeWidth },
            },
            // Track 2 (Bottom Row)
            {
                id: 'developSimulateDeployRobotIntelligenceScaledFoundations',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.developSimulateDeployRobotIntelligenceScaledFoundations'),
                    duration: '1 Hour',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.developSimulateDeployRobotIntelligenceScaledFoundations,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'generatingHighQualityMotionDataRoboticsMobilityGen',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.generatingHighQualityMotionDataRoboticsMobilityGen'),
                    duration: '1.5 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.generatingHighQualityMotionDataRoboticsMobilityGen,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'softwareInLoopTestingRobotsOpenUSDIsaacSIMROS',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.softwareInLoopTestingRobotsOpenUSDIsaacSIMROS'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.softwareInLoopTestingRobotsOpenUSDIsaacSIMROS,
                },
                style: { width: nodeWidth },
            },

            // Section 3: Getting Started with Isaac Lab
            {
                id: 'title-isaac-lab',
                type: 'title',
                position: { x: startX, y: rowStartY + rowSpacing * 3 },
                data: { label: t('sections.gettingStartedIsaacLab') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'introductionRobotLearningIsaacLab',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing * 3 + titleHeight },
                data: {
                    title: t('courses.introductionRobotLearningIsaacLab'),
                    duration: '3 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.introductionRobotLearningIsaacLab,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'transferringRobotLearningPoliciesSimulationReality',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 3 + titleHeight },
                data: {
                    title: t('courses.transferringRobotLearningPoliciesSimulationReality'),
                    duration: '1 Hour',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.transferringRobotLearningPoliciesSimulationReality,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'trainFirstRobotIsaacLab',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing * 3 + titleHeight },
                data: {
                    title: t('courses.trainFirstRobotIsaacLab'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.trainFirstRobotIsaacLab,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'trainSecondRobotIsaacLab',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 3, y: rowStartY + rowSpacing * 3 + titleHeight },
                data: {
                    title: t('courses.trainSecondRobotIsaacLab'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.trainSecondRobotIsaacLab,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'bringYourOwnRobotIntegratingAssetsIsaacLab',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 4, y: rowStartY + rowSpacing * 3 + titleHeight },
                data: {
                    title: t('courses.bringYourOwnRobotIntegratingAssetsIsaacLab'),
                    duration: 'Coming Soon',
                    price: '',
                    type: 'green',
                    link: courseLinks.bringYourOwnRobotIntegratingAssetsIsaacLab,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'imitationLearningGROOTMimic',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 5, y: rowStartY + rowSpacing * 3 + titleHeight },
                data: {
                    title: t('courses.imitationLearningGROOTMimic'),
                    duration: 'Coming Soon',
                    price: '',
                    type: 'green',
                    link: courseLinks.imitationLearningGROOTMimic,
                },
                style: { width: nodeWidth },
            },

            // Section 4: Getting Started with Isaac ROS
            {
                id: 'title-isaac-ros',
                type: 'title',
                position: { x: startX, y: rowStartY + rowSpacing * 4 },
                data: { label: t('sections.gettingStartedIsaacROS') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'introductionAIBasedRobotDevelopmentIsaacROS',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing * 4 + titleHeight },
                data: {
                    title: t('courses.introductionAIBasedRobotDevelopmentIsaacROS'),
                    duration: '0.5 Hour',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.introductionAIBasedRobotDevelopmentIsaacROS,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'acceleratingROS2NVIDIAGPUPoweredLibrariesAIModels',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 4 + titleHeight },
                data: {
                    title: t('courses.acceleratingROS2NVIDIAGPUPoweredLibrariesAIModels'),
                    duration: '3 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.acceleratingROS2NVIDIAGPUPoweredLibrariesAIModels,
                },
                style: { width: nodeWidth },
            },
        ];
    }, [t, courseLinks]);

    // Define edges (arrows) to show flow
    const initialEdges: Edge[] = useMemo(() => [
        // Robotics Foundations section
        {
            id: 'e1',
            source: 'beginnersGuideAutonomousRobots',
            target: 'introductionNVIDIACosmosPhysicalAI',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e2',
            source: 'introductionNVIDIACosmosPhysicalAI',
            target: 'openUSDFoundationsLearningPath',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Isaac Sim Track 1 (Top Row)
        {
            id: 'e3',
            source: 'gettingStartedSimulatingFirstRobotIsaacSim',
            target: 'ingestingRobotAssetsSimulatingRobotIsaacSim',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e4',
            source: 'ingestingRobotAssetsSimulatingRobotIsaacSim',
            target: 'syntheticDataGenerationPerceptionModelTrainingIsaacSim',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e5',
            source: 'syntheticDataGenerationPerceptionModelTrainingIsaacSim',
            target: 'developingRobotsSoftwareInLoopIsaacSim',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e6',
            source: 'developingRobotsSoftwareInLoopIsaacSim',
            target: 'leveragingROS2HardwareInLoopIsaacSim',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },

        // Isaac Lab section
        {
            id: 'e9',
            source: 'introductionRobotLearningIsaacLab',
            target: 'transferringRobotLearningPoliciesSimulationReality',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e10',
            source: 'transferringRobotLearningPoliciesSimulationReality',
            target: 'trainFirstRobotIsaacLab',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e11',
            source: 'trainFirstRobotIsaacLab',
            target: 'trainSecondRobotIsaacLab',
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
                        href="https://www.nvidia.com/en-us/learn/learning-path/robotics/"
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
                        src='/nvidia-sq-logo.webp'
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
