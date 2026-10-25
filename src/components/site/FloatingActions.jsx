import { Phone } from "lucide-react";
import { studio, whatsappLink } from "@/data/site";
import WhatsAppIcon from "./WhatsAppIcon";

const chatMessage = "Hi Aurélia! I'd love to know more about your wedding films and availability.";

export default function FloatingActions() {
  return (
    <>
      <a
        href={whatsappLink(chatMessage)}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Aurélia on WhatsApp"
        className="wa-pulse group fixed bottom-7 right-7 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_34px_-10px_rgba(37,211,102,0.85)] transition-transform duration-300 hover:scale-105 md:flex"
      >
        <WhatsAppIcon className="h-7 w-7" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-sm bg-charcoal px-3 py-2 text-[9px] uppercase tracking-wide-luxe text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </a>

      <div
        className="fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-2 border-t border-white/10 bg-charcoal/95 px-3 pt-2.5 backdrop-blur-lg md:hidden"
        style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href={whatsappLink(chatMessage)}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-[48px] flex-1 items-center justify-center gap-2.5 rounded-sm bg-[#25D366] text-[11px] font-medium uppercase tracking-wide-luxe text-[#0b2416]"
        >
          <WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp
        </a>
        <a
          href={`tel:${studio.phoneRaw}`}
          aria-label={`Call the studio on ${studio.phoneDisplay}`}
          className="grid min-h-[48px] w-12 place-items-center rounded-sm border border-ivory/25 text-ivory"
        >
          <Phone className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </div>
    </>
  );
}