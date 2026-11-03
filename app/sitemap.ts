import type { MetadataRoute } from "next";
import { RULES_PUBLISHED, SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/register", priority: 0.9 },
  { path: "/sponsors", priority: 0.7 },
  { path: "/contact", priority: 0.5 },
  ...(RULES_PUBLISHED ? [{ path: "/rules", priority: 0.8 }] : []),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified,
    changeFrequency: "weekly",
    priority,
  }));
}
