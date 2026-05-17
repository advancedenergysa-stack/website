"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { BrandLogo } from "@/components/brand-logo";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { brand, navLinks } from "@/lib/aecc-content";
import { getIcon } from "@/lib/aecc-icons";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/95 backdrop-blur-md">
      <div className="h-1 w-full bg-aecc-green" />
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex shrink-0 items-center">
          <BrandLogo
            className="h-9 w-auto max-w-[200px] sm:h-10 sm:max-w-[240px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const Icon = getIcon(link.icon);
            return (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-aecc-green"
              >
                <Icon className="size-4 shrink-0 opacity-70" aria-hidden />
                {link.label}
              </a>
            );
          })}
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
            render={
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs bg-white">
            <SheetHeader>
              <SheetTitle className="text-left text-aecc-green">
                {brand.name}
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-4">
              {navLinks.map((link) => {
                const Icon = getIcon(link.icon);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 text-base font-medium text-foreground/90 hover:text-aecc-green"
                  >
                    <Icon className="size-5 shrink-0 opacity-70" aria-hidden />
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants(),
                  "mt-4 bg-aecc-green text-white hover:bg-aecc-green-dark"
                )}
              >
                Get in touch
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
