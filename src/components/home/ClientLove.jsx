import { Star } from "lucide-react";
import { reviews } from "@/data/site";
import Reveal from "@/components/site/Reveal";

const loop = [...reviews, ...reviews];

export default function ClientLove() {
  return (
    <section className="marquee-wrap overflow-hidden border-y border-charcoal/8 bg-champagne py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-3 text-[9.5px] uppercase tracking-luxe text-charcoal/45">
              <span className="h-px w-10 bg-gold" />
              Client Love
            </p>
            <h2 className="mt-5 font-heading text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.1] text-charcoal">
              Words from <span className="font-display italic text-rosegold">our couples</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-charcoal/55">
            Reviews collected after the albums arrived — usually with a few tears.
          </p>
        </Reveal>
      </div>

      <div className="marquee-mask mt-12 overflow-hidden">
        <div className="marquee-track flex w-max gap-5">
          {loop.map((review, index) => (
            <figure
              key={`${review.couple}-${index}`}
              className="flex w-[290px] shrink-0 flex-col justify-between border border-charcoal/10 bg-ivory/80 p-6 sm:w-[360px] sm:p-7"
            >
              <div>
                <div className="flex gap-1 text-gold">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-3 w-3 fill-gold text-gold" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-[19px] italic leading-[1.55] text-charcoal/80">
                  “{review.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-charcoal/10 pt-4">
                <span className="h-px w-6 bg-gold" />
                <span className="text-[9.5px] uppercase tracking-wide-luxe text-charcoal/55">
                  {review.couple} · {review.place}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}