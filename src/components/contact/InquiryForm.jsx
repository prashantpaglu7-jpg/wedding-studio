import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { packages, whatsappLink } from "@/data/site";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";

const emptyForm = { name: "", date: "", location: "", pack: "" };

function Field({ label, htmlFor, error, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-[9px] uppercase tracking-luxe text-charcoal/45"
      >
        {label}
      </label>
      <div className="mt-1">{children}</div>
      {error && <p className="mt-1.5 text-[11px] text-destructive">{error}</p>}
    </div>
  );
}

const inputClass =
  "w-full border-b border-charcoal/20 bg-transparent py-3 text-[15px] text-charcoal outline-none transition-colors duration-300 placeholder:text-charcoal/30 focus:border-gold";

export default function InquiryForm() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sentLink, setSentLink] = useState("");

  const update = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please tell us your name.";
    if (!form.date) nextErrors.date = "Please choose your wedding date.";
    if (!form.location.trim()) nextErrors.location = "Please add your venue or city.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const prettyDate = new Date(`${form.date}T00:00:00`).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const message = [
      "Hello Aurélia! I'd like to check availability for my wedding.",
      "",
      `Name: ${form.name.trim()}`,
      `Wedding date: ${prettyDate}`,
      `Location / venue: ${form.location.trim()}`,
      `Package: ${form.pack || "Not sure yet"}`,
    ].join("\n");

    const url = whatsappLink(message);
    setSentLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="border border-charcoal/10 bg-champagne p-6 sm:p-9">
      <p className="flex items-center gap-3 text-[9.5px] uppercase tracking-luxe text-charcoal/45">
        <span className="h-px w-10 bg-gold" />
        Date Checker
      </p>
      <h2 className="mt-4 font-heading text-2xl leading-tight text-charcoal md:text-[1.75rem]">
        Wedding Date Inquiry
      </h2>
      <p className="mt-2 text-[13px] leading-relaxed text-charcoal/55">
        Four fields, one message. We reply on WhatsApp within a day.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Your name" htmlFor="inq-name" error={errors.name}>
            <input
              id="inq-name"
              name="name"
              type="text"
              value={form.name}
              onChange={update("name")}
              placeholder="Ananya Sharma"
              aria-invalid={Boolean(errors.name)}
              className={inputClass}
            />
          </Field>

          <Field label="Wedding date" htmlFor="inq-date" error={errors.date}>
            <input
              id="inq-date"
              name="date"
              type="date"
              value={form.date}
              onChange={update("date")}
              aria-invalid={Boolean(errors.date)}
              className={inputClass}
            />
          </Field>
        </div>

        <Field label="Location / venue" htmlFor="inq-location" error={errors.location}>
          <input
            id="inq-location"
            name="location"
            type="text"
            value={form.location}
            onChange={update("location")}
            placeholder="City Palace, Udaipur"
            aria-invalid={Boolean(errors.location)}
            className={inputClass}
          />
        </Field>

        <Field label="Selected package" htmlFor="inq-package">
          <div className="relative">
            <select
              id="inq-package"
              name="package"
              value={form.pack}
              onChange={update("pack")}
              className={`${inputClass} appearance-none pr-8`}
            >
              <option value="">Not sure yet</option>
              {packages.map((pkg) => (
                <option key={pkg.id} value={pkg.name}>
                  {pkg.name} — {pkg.price}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40"
              strokeWidth={1.5}
            />
          </div>
        </Field>

        <button
          type="submit"
          className="inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-sm bg-charcoal px-6 text-[10.5px] font-medium uppercase tracking-wide-luxe text-ivory transition-colors duration-300 hover:bg-gold hover:text-charcoal"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Send Inquiry via WhatsApp
        </button>
      </form>

      {sentLink ? (
        <p className="mt-4 border-l-2 border-gold bg-ivory/70 px-4 py-3 text-[12.5px] leading-relaxed text-charcoal/70">
          WhatsApp should have opened with your inquiry.{" "}
          <a href={sentLink} target="_blank" rel="noreferrer" className="underline decoration-gold underline-offset-2">
            Tap here
          </a>{" "}
          if it didn't.
        </p>
      ) : (
        <p className="mt-4 text-[11px] leading-relaxed text-charcoal/40">
          Your details stay between us — no mailing lists, no calls unless you ask.
        </p>
      )}
    </div>
  );
}