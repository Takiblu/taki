import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  kicker: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, kicker, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm tracking-widest text-gold uppercase">
            {"// "}{kicker}
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-balance text-ivory md:text-5xl">
            {title}
          </h2>
          {subtitle && <p className="mt-3 max-w-2xl text-skin">{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
