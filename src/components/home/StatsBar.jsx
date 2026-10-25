import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/site";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setCount(value);
      return;
    }
    let frame;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const duration = 1500;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(value * eased));
          if (progress < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className="font-heading text-[clamp(2.4rem,5vw,3.4rem)] leading-none text-charcoal">
      {count}
      <span className="text-gold">{suffix}</span>
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="border-y border-charcoal/8 bg-champagne">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-charcoal/10 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-3 py-9 text-center md:py-11"
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="text-[9px] uppercase tracking-luxe text-charcoal/50">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}