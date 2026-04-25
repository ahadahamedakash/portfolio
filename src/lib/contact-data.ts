import { Mail, MessageCircle, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

/**
 * Contact Information Data
 *
 * All contact methods and social media links
 */
export const contactItems = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "ahadahamedakash@gmail.com",
    action: "copy",
    href: "",
  },
  {
    icon: GithubIcon,
    label: "GITHUB",
    value: "github.com/ahadahamedakash",
    action: "link",
    href: "https://github.com/ahadahamedakash",
  },
  {
    icon: LinkedinIcon,
    label: "LINKEDIN",
    value: "linkedin.com/in/ahadahamed",
    action: "link",
    href: "https://linkedin.com/in/ahadahamed",
  },
  {
    icon: MessageCircle,
    label: "WHATSAPP",
    value: "+8801636428995",
    action: "link",
    href: "https://wa.me/8801636428995",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Narayanganj, Bangladesh",
    action: "none",
    href: "",
  },
];

/**
 * Availability badges shown in contact section
 */
export const availabilityBadges = [
  {
    color: "#6B8C6B",
    label: "Available for full-time",
  },
  {
    color: "#B5A06A",
    label: "Open to freelance",
  },
  {
    color: "#C8845A",
    label: "Remote worldwide",
  },
];
