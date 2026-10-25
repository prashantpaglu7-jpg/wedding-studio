import { Link } from "react-router-dom";
import { whatsappLink } from "@/data/site";
import Reveal from "@/components/site/Reveal";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";

export default function ClosingCta() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="relative overflow-hidden border border-charcoal/10 bg-champagne px-6 py-14 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <p className="relative text-[9.5px] uppercase tracking-luxe text-charcoal/45">
            Your Date
          </p>
          <h2 className="relative mx-auto mt-6 max-w-2xl text-balance font-heading text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.1] text-charcoal">
            We take only a handful of weddings{" "}
            <span className="font-display italic text-rosegold">each season.</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-charcoal/60">
            Send us your date and venue — we'll confirm availability within a day and hold it for
            three.
          </p>
          <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink(
                "Hi Aurélia! My wedding date is ____ at ____. Could you check availability?"
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-sm bg-[#25D366] px-8 text-[10.5px] font-medium uppercase tracking-wide-luxe text-[#0b2416] transition-colors duration-300 hover:bg-[#1ebe5b]"
            >
              <WhatsAppIcon className="h-4 w-4" /> Check Availability
            </a>
            <Link
              to="/packages"
              className="inline-flex min-h-[52px] items-center justify-center rounded-sm border border-charcoal/25 px-8 text-[10.5px] uppercase tracking-wide-luxe text-charcoal transition-colors duration-300 hover:border-charcoal hover:bg-charcoal hover:text-ivory"
            >
              View Packages
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}