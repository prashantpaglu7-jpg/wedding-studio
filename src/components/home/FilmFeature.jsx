import { useState } from "react";
import { Play } from "lucide-react";
import { Image } from "@/components/ui/image";
import { images } from "@/data/site";
import Reveal from "@/components/site/Reveal";
import FilmModal from "./FilmModal";

export default function FilmFeature() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-3 text-[9.5px] uppercase tracking-luxe text-ivory/50">
              <span className="h-px w-10 bg-gold" />
              Featured Film
            </p>
            <h2 className="mt-5 max-w-xl font-heading text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.1] text-ivory">
              A Palace Wedding, <span className="font-display italic text-gold/90">Told in Light</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ivory/50">
            Three days, one family home, and the last light falling through the colonnade.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Watch the featured film"
            className="group relative block w-full overflow-hidden bg-black"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={images.filmPoster}
                alt="Couple silhouetted on a terrace at dusk with warm lights behind"
                className="h-full w-full object-cover opacity-90 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                fittingType="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/20" />
            </div>

            <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/60 bg-charcoal/25 text-gold backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 md:h-24 md:w-24">
              <Play className="ml-1 h-6 w-6" strokeWidth={1.2} />
            </span>

            <span className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-5 text-left sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <span className="text-[9px] uppercase tracking-luxe text-ivory/70">
                City Palace, Udaipur · 4 min · 2025
              </span>
              <span className="text-[9px] uppercase tracking-luxe text-gold">
                Play the Story
              </span>
            </span>
          </button>
        </Reveal>

        <p className="mt-6 text-center text-[10px] uppercase tracking-wide-luxe text-ivory/35">
          Full films are shared privately with each couple
        </p>
      </div>

      <FilmModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}