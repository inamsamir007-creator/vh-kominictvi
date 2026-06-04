import { Scale } from "lucide-react";

export function LegalCalloutBar() {
  return (
    <div className="border-y border-soot/15 bg-soot text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-sm md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Scale className="h-4 w-4 text-ember" />
          <p>
            <strong>Povinnost ze zákona:</strong> kontrola spalinové cesty 1× ročně dle vyhlášky č.
            34/2016 Sb.
          </p>
        </div>
        <a href="#cetnost" className="text-ember underline-offset-4 hover:underline">
          Jak často přesně? →
        </a>
      </div>
    </div>
  );
}
