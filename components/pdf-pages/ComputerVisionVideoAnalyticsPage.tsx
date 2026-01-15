'use client';

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Node, Edge } from '@xyflow/react';
import ReactFlowCurriculum from './ReactFlowCurriculum';
import Image from 'next/image';

export default function ComputerVisionVideoAnalyticsPage() {
    const t = useTranslations('computerVisionVideoAnalytics');

    // Placeholder links - you can update these later
    const courseLinks: Record<string, string> = {
        'buildingBrain10Minutes': '#',
        'fundamentalsDeepLearning': '#',
        'applicationsAIAnomalyDetection': '#',
        'applicationsAIPredictiveMaintenance': '#',
        'modelParallelism': '#',
        'computerVisionIndustrialInspection': '#',
        'buildingRealTimeVideoAI': '#',
        'disasterRiskMonitoring': '#',
        'gettingStartedJetsonNano': '#',
        'buildHighPerformanceSensorProcessing': '#',
    };

    // Define nodes based on the curriculum structure
    const nodeWidth = 500;
    const nodeSpacing = 50;
    const rowStartY = 20;
    const verticalSpacing = 250; // Space for vertical connections
    const separatePathY = 900; // Y position for separate path at bottom

    const initialNodes: Node[] = useMemo(() => [
        // Main Path - Horizontal Row 1
        {
            id: 'buildingBrain10Minutes',
            type: 'course',
            position: { x: 50, y: rowStartY },
            data: {
                title: t('courses.buildingBrain10Minutes'),
                duration: '10 Minutes',
                price: 'Free',
                type: 'green',
                link: courseLinks.buildingBrain10Minutes,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'fundamentalsDeepLearning',
            type: 'course',
            position: { x: 50 + nodeWidth + nodeSpacing, y: rowStartY },
            data: {
                title: t('courses.fundamentalsDeepLearning'),
                duration: '8 Hours',
                type: 'split',
                hasAsterisk: true,
                greenPrice: '$90',
                purplePrice: '$500',
                link: courseLinks.fundamentalsDeepLearning,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'applicationsAIAnomalyDetection',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: rowStartY },
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
        // Parallel Courses - Upper Right (to the right of Fundamentals, above Anomaly Detection)
        {
            id: 'buildingRealTimeVideoAI',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: rowStartY - verticalSpacing * 2 },
            data: {
                title: t('courses.buildingRealTimeVideoAI'),
                duration: '8 Hours',
                price: '$90',
                type: 'green',
                link: courseLinks.buildingRealTimeVideoAI,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'disasterRiskMonitoring',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: rowStartY - verticalSpacing },
            data: {
                title: t('courses.disasterRiskMonitoring'),
                duration: '8 Hours',
                price: '$90',
                type: 'green',
                hasAsterisk: true,
                link: courseLinks.disasterRiskMonitoring,
            },
            style: { width: nodeWidth },
        },
        // Main Path - Vertical continuation from Anomaly Detection
        {
            id: 'applicationsAIPredictiveMaintenance',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: rowStartY + verticalSpacing },
            data: {
                title: t('courses.applicationsAIPredictiveMaintenance'),

                price: 'INSTRUCTOR-LED WORKSHOP',
                type: 'purple',
                hasAsterisk: true,
                link: courseLinks.applicationsAIPredictiveMaintenance,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'modelParallelism',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: rowStartY + verticalSpacing * 2 },
            data: {
                title: t('courses.modelParallelism'),
                price: 'INSTRUCTOR-LED WORKSHOP',
                type: 'purple',
                hasAsterisk: true,
                link: courseLinks.modelParallelism,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'computerVisionIndustrialInspection',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: rowStartY + verticalSpacing * 3 },
            data: {
                title: t('courses.computerVisionIndustrialInspection'),
                price: 'INSTRUCTOR-LED WORKSHOP',
                type: 'purple',
                hasAsterisk: true,
                link: courseLinks.computerVisionIndustrialInspection,
            },
            style: { width: nodeWidth },
        },
        // Separate Path - Bottom Left
        {
            id: 'gettingStartedJetsonNano',
            type: 'course',
            position: { x: 50, y: separatePathY },
            data: {
                title: t('courses.gettingStartedJetsonNano'),
                duration: '8 Hours',
                type: 'split',
                hasAsterisk: true,
                greenPrice: 'Free',
                purplePrice: '$500',
                link: courseLinks.gettingStartedJetsonNano,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'buildHighPerformanceSensorProcessing',
            type: 'course',
            position: { x: 50 + nodeWidth + nodeSpacing, y: separatePathY },
            data: {
                title: t('courses.buildHighPerformanceSensorProcessing'),
                duration: '3 Hours',
                price: '$30',
                type: 'green',
                link: courseLinks.buildHighPerformanceSensorProcessing,
            },
            style: { width: nodeWidth },
        },
    ], [t, courseLinks]);

    // Define edges (arrows) to show flow
    const initialEdges: Edge[] = useMemo(() => [
        // Main path - horizontal then vertical
        {
            id: 'e1',
            source: 'buildingBrain10Minutes',
            target: 'fundamentalsDeepLearning',
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
            source: 'fundamentalsDeepLearning',
            target: 'applicationsAIAnomalyDetection',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },

        // Separate path - bottom left
        {
            id: 'e6',
            source: 'gettingStartedJetsonNano',
            target: 'buildHighPerformanceSensorProcessing',
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
                                <span className="text-black font-semibold">**</span>
                                <span className="text-gray-700">{t('courseLegend.doubleAsterisk')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-black font-semibold">{'{ '}{' }'}</span>
                                <span className="text-gray-700">{t('courseLegend.braces')}</span>
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

