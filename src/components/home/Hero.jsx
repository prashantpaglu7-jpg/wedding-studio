import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { images, whatsappLink } from "@/data/site";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-charcoal">
      <Image
        src={images.hero}
        alt="Bride and groom walking through a palace colonnade at golden hour"
        className="absolute inset-0 h-full w-full object-cover"
        fittingType="fill"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/25 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 md:pb-24">
        <p
          className="rise flex items-center gap-3 text-[9.5px] uppercase tracking-luxe text-ivory/70"
          style={{ animationDelay: "80ms" }}
        >
          <span className="h-px w-10 bg-gold" />
          Udaipur · Destination Wedding Studio
        </p>

        <h1
          className="rise mt-7 max-w-4xl text-balance font-heading text-[clamp(2.2rem,5.6vw,4.6rem)] leading-[1.04] text-ivory"
          style={{ animationDelay: "180ms" }}
        >
          Preserving Your Timeless Moments{" "}
          <span className="font-display italic text-gold/95">Through Cinematic Storytelling.</span>
        </h1>

        <p
          className="rise mt-7 max-w-xl text-[15px] leading-relaxed text-ivory/70 md:text-[17px]"
          style={{ animationDelay: "300ms" }}
        >
          Premier Wedding Photography &amp; Cinematography Studio specializing in Destination
          Weddings, Candid Films, and Pre-Wedding Tales.
        </p>

        <div
          className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: "420ms" }}
        >
          <Link
            to="/portfolio"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-sm bg-gold px-8 text-[10.5px] font-medium uppercase tracking-wide-luxe text-charcoal transition-all duration-300 hover:bg-ivory"
          >
            View Cinematic Films
          </Link>
          <a
            href={whatsappLink(
              "Hi Aurélia! I'd like to check your availability for my wedding date."
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-sm bg-[#25D366] px-8 text-[10.5px] font-medium uppercase tracking-wide-luxe text-[#0b2416] transition-all duration-300 hover:bg-[#1ebe5b]"
          >
            <WhatsAppIcon className="h-4 w-4" /> Check Availability on WhatsApp
          </a>
        </div>

        <div
          className="rise mt-14 flex items-center justify-between gap-6 border-t border-ivory/15 pt-5"
          style={{ animationDelay: "540ms" }}
        >
          <span className="text-[9px] uppercase tracking-luxe text-ivory/45">
            Scroll to explore
          </span>
          <span className="hidden text-[9px] uppercase tracking-luxe text-ivory/45 sm:block">
            Now booking 2026 – 2027
          </span>
        </div>
      </div>
    </section>
  );
}