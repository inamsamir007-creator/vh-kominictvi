import { Phone, Facebook, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";

const PHONE_DISPLAY = "+420 777 444 707";
const PHONE_HREF = "tel:+420777444707";

export function StickyHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 2xl:max-w-7xl">
        <a href="/#top" className="group flex items-center gap-3">
          <img
            src="/logo-optimized.png"
            alt="VH Kominictví Logo"
            className="h-16 w-auto object-contain drop-shadow-sm transition-transform group-hover:scale-105"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl font-bold tracking-tight text-soot">
              VH Kominictví
            </span>
            <span className="hidden text-xs font-extrabold uppercase tracking-wide text-ember md:block">
              Máme na to koule
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-3 border-r border-border/60 pr-6">
            <a
              href="https://www.facebook.com/vhkominictvicz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://maps.app.goo.gl/tvk12uiNMT5JsqND9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-emerald-600 transition-colors"
              aria-label="Google Business Profile"
            >
              <MapPin className="h-5 w-5" />
            </a>
          </div>
          <Link
            to="/galerie"
            className="text-sm font-bold text-ember hover:text-soot transition-colors"
          >
            📸 Naše Galerie
          </Link>
          <a
            href={PHONE_HREF}
            className="inline-flex h-9 items-center gap-2 rounded-md bg-destructive px-4 text-sm font-bold text-destructive-foreground shadow-sm transition hover:brightness-110"
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href="https://www.facebook.com/vhkominictvicz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-blue-600 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://maps.app.goo.gl/tvk12uiNMT5JsqND9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-emerald-600 transition-colors"
            aria-label="Google Business Profile"
          >
            <MapPin className="h-5 w-5" />
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex h-9 items-center gap-2 rounded-md bg-destructive px-3 text-sm font-bold text-destructive-foreground ml-2"
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            Volat
          </a>
        </div>
      </div>
    </header>
  );
}
