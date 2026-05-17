import {
  ArrowRight,
  Calendar,
  Mail,
  MapPin,
  Phone,
  Zap,
} from "lucide-react";
import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import {
  brand,
  keyClients,
  navLinks,
  projects,
  services,
  stats,
} from "@/lib/aecc-content";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
      {children}
    </p>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm text-white/85 transition-colors hover:text-white"
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  const serviceHighlights = services.flatMap((group) => group.items);

  return (
    <footer className="bg-aecc-green text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="border-b border-white/10 bg-aecc-green-dark/40">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-white/10 px-4 sm:px-6 lg:px-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-1 py-6 text-center sm:flex-row sm:justify-center sm:gap-3"
            >
              <p className="text-2xl font-bold tabular-nums sm:text-3xl">
                {item.value}
              </p>
              <p className="max-w-[9rem] text-[10px] leading-tight text-white/70 sm:max-w-none sm:text-left sm:text-xs">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="#home" className="inline-block rounded-lg bg-white/95 p-3">
              <BrandLogo className="h-9 w-auto max-w-[200px] sm:h-10" />
            </Link>
            <p className="mt-4 text-lg font-semibold text-white">
              {brand.fullName}
            </p>
            <p className="mt-1 text-sm text-white/70">{brand.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              {brand.footerBlurb}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-white/60">
              Part of MASCO Group — civil, architecture, environment, energy,
              mining, and building materials across the Saudi market.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90">
                <Calendar className="size-3.5" aria-hidden />
                Est. {brand.established}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90">
                <MapPin className="size-3.5" aria-hidden />
                {brand.location}
              </span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3">
            <div>
              <FooterHeading>Explore</FooterHeading>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FooterHeading>Capabilities</FooterHeading>
              <ul className="mt-4 space-y-2.5">
                {serviceHighlights.map((item) => (
                  <li key={item}>
                    <FooterLink href="#services">{item}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <FooterHeading>Projects</FooterHeading>
              <ul className="mt-4 space-y-2.5">
                {projects.map((project) => (
                  <li key={project.name}>
                    <FooterLink href="#projects">{project.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <FooterHeading>Contact</FooterHeading>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="group flex items-start gap-3 text-sm text-white/85 transition-colors hover:text-white"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                    <Mail className="size-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs text-white/55">Email</span>
                    {brand.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${brand.phone.replace(/\s/g, "")}`}
                  className="group flex items-start gap-3 text-sm text-white/85 transition-colors hover:text-white"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                    <Phone className="size-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs text-white/55">Phone</span>
                    {brand.phone}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/85">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                  <MapPin className="size-4" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs text-white/55">Region</span>
                  {brand.location}
                </span>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex h-9 w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white px-4 text-sm font-medium text-aecc-green shadow-sm transition-colors hover:border-white hover:bg-white hover:text-aecc-green-dark sm:w-auto"
            >
              Get in touch
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
          <FooterHeading>Trusted by leading organizations</FooterHeading>
          <ul className="mt-4 flex flex-wrap gap-2">
            {keyClients.map((client) => (
              <li
                key={client.name}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/85"
              >
                {client.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-aecc-green-dark">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-center text-xs text-white/65 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>
            © {new Date().getFullYear()} {brand.fullName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <Zap className="size-3.5 text-white/50" aria-hidden />
            {brand.tagline} · Power EPC across the Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
}
