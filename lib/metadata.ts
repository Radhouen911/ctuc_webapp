import type { Metadata } from "next";
import { EVENT } from "@/data/event";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
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
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
