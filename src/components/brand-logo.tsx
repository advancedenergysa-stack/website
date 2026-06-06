import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "default" | "white";
};

export function BrandLogo({
  className,
  priority = false,
  variant = "default",
}: BrandLogoProps) {
  const src = variant === "white" ? "/aecc/logo-white.png" : "/aecc/logo.png";

  return (
    <Image
      src={src}
      alt="Advanced Energy"
      width={300}
      height={84}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
    />
  );
}
