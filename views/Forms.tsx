import { dict, formLinks, type Lang } from "@/lib/content";
import { PageHero, Shell } from "@/components/Shell";

export function Forms({ lang }: { lang: Lang }) {
  const f = dict[lang].forms;
  const list = (items: typeof formLinks.staff) => (
    <ul className="form-links">
      {items.map((i) => (<li key={i.href}><a href={i.href} target="_blank" rel="noopener">{i[lang]}</a></li>))}
    </ul>
  );
  return (
    <Shell lang={lang} current="forms">
      <PageHero eyebrow={f.eyebrow} title={f.title} />
      <section className="section">
        <div className="container cards cards-2">
          <div className="card"><h3>{f.projectsTitle}</h3>{list(formLinks.projects)}</div>
          <div className="card"><h3>{f.staffTitle}</h3>{list(formLinks.staff)}</div>
        </div>
      </section>
    </Shell>
  );
}
