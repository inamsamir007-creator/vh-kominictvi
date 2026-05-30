import { FileCheck2, Brush, ShieldCheck, AlertTriangle, MessageCircle } from "lucide-react";

const services = [
  {
    icon: FileCheck2,
    title: "Revize komínů",
    desc: "Revizní zpráva pro stavební úřad, hasiče i pojišťovnu. Platí pro nové i rekonstruované komíny.",
    featured: true,
  },
  { icon: Brush, title: "Čištění", desc: "Mechanické vymetení, odstranění sazí a dehtu. Bez nepořádku v bytě." },
  { icon: ShieldCheck, title: "Pravidelná kontrola", desc: "Roční kontrola dle vyhlášky 34/2016 Sb. včetně protokolu." },
  { icon: AlertTriangle, title: "Závady & posouzení", desc: "Diagnostika tahu, vlhkosti, dehtových usazenin a vyvložkování." },
];

export function ServicesSection() {
  return (
    <section id="sluzby" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Co dělám</p>
          <h2 className="mt-2 text-4xl font-extrabold text-soot md:text-5xl">
            Vše kolem komína na jednom místě
          </h2>
          <p className="mt-3 text-muted-foreground">
            Specializace na rodinné domy, chalupy a menší provozovny.
            Vždy s papírem, který obstojí u hasičů i pojišťovny.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            const featured = s.featured;
            return (
              <article
                key={s.title}
                className={[
                  "group relative rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]",
                  featured ? "md:col-span-2 md:row-span-1 bg-soot text-cream border-soot" : "",
                ].join(" ")}
              >
                <div
                  className={[
                    "grid h-11 w-11 place-items-center rounded-lg",
                    featured ? "bg-ember text-soot" : "bg-ember/20 text-soot",
                  ].join(" ")}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className={["mt-4 text-xl font-extrabold", featured ? "text-cream" : "text-soot"].join(" ")}>
                  {s.title}
                </h3>
                <p className={["mt-2 text-sm", featured ? "text-cream/80" : "text-muted-foreground"].join(" ")}>
                  {s.desc}
                </p>
                {featured && (
                  <span className="mt-4 inline-block rounded-full bg-ember px-3 py-1 text-xs font-bold text-soot">
                    Nejčastější zakázka
                  </span>
                )}
              </article>
            );
          })}
        </div>

        {/* free advice accent strip */}
        <div className="mt-6 flex items-center gap-3 rounded-xl border border-dashed border-ember bg-ember/10 px-4 py-3 text-sm">
          <MessageCircle className="h-4 w-4 text-soot" />
          <p className="text-soot">
            <strong>Poradenství zdarma</strong> — než zavoláte jiného kominíka, zeptejte se.
            Telefon i SMS, odpovídám týž den.
          </p>
        </div>
      </div>
    </section>
  );
}
