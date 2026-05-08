import type { Metadata } from "next";

import { PageHero, PipelineSection, StrengthsSection } from "@/components/site/site-sections";

export const metadata: Metadata = {
  title: "AI 能力",
  description: "山海集以 AI 作为核心生产力，覆盖概念生成、视觉设计、内容制作、智能交互与商业落地。"
};

export default function PipelinePage() {
  return (
    <>
      <PageHero
        label="AI Production Pipeline"
        title={
          <>
            全链路<span className="gold"> AI 生产力</span>
          </>
        }
        desc="从灵感到落地的每个环节，AI 都是我们的创作引擎和工业化生产能力。"
      />
      <PipelineSection />
      <StrengthsSection />
    </>
  );
}
