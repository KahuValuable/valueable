import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TOOLS, DEMO_HREF } from "@/config/links";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "how", label: "How it works" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);   // mobile nav
  const [loginOpen, setLoginOpen] = useState(false); // login dropdown
  const loginRef = useRef<HTMLDivElement | null>(null);

  // Hide nav on scroll-down, reveal on scroll-up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 50) setShow(true);
      else setShow(y < lastY);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  // Close login dropdown on outside click / Escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(e.target as Node)) setLoginOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLoginOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = `/#${id}`;   // from a sub-page (e.g. /guide), go home + anchor
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl
        transition-all duration-300
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
    >
      <div
        className="flex items-center justify-between gap-4 rounded-full border border-[var(--line)]
          bg-white/75 px-4 sm:px-6 py-2.5 shadow-lg backdrop-blur-xl"
      >
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 shrink-0"
          aria-label="valueable — back to top"
        >
          <Image src="/Orbs.png" alt="valueable" width={34} height={34}
            className="h-8 w-8 object-contain transition-transform duration-200 hover:scale-110" />
          <span className="font-display text-lg font-semibold tracking-tight text-[var(--ink)]">
            valueable
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="rounded-full px-3.5 py-1.5 text-sm font-medium text-[var(--ink-soft)]
                transition-colors hover:bg-[var(--mist)] hover:text-[var(--ink)]"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a href={DEMO_HREF} target="_blank" rel="noopener noreferrer"
            className="hidden btn btn-ghost !px-4 !py-2 sm:inline-flex">
            View demo
          </a>

          {/* Login dropdown */}
          <div className="relative" ref={loginRef}>
            <button
              onClick={() => setLoginOpen((o) => !o)}
              aria-haspopup="menu"
              aria-expanded={loginOpen}
              className="btn btn-primary !px-4 !py-2"
            >
              Login
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                className={`transition-transform duration-200 ${loginOpen ? "rotate-180" : ""}`}>
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              role="menu"
              className={`absolute right-0 mt-3 w-72 origin-top-right rounded-2xl border border-[var(--line)]
                bg-white p-2 shadow-xl transition-all duration-200
                ${loginOpen ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"}`}
            >
              <p className="px-3 pb-1 pt-2 text-[0.7rem] font-bold uppercase tracking-widest text-[var(--ink-soft)]">
                Choose your tool
              </p>
              {Object.values(TOOLS).map((t) => (
                <a
                  key={t.href}
                  href={t.href}
                  role="menuitem"
                  className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[var(--mist)]"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg
                    bg-[var(--ember-soft)] text-[var(--ember-deep)]">
                    →
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-[var(--ink)]">{t.name}</span>
                    <span className="block text-xs text-[var(--ink-soft)]">{t.tagline}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full hover:bg-[var(--mist)] md:hidden"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen
                ? <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {menuOpen && (
        <div className="mt-2 rounded-2xl border border-[var(--line)] bg-white p-2 shadow-xl md:hidden">
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => go(l.id)}
              className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium text-[var(--ink)] hover:bg-[var(--mist)]">
              {l.label}
            </button>
          ))}
          <a href={DEMO_HREF} target="_blank" rel="noopener noreferrer"
            className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium text-[var(--ember-deep)] hover:bg-[var(--mist)]">
            View demo →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
