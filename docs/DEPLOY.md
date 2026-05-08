# 山海集 · 部署指南

## 方案 0：Vercel 部署（当前推荐）

项目根目录已提供 `vercel.json`，导入 Git 仓库后使用以下设置：

- **Framework Preset**: `Next.js`
- **Root Directory**: 仓库根目录
- **Install Command**: 自动识别 `package-lock.json`，使用 npm
- **Build Command**: `npm run build`
- **Output Directory**: 不要覆盖，保持 Vercel Next.js 默认值
- **Node.js Version**: `22.x`（由 `package.json#engines.node` 指定）

注意：不要在 Vercel 中使用 `bash build.sh` / `dist`，也不要把 Output Directory 改成 `out`。`build.sh` 只为 Cloudflare Pages 保留。

---

## Cloudflare Pages 部署

## 准备工作

- [ ] 已购买 `shanhaiji.ai` 域名（推荐用 Cloudflare Registrar，DNS 配置零成本）
- [ ] Cloudflare 账号（免费 plan 即可）
- [ ] GitHub 账号 + 一个 repo（如果用 Git 自动部署）

---

## 方案 A：Git 自动部署（推荐）

### 1. 推代码到 GitHub

```bash
# 创建 repo 后
git remote add origin git@github.com:<你的账号>/shanhaiji-website.git
git push -u origin main
```

### 2. 创建 Cloudflare Pages 项目

1. 登录 https://dash.cloudflare.com
2. 左侧菜单 → **Workers & Pages** → **Create** → **Pages**
3. **Connect to Git** → 授权 GitHub → 选择刚创建的 repo
4. 构建设置：
   - **Framework preset**: `Next.js`
   - **Build command**: `bash build.sh`
   - **Build output directory**: `dist`
5. **Save and Deploy** —— 30 秒内首次部署完成，会拿到一个 `*.pages.dev` 测试域名

> 💡 **为什么需要 build.sh**：项目使用 Next.js 静态导出，`next.config.js` 已配置 `output: "export"`。`build.sh` 先运行 `npm run build`，再把 Next 生成的 `out/` 复制到 Cloudflare Pages 使用的 `dist/`。

### 3. 绑定自定义域名

1. 项目页面 → **Custom domains** → **Set up a custom domain**
2. 输入 `shanhaiji.ai`，Continue
3. 同步再加一个 `www.shanhaiji.ai`
4. 如果域名已经在 Cloudflare 名下，DNS 记录会自动添加。否则需要手动改 nameserver 到 Cloudflare（在 Registrar 处操作）

### 4. 性能与安全设置

进入 Cloudflare 仪表板下的域名（不是 Pages 项目）：

- **Speed** → **Optimization**：
  - Auto Minify：HTML / CSS / JS 全开
  - Brotli：开启
  - Early Hints：开启
- **Caching** → **Configuration**：
  - Browser Cache TTL：`4 hours`（HTML 这样改起来快，CDN 缓存仍可更长）
- **SSL/TLS** → **Edge Certificates**：
  - Always Use HTTPS：ON
  - Minimum TLS Version：`TLS 1.2`
  - Automatic HTTPS Rewrites：ON
- **Security** → **Settings**：
  - Security Level：Medium
  - Bot Fight Mode：ON

### 5. 自动重新部署

之后每次 `git push` 到 main 分支，Cloudflare Pages 会自动重新构建部署，约 20–40 秒可访问新版本。

---

## 方案 B：Wrangler CLI 直接上传（不走 Git）

适合一次性快速部署、不想公开代码仓库的情况：

```bash
bash build.sh                                     # 先构建 dist/
npm install -g wrangler
wrangler login                                    # 浏览器打开授权
wrangler pages deploy dist --project-name=shanhaiji
```

之后绑定域名步骤同方案 A 第 3 步。

---

## 部署后必查清单

```
□ https://shanhaiji.ai/                   首页能打开
□ https://shanhaiji.ai/about/             关于页能打开
□ https://shanhaiji.ai/business/          业务页能打开
□ https://shanhaiji.ai/ips/               IP 展示页能打开
□ https://shanhaiji.ai/pipeline/          AI 能力页能打开
□ https://shanhaiji.ai/contact/           联系页能打开
□ https://shanhaiji.ai/robots.txt         返回正确内容
□ https://shanhaiji.ai/sitemap.xml        返回 XML
□ https://www.shanhaiji.ai/               能正常重定向 / 访问
□ DevTools → Network                      所有资源 200，无 404
□ DevTools → Console                      无报错
□ 移动真机：iOS Safari、Android Chrome   交互正常
□ Lighthouse                              Performance > 85，SEO > 95
□ 内地访问测速（itdog.cn 之类）         加载时间可接受
```

## SEO 提交

部署稳定后提交 sitemap 给搜索引擎收录：

| 平台 | 入口 |
|---|---|
| Google | https://search.google.com/search-console |
| 百度 | https://ziyuan.baidu.com/site/index |
| Bing | https://www.bing.com/webmasters |

每个平台都先验证域名所有权（在 DNS 加一条 TXT 记录或上传文件），然后提交 `sitemap.xml`。

---

## 后期优化方向

- **Cloudflare Web Analytics**：免费、隐私友好的访问统计，不用 GA / 百度统计也够
- **Cloudflare Workers**：把 mailto 联系方式升级成真表单，零成本（10 万次/天免费额度）
- **Page Rules**：缓存 `/fonts/*` 一年，HTML 短缓存，平衡更新速度和性能
- **Speed Insights**：免费的 Real User Monitoring，能看到真实用户的加载体验

## 国内访问提速（如果发现慢）

Cloudflare 免费 plan 在内地走 HK / SG 节点，速度一般。如果后期访问量上来了：

1. **付费升级**：Cloudflare Enterprise + China Network（成本较高）
2. **迁移**：转到 阿里云全站加速 + OSS（需要 ICP 备案，2–4 周）
3. **混合**：Cloudflare 全球，国内用阿里云 CDN 反向代理回源（中等复杂度）

早期阶段不用想这一步，访问量少的时候 Cloudflare 免费 plan 完全够用。
