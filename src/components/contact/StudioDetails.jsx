import { Clock, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { studio, whatsappLink } from "@/data/site";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";

function Row({ icon: Icon, children }) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center border border-charcoal/15 text-rosegold">
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </span>
      <div className="pt-1 text-[14px] leading-relaxed text-charcoal/70">{children}</div>
    </li>
  );
}

export default function StudioDetails() {
  return (
    <div className="lg:border-r lg:border-charcoal/10 lg:pr-14">
      <p className="flex items-center gap-3 text-[9.5px] uppercase tracking-luxe text-charcoal/45">
        <span className="h-px w-10 bg-gold" />
        The Studio
      </p>
      <h2 className="mt-5 font-heading text-2xl leading-tight text-charcoal md:text-[1.75rem]">
        Come see the albums in person
      </h2>

      <ul className="mt-8 space-y-5">
        <Row icon={MapPin}>
          <address className="not-italic">
            {studio.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </Row>
        <Row icon={Phone}>
          <a href={`tel:${studio.phoneRaw}`} className="transition-colors hover:text-charcoal">
            {studio.phoneDisplay}
          </a>
          <span className="mx-2 text-charcoal/25">·</span>
          <a
            href={whatsappLink("Hi Aurélia! I have a question about your wedding packages.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[#128C4B] transition-opacity hover:opacity-70"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" /> WhatsApp
          </a>
        </Row>
        <Row icon={Mail}>
          <a href={`mailto:${studio.email}`} className="transition-colors hover:text-charcoal">
            {studio.email}
          </a>
        </Row>
        <Row icon={Clock}>
          <div className="space-y-1">
            {studio.hours.map((slot) => (
              <p key={slot.days} className="flex flex-wrap gap-x-2">
                <span>{slot.days}</span>
                <span className="text-charcoal/40">· {slot.time}</span>
              </p>
            ))}
          </div>
        </Row>
      </ul>

      <div className="mt-9 border-t border-charcoal/10 pt-6">
        <p className="text-[9px] uppercase tracking-luxe text-charcoal/45">Follow the work</p>
        <div className="mt-4 flex gap-3">
          <a
            href={studio.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 border border-charcoal/15 px-4 text-[9.5px] uppercase tracking-wide-luxe text-charcoal/70 transition-colors duration-300 hover:border-charcoal hover:text-charcoal"
          >
            <Instagram className="h-3.5 w-3.5" strokeWidth={1.5} /> Instagram
          </a>
          <a
            href={studio.youtube}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 border border-charcoal/15 px-4 text-[9.5px] uppercase tracking-wide-luxe text-charcoal/70 transition-colors duration-300 hover:border-charcoal hover:text-charcoal"
          >
            <Youtube className="h-3.5 w-3.5" strokeWidth={1.5} /> YouTube
          </a>
        </div>
      </div>
    </div>
  );
}