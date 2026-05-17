import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  Building,
  Building2,
  Cable,
  Calendar,
  Droplets,
  Factory,
  Globe,
  Handshake,
  HardHat,
  Layers,
  MapPin,
  Mountain,
  Route,
  Scale,
  Shield,
  ShieldCheck,
  Sparkles,
  Sun,
  TrainFront,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export const iconMap = {
  award: Award,
  zap: Zap,
  building2: Building2,
  calendar: Calendar,
  route: Route,
  droplets: Droplets,
  building: Building,
  layers: Layers,
  train: TrainFront,
  mountain: Mountain,
  hardHat: HardHat,
  sun: Sun,
  wrench: Wrench,
  tower: Zap,
  factory: Factory,
  cable: Cable,
  mapPin: MapPin,
  scale: Scale,
  shieldCheck: ShieldCheck,
  shield: Shield,
  users: Users,
  globe: Globe,
  badgeCheck: BadgeCheck,
  sparkles: Sparkles,
  handshake: Handshake,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

export function getIcon(name: IconName): LucideIcon {
  return iconMap[name];
}
