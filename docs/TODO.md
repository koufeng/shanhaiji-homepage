# TODO · 部署前待办

> 这里记录已经准备好但还没接入 Next 页面组件的事项，等配合 CDN 一并处理。

---

## 1. 字体子集化集成（已接入）

**当前状态**：`subset-fonts.sh` 已跑过，产物已同步到 `public/fonts/`：

| 文件 | 大小 |
|---|---|
| `public/fonts/NotoSerifSC-Regular.woff2` | 100 KB |
| `public/fonts/NotoSerifSC-Bold.woff2` | 103 KB |
| `public/fonts/NotoSerifSC-Black.woff2` | 102 KB |
| **合计** | **312 KB**（原 36 MB，~117× 压缩） |

### 部署 CDN 时执行：

#### Step 1 · 配置 CDN 长缓存

Cloudflare 控制台 → 域名 → **Caching** → **Page Rules** 加一条：

- URL: `shanhaiji.ai/fonts/*`
- Cache Level: **Cache Everything**
- Edge Cache TTL: **1 year**
- Browser Cache TTL: **1 year**

字体文件不会频繁变动，长缓存安全。

#### Step 2 · 部署验证

DevTools → Network 检查：
- [ ] `/fonts/NotoSerifSC-*.woff2` 三个文件都返回 200
- [ ] Response headers 包含 `cache-control: max-age=31536000` 之类
- [ ] 关闭网络刷新后中文标题字体仍正确（说明缓存生效）
- [ ] 屏蔽 `fonts.loli.net` 测试（如 hosts 屏蔽）—— 标题部分仍是 Noto Serif SC，body 部分回退到系统字体

---

## 2. 字体内容更新工作流（持续维护）

⚠️ **重要**：之后**任何**对页面中文文案的改动 —— 新文案、新 IP 名、新业务线 —— 都必须重跑：

```bash
./subset-fonts.sh
cp fonts/*.woff2 public/fonts/
git add fonts/NotoSerifSC-*.woff2 public/fonts/NotoSerifSC-*.woff2
```

否则新增字符在线上会回退到系统宋体，视觉不一致。

**长期方案**：加一个 git pre-push hook，检测 `app/` 或 `components/` 中文文案改动时自动重跑 subset-fonts.sh，避免遗忘。

---

## 3. 其他独立的部署前占位项（与 CDN 无关，按需处理）

| 项 | 当前状态 | 说明 |
|---|---|---|
| 微信二维码图片 | SVG 占位 | 替换 `<div class="wechat-qr">` 里的 SVG 为 `<img src="...">` |
| WeChat ID | `shanhaiji_ai` 占位 | 改成真账号 |
| Footer 社交链接 | 4 个 `href="#"` | 微信公号 / 微博 / 抖音 / 小红书 |
| og:image | 缺失 | 生成 1200×630 主视觉 PNG，在 `app/layout.tsx` metadata 中接入 |
| JSON-LD logo | 未填 | 域名上线后给 `app/layout.tsx` 的 Organization schema 加 `logo` 字段 |
| `shanhaiji.ai` 域名 | 未注册 | Cloudflare Registrar / Namecheap |
