import { useEffect, useState } from "react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import {
  siteConfig,
  githubProfileUrl,
  githubAvatarUrl,
} from "../config";
import { AlertIcon, WrenchIcon } from "./icons";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
};

// Language dots mapped to the warm palette
const langColors: Record<string, string> = {
  JavaScript: "#D8903B",
  TypeScript: "#C88E63",
  Lua: "#8C501E",
  HTML: "#F0E8D8",
  CSS: "#D8903B",
  Python: "#C88E63",
  Shell: "#C88E63",
};

function timeAgo(date: string) {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  const intervals: [number, string][] = [
    [31536000, "year"],
    [2592000, "month"],
    [86400, "day"],
    [3600, "hour"],
    [60, "minute"],
  ];
  for (const [secs, label] of intervals) {
    const value = Math.floor(seconds / secs);
    if (value >= 1) return `${value} ${label}${value > 1 ? "s" : ""} ago`;
  }
  return "just now";
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7L5.8 21l1.6-7L2 9.2l7.1-.6L12 2z" />
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="8" r="2.5" />
      <path d="M6 8.5v7M18 10.5c0 4-4 4-8 5" />
    </svg>
  );
}

export function GitHubSection() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [status, setStatus] = useState<"loading" | "error" | "ready">(
    "loading",
  );

  useEffect(() => {
    let cancelled = false;

    async function loadRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${siteConfig.githubUsername}/repos?sort=updated&per_page=6`,
        );
        if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
        const data = (await res.json()) as Repo[];
        if (!cancelled) {
          setRepos(data);
          setStatus("ready");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    loadRepos();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Section
      id="github"
      kicker="Open source"
      title="Connect with me on GitHub"
      subtitle="A snapshot of my latest public repositories — fetched live from the GitHub API."
    >
      <div className="mt-12">
        {/* Profile card */}
        <Reveal>
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-6 rounded-2xl border border-line bg-panel/60 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/10 sm:flex-row"
          >
            <img
              src={githubAvatarUrl}
              alt={`${siteConfig.name}'s GitHub avatar`}
              className="h-24 w-24 rounded-2xl border-2 border-gold/50 shadow-lg shadow-gold/20 transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="text-center sm:text-left">
              <p className="font-display text-3xl font-black text-ivory">
                {siteConfig.name}
              </p>
              <p className="text-sm text-gold">
                @{siteConfig.githubUsername}
              </p>
              <p className="mt-2 text-sm text-skin">
                Full-Stack Developer · FiveM Developer · UI/UX Designer
              </p>
              <span className="mt-4 inline-flex items-center gap-2 rounded-lg border border-gold/50 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                Follow on GitHub →
              </span>
            </div>
          </a>
        </Reveal>

        {/* Repos grid */}
        <div className="mt-8">
          {status === "loading" && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-40 animate-pulse rounded-2xl border border-line bg-panel/60"
                />
              ))}
            </div>
          )}

          {status === "error" && (
            <div className="rounded-2xl border border-gold/40 bg-gold/5 p-8 text-center">
              <p className="flex items-center justify-center gap-2 font-display text-2xl font-bold text-gold">
                <AlertIcon className="h-6 w-6" />
                Couldn't load repositories
              </p>
              <p className="mt-2 text-sm text-skin">
                Check your username in{" "}
                <code className="rounded bg-card px-2 py-1 text-xs text-gold">
                  src/config.ts
                </code>{" "}
                and make sure it's a valid public GitHub account.
              </p>
            </div>
          )}

          {status === "ready" && repos && (
            <>
              {repos.length === 0 ? (
                <p className="flex items-center justify-center gap-2 rounded-2xl border border-line bg-panel/60 p-8 text-center text-skin">
                  <WrenchIcon className="h-5 w-5 shrink-0 text-gold" />
                  No public repositories yet — the first one is coming soon.
                </p>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {repos.map((repo, i) => (
                    <Reveal key={repo.id} delay={i * 70}>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex h-full flex-col rounded-2xl border border-line bg-panel/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/10"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-sm font-bold break-all text-gold">
                            {repo.name}
                          </h3>
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4 shrink-0 text-skin transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ivory"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 17 17 7M8 7h9v9" />
                          </svg>
                        </div>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-skin">
                          {repo.description ?? "No description provided."}
                        </p>
                        <div className="mt-5 flex items-center gap-4 text-xs text-skin">
                          {repo.language && (
                            <span className="flex items-center gap-1.5">
                              <span
                                className="h-2.5 w-2.5 rounded-full"
                                style={{
                                  backgroundColor:
                                    langColors[repo.language] ?? "#C88E63",
                                }}
                              />
                              {repo.language}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <StarIcon /> {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <ForkIcon /> {repo.forks_count}
                          </span>
                          <span className="ml-auto">
                            {timeAgo(repo.updated_at)}
                          </span>
                        </div>
                      </a>
                    </Reveal>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Section>
  );
}
