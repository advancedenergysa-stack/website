import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type IconBadgeProps = {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: { wrap: "size-9", icon: "size-4" },
  md: { wrap: "size-12", icon: "size-6" },
  lg: { wrap: "size-16", icon: "size-8" },
};

export function IconBadge({
  icon: Icon,
  className,
  iconClassName,
  size = "md",
}: IconBadgeProps) {
  const s = sizeClasses[size];
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl bg-aecc-green/10 text-aecc-green ring-1 ring-aecc-green/15",
        s.wrap,
        className
      )}
    >
      <Icon className={cn(s.icon, iconClassName)} aria-hidden />
    </span>
  );
}
