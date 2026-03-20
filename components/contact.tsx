"use client";

import { ExternalLink, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT, FOOTER_LINKS } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight">{CONTACT.title}</h2>
      <div className="mt-8 max-w-3xl space-y-6">
        <p className="text-base leading-relaxed text-muted-foreground">
          {CONTACT.description}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={`mailto:${CONTACT.email}`}
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className: "w-full gap-2 sm:w-auto",
            })}
          >
            <Mail className="h-4 w-4" />
            {CONTACT.ctaText}
          </a>
        </div>
        <p className="text-sm text-muted-foreground">{CONTACT.email}</p>
        <nav className="flex items-center gap-4">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <ExternalLink className="h-3 w-3" />
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
