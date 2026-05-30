import { Phone, Flame } from "lucide-react";

const PHONE_DISPLAY = "+420 777 123 456";
const PHONE_HREF = "tel:+420777123456";

export function StickyHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-soot text-cream">
            <Flame className="h-4 w-4 text-ember" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-soot">
            VH Kominictví
          </span>
        </a>

        <div className="hidden items-center gap-4 md:flex">
          <span className="text-xs text-muted-foreground">
            Certifikovaný kominík · Praha & Středočeský kraj
          </span>
          <a
            href={PHONE_HREF}
            className="inline-flex h-9 items-center gap-2 rounded-md bg-destructive px-4 text-sm font-bold text-destructive-foreground shadow-sm transition hover:brightness-110"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </div>

        <a
          href={PHONE_HREF}
          className="inline-flex h-9 items-center gap-2 rounded-md bg-destructive px-3 text-sm font-bold text-destructive-foreground md:hidden"
        >
          <Phone className="h-4 w-4" />
          Volat
        </a>
      </div>
    </header>
  );
}
