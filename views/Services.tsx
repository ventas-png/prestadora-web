import { dict, whatsappUrl, type Lang } from "@/lib/content";
import { PageHero, Shell } from "@/components/Shell";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { IconChat, serviceIcons } from "@/components/Icons";

export function Services({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const s = t.services;
  return (
    <Shell lang={lang} current="services">
      <PageHero eyebrow={s.eyebrow} title={s.title} intro={s.intro} />
      <section className="section pt-0">
        <div className="container">
          <Reveal><h2 className="display-3 mb">{s.expertiseTitle}</h2></Reveal>
          <Stagger className="bento">
            {s.expertise.map((it, i) => {
              const Icon = serviceIcons[i % serviceIcons.length];
              return (
                <StaggerItem key={it.title} className={i === 0 ? "bento-wide" : undefined}>
                  <div className={`tile ${i === 0 ? "tile-navy" : ""}`}>
                    <div className="tile-top"><div className="card-icon"><Icon /></div><span className="tile-num">0{i + 1}</span></div>
                    <h3>{it.title}</h3>
                    <p>{it.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>
      <section className="section soft">
        <div className="container sticky-split reverse">
          <div className="sticky-col">
            <Reveal className="sticky-media"><img src="/img/herramientas.jpg" alt="" /></Reveal>
          </div>
          <div>
            <Reveal><h2 className="display-3 mb">{s.quickTitle}</h2></Reveal>
            <Stagger className="quick-list">
              {s.quick.map((q) => (
                <StaggerItem key={q.title} className="quick-item"><strong>{q.title}</strong><span>{q.text}</span></StaggerItem>
              ))}
            </Stagger>
            <Reveal><a className="btn btn-primary mt" href={whatsappUrl(t.cta.quoteMsg)} target="_blank" rel="noopener"><IconChat /> {t.cta.quote}</a></Reveal>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <Reveal><h2 className="display-3 mb center-text">{s.faqTitle}</h2></Reveal>
          <Stagger className="faq-list">
            {s.faq.map((f) => (
              <StaggerItem key={f.title}>
                <details className="faq"><summary>{f.title}<span className="faq-plus" aria-hidden /></summary><p>{f.text}</p></details>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </Shell>
  );
}
