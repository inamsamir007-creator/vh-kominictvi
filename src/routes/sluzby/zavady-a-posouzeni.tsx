import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/ServiceLayout";

export const Route = createFileRoute("/sluzby/zavady-a-posouzeni")({
  head: () => ({
    meta: [
      { title: "Závady komínů & odborné posouzení | VH Kominictví" },
      {
        name: "description",
        content:
          "Máte podezření na závadu komína? Diagnostika tahu, vlhkosti, dehtových usazenin. Odborné posouzení stavu a návrh řešení na míru.",
      },
      { property: "og:title", content: "Závady komínů & odborné posouzení | VH Kominictví" },
      {
        property: "og:description",
        content:
          "Diagnostika tahu, vlhkosti a dehtových usazenin. Odborné posouzení stavu komína a návrh řešení.",
      },
      {
        property: "og:url",
        content: "https://vhkominictvi.cz/sluzby/zavady-a-posouzeni",
      },
    ],
    links: [{ rel: "canonical", href: "https://vhkominictvi.cz/sluzby/zavady-a-posouzeni" }],
  }),
  component: ZavadyPage,
});

function ZavadyPage() {
  return (
    <ServiceLayout
      title="Závady & odborné posouzení"
      subtitle="Něco s komínem nehraje? Než vám řekne pojišťovna nebo hasič, zjistěte to sami — a vyřešte to dřív, než se z drobnosti stane problém."
      slug="zavady-a-posouzeni"
    >
      <p className="lead">
        Komín na sebe většinou neupozorní, dokud není pozdě. Zápach spalin v místnosti, vlhké mapy
        na zdivu, slabý tah nebo podezřelé zvuky — to všechno jsou signály, které nesmíte ignorovat.{" "}
        <strong>Odborné posouzení stavu komína vám ukáže přesně, co se děje</strong>, a navrhne
        řešení dřív, než se z drobnosti stane havarijní situace.
      </p>

      <h2>Kdy zpozornět — nejčastější příznaky závad</h2>
      <p>
        Většina závad se projevuje nenápadně a postupně. Pokud si všimnete jakéhokoli z těchto
        příznaků, je čas jednat:
      </p>
      <ul>
        <li>
          <strong>Zápach spalin v místnosti</strong> — spaliny pronikají netěsnostmi zpět do
          obytného prostoru.
        </li>
        <li>
          <strong>Vlhké skvrny na zdivu</strong> kolem komína — kondenzát proniká stěnou komínového
          tělesa.
        </li>
        <li>
          <strong>Slabý nebo nestabilní tah</strong> — komín neodvádí spaliny dostatečně rychle.
        </li>
        <li>
          <strong>Opadávající omítka</strong> v okolí komína — důsledek vlhkosti a tepelného
          namáhání.
        </li>
        <li>
          <strong>Tmavé usazeniny</strong> (dehet) na vnitřním povrchu — riziko vznícení sazí.
        </li>
        <li>
          <strong>Problémy se zapalováním</strong> nebo udržením plamene ve spotřebiči.
        </li>
      </ul>

      <h2>Co diagnostika zahrnuje</h2>
      <p>
        Přijedu k vám, osobně provedu důkladnou prohlídku celé spalinové cesty a jasně vám sdělím, v
        jakém stavu komín skutečně je. Konkrétně:
      </p>
      <ol>
        <li>
          <strong>Vizuální kontrola z vnějšku:</strong> Stav komínového pláště, hlavy, krycí desky a
          okolního zdiva.
        </li>
        <li>
          <strong>Kontrola průduchu:</strong> Průchodnost, stav vnitřního povrchu, případné
          usazeniny nebo překážky.
        </li>
        <li>
          <strong>Měření tahu:</strong> Ověření, zda komín odvádí spaliny dostatečně a stabilně.
        </li>
        <li>
          <strong>Těsnost spalinové cesty:</strong> Kontrola napojení spotřebiče, kouřovodu a
          sopouchu.
        </li>
        <li>
          <strong>Posouzení vlhkosti:</strong> Detekce kondenzátu a jeho pronikání do komínového
          tělesa.
        </li>
        <li>
          <strong>Písemná zpráva:</strong> Jasný popis zjištěných závad s doporučením dalšího
          postupu.
        </li>
      </ol>

      <div className="my-10 grid gap-6 sm:grid-cols-2 not-prose">
        <div className="rounded-xl bg-destructive/5 p-6 border border-destructive/20 shadow-sm">
          <h3 className="text-lg font-bold text-soot mb-3">⚠️ Rizika zanedbaného komína</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <strong>Otrava oxidem uhelnatým</strong> — tichý zabiják bez zápachu.
            </li>
            <li>
              <strong>Požár komína</strong> — vznícení sazí při teplotách přes 1 000 °C.
            </li>
            <li>
              <strong>Poškození zdiva domu</strong> — kondenzát postupně rozleptává konstrukci.
            </li>
            <li>
              <strong>Problémy s pojišťovnou</strong> — nezaplacení škody bez platného protokolu.
            </li>
          </ul>
        </div>
        <div className="rounded-xl bg-green-50 p-6 border border-green-200 shadow-sm">
          <h3 className="text-lg font-bold text-soot mb-3">✓ Co získáte po posouzení</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <strong>Jasnou diagnózu</strong> — přesně víte, co se děje a proč.
            </li>
            <li>
              <strong>Návrh řešení</strong> — od drobné opravy po kompletní rekonstrukci.
            </li>
            <li>
              <strong>Cenový odhad</strong> — žádné překvapení, víte co a za kolik.
            </li>
            <li>
              <strong>Klidný spánek</strong> — váš komín je pod kontrolou odborníka.
            </li>
          </ul>
        </div>
      </div>

      <h2>Nejčastější závady, které řešíme</h2>
      <ul>
        <li>
          <strong>Netěsnost spalinové cesty</strong> — praskliny, uvolněné spoje, opotřebená vložka.
        </li>
        <li>
          <strong>Nevhodný průřez komína</strong> — příliš úzký nebo naopak předimenzovaný průduch
          pro daný spotřebič.
        </li>
        <li>
          <strong>Chybějící nebo poškozená vložka</strong> — starší komíny často nemají vložku
          vůbec.
        </li>
        <li>
          <strong>Silné dehtové usazeniny</strong> — důsledek spalování vlhkého dřeva nebo
          nedostatečného čištění.
        </li>
        <li>
          <strong>Kondenzace spalin</strong> — typické u moderních kondenzačních kotlů napojených na
          staré komíny.
        </li>
      </ul>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
        <h3 className="text-amber-900 mt-0">Tip: Prevence je levnější než oprava</h3>
        <p className="text-amber-800 mb-0">
          Většinu závad lze odhalit při <strong>pravidelné roční kontrole</strong> a včas vyřešit za
          zlomek ceny havarijní opravy. Objednejte si posouzení stavu ještě dnes — poradenství je
          zdarma.
        </p>
      </div>
    </ServiceLayout>
  );
}
