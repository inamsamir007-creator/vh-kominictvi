import { PhoneCall, CalendarCheck, Wrench, FileCheck2 } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Zavoláte", desc: "Krátký hovor — domluvíme termín a vysvětlím cenu předem." },
  { icon: CalendarCheck, title: "Domluvíme termín", desc: "Většinou do 3 dnů, v urgentních případech i tentýž den." },
  { icon: Wrench, title: "Odvedu práci", desc: "Profesionálně, čistě, s ohleduplností k vašemu bytu i domu." },
  { icon: FileCheck2, title: "Dostanete papír", desc: "Revizní/kontrolní zpráva v ruce — pro hasiče i pojišťovnu." },
];

export function HowItWorksSection() {
  return (
    <section id="postup" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Postup</p>
          <h2 className="mt-2 text-4xl font-extrabold text-soot md:text-5xl">
            Čtyři kroky, žádné překvapení
          </h2>
        </header>

        <ol className="relative mt-10 grid gap-6 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-ember/40 md:block" />
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.title} className="relative">
                <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-ember text-soot shadow-[var(--shadow-ember)]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-display text-sm font-bold uppercase tracking-wider text-ember">
                  Krok {i + 1}
                </p>
                <h3 className="mt-1 text-xl font-extrabold text-soot">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
