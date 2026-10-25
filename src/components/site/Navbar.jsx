import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, studio, whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";
import WhatsAppIcon from "./WhatsAppIcon";

function Wordmark() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label={`${studio.name} — home`}>
      <span className="grid h-10 w-10 place-items-center border border-gold/60 font-heading text-lg leading-none text-charcoal transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/5">
        A
      </span>
      <span className="leading-none">
        <span className="block font-heading text-[16px] tracking-[0.3em] text-charcoal">
          {studio.wordmark}
        </span>
        <span className="mt-1.5 block text-[8px] uppercase tracking-luxe text-charcoal/50">
          Wedding Films
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b border-charcoal/5 bg-ivory/80 backdrop-blur-xl transition-shadow duration-300",
          scrolled && "shadow-[0_1px_30px_-16px_rgba(28,28,28,0.45)]"
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[84px]">
          <Wordmark />

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  cn(
                    "group relative py-2 text-[10.5px] uppercase tracking-wide-luxe transition-colors duration-300",
                    isActive ? "text-charcoal" : "text-charcoal/55 hover:text-charcoal"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-sm bg-gold px-6 py-3 text-[10px] font-medium uppercase tracking-wide-luxe text-charcoal shadow-[0_0_26px_-6px_rgba(212,175,55,0.85)] transition-all duration-300 hover:bg-charcoal hover:text-ivory hover:shadow-[0_0_32px_-6px_rgba(28,28,28,0.6)] sm:inline-flex"
            >
              Book Consultation
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center text-charcoal transition-colors hover:text-gold lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-ivory/97 backdrop-blur-2xl transition-all duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!open}
      >
        <div className="flex h-[72px] items-center justify-between px-5">
          <Wordmark />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center text-charcoal"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-1 px-6" aria-label="Mobile">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                cn(
                  "flex items-baseline gap-4 border-b border-charcoal/8 py-5 font-heading text-3xl transition-colors duration-300",
                  isActive ? "text-charcoal" : "text-charcoal/55"
                )
              }
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="text-[9px] font-body uppercase tracking-luxe text-gold">
                0{i + 1}
              </span>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="space-y-3 px-6 pb-10">
          <a
            href={whatsappLink("Hi Aurélia! I'd like to check your availability for my wedding.")}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-sm bg-[#25D366] text-[11px] font-medium uppercase tracking-wide-luxe text-[#0b2416]"
          >
            <WhatsAppIcon className="h-4 w-4" /> Check Availability
          </a>
          <a
            href={`tel:${studio.phoneRaw}`}
            className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-sm border border-charcoal/20 text-[11px] uppercase tracking-wide-luxe text-charcoal"
          >
            <Phone className="h-4 w-4" strokeWidth={1.5} /> {studio.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}