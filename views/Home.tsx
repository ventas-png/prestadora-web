import Link from "next/link";
import { contact, dict, routes, whatsappUrl, type Lang } from "@/lib/content";
import { Shell } from "@/components/Shell";
import { FloatPanel, HeroStage, ParallaxImage, Reveal, StackCards, Stagger, StaggerItem } from "@/components/motion";
import { IconArrow, IconChat, IconClock, IconLock, IconPhone, IconShield, serviceIcons } from "@/components/Icons";

export function Home({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const h = t.home;
  return (
    <Shell lang={lang} current="home">
      <section className="hero">
        <div className="aurora" aria-hidden />
        <div className="container center hero-copy">
          <Reveal><span className="eyebrow">{h.eyebrow}</span></Reveal>
          <Reveal delay={0.08}><h1 className="display hero-title">{h.title}</h1></Reveal>
          <Reveal delay={0.16}><p className="lead center-text">{h.subtitle}</p></Reveal>
          <Reveal delay={0.24} className="btn-row center-row">
            <a className="btn btn-primary" href={whatsappUrl(t.cta.whatsappMsg)} target="_blank" rel="noopener"><IconChat /> {t.cta.whatsapp}</a>
            <Link className="btn btn-link" href={routes.services[lang]}>{t.cta.services} <IconArrow /></Link>
          </Reveal>
        </div>
        <div className="container wide">
          <HeroStage src="/img/reunion.jpg">
            <FloatPanel className="float float-a" speed={36} delay={0.3}>
              <div className="badge-icon"><IconShield /></div>
              <div><strong>{h.badgeTitle}</strong><span>{h.badgeText}</span></div>
            </FloatPanel>
            <FloatPanel className="float float-b" speed={60} delay={0.45}>
              <div className="stat-value">{h.stats[0].value}</div>
              <div className="stat-label">{h.stats[0].label}</div>
            </FloatPanel>
            <FloatPanel className="float float-c" speed={24} delay={0.6}>
              <div className="badge-icon"><IconClock /></div>
              <div><strong>{h.stats[1].value}</strong><span>{h.stats[1].label}</span></div>
            </FloatPanel>
          </HeroStage>
        </div>
      </section>

      <section className="section">
        <div className="container sticky-split">
          <div className="sticky-col">
            <Reveal><span className="eyebrow">{h.servicesEyebrow}</span></Reveal>
            <Reveal delay={0.06}><h2 className="display-2">{h.servicesTitle}</h2></Reveal>
            <Reveal delay={0.12}>
              <Link className="btn btn-link" href={routes.services[lang]}>{t.cta.services} <IconArrow /></Link>
            </Reveal>
          </div>
          <Stagger className="service-list" gap={0.1}>
            {h.services.map((s, i) => {
              const Icon = serviceIcons[i];
              return (
                <StaggerItem key={s.title}>
                  <Link href={routes.services[lang]} className="tile">
                    <div className="tile-top">
                      <div className="card-icon"><Icon /></div>
                      <span className="tile-num">0{i + 1}</span>
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <span className="tile-more">{t.cta.services} <IconArrow size={16} /></span>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="center section-head-c">
            <Reveal><span className="eyebrow light">{h.whyEyebrow}</span></Reveal>
            <Reveal delay={0.06}><h2 className="display-2">{h.whyTitle}</h2></Reveal>
          </div>
          <StackCards items={h.why.map((w, i) => ({ ...w, kicker: `0${i + 1}` }))} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="portal-stage">
            <ParallaxImage src="/img/electricidad.jpg" className="portal-img" />
            <Reveal className="portal-card glass" y={40}>
              <div className="card-icon"><IconLock size={24} /></div>
              <h2>{h.portalTitle}</h2>
              <p>{h.portalText}</p>
              <a className="btn btn-dark" href={contact.portal} target="_blank" rel="noopener">{t.nav.portal} <IconArrow /></a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <Reveal className="cta-panel" y={48}>
            <div className="cta-glow" aria-hidden />
            <h2 className="display-2">{h.finalTitle}</h2>
            <p>{h.finalText}</p>
            <div className="btn-row center-row">
              <a className="btn btn-primary" href={whatsappUrl(t.cta.quoteMsg)} target="_blank" rel="noopener"><IconChat /> {t.cta.quote}</a>
              <a className="btn btn-ghost-white" href={contact.phoneHref}><IconPhone /> {t.cta.call} {contact.phoneDisplay}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </Shell>
  );
}
