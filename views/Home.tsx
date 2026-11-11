import Link from "next/link";
import { contact, dict, routes, whatsappUrl, type Lang } from "@/lib/content";
import { Shell } from "@/components/Shell";
import { IconChat, IconLock, IconShield, serviceIcons } from "@/components/Icons";

export function Home({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const h = t.home;
  return (
    <Shell lang={lang} current="home">
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="eyebrow">{h.eyebrow}</span>
            <h1>{h.title}</h1>
            <p className="lead">{h.subtitle}</p>
            <div className="btn-row">
              <a className="btn btn-primary" href={whatsappUrl(t.cta.whatsappMsg)} target="_blank" rel="noopener"><IconChat /> {t.cta.whatsapp}</a>
              <Link className="btn btn-light" href={routes.services[lang]}>{t.cta.services}</Link>
            </div>
            <div className="stats">
              {h.stats.map((s) => (
                <div key={s.value}><div className="stat-value">{s.value}</div><div className="stat-label">{s.label}</div></div>
              ))}
            </div>
          </div>
          <div className="hero-media">
            <img src="/img/inspector.jpg" alt="" />
            <div className="hero-badge">
              <div className="badge-icon"><IconShield /></div>
              <div><strong>{h.badgeTitle}</strong><br /><span>{h.badgeText}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{h.servicesEyebrow}</span>
            <h2>{h.servicesTitle}</h2>
          </div>
          <div className="cards">
            {h.services.map((s, i) => {
              const Icon = serviceIcons[i];
              return (
                <Link key={s.title} href={routes.services[lang]} className="card">
                  <div className="card-icon"><Icon /></div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container split">
          <div className="split-media"><img src="/img/reunion.jpg" alt="" /></div>
          <div className="split-text">
            <span className="eyebrow light">{h.whyEyebrow}</span>
            <h2>{h.whyTitle}</h2>
            <div className="why-grid">
              {h.why.map((w) => (<div key={w.title}><strong>{w.title}</strong><span>{w.text}</span></div>))}
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container portal-band">
          <div>
            <h2>{h.portalTitle}</h2>
            <p>{h.portalText}</p>
          </div>
          <a className="btn btn-navy" href={contact.portal} target="_blank" rel="noopener"><IconLock /> {t.nav.portal}</a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>{h.finalTitle}</h2>
              <p>{h.finalText}</p>
            </div>
            <div className="btn-row">
              <a className="btn btn-white" href={whatsappUrl(t.cta.quoteMsg)} target="_blank" rel="noopener">{t.cta.quote}</a>
              <a className="btn btn-ghost-white" href={contact.phoneHref}>{t.cta.call} {contact.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
