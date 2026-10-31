import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { CtaLink } from "@/components/ui/cta-link";

export const metadata: Metadata = {
  title: "Page not found — CTUC",
  description: "This page does not exist on the CTUC website.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section aria-labelledby="nf-title" className="relative isolate flex min-h-[100dvh] items-center overflow-hidden pt-[var(--nav-h)]">
      <p
        aria-hidden
        className="pointer-events-none absolute -right-[0.06em] top-1/2 -z-10 -translate-y-1/2 select-none font-condensed text-[52vw] font-black leading-none tracking-[-0.04em] text-outline md:text-[38vw]"
      >
        404
      </p>
      <Container>
        <p className="annotation text-crimson">ERR 404 / Route not found</p>
        <h1 id="nf-title" className="mt-6 font-editorial text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
          Flag not found.
        </h1>
        <p className="mt-6 max-w-[40ch] leading-relaxed text-mute">
          This page doesn&rsquo;t exist, or it moved. No points for finding it.
        </p>
        <CtaLink href="/" size="lg" className="mt-10">
          Back to the homepage
        </CtaLink>
      </Container>
    </section>
  );
}
