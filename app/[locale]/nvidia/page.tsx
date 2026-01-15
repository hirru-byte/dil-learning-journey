import LanguageSwitcher from '@/components/LanguageSwitcher';
import PDFPageNavigator from '@/components/PDFPageNavigator';
import { TitlePage, QuickLinksPage, CertificationFrameworkPage, CertificationFrameworkPage2, AcceleratedComputingPage, AgenticAIPage, SimulationModelingDesignPage, ComputerVisionVideoAnalyticsPage, DataSciencePage, DataScienceTrainingPage, DeepLearningTrainingPage, GenAILLMCertificationsPage, GenAIMultimodalCertificationsPage, GenerativeAILLMTrainingPage, IndustrialDigitalTwinsTrainingPage, IndustryRelatedTrainingPage, OpenUSDCertificationPage, RoboticsTrainingPage, AcceleratedComputingTrainingPage, AIInfrastructureCertificationsPage, DataCenterCloudTrainingPage, DataCenterOverviewTrainingPage, InfrastructureGenAILLMTrainingPage, NetworkingTrainingPage } from '@/components/pdf-pages';
import TACFIPPage from '@/components/pdf-pages/TACFIPPage';
import Image from 'next/image';

export default function NvidiaPage() {
  return (
    <div className="w-full">
      {/* PDF Page Navigator - Fixed position */}
      <PDFPageNavigator />

      {/* Language Switcher - Fixed position */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>

      {/* PDF Page 1: Title Page */}
      <div id="title-page" className="relative">
        <TitlePage />
      </div>

      {/* PDF Page 2: Quick Links Page */}
      <div id="quick-links" className="relative">
        <QuickLinksPage />
      </div>

      {/* PDF Page 3: Certification Framework Page */}
      <div id="certification-framework" className="relative">
        <CertificationFrameworkPage />
      </div>

      {/* PDF Page 4: Certification Framework Page 2 */}
      <div id="certification-framework-2" className="relative">
        <CertificationFrameworkPage2 />
      </div>

      {/* PDF Page 5: Accelerated Computing Training Page */}
      <div id="accelerated-computing" className="relative">
        <AcceleratedComputingPage />
      </div>

      {/* PDF Page 6: Agentic AI Certification Page */}
      <div id="agentic-ai" className="relative">
        <AgenticAIPage />
      </div>


      {/* PDF Page 8: Computer Vision and Video Analytics Training Page */}
      <div id="computer-vision-video-analytics" className="relative">
        <ComputerVisionVideoAnalyticsPage />
      </div>

      {/* PDF Page 9: Data Science Certification Page */}
      <div id="data-science" className="relative">
        <DataSciencePage />
      </div>

      {/* PDF Page 10: Data Science Training Page */}
      <div id="data-science-training" className="relative">
        <DataScienceTrainingPage />
      </div>

      {/* PDF Page 11: Deep Learning Training Page */}
      <div id="deep-learning-training" className="relative">
        <DeepLearningTrainingPage />
      </div>

      {/* PDF Page 12: Gen AI LLM Certifications Page */}
      <div id="gen-ai-llm-certifications" className="relative">
        <GenAILLMCertificationsPage />
      </div>

      {/* PDF Page 13: Gen AI Multimodal Certifications Page */}
      <div id="gen-ai-multimodal-certifications" className="relative">
        <GenAIMultimodalCertificationsPage />
      </div>

      {/* PDF Page 14: Generative AI and LLM Training Page */}
      <div id="generative-ai-llm-training" className="relative">
        <GenerativeAILLMTrainingPage />
      </div>

      {/* PDF Page 15: Industrial Digital Twins Training Page */}
      <div id="industrial-digital-twins-training" className="relative">
        <IndustrialDigitalTwinsTrainingPage />
      </div>

      {/* PDF Page 16: Industry-Related Training Page */}
      <div id="industry-related-training" className="relative">
        <IndustryRelatedTrainingPage />
      </div>

      {/* PDF Page 17: OpenUSD Certification Page */}
      <div id="openusd-certification" className="relative">
        <OpenUSDCertificationPage />
      </div>

      {/* PDF Page 18: Robotics Training Page */}
      <div id="robotics-training" className="relative">
        <RoboticsTrainingPage />
      </div>

      {/* PDF Page 7: Simulation Modeling and Design Page */}
      <div id="simulation-modeling-design" className="relative">
        <SimulationModelingDesignPage />
      </div>

      {/* PDF Page 8: TACFIP Page */}
      <div id="tacfip" className="relative">
        <TACFIPPage />
      </div>


      {/* PDF Page 19: Accelerated Computing Training Page */}
      <div id="accelerated-computing-training" className="relative">
        <AcceleratedComputingTrainingPage />
      </div>

      {/* PDF Page 20: AI Infrastructure Certifications Page */}
      <div id="ai-infrastructure-certifications" className="relative">
        <AIInfrastructureCertificationsPage />
      </div>

      {/* PDF Page 21: Data Center and Cloud Training Page */}
      <div id="data-center-cloud-training" className="relative">
        <DataCenterCloudTrainingPage />
      </div>

      {/* PDF Page 22: Data Center Overview Training Page */}
      <div id="data-center-overview-training" className="relative">
        <DataCenterOverviewTrainingPage />
      </div>

      {/* PDF Page 23: Infrastructure for Gen AI and LLM Training Page */}
      <div id="infrastructure-gen-ai-llm-training" className="relative">
        <InfrastructureGenAILLMTrainingPage />
      </div>

      {/* PDF Page 24: Networking Training Page */}
      <div id="networking-training" className="relative">
        <NetworkingTrainingPage />
      </div>

      <div id="footer" className="relative">
        <Image src="/bg-footer.webp" alt="NVIDIA Footer" className="w-full h-full object-cover" width={2000} height={2000} />
      </div>
    </div>
  );
}

