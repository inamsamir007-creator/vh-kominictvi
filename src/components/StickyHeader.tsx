import { Phone, Facebook, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const PHONE_DISPLAY = "+420 777 444 707";
const PHONE_HREF = "tel:+420777444707";
const HEADER_HEIGHT = 68;

export function StickyHeader() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      if (currentY < HEADER_HEIGHT) {
        setHidden(false);
      } else if (delta > 10) {
        setHidden(true);
      } else if (delta < -10) {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70 transition-transform duration-300 md:translate-y-0 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-4 2xl:max-w-7xl">
        <a href="/#top" className="group flex items-center gap-3">
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl font-bold tracking-tight text-soot">
              VH Kominictví
            </span>
            <span className="hidden text-xs font-extrabold uppercase tracking-wide text-destructive md:block">
              Máme na to koule...
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
