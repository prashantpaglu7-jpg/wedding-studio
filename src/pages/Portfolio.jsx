import { useMemo, useState } from "react";
import { portfolio, portfolioCategories, whatsappLink } from "@/data/site";
import PageHeader from "@/components/site/PageHeader";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import Lightbox from "@/components/portfolio/Lightbox";
import { cn } from "@/lib/utils";

export default function Portfolio() {
  const [category, setCategory] = useState("All Works");
  const [openIndex, setOpenIndex] = useState(null);

  const items = useMemo(
    () => (category === "All Works" ? portfolio : portfolio.filter((item) => item.category === category)),
    [category]
  );

  const close = () => setOpenIndex(null);
  const prev = () => setOpenIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  const next = () => setOpenIndex((i) => (i === null ? null : (i + 1) % items.length));

  return (
    <>
      <PageHeader
        eyebrow="Portfolio · 2020 – 2026"
        title="Our Cinematic Portfolio & Story Vault"
        subtitle="A selection of weddings, portraits and pre-wedding tales — shot across palaces, deserts and old city lanes. Tap any frame to see it full screen."
      />

      <div className="sticky top-[72px] z-30 border-b border-charcoal/8 bg-ivory/92 backdrop-blur-xl lg:top-[84px]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="-mx-1 flex snap-x gap-2 overflow-x-auto py-3.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {portfolioCategories.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setCategory(tab);
                  setOpenIndex(null);
                }}
                aria-pressed={category === tab}
                className={cn(
                  "shrink-0 snap-start whitespace-nowrap rounded-full border px-4 py-2.5 text-[9.5px] uppercase tracking-wide-luxe transition-colors duration-300",
                  category === tab
                    ? "border-charcoal bg-charcoal text-ivory"
                    : "border-charcoal/15 text-charcoal/60 hover:border-charcoal/40 hover:text-charcoal"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-ivory pb-16 pt-8 md:pb-24 md:pt-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div key={category} className="rise columns-1 gap-5 sm:columns-2 lg:columns-3">
            {items.map((item, index) => (
              <PortfolioCard key={item.id} item={item} onOpen={() => setOpenIndex(index)} />
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-charcoal/10 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-md text-sm leading-relaxed text-charcoal/55">
              Every gallery you see is a fraction of the day. Ask us for the full archive — we're
              happy to walk you through complete films before you book.
            </p>
            <a
              href={whatsappLink(
                "Hi Aurélia! I'd love to see the full archives / more films from your portfolio."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-charcoal/25 px-6 text-[10px] uppercase tracking-wide-luxe text-charcoal transition-colors duration-300 hover:border-charcoal hover:bg-charcoal hover:text-ivory"
            >
              Request the Full Archive
            </a>
          </div>
        </div>
      </section>

      {openIndex !== null && (
        <Lightbox
          items={items}
          index={openIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}