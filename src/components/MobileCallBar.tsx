import { Phone, MessageCircle } from "lucide-react";

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 p-2 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:+420777444707"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-destructive font-bold text-destructive-foreground"
        >
          <Phone className="h-4 w-4" /> Zavolat
        </a>
        <a
          href="/#kontakt"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-card font-bold text-soot"
        >
          <MessageCircle className="h-4 w-4" /> Poptávka
        </a>
      </div>
    </div>
  );
}
