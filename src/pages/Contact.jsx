import PageHeader from "@/components/site/PageHeader";
import StudioDetails from "@/components/contact/StudioDetails";
import InquiryForm from "@/components/contact/InquiryForm";
import MapSection from "@/components/contact/MapSection";
import Reveal from "@/components/site/Reveal";

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Check Date Availability & Book Your Shoot"
        subtitle="Tell us your date and venue below — or message us directly on WhatsApp. We answer every inquiry ourselves, usually the same day."
      />

      <section className="bg-ivory py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <StudioDetails />
          </Reveal>
          <Reveal delay={100}>
            <InquiryForm />
          </Reveal>
        </div>
      </section>

      <MapSection />
    </>
  );
}