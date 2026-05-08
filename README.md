# 山海集 · SHANHAIJI.AI

AI 原生的 IP 设计与孵化公司官网。

> 业务覆盖 AI 互动漫剧、虚拟陪伴、IP 游戏与潮玩生态。在孵 IP：《我的 AI 实习男友》《五行小兽》《ChaoPets》。

---

## 技术栈

- **Next.js App Router**：多页静态站，`next.config.js` 已配置 `output: "export"`
- **Tailwind CSS + shadcn/ui**：使用 CSS 变量、Tailwind 配置和 shadcn 基础组件
- **字体**：Noto Serif SC 子集化 woff2（3 weights）放在 `public/fonts/`，Outfit + Playfair Display 走 [fonts.loli.net](https://fonts.loli.net) 镜像
- **部署目标**：Vercel / Cloudflare Pages。Vercel 使用 `vercel.json` 发布 `out/`，Cloudflare Pages 使用 `build.sh` 发布 `dist/`

## 项目结构

```
.
├── app/                  # Next App Router 页面
│   ├── page.tsx          # 首页
│   ├── about/            # 关于页面
│   ├── business/         # 业务页面
│   ├── ips/              # IP 展示页面
│   ├── pipeline/         # AI 能力页面
│   └── contact/          # 联系页面
├── components/           # 站点组件与 shadcn/ui 组件
├── public/               # 静态公开资源
│   ├── fonts/*.woff2
│   ├── robots.txt
│   └── sitemap.xml
├── next.config.js        # 静态导出配置
├── vercel.json           # Vercel 部署配置
├── tailwind.config.ts    # Tailwind / shadcn 主题配置
├── components.json       # shadcn 配置
├── build.sh              # Next 构建并复制到 dist/
├── subset-fonts.sh       # 字体子集化工具
├── DEPLOY.md             # Cloudflare Pages 部署完整指南
├── TODO.md               # 部署前待办清单
├── CLAUDE.md             # AI 协作上下文
└── README.md             # 本文档
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地预览

```bash
npm run dev
```

打开 http://localhost:3000

### 构建可部署产物

```bash
bash build.sh
```

输出 `dist/`，内部文档不会进入公开产物，除非显式放入 `public/`。

### 重新生成字体子集

⚠️ **任何时候改了页面中文文案都要重跑**，否则新增字符在线上会回退到系统宋体：

```bash
./subset-fonts.sh
```

## 部署到 Vercel

项目根目录已配置 `vercel.json`：

- **Framework Preset**: `Next.js`
- **Install Command**: 自动识别 `package-lock.json`，使用 npm
- **Build Command**: `npm run build`
- **Output Directory**: `out`
- **Node.js**: `22.x`，由 `package.json#engines.node` 指定

导入 Git 仓库到 Vercel 后，Root Directory 保持仓库根目录即可。不要把 Vercel 的 Build Command 改成 `bash build.sh`，那是 Cloudflare Pages 的兼容脚本。

## 部署到 Cloudflare Pages

完整步骤见 [DEPLOY.md](./DEPLOY.md)。简版：

1. 推 GitHub（建议 **Private** 仓库）
2. Cloudflare Pages → Connect to Git → 选 repo
3. **Build command**: `bash build.sh`
4. **Build output directory**: `dist`
5. 绑定 `shanhaiji.ai` 自定义域名

## 待办

部署前需要补的真实素材（微信二维码 / 社交链接 / og:image 等）见 [TODO.md](./TODO.md)。

## 协作约定

- 仓库 **Private**，内部文档（DEPLOY / TODO / CLAUDE）只对协作者可见
- `build.sh` 白名单确保内部文档不会被部署到公网
- AI 协作请先读 [CLAUDE.md](./CLAUDE.md)

## 许可

© 2026 山海集文化创意科技有限公司 · 保留所有权利
