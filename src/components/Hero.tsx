import { useEffect, useState } from "react";
import { siteConfig, githubProfileUrl } from "../config";
import { HandIcon } from "./icons";

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect: type → pause → delete → next role
  useEffect(() => {
    const word = siteConfig.roles[wordIndex % siteConfig.roles.length];
    let delay = deleting ? 35 : 80;

    if (!deleting && length === word.length) delay = 1900; // hold full word
    if (deleting && length === 0) delay = 300; // brief beat before next word

    const timer = setTimeout(() => {
      if (!deleting) {
        if (length < word.length) setLength(length + 1);
        else setDeleting(true);
      } else {
        if (length > 0) setLength(length - 1);
        else {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % siteConfig.roles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [length, deleting, wordIndex]);

  const currentWord = siteConfig.roles[wordIndex % siteConfig.roles.length];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      {/* Backdrop: warm grid + bronze/gold glow orbs */}
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/20 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-bronze/25 blur-[120px] animate-[float_9s_ease-in-out_infinite]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-skin/20 blur-[120px] animate-[float_11s_ease-in-out_infinite_reverse]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Availability badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          Available for new projects
        </div>

        <p className="flex items-center justify-center gap-2 text-sm text-gold md:text-base">
          <HandIcon className="h-5 w-5" />
          Hey, I'm
        </p>

        <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="bg-gradient-to-r from-gold via-ivory to-skin bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </h1>

        {/* Typed role line */}
        <p className="mt-5 flex h-8 items-center justify-center text-base text-skin sm:text-lg md:text-xl">
          <span className="text-gold">&gt;</span>
          <span className="ml-2 inline-block text-left text-ivory">
            {currentWord.slice(0, length)}
          </span>
          <span className="ml-0.5 inline-block h-6 w-[2px] animate-[blink_1s_step-end_infinite] bg-gold" />
        </p>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-skin md:text-lg">
          {siteConfig.description}
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#github"
            className="group rounded-xl bg-gradient-to-r from-gold to-bronze px-7 py-3.5 font-display text-base font-bold text-ink shadow-lg shadow-gold/25 transition-all hover:scale-105 hover:shadow-gold/40"
          >
            View my work
            <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-line bg-panel/60 px-7 py-3.5 font-display text-base font-bold text-ivory backdrop-blur transition-all hover:border-gold/60 hover:bg-panel"
          >
            Get in touch
          </a>
        </div>

        {/* Socials */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-panel/60 text-skin backdrop-blur transition-all hover:-translate-y-1 hover:border-gold/60 hover:text-ivory"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-panel/60 text-skin backdrop-blur transition-all hover:-translate-y-1 hover:border-gold/60 hover:text-ivory"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
          <span className="rounded-xl border border-line bg-panel/60 px-4 py-2.5 text-xs text-skin backdrop-blur">
            {siteConfig.tagline}
          </span>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-skin transition-colors hover:text-gold"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
