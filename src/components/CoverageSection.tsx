import { MapPin } from "lucide-react";

const groups = [
  {
    title: "Praha (do 20 km)",
    towns: ["Praha 1–10", "Praha-západ", "Praha-východ"],
  },
  {
    title: "Středočeský kraj (do 50 km)",
    towns: ["Beroun", "Kladno", "Mělník", "Mladá Boleslav", "Příbram", "Benešov"],
  },
  {
    title: "Po dohodě",
    towns: ["Plzeňsko", "Ústecko", "Pardubicko"],
  },
];

export function CoverageSection() {
  return (
    <section id="oblast" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Kde pracuji</p>
          <h2 className="mt-2 text-4xl font-extrabold text-soot md:text-5xl">
            Praha & celý Středočeský kraj
          </h2>
          <p className="mt-3 text-muted-foreground">
            Nejste si jistí, jestli k vám dojedu? Zavolejte — větší zakázky řeším po celé ČR.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-ember" />
                <h3 className="font-extrabold text-soot">{g.title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.towns.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-muted px-3 py-1 text-sm text-soot"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
