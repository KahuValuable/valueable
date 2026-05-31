import React from "react";
import Reveal from "@/Components/Reveal";

const AboutSection = () => {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        {/* Left: narrative */}
        <div>
          <Reveal as="span" className="eyebrow">About valueable</Reveal>
          <Reveal as="h2" className="display-lg mt-4" delay={60}>
            Revolutionising how value is valued
          </Reveal>
          <Reveal as="p" className="lead mt-6" delay={120}>
            valueable was established in 2025 to help conservation-focused and
            community organisations show the worth of their work. We&apos;re a small
            team united by one belief: the impact of good work should be as visible,
            and as credible, as any financial return.
          </Reveal>
          <Reveal as="p" className="body-text mt-4" delay={180}>
            We bring the rigour government uses — the NZ Treasury&apos;s CBAx evidence
            base and the Living Standards Framework — to organisations of every size,
            so the value you create is measured, not just described.
          </Reveal>
        </div>

        {/* Right: vision / mission cards */}
        <div className="grid gap-5">
          <Reveal delay={120}>
            <div className="card p-8">
              <span className="text-sm font-bold uppercase tracking-widest text-[var(--ember-deep)]">Our vision</span>
              <p className="mt-3 font-display text-2xl leading-snug text-[var(--ink)]">
                A world where the value of every transaction is transparent.
              </p>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <div className="card p-8">
              <span className="text-sm font-bold uppercase tracking-widest text-[var(--ember-deep)]">Our mission</span>
              <p className="mt-3 text-lg leading-relaxed text-[var(--ink)]">
                To provide tools that help people and organisations understand how their
                decisions affect <strong>profit, people, and the planet</strong>.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
