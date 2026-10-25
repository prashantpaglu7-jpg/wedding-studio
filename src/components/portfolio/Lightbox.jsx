import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Image } from "@/components/ui/image";
import { studio } from "@/data/site";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index];

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  const shareLink = `https://wa.me/?text=${encodeURIComponent(
    `${item.caption} — ${studio.name}, ${studio.city}`
  )}`;

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col bg-charcoal/97 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <span className="text-[9.5px] uppercase tracking-luxe text-ivory/45">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close preview"
          className="grid h-11 w-11 place-items-center text-ivory/70 transition-colors hover:text-gold"
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-2 sm:px-16">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous"
          className="absolute left-1 z-10 grid h-11 w-11 place-items-center border border-ivory/20 text-ivory/70 transition-colors hover:border-gold hover:text-gold sm:left-6"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
        </button>

        <Image
          src={item.image}
          alt={item.alt}
          fittingType="fit"
          className="h-[62vh] w-full sm:h-[66vh]"
        />

        <button
          type="button"
          onClick={onNext}
          aria-label="Next"
          className="absolute right-1 z-10 grid h-11 w-11 place-items-center border border-ivory/20 text-ivory/70 transition-colors hover:border-gold hover:text-gold sm:right-6"
        >
          <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex flex-col gap-5 border-t border-ivory/10 px-5 py-6 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="text-[9px] uppercase tracking-luxe text-gold">{item.caption}</p>
          <h3 className="mt-2 font-heading text-xl text-ivory sm:text-2xl">{item.title}</h3>
          <p className="mt-1 text-[10px] uppercase tracking-wide-luxe text-ivory/45">
            {item.location}
          </p>
        </div>
        <a
          href={shareLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-sm border border-[#25D366]/50 px-5 text-[10px] uppercase tracking-wide-luxe text-[#25D366] transition-colors duration-300 hover:bg-[#25D366] hover:text-[#0b2416]"
        >
          <WhatsAppIcon className="h-4 w-4" /> Share via WhatsApp
        </a>
      </div>
    </div>
  );
}