'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';

interface CertificationBoxProps {
  level: 'professional' | 'associate';
  title: string;
  releaseDate?: string;
  onClick?: () => void;
}

function CertificationBox({ level, title, releaseDate, onClick }: CertificationBoxProps) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full h-32 md:h-40 bg-white border-2 border-gray-300 rounded-lg hover:border-green-600 hover:shadow-lg transition-all duration-200 flex flex-col items-center justify-center p-4 cursor-pointer"
    >
      {/* Release Date Badge */}
      {releaseDate && (
        <div className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
          {releaseDate}
        </div>
      )}
      
      {/* Level Badge */}
      <div className={`w-full py-2 px-3 rounded-t-lg ${
        level === 'professional' ? 'bg-gray-700' : 'bg-gray-600'
      } text-white text-xs font-semibold text-center mb-2`}>
        {level === 'professional' ? 'Certified Professional' : 'Certified Associate'}
      </div>
      
      {/* Certification Title */}
      <div className="flex-1 flex items-center justify-center">
        <p className="text-xs md:text-sm font-medium text-gray-800 text-center leading-tight group-hover:text-green-600 transition-colors">
          {title}
        </p>
      </div>
      
      {/* NVIDIA Logo Placeholder */}
      <div className="absolute top-2 left-2 w-6 h-6 bg-green-600 rounded flex items-center justify-center">
        <span className="text-white text-xs font-bold">N</span>
      </div>
    </button>
  );
}

export default function CertificationFrameworkPage() {
  const t = useTranslations('certificationFramework');
  const router = useRouter();

  const handleCertificationClick = (certId: string) => {
    // You can customize this to navigate to a specific certification page
    console.log('Clicked certification:', certId);
    // Example: router.push(`/certifications/${certId}`);
  };

  return (
    <div className="min-h-screen bg-white p-8 md:p-12">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
        {t('title')}
      </h1>

      {/* Framework Grid */}
      <div className="max-w-7xl mx-auto">
        {/* Column Headers */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              {t('aiInfrastructure')}
            </h2>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              {t('aiApplicationsAndWorkloads')}
            </h2>
          </div>
        </div>

        {/* Professional Level */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
            {t('professional')}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {/* AI Infrastructure - Professional */}
            <div className="space-y-4">
              <CertificationBox
                level="professional"
                title={t('certifications.professionalAIInfrastructure')}
                onClick={() => handleCertificationClick('professional-ai-infrastructure')}
              />
              <CertificationBox
                level="professional"
                title={t('certifications.professionalAIOperations')}
                onClick={() => handleCertificationClick('professional-ai-operations')}
              />
              <CertificationBox
                level="professional"
                title={t('certifications.professionalAINetworking')}
                onClick={() => handleCertificationClick('professional-ai-networking')}
              />
            </div>

            {/* AI Applications - Professional */}
            <div className="space-y-4">
              <CertificationBox
                level="professional"
                title={t('certifications.professionalGenAILLMs')}
                onClick={() => handleCertificationClick('professional-gen-ai-llms')}
              />
              <CertificationBox
                level="professional"
                title={t('certifications.professionalAgenticAI')}
                onClick={() => handleCertificationClick('professional-agentic-ai')}
              />
              <CertificationBox
                level="professional"
                title={t('certifications.professionalAcceleratedDataScience')}
                onClick={() => handleCertificationClick('professional-accelerated-data-science')}
              />
              <CertificationBox
                level="professional"
                title={t('certifications.professionalOpenUSDDevelopment')}
                onClick={() => handleCertificationClick('professional-openusd-development')}
              />
            </div>
          </div>
        </div>

        {/* Associate Level */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
            {t('associate')}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {/* AI Infrastructure - Associate */}
            <div className="space-y-4">
              <CertificationBox
                level="associate"
                title={t('certifications.associateAIInfrastructureAndOperations')}
                onClick={() => handleCertificationClick('associate-ai-infrastructure-operations')}
              />
            </div>

            {/* AI Applications - Associate */}
            <div className="space-y-4">
              <CertificationBox
                level="associate"
                title={t('certifications.associateGenAILLMs')}
                onClick={() => handleCertificationClick('associate-gen-ai-llms')}
              />
              <CertificationBox
                level="associate"
                title={t('certifications.associateGenAIMultimodal')}
                onClick={() => handleCertificationClick('associate-gen-ai-multimodal')}
              />
              <CertificationBox
                level="associate"
                title={t('certifications.associateAcceleratedDataScience')}
                releaseDate={t('releaseDates.1H2026')}
                onClick={() => handleCertificationClick('associate-accelerated-data-science')}
              />
              <CertificationBox
                level="associate"
                title={t('certifications.associateOpenUSDDevelopment')}
                releaseDate={t('releaseDates.2H2025')}
                onClick={() => handleCertificationClick('associate-openusd-development')}
              />
            </div>
          </div>
        </div>

        {/* Footnotes */}
        <div className="grid grid-cols-2 gap-4 mt-12">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700">
              {t('footnotes.infrastructure')}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700">
              {t('footnotes.applications')}
            </p>
          </div>
        </div>
      </div>

      {/* NVIDIA Logo */}
      <div className="max-w-7xl mx-auto mt-8 flex justify-end">
        <div className="w-32 h-12 bg-green-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-sm">NVIDIA</span>
        </div>
      </div>
    </div>
  );
}

