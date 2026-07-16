import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/ServiceLayout";

export const Route = createFileRoute("/sluzby/frezovani")({
  head: () => ({
    meta: [
      { title: "Frézování komínů | Rychlá obnova tahu | VH Kominictví" },
      {
        name: "description",
        content:
          "Ekonomicky výhodný a šetrný způsob rekonstrukce komínového tělesa bez bourání. Zvětšete průduch a připravte komín pro bezpečné vložkování.",
      },
      { property: "og:title", content: "Frézování komínů | Rychlá obnova tahu | VH Kominictví" },
      {
        property: "og:description",
        content:
          "Šetrná rekonstrukce komínového tělesa bez bourání. Zvětšení průduchu a příprava pro bezpečné vložkování.",
      },
      { property: "og:url", content: "https://vhkominictvi.cz/sluzby/frezovani" },
    ],
    links: [{ rel: "canonical", href: "https://vhkominictvi.cz/sluzby/frezovani" }],
  }),
  component: FrezovaniPage,
});

function FrezovaniPage() {
  return (
    <ServiceLayout
      title="Frézování komínů"
      subtitle="Chybí vašemu komínu správný tah? Frézování je ekonomicky výhodná a rychlá cesta k bezpečnému a plně funkčnímu komínu bez nutnosti demolice."
      slug="frezovani"
    >
      <p className="lead">
        Funkční komín je jednou z nejdůležitějších součástí každé zdravé budovy. Slouží k bezpečnému
        odvádění spalin, a je proto velmi důležité udržovat ho čistý a průchodný. Jakmile ztratí
        potřebný tah, změníte technologii vytápění, či připojíte nový spotřebič, je nutné přistoupit
        k jeho rekonstrukci.
      </p>

      <h2>Proč a jak frézujeme?</h2>
      <p>
        Ekonomicky výhodný a přitom šetrný způsob rekonstrukce komínového tělesa je právě frézování.
        Použitím komínové frézy lze velmi snadno{" "}
        <strong>zvětšit vnitřní průměr komína až o 1/3</strong>.
      </p>

      <ol>
        <li>
          <strong>Spuštění frézy:</strong> Frézovací hlava se spustí ústím komína do jeho vnitřku.
        </li>
        <li>
          <strong>Odbroušení:</strong> Pomocí vysokých otáček fréza postupně obrušuje vnitřní zdivo
          na drobný prach.
        </li>
        <li>
          <strong>Příprava na vložkování:</strong> Tímto procesem se vytvoří dostatečný prostor pro
          vložení nové, bezpečné komínové vložky. (Lze frézovat i zakřivený komín!)
        </li>
        <li>
          <strong>Dokončení:</strong> Po frézování se <em>vždy</em> musí provést vložkování z důvodu
          absolutní těsnosti a požární bezpečnosti.
        </li>
      </ol>

      <h2>Kdy je frézování nejlepší volbou?</h2>
      <ul>
        <li>Při změně spotřebiče, který pro bezpečný provoz potřebuje větší průměr komína.</li>
        <li>Pro vyčištění silně zadehtovaného komína, který nelze vyčistit běžnou cestou.</li>
        <li>Jako nezbytná příprava na vložkování komína nerezovou nebo keramickou vložkou.</li>
        <li>
          Při přechodu na jinou technologii vytápění (např. na moderní kondenzační plynový kotel).
        </li>
        <li>Při rekonstrukci starších budov a sanaci historických komínů.</li>
      </ul>

      <div className="my-10 grid gap-6 sm:grid-cols-2 not-prose">
        <div className="rounded-xl bg-card p-6 border border-border shadow-sm">
          <h3 className="text-lg font-bold text-soot mb-3 flex items-center gap-2">
            <span className="text-green-500">✓</span> Co umíme frézovat
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Pálené cihly (rovné i lomené komíny)</li>
            <li>Vápenopískové cihly</li>
            <li>Šamotové cihly a vložky</li>
            <li>Beton (armatury je nutné demontovat bruskou)</li>
            <li>Kameninové potrubí</li>
          </ul>
        </div>
        <div className="rounded-xl bg-muted/50 p-6 border border-border shadow-sm">
          <h3 className="text-lg font-bold text-soot mb-3 flex items-center gap-2">
            <span className="text-destructive">×</span> Co nelze frézovat
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Kovové pevné komínové vložky</li>
            <li>Flexibilní kovové vložky</li>
            <li>Kovové armatury přímo ve zdivu</li>
            <li>Osinkocement / azbest (zdravotní riziko)</li>
          </ul>
        </div>
      </div>

      <h2>Hlavní výhody frézování</h2>
      <p>
        Při rekonstrukci komínového tělesa je frézování mnohem <strong>rychlejší a levnější</strong>{" "}
        než zdlouhavé bourání starého a stavba nového komína. Nevyžaduje masivní stavební zásahy do
        interiéru domu.
      </p>
      <p className="font-bold text-ember text-xl mt-6">
        Frézování komína, montáž vložky i zapojení spotřebiče jsme schopni provést za jediný den.
      </p>
    </ServiceLayout>
  );
}
