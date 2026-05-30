import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "Přijel přesně na čas, vše rychle vyčistil, vysvětlil mi stav komína a hned na místě vystavil zprávu. Konečně někdo, kdo to bere vážně.",
    author: "Jana K.",
    place: "Praha 6",
  },
  {
    text: "Férová cena, žádné překvapení na faktuře. Po práci nezůstal v bytě ani prach. Doporučuji všem sousedům.",
    author: "Martin D.",
    place: "Beroun",
  },
  {
    text: "Volal jsem v pátek odpoledne, v sobotu ráno už byl u nás. Zachránil mi pojistnou událost — papíry měl hotové na místě.",
    author: "Petr V.",
    place: "Kladno",
  },
];

export function TrustSection() {
  return (
    <section id="recenze" className="bg-muted/40 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Reference</p>
            <h2 className="mt-2 text-4xl font-extrabold text-soot md:text-5xl">
              Mluví za mě klienti
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-ember text-ember" />
              ))}
            </div>
            <span className="font-bold text-soot">4,9 / 5</span>
            <span className="text-muted-foreground">· 100 % pozitivních</span>
          </div>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.author}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <Quote className="h-6 w-6 text-ember" />
              <blockquote className="mt-3 text-soot">{r.text}</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">
                {r.author} · {r.place}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
