// Single source of truth for external destinations.
// Update these if a tool's subdomain changes.

export const TOOLS = {
  cba: {
    name: "CBA Platform",
    tagline: "Social & environmental cost-benefit analysis",
    href: "https://cba.valueable.co.nz",
  },
  rpmp: {
    name: "RPMP Tool",
    tagline: "Regional Pest Management Plan CBA for councils",
    href: "https://rpmp.valueable.co.nz",
  },
} as const;

// The CBA platform's no-login demo (see app ?demo=1 flag).
export const DEMO_HREF = "https://cba.valueable.co.nz/?demo=1";

export const CONTACT_EMAIL = "hello@valueable.co.nz";
