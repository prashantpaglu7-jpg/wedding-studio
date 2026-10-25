import { Image } from "@/components/ui/image";
import { images } from "@/data/site";
import Reveal from "@/components/site/Reveal";

export default function PhilosophyBand() {
  return (
    <section className="bg-charcoal py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="aspect-[3/2] w-full overflow-hidden bg-black">
            <Image
              src={images.philosophy}
              alt="Couple walking hand in hand down a sunlit palace corridor, seen from behind"
              className="h-full w-full object-cover opacity-90"
              fittingType="fill"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="flex items-center gap-3 text-[9.5px] uppercase tracking-luxe text-gold">
            <span className="h-px w-10 bg-gold/60" />
            Our Philosophy
          </p>
          <blockquote className="mt-6 max-w-xl font-display text-[clamp(1.5rem,3vw,2.3rem)] italic leading-[1.35] text-ivory/90">
            “A wedding is not an event to be staged. It is a day to be remembered exactly as it
            felt.”
          </blockquote>
          <p className="mt-6 max-w-lg text-[14px] leading-relaxed text-ivory/55">
            Every film is cut in-house, by the same two people who stood in the room with you. No
            templated edits, no borrowed music, no preset colour. We grade for skin tones and
            candlelight, mix for the way your father actually sounds, and keep the silences that
            make a film feel human.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-ivory/10 pt-6">
            {[
              ["In-house edit", "By the founders"],
              ["4K delivery", "HDR-ready"],
              ["Backups", "Triple redundancy"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[9px] uppercase tracking-luxe text-ivory/35">{label}</p>
                <p className="mt-1.5 text-sm text-ivory/75">{value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}