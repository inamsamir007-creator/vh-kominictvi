import { c as r, r as l, j as e } from "./index-Dxr5XOKA.js";
import { m as s } from "./proxy-BiqPpxvC.js";
import { C as b } from "./chevron-right-C_LbQ-xV.js";
const f = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  m = r("chevron-left", f);
const p = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  h = r("x", p),
  o = [
    { src: "038e5f86-8bd8-4156-aa37-e6fe86e9c4e6.jpg", alt: "Čištění komína Kryry - ukázka práce" },
    { src: "0bc54134-3170-4d30-b932-c4f82536d982.jpg", alt: "Revize komína Louny - kontrola" },
    { src: "0f39a742-65cb-4fb0-9356-e6bc4c091b7d.jpg", alt: "Frézování komína Žatec - detail" },
    {
      src: "101455e9-6a4f-423b-854d-76557247f5cb.jpg",
      alt: "Vložkování komína Podbořany - realizace",
    },
    {
      src: "146e1133-c246-46d5-a92d-aa8aa9267893.jpg",
      alt: "Kominické práce Rakovník - na střeše",
    },
    { src: "17ffea4a-8d82-4d5c-84ef-5caed14f543c.jpg", alt: "Kontrola spalinové cesty Chomutov" },
    { src: "402d84ab-18ab-48b0-a12d-d0b495fbb1eb.jpg", alt: "Oprava komína Kadaň" },
    { src: "420596ce-43f7-47c7-a0f3-b00dffacff04.jpg", alt: "Stavba nového komína Jesenice" },
    { src: "45518cd5-2147-433f-8046-6a476d246727.jpg", alt: "Vymetání dehtu z komína Kralovice" },
    { src: "49e734a0-5597-4e72-8cb2-df85d75fd03f.jpg", alt: "Montáž komínové stříšky Plasy" },
    { src: "4a35f5c2-a656-45c3-98a1-6eb35b910f7f.jpg", alt: "Revizní zpráva komína Žlutice" },
    { src: "50f2ab8e-4d3d-44dd-8c79-5db855af5d6e.jpg", alt: "Instalace nerezové vložky Bochov" },
    { src: "55968668-6081-4a9f-a2db-3fb641c5c99c.jpg", alt: "Kominík na střeše Toužim" },
    { src: "58855734-5534-4927-931a-7d0fbf73839f.jpg", alt: "Prohlídka komínovou kamerou Vroutek" },
    { src: "5c6df30f-1102-4b7b-84ce-c22b8453dd5c.jpg", alt: "Odstranění závady komína Lubenec" },
    {
      src: "635fc761-1aed-4fd0-9aae-0333dc7a4396.jpg",
      alt: "Čistý komín po frézování Nové Strašecí",
    },
    { src: "642fe06e-691c-406e-a1b5-c614e5f50932.jpg", alt: "Sanace komína Mutějovice" },
    { src: "66efb44c-27a2-4c55-8bf1-b16373ad864d.jpg", alt: "Měření tahu komína Kolešovice" },
    {
      src: "69b23e2f-e12f-4650-9435-2fcfa4cdaed2.jpg",
      alt: "Nová krbová vložka a připojení Kaznějov",
    },
    {
      src: "6fbbac67-cf85-4947-99ee-dad8b30f8a71.jpg",
      alt: "Kominické nářadí a příprava na práci",
    },
    {
      src: "75d2b4b6-747c-46c6-a8ef-4520e4f10426.jpg",
      alt: "Zabezpečení komína proti povětrnostním vlivům",
    },
    { src: "8b0ba140-1462-434c-b8e0-5cf6f7b75f67.jpg", alt: "Oprava komínové hlavy" },
    { src: "8dc69c77-dc5b-4588-8394-47c96a6d9946.jpg", alt: "Diagnostika komínového průduchu" },
    { src: "aec474bc-b914-46ed-ba70-7e83f2d59e2c.jpg", alt: "Kominictví Kryry - záchytný systém" },
    {
      src: "b12d0057-0246-427a-9b49-5c0b8b5bc5f6.jpg",
      alt: "Profesionální čištění spalinové cesty",
    },
    {
      src: "b34e9bbf-bd5e-46eb-8b3e-95baee12e3a4.jpg",
      alt: "Společenstvo kominíků ČR certifikace v praxi",
    },
    { src: "d0863523-ead8-4787-8721-0f1cbb943a94.jpg", alt: "Montáž fasádního komína" },
    { src: "dcd289f3-4c06-4b10-af9f-d567d1ac6f64.jpg", alt: "Vložkování komína na klíč" },
    { src: "ea91d5ca-488e-4caf-9899-7d0fcecada8e.jpg", alt: "Odborná revize po připojení kotle" },
    { src: "f4ad2d48-4d20-47e7-bab1-0d51e9934202.jpg", alt: "Ukázka kominické práce" },
    { src: "f52eec49-27d7-4e86-b03f-8642a37ae032.jpg", alt: "Kvalitní frézování zdiva" },
    { src: "ff8a57ac-6e9d-4e94-800c-5efa9cc7b71c.jpg", alt: "Spokojený zákazník po revizi" },
  ];
function u() {
  const [a, c] = l.useState(null),
    i = (t) => {
      (t.stopPropagation(), a !== null && c((a + 1) % o.length));
    },
    d = (t) => {
      (t.stopPropagation(), a !== null && c((a - 1 + o.length) % o.length));
    };
  return (
    l.useEffect(
      () => (
        a !== null
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = ""),
        () => {
          document.body.style.overflow = "";
        }
      ),
      [a],
    ),
    l.useEffect(() => {
      const t = (n) => {
        a !== null &&
          (n.key === "Escape" && c(null),
          n.key === "ArrowRight" && c((a + 1) % o.length),
          n.key === "ArrowLeft" && c((a - 1 + o.length) % o.length));
      };
      return (
        window.addEventListener("keydown", t),
        () => window.removeEventListener("keydown", t)
      );
    }, [a]),
    e.jsxs("div", {
      className: "bg-background min-h-screen py-16 md:py-24 pb-20 md:pb-24",
      children: [
        e.jsxs("div", {
          className: "mx-auto max-w-6xl px-4",
          children: [
            e.jsxs(s.header, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              className: "max-w-2xl mb-12",
              children: [
                e.jsx("p", {
                  className: "text-xs font-bold uppercase tracking-[0.2em] text-ember",
                  children: "Naše práce",
                }),
                e.jsx("h1", {
                  className: "mt-2 text-4xl font-extrabold text-soot md:text-5xl",
                  children: "Galerie realizací",
                }),
                e.jsx("p", {
                  className: "mt-4 text-lg text-muted-foreground",
                  children:
                    "Podívejte se na ukázky naší kominické práce — od běžného čištění přes frézování a vložkování komínů až po montáže na klíč v širokém okolí města Kryry.",
                }),
              ],
            }),
            e.jsx("div", {
              className: "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4",
              children: o.map((t, n) =>
                e.jsxs(
                  s.div,
                  {
                    initial: { opacity: 0, scale: 0.95 },
                    whileInView: { opacity: 1, scale: 1 },
                    viewport: { once: !0 },
                    transition: { delay: (n % 10) * 0.05 },
                    className:
                      "break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl bg-muted",
                    onClick: () => c(n),
                    children: [
                      e.jsx("img", {
                        src: `/gallery/${t.src}`,
                        alt: t.alt,
                        loading: "lazy",
                        className:
                          "w-full object-cover transition-transform duration-500 group-hover:scale-105",
                      }),
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-soot/0 transition-colors duration-300 group-hover:bg-soot/20",
                      }),
                    ],
                  },
                  t.src,
                ),
              ),
            }),
          ],
        }),
        a !== null &&
          e.jsxs("div", {
            className:
              "fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm",
            onClick: () => c(null),
            children: [
              e.jsx("button", {
                className:
                  "absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all",
                onClick: (t) => {
                  (t.stopPropagation(), c(null));
                },
                "aria-label": "Zavřít",
                children: e.jsx(h, { className: "w-8 h-8" }),
              }),
              e.jsx("button", {
                className:
                  "absolute left-2 sm:left-4 md:left-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 sm:p-4 transition-all",
                onClick: d,
                "aria-label": "Předchozí",
                children: e.jsx(m, { className: "w-6 h-6 sm:w-8 sm:h-8" }),
              }),
              e.jsx("img", {
                src: `/gallery/${o[a].src}`,
                alt: o[a].alt,
                className: "max-h-[90vh] max-w-[90vw] object-contain rounded-md shadow-2xl",
                onClick: (t) => t.stopPropagation(),
              }),
              e.jsx("button", {
                className:
                  "absolute right-2 sm:right-4 md:right-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 sm:p-4 transition-all",
                onClick: i,
                "aria-label": "Další",
                children: e.jsx(b, { className: "w-6 h-6 sm:w-8 sm:h-8" }),
              }),
              e.jsxs("div", {
                className:
                  "absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-md",
                children: [a + 1, " / ", o.length],
              }),
            ],
          }),
      ],
    })
  );
}
export { u as component };
