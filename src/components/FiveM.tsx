import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ArrowRightIcon, CheckIcon, RocketIcon } from "./icons";

const skills = [
  { group: "Languages", items: ["Lua", "TypeScript", "JavaScript"] },
  {
    group: "Frontend & NUI",
    items: ["React", "Tailwind CSS", "HTML/CSS"],
  },
  {
    group: "Frameworks",
    items: ["QBCore", "Qbox", "ESX", "OXCore", "NDCore", "Standalone"],
  },
];

const terminalLines = [
  { prompt: true, text: "fivem-dev --init" },
  { prompt: false, text: "loading NUI + client/server scripts…", icon: "check" },
  { prompt: true, text: "fivem-dev --stack qbcore react tailwind" },
  { prompt: false, text: "resource compiled — 0 errors, 0 warnings", icon: "check" },
  { prompt: true, text: "fivem-dev --ship" },
  { prompt: false, text: "deployed to production server", icon: "rocket" },
] as const;

export function FiveM() {
  return (
    <Section
      id="fivem"
      kicker="FiveM development"
      title="Built for the server"
      subtitle="I specialize in developing custom FiveM resources and UI integrations — from backend scripts to polished NUI interfaces."
    >
      <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
        {/* Skill groups */}
        <div className="space-y-6">
          {skills.map((skill, i) => (
            <Reveal key={skill.group} delay={i * 100}>
              <div className="rounded-2xl border border-line bg-panel/60 p-6 backdrop-blur transition-all duration-300 hover:border-bronze/70">
                <h3 className="text-sm font-bold tracking-wide text-gold uppercase">
                  {skill.group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="cursor-default rounded-lg border border-line bg-card px-3 py-1.5 text-xs text-skin transition-all hover:border-gold/60 hover:text-ivory"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Terminal card */}
        <Reveal delay={150}>
          <div className="overflow-hidden rounded-2xl border border-line bg-[#0d0b08] shadow-2xl shadow-black/60 lg:sticky lg:top-24">
            <div className="flex items-center gap-2 border-b border-line bg-panel px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-bronze" />
              <span className="h-3 w-3 rounded-full bg-gold" />
              <span className="h-3 w-3 rounded-full bg-skin" />
              <span className="ml-3 text-xs text-skin">
                taki@fivem: ~/resources
              </span>
            </div>
            <div className="space-y-2.5 p-4 text-xs sm:p-6 sm:text-sm">
              {terminalLines.map((line, i) => (
                <p key={i} className={line.prompt ? "text-ivory" : "text-skin"}>
                  {line.prompt && (
                    <span className="mr-2 inline-flex items-center gap-1 text-gold">
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                      <span>~</span>
                    </span>
                  )}
                  {!line.prompt && (
                    <span className="mr-2 inline-flex w-4 items-center justify-center text-bronze">
                      {line.icon === "check" && (
                        <CheckIcon className="h-3.5 w-3.5" />
                      )}
                      {line.icon === "rocket" && (
                        <RocketIcon className="h-3.5 w-3.5" />
                      )}
                    </span>
                  )}
                  {line.text}
                </p>
              ))}
              <p className="pt-1">
                <span className="mr-2 inline-flex items-center gap-1 text-gold">
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                  <span>~</span>
                </span>
                <span className="inline-block h-4 w-2 translate-y-0.5 animate-[blink_1s_step-end_infinite] bg-gold" />
              </p>
            </div>
            <div className="border-t border-line bg-panel/50 px-6 py-4">
              <p className="text-xs leading-relaxed text-skin">
                <span className="text-gold">Note:</span> resources are built
                with clean architecture — client/server separation, event-driven
                code, and reusable UI components.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
