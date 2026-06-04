import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Phone } from "lucide-react";

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function ServiceLayout({ title, subtitle, children }: ServiceLayoutProps) {
  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-soot py-20 text-cream md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,103,42,0.15),transparent_50%)]" />
        <div className="mx-auto max-w-4xl px-4 relative z-10 text-center">
          <div className="mb-6 flex items-center justify-center gap-2 text-sm font-semibold text-ember">
            <Link to="/" className="hover:underline">Domů</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Služby</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-6 text-lg text-cream/80 md:text-xl max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </header>

      {/* Content Section */}
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24 prose prose-zinc prose-lg prose-headings:font-display prose-headings:font-bold prose-a:text-ember prose-a:no-underline hover:prose-a:underline">
        {children}
      </div>

      {/* CTA Section */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-soot">Potřebujete pomoct s komínem?</h2>
          <p className="mt-4 text-muted-foreground">
            Zavolejte mi nebo napište. Poradím vám zdarma a navrhnu nejlepší řešení.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+420777444707"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-destructive px-8 text-lg font-bold text-destructive-foreground transition-all hover:scale-105 hover:shadow-[var(--shadow-soft)]"
            >
              <Phone className="h-5 w-5" />
              +420 777 444 707
            </a>
            <Link
              to="/#kontakt"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-md border-2 border-soot bg-transparent px-8 text-lg font-bold text-soot transition-all hover:bg-soot hover:text-cream"
            >
              Nezávazná poptávka
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
