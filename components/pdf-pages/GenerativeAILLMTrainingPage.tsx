'use client';

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Node, Edge } from '@xyflow/react';
import ReactFlowCurriculum from './ReactFlowCurriculum';
import Image from 'next/image';

export default function GenerativeAILLMTrainingPage() {
    const t = useTranslations('generativeAILLMTraining');

    // Placeholder links - you can update these later
    const courseLinks: Record<string, string> = {
        'generativeAIExplained': '#',
        'buildingBrain10Minutes': '#',
        'fundamentalsOfDeepLearning': '#',
        'introductionTransformerBasedNLP': '#',
        'buildingTransformerBasedNLPApplications': '#',
        'buildingConversationalAI': '#',
        'buildingLLMApplicationsPromptEngineering': '#',
        'rapidApplicationDevelopmentLLMs': '#',
        'buildingAIAgentsMultimodalModels': '#',
        'augmentLLMUsingRAG': '#',
        'buildingRAGAgentsLLMs': '#',
        'evaluatingRAGSemanticSearch': '#',
        'techniquesImprovingRAGEffectiveness': '#',
        'generativeAIWithDiffusionModels': '#',
        'gettingStartedNVIDIAToolsGenerativeAIDigitalHealth': '#',
        'streamliningDrugDiscoveryBioNeMo': '#',
        'syntheticTabularDataGenerationTransformers': '#',
        'introductionMultiModalDataCuration': '#',
        'domainAdaptivePreTraining': '#',
        'evaluationLightCustomizationLLMs': '#',
        'addingNewKnowledgeLLMs': '#',
        'modelParallelismLargeNeuralNetworks': '#',
        'introductionNVIDIANIMMicroservices': '#',
        'sizingLLMInferenceSystems': '#',
        'introductionDeployingRAGPipelines': '#',
        'deployingRAGPipelinesProduction': '#',
        'buildingAgenticAIApplicationsLLMs': '#',
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
            // Section 1: Foundational
            {
                id: 'title-foundational',
                type: 'title',
                position: { x: startX, y: rowStartY },
                data: { label: t('sections.foundational') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'generativeAIExplained',
                type: 'course',
                position: { x: startX, y: rowStartY + titleHeight },
                data: {
                    title: t('courses.generativeAIExplained'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.generativeAIExplained,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'buildingBrain10Minutes',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + titleHeight },
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
                id: 'fundamentalsOfDeepLearning',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + titleHeight },
                data: {
                    title: t('courses.fundamentalsOfDeepLearning'),
                    duration: '6 Hours',
                    type: 'split',
                    hasAsterisk: true,
                    greenPrice: '$90',
                    purplePrice: '$500',
                    purpleDuration: '8 Hours',
                    link: courseLinks.fundamentalsOfDeepLearning,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'introductionTransformerBasedNLP',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 3, y: rowStartY + titleHeight },
                data: {
                    title: t('courses.introductionTransformerBasedNLP'),
                    duration: '8 Hours',
                    type: 'split',
                    hasAsterisk: true,
                    greenPrice: '$30',
                    purplePrice: '$500',
                    link: courseLinks.introductionTransformerBasedNLP,
                },
                style: { width: nodeWidth },
            },

            // Section 2: Build Applications with LLMs
            {
                id: 'title-build-applications',
                type: 'title',
                position: { x: startX, y: rowStartY + rowSpacing },
                data: { label: t('sections.buildApplicationsWithLLMs') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'buildingTransformerBasedNLPApplications',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.buildingTransformerBasedNLPApplications'),
                    duration: '8 Hours',
                    price: '$500',
                    type: 'purple',
                    link: courseLinks.buildingTransformerBasedNLPApplications,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'buildingConversationalAI',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing + titleHeight },
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
            {
                id: 'buildingLLMApplicationsPromptEngineering',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing + titleHeight },
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
                position: { x: startX + (nodeWidth + nodeSpacing) * 3, y: rowStartY + rowSpacing + titleHeight },
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
            {
                id: 'buildingAIAgentsMultimodalModels',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 4, y: rowStartY + rowSpacing + titleHeight },
                data: {
                    title: t('courses.buildingAIAgentsMultimodalModels'),
                    duration: '8 Hours',
                    price: '$500',
                    type: 'purple',
                    hasAsterisk: true,
                    link: courseLinks.buildingAIAgentsMultimodalModels,
                },
                style: { width: nodeWidth },
            },

            // Section 3: Retrieval Augmented Generation
            {
                id: 'title-rag',
                type: 'title',
                position: { x: startX, y: rowStartY + rowSpacing * 2 },
                data: { label: t('sections.retrievalAugmentedGeneration') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'augmentLLMUsingRAG',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing * 2 + titleHeight },
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
                id: 'buildingRAGAgentsLLMs',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.buildingRAGAgentsLLMs'),
                    duration: '8 Hours',
                    type: 'split',
                    hasAsterisk: true,
                    greenPrice: 'Free',
                    purplePrice: '$500',
                    link: courseLinks.buildingRAGAgentsLLMs,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'evaluatingRAGSemanticSearch',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.evaluatingRAGSemanticSearch'),
                    duration: '3 Hours',
                    price: '$30',
                    type: 'green',
                    link: courseLinks.evaluatingRAGSemanticSearch,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'techniquesImprovingRAGEffectiveness',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 3, y: rowStartY + rowSpacing * 2 + titleHeight },
                data: {
                    title: t('courses.techniquesImprovingRAGEffectiveness'),
                    duration: '4 Hours',
                    price: '$30',
                    type: 'green',
                    link: courseLinks.techniquesImprovingRAGEffectiveness,
                },
                style: { width: nodeWidth },
            },

            // Section 4: Data Generation
            {
                id: 'title-data-generation',
                type: 'title',
                position: { x: startX, y: rowStartY + rowSpacing * 3 },
                data: { label: t('sections.dataGeneration') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'generativeAIWithDiffusionModels',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing * 3 + titleHeight },
                data: {
                    title: t('courses.generativeAIWithDiffusionModels'),
                    duration: '8 Hours',
                    type: 'split',
                    hasAsterisk: true,
                    greenPrice: '$90',
                    purplePrice: '$500',
                    link: courseLinks.generativeAIWithDiffusionModels,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'gettingStartedNVIDIAToolsGenerativeAIDigitalHealth',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 3 + titleHeight },
                data: {
                    title: t('courses.gettingStartedNVIDIAToolsGenerativeAIDigitalHealth'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.gettingStartedNVIDIAToolsGenerativeAIDigitalHealth,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'streamliningDrugDiscoveryBioNeMo',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing * 3 + titleHeight },
                data: {
                    title: t('courses.streamliningDrugDiscoveryBioNeMo'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.streamliningDrugDiscoveryBioNeMo,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'syntheticTabularDataGenerationTransformers',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 3, y: rowStartY + rowSpacing * 3 + titleHeight },
                data: {
                    title: t('courses.syntheticTabularDataGenerationTransformers'),
                    duration: '4 Hours',
                    price: '$30',
                    type: 'green',
                    link: courseLinks.syntheticTabularDataGenerationTransformers,
                },
                style: { width: nodeWidth },
            },

            // Section 5: Data Curation, Model Customization and Large-Scale Training
            {
                id: 'title-data-curation',
                type: 'title',
                position: { x: startX, y: rowStartY + rowSpacing * 4 },
                data: { label: t('sections.dataCurationModelCustomization') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'introductionMultiModalDataCuration',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing * 4 + titleHeight },
                data: {
                    title: t('courses.introductionMultiModalDataCuration'),
                    duration: '1 Hour',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.introductionMultiModalDataCuration,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'domainAdaptivePreTraining',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 4 + titleHeight },
                data: {
                    title: t('courses.domainAdaptivePreTraining'),
                    duration: '4 Hours',
                    price: '$30',
                    type: 'green',
                    link: courseLinks.domainAdaptivePreTraining,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'evaluationLightCustomizationLLMs',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing * 4 + titleHeight },
                data: {
                    title: t('courses.evaluationLightCustomizationLLMs'),
                    duration: '2 Hours',
                    price: '$30',
                    type: 'green',
                    link: courseLinks.evaluationLightCustomizationLLMs,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'addingNewKnowledgeLLMs',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 3, y: rowStartY + rowSpacing * 4 + titleHeight },
                data: {
                    title: t('courses.addingNewKnowledgeLLMs'),
                    duration: '8 Hours',
                    price: '$500',
                    type: 'purple',
                    hasAsterisk: true,
                    link: courseLinks.addingNewKnowledgeLLMs,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'modelParallelismLargeNeuralNetworks',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 4, y: rowStartY + rowSpacing * 4 + titleHeight },
                data: {
                    title: t('courses.modelParallelismLargeNeuralNetworks'),
                    duration: '8 Hours',
                    price: '$500',
                    type: 'purple',
                    link: courseLinks.modelParallelismLargeNeuralNetworks,
                },
                style: { width: nodeWidth },
            },

            // Section 6: Inference and Deployment
            {
                id: 'title-inference-deployment',
                type: 'title',
                position: { x: startX, y: rowStartY + rowSpacing * 5 },
                data: { label: t('sections.inferenceAndDeployment') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'introductionNVIDIANIMMicroservices',
                type: 'course',
                position: { x: startX, y: rowStartY + rowSpacing * 5 + titleHeight },
                data: {
                    title: t('courses.introductionNVIDIANIMMicroservices'),
                    duration: '2 Hours',
                    price: 'Free',
                    type: 'green',
                    link: courseLinks.introductionNVIDIANIMMicroservices,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'sizingLLMInferenceSystems',
                type: 'course',
                position: { x: startX + nodeWidth + nodeSpacing, y: rowStartY + rowSpacing * 5 + titleHeight },
                data: {
                    title: t('courses.sizingLLMInferenceSystems'),
                    duration: '3 Hours',
                    price: '$30',
                    type: 'green',
                    link: courseLinks.sizingLLMInferenceSystems,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'introductionDeployingRAGPipelines',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 2, y: rowStartY + rowSpacing * 5 + titleHeight },
                data: {
                    title: t('courses.introductionDeployingRAGPipelines'),
                    duration: '4 Hours',
                    price: '$90',
                    type: 'green',
                    link: courseLinks.introductionDeployingRAGPipelines,
                },
                style: { width: nodeWidth },
            },
            {
                id: 'deployingRAGPipelinesProduction',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 3, y: rowStartY + rowSpacing * 5 + titleHeight },
                data: {
                    title: t('courses.deployingRAGPipelinesProduction'),
                    duration: '8 Hours',
                    price: '$500',
                    type: 'purple',
                    hasAsterisk: true,
                    link: courseLinks.deployingRAGPipelinesProduction,
                },
                style: { width: nodeWidth },
            },

            // Section 7: Agentic AI
            {
                id: 'title-agentic-ai',
                type: 'title',
                position: { x: startX + (nodeWidth + nodeSpacing) * 4, y: rowStartY + rowSpacing * 5 },
                data: { label: t('sections.agenticAI') },
                style: { background: 'transparent', border: 'none' },
            },
            {
                id: 'buildingAgenticAIApplicationsLLMs',
                type: 'course',
                position: { x: startX + (nodeWidth + nodeSpacing) * 4, y: rowStartY + rowSpacing * 5 + titleHeight },
                data: {
                    title: t('courses.buildingAgenticAIApplicationsLLMs'),
                    duration: '8 Hours',
                    price: '$500',
                    type: 'purple',
                    hasAsterisk: true,
                    link: courseLinks.buildingAgenticAIApplicationsLLMs,
                },
                style: { width: nodeWidth },
            },
        ];
    }, [t, courseLinks]);

    // Define edges (arrows) to show flow within each section
    const initialEdges: Edge[] = useMemo(() => [
        // Section 1: Foundational
        {
            id: 'e1',
            source: 'generativeAIExplained',
            target: 'buildingBrain10Minutes',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e2',
            source: 'buildingBrain10Minutes',
            target: 'fundamentalsOfDeepLearning',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e3',
            source: 'fundamentalsOfDeepLearning',
            target: 'introductionTransformerBasedNLP',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Section 2: Build Applications with LLMs
        {
            id: 'e4',
            source: 'buildingTransformerBasedNLPApplications',
            target: 'buildingConversationalAI',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e5',
            source: 'buildingConversationalAI',
            target: 'buildingLLMApplicationsPromptEngineering',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e6',
            source: 'buildingLLMApplicationsPromptEngineering',
            target: 'rapidApplicationDevelopmentLLMs',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e7',
            source: 'rapidApplicationDevelopmentLLMs',
            target: 'buildingAIAgentsMultimodalModels',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Section 3: Retrieval Augmented Generation
        {
            id: 'e8',
            source: 'augmentLLMUsingRAG',
            target: 'buildingRAGAgentsLLMs',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e9',
            source: 'buildingRAGAgentsLLMs',
            target: 'evaluatingRAGSemanticSearch',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e10',
            source: 'evaluatingRAGSemanticSearch',
            target: 'techniquesImprovingRAGEffectiveness',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Section 4: Data Generation
        {
            id: 'e11',
            source: 'generativeAIWithDiffusionModels',
            target: 'gettingStartedNVIDIAToolsGenerativeAIDigitalHealth',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e12',
            source: 'gettingStartedNVIDIAToolsGenerativeAIDigitalHealth',
            target: 'streamliningDrugDiscoveryBioNeMo',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e13',
            source: 'streamliningDrugDiscoveryBioNeMo',
            target: 'syntheticTabularDataGenerationTransformers',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Section 5: Data Curation
        {
            id: 'e14',
            source: 'introductionMultiModalDataCuration',
            target: 'domainAdaptivePreTraining',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e15',
            source: 'domainAdaptivePreTraining',
            target: 'evaluationLightCustomizationLLMs',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e16',
            source: 'evaluationLightCustomizationLLMs',
            target: 'addingNewKnowledgeLLMs',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e17',
            source: 'addingNewKnowledgeLLMs',
            target: 'modelParallelismLargeNeuralNetworks',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        // Section 6: Inference and Deployment
        {
            id: 'e18',
            source: 'introductionNVIDIANIMMicroservices',
            target: 'sizingLLMInferenceSystems',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e19',
            source: 'sizingLLMInferenceSystems',
            target: 'introductionDeployingRAGPipelines',
            type: 'smoothstep',
            animated: false,
            markerEnd: { type: 'arrowclosed', color: '#9ca3af' },
            style: { stroke: '#9ca3af', strokeWidth: 2 },
        },
        {
            id: 'e20',
            source: 'introductionDeployingRAGPipelines',
            target: 'deployingRAGPipelinesProduction',
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
                        href="https://www.nvidia.com/en-us/learn/learning-path/generative-ai-llm/"
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
                        containerHeight="h-[500px] sm:h-[600px] md:h-[800px] lg:h-[1000px]"
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
