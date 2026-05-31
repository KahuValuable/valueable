import React from "react";
import Image from "next/image";
import { TOOLS, DEMO_HREF, CONTACT_EMAIL } from "@/config/links";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
  else window.location.href = `/#${id}`;
};

const CompanyFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-[var(--ink-deep)] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <Image src="/Orbs.png" alt="valueable" width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="font-display text-xl font-semibold">valueable</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            Show the worth of your work, social and environmental cost-benefit
            analysis for Aotearoa.
          </p>
        </div>

        {/* Platforms */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/50">Platforms</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href={TOOLS.cba.href} className="text-white/80 hover:text-[var(--ember)]">CBA Platform</a></li>
            <li><a href={TOOLS.rpmp.href} className="text-white/80 hover:text-[var(--ember)]">RPMP Tool</a></li>
            <li><a href={DEMO_HREF} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[var(--ember)]">Live demo</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/50">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><button onClick={() => scrollTo("about")} className="text-white/80 hover:text-[var(--ember)]">About</button></li>
            <li><button onClick={() => scrollTo("products")} className="text-white/80 hover:text-[var(--ember)]">Products</button></li>
            <li><button onClick={() => scrollTo("how")} className="text-white/80 hover:text-[var(--ember)]">How it works</button></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/50">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href={`mailto:${CONTACT_EMAIL}`} className="text-white/80 hover:text-[var(--ember)]">{CONTACT_EMAIL}</a></li>
            <li><button onClick={() => scrollTo("contact")} className="text-white/80 hover:text-[var(--ember)]">Send a message</button></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/55 sm:flex-row">
          <span>© {year} valueable. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-white/80">Privacy</a>
            <a href="/terms" className="hover:text-white/80">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CompanyFooter;
