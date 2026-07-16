import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/ServiceLayout";

export const Route = createFileRoute("/sluzby/revize-kominu")({
  head: () => ({
    meta: [
      { title: "Revize komínů | Certifikovaná revizní zpráva | VH Kominictví" },
      {
        name: "description",
        content:
          "Potřebujete revizi komína pro stavební úřad, hasiče nebo pojišťovnu? Certifikovaný kominík s 14 lety praxe. Rychlý termín a férová cena.",
      },
      {
        property: "og:title",
        content: "Revize komínů | Certifikovaná revizní zpráva | VH Kominictví",
      },
      {
        property: "og:description",
        content:
          "Revize komína pro stavební úřad, hasiče i pojišťovnu. Certifikovaný kominík s 14 lety praxe.",
      },
      { property: "og:url", content: "https://vhkominictvi.cz/sluzby/revize-kominu" },
    ],
    links: [{ rel: "canonical", href: "https://vhkominictvi.cz/sluzby/revize-kominu" }],
  }),
  component: RevizePage,
});

function RevizePage() {
  return (
    <ServiceLayout
      title="Revize komínů"
      subtitle="Bez platné revizní zprávy nemůžete legálně topit. Získejte ji rychle, od certifikovaného kominíka s 14 lety zkušeností."
      slug="revize-kominu"
    >
      <p className="lead">
        Revize komína je ze zákona povinný úkon, bez kterého nesmíte uvést spotřebič do provozu.
        Není to jen formalita — je to <strong>komplexní prověření celé spalinové cesty</strong>,
        která chrání váš dům, vaši rodinu a vaše peníze. Jedna revizní zpráva vám otevře dveře u
        stavebního úřadu, hasičů i pojišťovny.
      </p>

      <h2>Co přesně revize zahrnuje</h2>
      <p>
        Na rozdíl od běžné kontroly je revize podrobným technickým posouzením stavu spalinové cesty.
        Kontroluji:
      </p>
      <ul>
        <li>
          <strong>Stavební stav komínového tělesa</strong> — celistvost zdiva, těsnost spár, stav
          pláště.
        </li>
        <li>
          <strong>Vnitřní průduch</strong> — průchodnost, stav vložky, případné usazeniny nebo
          poškození.
        </li>
        <li>
          <strong>Napojení spotřebiče</strong> — správné dimenzování, těsnost kouřovodu a sopouchu.
        </li>
        <li>
          <strong>Přívod vzduchu</strong> — zajištění dostatečného přístupu spalovacího vzduchu do
          místnosti.
        </li>
        <li>
          <strong>Požární bezpečnost</strong> — odstupové vzdálenosti od hořlavých konstrukcí a
          materiálů.
        </li>
        <li>
          <strong>Soulad s normami</strong> — ověření, zda spalinová cesta odpovídá platným ČSN a
          legislativě.
        </li>
      </ul>

      <h2>Kdy je revize komína povinná</h2>
      <p>
        Revize není totéž co pravidelná roční kontrola. Jedná se zpravidla o{" "}
        <strong>jednorázový úkon</strong>, po kterém už stačí hlídat pravidelné termíny čištění a
        kontrol. Revize je vyžadována:
      </p>
      <ul>
        <li>
          Při <strong>prvním uvedení do provozu</strong> nového nebo rekonstruovaného komína.
        </li>
        <li>
          Před zapojením nového spotřebiče do <strong>dosud nepoužívaného komína</strong>.
        </li>
        <li>
          Při <strong>výměně spotřebiče</strong> za jiný typ nebo výkon.
        </li>
        <li>
          Při <strong>změně druhu paliva</strong> (např. z pevného na plynné).
        </li>
        <li>
          Po <strong>poškození spalinové cesty</strong> nebo po požáru komína.
        </li>
        <li>
          Kdykoliv to vyžaduje <strong>stavební úřad, pojišťovna nebo hasiči</strong>.
        </li>
      </ul>

      <div className="my-10 grid gap-6 sm:grid-cols-3 not-prose">
        <div className="rounded-xl bg-card p-6 border border-border shadow-sm text-center">
          <div className="text-4xl font-extrabold text-ember">1000+</div>
          <p className="mt-2 text-sm text-muted-foreground">spokojených klientů ročně</p>
        </div>
        <div className="rounded-xl bg-card p-6 border border-border shadow-sm text-center">
          <div className="text-4xl font-extrabold text-ember">14</div>
          <p className="mt-2 text-sm text-muted-foreground">let praxe v oboru</p>
        </div>
        <div className="rounded-xl bg-card p-6 border border-border shadow-sm text-center">
          <div className="text-4xl font-extrabold text-ember">24h</div>
          <p className="mt-2 text-sm text-muted-foreground">obvykle zpráva do druhého dne</p>
        </div>
      </div>

      <h2>Co obdržíte po revizi</h2>
      <p>
        Po dokončení revize vám předám <strong>oficiální revizní zprávu</strong> v souladu s
        nařízením vlády č. 91/2010 Sb. Tento dokument obsahuje:
      </p>
      <ul>
        <li>Popis stavu celé spalinové cesty a všech jejích součástí.</li>
        <li>Identifikované nedostatky a doporučení k jejich odstranění.</li>
        <li>
          Jednoznačné vyjádření, zda je spalinová cesta <strong>způsobilá k provozu</strong>.
        </li>
        <li>Údaje o spotřebiči, druhu paliva a parametrech komína.</li>
      </ul>
      <p>
        Zprávu můžete okamžitě předložit stavebnímu úřadu, Hasičskému záchrannému sboru i vaší
        pojišťovně.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
        <h3 className="text-amber-900 mt-0">Revize vs. kontrola — jaký je rozdíl?</h3>
        <p className="text-amber-800 mb-0">
          <strong>Kontrola</strong> je pravidelný úkon (1–3× ročně), při kterém se posuzuje aktuální
          stav komína a odstraňují drobné nedostatky. <strong>Revize</strong> je komplexní technické
          posouzení, které se provádí jednorázově — typicky při změně spotřebiče, paliva nebo po
          rekonstrukci. Revizi smí provádět pouze osoba s příslušnou kvalifikací.
        </p>
      </div>
    </ServiceLayout>
  );
}
