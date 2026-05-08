#!/usr/bin/env bash
# Next 静态导出构建脚本
# Cloudflare Pages 配置：
#   Build command:           bash build.sh
#   Build output directory:  dist

set -e
cd "$(dirname "$0")"

echo "→ 清理旧产物..."
rm -rf dist out

echo "→ 执行 Next 静态构建..."
npm run build

echo "→ 复制导出产物到 dist/..."
cp -R out dist

echo ""
echo "✅ 构建完成 → dist/"
ls -la dist/
