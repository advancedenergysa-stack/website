"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { BrandLogo } from "@/components/brand-logo";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { brand, navLinks } from "@/lib/aecc-content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl backdrop-saturate-150">
      <div className="h-1 w-full bg-aecc-green" />
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex shrink-0 items-center">
          <BrandLogo
            className="h-9 w-auto max-w-[200px] sm:h-10 sm:max-w-[240px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-aecc-green"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-aecc-green text-white hover:bg-aecc-green-dark"
            )}
          >
            Get in touch
          </a>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/50 bg-white/60 text-aecc-green shadow-sm backdrop-blur-lg transition-colors hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aecc-green/40 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" aria-hidden />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-[min(100vw-1rem,20rem)] flex-col gap-0 border-white/40 bg-white/50 p-0 shadow-2xl backdrop-blur-3xl backdrop-saturate-150 sm:max-w-xs"
          >
            <SheetHeader className="border-b border-white/40 bg-white/40 px-5 py-5 text-left backdrop-blur-2xl">
              <SheetTitle className="sr-only">{brand.fullName} menu</SheetTitle>
              <BrandLogo className="h-8 w-auto max-w-[180px]" />
              <p className="mt-2 text-xs text-muted-foreground">{brand.tagline}</p>
            </SheetHeader>

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto bg-white/20 px-3 py-4 backdrop-blur-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-base font-medium text-foreground/90 transition-colors hover:bg-aecc-green/10 hover:text-aecc-green active:bg-aecc-green/15"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <SheetFooter className="border-t border-white/40 bg-white/40 px-4 py-5 backdrop-blur-2xl">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-aecc-green text-sm font-medium text-white transition-colors hover:bg-aecc-green-dark"
              >
                Get in touch
              </a>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
