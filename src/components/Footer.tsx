import { Phone, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-4">
        <div>
          <div className="group flex cursor-default items-center gap-2">
            <img
              src="/logo.png"
              alt="VH Kominictví Logo"
              className="h-10 w-auto object-contain drop-shadow-sm transition-transform group-hover:scale-105"
            />
            <span className="font-display text-xl font-bold text-soot">VH Kominictví</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Certifikovaný kominík pro Severní & západní Čechy a Středočeský kraj. Revize · čištění ·
            kontroly.
          </p>
          <p className="mt-3 text-base font-extrabold uppercase tracking-wide text-ember">Máme na to koule</p>
          
          <div className="mt-6 flex items-center gap-3">
            <img src="/kominici-logo.png" alt="Společenstvo kominíků ČR" className="h-12 w-auto object-contain" />
            <div className="text-xs font-bold text-muted-foreground leading-tight">
              Revizní technik spalinových cest <br />
              Člen společenstva kominíků ČR
            </div>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-bold text-soot">Kontakt</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone aria-hidden="true" className="h-4 w-4 text-ember" />
              <a href="tel:+420777444707" className="hover:text-soot">
                +420 777 444 707
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail aria-hidden="true" className="h-4 w-4 text-ember" />
              <a href="mailto:husarik@vhkominictvi.cz" className="hover:text-soot">
                husarik@vhkominictvi.cz
              </a>
            </li>
            <li className="pt-2">
              <span className="block font-bold text-soot">Vladan Husařík</span>
              <span className="block text-xs">IČO: 88883736</span>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-bold text-soot">Služby</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>
              <Link to="/sluzby/revize-kominu" className="hover:text-soot transition-colors">
                Revize komínů
              </Link>
            </li>
            <li>
              <Link to="/sluzby/cisteni-a-kontrola" className="hover:text-soot transition-colors">
                Čištění & Kontroly
              </Link>
            </li>
            <li>
              <Link to="/sluzby/zavady-a-posouzeni" className="hover:text-soot transition-colors">
                Závady & posouzení
              </Link>
            </li>
            <li>
              <Link to="/sluzby/frezovani" className="hover:text-soot transition-colors">
                Frézování
              </Link>
            </li>
            <li>
              <Link to="/sluzby/vlozkovani" className="hover:text-soot transition-colors">
                Vložkování
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-bold text-soot">Rychlé odkazy</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-muted-foreground">
            <li>
              <a href="/#sluzby" className="hover:text-soot transition-colors">
                Služby
              </a>
            </li>
            <li>
              <a href="/#cetnost" className="hover:text-soot transition-colors">
                Četnost
              </a>
            </li>
            <li>
              <a href="/#postup" className="hover:text-soot transition-colors">
                Postup
              </a>
            </li>
            <li>
              <a href="/#recenze" className="hover:text-soot transition-colors">
                Recenze
              </a>
            </li>
            <li>
              <a href="/#oblast" className="hover:text-soot transition-colors">
                Oblast
              </a>
            </li>
            <li>
              <a href="/#faq" className="hover:text-soot transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <Link to="/galerie" className="hover:text-soot transition-colors text-ember font-semibold">
                Galerie
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} VH Kominictví · IČO 88883736
      </div>
    </footer>
  );
}
