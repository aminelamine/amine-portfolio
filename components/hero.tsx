"use client";

import { ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { HERO } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100svh-3.5rem)] flex-col items-center justify-center"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Je ne fais pas de l&apos;IA.
          <br />
          Je pense avec.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
          {HERO.subtitle}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="#contact"
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className: "w-full sm:w-auto",
            })}
          >
            Me contacter
          </a>
          <a
            href="https://obsolet.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "w-full gap-1.5 sm:w-auto",
            })}
          >
            Lire Obsolet
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
