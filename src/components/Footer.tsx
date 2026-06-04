import { Flame, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-soot text-cream">
              <Flame className="h-4 w-4 text-ember" />
            </span>
            <span className="font-display text-xl font-bold text-soot">VH Kominictví</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Certifikovaný kominík pro Prahu a Středočeský kraj.
            Revize · čištění · kontroly.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-bold text-soot">Kontakt</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-ember" />
              <a href="tel:+420777444707" className="hover:text-soot">+420 777 444 707</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-ember" />
              <a href="mailto:info@vhkominictvi.cz" className="hover:text-soot">info@vhkominictvi.cz</a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-bold text-soot">Sekce</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-muted-foreground">
            <li><a href="#sluzby" className="hover:text-soot">Služby</a></li>
            <li><a href="#cetnost" className="hover:text-soot">Četnost</a></li>
            <li><a href="#postup" className="hover:text-soot">Postup</a></li>
            <li><a href="#recenze" className="hover:text-soot">Recenze</a></li>
            <li><a href="#oblast" className="hover:text-soot">Oblast</a></li>
            <li><a href="#faq" className="hover:text-soot">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} VH Kominictví · IČO 12345678
      </div>
    </footer>
  );
}
