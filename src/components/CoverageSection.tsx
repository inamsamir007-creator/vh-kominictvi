import { MapPin } from "lucide-react";

const groups = [
  {
    title: "Ústecký kraj",
    towns: ["Bochov", "Toužim", "Žatec", "Louny", "atd."],
  },
  {
    title: "Karlovarský kraj",
    towns: ["Karlovy Vary", "Sokolov", "Cheb", "atd."],
  },
  {
    title: "Plzeňský kraj",
    towns: ["Plzeň", "Tachov", "Rokycany", "atd."],
  },
  {
    title: "Středočeský kraj (sever a západ)",
    towns: ["Kladno", "Rakovník", "Mělník", "atd."],
  },
  {
    title: "Praha",
    towns: ["po domluvě"],
  },
];

export function CoverageSection() {
  return (
    <section id="oblast" className="scroll-mt-20 border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <header className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Kde působíme</p>
          <h2 className="mt-2 text-4xl font-extrabold text-soot md:text-5xl">
            Severní & západní Čechy a Středočeský kraj
          </h2>
          <p className="mt-3 text-muted-foreground">
            Nejste si jistí, jestli k vám dojedu? Zavolejte — větší zakázky řeším po celé ČR.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-ember" />
                <h3 className="font-extrabold text-soot">{g.title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.towns.map((t) => (
                  <li key={t} className="rounded-full bg-muted px-3 py-1 text-sm text-soot">
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
