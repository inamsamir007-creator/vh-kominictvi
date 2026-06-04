import { useState } from "react";

type Fuel = "tuhe" | "kapalne" | "plynne";

const data: Record<Fuel, { label: string; rows: { use: string; check: string; clean: string; highlight?: boolean }[] }> = {
  tuhe: {
    label: "Tuhá paliva (dřevo, uhlí)",
    rows: [
      { use: "Celoroční provoz", check: "1× ročně", clean: "3× ročně", highlight: true },
      { use: "Sezónní provoz", check: "1× ročně", clean: "2× ročně" },
      { use: "Rekreační objekt", check: "1× za 2 roky", clean: "1× ročně" },
    ],
  },
  kapalne: {
    label: "Kapalná paliva",
    rows: [
      { use: "Celoroční provoz", check: "1× ročně", clean: "2× ročně" },
      { use: "Sezónní provoz", check: "1× ročně", clean: "1× ročně" },
    ],
  },
  plynne: {
    label: "Plynná paliva",
    rows: [
      { use: "Spotřebič do 50 kW", check: "1× ročně", clean: "1× ročně" },
      { use: "Spotřebič nad 50 kW", check: "2× ročně", clean: "2× ročně" },
    ],
  },
};

export function FrequencyTable() {
  const [fuel, setFuel] = useState<Fuel>("tuhe");
  const set = data[fuel];

  return (
    <section id="cetnost" className="scroll-mt-20 bg-muted/40 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Vyhláška 34/2016</p>
          <h2 className="mt-2 text-4xl font-extrabold text-soot md:text-5xl">
            Jak často musíte komín řešit
          </h2>
          <p className="mt-3 text-muted-foreground">
            Vyberte si typ paliva — ukážu vám přesnou četnost kontrol a čištění.
          </p>
        </header>

        {/* fuel filter */}
        <div className="mt-6 inline-flex rounded-full border border-border bg-card p-1">
          {(Object.keys(data) as Fuel[]).map((k) => (
            <button
              key={k}
              onClick={() => setFuel(k)}
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                fuel === k ? "bg-soot text-cream" : "text-muted-foreground hover:text-soot",
              ].join(" ")}
            >
              {data[k].label.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* desktop table */}
        <div className="mt-6 hidden overflow-hidden rounded-2xl border border-border bg-card md:block">
          <table className="w-full text-left">
            <thead className="bg-soot text-cream">
              <tr>
                <th className="px-5 py-4 text-sm font-bold">Provoz</th>
                <th className="px-5 py-4 text-sm font-bold">Kontrola</th>
                <th className="px-5 py-4 text-sm font-bold">Čištění</th>
              </tr>
            </thead>
            <tbody>
              {set.rows.map((r) => (
                <tr key={r.use} className="border-t border-border">
                  <td className="px-5 py-4 font-semibold text-soot">{r.use}</td>
                  <td className="px-5 py-4 text-soot">{r.check}</td>
                  <td className="px-5 py-4">
                    <span className={r.highlight ? "inline-block rounded-full bg-ember px-3 py-1 text-sm font-bold text-soot" : "text-soot"}>
                      {r.clean}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* mobile cards */}
        <div className="mt-6 grid gap-3 md:hidden">
          {set.rows.map((r) => (
            <div key={r.use} className="rounded-xl border border-border bg-card p-4">
              <p className="font-bold text-soot">{r.use}</p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Kontrola</p>
                  <p className="mt-1 font-semibold text-soot">{r.check}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Čištění</p>
                  <p className={["mt-1 font-semibold", r.highlight ? "inline-block rounded-full bg-ember px-2 py-0.5 text-soot" : "text-soot"].join(" ")}>
                    {r.clean}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
