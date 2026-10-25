import { Check } from "lucide-react";
import { whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";

export default function PackageCard({ pkg }) {
  const featured = pkg.featured;
  const message = `Hello Aurélia! I'd like to book the ${pkg.name} package (${pkg.price}). Could you share availability for my wedding date?`;

  return (
    <article
      className={cn(
        "relative flex h-full flex-col p-7 transition-transform duration-500 md:p-9",
        featured
          ? "bg-charcoal text-ivory shadow-[0_36px_70px_-40px_rgba(28,28,28,0.65)]"
          : "border border-charcoal/12 bg-champagne text-charcoal hover:-translate-y-1"
      )}
    >
      {featured && (
        <span className="absolute right-0 top-0 bg-gold px-4 py-2 text-[8px] uppercase tracking-luxe text-charcoal">
          Most Chosen
        </span>
      )}

      <p
        className={cn(
          "text-[9px] uppercase tracking-luxe",
          featured ? "text-gold" : "text-charcoal/45"
        )}
      >
        {pkg.priceNote}
      </p>

      <h2 className="mt-4 font-heading text-2xl leading-tight">{pkg.name}</h2>
      <p
        className={cn(
          "mt-2 font-display text-lg italic",
          featured ? "text-ivory/55" : "text-charcoal/50"
        )}
      >
        {pkg.suitedFor}
      </p>

      <p className="mt-7 font-heading text-[clamp(2rem,3.5vw,2.6rem)] leading-none">
        {pkg.price}
      </p>

      <div className={cn("my-7 h-px w-full", featured ? "bg-ivory/15" : "bg-charcoal/12")} />

      <ul className="flex-1 space-y-3">
        {pkg.deliverables.map((deliverable) => (
          <li key={deliverable} className="flex gap-3 text-[13.5px] leading-relaxed">
            <Check
              className={cn("mt-0.5 h-3.5 w-3.5 shrink-0", featured ? "text-gold" : "text-rosegold")}
              strokeWidth={2}
            />
            <span className={featured ? "text-ivory/70" : "text-charcoal/65"}>{deliverable}</span>
          </li>
        ))}
      </ul>

      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "mt-9 inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-sm px-2 text-center text-[10px] font-medium uppercase tracking-wide-luxe transition-colors duration-300",
          featured
            ? "bg-gold text-charcoal hover:bg-ivory"
            : "border border-charcoal/25 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory"
        )}
      >
        <WhatsAppIcon className="h-4 w-4 shrink-0" />
        Book This Package via WhatsApp
      </a>
    </article>
  );
}