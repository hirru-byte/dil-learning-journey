// Link mapping configuration for Quick Links page
// Maps translation keys to page section IDs

export const pageLinks = {
    // Developer Certifications
    developerCertifications: {
        associateGenerativeAILLM: 'gen-ai-llm-certifications',
        associateGenerativeAIMultimodal: 'gen-ai-multimodal-certifications',
        professionalGenerativeAILLM: 'gen-ai-llm-certifications',
        professionalAgenticAI: 'agentic-ai',
        professionalAcceleratedDataScience: 'data-science',
        professionalOpenUSDDevelopment: 'openusd-certification',
    },
    // Developer Topics
    developerTopics: {
        acceleratedComputing: 'accelerated-computing',
        computerVisionAndVideoAnalytics: 'computer-vision-video-analytics',
        dataScience: 'data-science-training',
        deepLearning: 'deep-learning-training',
        generativeAIAndLLMs: 'generative-ai-llm-training',
        industrialDigitalTwinTraining: 'industrial-digital-twins-training',
        industryRelatedTraining: 'industry-related-training',
        openUSD: 'openusd-certification',
        robotics: 'robotics-training',
        simulationModelingAndDesign: 'simulation-modeling-design',
    },
    // Infrastructure Certifications
    infrastructureCertifications: {
        associateAIInfrastructureAndOperations: 'ai-infrastructure-certifications',
        professionalAIInfrastructure: 'ai-infrastructure-certifications',
        professionalAIOperations: 'ai-infrastructure-certifications',
        professionalAINetworking: 'networking-training',
    },
    // Infrastructure Topics
    infrastructureTopics: {
        acceleratedComputing: 'accelerated-computing-training',
        dataCenterAndCloud: 'data-center-cloud-training',
        dataCenterOverview: 'data-center-overview-training',
        infrastructureForGenerativeAIAndLLMs: 'infrastructure-gen-ai-llm-training',
        networking: 'networking-training',
    },
} as const;
