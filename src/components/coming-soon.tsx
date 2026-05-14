import { Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CONTACT_EMAIL = "advancedenergysa@gmail.com";

export function ComingSoon() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-black px-6 py-16 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative z-10 flex max-w-lg flex-col items-center text-center">
        <h1 className="coming-rise font-sans text-4xl font-semibold tracking-tight sm:text-5xl">
          Advanced Energy SA
        </h1>
        <div className="coming-rise coming-rise-delay-1 mt-8 h-px w-24 overflow-hidden bg-neutral-800">
          <div className="coming-scan-line h-full w-1/2 bg-white/90" />
        </div>
        <p className="coming-rise coming-rise-delay-2 mt-8 max-w-md text-base leading-relaxed text-neutral-300 sm:text-lg">
          We&apos;re preparing something new. Check back soon.
        </p>
        <div className="coming-rise coming-rise-delay-3 mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <span className="text-sm font-medium tracking-wide text-neutral-200">
            Coming soon
            <span className="inline-flex gap-1 pl-1 align-middle">
              <span className="coming-dot inline-block size-1 rounded-full bg-white" />
              <span className="coming-dot coming-dot-delay-1 inline-block size-1 rounded-full bg-white" />
              <span className="coming-dot coming-dot-delay-2 inline-block size-1 rounded-full bg-white" />
            </span>
          </span>
        </div>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "coming-rise coming-rise-delay-4 mt-10 border-white/25 bg-transparent text-white hover:bg-white hover:text-black"
          )}
        >
          <Mail data-icon="inline-start" />
          Contact us
        </a>
        <p className="mt-4 text-xs text-neutral-500">{CONTACT_EMAIL}</p>
      </div>
    </main>
  );
}
