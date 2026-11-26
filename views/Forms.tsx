import { dict, formLinks, type Lang } from "@/lib/content";
import { PageHero, Shell } from "@/components/Shell";
import { Stagger, StaggerItem } from "@/components/motion";
import { IconArrow } from "@/components/Icons";

export function Forms({ lang }: { lang: Lang }) {
  const f = dict[lang].forms;
  const list = (items: typeof formLinks.staff) => (
    <ul className="form-links">
      {items.map((i) => (<li key={i.href}><a href={i.href} target="_blank" rel="noopener">{i[lang]} <IconArrow size={16} /></a></li>))}
    </ul>
  );
  return (
    <Shell lang={lang} current="forms">
      <PageHero eyebrow={f.eyebrow} title={f.title} />
      <section className="section pt-0">
        <Stagger className="container mv-grid">
          <StaggerItem><div className="tile"><h3>{f.projectsTitle}</h3>{list(formLinks.projects)}</div></StaggerItem>
          <StaggerItem><div className="tile"><h3>{f.staffTitle}</h3>{list(formLinks.staff)}</div></StaggerItem>
        </Stagger>
      </section>
    </Shell>
  );
}
