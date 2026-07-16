import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/ServiceLayout";

export const Route = createFileRoute("/sluzby/cisteni-a-kontrola")({
  head: () => ({
    meta: [
      { title: "Čištění a pravidelná roční kontrola komínů | VH Kominictví" },
      {
        name: "description",
        content:
          "Zajistěte si klidný spánek s pravidelnou kontrolou a čištěním komína. Certifikované služby, mechanické odstranění sazí a dehtu, zpráva pro pojišťovnu.",
      },
      {
        property: "og:title",
        content: "Čištění a pravidelná roční kontrola komínů | VH Kominictví",
      },
      {
        property: "og:description",
        content:
          "Pravidelná kontrola a čištění komína. Certifikované služby, mechanické odstranění sazí a dehtu, zpráva pro pojišťovnu.",
      },
      {
        property: "og:url",
        content: "https://vhkominictvi.cz/sluzby/cisteni-a-kontrola",
      },
    ],
    links: [{ rel: "canonical", href: "https://vhkominictvi.cz/sluzby/cisteni-a-kontrola" }],
  }),
  component: CisteniPage,
});

function CisteniPage() {
  return (
    <ServiceLayout
      title="Čištění a pravidelná roční kontrola"
      subtitle="Nečekejte na požár nebo otravu spalinami. Získejte klidný spánek a jistotu s certifikovanou údržbou vaší spalinové cesty."
      slug="cisteni-a-kontrola"
    >
      <p className="lead">
        Požár domu nebo dokonce otrava spalinami mohou být důsledkem nečištěného a zanedbaného
        komína. Roku 2011 proto vláda vydala nařízení č. 91/2010, které stanovuje postup při údržbě
        a provozu spalinové cesty.{" "}
        <strong>
          Nejvhodnějším obdobím pro kontrolu a čištění je doba po ukončení nebo naopak před
          zahájením topné sezóny.
        </strong>
      </p>

      <h2>Při kontrole</h2>
      <p>
        Je posuzován celkový stav komína a také požární bezpečnost celého objektu. Nezbytný je
        bezpečný a volný přístup ke komínu.
        <strong>Po kontrole obdrží vlastník nemovitosti zprávu</strong>, která obsahuje zjištěné a
        odstraněné nedostatky a detailní popis specifik spalinové cesty. Tento dokument je klíčový
        nejen pro vaši bezpečnost, ale i pro případné jednání s pojišťovnou.
      </p>

      <h2>Při čištění</h2>
      <p>
        Komína provádíme důkladné <strong>mechanické odstranění sazí a kondenzátů</strong>, čímž
        dojde k úplnému zprůchodnění komínového průduchu a obnovení správného tahu.
      </p>

      <h2>Lhůty čištění a kontrol spalinové cesty</h2>
      <p>
        Zákon jasně definuje, jak často byste měli komín čistit a kontrolovat na základě výkonu
        připojeného spotřebiče a druhu paliva.
      </p>

      <div className="overflow-x-auto not-prose my-8">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-border bg-muted/50">
              <th className="p-3 font-bold text-soot">Výkon spotřebiče</th>
              <th className="p-3 font-bold text-soot">Činnost</th>
              <th className="p-3 font-bold text-soot">Pevná paliva</th>
              <th className="p-3 font-bold text-soot">Kapalná paliva</th>
              <th className="p-3 font-bold text-soot">Plynné paliva</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-3">do 50 kW (Celoroční)</td>
              <td className="p-3">Čištění</td>
              <td className="p-3 font-bold text-ember">3x za rok</td>
              <td className="p-3">2x za rok</td>
              <td className="p-3">1x za rok</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">do 50 kW (Sezónní)</td>
              <td className="p-3">Čištění</td>
              <td className="p-3 font-bold text-ember">2x za rok</td>
              <td className="p-3">1x za rok</td>
              <td className="p-3">1x za rok</td>
            </tr>
            <tr className="border-b border-border bg-muted/30">
              <td className="p-3 font-semibold">do 50 kW (Všechny)</td>
              <td className="p-3 font-semibold">Kontrola</td>
              <td className="p-3 font-bold text-soot" colSpan={3}>
                1x za rok pro všechna paliva
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">nad 50 kW</td>
              <td className="p-3">Čištění a kontrola</td>
              <td className="p-3 font-bold text-ember">2x za rok</td>
              <td className="p-3">1x za rok</td>
              <td className="p-3">1x za rok</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Důležitá pravidla pro specifické situace</h2>
      <ul>
        <li>
          <strong>Restaurace a stravovací služby:</strong> Spalinovou cestu pro spotřebič na pevná
          paliva sloužící k přípravě pokrmů je potřeba čistit a kontrolovat{" "}
          <strong>nejméně 1x za dva měsíce</strong>.
        </li>
        <li>
          <strong>Rekreační objekty:</strong> Čištění se provádí nejméně 1x ročně a kontrola nejméně
          1x za dva roky.
        </li>
        <li>
          <strong>Rezervní komíny:</strong> Čistí a kontrolují se ve stejných intervalech jako běžné
          komíny na pevná paliva.
        </li>
        <li>
          <strong>Kondenzační kotle:</strong> Spalinová cesta pro odvod spalin od kondenzačního
          spotřebiče na plynná paliva se čistí a kontroluje nejméně 1x za dva roky.
        </li>
        <li>
          <strong>Nepoužívané komíny:</strong> Pokud je spotřebič odpojen, průduch v sopouchu a ústí
          uzavřen a zabezpečen proti dešti, kontrola a čištění se provádět nemusí.
        </li>
      </ul>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
        <h3 className="text-amber-900 mt-0">Co si může majitel nemovitosti zkontrolovat sám?</h3>
        <ul className="text-amber-800 mb-0">
          <li>Zda je kouřovod správně upevněn a není propálený.</li>
          <li>Zda fungují uzávěry komínových dvířek.</li>
          <li>Zda jsou funkční přívodní šňůry a zásuvky u kotle.</li>
          <li>Zda je komín celistvý, bez spár a omítnutý.</li>
          <li>Zda je zařízení v domácnosti v dostatečném odstupu od tepelného zdroje.</li>
        </ul>
      </div>
    </ServiceLayout>
  );
}
