import { Phone, CheckCircle2, Star } from "lucide-react";

const PHONE_HREF = "tel:+420777444707";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* warm gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-background to-muted" />
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
            <a
              href={PHONE_HREF}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-destructive px-8 text-lg font-bold text-destructive-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110 hover:shadow-[0_8px_30px_-8px_oklch(0.55_0.19_28/0.5)]"
            >
              <Phone className="h-5 w-5" />
              Zavolat zdarma
            </a>
            <a
              href="#kontakt"
              className="inline-flex h-14 items-center justify-center rounded-md border border-border bg-card px-8 text-lg font-bold text-soot transition hover:bg-muted hover:shadow-[var(--shadow-soft)]"
            >
              Napsat poptávku
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-soot">
            {[
              "Certifikace — revizní technik spalinových cest",
              "Pojištění odpovědnosti 5 mil. Kč",
              "Bez skrytých poplatků",
            ].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-ember" />
                <span className="font-bold">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Owner photo card */}
        <div className="md:col-span-5">
          <div className="relative mx-auto max-w-sm rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] fade-up">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/vladan.jpg"
                alt="Vladan Husařík — kominík VH Kominictví"
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
                  <Star className="h-4 w-4 fill-ember text-ember" />
                  <p className="font-display text-2xl font-bold leading-none text-soot">4,9</p>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
