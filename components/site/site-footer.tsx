import Link from "next/link";

import { BrandMark } from "@/components/site/brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <BrandMark />
          <div className="f-sub">SHANHAIJI CREATIVE TECHNOLOGY</div>
          <p className="f-desc">
            AI 原生的 IP 设计与孵化公司，
            <br />
            以技术重塑文化创意产业。
          </p>
          <div className="f-copy">© 2026 山海集（深圳）文化创意科技有限公司 · All Rights Reserved</div>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h5>业务</h5>
            <Link href="/business/">AI 宠物</Link>
            <Link href="/business/">IP 游戏</Link>
            <Link href="/business/">AI 互动漫剧</Link>
            <Link href="/business/">潮玩盲盒</Link>
          </div>
          <div className="footer-col">
            <h5>公司</h5>
            <Link href="/about/">关于我们</Link>
            <Link href="/contact/">联系方式</Link>
          </div>
          <div className="footer-col">
            <h5>关注</h5>
            <a href="#" aria-label="微信公众号">
              微信公众号
            </a>
            <a href="#" aria-label="微博">
              微博
            </a>
            <a href="#" aria-label="抖音">
              抖音
            </a>
            <a href="#" aria-label="小红书">
              小红书
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
