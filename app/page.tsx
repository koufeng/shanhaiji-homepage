import {
  AboutSection,
  BusinessSection,
  ContactSection,
  HeroSection,
  IpSection,
  PipelineSection,
  StrengthsSection
} from "@/components/site/site-sections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BusinessSection />
      <IpSection />
      <PipelineSection />
      <StrengthsSection />
      <ContactSection />
    </>
  );
}
