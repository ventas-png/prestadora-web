import { contact, dict, whatsappUrl, type Lang } from "@/lib/content";
import { PageHero, Shell } from "@/components/Shell";
import { ContactForm } from "@/components/ContactForm";
import { IconChat } from "@/components/Icons";

export function Contact({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const c = t.contact;
  return (
    <Shell lang={lang} current="contact">
      <PageHero eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
      <section className="section">
        <div className="container split top">
          <div className="split-text">
            <dl className="info">
              <div><dt>WhatsApp</dt><dd><a href={whatsappUrl(t.cta.whatsappMsg)} target="_blank" rel="noopener">{contact.phoneDisplay}</a></dd></div>
              <div><dt>{c.phone}</dt><dd><a href={contact.phoneHref}>{contact.phoneDisplay}</a></dd></div>
              <div><dt>{c.email}</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
              <div><dt>{c.address}</dt><dd>{c.addressValue}</dd></div>
              <div><dt>{c.hours}</dt><dd>{c.hoursValue}</dd></div>
            </dl>
            <a className="btn btn-primary" href={whatsappUrl(t.cta.whatsappMsg)} target="_blank" rel="noopener"><IconChat /> {t.cta.whatsapp}</a>
          </div>
          <div className="form-card">
            <h2 className="h2-sm">{c.formTitle}</h2>
            <ContactForm lang={lang} />
          </div>
        </div>
        <div className="container">
          <iframe className="map" src={contact.mapEmbed} title={c.address} loading="lazy" />
        </div>
      </section>
    </Shell>
  );
}
