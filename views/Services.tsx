import { dict, whatsappUrl, type Lang } from "@/lib/content";
import { PageHero, Shell } from "@/components/Shell";
import { IconChat, serviceIcons } from "@/components/Icons";

export function Services({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const s = t.services;
  return (
    <Shell lang={lang} current="services">
      <PageHero eyebrow={s.eyebrow} title={s.title} intro={s.intro} />
      <section className="section">
        <div className="container">
          <h2 className="h2-sm">{s.expertiseTitle}</h2>
          <div className="cards cards-3">
            {s.expertise.map((it, i) => {
              const Icon = serviceIcons[i % serviceIcons.length];
              return (
                <div key={it.title} className="card">
                  <div className="card-icon"><Icon /></div>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container split">
          <div className="split-text">
            <h2 className="h2-sm">{s.quickTitle}</h2>
            <ul className="quick-list">
              {s.quick.map((q) => (<li key={q.title}><strong>{q.title}</strong><span>{q.text}</span></li>))}
            </ul>
            <a className="btn btn-primary" href={whatsappUrl(t.cta.quoteMsg)} target="_blank" rel="noopener"><IconChat /> {t.cta.quote}</a>
          </div>
          <div className="split-media"><img src="/img/herramientas.jpg" alt="" /></div>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <h2 className="h2-sm">{s.faqTitle}</h2>
          {s.faq.map((f) => (
            <details key={f.title} className="faq"><summary>{f.title}</summary><p>{f.text}</p></details>
          ))}
        </div>
      </section>
    </Shell>
  );
}
