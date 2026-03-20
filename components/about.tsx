import { ExternalLink } from "lucide-react";
import { ABOUT } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight">{ABOUT.title}</h2>
      <div className="mt-8 max-w-3xl space-y-6">
        {ABOUT.paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className="text-base leading-relaxed text-muted-foreground"
          >
            {paragraph}
          </p>
        ))}
        <a
          href="https://obsolet.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {ABOUT.ctaText}
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
