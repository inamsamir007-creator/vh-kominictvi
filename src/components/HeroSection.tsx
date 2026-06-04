import { Phone, CheckCircle2, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const PHONE_HREF = "tel:+420777444707";

function MagneticButton({ children, href }: { children: React.ReactNode; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="group inline-flex h-14 items-center justify-center gap-2 rounded-md bg-destructive px-8 text-lg font-bold text-destructive-foreground shadow-[var(--shadow-ember)] hover:brightness-110"
    >
      {children}
    </motion.a>
  );
}

export function HeroSection() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const imageY = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* warm gradient background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-background to-muted" 
      />
      <div className="absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-ember/25 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7 fade-up">
          <h1 className="mt-5 text-6xl font-extrabold tracking-tight text-soot md:text-8xl">
            Komín v pořádku.
            <br />
            <span className="bg-gradient-to-r from-soot/70 to-soot/50 bg-clip-text text-transparent">Papíry hned.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Revize, čištění a kontroly komínů podle vyhlášky č. 34/2016 Sb.
            Přijedeme, uklidíme po sobě a vystavíme zprávu pro hasiče
            i pojišťovnu — bez čekání.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href={PHONE_HREF}>
              <Phone aria-hidden="true" className="h-5 w-5 transition-transform group-hover:-rotate-12" />
              Zavolat zdarma
            </MagneticButton>
            <a
              href="#kontakt"
              className="inline-flex h-14 items-center justify-center rounded-md border border-border bg-card/80 px-8 text-lg font-bold text-soot backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-muted hover:shadow-[var(--shadow-soft)]"
            >
              Získat nezávaznou nabídku
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-soot">
            {[
              "Certifikace — revizní technik",
              "14 let praxe v oboru",
              "Více než 500 klientů ročně",
              "Pojištění odpovědnosti 5 mil. Kč",
            ].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-ember" />
                <span className="font-bold">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Owner photo card */}
        <motion.div style={{ y: imageY }} className="md:col-span-5">
          <div className="relative mx-auto max-w-sm rounded-2xl border border-cream/20 bg-card/70 p-6 shadow-[var(--shadow-ember)] backdrop-blur-xl fade-up">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/vladan.jpg"
                alt="Vladan Husařík — kominík VH Kominictví"
                width={400}
                height={500}
                className="aspect-[4/5] w-full object-cover object-top"
                loading="eager"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="font-display text-2xl font-bold text-soot">Vladan Husařík</p>
                <p className="text-sm text-muted-foreground">Kominík · 14 let praxe</p>
              </div>
              <div className="rounded-md bg-ember/20 px-3 py-1.5 text-center">
                <div className="flex items-center gap-1">
                  <Star aria-hidden="true" className="h-4 w-4 fill-ember text-ember" />
                  <p className="font-display text-2xl font-bold leading-none text-soot">4,9</p>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Google</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
