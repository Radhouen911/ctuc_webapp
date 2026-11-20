import type { Metadata } from "next";
import { EVENT } from "@/data/event";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

// Page-level `openGraph` replaces the root one wholesale, and Next's file-based
// opengraph-image is not re-attached, so the image must be set explicitly here.
// Without it, scrapers (Instagram, etc.) fall back to a random image on the page.
const OG_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: `${EVENT.fullName}`,
};

export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  const fullTitle = path === "/" ? `${EVENT.shortName} — ${EVENT.name}` : `${title} — ${EVENT.shortName}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: EVENT.fullName,
      title: fullTitle,
      description,
      url: path,
      locale: "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
