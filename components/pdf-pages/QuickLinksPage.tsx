'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { pageLinks } from './pageLinks';
import Image from 'next/image';

export default function QuickLinksPage() {
  const t = useTranslations('quickLinks');

  const handleLinkClick = (link: string) => {
    window.open(link, '_blank');
  }

  return (
    <div className="min-h-screen bg-white p-8 md:p-12 relative">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-8">
        {t('title')}
      </h1>

      {/* Main Content Table */}
      <div className="max-w-6xl mx-auto border-2 border-gray-300 rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-white ">
              <th className="p-4 text-left">
                <h2 className="text-xl font-bold text-black">

                </h2>
              </th>
              <th className="p-4 text-left">
                <h2 className="text-xl font-bold text-black">
                  {t('learningPathsToCertification')}
                </h2>
              </th>
              <th className="p-4 text-left">
                <h2 className="text-xl font-bold text-black">
                  {t('learningPathsByTopic')}
                </h2>
              </th>
            </tr>
          </thead>

          <tbody>


            {/* Developer Certifications and Topics Rows */}
            <tr className="bg-green-50">
              <td className="p-4">
                <h3 className="text-lg font-bold text-black">
                  {t('forDevelopers')}
                </h3>
              </td>
              <td className="p-6 align-top">
                <div className="space-y-3">
                  <Link href={`/nvidia#${pageLinks.developerCertifications.associateGenerativeAILLM}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('developerCertifications.associateGenerativeAILLM')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.developerCertifications.associateGenerativeAIMultimodal}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('developerCertifications.associateGenerativeAIMultimodal')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.developerCertifications.professionalGenerativeAILLM}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('developerCertifications.professionalGenerativeAILLM')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.developerCertifications.professionalAgenticAI}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('developerCertifications.professionalAgenticAI')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.developerCertifications.professionalAcceleratedDataScience}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('developerCertifications.professionalAcceleratedDataScience')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.developerCertifications.professionalOpenUSDDevelopment}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('developerCertifications.professionalOpenUSDDevelopment')}
                  </Link>
                </div>
              </td>
              <td className="p-6 align-top">
                <div className="space-y-3">
                  <Link href={`/nvidia#${pageLinks.developerTopics.acceleratedComputing}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('developerTopics.acceleratedComputing')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.developerTopics.computerVisionAndVideoAnalytics}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('developerTopics.computerVisionAndVideoAnalytics')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.developerTopics.dataScience}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('developerTopics.dataScience')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.developerTopics.deepLearning}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('developerTopics.deepLearning')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.developerTopics.generativeAIAndLLMs}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('developerTopics.generativeAIAndLLMs')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.developerTopics.industrialDigitalTwinTraining}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('developerTopics.industrialDigitalTwinTraining')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.developerTopics.industryRelatedTraining}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('developerTopics.industryRelatedTraining')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.developerTopics.openUSD}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('developerTopics.openUSD')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.developerTopics.robotics}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('developerTopics.robotics')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.developerTopics.simulationModelingAndDesign}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('developerTopics.simulationModelingAndDesign')}
                  </Link>
                </div>
              </td>
            </tr>



            {/* Infrastructure Certifications and Topics Rows */}
            <tr className="bg-blue-50">
              <td className="p-4 border-t-2">
                <h3 className="text-lg font-bold text-black">
                  {t('forInfrastructureProfessionals')}
                </h3>
              </td>
              <td className="p-6 align-top">
                <div className="space-y-3">
                  <Link href={`/nvidia#${pageLinks.infrastructureCertifications.associateAIInfrastructureAndOperations}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('infrastructureCertifications.associateAIInfrastructureAndOperations')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.infrastructureCertifications.professionalAIInfrastructure}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('infrastructureCertifications.professionalAIInfrastructure')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.infrastructureCertifications.professionalAIOperations}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('infrastructureCertifications.professionalAIOperations')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.infrastructureCertifications.professionalAINetworking}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('infrastructureCertifications.professionalAINetworking')}
                  </Link>
                </div>
              </td>
              <td className="p-6 align-top">
                <div className="space-y-3">
                  <Link href={`/nvidia#${pageLinks.infrastructureTopics.acceleratedComputing}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('infrastructureTopics.acceleratedComputing')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.infrastructureTopics.dataCenterAndCloud}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('infrastructureTopics.dataCenterAndCloud')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.infrastructureTopics.dataCenterOverview}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('infrastructureTopics.dataCenterOverview')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.infrastructureTopics.infrastructureForGenerativeAIAndLLMs}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('infrastructureTopics.infrastructureForGenerativeAIAndLLMs')}
                  </Link>
                  <Link href={`/nvidia#${pageLinks.infrastructureTopics.networking}`} className="block text-blue-600 underline hover:text-blue-800">
                    {t('infrastructureTopics.networking')}
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-8 p-6  text-center rounded-lg">
        <p className="text-green-700 text-base md:text-lg">
          {t('footer.customizedTraining')}{' '}
          <strong className='underline cursor-pointer hover:text-green-800' onClick={() => handleLinkClick("https://www.nvidia.com/en-us/learn/organizations/request")}>{t('footer.trainingAdvisors')}</strong>.
        </p>
        <p className="text-gray-700 text-base md:text-lg mt-2 italic">
          {t('footer.viewCatalog')}{' '}
          <strong className="underline">{t('footer.here')}</strong>.{' '}
          {t('footer.contactUs')}{' '}
          <strong className="underline">{t('footer.here2')}</strong>.
        </p>
      </div>

      {/* NVIDIA Logo */}
      <div className="absolute bottom-0 right-10 max-w-6xl mx-auto mt-6 flex justify-end">
        <Image src="/nvidia-sq-logo.webp" alt="NVIDIA Logo" width={70} height={70} />
      </div>
    </div>
  );
}

