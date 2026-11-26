"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { contact, dict, routes, type Lang, type RouteKey } from "@/lib/content";
import { IconClose, IconLock, IconMenu } from "./Icons";

export function Header({ lang, current }: { lang: Lang; current: RouteKey }) {
  const t = dict[lang];
  const links: RouteKey[] = ["home", "services", "about", "contact"];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  const lang2 = (
    <div className="lang" role="group" aria-label={t.langSwitch}>
      <Link href={routes[current].es} className={lang === "es" ? "on" : ""} hrefLang="es" lang="es">ES</Link>
      <Link href={routes[current].en} className={lang === "en" ? "on" : ""} hrefLang="en" lang="en">EN</Link>
    </div>
  );

  return (
    <header className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-bar glass">
        <Link href={routes.home[lang]} className="brand" onClick={() => setOpen(false)}>
          <img src="/img/logo.png" alt="" width={40} height={40} />
          <span>Prestadora de Servicios Básicos</span>
        </Link>
        <nav className="nav-desktop" aria-label="Principal">
          {links.map((k) => (
            <Link key={k} href={routes[k][lang]} className={k === current ? "nav-link active" : "nav-link"} aria-current={k === current ? "page" : undefined}>
              {t.nav[k]}
              {k === current && <motion.span layoutId="nav-dot" className="nav-dot" />}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          {lang2}
          <a href={contact.portal} className="btn btn-dark btn-sm portal" target="_blank" rel="noopener">
            <IconLock size={16} /> <span>{t.nav.portal}</span>
          </a>
          <button className="menu-btn" aria-label="Menú" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav-sheet glass"
            aria-label="Móvil"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map((k, i) => (
              <motion.div key={k} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i + 0.05 }}>
                <Link href={routes[k][lang]} className={k === current ? "sheet-link active" : "sheet-link"} onClick={() => setOpen(false)}>
                  {t.nav[k]}
                </Link>
              </motion.div>
            ))}
            <div className="sheet-foot">
              {lang2}
              <a href={contact.portal} className="btn btn-dark btn-sm" target="_blank" rel="noopener"><IconLock size={16} /> {t.nav.portal}</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
