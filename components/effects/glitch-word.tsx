"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/** Adds `is-glitching` once shortly after mount. Skipped for reduced-motion users. */
function useGlitchOnMount<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = window.setTimeout(() => el.classList.add("is-glitching"), 450);
    const end = window.setTimeout(() => el.classList.remove("is-glitching"), 1250);
    return () => {
      window.clearTimeout(start);
      window.clearTimeout(end);
    };
  }, []);
  return ref;
}

/** Chromatic split once on load (and on hover via CSS). No continuous glitching. */
export function GlitchWord({ text, className }: { text: string; className?: string }) {
  const ref = useGlitchOnMount<HTMLSpanElement>();
  return (
    <span ref={ref} data-text={text} className={cn("glitch", className)}>
      {text}
    </span>
  );
}

type GlitchLogoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

/**
 * Same chromatic split as GlitchWord, for a transparent logo: the crimson and blue
 * layers are silhouettes of the image (CSS mask), offset by the shared keyframes.
 */
export function GlitchLogo({ src, alt, width, height, className }: GlitchLogoProps) {
  const ref = useGlitchOnMount<HTMLSpanElement>();
  return (
    <span
      ref={ref}
      className={cn("glitch-logo", className)}
      style={{ ["--glitch-src" as string]: `url(${src})` }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        preload
        quality={90}
        sizes="(min-width: 1024px) 34rem, 82vw"
        className="block h-full w-full object-contain"
      />
      <span aria-hidden className="glitch-logo-layer glitch-logo-a" />
      <span aria-hidden className="glitch-logo-layer glitch-logo-b" />
    </span>
  );
}
