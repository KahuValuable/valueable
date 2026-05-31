import React from "react";
import Reveal from "@/Components/Reveal";

const steps = [
  { n: "01", title: "Log your activities", body: "Record what you do — trapping nights, volunteer hours, sessions delivered — and the cost of doing it." },
  { n: "02", title: "We link the evidence", body: "Each activity is matched to peer-reviewed coefficients and NZ Treasury CBAx valuations — no spreadsheets, no manual lookups." },
  { n: "03", title: "We adjust for reality", body: "Attribution, deadweight and displacement are applied so you count only the value you genuinely caused." },
  { n: "04", title: "You get social value ($)", body: "A defensible benefit-cost ratio, NPV and confidence range — ready to put in front of your board or funders." },
];

const HowItWorksSection = () => {
  return (
    <section id="how" className="relative px-6 py-28">
      {/* Inverted ink panel for contrast/rhythm */}
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-[var(--ink)] px-6 py-16 text-white shadow-[var(--shadow-lg)] sm:px-12">
        <div className="max-w-2xl">
          <Reveal as="span" className="eyebrow !text-[var(--ember)]">How it works</Reveal>
          <Reveal as="h2" className="display-lg mt-4 !text-white" delay={60}>
            From a day&apos;s work to a defensible dollar figure
          </Reveal>
          <Reveal as="p" className="mt-5 text-lg leading-relaxed text-white/75" delay={120}>
            valueable follows a Theory of Change: inputs become activities, activities
            create outcomes, and outcomes are monetised into social value.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 110}>
              <div className="relative">
                <span className="font-display text-5xl font-semibold text-[var(--ember)]">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
