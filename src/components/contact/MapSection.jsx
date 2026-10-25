import { ArrowUpRight, MapPin } from "lucide-react";
import { studio } from "@/data/site";
import Reveal from "@/components/site/Reveal";

export default function MapSection() {
  return (
    <section className="bg-champagne py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
        <Reveal>
          <p className="flex items-center gap-3 text-[9.5px] uppercase tracking-luxe text-charcoal/45">
            <span className="h-px w-10 bg-gold" />
            Find Us
          </p>
          <h2 className="mt-5 font-heading text-[clamp(1.7rem,3.2vw,2.4rem)] leading-tight text-charcoal">
            Near Jagdish Chowk, <span className="font-display italic text-rosegold">old Udaipur</span>
          </h2>
          <p className="mt-4 flex items-start gap-2.5 text-[14px] leading-relaxed text-charcoal/60">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rosegold" strokeWidth={1.5} />
            <span>{studio.address.join(", ")}</span>
          </p>
          <a
            href={studio.directions}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-sm bg-charcoal px-6 text-[10px] uppercase tracking-wide-luxe text-ivory transition-colors duration-300 hover:bg-gold hover:text-charcoal"
          >
            Get Directions
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
        </Reveal>

        <Reveal delay={100}>
          <div className="overflow-hidden border border-charcoal/10 bg-ivory">
            <iframe
              title="Map showing the Aurélia studio in Udaipur"
              src={studio.mapEmbed}
              className="h-[320px] w-full sm:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}