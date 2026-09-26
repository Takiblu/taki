import { siteConfig, githubProfileUrl } from "../config";
import logo from "../logo.svg";

export function Footer() {
  return (
    <footer className="border-t border-line bg-panel/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Taki logo" className="h-8 w-8" />
          <div>
            <p className="font-display text-xl font-bold text-ivory">
              {siteConfig.name}
              <span className="text-gold italic">.dev</span>
            </p>
            <p className="text-xs text-skin">
              © {new Date().getFullYear()} — {siteConfig.tagline}
            </p>
          </div>
        </div>

        <p className="text-xs text-skin">
          Built with <span className="text-gold">React</span>,{" "}
          <span className="text-gold">Tailwind CSS</span> &{" "}
          <span className="text-bronze">Bun</span>
        </p>

        <a
          href={githubProfileUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-lg border border-line bg-panel px-4 py-2 text-xs font-semibold text-skin transition-all hover:border-gold/60 hover:text-ivory"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
          </svg>
          GitHub
        </a>
      </div>
    </footer>
  );
}
