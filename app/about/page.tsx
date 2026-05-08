import type { Metadata } from "next";

import { AboutSection, StrengthsSection, PageHero } from "@/components/site/site-sections";

export const metadata: Metadata = {
  title: "关于山海集",
  description: "了解山海集 SHANHAIJI.AI 的 AI 原生 IP 设计、孵化与内容生产能力。"
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About ShanHaiJi.ai"
        title={
          <>
            在<span className="gold">技术</span>与<span className="gold">叙事</span>之间
          </>
        }
        desc="山海集专注于 AI 原生 IP 的设计、孵化与商业化，让角色、故事和产品在同一套世界观中持续生长。"
      />
      <AboutSection />
      <StrengthsSection />
    </>
  );
}
