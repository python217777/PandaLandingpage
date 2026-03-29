// app/page.tsx
import PageContainer from "@/components/layout/PageContainer";
import { ComingSoonProvider } from "@/components/landing/ComingSoonProvider";
import HeaderSection from "@/components/landing/HeaderSection";
import EarlyBirdSection from "@/components/landing/EarlyBirdSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PlaySection from "@/components/landing/PlaySection";
import LaunchGamesSection from "@/components/landing/LaunchGamesSection";
import FeaturingSection from "@/components/landing/FeaturingSection";
import WhyJoinSection from "@/components/landing/WhyJoinSection";
import BonusSection from "@/components/landing/BonusSection";
import SignUpSection from "@/components/landing/SignUpSection";
import SecureSection from "@/components/landing/SecureSection";
import JoinSection from "@/components/landing/JoinSection";
import WinnerSection from "@/components/landing/WinnerSection";
import FooterSection from "@/components/landing/FooterSection";

export default function HomePage() {
  return (
    <PageContainer>
      <ComingSoonProvider>
      <div className="min-h-screen bg-[#0f0f23] text-white font-sans">
        <HeaderSection />
        <EarlyBirdSection />
        <PlaySection />
        <FeaturingSection />
        <LaunchGamesSection />
        <WhyJoinSection />
        <HowItWorksSection />
        <BonusSection />
        <SignUpSection />
        <SecureSection />
        <JoinSection />
        <WinnerSection />
        {/* <FooterSection /> */}
      </div>
      </ComingSoonProvider>
    </PageContainer>
  );
}
