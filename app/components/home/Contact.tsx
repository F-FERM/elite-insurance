"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { DM_Sans, Manrope } from "next/font/google";
import { Toaster, toast } from "sonner";
import { ArrowUpRight, ChevronDown, Loader2 } from "lucide-react";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["800"] });
const TO_EMAIL = "info@eliteinsuranceservices.in";

/* ================= TYPES ================= */
interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const INITIAL_FORM: ContactFormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[0-9\s\-()]{7,20}$/;

/* Reads the error message sent back by the API route */
async function extractFetchError(res: Response, fallback: string): Promise<string> {
  try {
    const data = await res.json();
    const msg = data?.message;
    if (Array.isArray(msg)) return msg.length > 0 ? msg[0] : fallback;
    return msg || fallback;
  } catch {
    return fallback;
  }
}

/* Side padding: same as the other sections, 228px on very wide screens */
const PAD = "px-4 sm:px-8 lg:px-12 xl:px-20 2xl:px-[228px]";

const SERVICES = [
  "Motor Insurance",
  "Health & Life Insurance",
  "Travel & Personal Accident",
  "Business & Commercial",
  "Property & Home Insurance",
  "Policy Renewal Support",
];

const LABEL_SMALL = {
  fontWeight: 700,
  lineHeight: "17.6px",
  letterSpacing: "1.32px",
} as const;

/* Shared look for the input / select / textarea */
const FIELD =
  "block w-full rounded-[8px] border border-[#D9E1EC] bg-white px-4 text-[14px] text-[#101D35] placeholder:text-[#B5B5B5] transition-colors focus:border-[#ED3445] focus:outline-none focus:ring-2 focus:ring-[#ED3445]/20";

const LABEL =
  "block text-[13px] text-[#172849]";

export default function EliteContact() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ---- Validation ----
    if (!form.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!form.phone.trim()) {
      toast.error("Please enter your phone number");
      return;
    }
    if (!PHONE_REGEX.test(form.phone.trim())) {
      toast.error("Please enter a valid phone number");
      return;
    }
    if (form.email.trim() && !EMAIL_REGEX.test(form.email.trim())) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!form.service) {
      toast.error("Please select an insurance service");
      return;
    }

    const toastId = toast.loading("Sending your enquiry...");

    try {
      setSubmitting(true);

      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        service: form.service,
        message: form.message.trim(),
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errMsg = await extractFetchError(
          res,
          "Failed to send enquiry. Please try again."
        );
        toast.error(errMsg, { id: toastId });
        return;
      }

      toast.success("Enquiry sent! We’ll get back to you soon.", {
        id: toastId,
      });
      setForm(INITIAL_FORM);
    } catch {
      toast.error("Failed to send enquiry. Please try again.", { id: toastId });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" richColors closeButton />

    <section
      id="contact"
      className={`
        ${dmSans.className}
        w-full
        bg-[#F3F7FF]
        py-14
        sm:py-16
        xl:pb-[80px]
        xl:pt-[79px]
        ${PAD}
      `}
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1465px]
          items-start
          gap-10
          lg:grid-cols-2
          lg:gap-10
          xl:grid-cols-[minmax(0,1fr)_722px]
          xl:gap-12
        "
      >
        {/* ======================= LEFT: CONTACT INFO ======================= */}
        <div className="min-w-0">
          <div className="flex items-center gap-[10px]">
            <span aria-hidden="true" className="block h-[2px] w-6 bg-[#ED3445]" />
            <p
              className="text-[11px] uppercase text-[#ED3445]"
              style={{
                fontWeight: 700,
                lineHeight: "17.6px",
                letterSpacing: "1.76px",
              }}
            >
              Get in touch
            </p>
          </div>

          <h2
            className={`${manrope.className} mt-5 text-[clamp(30px,8vw,45px)]`}
            style={{
              fontWeight: 800,
              lineHeight: "1.28",
              letterSpacing: "-0.0373em",
            }}
          >
            <span className="text-[#172849]">Let’s talk </span>
            <span className="text-[#ED3445]">insurance.</span>
          </h2>

          <p
            className="mt-4 max-w-[530px] text-[15px] leading-[1.7] text-[#6A7486] sm:text-[16px] sm:leading-[28.8px]"
            style={{ fontWeight: 400 }}
          >
            For new policies, renewals or claim support, we’re here to help you
            find the right next step.
          </p>

          {/* Contact rows with thin dividers */}
          <dl className="mt-10 xl:mt-[52px]">
            <div className="border-b border-[#E3E9F3] pb-5">
              <dt
                className="text-[11px] uppercase text-[#ED3445]"
                style={LABEL_SMALL}
              >
                Call us directly
              </dt>
              <dd
                className="mt-[9px] text-[16px] text-[#101D35] sm:text-[18px]"
                style={{ fontWeight: 700, lineHeight: "27.2px" }}
              >
                <a
                  href="tel:+919747418084"
                  className="transition-colors hover:text-[#ED3445]"
                >
                  +91 9747 418 084
                </a>
                <span className="mx-3" aria-hidden="true">
                  /
                </span>
                <a
                  href="tel:+917306394737"
                  className="transition-colors hover:text-[#ED3445]"
                >
                  +91 7306 394 737
                </a>
              </dd>
            </div>

            <div className="border-b border-[#E3E9F3] py-5">
              <dt
                className="text-[11px] uppercase text-[#ED3445]"
                style={LABEL_SMALL}
              >
                Email address
              </dt>
              <dd
                className="mt-[9px] break-all text-[16px] text-[#101D35] sm:text-[18px]"
                style={{ fontWeight: 700, lineHeight: "27.2px" }}
              >
                <a
                  href={`mailto:${TO_EMAIL}`}
                  className="transition-colors hover:text-[#ED3445]"
                >
                  {TO_EMAIL}
                </a>
              </dd>
            </div>

            <div className="pt-5">
              <dt
                className="text-[11px] uppercase text-[#ED3445]"
                style={LABEL_SMALL}
              >
                Office location
              </dt>
              <dd
                className="mt-[9px] text-[15px] text-[#101D35] sm:text-[17px]"
                style={{ fontWeight: 700, lineHeight: "27.2px" }}
              >
                T2, HiLite Business Park, Calicut, Kerala, India
              </dd>
            </div>
          </dl>
        </div>

        {/* ======================= RIGHT: FORM ======================= */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="
            rounded-[18px]
            bg-[#EDF0F6]
            p-5
            shadow-[0_0_12px_0_#101D350A]
            sm:p-8
            xl:px-[44px]
            xl:py-[43px]
          "
        >
          <h3
            className={`${manrope.className} text-[22px] text-[#101D35] sm:text-[24px]`}
            style={{
              fontWeight: 800,
              lineHeight: "28.8px",
              letterSpacing: "-0.035em",
            }}
          >
            Request a consultation
          </h3>

          <div className="mt-5 space-y-4">
            <div>
              <label htmlFor="ec-name" className={LABEL} style={{ fontWeight: 700, lineHeight: "20.8px" }}>
                Your Full Name
              </label>
              <input
                id="ec-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                disabled={submitting}
                autoComplete="name"
                placeholder="e.g. Rahul Menon"
                className={`${FIELD} mt-2 h-12 py-[14px]`}
              />
            </div>

            <div>
              <label htmlFor="ec-phone" className={LABEL} style={{ fontWeight: 700, lineHeight: "20.8px" }}>
                Phone Number
              </label>
              <input
                id="ec-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                disabled={submitting}
                autoComplete="tel"
                placeholder="e.g. +91 98765 43210"
                className={`${FIELD} mt-2 h-12 py-[14px]`}
              />
            </div>

            <div>
              <label htmlFor="ec-email" className={LABEL} style={{ fontWeight: 700, lineHeight: "20.8px" }}>
                Email Address (Optional)
              </label>
              <input
                id="ec-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                disabled={submitting}
                autoComplete="email"
                placeholder="name@domain.com"
                className={`${FIELD} mt-2 h-12 py-[14px]`}
              />
            </div>

            <div>
              <label htmlFor="ec-service" className={LABEL} style={{ fontWeight: 700, lineHeight: "20.8px" }}>
                Insurance Service Needed
              </label>
              <div className="relative mt-2">
                <select
                  id="ec-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  disabled={submitting}
                  className={`${FIELD} h-12 cursor-pointer appearance-none py-[14px] pr-10`}
                >
                  <option value="" disabled>
                    Select insurance service
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#ED3445]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="ec-message" className={LABEL} style={{ fontWeight: 700, lineHeight: "20.8px" }}>
                Message or Query
              </label>
              <textarea
                id="ec-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                disabled={submitting}
                rows={4}
                placeholder="Describe your vehicle type, family requirements, or current policy details…"
                className={`${FIELD} mt-2 min-h-[109px] resize-none py-[14px] leading-[1.3]`}
              />
            </div>
          </div>

          {/* Button — same hover as the other buttons: colour only, size stays */}
          <button
            type="submit"
            disabled={submitting}
            className="
              mt-5
              flex
              h-[47px]
              w-full
              items-center
              justify-center
              gap-[9px]
              rounded-[8px]
              border
              border-[#ED3445]
              bg-[#ED3445]
              px-6
              text-[14px]
              text-white
              shadow-[0_6px_18px_0_#ED344540]
              transition-colors
              duration-300
              ease-out
              hover:bg-[#771922]
              focus-visible:bg-[#771922]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#ED3445]/40
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#EDF0F6]
              disabled:cursor-not-allowed
              disabled:opacity-70
            "
            style={{ fontWeight: 700, lineHeight: "22.4px" }}
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                Sending...
              </>
            ) : (
              <>
                Send Enquiry
                <ArrowUpRight size={14} aria-hidden="true" />
              </>
            )}
          </button>

          <p
            className="mt-3 text-center text-[13px] text-[#6A7486] sm:text-[14px]"
            style={{ fontWeight: 400, lineHeight: "19.2px" }}
          >
            Your details go straight to our team. We’ll get back to you as soon
            as possible.
          </p>
        </form>
      </div>
    </section>
    </>
  );
}