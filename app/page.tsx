import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Categories } from "@/components/sections/categories";
import { Schedule } from "@/components/sections/schedule";
import { Prizes } from "@/components/sections/prizes";
import { Venue } from "@/components/sections/venue";
import { Clubs } from "@/components/sections/clubs";
import { SponsorsPreview } from "@/components/sections/sponsors-preview";
import { FinalCta } from "@/components/sections/final-cta";
import { pageMetadata } from "@/lib/metadata";
import { EVENT } from "@/data/event";

export const metadata = pageMetadata({
  title: "Home",
  path: "/",
  description: `Tunisia's national university Capture The Flag championship. ${EVENT.dateLabel}, ${EVENT.venue.name}, ${EVENT.venue.city}. Beginner and Advanced Jeopardy CTFs for students: web, pwn, reverse engineering, cryptography, forensics, OSINT, hardware and more.`,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Categories />
      <Schedule />
      <Prizes />
      <Venue />
      <Clubs />
      <SponsorsPreview />
      <FinalCta />
    </>
  );
}
