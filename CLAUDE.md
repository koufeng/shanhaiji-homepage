# CLAUDE.md

> 给 Claude / AI 协作者的项目上下文。读完应能快速 grasp 项目设计决策、约束、和编辑时要避免的坑。

## 项目背景

**山海集（SHANHAIJI.AI）** 是一家 AI 原生的 IP 设计与孵化公司，业务覆盖 AI 互动漫剧、虚拟陪伴、IP 游戏与潮玩生态。这是公司官网（landing page），目标受众：潜在合作伙伴 / 投资人 / 媒体 / 候选人。

公司处于**早期阶段**，无已签约客户、无媒体背书、无大额融资公开信息。

### ⚠️ 编辑文案的硬约束

- **不要捏造数据**：客户数、用户量、融资轮次、合作伙伴 logo、媒体引用 —— 早期公司列空格 / 占位反而扣分。提到这类内容前先确认用户有真实素材
- **业务线四件套固定**：AI 宠物 / IP 游戏 / AI 互动漫剧 / 潮玩盲盒
- **三个自研 IP 固定**：五行小兽 / ChaoPets / 我的 AI 实习男友
- **文案口径必须统一为 "AI 互动漫剧"**（历史上有 "互动剧"、"AI 原生互动剧" 等变体，已全局统一）

## 技术决策（理解 why，不要轻易改）

### Next 静态多页架构

项目已迁移为 **Next.js App Router + Tailwind CSS + shadcn/ui**：

- `app/page.tsx`：首页，组合完整 landing 内容
- `app/about` / `app/business` / `app/ips` / `app/pipeline` / `app/contact`：多页静态路由
- `components/site/`：站点业务组件、数据和动效组件
- `components/ui/`：shadcn 基础组件
- `next.config.js`：配置 `output: "export"`、`trailingSlash: true`、`images.unoptimized: true`

部署仍通过 `bash build.sh` 输出 `dist/`，脚本内部运行 `npm run build` 并复制 Next 导出的 `out/`。

### 字体策略

| 字体 | 来源 | 用途 |
|---|---|---|
| Noto Serif SC | **本地子集化** woff2，3 weights，位于 `public/fonts/` | 所有中文标题 / Logo |
| Outfit | fonts.loli.net 镜像 | body 默认 sans-serif |
| Playfair Display | fonts.loli.net 镜像 | 仅 `.pipe-num`（"01/02/03..."） |

🔑 **Noto Serif SC 是字符级子集化**。**改中文文案后必须执行**：

```bash
./subset-fonts.sh
cp fonts/*.woff2 public/fonts/
git add fonts/NotoSerifSC-*.woff2 public/fonts/NotoSerifSC-*.woff2
```

否则线上新增字符会回退到系统宋体，字体不一致。

### 公开资源

Next 只会把 `public/` 里的静态资源导出到公网。新增对外公开资源（如真的 `og-image.png` / `wechat-qr.png`）应放在 `public/`，再在页面或 metadata 中引用。

DEPLOY.md / TODO.md / README.md / CLAUDE.md / subset-fonts.sh / build.sh 自身都不在 `public/`，不会部署到公网。

## 代码风格约定

### CSS 设计系统

- Tailwind 主题在 `tailwind.config.ts`，全局视觉变量在 `app/globals.css`
- 颜色 / 间距优先用 CSS 变量或 Tailwind token，避免散落硬编码颜色（透明度变体除外）
- 关键变量：`--gold` / `--gold-light` / `--gold-dim` / `--ink` / `--void` / `--mist` / `--text-dim`
- 中文衬线 stack：`'Noto Serif SC', 'Source Han Serif SC', 'Songti SC', STSong, serif`
- 英文 sans stack：`'Outfit', -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', sans-serif`
- 响应式：`@media (max-width: 900px)` 主断点，`@media (max-width: 600px)` 小屏微调
- 动效要兼容 `@media (prefers-reduced-motion: reduce)`

### SVG 图标语言

整页 SVG 风格统一，**新增图标要遵守**：

- viewBox：56×56（biz-icon / adv-icon）或 32×32（intent-icon）
- `fill="none" stroke="currentColor" stroke-width="1.4"`
- `stroke-linecap="round" stroke-linejoin="round"`
- 通过 currentColor 让 hover 时颜色跟随父级 `color` 切换
- 风格：geometric line-art，少量填充小圆点作为视觉重音

### 客户端交互

- 客户端交互集中在 `components/site/site-nav.tsx`、`particle-canvas.tsx`、`reveal-effects.tsx`
- 三大功能：mobile nav toggle / canvas 粒子背景 / scroll reveal IntersectionObserver
- 性能策略：粒子数随设备能力自适应（屏宽 < 600 或 CPU < 4 核 → 30 粒子，否则 80）

## 当前的占位符（TODO.md 完整列表）

- 微信二维码图片：`<div class="wechat-qr">` 里是 SVG 占位（QR 形状但不可扫）
- WeChat ID `shanhaiji_ai`：占位
- Footer 4 个社交链接：`href="#"` 占位
- og:image：缺失
- JSON-LD `logo` 字段：未填
- `shanhaiji.ai` 域名：未注册

部署前替换为真实素材。

## 常见编辑任务

### 加 / 改中文文案

```
1. 改 `app/` 或 `components/` 中的页面文案
2. ./subset-fonts.sh   ← 关键，别忘
3. cp fonts/*.woff2 public/fonts/
4. git add fonts/NotoSerifSC-*.woff2 public/fonts/NotoSerifSC-*.woff2
```

### 加新业务卡 / 新 IP showcase

业务/IP 数据在 `components/site/content.tsx`，视觉结构在 `components/site/site-sections.tsx`。SVG 图标遵守上面的图标语言。

### 改色彩 / 视觉

优先改 `app/globals.css` 的 CSS 变量或 `tailwind.config.ts` 的 theme token。

### 加新对外公开资源

例如新增 `og-image.png`：
1. 文件放 `public/`
2. 在页面或 `app/layout.tsx` metadata 中引用
3. `npm run build` 验证导出产物中存在该文件

## 不要做的事

- ❌ 编造未经用户确认的数据 / 客户 / 媒体引用
- ❌ 把内部文档放进 `public/`
- ❌ 跳过 `subset-fonts.sh` 直接 commit 中文文案改动

## 关键文件速查

| 文件 | 作用 | 修改频率 |
|---|---|---|
| `app/page.tsx` | 首页 | 高 |
| `components/site/site-sections.tsx` | 站点区块组件 | 高 |
| `components/site/content.tsx` | 业务 / IP / 联系数据 | 高 |
| `app/globals.css` | Tailwind 与全局视觉系统 | 中 |
| `subset-fonts.sh` | 重生成字体子集 | 低（除非加新字符） |
| `next.config.js` | Next 静态导出配置 | 低 |
| `build.sh` | 构建 dist/ | 低 |
| `DEPLOY.md` | Cloudflare Pages 部署步骤 | 低 |
| `TODO.md` | 部署前待办 | 中（占位项被替换时） |
| `robots.txt` / `sitemap.xml` | SEO 基础 | 极低 |
