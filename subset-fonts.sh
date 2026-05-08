#!/usr/bin/env bash
# 山海集 · Noto Serif SC 字体子集化脚本
# 从 index.html 提取实际使用的字符，生成轻量 woff2 子集
#
# 使用：
#   chmod +x subset-fonts.sh
#   ./subset-fonts.sh
#
# 产物：
#   fonts/NotoSerifSC-Regular.woff2
#   fonts/NotoSerifSC-Bold.woff2
#   fonts/NotoSerifSC-Black.woff2

set -e
cd "$(dirname "$0")"

echo "→ 检查依赖..."
command -v python3 >/dev/null || { echo "❌ 需要 python3"; exit 1; }
command -v curl >/dev/null    || { echo "❌ 需要 curl";    exit 1; }

echo "→ 安装 fonttools（如已安装会跳过）..."
python3 -m pip install --quiet --user fonttools brotli zopfli

mkdir -p fonts/source fonts

echo "→ 下载 Noto Serif SC 源字体（首次约 25MB，已存在则跳过）..."
BASE_URL="https://github.com/notofonts/noto-cjk/raw/main/Serif/SubsetOTF/SC"
for weight in Regular Bold Black; do
  if [ ! -f "fonts/source/NotoSerifSC-${weight}.otf" ]; then
    echo "  下载 NotoSerifSC-${weight}.otf..."
    curl -fL --progress-bar -o "fonts/source/NotoSerifSC-${weight}.otf" \
      "${BASE_URL}/NotoSerifSC-${weight}.otf"
  else
    echo "  已存在 NotoSerifSC-${weight}.otf"
  fi
done

echo "→ 从 index.html 提取实际用到的字符..."
python3 - <<'PYEOF'
import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 排除 <script> / <style> / 注释
html = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
html = re.sub(r'<style[^>]*>.*?</style>',   '', html, flags=re.DOTALL)
html = re.sub(r'<!--.*?-->',                '', html, flags=re.DOTALL)

# 剥掉所有 HTML 标签
text = re.sub(r'<[^>]+>', ' ', html)

# 解码常见 HTML 实体
for k, v in [('&nbsp;', ' '), ('&amp;', '&'), ('&lt;', '<'),
             ('&gt;', '>'), ('&quot;', '"'), ('&middot;', '·')]:
    text = text.replace(k, v)

# 加上一些可能出现在动态 / 邮件 subject 里的字符做兜底
extra = '【】·—·…0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
chars = sorted(set(text + extra))
chars = [c for c in chars if c == ' ' or c.isprintable()]

with open('fonts/chars.txt', 'w', encoding='utf-8') as f:
    f.write(''.join(chars))

# 中文字符数量
cn_count = sum(1 for c in chars if '一' <= c <= '鿿')
print(f"  共 {len(chars)} 个唯一字符（其中中文 {cn_count} 个）")
PYEOF

echo "→ 子集化字体..."
for weight in Regular Bold Black; do
  python3 -m fontTools.subset "fonts/source/NotoSerifSC-${weight}.otf" \
    --text-file=fonts/chars.txt \
    --output-file="fonts/NotoSerifSC-${weight}.woff2" \
    --flavor=woff2 \
    --no-hinting \
    --desubroutinize \
    --layout-features='*' \
    --no-recalc-bounds

  size=$(du -h "fonts/NotoSerifSC-${weight}.woff2" | awk '{print $1}')
  echo "  ✓ fonts/NotoSerifSC-${weight}.woff2 (${size})"
done

echo ""
echo "✅ 完成！"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo " 下一步：替换 index.html 中的字体加载方式"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. 把现在这一行："
echo ""
echo '   <link href="https://fonts.loli.net/css2?family=Noto+Serif+SC:wght@400;700;900&family=Outfit:..." rel="stylesheet">'
echo ""
echo "   改成（去掉 Noto Serif SC，保留 Outfit + Playfair Display）："
echo ""
echo '   <link href="https://fonts.loli.net/css2?family=Outfit:wght@300;400;600;700;800&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">'
echo ""
echo "2. 在 <style> 块开头插入："
echo ""
cat <<'CSS'
   @font-face {
     font-family: 'Noto Serif SC';
     font-style: normal;
     font-weight: 400;
     font-display: swap;
     src: url('/fonts/NotoSerifSC-Regular.woff2') format('woff2');
   }
   @font-face {
     font-family: 'Noto Serif SC';
     font-style: normal;
     font-weight: 700;
     font-display: swap;
     src: url('/fonts/NotoSerifSC-Bold.woff2') format('woff2');
   }
   @font-face {
     font-family: 'Noto Serif SC';
     font-style: normal;
     font-weight: 900;
     font-display: swap;
     src: url('/fonts/NotoSerifSC-Black.woff2') format('woff2');
   }
CSS
echo ""
echo "3. 部署时把 fonts/NotoSerifSC-*.woff2 三个文件一起上传"
echo "   （fonts/source/ 不需要上传，已在 .gitignore 中排除）"
