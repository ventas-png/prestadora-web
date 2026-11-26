import type { ReactNode } from "react";
import type { Lang, RouteKey } from "@/lib/content";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MotionProvider, Reveal, ScrollProgress } from "./motion";

export function Shell({ lang, current, children }: { lang: Lang; current: RouteKey; children: ReactNode }) {
  return (
    <MotionProvider>
      <ScrollProgress />
      <Header lang={lang} current={current} />
      <main>{children}</main>
      <Footer lang={lang} />
    </MotionProvider>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="page-hero">
      <div className="aurora" aria-hidden />
      <div className="container center">
        <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
        <Reveal delay={0.08}><h1 className="display">{title}</h1></Reveal>
        {intro && <Reveal delay={0.16}><p className="lead center-text">{intro}</p></Reveal>}
      </div>
    </section>
  );
}
