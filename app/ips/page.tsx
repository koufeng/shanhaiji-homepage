import type { Metadata } from "next";

import { ContactSection, IpSection, PageHero } from "@/components/site/site-sections";

export const metadata: Metadata = {
  title: "IP 展示",
  description: "山海集自研 IP 矩阵包括《我的 AI 实习男友》《五行小兽》和 ChaoPets。"
};

export default function IpsPage() {
  return (
    <>
      <PageHero
        label="IP Universe"
        title={
          <>
            自研 <span className="gold">IP</span> 矩阵
          </>
        }
        desc="每一个 IP 都是一个可以跨媒介生长的世界，从互动漫剧出发，向游戏、潮玩和虚拟陪伴延展。"
      />
      <IpSection />
      <ContactSection />
    </>
  );
}
