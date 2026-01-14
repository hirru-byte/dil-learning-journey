import LanguageSwitcher from '@/components/LanguageSwitcher';
import { TitlePage, QuickLinksPage, CertificationFrameworkPage, CertificationFrameworkPage2, AcceleratedComputingPage, AgenticAIPage, SimulationModelingDesignPage, ComputerVisionVideoAnalyticsPage, DataSciencePage, DataScienceTrainingPage, DeepLearningTrainingPage, GenAILLMCertificationsPage, GenAIMultimodalCertificationsPage, GenerativeAILLMTrainingPage, IndustrialDigitalTwinsTrainingPage, IndustryRelatedTrainingPage, OpenUSDCertificationPage, RoboticsTrainingPage, AcceleratedComputingTrainingPage, AIInfrastructureCertificationsPage, DataCenterCloudTrainingPage, DataCenterOverviewTrainingPage, InfrastructureGenAILLMTrainingPage, NetworkingTrainingPage } from '@/components/pdf-pages';

export default function NvidiaPage() {
  return (
    <div className="w-full">
      {/* Language Switcher - Fixed position */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>

      {/* PDF Page 1: Title Page */}
      <div className="relative">
        <TitlePage />
      </div>

      {/* PDF Page 2: Quick Links Page */}
      <div className="relative">
        <QuickLinksPage />
      </div>

      {/* PDF Page 3: Certification Framework Page */}
      <div className="relative">
        <CertificationFrameworkPage />
      </div>

      {/* PDF Page 4: Certification Framework Page 2 */}
      <div className="relative">
        <CertificationFrameworkPage2 />
      </div>

      {/* PDF Page 5: Accelerated Computing Training Page */}
      <div className="relative">
        <AcceleratedComputingPage />
      </div>

      {/* PDF Page 6: Agentic AI Certification Page */}
      <div className="relative">
        <AgenticAIPage />
      </div>

      {/* PDF Page 7: Simulation Modeling and Design Page */}
      <div className="relative">
        <SimulationModelingDesignPage />
      </div>

      {/* PDF Page 8: Computer Vision and Video Analytics Training Page */}
      <div className="relative">
        <ComputerVisionVideoAnalyticsPage />
      </div>

      {/* PDF Page 9: Data Science Certification Page */}
      <div className="relative">
        <DataSciencePage />
      </div>

      {/* PDF Page 10: Data Science Training Page */}
      <div className="relative">
        <DataScienceTrainingPage />
      </div>

      {/* PDF Page 11: Deep Learning Training Page */}
      <div className="relative">
        <DeepLearningTrainingPage />
      </div>

      {/* PDF Page 12: Gen AI LLM Certifications Page */}
      <div className="relative">
        <GenAILLMCertificationsPage />
      </div>

      {/* PDF Page 13: Gen AI Multimodal Certifications Page */}
      <div className="relative">
        <GenAIMultimodalCertificationsPage />
      </div>

      {/* PDF Page 14: Generative AI and LLM Training Page */}
      <div className="relative">
        <GenerativeAILLMTrainingPage />
      </div>

      {/* PDF Page 15: Industrial Digital Twins Training Page */}
      <div className="relative">
        <IndustrialDigitalTwinsTrainingPage />
      </div>

      {/* PDF Page 16: Industry-Related Training Page */}
      <div className="relative">
        <IndustryRelatedTrainingPage />
      </div>

      {/* PDF Page 17: OpenUSD Certification Page */}
      <div className="relative">
        <OpenUSDCertificationPage />
      </div>

      {/* PDF Page 18: Robotics Training Page */}
      <div className="relative">
        <RoboticsTrainingPage />
      </div>

      {/* PDF Page 19: Accelerated Computing Training Page */}
      <div className="relative">
        <AcceleratedComputingTrainingPage />
      </div>

      {/* PDF Page 20: AI Infrastructure Certifications Page */}
      <div className="relative">
        <AIInfrastructureCertificationsPage />
      </div>

      {/* PDF Page 21: Data Center and Cloud Training Page */}
      <div className="relative">
        <DataCenterCloudTrainingPage />
      </div>

      {/* PDF Page 22: Data Center Overview Training Page */}
      <div className="relative">
        <DataCenterOverviewTrainingPage />
      </div>

      {/* PDF Page 23: Infrastructure for Gen AI and LLM Training Page */}
      <div className="relative">
        <InfrastructureGenAILLMTrainingPage />
      </div>

      {/* PDF Page 24: Networking Training Page */}
      <div className="relative">
        <NetworkingTrainingPage />
      </div>
    </div>
  );
}

