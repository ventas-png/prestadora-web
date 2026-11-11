import { contact, dict, type Lang } from "@/lib/content";
import { PageHero, Shell } from "@/components/Shell";

export function About({ lang }: { lang: Lang }) {
  const a = dict[lang].about;
  return (
    <Shell lang={lang} current="about">
      <PageHero eyebrow={a.eyebrow} title={a.title} intro={a.intro} />
      <section className="section">
        <div className="container cards cards-2">
          <div className="card"><h3>{a.missionTitle}</h3><p>{a.mission}</p></div>
          <div className="card"><h3>{a.visionTitle}</h3><p>{a.vision}</p></div>
        </div>
        <div className="container">
          <h2 className="h2-sm">{a.valuesTitle}</h2>
          <ul className="chips">{a.values.map((v) => <li key={v}>{v}</li>)}</ul>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <h2 className="h2-sm">{a.historyTitle}</h2>
          <ol className="timeline">
            {a.history.map((h) => (<li key={h.title}><span className="year">{h.title}</span><p>{h.text}</p></li>))}
          </ol>
        </div>
      </section>
      <section className="section" id="empleo">
        <div className="container portal-band">
          <div><h2>{a.careersTitle}</h2><p>{a.careersText}</p></div>
          <a className="btn btn-navy" href={`mailto:${contact.email}?subject=CV`}>{a.careersCta}</a>
        </div>
      </section>
    </Shell>
  );
}
