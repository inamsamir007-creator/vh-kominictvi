import { Phone, CheckCircle2, Flame } from "lucide-react";

const PHONE_HREF = "tel:+420777123456";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* warm gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-background to-muted" />
      <div className="absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-ember/25 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7 fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Dnes ještě volné termíny
          </span>

          <h1 className="mt-5 text-5xl font-extrabold text-soot md:text-7xl">
            Komín v pořádku.
            <br />
            <span className="text-soot/70">Papíry hned.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Revize, čištění a kontroly komínů podle vyhlášky č. 34/2016 Sb.
            Přijedeme, uklidíme po sobě a vystavíme zprávu pro hasiče
            i pojišťovnu — bez čekání.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-destructive px-6 text-base font-bold text-destructive-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110"
            >
              <Phone className="h-5 w-5" />
              Zavolat zdarma
            </a>
            <a
              href="#kontakt"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-card px-6 text-base font-bold text-soot transition hover:bg-muted"
            >
              Napsat poptávku
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-soot">
            {[
              "Certifikát ČKČ",
              "Pojištění odpovědnosti 5 mil. Kč",
              "Bez skrytých poplatků",
            ].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-ember" />
                <span className="font-semibold">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Owner / illustration card */}
        <div className="md:col-span-5">
          <div className="relative mx-auto max-w-sm rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] fade-up">
            <div className="flex aspect-[4/5] items-end justify-center rounded-xl bg-gradient-to-b from-soot via-soot to-[oklch(0.32_0.02_55)] p-6">
              {/* Stylised chimney + flame */}
              <div className="relative flex h-full w-full items-end justify-center">
                <div className="absolute bottom-0 h-3/5 w-24 rounded-t-md bg-[oklch(0.42_0.03_55)] shadow-inner">
                  <div className="mx-auto mt-2 h-2 w-20 rounded-sm bg-[oklch(0.32_0.02_55)]" />
                </div>
                <div className="absolute bottom-[60%] flex flex-col items-center">
                  <Flame className="flicker h-20 w-20 text-ember drop-shadow-[0_0_25px_oklch(0.78_0.16_70/0.6)]" />
                </div>
                <div className="absolute bottom-0 h-1 w-full bg-[oklch(0.18_0.012_50)]" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="font-display text-xl font-bold text-soot">Václav H.</p>
                <p className="text-sm text-muted-foreground">Kominík · 14 let praxe</p>
              </div>
              <div className="rounded-md bg-ember/20 px-3 py-1 text-center">
                <p className="font-display text-lg font-bold leading-none text-soot">4,9</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
