"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/95 backdrop-blur-md">
      <div className="h-1 w-full bg-aecc-green" />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3">
          <Image
            src="/aecc/page-01.png"
            alt={brand.fullName}
            width={140}
            height={44}
            className="h-10 w-auto object-contain object-left"
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
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-foreground/90 hover:text-aecc-green"
                >
                  {link.label}
                </a>
              ))}
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
