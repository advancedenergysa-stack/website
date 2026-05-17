import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/aecc/logo.png"
      alt="Advanced Energy"
      width={320}
      height={120}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
    />
  );
}
