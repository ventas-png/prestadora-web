"use client";
import { useRef, type ReactNode } from "react";
import { MotionConfig, motion, useScroll, useSpring, useTransform } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Respects the visitor's "reduce motion" setting for every animation below. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Fades and lifts its content in the first time it scrolls into view. */
export function Reveal({ children, delay = 0, y = 32, className, as = "div" }: {
  children: ReactNode; delay?: number; y?: number; className?: string; as?: "div" | "li" | "section";
}) {
  const C = motion[as];
  return (
    <C
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </C>
  );
}

/** Children reveal one after another. Wrap each child in <StaggerItem>. */
export function Stagger({ children, className, gap = 0.08 }: { children: ReactNode; className?: string; gap?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{ hidden: { opacity: 0, y: 28, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease } } }}
    >
      {children}
    </motion.div>
  );
}

/** Large hero picture that grows to full width and lifts its floating panels as the page scrolls. */
export function HeroStage({ src, children }: { src: string; children?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 15%"] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const scale = useTransform(p, [0, 1], [0.86, 1]);
  const radius = useTransform(p, [0, 1], [48, 28]);
  const imgY = useTransform(p, [0, 1], ["-6%", "0%"]);
  return (
    <motion.div ref={ref} className="hero-stage" style={{ scale, borderRadius: radius }}>
      <motion.img src={src} alt="" style={{ y: imgY }} />
      <div className="hero-stage-shade" />
      {children}
    </motion.div>
  );
}

/** A glass panel that floats over an image, drifting at its own speed. */
export function FloatPanel({ children, className, speed = 40, delay = 0 }: { children: ReactNode; className?: string; speed?: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      <motion.div
        className="glass float-inner"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/** Image that drifts slightly slower than the page (parallax). */
export function ParallaxImage({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <div ref={ref} className={`parallax ${className ?? ""}`}>
      <motion.img src={src} alt="" style={{ y, scale: 1.18 }} />
    </div>
  );
}

/**
 * Cards that pin one after another and stack like a deck while scrolling.
 * Each earlier card shrinks a bit as the next one slides over it.
 */
export function StackCards({ items }: { items: { title: string; text: string; kicker: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <div ref={ref} className="stack">
      {items.map((it, i) => (
        <StackCard key={it.title} i={i} n={items.length} progress={scrollYProgress} {...it} />
      ))}
    </div>
  );
}

function StackCard({ i, n, progress, title, text, kicker }: {
  i: number; n: number; progress: ReturnType<typeof useScroll>["scrollYProgress"]; title: string; text: string; kicker: string;
}) {
  const start = i / n;
  const scale = useTransform(progress, [start, 1], [1, 1 - (n - i - 1) * 0.04]);
  const dim = useTransform(progress, [start, Math.min(1, start + 1 / n)], [1, i === n - 1 ? 1 : 0.6]);
  const filter = useTransform(dim, (v) => `brightness(${v})`);
  return (
    <div className="stack-slot" style={{ top: `calc(120px + ${i * 22}px)` }}>
      <motion.article className="stack-card" style={{ scale, filter }}>
        <span className="stack-kicker">{kicker}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </motion.article>
    </div>
  );
}

/** Thin bar at the top of the page showing reading progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden />;
}

/** Timeline whose line fills as you scroll through it. */
export function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 50%"] });
  return (
    <div ref={ref} className="tl-track" aria-hidden>
      <motion.div className="tl-fill" style={{ scaleY: scrollYProgress }} />
    </div>
  );
}
