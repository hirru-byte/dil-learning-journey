'use client';

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Node, Edge } from '@xyflow/react';
import ReactFlowCurriculum from './ReactFlowCurriculum';
import Image from 'next/image';

// Main component
export default function AcceleratedComputingPage() {
    const t = useTranslations('acceleratedComputing');

    // Placeholder links - you can update these later
    const courseLinks: Record<string, string> = {
        'evenEasierIntroCUDA': 'https://nvdam.widen.net/s/brxsxxtskb/dli-learning-journey-2009000-r5-web',
        'fundamentalsModernCUDA': '#',
        'fundamentalsCUDAPython': '#',
        'gpuAccelerationCpp': '#',
        'scalingGpuAccelerated': '#',
        'optimizingCUDAML': '#',
        'nsightAnalysisSystem': '#',
        'fundamentalsAcceleratedNetworking': '#',
    };

    // Define nodes based on the curriculum structure - arranged in rows
    // Node width: 350px, spacing: 20px
    const nodeWidth = 500;
    const nodeSpacing = 50;
    const titleHeight = 50;
    const rowStartY = 20;
    const rowSpacing = 270; // Space between rows

    const initialNodes: Node[] = useMemo(() => [
        // Foundational Section - Row 1
        {
            id: 'title-foundational',
            type: 'title',
            position: { x: 50, y: rowStartY },
            data: { label: t('categories.foundational') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'evenEasierIntro',
            type: 'course',
            position: { x: 50, y: rowStartY + titleHeight },
            data: {
                title: t('courses.evenEasierIntroCUDA'),
                duration: '1 Hour',
                price: 'Free',
                type: 'green',
                link: courseLinks.evenEasierIntroCUDA,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'fundamentalsModernCUDA',
            type: 'course',
            position: { x: 50 + nodeWidth + nodeSpacing, y: rowStartY + titleHeight },
            data: {
                title: t('courses.fundamentalsModernCUDA'),
                duration: '8 Hours',
                type: 'split',
                hasAsterisk: true,
                greenPrice: '$90',
                purplePrice: '$500',
                link: courseLinks.fundamentalsModernCUDA,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'fundamentalsCUDAPython',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: rowStartY + titleHeight },
            data: {
                title: t('courses.fundamentalsCUDAPython'),
                duration: '8 Hours',
                type: 'split',
                hasAsterisk: true,
                greenPrice: '$90',
                purplePrice: '$500',
                link: courseLinks.fundamentalsCUDAPython,
            },
            style: { width: nodeWidth },
        },
        // GPU Programming Section - Row 2
        {
            id: 'title-gpu-programming',
            type: 'title',
            position: { x: 50, y: rowStartY + rowSpacing },
            data: { label: t('categories.gpuProgramming') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'gpuAccelerationCpp',
            type: 'course',
            position: { x: 50, y: rowStartY + rowSpacing + titleHeight },
            data: {
                title: t('courses.gpuAccelerationCpp'),
                duration: '2 Hours',
                price: '$30',
                type: 'green',
                link: courseLinks.gpuAccelerationCpp,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'scalingGpuAccelerated',
            type: 'course',
            position: { x: 50 + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing + titleHeight },
            data: {
                title: t('courses.scalingGpuAccelerated'),
                duration: '2 Hours',
                price: '$30',
                type: 'green',
                link: courseLinks.scalingGpuAccelerated,
            },
            style: { width: nodeWidth },
        },
        // Profiling Section - Row 3
        {
            id: 'title-profiling',
            type: 'title',
            position: { x: 50, y: rowStartY + rowSpacing * 2 },
            data: { label: t('categories.profiling') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'optimizingCUDAML',
            type: 'course',
            position: { x: 50, y: rowStartY + rowSpacing * 2 + titleHeight },
            data: {
                title: t('courses.optimizingCUDAML'),
                duration: '2 Hours',
                price: '$30',
                type: 'green',
                link: courseLinks.optimizingCUDAML,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'nsightAnalysisSystem',
            type: 'course',
            position: { x: 50 + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 2 + titleHeight },
            data: {
                title: t('courses.nsightAnalysisSystem'),
                duration: '2 Hours',
                price: '$30',
                type: 'green',
                link: courseLinks.nsightAnalysisSystem,
            },
            style: { width: nodeWidth },
        },
        // Networking Section - Row 4
        {
            id: 'title-networking',
            type: 'title',
            position: { x: 50, y: rowStartY + rowSpacing * 3 },
            data: { label: t('categories.networking') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'fundamentalsAcceleratedNetworking',
            type: 'course',
            position: { x: 50, y: rowStartY + rowSpacing * 3 + titleHeight },
            data: {
                title: t('courses.fundamentalsAcceleratedNetworking'),
                duration: '8 Hours',
                price: '$500',
                type: 'purple',
                link: courseLinks.fundamentalsAcceleratedNetworking,
            },
            style: { width: nodeWidth },
        },
    ], [t, courseLinks]);

    // Define edges (arrows) to show flow - horizontal connections with arrow markers
    const initialEdges: Edge[] = useMemo(() => [
        // Foundational flow - horizontal
        {
            id: 'e1',
            source: 'evenEasierIntro',
            target: 'fundamentalsModernCUDA',
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
            source: 'fundamentalsModernCUDA',
            target: 'fundamentalsCUDAPython',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // GPU Programming flow - horizontal
        {
            id: 'e3',
            source: 'gpuAccelerationCpp',
            target: 'scalingGpuAccelerated',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Profiling flow - horizontal
        {
            id: 'e4',
            source: 'optimizingCUDAML',
            target: 'nsightAnalysisSystem',
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
                    <a
                        href="https://www.nvidia.com/en-us/learn/learning-path/accelerated-computing/"
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

