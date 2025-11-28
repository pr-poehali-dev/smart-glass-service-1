import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import SocialProofFAQ from '@/components/SocialProofFAQ';
import ContactFormFooter from '@/components/ContactFormFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary">
      <HeroSection />
      <ProblemSolutionSection />
      <SocialProofFAQ />
      <ContactFormFooter />
    </div>
  );
};

export default Index;
