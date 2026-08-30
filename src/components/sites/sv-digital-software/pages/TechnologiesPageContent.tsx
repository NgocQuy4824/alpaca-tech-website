import type { Locale } from "@/lib/i18n/types";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { PageHero } from "@/components/sites/sv-digital-software/shared/PageHero";
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

export function TechnologiesPageContent({ dict, locale }: Props) {
  const d = dict.technologiesPage;

  return (
    <main className="flex flex-col">
      <PageHero title={d.heroTitle} current={d.heroTitle} locale={locale} />

      <div className="flex justify-center bg-at-bg px-0">
        <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[100px] max-[540px]:py-16">
          <div className="w-full max-w-[1288px] flex flex-col gap-12">
            <p className="text-at-text-dark text-base leading-[2] tracking-[0.04em] font-[var(--font-noto-sans-jp)] max-w-[820px]">
              {d.intro}
            </p>

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
          </div>
        </div>
      </div>
    </main>
  );
}
