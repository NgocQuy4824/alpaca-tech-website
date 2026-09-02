# SV Digital Software Website

Corporate website for **SV Digital Software Co., Ltd.** — a software development company delivering digital products end to end: web applications, mobile apps, enterprise systems and modern data platforms.

- **Locales:** English (`/en`), Tiếng Việt (`/vi`), ພາສາລາວ (`/lo`)
- **Canonical domain:** configured in one place — `SITE_URL` in [`src/lib/i18n/site.ts`](src/lib/i18n/site.ts). Change it there and every page's metadata, sitemap, hreflang and structured data follow.

## Tech Stack

- **Next.js 16** — App Router, React 19, TypeScript strict, SSG (static generation)
- **Tailwind CSS v4** — oklch design tokens
- **Fonts** — Noto Sans JP, Montserrat
- **i18n** — 3 locales with a single typed dictionary (`en` is the source of truth)
- **SEO** — per-page metadata, canonical + hreflang, `Organization` / `AboutPage` / `Service` / `JobPosting` JSON-LD, sitemap + robots

## Pages

Every route exists under each locale prefix (`/en`, `/vi`, `/lo`). The example paths below use the English locale; replace the leading `/en` with `/vi` or `/lo` for the other languages.

### Home

| Page | Path |
|---|---|
| Home | `/en` |

### Company

| Page | Path |
|---|---|
| About Us | `/en/company` |

### Services

| Page | Path |
|---|---|
| Services (overview) | `/en/services` |
| Mobile Solutions | `/en/services/mobile-solutions` |
| Custom Software Development | `/en/services/custom-software-development` |
| Testing Services | `/en/services/testing-services` |
| Legacy System Migration | `/en/services/legacy-system-migration` |

### Technologies

| Page | Path |
|---|---|
| Technologies | `/en/technologies` |

### Recruit

| Page | Path |
|---|---|
| Recruit (overview) | `/en/recruit` |
| Full-Stack Engineer | `/en/recruit/full-stack-engineer` |
| Data Engineer | `/en/recruit/data-engineer` |
| AI Engineer | `/en/recruit/ai-engineer` |
| Product Manager | `/en/recruit/product-manager` |
| Platform Engineer | `/en/recruit/platform-engineer` |
| UI/UX Designer | `/en/recruit/uiux-designer` |

### Contact

| Page | Path |
|---|---|
| Contact | `/en/contact` |

### System / SEO

| Resource | Path |
|---|---|
| Sitemap | `/sitemap.xml` |
| Robots | `/robots.txt` |

## Commands

```bash
npm install    # install deps
npm run dev    # dev server → http://localhost:3000/en
npm run build  # production build
npm run check  # lint + typecheck + build
```

## Project Structure

```
src/
├── app/                          # Next.js App Router routes
│   ├── [locale]/                 # localized pages (en / vi / lo)
│   │   ├── company/              # About Us
│   │   ├── services/[slug]/      # service detail pages
│   │   ├── recruit/[slug]/       # job detail pages
│   │   ├── technologies/
│   │   └── contact/
│   ├── sitemap.ts                # auto-generated sitemap
│   └── robots.ts                 # robots.txt
├── components/sites/sv-digital-software/
│   ├── pages/                    # page bodies (one per route)
│   ├── sections/                 # home-page sections
│   └── shared/                   # Header, Footer, PageHero, JsonLd, …
└── lib/
    ├── i18n/                     # dictionaries + site config (SITE_URL, …)
    ├── services.ts               # service slugs (source of truth)
    ├── jobs.ts                   # job slugs (source of truth)
    └── technologies.ts           # tech categories
```

## License

MIT — assets remain property of SV Digital Software Co., Ltd.
