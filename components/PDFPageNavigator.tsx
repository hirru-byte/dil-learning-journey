'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface PageItem {
    id: string;
    labelKey: string;
    fallbackLabel: string;
}

const pdfPages: PageItem[] = [
    { id: 'title-page', labelKey: 'titlePage', fallbackLabel: 'Title Page' },
    { id: 'quick-links', labelKey: 'quickLinks.title', fallbackLabel: 'Quick Links' },
    { id: 'certification-framework', labelKey: 'certificationFramework.title', fallbackLabel: 'Certification Framework' },
    { id: 'certification-framework-2', labelKey: 'certificationFramework2.title', fallbackLabel: 'Certification Framework 2' },
    { id: 'accelerated-computing', labelKey: 'acceleratedComputing.title', fallbackLabel: 'Accelerated Computing' },
    { id: 'agentic-ai', labelKey: 'agenticAI.title', fallbackLabel: 'Agentic AI' },
    { id: 'computer-vision-video-analytics', labelKey: 'computerVisionVideoAnalytics.title', fallbackLabel: 'Computer Vision and Video Analytics' },
    { id: 'data-science', labelKey: 'dataScience.title', fallbackLabel: 'Data Science' },
    { id: 'data-science-training', labelKey: 'dataScienceTraining.title', fallbackLabel: 'Data Science Training' },
    { id: 'deep-learning-training', labelKey: 'deepLearningTraining.title', fallbackLabel: 'Deep Learning Training' },
    { id: 'gen-ai-llm-certifications', labelKey: 'genAILLMCertifications.title', fallbackLabel: 'Gen AI LLM Certifications' },
    { id: 'gen-ai-multimodal-certifications', labelKey: 'genAIMultimodalCertifications.title', fallbackLabel: 'Gen AI Multimodal Certifications' },
    { id: 'generative-ai-llm-training', labelKey: 'generativeAILLMTraining.title', fallbackLabel: 'Generative AI and LLM Training' },
    { id: 'industrial-digital-twins-training', labelKey: 'industrialDigitalTwinsTraining.title', fallbackLabel: 'Industrial Digital Twins Training' },
    { id: 'industry-related-training', labelKey: 'industryRelatedTraining.title', fallbackLabel: 'Industry-Related Training' },
    { id: 'openusd-certification', labelKey: 'openUSDCertification.title', fallbackLabel: 'OpenUSD Certification' },
    { id: 'robotics-training', labelKey: 'roboticsTraining.title', fallbackLabel: 'Robotics Training' },
    { id: 'simulation-modeling-design', labelKey: 'simulationModelingDesign.title', fallbackLabel: 'Simulation, Modeling, and Design' },
    { id: 'tacfip', labelKey: 'TACFIP.header', fallbackLabel: 'TACFIP' },
    { id: 'accelerated-computing-training', labelKey: 'acceleratedComputingTraining.title', fallbackLabel: 'Accelerated Computing Training' },
    { id: 'ai-infrastructure-certifications', labelKey: 'aiInfrastructureCertifications.title', fallbackLabel: 'AI Infrastructure Certifications' },
    { id: 'data-center-cloud-training', labelKey: 'dataCenterCloudTraining.title', fallbackLabel: 'Data Center and Cloud Training' },
    { id: 'data-center-overview-training', labelKey: 'dataCenterOverviewTraining.title', fallbackLabel: 'Data Center Overview Training' },
    { id: 'infrastructure-gen-ai-llm-training', labelKey: 'infrastructureGenAILLMTraining.title', fallbackLabel: 'Infrastructure for Gen AI and LLM Training' },
    { id: 'networking-training', labelKey: 'networkingTraining.title', fallbackLabel: 'Networking Training' },
];

export default function PDFPageNavigator() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const t = useTranslations();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handlePageClick = (pageId: string) => {
        setIsOpen(false);
        const element = document.getElementById(pageId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const getPageLabel = (page: PageItem): string => {
        try {
            return t(page.labelKey);
        } catch {
            return page.fallbackLabel;
        }
    };

    return (
        <div className="fixed top-6 left-6 z-50" ref={dropdownRef}>
            <div className="relative">
                <button
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
                >
                    📄 Pages
                </button>

                {isOpen && (
                    <div
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                        className="absolute top-full left-0 w-80 max-h-[80vh] overflow-y-auto bg-white rounded-lg shadow-xl border border-gray-200"
                    >
                        <div className="p-2">
                            {pdfPages.map((page, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageClick(page.id)}
                                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                                >
                                    {getPageLabel(page)}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
