"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";
import { CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_LINKS } from "@/lib/i18n/site";

type Props = { dict: Dictionary; locale: Locale };

type Fields = {
  name: string;
  email: string;
  company: string;
  inquiryType: string;
  budget: string;
  timeline: string;
  message: string;
  consent: boolean;
};

const EMPTY: Fields = {
  name: "",
  email: "",
  company: "",
  inquiryType: "",
  budget: "",
  timeline: "",
  message: "",
  consent: false,
};

const inputBase =
  "w-full rounded-lg border bg-at-section px-4 py-3 text-sm text-at-text-dark placeholder:text-at-text-muted/70 transition-colors focus:outline-none focus:ring-2 focus:ring-at-primary/30 focus:border-at-primary";

export function ContactSection({ dict, locale }: Props) {
  const c = dict.contact;
  const f = c.form;
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set = <K extends keyof Fields>(key: K, val: Fields[K]) => {
    setValues((v) => ({ ...v, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  function validate(): boolean {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!values.name.trim()) next.name = f.errRequired;
    if (!values.email.trim()) next.email = f.errRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = f.errEmail;
    if (!values.inquiryType) next.inquiryType = f.errRequired;
    if (!values.message.trim()) next.message = f.errRequired;
    if (!values.consent) next.consent = f.errConsent;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      // TODO(api): wire to /api/contact once the endpoint exists.
      // await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...values, locale }) });
      await new Promise((r) => setTimeout(r, 900)); // placeholder while API is pending
      setStatus("sent");
    } catch {
      setStatus("idle");
    }
  }

  const errorClass = (has: boolean) => (has ? "border-red-500 focus:border-red-500" : "border-at-border");

  if (status === "sent") {
    return (
      <section id="contact" className="flex justify-center bg-at-bg px-0">
        <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[100px]">
          <div className="w-full max-w-[720px] bg-at-bg-soft border border-at-border rounded-[32px] px-6 lg:px-16 py-16 flex flex-col items-center gap-6 text-center">
          <CheckCircle2 className="w-14 h-14 text-at-primary" strokeWidth={1.75} />
          <h2 className="font-[var(--font-montserrat)] text-at-primary text-3xl lg:text-4xl font-bold leading-none">
            {f.successTitle}
          </h2>
          <p className="text-at-text-dark text-base leading-[2] max-w-[520px] font-[var(--font-noto-sans-jp)]">
            {f.successMessage}
          </p>
          <button
            type="button"
            onClick={() => {
              setValues(EMPTY);
              setStatus("idle");
            }}
            className="mt-2 inline-flex items-center justify-between gap-3 bg-at-primary text-at-bg rounded-lg px-6 py-[15px] hover:bg-at-accent transition-colors"
          >
            <span className="text-sm font-bold tracking-[0.04em]">{f.sendAnother}</span>
          </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="flex justify-center bg-at-bg px-0">
      <div className="bg-at-section rounded-t-[60px] max-[991px]:rounded-t-[40px] w-full flex justify-center px-5 lg:px-[76px] py-[100px] max-[540px]:py-16">
        <div className="w-full max-w-[1288px] grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16">
          {/* Info panel */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="font-[var(--font-montserrat)] text-at-primary text-[34px] lg:text-[44px] font-bold leading-[1.15] tracking-[0.01em]">
                {c.heading}
              </h2>
              <p className="text-at-text-dark text-base leading-[2] tracking-[0.04em] font-[var(--font-noto-sans-jp)]">
                {c.description}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-at-primary text-base font-bold tracking-[0.04em]">{c.expectTitle}</h3>
              <ul className="flex flex-col gap-2.5">
                {c.expectItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-at-text-dark text-sm leading-[1.8] font-[var(--font-noto-sans-jp)]">
                    <CheckCircle2 className="w-5 h-5 text-at-pink shrink-0 mt-0.5" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 pt-2 border-t border-at-border">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 text-at-text-dark hover:text-at-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-at-primary shrink-0" strokeWidth={2} />
                <span className="text-sm tracking-[0.04em]">{CONTACT_EMAIL}</span>
              </a>
              <a
                href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-3 text-at-text-dark hover:text-at-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-at-primary shrink-0" strokeWidth={2} />
                <span className="text-sm tracking-[0.04em]">{CONTACT_PHONE}</span>
              </a>
              <div className="flex items-start gap-3 text-at-text-dark">
                <MapPin className="w-5 h-5 text-at-primary shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-sm leading-[1.8] tracking-[0.04em]">{dict.companyPage.map.address}</span>
              </div>
              <div className="flex items-center gap-3 text-at-text-dark">
                <Clock className="w-5 h-5 text-at-primary shrink-0" strokeWidth={2} />
                <span className="text-sm tracking-[0.04em]">{c.hours}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-at-text-muted text-xs font-bold tracking-[0.1em] uppercase">{c.followUs}</span>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-at-primary hover:text-at-accent transition-colors"
              >
                <span className="text-sm font-bold tracking-[0.04em]">LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-at-primary hover:text-at-accent transition-colors"
              >
                <span className="text-sm font-bold tracking-[0.04em]">Instagram</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} noValidate lang={locale} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label={f.name} required error={errors.name}>
                <input
                  type="text"
                  value={values.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder={f.namePlaceholder}
                  autoComplete="name"
                  className={`${inputBase} ${errorClass(!!errors.name)}`}
                />
              </Field>
              <Field label={f.email} required error={errors.email}>
                <input
                  type="email"
                  value={values.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder={f.emailPlaceholder}
                  autoComplete="email"
                  className={`${inputBase} ${errorClass(!!errors.email)}`}
                />
              </Field>
            </div>

            <Field label={f.company}>
              <input
                type="text"
                value={values.company}
                onChange={(e) => set("company", e.target.value)}
                placeholder={f.companyPlaceholder}
                autoComplete="organization"
                className={`${inputBase} border-at-border`}
              />
            </Field>

            <Field label={f.inquiryType} required error={errors.inquiryType}>
              <select
                value={values.inquiryType}
                onChange={(e) => set("inquiryType", e.target.value)}
                className={`${inputBase} ${errorClass(!!errors.inquiryType)} ${values.inquiryType ? "" : "text-at-text-muted/70"}`}
              >
                <option value="" disabled>{f.inquiryPlaceholder}</option>
                {f.inquiryOptions.map((o) => (
                  <option key={o} value={o} className="text-at-text-dark">{o}</option>
                ))}
              </select>
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label={f.budget}>
                <select
                  value={values.budget}
                  onChange={(e) => set("budget", e.target.value)}
                  className={`${inputBase} border-at-border ${values.budget ? "" : "text-at-text-muted/70"}`}
                >
                  <option value="" disabled>{f.budgetPlaceholder}</option>
                  {f.budgetOptions.map((o) => (
                    <option key={o} value={o} className="text-at-text-dark">{o}</option>
                  ))}
                </select>
              </Field>
              <Field label={f.timeline}>
                <select
                  value={values.timeline}
                  onChange={(e) => set("timeline", e.target.value)}
                  className={`${inputBase} border-at-border ${values.timeline ? "" : "text-at-text-muted/70"}`}
                >
                  <option value="" disabled>{f.timelinePlaceholder}</option>
                  {f.timelineOptions.map((o) => (
                    <option key={o} value={o} className="text-at-text-dark">{o}</option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label={f.message} required error={errors.message}>
              <textarea
                value={values.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder={f.messagePlaceholder}
                rows={5}
                className={`${inputBase} resize-y ${errorClass(!!errors.message)}`}
              />
            </Field>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={values.consent}
                onChange={(e) => set("consent", e.target.checked)}
                className="mt-0.5 w-5 h-5 shrink-0 rounded border-at-border accent-[#589507]"
              />
              <span className={`text-sm leading-[1.6] font-[var(--font-noto-sans-jp)] ${errors.consent ? "text-red-500" : "text-at-text-muted"}`}>
                {f.consent}
              </span>
            </label>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-between gap-3 bg-at-primary text-at-bg rounded-lg px-8 py-4 w-full sm:w-auto hover:bg-at-accent transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="text-sm font-bold tracking-[0.04em]">
                  {status === "sending" ? f.sending : f.submit}
                </span>
                {status === "sending" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" strokeWidth={2} />
                )}
              </button>
              <span className="flex items-center gap-1.5 text-at-text-muted text-xs">
                <ShieldCheck className="w-4 h-4" /> {f.requiredNote}
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold text-at-text-dark tracking-[0.02em]">
        {label}
        {required && <span className="text-at-pink ml-1" aria-hidden>*</span>}
      </label>
      {children}
      {error && <span className="text-xs text-red-500 font-[var(--font-noto-sans-jp)]">{error}</span>}
    </div>
  );
}
