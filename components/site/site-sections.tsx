import Link from "next/link";
import type { ReactNode } from "react";

import { WechatQrPlaceholder } from "@/components/site/icons";
import { businesses, contactIntents, ips, pipeline, stats, strengths } from "@/components/site/content";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HeroSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`hero ${compact ? "page-hero" : ""}`}>
      <div className="hero-bg-glyph">集</div>
      <div className="hero-radial" />
      <div className="hero-content">
        <h1>
          以<span className="gold">AI</span>之力
          <br />
          铸<span className="gold">山海</span>万象
          <span className="thin">AI-NATIVE IP STUDIO · WHERE STORIES COME ALIVE</span>
        </h1>
        <p className="hero-desc">
          山海集 — AI 原生的 IP 设计与孵化公司。用 AI 重新定义 IP
          的创造、生产与商业化全流程，覆盖互动漫剧、虚拟陪伴、IP 游戏与潮玩生态。
        </p>
        {!compact ? (
          <div className="hero-buttons">
            <Button asChild size="lg" className="rounded-none px-10 tracking-[3px]">
              <Link href="/ips/">IP 探索</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none border-white/15 bg-transparent px-10 text-mist tracking-[3px] hover:border-gold hover:bg-transparent hover:text-gold">
              <Link href="/business/">了解业务</Link>
            </Button>
          </div>
        ) : null}
      </div>
      {!compact ? (
        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      ) : null}
    </section>
  );
}

export function PageHero({
  label,
  title,
  desc
}: {
  label: string;
  title: ReactNode;
  desc: string;
}) {
  return (
    <section className="hero page-hero">
      <div className="hero-bg-glyph">集</div>
      <div className="hero-radial" />
      <div className="hero-content">
        <div className="section-label reveal">{label}</div>
        <h1 className="reveal">{title}</h1>
        <p className="hero-desc reveal">{desc}</p>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section-border" id="about">
      <div className="section-pad">
        <div className="section-label reveal">About ShanHaiJi.ai</div>
        <h2 className="section-title reveal">
          在<span className="gold">技术</span>与<span className="gold">叙事</span>之间
          <br />
          创造有灵魂的 IP
        </h2>
        <div className="about-grid reveal">
          {stats.map((stat) => (
            <Card key={stat.label} className="about-stat rounded-none shadow-none">
              <div className="num">
                {stat.value}
                <span className="unit">{stat.unit}</span>
              </div>
              <div className="label">{stat.label}</div>
            </Card>
          ))}
        </div>
        <div className="about-text reveal">
          <p>
            山海集 — 取『集』之意，汇聚万物。我们相信下一代的 IP
            不只是一个角色或一个故事，而是一个可以呼吸、可以生长、可以跨媒介穿梭的数字生命体。从一句台词，到一段剧情；从一只小兽，到一方世界。
          </p>
          <p>
            公司深耕 IP
            设计与孵化领域，拥有行业领先的 AI 内容生产能力。从概念设定到角色建模，从互动叙事到商业化落地，我们以 AI
            为创作引擎，让创意以更短的周期、更高的密度走向市场，让每一个 IP 都拥有走进现实的能力。
          </p>
        </div>
      </div>
    </section>
  );
}

export function BusinessSection() {
  return (
    <section className="section-border" id="business">
      <div className="section-pad">
        <div className="section-label reveal">Business Lines</div>
        <h2 className="section-title reveal">
          四大核心<span className="gold">业务矩阵</span>
        </h2>
        <p className="section-desc reveal">围绕原创 IP 构建全方位的产品与服务生态，覆盖虚拟与现实消费场景。</p>
        <div className="biz-grid reveal">
          {businesses.map((item) => (
            <Card key={item.title} className="biz-card rounded-none shadow-none">
              <div className="line-icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <div className="en">{item.en}</div>
              <p>{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IpSection() {
  return (
    <section className="section-border" id="showcase">
      <div className="section-pad">
        <div className="section-label reveal">IP Universe</div>
        <h2 className="section-title reveal">
          自研 <span className="gold">IP</span> 矩阵
        </h2>
        <p className="section-desc reveal">
          每一个 IP 都是一个可以跨媒介生长的世界。从互动漫剧出发，向游戏、潮玩、虚拟陪伴延展。
        </p>
        <div className="showcase-row reveal">
          {ips.map((item) => (
            <Card key={item.title} className={`showcase-item ${item.className} rounded-none shadow-none`}>
              <div className="ip-gradient" />
              <div className="ip-status">
                <span className="pulse" />
                {item.status}
              </div>
              <div className="ip-visual">{item.visual}</div>
              <div className="ip-info">
                <div className="ip-tag">{item.tag}</div>
                <h3>{item.title}</h3>
                <div className="ip-en">{item.en}</div>
                <p className="ip-desc">{item.desc}</p>
                <div className="ip-meta">
                  <span>
                    类型<strong>{item.type}</strong>
                  </span>
                  <span>
                    状态<strong>{item.state}</strong>
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PipelineSection() {
  return (
    <section className="section-border" id="pipeline">
      <div className="section-pad">
        <div className="pipeline-wrap">
          <div className="pipeline-sidebar reveal">
            <div className="section-label">AI Production Pipeline</div>
            <h2 className="section-title">
              全链路
              <br />
              <span className="gold">AI 生产力</span>
            </h2>
            <p>从灵感到落地的每个环节，AI 都是我们的核心生产力。不是辅助工具，而是创作引擎。</p>
          </div>
          <div className="pipeline-flow reveal">
            {pipeline.map((step) => (
              <Card key={step.num} className="pipe-step rounded-none shadow-none">
                <div className="pipe-num">{step.num}</div>
                <div className="pipe-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                  <div className="pipe-tags">
                    {step.tags.map((tag) => (
                      <span key={tag} className="pipe-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function StrengthsSection() {
  return (
    <section className="section-border" id="strengths">
      <div className="section-pad">
        <div className="section-label reveal">Why Shanhaiji</div>
        <h2 className="section-title reveal">
          选择<span className="gold">山海集</span>的理由
        </h2>
        <div className="adv-grid reveal">
          {strengths.map((item) => (
            <Card key={item.title} className="adv-card rounded-none border-0 shadow-none">
              <div className="line-icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-glow" />
      <h2 className="reveal">
        共创<span className="gold">山海</span>新纪元
      </h2>
      <p className="cta-sub reveal">寻找合作伙伴 · IP 联名 · 投资洽谈</p>
      <div className="contact-grid reveal">
        <Card className="contact-card contact-wechat rounded-none shadow-none">
          <div className="wechat-qr">
            <WechatQrPlaceholder />
          </div>
          <div className="wechat-title">微信扫码联系</div>
          <div className="wechat-id">WeChat · shanhaiji_ai</div>
        </Card>
        <div className="contact-intents">
          {contactIntents.map((intent) => (
            <a
              key={intent.title}
              className="intent-card"
              href={`mailto:contact@shanhaiji.ai?subject=${encodeURIComponent(intent.subject)}`}
            >
              <div className="line-icon" aria-hidden="true">
                {intent.icon}
              </div>
              <div className="intent-text">
                <h4>{intent.title}</h4>
                <p>{intent.desc}</p>
              </div>
              <div className="intent-arrow" aria-hidden="true">
                →
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="contact-base reveal">
        或直接邮件 <a href="mailto:contact@shanhaiji.ai">contact@shanhaiji.ai</a>
        <span className="sep">·</span>
        24h 内回复
      </div>
    </section>
  );
}
