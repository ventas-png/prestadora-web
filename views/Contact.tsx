import { contact, dict, whatsappUrl, type Lang } from "@/lib/content";
import { PageHero, Shell } from "@/components/Shell";
import { ContactForm } from "@/components/ContactForm";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { IconChat } from "@/components/Icons";

export function Contact({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const c = t.contact;
  const rows = [
    { k: "WhatsApp", v: <a href={whatsappUrl(t.cta.whatsappMsg)} target="_blank" rel="noopener">{contact.phoneDisplay}</a> },
    { k: c.phone, v: <a href={contact.phoneHref}>{contact.phoneDisplay}</a> },
    { k: c.email, v: <a href={`mailto:${contact.email}`}>{contact.email}</a> },
    { k: c.address, v: c.addressValue },
    { k: c.hours, v: c.hoursValue },
  ];
  return (
    <Shell lang={lang} current="contact">
      <PageHero eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
      <section className="section pt-0">
        <div className="container contact-grid">
          <div className="sticky-col">
            <Stagger className="info">
              {rows.map((r) => (<StaggerItem key={r.k} className="info-row"><span className="info-k">{r.k}</span><span className="info-v">{r.v}</span></StaggerItem>))}
            </Stagger>
            <Reveal><a className="btn btn-primary mt" href={whatsappUrl(t.cta.whatsappMsg)} target="_blank" rel="noopener"><IconChat /> {t.cta.whatsapp}</a></Reveal>
          </div>
          <Reveal className="form-card glass-solid" y={40}>
            <h2 className="display-3 mb-sm">{c.formTitle}</h2>
            <ContactForm lang={lang} />
          </Reveal>
        </div>
        <div className="container">
          <Reveal><iframe className="map" src={contact.mapEmbed} title={c.address} loading="lazy" /></Reveal>
        </div>
      </section>
    </Shell>
  );
}
