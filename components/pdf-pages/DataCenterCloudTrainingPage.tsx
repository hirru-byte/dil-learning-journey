'use client';

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Node, Edge } from '@xyflow/react';
import ReactFlowCurriculum from './ReactFlowCurriculum';

export default function DataCenterCloudTrainingPage() {
    const t = useTranslations('dataCenterCloudTraining');

    // Placeholder links - you can update these later
    const courseLinks: Record<string, string> = {
        'aiForAllBasicsGenAIPractice': '#',
        'dataCenterManagementNVIDIAUFM': '#',
        'aiInfrastructureOperationsFundamentals': '#',
        'associateAIInfrastructureOperationsCertification': '#',
        'nvidiaAIEnterpriseAdministrationVMwarevSphere': '#',
        'nvidiaAIEnterpriseForAzureProfessionals': '#',
        'baseCommandManagerAdministration': '#',
        'nvidiaBlueFieldDPUAdministration': '#',
        'nvidiaDGXSystemAdministrationPublicWorkshop': '#',
        'nvidiaDGXSystemAdministrationPrivateWorkshop': '#',
        'nvidiaDGXBasePODAdministrationPrivateWorkshop': '#',
        'nvidiaDGXSuperPODAdministrationPrivateWorkshop': '#',
        'nvidiaAIInfrastructurePublicTraining': '#',
        'professionalAIInfrastructureCertification': '#',
        'nvidiaAIOperationsPublicTraining': '#',
        'professionalAIOperationsCertification': '#',
        'nvidiaAIInfrastructureOperationsPublicTraining': '#',
    };

    // Define nodes based on the curriculum structure
    const nodeWidth = 500;
    const nodeSpacing = 50;
    const titleHeight = 50;
    const rowStartY = 20;
    const rowSpacing = 270; // Space between rows
    const sectionSpacing = 100; // Space between left and right sections

    const initialNodes: Node[] = useMemo(() => {
        const leftStartX = 50;
        const rightStartX = leftStartX + nodeWidth * 3 + nodeSpacing * 2 + sectionSpacing;

        return [
            // Left Side Sections
            // Section 1: Overview
            {
                id: 'title-overview',
                type: 'title',
                position: { x: leftStartX, y: rowStartY },
                data: { label: t('sections.overview') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'aiForAllBasicsGenAIPractice',
                type: 'course',
                position: { x: leftStartX, y: rowStartY + titleHeight },
                data: {
                    title: t('courses.aiForAllBasicsGenAIPractice'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.aiForAllBasicsGenAIPractice,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'dataCenterManagementNVIDIAUFM',
                type: 'course',
                position: { x: leftStartX + nodeWidth + nodeSpacing, y: rowStartY + titleHeight },
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
                id: 'aiInfrastructureOperationsFundamentals',
                type: 'course',
                position: { x: leftStartX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + titleHeight },
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
                position: { x: leftStartX + (nodeWidth + nodeSpacing) * 3, y: rowStartY + titleHeight },
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

            // Section 2: NVIDIA AI Enterprise
            {
                id: 'title-nvidia-ai-enterprise',
                type: 'title',
                position: { x: leftStartX, y: rowStartY + rowSpacing },
                data: { label: t('sections.nvidiaAIEnterprise') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'nvidiaAIEnterpriseAdministrationVMwarevSphere',
                type: 'course',
                position: { x: leftStartX, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.nvidiaAIEnterpriseAdministrationVMwarevSphere'),
                    duration: '8 Hours',
                    price: '$100',
                    type: 'green',
                    link: courseLinks.nvidiaAIEnterpriseAdministrationVMwarevSphere,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'nvidiaAIEnterpriseForAzureProfessionals',
                type: 'course',
                position: { x: leftStartX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.nvidiaAIEnterpriseForAzureProfessionals'),
                    duration: '9 Hours',
                    price: '$100',
                    type: 'green',
                    link: courseLinks.nvidiaAIEnterpriseForAzureProfessionals,
                },
                style: { width: nodeWidth },
            },

            // Section 3: Cluster Administration
            {
                id: 'title-cluster-administration',
                type: 'title',
                position: { x: leftStartX, y: rowStartY + rowSpacing * 2 },
                data: { label: t('sections.clusterAdministration') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'baseCommandManagerAdministration',
                type: 'course',
                position: { x: leftStartX, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.baseCommandManagerAdministration'),
                    duration: '3 Hours',
                    price: '$50',
                    type: 'green',
                    link: courseLinks.baseCommandManagerAdministration,
                },
                style: { width: nodeWidth },
            },

            // Section 4: DPU
            {
                id: 'title-dpu',
                type: 'title',
                position: { x: leftStartX, y: rowStartY + rowSpacing * 3 },
                data: { label: t('sections.dpu') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'nvidiaBlueFieldDPUAdministration',
                type: 'course',
                position: { x: leftStartX, y: rowStartY + rowSpacing * 3 + titleHeight },
                data: {
                    title: t('courses.nvidiaBlueFieldDPUAdministration'),
                    duration: '3 Hours',
                    price: '$50',
                    type: 'green',
                    link: courseLinks.nvidiaBlueFieldDPUAdministration,
                },
                style: { width: nodeWidth },
            },

            // Section 5: NVIDIA DGX
            {
                id: 'title-nvidia-dgx',
                type: 'title',
                position: { x: leftStartX, y: rowStartY + rowSpacing * 4 },
                data: { label: t('sections.nvidiaDGX') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'nvidiaDGXSystemAdministrationPublicWorkshop',
                type: 'course',
                position: { x: leftStartX, y: rowStartY + rowSpacing * 4 + titleHeight },
                data: {
                    title: t('courses.nvidiaDGXSystemAdministrationPublicWorkshop'),
                    duration: '12 Hours',
                    price: '$1,500',
                    type: 'purple',
                    link: courseLinks.nvidiaDGXSystemAdministrationPublicWorkshop,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'nvidiaDGXSystemAdministrationPrivateWorkshop',
                type: 'course',
                position: { x: leftStartX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 4 + titleHeight },
                data: {
                    title: t('courses.nvidiaDGXSystemAdministrationPrivateWorkshop'),
                    duration: '12 Hours',
                    price: '$ Custom',
                    type: 'purple',
                    link: courseLinks.nvidiaDGXSystemAdministrationPrivateWorkshop,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'nvidiaDGXBasePODAdministrationPrivateWorkshop',
                type: 'course',
                position: { x: leftStartX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing * 4 + titleHeight },
                data: {
                    title: t('courses.nvidiaDGXBasePODAdministrationPrivateWorkshop'),
                    duration: '12 Hours',
                    price: '$ Custom',
                    type: 'purple',
                    link: courseLinks.nvidiaDGXBasePODAdministrationPrivateWorkshop,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'nvidiaDGXSuperPODAdministrationPrivateWorkshop',
                type: 'course',
                position: { x: leftStartX + (nodeWidth + nodeSpacing) * 3, y: rowStartY + rowSpacing * 4 + titleHeight },
                data: {
                    title: t('courses.nvidiaDGXSuperPODAdministrationPrivateWorkshop'),
                    duration: '12 Hours',
                    price: '$ Custom',
                    type: 'purple',
                    link: courseLinks.nvidiaDGXSuperPODAdministrationPrivateWorkshop,
                },
                style: { width: nodeWidth },
            },

            // Right Side Section: AI Infrastructure and Operations
            {
                id: 'title-ai-infrastructure-operations',
                type: 'title',
                position: { x: rightStartX, y: rowStartY },
                data: { label: t('sections.aiInfrastructureAndOperations') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'nvidiaAIInfrastructurePublicTraining',
                type: 'course',
                position: { x: rightStartX, y: rowStartY + titleHeight },
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
                position: { x: rightStartX + nodeWidth + nodeSpacing, y: rowStartY + titleHeight },
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
            {
                id: 'nvidiaAIOperationsPublicTraining',
                type: 'course',
                position: { x: rightStartX, y: rowStartY + rowSpacing + titleHeight },
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
                position: { x: rightStartX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing + titleHeight },
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
            {
                id: 'nvidiaAIInfrastructureOperationsPublicTraining',
                type: 'course',
                position: { x: rightStartX, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.nvidiaAIInfrastructureOperationsPublicTraining'),
                    duration: '44 Hours',
                    price: '$5,500',
                    type: 'purple',
                    link: courseLinks.nvidiaAIInfrastructureOperationsPublicTraining,
                },
                style: { width: nodeWidth },
            },
        ];
    }, [t, courseLinks]);

    // Define edges (arrows) to show flow - only where courses lead to certifications
    const initialEdges: Edge[] = useMemo(() => [
        // Overview: Fundamentals leads to Associate Certification
        {
            id: 'e1',
            source: 'aiInfrastructureOperationsFundamentals',
            target: 'associateAIInfrastructureOperationsCertification',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // AI Infrastructure: Public Training leads to Professional Certification
        {
            id: 'e2',
            source: 'nvidiaAIInfrastructurePublicTraining',
            target: 'professionalAIInfrastructureCertification',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // AI Operations: Public Training leads to Professional Certification
        {
            id: 'e3',
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
                </div>

                {/* Main Content - ReactFlow */}
                <div className="shadow-2xl">
                    <ReactFlowCurriculum
                        nodes={initialNodes}
                        edges={initialEdges}
                        containerHeight="h-[500px] sm:h-[600px] md:h-[800px] lg:h-[1600px]"
                        showControls={true}
                        alignToTopRight={false}
                    />
                </div>

                {/* Disclaimer */}
                <div className="mt-4 text-xs sm:text-sm text-gray-600 italic">
                    {t('disclaimer')}
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
