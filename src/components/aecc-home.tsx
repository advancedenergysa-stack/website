import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Handshake,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Send,
  Shield,
  Target,
} from "lucide-react";
import Image from "next/image";

import { IconBadge } from "@/components/icon-badge";
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
  sectionIcons,
  services,
  stats,
  vision,
} from "@/lib/aecc-content";
import { getIcon, type IconName } from "@/lib/aecc-icons";
import { cn } from "@/lib/utils";

export function AeccHome() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-[520px] overflow-hidden border-b border-border bg-white sm:min-h-[580px] lg:min-h-[640px]"
      >
        <Image
          src="/aecc/hero.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-white/25 backdrop-blur-[1px]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-white from-35% via-white/90 via-55% to-white/20 to-75% to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent lg:from-white/40"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
            <div className="rounded-2xl border border-white/70 bg-white/75 p-6 shadow-lg shadow-black/5 backdrop-blur-md sm:p-8">
            <Badge
              variant="outline"
              className="mb-4 gap-1.5 border-aecc-green/30 bg-white/80 text-aecc-green backdrop-blur-sm"
            >
              <Target className="size-3.5" aria-hidden />
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
                  "gap-2 bg-aecc-green text-white hover:bg-aecc-green-dark"
                )}
              >
                Our services
                <ArrowRight className="size-4" aria-hidden />
              </a>
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "gap-2 border-white/80 bg-white/60 backdrop-blur-sm hover:bg-white"
                )}
              >
                <Mail className="size-4" aria-hidden />
                Contact us
              </a>
            </div>
          </div>
          <div className="relative min-h-[240px] overflow-hidden rounded-2xl border border-white/60 shadow-xl shadow-black/10 sm:min-h-[300px] lg:min-h-[360px]">
              <Image
                src="/aecc/hero.png"
                alt="AECC energy infrastructure — solar, substation, and transmission"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
            {stats.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center rounded-xl border border-white/70 bg-white/80 px-3 py-4 text-center shadow-md shadow-black/5 backdrop-blur-md"
                >
                  <IconBadge icon={Icon} size="sm" className="mb-2" />
                  <p className="text-lg font-bold text-aecc-green">{item.value}</p>
                  <p className="mt-1 text-[10px] leading-tight text-muted-foreground sm:text-xs">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="overview" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="01"
            title="Company Overview"
            description="Innovative and sustainable energy solutions for the Kingdom."
            icon={sectionIcons.overview}
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
            <p className="whitespace-pre-line text-base leading-relaxed text-muted-foreground">
              {overview}
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => {
                const Icon = getIcon(item.icon);
                return (
                  <Card
                    key={item.label}
                    className="border-aecc-green/15 bg-aecc-green/5 shadow-none"
                  >
                    <CardHeader className="pb-2">
                      <IconBadge icon={Icon} size="sm" />
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
            {mascoStats.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center rounded-lg border border-border bg-muted/30 px-3 py-4 text-center"
                >
                  <IconBadge icon={Icon} size="sm" className="mb-2" />
                  <p className="text-xl font-bold text-aecc-green sm:text-2xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="02"
            title="Scope of Services"
            description="Construction, renewables, and engineering solutions backed by experienced professionals."
            icon={sectionIcons.services}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = getIcon(service.icon);
              return (
                <Card
                  key={service.id}
                  className="border-border bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <CardHeader className="space-y-4">
                    <IconBadge icon={Icon} size="lg" />
                    <CardTitle className="text-xl text-aecc-green">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <CheckCircle2
                            className="mt-0.5 size-4 shrink-0 text-aecc-green"
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="03"
            title="Completed Projects"
            description="Representative EPC engagements delivered for leading energy clients."
            icon={sectionIcons.projects}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = getIcon(project.icon);
              return (
                <Card
                  key={project.name}
                  className="group overflow-hidden border-border bg-white p-0 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
                    />
                    <div className="absolute right-3 top-3">
                      <IconBadge
                        icon={Icon}
                        size="sm"
                        className="border-white/30 bg-white/90 shadow-sm"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <CardTitle className="text-base leading-snug text-white">
                        {project.name}
                      </CardTitle>
                    </div>
                  </div>
                  <CardHeader className="space-y-2 pb-2 pt-4">
                    <CardDescription className="space-y-2 text-xs">
                      <span className="flex items-center gap-1.5 font-medium text-aecc-green">
                        <Building2 className="size-3.5" aria-hidden />
                        {project.client}
                      </span>
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <MapPin className="size-3.5 shrink-0" aria-hidden />
                        {project.site}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.scope}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="values" className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="04"
            title="Mission, Vision & Values"
            description="Core values that shape our actions and inspire us to raise the bar in the energy sector."
            icon={sectionIcons.values}
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Card className="border-aecc-green/20 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-aecc-green">
                  <IconBadge icon={Leaf} size="sm" />
                  Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">{mission}</p>
              </CardContent>
            </Card>
            <Card className="border-aecc-green/20 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-aecc-green">
                  <IconBadge icon={Shield} size="sm" />
                  Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">{vision}</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => {
              const Icon = getIcon(value.icon);
              return (
                <Card key={value.title} className="bg-white shadow-sm">
                  <CardHeader className="space-y-3">
                    <IconBadge icon={Icon} size="sm" />
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-4 flex justify-center">
            <IconBadge icon={getIcon(sectionIcons.clients)} size="lg" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-aecc-green sm:text-3xl">
            Commitment to Client Satisfaction
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {commitment}
          </p>
          <div className="mt-10">
            <p className="mb-6 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-aecc-green">
              <Handshake className="size-4" aria-hidden />
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
            icon={sectionIcons.contact}
          />
          <Card className="mx-auto mt-10 max-w-xl border-aecc-green/20 bg-aecc-green/5">
            <CardContent className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-4">
                <a
                  href={`mailto:${brand.email}`}
                  className="flex items-center gap-3 text-foreground hover:text-aecc-green"
                >
                  <IconBadge icon={Mail} size="sm" />
                  <span>{brand.email}</span>
                </a>
                <a
                  href={`tel:${brand.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-foreground hover:text-aecc-green"
                >
                  <IconBadge icon={Phone} size="sm" />
                  <span>{brand.phone}</span>
                </a>
              </div>
              <a
                href={`mailto:${brand.email}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "shrink-0 gap-2 bg-aecc-green text-white hover:bg-aecc-green-dark"
                )}
              >
                <Send className="size-4" aria-hidden />
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
  icon,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: IconName;
}) {
  const Icon = getIcon(icon);
  return (
    <div className="max-w-2xl">
      <div className="flex items-start gap-4">
        <IconBadge icon={Icon} size="md" className="mt-1 shrink-0" />
        <div>
          <p className="text-sm font-semibold tracking-widest text-aecc-green">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

