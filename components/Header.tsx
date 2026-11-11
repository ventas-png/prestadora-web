import Link from "next/link";
import { contact, dict, routes, type Lang, type RouteKey } from "@/lib/content";
import { IconLock, IconMenu } from "./Icons";

export function Header({ lang, current }: { lang: Lang; current: RouteKey }) {
  const t = dict[lang];
  const links: RouteKey[] = ["home", "services", "about", "contact"];
  const nav = links.map((k) => (
    <Link key={k} href={routes[k][lang]} className={k === current ? "nav-link active" : "nav-link"} aria-current={k === current ? "page" : undefined}>
      {t.nav[k]}
    </Link>
  ));
  const other: Lang = lang === "es" ? "en" : "es";
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>{t.topbar.hours}</span>
          <div className="topbar-links">
            <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="container header-inner">
          <Link href={routes.home[lang]} className="brand">
            <img src="/img/logo.png" alt="" width={56} height={56} />
            <span>Prestadora de<br />Servicios Básicos</span>
          </Link>
          <nav className="nav-desktop" aria-label="Principal">{nav}</nav>
          <div className="header-actions">
            <div className="lang" role="group" aria-label={t.langSwitch}>
              <Link href={routes[current].es} className={lang === "es" ? "on" : ""} hrefLang="es" lang="es">ES</Link>
              <Link href={routes[current].en} className={lang === "en" ? "on" : ""} hrefLang="en" lang="en">EN</Link>
            </div>
            <a href={contact.portal} className="btn btn-outline btn-sm portal" target="_blank" rel="noopener">
              <IconLock /> <span>{t.nav.portal}</span>
            </a>
            <details className="nav-mobile">
              <summary aria-label="Menú"><IconMenu /></summary>
              <nav aria-label="Móvil">{nav}<Link href={routes[current][other]} className="nav-link">{other.toUpperCase()}</Link></nav>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
