import {
  Award,
  Building2,
  Leaf,
  Mail,
  Phone,
  Shield,
  Zap,
} from "lucide-react";
import Image from "next/image";

import { BrandLogo } from "@/components/brand-logo";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  brand,
  commitment,
  coreValues,
  keyClients,
  mascoStats,
  mission,
  overview,
  projects,
  services,
  stats,
  vision,
} from "@/lib/aecc-content";
import { cn } from "@/lib/utils";

const statIcons = [Award, Zap, Building2];

export function AeccHome() {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-white"
      >
        <div className="absolute inset-0">
          <Image
            src="/aecc/asset-p04-02.jpeg"
            alt=""
            fill
            className="object-cover object-right"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/20" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-32">
          <div className="max-w-xl">
            <Badge
              variant="outline"
              className="mb-4 border-aecc-green/30 bg-aecc-green/5 text-aecc-green"
            >
              {brand.tagline}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-aecc-green sm:text-5xl lg:text-6xl">
              {brand.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-foreground/80">
              {brand.fullName}
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Leading force in the construction and management of energy projects
              across the Kingdom of Saudi Arabia since 2008.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-aecc-green text-white hover:bg-aecc-green-dark"
                )}
              >
                Our services
              </a>
              <a
                href="#contact"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                Contact us
              </a>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <BrandLogo className="max-h-36 w-full max-w-sm sm:max-h-44 lg:max-w-md" priority />
          </div>
        </div>
      </section>

      <section id="overview" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="01"
            title="Company Overview"
            description="Innovative and sustainable energy solutions for the Kingdom."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
            <p className="whitespace-pre-line text-base leading-relaxed text-muted-foreground">
              {overview}
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item, i) => {
                const Icon = statIcons[i] ?? Zap;
                return (
                  <Card
                    key={item.label}
                    className="border-aecc-green/15 bg-aecc-green/5 shadow-none"
                  >
                    <CardHeader className="pb-2">
                      <Icon className="size-5 text-aecc-green" />
                      <CardTitle className="text-3xl font-bold text-aecc-green">
                        {item.value}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs leading-snug text-muted-foreground">
                        {item.label}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          <Separator className="my-12" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {mascoStats.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border bg-muted/30 px-4 py-3 text-center"
              >
                <p className="text-xl font-bold text-aecc-green sm:text-2xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="02"
            title="Scope of Services"
            description="Construction, renewables, and engineering solutions backed by experienced professionals."
          />
          <div className="mt-12 space-y-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="overflow-hidden border-border bg-white shadow-sm"
              >
                <div className="grid lg:grid-cols-[1fr_280px]">
                  <CardHeader className="p-6 sm:p-8">
                    <CardTitle className="text-2xl text-aecc-green">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="mt-3 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <ul className="mt-4 space-y-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-foreground/80"
                        >
                          <span className="size-1.5 shrink-0 rounded-full bg-aecc-green" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardHeader>
                  <div className="relative min-h-[200px] lg:min-h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 280px"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="03"
            title="Completed Projects"
            description="Representative EPC engagements delivered for leading energy clients."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.name}
                className="overflow-hidden border-border bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-44 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg leading-snug">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="space-y-1 text-xs">
                    <span className="block font-medium text-aecc-green">
                      {project.client}
                    </span>
                    <span>{project.site}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.scope}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="04"
            title="Mission, Vision & Values"
            description="Core values that shape our actions and inspire us to raise the bar in the energy sector."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Card className="border-aecc-green/20 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-aecc-green">
                  <Leaf className="size-5" />
                  Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">{mission}</p>
              </CardContent>
            </Card>
            <Card className="border-aecc-green/20 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-aecc-green">
                  <Shield className="size-5" />
                  Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">{vision}</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <Card key={value.title} className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base text-aecc-green">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-aecc-green sm:text-3xl">
            Commitment to Client Satisfaction
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {commitment}
          </p>
          <div className="mt-10">
            <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-aecc-green">
              Key clients
            </p>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:gap-8">
              {keyClients.map((client) => (
                <div
                  key={client.name}
                  className="flex h-24 items-center justify-center rounded-xl border border-border bg-white px-4 py-3"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={200}
                    height={64}
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="05"
            title="Contact Information"
            description="Reach our team to discuss your next energy project."
          />
          <Card className="mx-auto mt-10 max-w-xl border-aecc-green/20 bg-aecc-green/5">
            <CardContent className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-4">
                <a
                  href={`mailto:${brand.email}`}
                  className="flex items-center gap-3 text-foreground hover:text-aecc-green"
                >
                  <Mail className="size-5 text-aecc-green" />
                  <span>{brand.email}</span>
                </a>
                <a
                  href={`tel:${brand.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-foreground hover:text-aecc-green"
                >
                  <Phone className="size-5 text-aecc-green" />
                  <span>{brand.phone}</span>
                </a>
              </div>
              <a
                href={`mailto:${brand.email}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "shrink-0 bg-aecc-green text-white hover:bg-aecc-green-dark"
                )}
              >
                Send a message
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold tracking-widest text-aecc-green">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base text-muted-foreground">{description}</p>
    </div>
  );
}
