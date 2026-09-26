import { Section } from "./Section";
import { Reveal } from "./Reveal";
import {
  CodeIcon,
  GlobeIcon,
  SettingsIcon,
  GamepadIcon,
  PaletteIcon,
} from "./icons";

const categories = [
  {
    icon: <CodeIcon className="h-6 w-6" />,
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Lua", "HTML5", "CSS3"],
  },
  {
    icon: <GlobeIcon className="h-6 w-6" />,
    title: "Frontend",
    items: ["React", "Tailwind CSS"],
  },
  {
    icon: <SettingsIcon className="h-6 w-6" />,
    title: "Backend & Runtime",
    items: ["Node.js", "Bun", "PostgreSQL"],
  },
  {
    icon: <GamepadIcon className="h-6 w-6" />,
    title: "FiveM Frameworks",
    items: ["QBCore", "Qbox", "ESX", "OXCore"],
  },
  {
    icon: <PaletteIcon className="h-6 w-6" />,
    title: "Design",
    items: ["Figma"],
  },
];

export function TechStack() {
  return (
    <Section
      id="stack"
      kicker="Tech stack"
      title="Tools of the trade"
      subtitle="The technologies I use to bring ideas to life — in the browser and in-game."
    >
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 80}>
            <div className="h-full rounded-2xl border border-line bg-panel/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-bronze/70 hover:shadow-xl hover:shadow-bronze/10">
              <div className="flex items-center gap-3">
                <span className="text-gold">{cat.icon}</span>
                <h3 className="text-sm font-bold tracking-wide text-gold uppercase">
                  {cat.title}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="cursor-default rounded-lg border border-line bg-card px-3 py-1.5 text-xs text-skin transition-colors hover:border-gold/60 hover:text-ivory"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}

        {/* Highlight card */}
        <Reveal delay={categories.length * 80}>
          <div className="flex h-full flex-col justify-center rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/15 to-bronze/15 p-6">
            <p className="text-sm text-gold">$ whoami</p>
            <p className="mt-3 font-display text-2xl font-bold leading-snug">
              One toolkit, <span className="text-gold">web</span> &{" "}
              <span className="text-skin">game</span> included.
            </p>
            <p className="mt-2 text-sm text-skin">
              TypeScript and Lua under one roof — shared patterns, faster
              delivery.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
