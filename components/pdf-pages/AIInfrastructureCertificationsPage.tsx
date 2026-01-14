'use client';

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Node, Edge } from '@xyflow/react';
import ReactFlowCurriculum from './ReactFlowCurriculum';

export default function AIInfrastructureCertificationsPage() {
    const t = useTranslations('aiInfrastructureCertifications');

    // Placeholder links - you can update these later
    const courseLinks: Record<string, string> = {
        'aiInfrastructureOperationsFundamentals': '#',
        'associateAIInfrastructureOperationsCertification': '#',
        'dataCenterManagementNVIDIAUFM': '#',
        'blueFieldDPUAdministration': '#',
        'fundamentalsRDMAProgramming': '#',
        'nvidiaCumulusLinuxPublicBootCamp': '#',
        'infiniBandProfessional': '#',
        'spectrumXNetworkingPlatformAdministrationPublicTraining': '#',
        'professionalAINetworkingCertification': '#',
        'nvidiaAIInfrastructurePublicTraining': '#',
        'professionalAIInfrastructureCertification': '#',
        'nvidiaAIOperationsPublicTraining': '#',
        'professionalAIOperationsCertification': '#',
    };

    // Define nodes based on the curriculum structure
    const nodeWidth = 500;
    const nodeSpacing = 50;
    const titleHeight = 50;
    const rowStartY = 20;
    const rowSpacing = 270; // Space between rows
    const sectionSpacing = 100; // Space between sections

    const initialNodes: Node[] = useMemo(() => {
        const startX = 50;
        const professionalX = startX + nodeWidth * 2 + nodeSpacing * 1 + sectionSpacing;

        return [
            // Associate Certification Section
            {
                id: 'title-associate',
                type: 'title',
                position: { x: startX, y: rowStartY },
                data: { label: t('sections.associateCertification') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'title-infrastructure-operations',
                type: 'title',
                position: { x: startX, y: rowStartY + titleHeight },
                data: { label: t('sections.infrastructureOperations') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'aiInfrastructureOperationsFundamentals',
                type: 'course',
                position: { x: startX, y: rowStartY + titleHeight * 2 },
                data: {
                    title: t('courses.aiInfrastructureOperationsFundamentals'),
                    duration: '7 Hours',
                    price: '$50',
                    type: 'green',
                    link: courseLinks.aiInfrastructureOperationsFundamentals,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'associateAIInfrastructureOperationsCertification',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + titleHeight * 2 },
                data: {
                    title: t('courses.associateAIInfrastructureOperationsCertification'),
                    duration: '1 Hour',
                    price: '$125',
                    type: 'blue',
                    hasDoubleAsterisk: true,
                    link: courseLinks.associateAIInfrastructureOperationsCertification,
                },
                style: { width: nodeWidth },
            },

            // Professional Certifications Section
            {
                id: 'title-professional',
                type: 'title',
                position: { x: professionalX, y: rowStartY },
                data: { label: t('sections.professionalCertifications') },
                style: { background: 'transparent', border: 'none' },
            },

            // AI Networking Subsection
            {
                id: 'title-ai-networking',
                type: 'title',
                position: { x: professionalX, y: rowStartY + titleHeight },
                data: { label: t('sections.aiNetworking') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'dataCenterManagementNVIDIAUFM',
                type: 'course',
                position: { x: professionalX, y: rowStartY + titleHeight * 2 },
                data: {
                    title: t('courses.dataCenterManagementNVIDIAUFM'),
                    duration: '3 Hours',
                    price: '$50',
                    type: 'green',
                    link: courseLinks.dataCenterManagementNVIDIAUFM,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'blueFieldDPUAdministration',
                type: 'course',
                position: { x: professionalX + nodeWidth + nodeSpacing, y: rowStartY + titleHeight * 2 },
                data: {
                    title: t('courses.blueFieldDPUAdministration'),
                    duration: '3 Hours',
                    price: '$50',
                    type: 'green',
                    link: courseLinks.blueFieldDPUAdministration,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'fundamentalsRDMAProgramming',
                type: 'course',
                position: { x: professionalX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + titleHeight * 2 },
                data: {
                    title: t('courses.fundamentalsRDMAProgramming'),
                    duration: '4 Hours',
                    price: '$50',
                    type: 'green',
                    link: courseLinks.fundamentalsRDMAProgramming,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'nvidiaCumulusLinuxPublicBootCamp',
                type: 'course',
                position: { x: professionalX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.nvidiaCumulusLinuxPublicBootCamp'),
                    duration: '12 Hours',
                    price: '$1,500',
                    type: 'purple',
                    link: courseLinks.nvidiaCumulusLinuxPublicBootCamp,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'infiniBandProfessional',
                type: 'course',
                position: { x: professionalX + (nodeWidth + nodeSpacing) * 3, y: rowStartY + titleHeight * 2 },
                data: {
                    title: t('courses.infiniBandProfessional'),
                    duration: '6 Hours',
                    price: '$200',
                    type: 'green',
                    link: courseLinks.infiniBandProfessional,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'spectrumXNetworkingPlatformAdministrationPublicTraining',
                type: 'course',
                position: { x: professionalX + (nodeWidth + nodeSpacing) * 4, y: rowStartY + titleHeight * 2 },
                data: {
                    title: t('courses.spectrumXNetworkingPlatformAdministrationPublicTraining'),
                    duration: '12 Hours',
                    price: '$1,500',
                    type: 'purple',
                    link: courseLinks.spectrumXNetworkingPlatformAdministrationPublicTraining,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'professionalAINetworkingCertification',
                type: 'course',
                position: { x: professionalX + (nodeWidth + nodeSpacing) * 5, y: rowStartY + titleHeight * 2 },
                data: {
                    title: t('courses.professionalAINetworkingCertification'),
                    duration: '2 Hours',
                    price: '$400',
                    type: 'blue',
                    hasDoubleAsterisk: true,
                    link: courseLinks.professionalAINetworkingCertification,
                },
                style: { width: nodeWidth },
            },

            // AI Infrastructure Subsection
            {
                id: 'title-ai-infrastructure',
                type: 'title',
                position: { x: professionalX, y: rowStartY + rowSpacing },
                data: { label: t('sections.aiInfrastructure') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'nvidiaAIInfrastructurePublicTraining',
                type: 'course',
                position: { x: professionalX, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.nvidiaAIInfrastructurePublicTraining'),
                    duration: '28 Hours',
                    price: '$3,500',
                    type: 'purple',
                    link: courseLinks.nvidiaAIInfrastructurePublicTraining,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'professionalAIInfrastructureCertification',
                type: 'course',
                position: { x: professionalX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.professionalAIInfrastructureCertification'),
                    duration: '2 Hours',
                    price: '$400',
                    type: 'blue',
                    hasDoubleAsterisk: true,
                    link: courseLinks.professionalAIInfrastructureCertification,
                },
                style: { width: nodeWidth },
            },

            // AI Operations Subsection
            {
                id: 'title-ai-operations',
                type: 'title',
                position: { x: professionalX, y: rowStartY + rowSpacing * 2 },
                data: { label: t('sections.aiOperations') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'nvidiaAIOperationsPublicTraining',
                type: 'course',
                position: { x: professionalX, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.nvidiaAIOperationsPublicTraining'),
                    duration: '24 Hours',
                    price: '$3,500',
                    type: 'purple',
                    link: courseLinks.nvidiaAIOperationsPublicTraining,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'professionalAIOperationsCertification',
                type: 'course',
                position: { x: professionalX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.professionalAIOperationsCertification'),
                    duration: '2 Hours',
                    price: '$400',
                    type: 'blue',
                    hasDoubleAsterisk: true,
                    link: courseLinks.professionalAIOperationsCertification,
                },
                style: { width: nodeWidth },
            },
        ];
    }, [t, courseLinks]);

    // Define edges (arrows) to show flow
    const initialEdges: Edge[] = useMemo(() => [
        // Associate Certification path
        {
            id: 'e1',
            source: 'aiInfrastructureOperationsFundamentals',
            target: 'associateAIInfrastructureOperationsCertification',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // AI Networking path
        {
            id: 'e2',
            source: 'dataCenterManagementNVIDIAUFM',
            target: 'blueFieldDPUAdministration',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e3',
            source: 'blueFieldDPUAdministration',
            target: 'fundamentalsRDMAProgramming',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e4',
            source: 'fundamentalsRDMAProgramming',
            target: 'nvidiaCumulusLinuxPublicBootCamp',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e5',
            source: 'nvidiaCumulusLinuxPublicBootCamp',
            target: 'infiniBandProfessional',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e6',
            source: 'infiniBandProfessional',
            target: 'spectrumXNetworkingPlatformAdministrationPublicTraining',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e7',
            source: 'spectrumXNetworkingPlatformAdministrationPublicTraining',
            target: 'professionalAINetworkingCertification',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // AI Infrastructure path
        {
            id: 'e8',
            source: 'nvidiaAIInfrastructurePublicTraining',
            target: 'professionalAIInfrastructureCertification',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // AI Operations path
        {
            id: 'e9',
            source: 'nvidiaAIOperationsPublicTraining',
            target: 'professionalAIOperationsCertification',
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
                    <div className="flex flex-wrap gap-2 sm:gap-4">
                        {/* Certification Badges */}
                        <div className="bg-gray-200 border-2 border-gray-300 rounded-lg p-2 sm:p-3 text-center min-w-[150px] sm:min-w-[180px]">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <span className="text-white text-[10px] sm:text-xs font-bold">N</span>
                            </div>
                            <p className="text-[10px] sm:text-xs font-semibold text-black leading-tight">
                                {t('certificationBadges.associate')}
                            </p>
                        </div>
                        <div className="bg-gray-200 border-2 border-gray-300 rounded-lg p-2 sm:p-3 text-center min-w-[150px] sm:min-w-[180px]">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <span className="text-white text-[10px] sm:text-xs font-bold">N</span>
                            </div>
                            <p className="text-[10px] sm:text-xs font-semibold text-black leading-tight">
                                {t('certificationBadges.professionalNetworking')}
                            </p>
                        </div>
                        <div className="bg-gray-200 border-2 border-gray-300 rounded-lg p-2 sm:p-3 text-center min-w-[150px] sm:min-w-[180px]">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <span className="text-white text-[10px] sm:text-xs font-bold">N</span>
                            </div>
                            <p className="text-[10px] sm:text-xs font-semibold text-black leading-tight">
                                {t('certificationBadges.professionalOperations')}
                            </p>
                        </div>
                        <div className="bg-gray-200 border-2 border-gray-300 rounded-lg p-2 sm:p-3 text-center min-w-[150px] sm:min-w-[180px]">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <span className="text-white text-[10px] sm:text-xs font-bold">N</span>
                            </div>
                            <p className="text-[10px] sm:text-xs font-semibold text-black leading-tight">
                                {t('certificationBadges.professionalInfrastructure')}
                            </p>
                        </div>
                    </div>
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
                    <div className="w-32 h-12 bg-green-600 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-sm">NVIDIA</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
