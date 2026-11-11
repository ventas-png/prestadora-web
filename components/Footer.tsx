import Link from "next/link";
import { contact, dict, routes, whatsappUrl, type Lang } from "@/lib/content";
import { IconChat } from "./Icons";

export function Footer({ lang }: { lang: Lang }) {
  const t = dict[lang];
  return (
    <>
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-col">
            <strong className="footer-brand">{t.footer.company}</strong>
            <span>{t.contact.addressValue}</span>
          </div>
          <div className="footer-col">
            <strong>{t.nav.services}</strong>
            {t.home.services.map((s) => (
              <Link key={s.title} href={routes.services[lang]}>{s.title}</Link>
            ))}
          </div>
          <div className="footer-col">
            <strong>{t.footer.clients}</strong>
            <a href={contact.portal} target="_blank" rel="noopener">{t.nav.portal}</a>
            <Link href={routes.forms[lang]}>{t.nav.forms}</Link>
            <Link href={`${routes.about[lang]}#empleo`}>{t.nav.careers}</Link>
          </div>
          <div className="footer-col">
            <strong>{t.nav.contact}</strong>
            <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <span>{t.topbar.hours}</span>
          </div>
        </div>
        <div className="container footer-bottom">© {new Date().getFullYear()} {t.footer.company} {t.footer.rights}</div>
      </footer>
      <a className="wa-float" href={whatsappUrl(t.cta.whatsappMsg)} target="_blank" rel="noopener" aria-label={t.cta.whatsapp}>
        <IconChat size={28} />
      </a>
    </>
  );
}
