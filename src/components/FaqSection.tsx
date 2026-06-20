import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Účtujete si cestovné k zákazníkovi?",
    a: "Doprava v rámci Severních a západních Čech a Středočeského kraje je zahrnuta v ceně služby, takže neplatíte žádné skryté poplatky za výjezd.",
  },
  {
    q: "Kolik stojí revize komínu?",
    a: "Standardní revize rodinného domu vychází od 2000+ Kč včetně písemné zprávy. Přesnou cenu vždy řeknu předem po telefonu, žádné překvapení na faktuře.",
  },
  {
    q: "Jak rychle dokážete přijet?",
    a: "Běžně do 2–3 pracovních dnů. V akutních případech (zápach, podezření na požár) i tentýž den.",
  },
  {
    q: "Vystavíte zprávu pro pojišťovnu?",
    a: "Ano. Revizní i kontrolní zprávu dostanete vytištěnou na místě, plně akceptovanou hasiči i českými pojišťovnami.",
  },
  {
    q: "Uklízíte po sobě?",
    a: "Samozřejmě. Pracuji s vysavačem se sazovým filtrem a plachtami. V bytě po mně nezůstane prach.",
  },
  {
    q: "Co když mi řeknete, že komín neprojde?",
    a: "Navrhnu konkrétní řešení (vyvložkování, oprava, čištění) a férovou cenu. Nikdy netlačím na zbytečné práce.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 bg-background py-20">
      <div className="mx-auto max-w-3xl px-4">
        <header className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Časté dotazy</p>
          <h2 className="mt-2 text-4xl font-extrabold text-soot md:text-5xl">
            Na co se mě ptáte nejčastěji
          </h2>
        </header>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-lg font-bold text-soot hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
