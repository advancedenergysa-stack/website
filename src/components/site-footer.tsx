import { Mail, Phone } from "lucide-react";

import { brand } from "@/lib/aecc-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-muted-foreground sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <p>
          © {new Date().getFullYear()} {brand.fullName}. {brand.tagline}.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <a
            href={`mailto:${brand.email}`}
            className="inline-flex items-center justify-center gap-1.5 text-foreground/70 hover:text-aecc-green sm:justify-start"
          >
            <Mail className="size-3.5" aria-hidden />
            {brand.email}
          </a>
          <a
            href={`tel:${brand.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-1.5 text-foreground/70 hover:text-aecc-green sm:justify-start"
          >
            <Phone className="size-3.5" aria-hidden />
            {brand.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
