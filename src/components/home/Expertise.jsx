import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { expertise } from "@/data/site";
import Reveal from "@/components/site/Reveal";

export default function Expertise() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-3 text-[9.5px] uppercase tracking-luxe text-charcoal/45">
            <span className="h-px w-10 bg-gold" />
            What We Do
          </p>
          <h2 className="mt-5 text-balance font-heading text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.1] text-charcoal">
            Four ways we tell <span className="font-display italic text-rosegold">your story</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <Link to="/portfolio" className="group block">
                <div className="relative overflow-hidden bg-champagne">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                      fittingType="fill"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/5 to-transparent" />
                  </div>
                  <span className="absolute left-5 top-5 text-[9px] uppercase tracking-luxe text-ivory/60">
                    0{index + 1}
                  </span>
                  <span className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                    <span className="font-heading text-xl leading-tight text-ivory">
                      {item.title}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </span>
                </div>
                <p className="mt-4 text-[13.5px] leading-relaxed text-charcoal/55">{item.copy}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}