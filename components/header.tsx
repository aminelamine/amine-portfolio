"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SITE, NAV_ITEMS } from "@/lib/data";
import { MobileNav } from "@/components/mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-14 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-6 md:px-8">
        <Link href="/" className="text-base font-bold tracking-tight">
          {SITE.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "ghost", size: "sm", className: "gap-1.5" })}
              >
                {item.label}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        {/* Mobile nav */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
