"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navItems } from "@/components/site/content";
import { BrandMark } from "@/components/site/brand";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveHash("");
      return;
    }

    const sectionIds = [...navItems.map((item) => item.hash.slice(1)), "contact"];
    const updateActiveSection = () => {
      const current = sectionIds.reduce(
        (active, id) => {
          const section = document.getElementById(id);
          if (!section) return active;

          const distance = Math.abs(section.getBoundingClientRect().top - 92);
          return distance < active.distance ? { hash: `#${id}`, distance } : active;
        },
        { hash: "", distance: Number.POSITIVE_INFINITY }
      );

      if (window.scrollY < 180) {
        setActiveHash("");
      } else {
        setActiveHash(current.hash);
      }
    };

    updateActiveSection();
    window.setTimeout(updateActiveSection, 0);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [pathname]);

  const buildHref = (hash: string) => (pathname === "/" ? hash : `/${hash}`);
  const handleAnchorClick = (hash: string) => {
    setActiveHash(hash);
    setOpen(false);
  };

  return (
    <nav className="site-nav">
      <BrandMark />
      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? "收起菜单" : "展开菜单"}
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      <div id="site-navigation" className={`nav-links ${open ? "open" : ""}`}>
        {navItems.map((item) => (
          <Link
            key={item.hash}
            href={buildHref(item.hash)}
            className={activeHash === item.hash ? "active" : undefined}
            aria-current={activeHash === item.hash ? "true" : undefined}
            onClick={() => handleAnchorClick(item.hash)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href={buildHref("#contact")}
          className={`nav-cta ${activeHash === "#contact" ? "active" : ""}`}
          aria-current={activeHash === "#contact" ? "true" : undefined}
          onClick={() => handleAnchorClick("#contact")}
        >
          联系我们
        </Link>
      </div>
    </nav>
  );
}
