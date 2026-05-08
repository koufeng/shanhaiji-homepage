import type { Metadata } from "next";

import { ContactSection, PageHero } from "@/components/site/site-sections";

export const metadata: Metadata = {
  title: "联系我们",
  description: "联系山海集 SHANHAIJI.AI，洽谈 IP 联名、商务合作、投资、招聘与媒体报道。"
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title={
          <>
            共创<span className="gold">山海</span>新纪元
          </>
        }
        desc="欢迎就 IP 联名、商务合作、投资洽谈、招聘与媒体报道联系山海集。"
      />
      <ContactSection />
    </>
  );
}
