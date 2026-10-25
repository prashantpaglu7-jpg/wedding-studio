import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Image } from "@/components/ui/image";
import { images, whatsappLink } from "@/data/site";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";

export default function FilmModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Featured film"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 grid h-11 w-11 place-items-center text-ivory/70 transition-colors hover:text-gold"
      >
        <X className="h-5 w-5" strokeWidth={1.5} />
      </button>

      <div
        className="w-full max-w-3xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
          <Image
            src={images.filmPoster}
            alt="Silhouetted couple on a marble terrace at dusk"
            className="h-full w-full object-cover opacity-80"
            fittingType="fill"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="text-[9px] uppercase tracking-luxe text-gold">Private Screening</p>
            <h2 className="mt-3 font-heading text-2xl text-ivory sm:text-3xl">
              A Palace Wedding, Told in Light
            </h2>
            <p className="mt-2 text-[10px] uppercase tracking-wide-luxe text-ivory/45">
              City Palace, Udaipur · 4 min · 2025
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-ivory/60">
          Our highlight reels live in a private vault, out of respect for the couples who trust us
          with them. Send us a message and we'll share the password to this film — and a few more
          like it.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink(
              "Hi Aurélia! Could you share the password to your featured film, 'A Palace Wedding, Told in Light'?"
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[50px] flex-1 items-center justify-center gap-2.5 rounded-sm bg-[#25D366] px-6 text-[10.5px] font-medium uppercase tracking-wide-luxe text-[#0b2416] transition-colors duration-300 hover:bg-[#1ebe5b]"
          >
            <WhatsAppIcon className="h-4 w-4" /> Request the Full Film
          </a>
          <Link
            to="/portfolio"
            onClick={onClose}
            className="inline-flex min-h-[50px] items-center justify-center rounded-sm border border-ivory/25 px-6 text-[10.5px] uppercase tracking-wide-luxe text-ivory transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            Explore the Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}