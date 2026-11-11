"use client";
import { useState, type FormEvent } from "react";
import { dict, whatsappUrl, type Lang } from "@/lib/content";

export function ContactForm({ lang }: { lang: Lang }) {
  const c = dict[lang].contact;
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const msg = [
      `${c.name}: ${d.get("name")}`,
      `${c.phoneField}: ${d.get("phone")}`,
      `${c.service}: ${d.get("service")}`,
      `${d.get("message")}`,
    ].join("\n");
    window.open(whatsappUrl(msg), "_blank", "noopener");
    setSent(true);
  }
  return (
    <form className="form" onSubmit={onSubmit}>
      <label>{c.name}<input name="name" required autoComplete="name" /></label>
      <label>{c.phoneField}<input name="phone" type="tel" required autoComplete="tel" /></label>
      <label>{c.service}
        <select name="service">{c.serviceOptions.map((o) => <option key={o}>{o}</option>)}</select>
      </label>
      <label>{c.message}<textarea name="message" rows={4} required /></label>
      <button className="btn btn-primary" type="submit">{c.send}</button>
      <p className="form-note" aria-live="polite">{sent ? "✓ " : ""}{c.formNote}</p>
    </form>
  );
}
