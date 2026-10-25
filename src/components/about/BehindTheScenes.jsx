import { Image } from "@/components/ui/image";
import { behindTheScenes } from "@/data/site";
import Reveal from "@/components/site/Reveal";

export default function BehindTheScenes() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-3 text-[9.5px] uppercase tracking-luxe text-charcoal/45">
              <span className="h-px w-10 bg-gold" />
              On Set
            </p>
            <h2 className="mt-5 font-heading text-[clamp(1.8rem,3.6vw,2.9rem)] leading-[1.12] text-charcoal">
              Behind the Scenes
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-charcoal/55">
            Same team, same gear, every event — no freelance roulette on your wedding day.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {behindTheScenes.map((shot, index) => (
            <Reveal key={shot.image} delay={index * 90}>
              <div className="group relative aspect-[4/3] w-full overflow-hidden bg-champagne">
                <Image
                  src={shot.image}
                  alt={shot.alt}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-charcoal/10 transition-opacity duration-500 group-hover:opacity-0" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}