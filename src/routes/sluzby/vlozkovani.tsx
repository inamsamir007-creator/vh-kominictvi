import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/ServiceLayout";

export const Route = createFileRoute("/sluzby/vlozkovani")({
  head: () => ({
    meta: [
      { title: "Vložkování komínů | Bezpečná sanace nerezovou vložkou | VH Kominictví" },
      { name: "description", content: "Vložkování komína nerezovou vložkou je rychlý a cenově výhodný způsob rekonstrukce starších komínů. Získejte komín, který splní všechny normy." }
    ]
  }),
  component: VlozkovaniPage,
});

function VlozkovaniPage() {
  return (
    <ServiceLayout
      title="Vložkování komínů"
      subtitle="Komín, který splňuje všechny normy, chrání váš dům i rodinu. Vložkování je nejpoužívanější a nejspolehlivější způsob, jak ho tam dostat."
    >
      <p className="lead">
        Vložkování komína je jednou z nejúčinnějších možností opravy, rekonstrukce či sanace komína. Používá se velmi často v kombinaci s frézováním. Celý postup spočívá v instalaci komínové vložky do stávajícího, nejčastěji zděného komínového tělesa — a výsledkem je komín, který je <strong>bezpečný, těsný a připravený na roky spolehlivého provozu</strong>.
      </p>

      <h2>Jak probíhá vložkování komína</h2>
      <p>
        Vložkování komínů je dokonalý, rychlý a cenově výhodný způsob rekonstrukce zejména starších komínů. Celá podstata spočívá v tom, že se stávající komínový průduch opatří <strong>novou nerezovou vložkou příslušného rozměru</strong>, která zaručí, že váš komín získá všechny potřebné parametry, a především bude bezpečný.
      </p>
      <p className="font-semibold text-soot">
        Vyvložkování komínu je dobrá investice do budoucnosti celého domu.
      </p>

      <h2>Kdy je vhodné vložkování komína?</h2>
      <ul>
        <li>Když komínový průduch <strong>neodpovídá platným předpisům</strong>.</li>
        <li>Když má komín <strong>špatný tah</strong> a neplní svou funkci.</li>
        <li>Při přechodu na jiný druh paliva (např. plyn místo dřeva).</li>
        <li>Když <strong>kondenzát proniká</strong> do komínového tělesa a poškozuje zdivo.</li>
        <li>Při pronikání spalin do místnosti — to je <strong>přímé ohrožení zdraví</strong>.</li>
        <li>Když původní vložka dosloužila a neplní svou funkci.</li>
      </ul>

      <h2>Postup vložkování krok za krokem</h2>
      <ol>
        <li>
          <strong>Příprava otvorů:</strong> Stávající komín se příčně vybourá, aby bylo možné do zdiva vložit komínovou vložku. Pokud bourání není vhodné, průduch necháme vyfrézovat.
        </li>
        <li>
          <strong>Montážní otvory:</strong> Ve většině případů postačí dva otvory — jeden pro sopouch (napojení) a druhý pro kontrolní otvor s vymetacími dvířky.
        </li>
        <li>
          <strong>Usazení kondenzační jímky:</strong> Do sběrače kondenzátu vsuneme komínový díl s kontrolním otvorem. Poté následuje napojovací T-díl (sopouch).
        </li>
        <li>
          <strong>Spouštění vložek:</strong> Komínové vložky se spouští z místa vyústění komína. Hrdlo je vždy nahoře, každý spoj musí být pevný a těsný.
        </li>
        <li>
          <strong>Zazdění a izolace:</strong> Montážní otvory se zazdí do úrovně stávajícího zdiva a povrch se omítne. V místě prostupu stěnou se sopouch obalí tepelnou izolací.
        </li>
        <li>
          <strong>Krycí deska:</strong> Provedení krycí desky musí zabezpečit dilataci komínové vložky a zabránit pronikání srážkové vody.
        </li>
      </ol>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
        <h3 className="text-amber-900 mt-0">Proč právě nerezová vložka?</h3>
        <p className="text-amber-800 mb-0">
          Moderní spotřebiče na plynná, kapalná i pevná paliva kladou vysoké nároky na odtah spalin. Nerezová vložka nabízí <strong>nízkou nasákavost, odolnost vůči vlhkosti a agresivnímu prostředí</strong>, a především odolnost proti vyhoření — při vyhoření sazí vznikají uvnitř komína teploty přes 1 000 °C.
        </p>
      </div>

      <h2>Bezpečnost při provozu</h2>
      <p>
        Při provozu, který není zcela v pořádku (vlivem špatného návrhu komína, nevhodně zvoleného spotřebiče nebo špatné kvality dřeva), se na vnitřní straně komínové vložky může velmi rychle utvořit povlak sazí. Ve zvláštních případech pak může dojít i k nekontrolovanému samovznícení sazí v komíně. Proto je <strong>kvalita materiálu a dílů použitých při stavbě komína zásadní</strong>.
      </p>
      <p>
        Před uvedením spotřebiče do provozu musí být na spalinovou cestu vystavena <strong>revizní zpráva dle NV č. 91/2010 Sb.</strong>
      </p>
    </ServiceLayout>
  );
}
