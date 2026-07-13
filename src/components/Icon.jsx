import {
  Compass,
  FileText,
  Plane,
  Hotel,
  ShieldCheck,
  GraduationCap,
  Palmtree,
  Briefcase,
  Car,
  FolderOpen,
  Scale,
  TrendingUp,
  Handshake,
  Zap,
  Search,
  Star,
  Globe2,
  Landmark,
} from "lucide-react";

// Maps the icon-key strings used in data/content.js to real lucide-react
// components, so content stays plain data while rendering stays a proper icon.
const ICON_MAP = {
  compass: Compass,
  "file-text": FileText,
  plane: Plane,
  hotel: Hotel,
  "shield-check": ShieldCheck,
  "graduation-cap": GraduationCap,
  palmtree: Palmtree,
  briefcase: Briefcase,
  car: Car,
  "folder-open": FolderOpen,
  scale: Scale,
  "trending-up": TrendingUp,
  handshake: Handshake,
  zap: Zap,
  search: Search,
  star: Star,
  globe: Globe2,
  landmark: Landmark,
};

// size: pixel size passed straight to the lucide icon (defaults to 22, matches
// the emoji font-size these icons replaced)
export default function Icon({ name, size = 22, ...props }) {
  const Component = ICON_MAP[name];
  if (!Component) return null;
  return <Component size={size} strokeWidth={1.8} {...props} />;
}
