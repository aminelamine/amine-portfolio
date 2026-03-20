import { ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SITE, FOOTER_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:justify-between md:px-8">
        <p>&copy; 2026 {SITE.name}</p>
        <nav className="flex items-center gap-4">
          {FOOTER_LINKS.map((link, i) => (
            <span key={link.label} className="flex items-center gap-4">
              {i > 0 && (
                <Separator orientation="vertical" className="h-4" />
              )}
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 transition-colors hover:text-foreground"
              >
                {link.label}
                <ExternalLink className="h-3 w-3" />
              </a>
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
