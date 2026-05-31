# valueable — marketing site

Landing page for **valueable** — social & environmental cost-benefit analysis.
Built with Next.js (pages router), React 19, Tailwind CSS v4, and Public Sans + Fraunces.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & run

```bash
npm run build
npm start        # or: npm run web  (serves on :8080)
```

## Structure

```
src/
  config/links.ts                       # tool URLs (cba., rpmp.), demo, contact
  pages/index.tsx                       # page composition + SEO
  pages/_document.tsx                   # fonts + meta
  styles/globals.css                    # design system (CSS variables, type, components)
  Components/Reveal.tsx                 # scroll-reveal helper
  Components/CompanyFooter.tsx
  Components/HigherOrderComponents/     # Navbar, HomeSection, AboutSection,
                                        # ProductsSection, HowItWorksSection, ContactSection
```

The **Login** button in the navbar opens a dropdown routing to the two tools defined in
`src/config/links.ts` (CBA Platform → cba.valueable.co.nz, RPMP Tool → rpmp.valueable.co.nz).

## Deploy

Deployed to AWS Elastic Beanstalk via CodeBuild (`buildspec.yml` → `npm ci` + `npm run build`);
`Procfile` runs `npm start` on port 8080.
