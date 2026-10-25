import { Aperture, Camera, Lightbulb, Mic, Plane, Video } from "lucide-react";
import { gear } from "@/data/site";
import Reveal from "@/components/site/Reveal";

const icons = {
  camera: Camera,
  aperture: Aperture,
  plane: Plane,
  lightbulb: Lightbulb,
  video: Video,
  mic: Mic,
};

export default function GearGrid() {
  return (
    <section className="border-t border-charcoal/8 bg-champagne py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-3 text-[9.5px] uppercase tracking-luxe text-charcoal/45">
            <span className="h-px w-10 bg-gold" />
            Our Gear
          </p>
          <h2 className="mt-5 text-balance font-heading text-[clamp(1.8rem,3.6vw,2.9rem)] leading-[1.12] text-charcoal">
            Equipment &amp; Tech <span className="font-display italic text-rosegold">Showcase</span>
          </h2>
          <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-charcoal/60">
            Gear doesn't make a film. But it is the reason we never miss the moment — and the reason
            your film still looks like this ten years from now.
          </p>
        </Reveal>

        <div className="mt-11 grid gap-px overflow-hidden border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
          {gear.map((item, index) => {
            const Icon = icons[item.icon] ?? Camera;
            return (
              <Reveal key={item.title} delay={index * 70}>
                <div className="group h-full bg-champagne p-7 transition-colors duration-300 hover:bg-ivory">
                  <Icon
                    className="h-6 w-6 text-rosegold transition-colors duration-300 group-hover:text-gold"
                    strokeWidth={1.2}
                  />
                  <h3 className="mt-5 font-heading text-lg text-charcoal">{item.title}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-charcoal/55">
                    {item.copy}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}