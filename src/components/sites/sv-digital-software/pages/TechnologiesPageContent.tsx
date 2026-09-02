import Link from "next/link";
import type { Locale } from "@/lib/i18n/types";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { PageHero } from "@/components/sites/sv-digital-software/shared/PageHero";
import { SectionHeading } from "@/components/sites/sv-digital-software/shared/SectionHeading";
import { TECH_CATEGORIES } from "@/lib/technologies";

type Props = { dict: Dictionary; locale: Locale };

const CATEGORY_IMAGES: Record<string, string> = {
  frontend: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=560&h=360&fit=crop&q=80",
  backend: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=560&h=360&fit=crop&q=80",
  mobile: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=560&h=360&fit=crop&q=80",
  cloud: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=560&h=360&fit=crop&q=80",
  database: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=560&h=360&fit=crop&q=80",
  ai: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=560&h=360&fit=crop&q=80",
};

/** Featured-project photos — fintech, analytics dashboard, e-commerce logistics. */
const PROJECT_IMAGES = [
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=520&fit=crop&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=520&fit=crop&q=80",
  "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=520&fit=crop&q=80",
];

export function TechnologiesPageContent({ dict, locale }: Props) {
  const d = dict.technologiesPage;

  return (
    <main className="flex flex-col">
      <PageHero title={d.heroTitle} current={d.heroTitle} locale={locale} />

      <div className="flex justify-center bg-at-bg px-0">
        <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[100px] max-[540px]:py-16">
          <div className="w-full max-w-[1288px] flex flex-col gap-12">
            {/* Intro — panel with team-at-work background image */}
            <div className="relative overflow-hidden rounded-[32px] border border-at-border bg-at-bg-soft px-6 lg:px-12 py-10 lg:py-14">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&h=900&fit=crop&q=80"
                alt=""
                aria-hidden
                loading="lazy"
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover opacity-55"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-at-section via-at-section/70 to-transparent" />
              <p className="relative z-10 text-at-text-dark text-xl lg:text-2xl leading-[1.9] tracking-[0.02em] font-[var(--font-noto-sans-jp)] max-w-[980px]">
                {d.intro}
              </p>
            </div>

            <div className="flex flex-col gap-10">
              {TECH_CATEGORIES.map((cat, idx) => {
                const flip = idx % 2 === 1;
                return (
                  <section
                    key={cat.key}
                    className={`flex flex-col lg:flex-row gap-6 lg:gap-8 ${flip ? "lg:flex-row-reverse" : ""}`}
                  >
                    {/* Image block */}
                    <div className="lg:w-[40%] shrink-0 flex flex-col gap-3">
                      <div className="relative w-full h-[240px] lg:h-[260px] rounded-2xl overflow-hidden border border-at-border bg-at-bg-soft">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={CATEGORY_IMAGES[cat.key]}
                          alt={d.categories[cat.key]}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-at-text-muted text-sm leading-[1.7] tracking-[0.03em] font-[var(--font-noto-sans-jp)]">
                        {d.categoryDesc[cat.key]}
                      </p>
                    </div>

                    {/* Tech cards */}
                    <div className="flex-1 flex flex-col gap-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-lg bg-at-pink shrink-0" />
                        <h2 className="text-at-primary text-[18px] lg:text-[22px] font-bold tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
                          {d.categories[cat.key]}
                        </h2>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {cat.items.map((item) => (
                          <div
                            key={item.name}
                            className="group border border-at-border rounded-2xl bg-at-bg-soft px-4 py-6 flex flex-col items-center gap-3 hover:border-at-pink/40 hover:bg-at-section transition-colors"
                          >
                            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-at-border/80 group-hover:border-at-pink/30 transition-colors">
                              {item.logo ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={item.logo} alt="" loading="lazy" className="w-7 h-7 object-contain" />
                              ) : item.icon ? (
                                (() => {
                                  const Ic = item.icon;
                                  return <Ic className="w-7 h-7 text-at-primary" />;
                                })()
                              ) : null}
                            </span>
                            <span className="text-at-text-dark text-xs font-bold tracking-[0.02em] text-center leading-[1.4]">
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>

            {/* Featured Projects — matching TSO's "Dự án tiêu biểu" */}
            <section className="flex flex-col gap-8 pt-4" aria-labelledby="tech-projects">
              <SectionHeading as="h2"><span id="tech-projects">{d.projects.heading}</span></SectionHeading>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {d.projects.items.map((p, i) => (
                  <article
                    key={p.title}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-at-border bg-at-bg-soft transition-colors hover:border-at-pink/40"
                  >
                    <div className="relative h-[190px] overflow-hidden bg-at-bg-soft">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={PROJECT_IMAGES[i % PROJECT_IMAGES.length]}
                        alt={p.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <h3 className="text-at-primary text-lg font-bold leading-[1.4] font-[var(--font-noto-sans-jp)]">{p.title}</h3>
                      <p className="flex-1 text-at-text-dark text-sm leading-[1.8] tracking-[0.03em] font-[var(--font-noto-sans-jp)]">{p.desc}</p>
                      <ul className="flex flex-wrap gap-1.5">
                        {p.stack.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-full border border-at-border bg-at-section px-2.5 py-1 text-[11px] font-medium text-at-text-muted hover:border-at-pink/40 hover:bg-at-bg-soft hover:text-at-primary transition-colors"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
              <Link
                href={`/${locale}/services`}
                className="self-center inline-flex items-center justify-center rounded-lg border border-at-border bg-at-bg-soft px-8 py-3.5 text-sm font-bold tracking-[0.06em] text-at-primary hover:bg-at-hover hover:border-at-hover hover:text-at-primary transition-colors"
              >
                {d.projects.viewAll} →
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
