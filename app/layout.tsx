import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { ParticleCanvas } from "@/components/site/particle-canvas";
import { RevealEffects } from "@/components/site/reveal-effects";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";

export const metadata: Metadata = {
  metadataBase: new URL("https://shanhaiji.ai"),
  title: {
    default: "山海集 · SHANHAIJI.AI — AI 原生的 IP 设计与孵化公司",
    template: "%s · 山海集 SHANHAIJI.AI"
  },
  description:
    "山海集 SHANHAIJI.AI — AI 原生的 IP 设计与孵化公司，业务覆盖 AI 互动漫剧、虚拟陪伴、IP 游戏与潮玩生态。代表作《我的 AI 实习男友》《五行小兽》。",
  keywords: ["山海集", "SHANHAIJI", "AI IP", "IP 孵化", "AI 互动漫剧", "虚拟陪伴", "潮玩", "AI 内容生产"],
  authors: [{ name: "山海集 SHANHAIJI" }],
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://shanhaiji.ai",
    siteName: "山海集 SHANHAIJI.AI",
    title: "山海集 · SHANHAIJI.AI — AI 原生的 IP 设计与孵化",
    description: "用 AI 重新定义 IP 的创造、生产与商业化全流程。覆盖互动漫剧、虚拟陪伴、IP 游戏与潮玩生态。"
  },
  twitter: {
    card: "summary_large_image",
    title: "山海集 · SHANHAIJI.AI",
    description: "AI 原生的 IP 设计与孵化公司。"
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "山海集",
  alternateName: ["SHANHAIJI", "SHANHAIJI.AI", "山海集文化创意科技"],
  url: "https://shanhaiji.ai",
  email: "contact@shanhaiji.ai",
  description: "AI 原生的 IP 设计与孵化公司，业务覆盖 AI 互动漫剧、虚拟陪伴、IP 游戏与潮玩生态。",
  foundingDate: "2026",
  knowsAbout: ["IP 设计", "IP 孵化", "AI 内容生产", "AI 互动漫剧", "AI 虚拟陪伴", "潮玩盲盒", "IP 游戏"],
  slogan: "以 AI 之力，铸山海万象"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="preconnect" href="https://fonts.loli.net" />
        <link rel="preconnect" href="https://gstatic.loli.net" crossOrigin="" />
        <link
          href="https://fonts.loli.net/css2?family=Outfit:wght@300;400;600;700;800&family=Playfair+Display:wght@700;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <ParticleCanvas />
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
        <RevealEffects />
      </body>
    </html>
  );
}
