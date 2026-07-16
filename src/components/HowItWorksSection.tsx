import { PhoneCall, CalendarCheck, Wrench, FileCheck2 } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Zavoláte",
    desc: "Krátký hovor — domluvíme termín a vysvětlím cenu předem.",
  },
  {
    icon: CalendarCheck,
    title: "Domluvíme termín",
    desc: "Většinou do 3 dnů, v urgentních případech i tentýž den.",
  },
  {
    icon: Wrench,
    title: "Odvedu práci",
    desc: "Profesionálně, čistě, s ohleduplností k vašemu bytu i domu.",
  },
  {
    icon: FileCheck2,
    title: "Dostanete revizní zprávu",
    desc: "Protokol o provedení povinné roční kontroly spalinových cest.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="postup" className="scroll-mt-20 bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 2xl:max-w-7xl">
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
            const stepNumber = String(i + 1).padStart(2, "0");
            return (
              <li
                key={s.title}
                className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:shadow-[var(--shadow-soft)] hover:-translate-y-1"
              >
                {/* Background number */}
                <div className="absolute -right-4 -top-6 text-[8rem] font-black leading-none text-muted/30 select-none z-0">
                  {stepNumber}
                </div>

                <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-ember text-soot shadow-[var(--shadow-ember)]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="relative z-10 mt-6 font-display text-sm font-bold uppercase tracking-wider text-ember">
                  Krok {i + 1}
                </p>
                <h3 className="relative z-10 mt-1 text-xl font-extrabold text-soot">{s.title}</h3>
                <p className="relative z-10 mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
