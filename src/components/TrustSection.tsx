import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    text: "Pana Husaříka mohu jedině doporučit. Profesionalita, ochota, férové jednaní, rozumné ceny a skvěle odvedená práce. Vše prostě na jedničku. Vynikajicí kominík, instaloval nám i krbová kamna a nerezový komín, maximální spokojenost. Pan Husařík je dochvilný, vše po sobě uklidí, není co dodat. Natrefit v dnešní době na rozumné, šikovné a ochotné řemeslníky je opravdu terno !",
    author: "Claudia Adler",
    time: "před 11 měsíci",
  },
  {
    text: "Páni kominíci byli super! Vše proběhlo spolehlivě, rychle a za rozumnou cenu. Takto si představuji kvalitní řemeslníky. Moc Vám za vše děkuji.",
    author: "David Lorenz",
    time: "před rokem",
  },
  {
    text: "Z vaší firmy jsem byla velice a mile překvapena Super jednání, práce krásně a kvalitně provedená. Moc děkuji a všem doporučuji.",
    author: "Marta Zadova",
    time: "před rokem",
  },
];

export function TrustSection() {
  return (
    <section id="recenze" className="scroll-mt-20 overflow-hidden bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <h2 className="text-3xl font-extrabold text-soot md:text-4xl">VH KOMINÍK</h2>
            </div>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-ember">Hodnocení zákazníků z Google</p>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2 text-sm">
            <span className="font-bold text-soot text-xl">5.0</span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </motion.header>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-md cursor-default"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-lg font-bold text-slate-600">
                  {r.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-soot">{r.author}</div>
                  <div className="text-xs text-muted-foreground">{r.time}</div>
                </div>
                <svg viewBox="0 0 24 24" className="h-5 w-5 ml-auto opacity-80" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="mt-3 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm text-soot leading-relaxed">{r.text}</blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
