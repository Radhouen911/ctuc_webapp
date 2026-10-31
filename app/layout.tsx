import type { Metadata, Viewport } from "next";
import { Archivo, Geist, JetBrains_Mono } from "next/font/google";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { Backdrop } from "@/components/effects/backdrop";
import { SITE_URL } from "@/lib/constants";
import { EVENT } from "@/data/event";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const description = `${EVENT.fullName}. Tunisia's national university Capture The Flag competition, ${EVENT.dateLabel} at ${EVENT.venue.name}, ${EVENT.venue.city}.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${EVENT.shortName} — ${EVENT.name}`,
    template: `%s`,
  },
  description,
  applicationName: EVENT.shortName,
  openGraph: {
    type: "website",
    siteName: EVENT.fullName,
    title: `${EVENT.shortName} — ${EVENT.name}`,
    description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#05060D",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${geist.variable} ${jetbrains.variable}`}>
      <body className="flex min-h-[100dvh] flex-col overflow-x-clip">
        <Backdrop />
        <SiteNav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
