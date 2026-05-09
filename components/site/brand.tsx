import Link from "next/link";
import Image from "next/image";

export function BrandMark() {
  return (
    <Link href="/" className="brand-mark" aria-label="山海集首页">
      <Image src="/images/logo.png" alt="" width={220} height={39} priority aria-hidden="true" />
      <span className="sr-only">山海集 SHANHAIJI.AI</span>
    </Link>
  );
}
