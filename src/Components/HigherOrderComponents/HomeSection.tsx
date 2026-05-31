import React from "react";
import { DEMO_HREF, TOOLS } from "@/config/links";
import RotatingWords from "@/Components/RotatingWords";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-16 text-center"
    >
      {/* Soft floating orbs for depth */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[rgba(242,140,56,0.16)] blur-3xl"
          style={{ animation: "drift 14s ease-in-out infinite" }} />
        <div className="absolute -right-16 top-40 h-80 w-80 rounded-full bg-[rgba(0,62,93,0.10)] blur-3xl"
          style={{ animation: "drift 18s ease-in-out infinite reverse" }} />
      </div>

      <span className="eyebrow float-up" style={{ animationDelay: "0ms" }}>
        Social &amp; environmental value, quantified
      </span>

      <h1 className="display-xl float-up mt-5 max-w-4xl" style={{ animationDelay: "90ms" }}>
        Show the world the{" "}
        <span className="relative whitespace-nowrap text-[var(--ember-deep)]">
          worth
          <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
            <path d="M2 9C50 3 150 3 198 7" stroke="var(--ember)" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </span>{" "}
        of your work.
      </h1>

      <p className="lead float-up mx-auto mt-7 max-w-2xl" style={{ animationDelay: "180ms" }}>
        valueable turns what your organisation does into a defensible, monetised
        cost-benefit analysis — grounded in the NZ Treasury&apos;s CBAx evidence base
        and the Living Standards Framework. From activities to dollars of social value.
      </p>

      <div className="float-up mt-9 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "270ms" }}>
        <a href={DEMO_HREF} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Try the live demo
        </a>
        <button onClick={() => scrollTo("products")} className="btn btn-ghost">
          Explore the platforms
        </button>
      </div>

      {/* Dynamic audience line — vertical scroller */}
      <div className="float-up mt-12 text-center leading-tight" style={{ animationDelay: "340ms" }}>
        <span className="block text-lg font-medium text-[var(--ink-soft)] sm:text-xl">Helping</span>
        <RotatingWords />
        <span className="block text-lg font-medium text-[var(--ink-soft)] sm:text-xl">
          show the worth of their work
        </span>
      </div>

      {/* Theory-of-Change ribbon */}
      <div className="float-up mt-12 w-full max-w-3xl" style={{ animationDelay: "440ms" }}>
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-sm font-semibold">
          {["Activities", "Outcomes", "Impacts ($)", "Social value"].map((step, i, arr) => (
            <React.Fragment key={step}>
              <span className="rounded-full border border-[var(--line)] bg-white/70 px-4 py-1.5 text-[var(--ink)] backdrop-blur">
                {step}
              </span>
              {i < arr.length - 1 && <span className="text-[var(--ember)]">→</span>}
            </React.Fragment>
          ))}
        </div>
        <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">
          {TOOLS.cba.name} · {TOOLS.rpmp.name} · Trusted methodology
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
