'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';

import AIP from '@/public/nvidia/AI-Professional.svg';
import AOP from '@/public/nvidia/AO-Professional.svg';
import ANP from '@/public/nvidia/AN-Professional.svg';
import GALP from '@/public/nvidia/GAL-Professional.png';
import AAP from '@/public/nvidia/AA-Professional.svg'
import ADSP from '@/public/nvidia/ADS-Professional.svg';
import AOD from '@/public/nvidia/OUD-Profressional.svg';

import AIAOA from '@/public/nvidia/AIAO-Associate.svg';
import GALA from '@/public/nvidia/GAL-Associate.svg';
import GAMA from '@/public/nvidia/GAM-Associate.svg';
import ADSA from '@/public/nvidia/ADS-Associate.png';
import OUDA from '@/public/nvidia/OUD-Associate.png';

import Image from 'next/image';

interface CertificationBoxProps {
  image: string;
  onClick?: () => void;
}

function CertificationBox({ image, onClick }: CertificationBoxProps) {
  return (
    <button
      onClick={onClick}
      className="group relative w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] aspect-square bg-white rounded-lg hover:border-green-600 hover:border hover:text-white hover:shadow-lg transition-all duration-200 flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 cursor-pointer"
    >
      <Image
        src={image}
        alt="Certification"
        width={100}
        height={100}
        className="w-full h-full object-contain"
      />
    </button>
  );
}

const CERT_LINKS = {
  professionalAIInfrastructure: '#',
  professionalAIOperations: '#',
  professionalAINetworking: '#',
  professionalGenAILLMs: '#',
  professionalAgenticAI: '#',
  professionalAcceleratedDataScience: '#',
  professionalOpenUSDDevelopment: '#',
  associateAIInfrastructureAndOperations: '#',
  associateGenAILLMs: '#',
  associateGenAIMultimodal: '#',
  associateAcceleratedDataScience: '#',
  associateOpenUSDDevelopment: '#',
};

export default function CertificationFrameworkPage() {
  const t = useTranslations('certificationFramework');
  const router = useRouter();

  const handleCertificationClick = (certId: string) => {
    router.push(`${CERT_LINKS[certId as keyof typeof CERT_LINKS]}`);
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col relative">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-6 sm:mb-8 md:mb-12">
        {t('title')}
      </h1>

      {/* Framework Grid */}
      <div className="max-w-7xl mx-auto flex-1 flex flex-col justify-center w-full">
        {/* Column Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
              {t('aiInfrastructure')}
            </h2>
          </div>
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
              {t('aiApplicationsAndWorkloads')}
            </h2>
          </div>
        </div>

        {/* Professional Level */}
        <div className="mb-6 sm:mb-8 flex flex-col md:flex-row relative">
          {/* Level Label - Mobile: Normal, Desktop: Rotated */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4 md:mb-0 md:-rotate-90 md:absolute md:top-1/2 md:z-30 md:left-[-80px] lg:left-[-100px] md:-translate-y-1/2 text-center md:text-left whitespace-nowrap">
            {t('professional')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1">
            {/* AI Infrastructure - Professional */}
            <div className="flex max-md:flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              <CertificationBox
                image={AIP}
                onClick={() => handleCertificationClick('professional-ai-infrastructure')}
              />
              <CertificationBox
                image={AOP}
                onClick={() => handleCertificationClick('professional-gen-ai-llms')}
              />
              <CertificationBox
                image={ANP}
                onClick={() => handleCertificationClick('professional-agentic-ai')}
              />
            </div>

            {/* AI Applications - Professional */}
            <div className="flex max-md:flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              <CertificationBox
                image={GALP.src}
                onClick={() => handleCertificationClick('professional-gen-ai-llms')}
              />
              <CertificationBox
                image={AAP}
                onClick={() => handleCertificationClick('professional-agentic-ai')}
              />
              <CertificationBox
                image={ADSP}
                onClick={() => handleCertificationClick('professional-accelerated-data-science')}
              />
              <CertificationBox
                image={AOD}
                onClick={() => handleCertificationClick('professional-openusd-development')}
              />
            </div>
          </div>
        </div>

        {/* Associate Level */}
        <div className="mb-6 sm:mb-8 flex flex-col md:flex-row relative">
          {/* Level Label - Mobile: Normal, Desktop: Rotated */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4 md:mb-0 md:-rotate-90 md:absolute md:top-1/2 md:z-30 md:left-[-65px] lg:left-[-85px] md:-translate-y-1/2 text-center md:text-left whitespace-nowrap">
            {t('associate')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* AI Infrastructure - Associate */}
            <div className="flex max-md:flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              <CertificationBox
                image={AIAOA}
                onClick={() => handleCertificationClick('associate-ai-infrastructure-operations')}
              />
            </div>

            {/* AI Applications - Associate */}
            <div className="flex max-md:flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              <CertificationBox
                image={GALA}
                onClick={() => handleCertificationClick('associate-gen-ai-llms')}
              />
              <CertificationBox
                image={GAMA}
                onClick={() => handleCertificationClick('associate-gen-ai-multimodal')}
              />
              <CertificationBox
                image={ADSA.src}
                onClick={() => handleCertificationClick('associate-accelerated-data-science')}
              />
              <CertificationBox
                image={OUDA.src}
                onClick={() => handleCertificationClick('associate-openusd-development')}
              />
            </div>
          </div>
        </div>

        {/* Footnotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 sm:mt-12">
          <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
            <p className="text-xs sm:text-sm text-gray-700">
              {t('footnotes.infrastructure')}
            </p>
          </div>
          <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
            <p className="text-xs sm:text-sm text-gray-700">
              {t('footnotes.applications')}
            </p>
          </div>
        </div>
      </div>

      {/* NVIDIA Logo */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-10 flex justify-end">
        <Image
          src="/nvidia-sq-logo.webp"
          alt="NVIDIA Logo"
          width={50}
          height={50}
          className="w-10 h-10 sm:w-14 sm:h-14 md:w-[70px] md:h-[70px]"
        />
      </div>
    </div>
  );
}

