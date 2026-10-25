export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-champagne pb-14 pt-32 md:pb-20 md:pt-44">
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gold/25" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {eyebrow && (
          <p className="flex items-center gap-3 text-[9.5px] uppercase tracking-luxe text-charcoal/55">
            <span className="h-px w-10 bg-gold" />
            {eyebrow}
          </p>
        )}
        <h1 className="mt-6 max-w-4xl text-balance font-heading text-[clamp(2.1rem,5.2vw,4rem)] leading-[1.06] text-charcoal">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-charcoal/60 md:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}