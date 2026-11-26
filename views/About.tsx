import { contact, dict, type Lang } from "@/lib/content";
import { PageHero, Shell } from "@/components/Shell";
import { ParallaxImage, Reveal, Stagger, StaggerItem, TimelineLine } from "@/components/motion";
import { IconArrow } from "@/components/Icons";

export function About({ lang }: { lang: Lang }) {
  const a = dict[lang].about;
  return (
    <Shell lang={lang} current="about">
      <PageHero eyebrow={a.eyebrow} title={a.title} intro={a.intro} />
      <section className="section pt-0">
        <div className="container">
          <ParallaxImage src="/img/inspector.jpg" className="about-img" />
          <Stagger className="mv-grid">
            <StaggerItem><div className="tile"><span className="tile-num">{a.missionTitle}</span><p className="big-p">{a.mission}</p></div></StaggerItem>
            <StaggerItem><div className="tile"><span className="tile-num">{a.visionTitle}</span><p className="big-p">{a.vision}</p></div></StaggerItem>
          </Stagger>
        </div>
      </section>
      <section className="section soft">
        <div className="container center">
          <Reveal><h2 className="display-3 mb">{a.valuesTitle}</h2></Reveal>
          <Stagger className="chips" gap={0.06}>{a.values.map((v) => <StaggerItem key={v} className="chip">{v}</StaggerItem>)}</Stagger>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <Reveal><h2 className="display-3 mb center-text">{a.historyTitle}</h2></Reveal>
          <div className="timeline">
            <TimelineLine />
            {a.history.map((h) => (
              <Reveal key={h.title} className="tl-item">
                <span className="tl-dot" aria-hidden />
                <span className="year">{h.title}</span>
                <p>{h.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section pt-0" id="empleo">
        <div className="container">
          <Reveal className="cta-panel" y={40}>
            <div className="cta-glow" aria-hidden />
            <h2 className="display-2">{a.careersTitle}</h2>
            <p>{a.careersText}</p>
            <div className="btn-row center-row">
              <a className="btn btn-light" href={`mailto:${contact.email}?subject=CV`}>{a.careersCta} <IconArrow /></a>
            </div>
          </Reveal>
        </div>
      </section>
    </Shell>
  );
}
