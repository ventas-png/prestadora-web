import type { ReactNode } from "react";
import type { Lang, RouteKey } from "@/lib/content";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Shell({ lang, current, children }: { lang: Lang; current: RouteKey; children: ReactNode }) {
  return (
    <>
      <Header lang={lang} current={current} />
      <main>{children}</main>
      <Footer lang={lang} />
    </>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
      </div>
    </section>
  );
}
