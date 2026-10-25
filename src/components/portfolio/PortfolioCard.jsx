import { Play } from "lucide-react";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

export default function PortfolioCard({ item, onOpen }) {
  const isPortrait = item.orientation === "portrait";

  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      aria-label={`Open ${item.title}`}
      className="group relative mb-5 block w-full break-inside-avoid overflow-hidden bg-champagne text-left"
    >
      <div className={cn("relative w-full", isPortrait ? "aspect-[3/4]" : "aspect-[3/2]")}>
        <Image
          src={item.image}
          alt={item.alt}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {item.type === "film" && (
        <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-ivory/30 bg-charcoal/40 px-3 py-1.5 text-[8px] uppercase tracking-luxe text-ivory backdrop-blur-sm">
          <Play className="h-2.5 w-2.5 fill-current" strokeWidth={0} />
          Film
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="block h-px w-6 bg-gold transition-all duration-500 group-hover:w-12" />
        <h3 className="mt-3 font-heading text-lg leading-snug text-ivory">{item.title}</h3>
        <p className="mt-1 text-[9px] uppercase tracking-wide-luxe text-ivory/60">
          {item.location}
        </p>
      </div>
    </button>
  );
}