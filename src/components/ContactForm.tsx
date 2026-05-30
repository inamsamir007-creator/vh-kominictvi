import { useState } from "react";
import { Phone, Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ phone: "", town: "", service: "Revize" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="kontakt" className="bg-soot py-20 text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Kontakt</p>
          <h2 className="mt-2 text-4xl font-extrabold md:text-5xl">
            Stačí číslo a obec.
            <br />
            <span className="text-ember">Ozvu se do hodiny.</span>
          </h2>
          <p className="mt-4 max-w-md text-cream/75">
            Žádné formuláře na deset políček. Napíšete mi telefon, město a co potřebujete —
            zbytek doladíme spolu.
          </p>

          <a
            href="tel:+420777123456"
            className="mt-6 inline-flex h-12 items-center gap-2 rounded-md bg-destructive px-6 font-bold text-destructive-foreground"
          >
            <Phone className="h-5 w-5" />
            +420 777 123 456
          </a>
        </div>

        <div className="rounded-2xl border border-cream/15 bg-cream p-6 text-soot shadow-[var(--shadow-soft)]">
          {sent ? (
            <div className="flex flex-col items-center py-8 text-center">
              <CheckCircle2 className="h-12 w-12 text-ember" />
              <h3 className="mt-4 text-2xl font-extrabold">Díky, mám to.</h3>
              <p className="mt-2 max-w-xs text-muted-foreground">
                Ozvu se vám do hodiny v pracovní době, nejpozději druhý den ráno.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <label className="grid gap-1.5">
                <span className="text-sm font-semibold">Telefon</span>
                <input
                  required
                  type="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+420 ..."
                  className="h-11 rounded-md border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-ember"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-sm font-semibold">Obec / město</span>
                <input
                  required
                  value={form.town}
                  onChange={(e) => setForm({ ...form, town: e.target.value })}
                  placeholder="např. Beroun"
                  className="h-11 rounded-md border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-ember"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-sm font-semibold">Co potřebujete</span>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="h-11 rounded-md border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-ember"
                >
                  <option>Revize</option>
                  <option>Pravidelná kontrola</option>
                  <option>Čištění</option>
                  <option>Posouzení závady</option>
                  <option>Nevím, poraďte</option>
                </select>
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-soot font-bold text-cream transition hover:brightness-110"
              >
                <Send className="h-4 w-4" />
                Odeslat poptávku
              </button>
              <p className="text-xs text-muted-foreground">
                Odesláním souhlasíte se zpracováním údajů pouze pro vyřízení poptávky.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
