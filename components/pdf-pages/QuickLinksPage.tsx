'use client';

import { useTranslations } from 'next-intl';

export default function QuickLinksPage() {
  const t = useTranslations('quickLinks');

  return (
    <div className="min-h-screen bg-white p-8 md:p-12">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-8">
        {t('title')}
      </h1>

      {/* Main Content Table */}
      <div className="max-w-6xl mx-auto border-2 border-gray-300 rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-2 border-b-2 border-gray-300 bg-white">
          <div className="p-4 border-r-2 border-gray-300">
            <h2 className="text-xl font-bold text-black">
              {t('learningPathsToCertification')}
            </h2>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold text-black">
              {t('learningPathsByTopic')}
            </h2>
          </div>
        </div>

        {/* For Developers Section - Light Green Background */}
        <div className="grid grid-cols-2 bg-green-50">
          {/* Row Label */}
          <div className="col-span-2 p-4 border-b-2 border-gray-300">
            <h3 className="text-lg font-bold text-black">
              {t('forDevelopers')}
            </h3>
          </div>
          
          {/* Left Column - Certifications */}
          <div className="p-6 border-r-2 border-gray-300 space-y-3">
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('developerCertifications.associateGenerativeAILLM')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('developerCertifications.associateGenerativeAIMultimodal')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('developerCertifications.professionalGenerativeAILLM')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('developerCertifications.professionalAgenticAI')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('developerCertifications.professionalAcceleratedDataScience')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('developerCertifications.professionalOpenUSDDevelopment')}
            </a>
          </div>

          {/* Right Column - Topics */}
          <div className="p-6 space-y-3">
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('developerTopics.acceleratedComputing')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('developerTopics.computerVisionAndVideoAnalytics')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('developerTopics.dataScience')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('developerTopics.deepLearning')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('developerTopics.generativeAIAndLLMs')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('developerTopics.industrialDigitalTwinTraining')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('developerTopics.industryRelatedTraining')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('developerTopics.openUSD')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('developerTopics.robotics')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('developerTopics.simulationModelingAndDesign')}
            </a>
          </div>
        </div>

        {/* For Infrastructure Professionals Section - Light Blue Background */}
        <div className="grid grid-cols-2 bg-blue-50">
          {/* Row Label */}
          <div className="col-span-2 p-4 border-b-2 border-gray-300 border-t-2">
            <h3 className="text-lg font-bold text-black">
              {t('forInfrastructureProfessionals')}
            </h3>
          </div>
          
          {/* Left Column - Certifications */}
          <div className="p-6 border-r-2 border-gray-300 space-y-3">
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('infrastructureCertifications.associateAIInfrastructureAndOperations')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('infrastructureCertifications.professionalAIInfrastructure')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('infrastructureCertifications.professionalAIOperations')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('infrastructureCertifications.professionalAINetworking')}
            </a>
          </div>

          {/* Right Column - Topics */}
          <div className="p-6 space-y-3">
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('infrastructureTopics.acceleratedComputing')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('infrastructureTopics.dataCenterAndCloud')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('infrastructureTopics.dataCenterOverview')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('infrastructureTopics.infrastructureForGenerativeAIAndLLMs')}
            </a>
            <a href="#" className="block text-blue-600 underline hover:text-blue-800">
              {t('infrastructureTopics.networking')}
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-8 p-6 bg-green-100 rounded-lg">
        <p className="text-green-700 text-base md:text-lg">
          {t('footer.customizedTraining')}{' '}
          <strong>{t('footer.trainingAdvisors')}</strong>.
        </p>
        <p className="text-green-700 text-base md:text-lg mt-2">
          {t('footer.viewCatalog')}{' '}
          <strong className="underline">{t('footer.here')}</strong>.{' '}
          {t('footer.contactUs')}{' '}
          <strong className="underline">{t('footer.here2')}</strong>.
        </p>
      </div>

      {/* NVIDIA Logo */}
      <div className="max-w-6xl mx-auto mt-6 flex justify-end">
        <div className="w-32 h-12 bg-green-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-sm">NVIDIA</span>
        </div>
      </div>
    </div>
  );
}

