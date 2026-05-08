import Link from "next/link";

export function BrandMark() {
  return (
    <Link href="/" className="brand-mark" aria-label="山海集首页">
      山海集 <span className="brand-dot" aria-hidden="true" />
      <span>SHANHAIJI.AI</span>
    </Link>
  );
}
