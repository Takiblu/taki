import { useState, type ReactNode } from "react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { siteConfig, githubProfileUrl } from "../config";
import {
  ArrowRightIcon,
  CheckIcon,
  DiscordIcon,
  GithubIcon,
  MailIcon,
} from "./icons";

type Channel = {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  action: string;
};

const emailChannel: Channel = {
  icon: <MailIcon className="h-6 w-6" />,
  label: "Email",
  value: siteConfig.email,
  href: `mailto:${siteConfig.email}`,
  action: "Send mail",
};

const discordChannel: Channel = {
  icon: <DiscordIcon className="h-6 w-6" />,
  label: "Discord",
  value: `@${siteConfig.discord}`,
  href: "#contact",
  action: "Copy username",
};

const githubChannel: Channel = {
  icon: <GithubIcon className="h-6 w-6" />,
  label: "GitHub",
  value: `@${siteConfig.githubUsername}`,
  href: githubProfileUrl,
  action: "View profile",
};

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.discord);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable (e.g. insecure context) — ignore
    }
  };

  // Discord card only appears once a tag is set in src/config.ts
  const channels: Channel[] = [
    emailChannel,
    ...(siteConfig.discord ? [discordChannel] : []),
    githubChannel,
  ];

  return (
    <Section
      id="contact"
      kicker="Contact"
      title="Let's build something together"
      subtitle="Got a project in mind, a FiveM server to improve, or just want to say hi? My inbox is always open — I'll get back to you fast."
    >
      <div
        className={`mt-12 grid gap-5 ${
          channels.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
        }`}
      >
        {channels.map((channel, i) => {
          const inner = (
            <>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-card text-gold transition-transform duration-300 group-hover:scale-110">
                {channel.icon}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ivory">
                {channel.label}
              </h3>
              <p className="mt-1.5 break-all text-sm text-skin">
                {channel.value}
              </p>
              {/* Pinned to card bottom so actions align across cards */}
              <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-gold">
                {channel.action}
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </>
          );

          const classes =
            "group flex h-full min-w-0 flex-col rounded-2xl border border-line bg-panel/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/10";

          return (
            <Reveal key={channel.label} delay={i * 100} className="min-w-0">
              {channel.label === "Discord" ? (
                <button
                  onClick={copyDiscord}
                  className={`${classes} w-full cursor-pointer text-left`}
                >
                  {copied ? (
                    <span className="flex items-center gap-2 font-semibold text-gold">
                      <CheckIcon className="h-4 w-4" />
                      Copied to clipboard!
                    </span>
                  ) : (
                    inner
                  )}
                </button>
              ) : (
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={classes}
                >
                  {inner}
                </a>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
