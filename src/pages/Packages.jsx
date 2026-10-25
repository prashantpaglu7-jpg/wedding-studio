import { packages, whatsappLink } from "@/data/site";
import PageHeader from "@/components/site/PageHeader";
import PackageCard from "@/components/packages/PackageCard";
import Reveal from "@/components/site/Reveal";

export default function Packages() {
  return (
    <>
      <PageHeader
        eyebrow="Investment"
        title="Investment & Wedding Packages"
        subtitle="Tailored photography and film packages designed for modern couples — transparent deliverables, no hidden add-ons, and a team that answers every question before you commit."
      />

      <section className="bg-ivory py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <Reveal key={pkg.id} delay={index * 100} className="h-full">
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 grid gap-6 border-t border-charcoal/10 pt-10 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="font-heading text-xl text-charcoal">What every package includes</h2>
              <p className="mt-3 text-[13.5px] leading-relaxed text-charcoal/55">
                Licensed drone coverage where permitted, dual-card backups on every camera, a
                private online gallery for your family, and colour-graded delivery in both print-
                and screen-ready formats. Outstation travel, additional coverage days and album
                printing beyond the listed pages are quoted separately.
              </p>
            </div>
            <div className="md:pl-8 lg:pl-12">
              <h2 className="font-heading text-xl text-charcoal">Not sure which fits?</h2>
              <p className="mt-3 text-[13.5px] leading-relaxed text-charcoal/55">
                Tell us your date, venue and the number of events. We'll suggest the right coverage
                — and tell you honestly if something smaller would serve you better.
              </p>
              <a
                href={whatsappLink(
                  "Hi Aurélia! I'm not sure which package suits my wedding. Can you help me choose?"
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-[48px] items-center justify-center rounded-sm bg-charcoal px-6 text-[10px] uppercase tracking-wide-luxe text-ivory transition-colors duration-300 hover:bg-gold hover:text-charcoal"
              >
                Ask Us on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}