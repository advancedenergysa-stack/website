import { brand } from "@/lib/aecc-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-muted-foreground sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <p>
          © {new Date().getFullYear()} {brand.fullName}. {brand.tagline}.
        </p>
        <p className="text-foreground/70">
          <a
            href={`mailto:${brand.email}`}
            className="hover:text-aecc-green"
          >
            {brand.email}
          </a>
          {" · "}
          <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:text-aecc-green">
            {brand.phone}
          </a>
        </p>
      </div>
    </footer>
  );
}
