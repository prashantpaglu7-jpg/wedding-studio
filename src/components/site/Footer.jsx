import { Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks, studio } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-8">
            <p className="font-heading text-[17px] tracking-[0.3em] text-ivory">{studio.wordmark}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/55">
              A wedding photography and cinematography studio in Udaipur, filming candid love
              stories across India and beyond.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={studio.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center border border-ivory/15 text-ivory/70 transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href={studio.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="grid h-11 w-11 place-items-center border border-ivory/15 text-ivory/70 transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <Youtube className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[9px] uppercase tracking-luxe text-gold">Explore</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-ivory/60 transition-colors duration-300 hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[9px] uppercase tracking-luxe text-gold">The Studio</h3>
            <ul className="mt-5 space-y-3 text-sm text-ivory/60">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" strokeWidth={1.5} />
                <span>
                  {studio.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${studio.phoneRaw}`}
                  className="flex items-center gap-3 transition-colors hover:text-ivory"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold/70" strokeWidth={1.5} />
                  {studio.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${studio.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-ivory"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold/70" strokeWidth={1.5} />
                  {studio.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[9px] uppercase tracking-luxe text-gold">Studio Hours</h3>
            <ul className="mt-5 space-y-2.5 text-sm text-ivory/60">
              {studio.hours.map((slot) => (
                <li key={slot.days} className="flex justify-between gap-4">
                  <span>{slot.days}</span>
                  <span className="text-ivory/40">{slot.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-ivory/10 pt-5 font-display text-xl italic text-ivory/70">
              Now booking 2026 – 2027
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/10 pt-7 text-[10px] uppercase tracking-wide-luxe text-ivory/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {studio.name}. All rights reserved.
          </p>
          <p>Udaipur · Rajasthan · India</p>
        </div>
      </div>
    </footer>
  );
}