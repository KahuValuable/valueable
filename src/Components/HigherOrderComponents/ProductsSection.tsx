import React from "react";
import Reveal from "@/Components/Reveal";
import { TOOLS, DEMO_HREF } from "@/config/links";

type Product = {
  kind: "platform" | "service";
  title: string;
  blurb: string;
  points: string[];
  cta: { label: string; href: string; external?: boolean };
  accent?: boolean;
};

const products: Product[] = [
  {
    kind: "platform",
    title: TOOLS.cba.name,
    blurb:
      "Our self-serve platform for measuring social, cultural and environmental impact. Log your activities and get a defensible benefit-cost ratio in minutes.",
    points: ["NZ Treasury CBAx evidence base", "Monte Carlo uncertainty & sensitivity", "Funder-ready PDF & Excel exports"],
    cta: { label: "Open the CBA Platform", href: TOOLS.cba.href, external: true },
    accent: true,
  },
  {
    kind: "platform",
    title: TOOLS.rpmp.name,
    blurb:
      "Built specifically for councils to evaluate Regional Pest Management Plan options — a purpose-built CBA workflow for the RPMP process.",
    points: ["Tailored to council RPMP needs", "Compare management programmes", "Decision-grade cost-benefit outputs"],
    cta: { label: "Open the RPMP Tool", href: TOOLS.rpmp.href, external: true },
  },
  {
    kind: "service",
    title: "Bespoke CBA consulting",
    blurb:
      "Prefer it done for you? We deliver individual, portfolio, and multi-year cost-benefit analyses — period-in-scope to your financial year, substantiated with academic research.",
    points: ["Individual & portfolio analyses", "Multi-year trend analysis", "Qualitative + quantitative impact story"],
    cta: { label: "Talk to us", href: "#contact" },
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal as="span" className="eyebrow">What we offer</Reveal>
        <Reveal as="h2" className="display-lg mt-4" delay={60}>
          Two platforms, or done for you
        </Reveal>
        <Reveal as="p" className="lead mt-5" delay={120}>
          Whether you&apos;re an organisation with a passion or a council with a mandate,
          we help your work show its worth.
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
        {products.map((p, i) => (
          <Reveal key={p.title} delay={i * 110} className="h-full">
            <div className="card flex h-full flex-col p-8">
              <span
                className={`mb-5 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider
                  ${p.kind === "platform"
                    ? "bg-[var(--ember-soft)] text-[var(--ember-deep)]"
                    : "bg-[var(--mist)] text-[var(--ink)]"}`}
              >
                {p.kind === "platform" ? "Platform" : "Consulting"}
              </span>

              <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">{p.title}</h3>
              <p className="body-text mt-3 text-[0.95rem]">{p.blurb}</p>

              <ul className="mt-5 space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-[var(--ink)]">
                    <span className="mt-0.5 text-[var(--ember)]">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <a
                  href={p.cta.href}
                  target={p.cta.external ? "_blank" : undefined}
                  rel={p.cta.external ? "noopener noreferrer" : undefined}
                  className={`btn w-full justify-center ${p.accent ? "btn-primary" : "btn-ink"}`}
                >
                  {p.cta.label} →
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mx-auto mt-10 max-w-6xl text-center">
        <p className="text-sm text-[var(--ink-soft)]">
          Not sure where to start?{" "}
          <a href={DEMO_HREF} target="_blank" rel="noopener noreferrer"
            className="font-semibold text-[var(--ember-deep)] underline-offset-4 hover:underline">
            Explore the no-login demo →
          </a>
        </p>
      </Reveal>
    </section>
  );
};

export default ProductsSection;
