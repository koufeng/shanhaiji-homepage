import type { Metadata } from "next";

import { BusinessSection, PageHero, PipelineSection } from "@/components/site/site-sections";

export const metadata: Metadata = {
  title: "核心业务",
  description: "山海集围绕 AI 宠物、IP 游戏、AI 互动漫剧和潮玩盲盒构建 IP 产品矩阵。"
};

export default function BusinessPage() {
  return (
    <>
      <PageHero
        label="Business Lines"
        title={
          <>
            四大核心<span className="gold">业务矩阵</span>
          </>
        }
        desc="围绕原创 IP 构建全方位的产品与服务生态，覆盖虚拟陪伴、内容互动、游戏体验与实体消费。"
      />
      <BusinessSection />
      <PipelineSection />
    </>
  );
}
