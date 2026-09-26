import { Section } from "./Section";
import { Reveal } from "./Reveal";
import {
  LaptopIcon,
  GamepadIcon,
  PaletteIcon,
  ZapIcon,
  LayersIcon,
} from "./icons";

const traits = [
  {
    icon: <LaptopIcon className="h-6 w-6" />,
    title: "Full-Stack Developer",
    text: "Focusing on modern web technologies — from database to pixel.",
  },
  {
    icon: <GamepadIcon className="h-6 w-6" />,
    title: "FiveM Developer",
    text: "Crafting custom scripts, NUI, and game frameworks for Roleplay servers.",
  },
  {
    icon: <PaletteIcon className="h-6 w-6" />,
    title: "UI/UX Enthusiast",
    text: "Designing sleek interfaces in Figma and Tailwind CSS.",
  },
  {
    icon: <ZapIcon className="h-6 w-6" />,
    title: "Performance & Clean Code",
    text: "Advocate for fast, readable, maintainable code — no shortcuts.",
  },
  {
    icon: <LayersIcon className="h-6 w-6" />,
    title: "Web × Game Dev",
    text: "Passionate about blending Web & Game Development into one workflow.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      kicker="About me"
      title="A developer who ships"
      subtitle="Web by day, FiveM by night — always building, always improving."
    >
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {traits.map((trait, i) => (
          <Reveal key={trait.title} delay={i * 90}>
            <article className="group h-full rounded-2xl border border-line bg-panel/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-card text-gold transition-transform duration-300 group-hover:scale-110">
                {trait.icon}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ivory">
                {trait.title}
              </h3>
              <p className="mt-2 leading-relaxed text-skin">{trait.text}</p>
            </article>
          </Reveal>
        ))}

        {/* Motto card fills the 6th cell */}
        <Reveal delay={traits.length * 90}>
          <div className="flex h-full flex-col justify-center rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/20 to-bronze/20 p-6">
            <p className="font-display text-3xl font-black leading-snug">
              <span className="text-ink">Code.</span>{" "}
              <span className="text-ivory">Create.</span>{" "}
              <span className="text-bronze">Improve.</span>
            </p>
            <p className="mt-3 text-sm text-skin">
              The loop I live by — every project makes the next one better.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
