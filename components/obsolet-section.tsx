"use client";

import { ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { OBSOLET_SECTION } from "@/lib/data";

export function ObsoletSection() {
  return (
    <>
      <Separator />
      <section className="py-16 md:py-24">
        <h2 className="text-xl font-semibold">{OBSOLET_SECTION.title}</h2>
        <div className="mt-6 max-w-3xl space-y-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            {OBSOLET_SECTION.description}
          </p>
          {OBSOLET_SECTION.recentArticles.length > 0 && (
            <ul className="space-y-2">
              {OBSOLET_SECTION.recentArticles.map((article) => (
                <li key={article.href}>
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {article.title}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          )}
          <a
            href="https://obsolet.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "outline",
              className: "w-full gap-1.5 sm:w-auto",
            })}
          >
            {OBSOLET_SECTION.ctaText}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
