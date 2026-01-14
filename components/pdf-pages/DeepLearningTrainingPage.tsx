'use client';

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Node, Edge } from '@xyflow/react';
import ReactFlowCurriculum from './ReactFlowCurriculum';

export default function DeepLearningTrainingPage() {
    const t = useTranslations('deepLearningTraining');

    // Placeholder links - you can update these later
    const courseLinks: Record<string, string> = {
        'buildingBrain10Minutes': '#',
        'fundamentalsDeepLearning': '#',
        'introGraphNeuralNetworks': '#',
        'applicationsAIAnomalyDetection': '#',
        'applicationsAIPredictiveMaintenance': '#',
        'computerVisionIndustrialInspection': '#',
        'disasterRiskMonitoring': '#',
        'applyingAIWeatherModels': '#',
        'buildingRealTimeVideoAI': '#',
        'medicalAIDevelopmentMONAI': '#',
        'gettingStartedJetsonNano': '#',
        'buildHighPerformanceSensorProcessing': '#',
        'exploringAdversarialML': '#',
        'introFederatedLearning': '#',
        'decentralizedAI': '#',
        'buildingAntiFraudApplications': '#',
        'buildingTransformerNLP': '#',
        'getStartedCustomASR': '#',
        'buildingConversationalAI': '#',
        'dataParallelism': '#',
        'modelParallelism': '#',
    };

    // Define nodes based on the curriculum structure
    const nodeWidth = 500;
    const nodeSpacing = 50;
    const titleHeight = 50;
    const rowStartY = 20;
    const rowSpacing = 270; // Vertical space between sections
    const verticalConnectionOffset = 250; // For the vertical connection in Section 2

    const initialNodes: Node[] = useMemo(() => [
        // Section 1: Introduction to Neural Networks and Special Architecture
        {
            id: 'title-intro-neural-networks',
            type: 'title',
            position: { x: 50, y: rowStartY },
            data: { label: t('sections.introNeuralNetworks') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'course-building-brain-10-minutes',
            type: 'course',
            position: { x: 50, y: rowStartY + titleHeight },
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
            id: 'course-fundamentals-deep-learning',
            type: 'course',
            position: { x: 50 + nodeWidth + nodeSpacing, y: rowStartY + titleHeight },
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
            id: 'course-intro-graph-neural-networks',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: rowStartY + titleHeight },
            data: {
                title: t('courses.introGraphNeuralNetworks'),
                duration: '2 Hours',
                price: '$30',
                type: 'green',
                link: courseLinks.introGraphNeuralNetworks,
            },
            style: { width: nodeWidth },
        },

        // Section 2: AI for Monitoring, Prediction, and Automation for Large Scale Systems
        {
            id: 'title-ai-monitoring',
            type: 'title',
            position: { x: 50, y: rowStartY + rowSpacing },
            data: { label: t('sections.aiMonitoring') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'course-ai-anomaly-detection',
            type: 'course',
            position: { x: 50, y: rowStartY + rowSpacing + titleHeight },
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
        {
            id: 'course-ai-predictive-maintenance',
            type: 'course',
            position: { x: 50 + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing + titleHeight },
            data: {
                title: t('courses.applicationsAIPredictiveMaintenance'),
                duration: '8 Hours',
                price: '$500',
                type: 'purple',
                hasAsterisk: true,
                link: courseLinks.applicationsAIPredictiveMaintenance,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'course-computer-vision-industrial-inspection',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing + titleHeight },
            data: {
                title: t('courses.computerVisionIndustrialInspection'),
                duration: '8 Hours',
                price: '$500',
                type: 'purple',
                hasAsterisk: true,
                link: courseLinks.computerVisionIndustrialInspection,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'course-disaster-risk-monitoring',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 3, y: rowStartY + rowSpacing + titleHeight },
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
        {
            id: 'course-ai-weather-models',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 4, y: rowStartY + rowSpacing + titleHeight },
            data: {
                title: t('courses.applyingAIWeatherModels'),
                duration: '3 Hours',
                price: '$30',
                type: 'green',
                link: courseLinks.applyingAIWeatherModels,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'course-real-time-video-ai',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 5, y: rowStartY + rowSpacing + titleHeight },
            data: {
                title: t('courses.buildingRealTimeVideoAI'),
                duration: '8 Hours',
                price: '$90',
                type: 'green',
                hasAsterisk: true,
                link: courseLinks.buildingRealTimeVideoAI,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'course-medical-ai-monai',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 5, y: rowStartY + rowSpacing + titleHeight + verticalConnectionOffset },
            data: {
                title: t('courses.medicalAIDevelopmentMONAI'),
                duration: '4 Hours',
                price: '$30',
                type: 'green',
                link: courseLinks.medicalAIDevelopmentMONAI,
            },
            style: { width: nodeWidth },
        },

        // Section 3: Edge AI Applications
        {
            id: 'title-edge-ai-applications',
            type: 'title',
            position: { x: 50, y: rowStartY + rowSpacing * 2 + verticalConnectionOffset },
            data: { label: t('sections.edgeAIApplications') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'course-jetson-nano',
            type: 'course',
            position: { x: 50, y: rowStartY + rowSpacing * 2 + titleHeight + verticalConnectionOffset },
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
            id: 'course-sensor-processing',
            type: 'course',
            position: { x: 50 + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 2 + titleHeight + verticalConnectionOffset },
            data: {
                title: t('courses.buildHighPerformanceSensorProcessing'),
                duration: '3 Hours',
                price: '$30',
                type: 'green',
                link: courseLinks.buildHighPerformanceSensorProcessing,
            },
            style: { width: nodeWidth },
        },

        // Section 4: AI Security Engineering and Federated ML
        {
            id: 'title-ai-security-federated-ml',
            type: 'title',
            position: { x: 50, y: rowStartY + rowSpacing * 3 + verticalConnectionOffset },
            data: { label: t('sections.aiSecurityFederatedML') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'course-adversarial-ml',
            type: 'course',
            position: { x: 50, y: rowStartY + rowSpacing * 3 + titleHeight + verticalConnectionOffset },
            data: {
                title: t('courses.exploringAdversarialML'),
                duration: '8 Hours',
                price: '$90',
                type: 'green',
                link: courseLinks.exploringAdversarialML,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'course-intro-federated-learning',
            type: 'course',
            position: { x: 50 + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 3 + titleHeight + verticalConnectionOffset },
            data: {
                title: t('courses.introFederatedLearning'),
                duration: '2 Hours',
                price: 'Free',
                type: 'green',
                link: courseLinks.introFederatedLearning,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'course-decentralized-ai',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing * 3 + titleHeight + verticalConnectionOffset },
            data: {
                title: t('courses.decentralizedAI'),
                duration: '4 Hours',
                price: 'Free',
                type: 'green',
                link: courseLinks.decentralizedAI,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'course-anti-fraud-chinese',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 3, y: rowStartY + rowSpacing * 3 + titleHeight + verticalConnectionOffset },
            data: {
                title: t('courses.buildingAntiFraudApplications'),
                duration: '8 Hours',
                price: '$ZH',
                type: 'purple',
                hasAsterisk: true,
                link: courseLinks.buildingAntiFraudApplications,
            },
            style: { width: nodeWidth },
        },

        // Section 5: AI-Powered Language and Speech Application
        {
            id: 'title-ai-language-speech',
            type: 'title',
            position: { x: 50, y: rowStartY + rowSpacing * 4 + verticalConnectionOffset },
            data: { label: t('sections.aiLanguageSpeech') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'course-transformer-nlp',
            type: 'course',
            position: { x: 50, y: rowStartY + rowSpacing * 4 + titleHeight + verticalConnectionOffset },
            data: {
                title: t('courses.buildingTransformerNLP'),
                duration: '6 Hours',
                type: 'split',
                hasAsterisk: true,
                greenPrice: '$30',
                purplePrice: '$500',
                purpleDuration: '8 Hours',
                link: courseLinks.buildingTransformerNLP,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'course-custom-asr',
            type: 'course',
            position: { x: 50 + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 4 + titleHeight + verticalConnectionOffset },
            data: {
                title: t('courses.getStartedCustomASR'),
                duration: '3 Hours',
                price: '$30',
                type: 'green',
                link: courseLinks.getStartedCustomASR,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'course-conversational-ai',
            type: 'course',
            position: { x: 50 + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing * 4 + titleHeight + verticalConnectionOffset },
            data: {
                title: t('courses.buildingConversationalAI'),
                duration: '8 Hours',
                price: '$500',
                type: 'purple',
                hasAsterisk: true,
                link: courseLinks.buildingConversationalAI,
            },
            style: { width: nodeWidth },
        },

        // Section 6: AI Model Training at Scale
        {
            id: 'title-ai-model-training-scale',
            type: 'title',
            position: { x: 50, y: rowStartY + rowSpacing * 5 + verticalConnectionOffset },
            data: { label: t('sections.aiModelTrainingScale') },
            style: { background: 'transparent', border: 'none' },
        },
        {
            id: 'course-data-parallelism',
            type: 'course',
            position: { x: 50, y: rowStartY + rowSpacing * 5 + titleHeight + verticalConnectionOffset },
            data: {
                title: t('courses.dataParallelism'),
                duration: '8 Hours',
                price: '$500',
                type: 'purple',
                hasAsterisk: true,
                link: courseLinks.dataParallelism,
            },
            style: { width: nodeWidth },
        },
        {
            id: 'course-model-parallelism',
            type: 'course',
            position: { x: 50 + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 5 + titleHeight + verticalConnectionOffset },
            data: {
                title: t('courses.modelParallelism'),
                duration: '8 Hours',
                price: '$500',
                type: 'purple',
                hasAsterisk: true,
                link: courseLinks.modelParallelism,
            },
            style: { width: nodeWidth },
        },
    ], [t, courseLinks]);

    // Define edges (arrows) to show flow
    const initialEdges: Edge[] = useMemo(() => [
        // Section 1: Introduction to Neural Networks
        {
            id: 'e1-1',
            source: 'course-building-brain-10-minutes',
            target: 'course-fundamentals-deep-learning',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e1-2',
            source: 'course-fundamentals-deep-learning',
            target: 'course-intro-graph-neural-networks',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Section 2: AI for Monitoring
        {
            id: 'e2-1',
            source: 'course-ai-anomaly-detection',
            target: 'course-ai-predictive-maintenance',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e2-2',
            source: 'course-ai-predictive-maintenance',
            target: 'course-computer-vision-industrial-inspection',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e2-3',
            source: 'course-computer-vision-industrial-inspection',
            target: 'course-disaster-risk-monitoring',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e2-4',
            source: 'course-disaster-risk-monitoring',
            target: 'course-ai-weather-models',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e2-5',
            source: 'course-ai-weather-models',
            target: 'course-real-time-video-ai',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e2-6',
            source: 'course-real-time-video-ai',
            target: 'course-medical-ai-monai',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Section 3: Edge AI Applications
        {
            id: 'e3-1',
            source: 'course-jetson-nano',
            target: 'course-sensor-processing',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Section 4: AI Security Engineering
        {
            id: 'e4-1',
            source: 'course-adversarial-ml',
            target: 'course-intro-federated-learning',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e4-2',
            source: 'course-intro-federated-learning',
            target: 'course-decentralized-ai',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e4-3',
            source: 'course-decentralized-ai',
            target: 'course-anti-fraud-chinese',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Section 5: AI-Powered Language and Speech
        {
            id: 'e5-1',
            source: 'course-transformer-nlp',
            target: 'course-custom-asr',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e5-2',
            source: 'course-custom-asr',
            target: 'course-conversational-ai',
            type: 'smoothstep',
            animated: false,
            markerEnd: {
                type: 'arrowclosed',
                color: '#9ca3af',
            },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Section 6: AI Model Training at Scale
        {
            id: 'e6-1',
            source: 'course-data-parallelism',
            target: 'course-model-parallelism',
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
                    <div className="w-32 h-12 bg-green-600 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-sm">NVIDIA</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

