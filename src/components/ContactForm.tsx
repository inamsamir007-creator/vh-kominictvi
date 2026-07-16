import { useState } from "react";
import { Phone, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ phone: "", email: "", town: "", service: "Revize" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/husarik@vhkominictvi.cz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "Nová poptávka z webu!",
          email: form.email,
          "Telefonní číslo": form.phone,
          "E-mail": form.email,
          "Obec / město": form.town,
          Služba: form.service,
        }),
      });

      if (response.ok) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="kontakt" className="scroll-mt-20 bg-soot py-20 text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center 2xl:max-w-7xl">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Kontakt</p>
          <h2 className="mt-2 text-4xl font-extrabold md:text-5xl">
            Stačí kontakt a obec.
            <br />
            <span className="text-ember">Ozvu se do hodiny.</span>
          </h2>
          <p className="mt-4 max-w-md text-cream/75">
            Žádné formuláře na deset políček. Napíšete mi telefon, e-mail, město a co potřebujete —
            zbytek doladíme spolu.
          </p>

          <a
            href="tel:+420777444707"
            className="mt-6 inline-flex h-12 items-center gap-2 rounded-md bg-destructive px-6 font-bold text-destructive-foreground transition hover:brightness-110"
          >
            <Phone aria-hidden="true" className="h-5 w-5" />
            +420 777 444 707
          </a>
        </div>

        <div className="rounded-2xl border border-cream/15 bg-cream p-6 text-soot shadow-[var(--shadow-soft)]">
          {sent ? (
            <div className="flex flex-col items-center py-8 text-center">
              <CheckCircle2 aria-hidden="true" className="h-12 w-12 text-ember" />
              <h3 className="mt-4 text-2xl font-extrabold">Díky, mám to.</h3>
              <p className="mt-2 max-w-xs text-muted-foreground">
                Ozvu se vám do hodiny v pracovní době, nejpozději druhý den ráno.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <label className="group grid gap-1.5">
                <span className="text-sm font-semibold transition-colors group-focus-within:text-ember">
                  Telefon
                </span>
                <input
                  required
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  spellCheck={false}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+420 ..."
                  className="h-12 rounded-md border border-border/80 bg-background/50 px-3 outline-none transition-all focus:border-ember focus:bg-background focus:ring-4 focus:ring-ember/10"
                />
              </label>
              <label className="group grid gap-1.5">
                <span className="text-sm font-semibold transition-colors group-focus-within:text-ember">
                  E-mail
                </span>
                <input
                  required
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="vas@email.cz"
                  className="h-12 rounded-md border border-border/80 bg-background/50 px-3 outline-none transition-all focus:border-ember focus:bg-background focus:ring-4 focus:ring-ember/10"
                />
              </label>
              <label className="group grid gap-1.5">
                <span className="text-sm font-semibold transition-colors group-focus-within:text-ember">
                  Obec / město
                </span>
                <input
                  required
                  autoComplete="address-level2"
                  value={form.town}
                  onChange={(e) => setForm({ ...form, town: e.target.value })}
                  placeholder="např. Karlovy Vary"
                  className="h-12 rounded-md border border-border/80 bg-background/50 px-3 outline-none transition-all focus:border-ember focus:bg-background focus:ring-4 focus:ring-ember/10"
                />
              </label>
              <label className="group grid gap-1.5">
                <span className="text-sm font-semibold transition-colors group-focus-within:text-ember">
                  Co potřebujete
                </span>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="h-12 rounded-md border border-border/80 bg-background/50 px-3 outline-none transition-all focus:border-ember focus:bg-background focus:ring-4 focus:ring-ember/10"
                >
                  <option>Revize</option>
                  <option>Pravidelná kontrola</option>
                  <option>Čištění</option>
                  <option>Frézování</option>
                  <option>Vložkování</option>
                  <option>Posouzení závady</option>
                  <option>Nevím, poraďte</option>
                </select>
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-2 inline-flex h-14 items-center justify-center gap-2 rounded-md bg-soot text-lg font-bold text-cream transition-all duration-300 hover:scale-[1.02] hover:bg-soot/90 hover:shadow-[var(--shadow-ember)] disabled:pointer-events-none disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 aria-hidden="true" className="h-5 w-5 animate-spin" />
                    Odesílám...
                  </>
                ) : (
                  <>
                    <Send
                      aria-hidden="true"
                      className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                    Odeslat poptávku
                  </>
                )}
              </button>
              {error && (
                <p className="flex items-center gap-2 text-sm text-red-500 font-medium">
                  <AlertCircle className="h-4 w-4" />
                  Něco se pokazilo. Zkuste to prosím znovu, nebo nám zavolejte.
                </p>
              )}
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
