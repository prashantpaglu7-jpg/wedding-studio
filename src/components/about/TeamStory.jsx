import { Image } from "@/components/ui/image";
import { images } from "@/data/site";
import Reveal from "@/components/site/Reveal";

export default function TeamStory() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-champagne">
            <Image
              src={images.founderA}
              alt="Cinematographer Aarav holding a cinema camera in warm studio light"
              className="h-full w-full object-cover"
              fittingType="fill"
            />
          </div>
          <div className="absolute -bottom-8 right-0 hidden w-2/5 border-[6px] border-ivory sm:block lg:-right-8">
            <div className="aspect-[3/4] w-full overflow-hidden bg-champagne">
              <Image
                src={images.founderB}
                alt="Photographer Meera holding a mirrorless camera in soft window light"
                className="h-full w-full object-cover"
                fittingType="fill"
              />
            </div>
          </div>
          <span className="absolute -left-4 -top-4 hidden h-20 w-20 border-l border-t border-gold/50 lg:block" />
        </Reveal>

        <Reveal delay={120}>
          <p className="flex items-center gap-3 text-[9.5px] uppercase tracking-luxe text-charcoal/45">
            <span className="h-px w-10 bg-gold" />
            Our Story
          </p>
          <h2 className="mt-5 max-w-lg text-balance font-heading text-[clamp(1.8rem,3.6vw,2.9rem)] leading-[1.12] text-charcoal">
            A studio built on patience,{" "}
            <span className="font-display italic text-rosegold">not poses.</span>
          </h2>

          <div className="mt-7 space-y-4 text-[14.5px] leading-relaxed text-charcoal/65">
            <p>
              Aurélia began in 2015 with one borrowed camera and a friend's wedding in the Aravalli
              hills. Aarav was filming; Meera was photographing. Somewhere between the haldi and the
              last song, we realised we were making the same film from two different angles.
            </p>
            <p>
              A decade and three hundred weddings later, the studio still works the same way. A
              small team, one long conversation before the wedding, and a single promise: nobody
              will ask you to look at the camera.
            </p>
            <p>
              We document the day as it happens — your father's hands, your best friend's laugh,
              the ninety quiet seconds before you walk in.
            </p>
          </div>

          <div className="mt-9 flex items-center gap-4 border-t border-charcoal/10 pt-6">
            <span className="h-px w-8 bg-gold" />
            <div>
              <p className="font-display text-xl italic text-charcoal">Aarav &amp; Meera Rathore</p>
              <p className="mt-1 text-[9px] uppercase tracking-luxe text-charcoal/45">
                Founders · Cinematography &amp; Photography
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}