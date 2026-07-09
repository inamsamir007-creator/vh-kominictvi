import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { X, C as ChevronLeft, c as ChevronRight } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const galleryImages = [
  {
    src: "038e5f86-8bd8-4156-aa37-e6fe86e9c4e6.jpg",
    alt: "Čištění komína Kryry - ukázka práce",
  },
  {
    src: "0bc54134-3170-4d30-b932-c4f82536d982.jpg",
    alt: "Revize komína Louny - kontrola",
  },
  {
    src: "0f39a742-65cb-4fb0-9356-e6bc4c091b7d.jpg",
    alt: "Frézování komína Žatec - detail",
  },
  {
    src: "101455e9-6a4f-423b-854d-76557247f5cb.jpg",
    alt: "Vložkování komína Podbořany - realizace",
  },
  {
    src: "146e1133-c246-46d5-a92d-aa8aa9267893.jpg",
    alt: "Kominické práce Rakovník - na střeše",
  },
  {
    src: "17ffea4a-8d82-4d5c-84ef-5caed14f543c.jpg",
    alt: "Kontrola spalinové cesty Chomutov",
  },
  {
    src: "402d84ab-18ab-48b0-a12d-d0b495fbb1eb.jpg",
    alt: "Oprava komína Kadaň",
  },
  {
    src: "420596ce-43f7-47c7-a0f3-b00dffacff04.jpg",
    alt: "Stavba nového komína Jesenice",
  },
  {
    src: "45518cd5-2147-433f-8046-6a476d246727.jpg",
    alt: "Vymetání dehtu z komína Kralovice",
  },
  {
    src: "49e734a0-5597-4e72-8cb2-df85d75fd03f.jpg",
    alt: "Montáž komínové stříšky Plasy",
  },
  {
    src: "4a35f5c2-a656-45c3-98a1-6eb35b910f7f.jpg",
    alt: "Revizní zpráva komína Žlutice",
  },
  {
    src: "50f2ab8e-4d3d-44dd-8c79-5db855af5d6e.jpg",
    alt: "Instalace nerezové vložky Bochov",
  },
  {
    src: "55968668-6081-4a9f-a2db-3fb641c5c99c.jpg",
    alt: "Kominík na střeše Toužim",
  },
  {
    src: "58855734-5534-4927-931a-7d0fbf73839f.jpg",
    alt: "Prohlídka komínovou kamerou Vroutek",
  },
  {
    src: "5c6df30f-1102-4b7b-84ce-c22b8453dd5c.jpg",
    alt: "Odstranění závady komína Lubenec",
  },
  {
    src: "635fc761-1aed-4fd0-9aae-0333dc7a4396.jpg",
    alt: "Čistý komín po frézování Nové Strašecí",
  },
  {
    src: "642fe06e-691c-406e-a1b5-c614e5f50932.jpg",
    alt: "Sanace komína Mutějovice",
  },
  {
    src: "66efb44c-27a2-4c55-8bf1-b16373ad864d.jpg",
    alt: "Měření tahu komína Kolešovice",
  },
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
  {
    src: "8b0ba140-1462-434c-b8e0-5cf6f7b75f67.jpg",
    alt: "Oprava komínové hlavy",
  },
  {
    src: "8dc69c77-dc5b-4588-8394-47c96a6d9946.jpg",
    alt: "Diagnostika komínového průduchu",
  },
  {
    src: "aec474bc-b914-46ed-ba70-7e83f2d59e2c.jpg",
    alt: "Kominictví Kryry - záchytný systém",
  },
  {
    src: "b12d0057-0246-427a-9b49-5c0b8b5bc5f6.jpg",
    alt: "Profesionální čištění spalinové cesty",
  },
  {
    src: "b34e9bbf-bd5e-46eb-8b3e-95baee12e3a4.jpg",
    alt: "Společenstvo kominíků ČR certifikace v praxi",
  },
  {
    src: "d0863523-ead8-4787-8721-0f1cbb943a94.jpg",
    alt: "Montáž fasádního komína",
  },
  {
    src: "dcd289f3-4c06-4b10-af9f-d567d1ac6f64.jpg",
    alt: "Vložkování komína na klíč",
  },
  {
    src: "ea91d5ca-488e-4caf-9899-7d0fcecada8e.jpg",
    alt: "Odborná revize po připojení kotle",
  },
  {
    src: "f4ad2d48-4d20-47e7-bab1-0d51e9934202.jpg",
    alt: "Ukázka kominické práce",
  },
  {
    src: "f52eec49-27d7-4e86-b03f-8642a37ae032.jpg",
    alt: "Kvalitní frézování zdiva",
  },
  {
    src: "ff8a57ac-6e9d-4e94-800c-5efa9cc7b71c.jpg",
    alt: "Spokojený zákazník po revizi",
  },
];
function GaleriePage() {
  const [selectedIndex, setSelectedIndex] = reactExports.useState(null);
  const handleNext = (e) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };
  const handlePrev = (e) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };
  reactExports.useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") setSelectedIndex((selectedIndex + 1) % galleryImages.length);
      if (e.key === "ArrowLeft")
        setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "bg-background min-h-screen py-16 md:py-24 pb-20 md:pb-24",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "mx-auto max-w-6xl px-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.header, {
            initial: {
              opacity: 0,
              y: 20,
            },
            whileInView: {
              opacity: 1,
              y: 0,
            },
            viewport: {
              once: true,
            },
            className: "max-w-2xl mb-12",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "text-xs font-bold uppercase tracking-[0.2em] text-ember",
                children: "Naše práce",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", {
                className: "mt-2 text-4xl font-extrabold text-soot md:text-5xl",
                children: "Galerie realizací",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "mt-4 text-lg text-muted-foreground",
                children:
                  "Podívejte se na ukázky naší kominické práce — od běžného čištění přes frézování a vložkování komínů až po montáže na klíč v širokém okolí města Kryry.",
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4",
            children: galleryImages.map((img, index) =>
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: {
                    opacity: 0,
                    scale: 0.95,
                  },
                  whileInView: {
                    opacity: 1,
                    scale: 1,
                  },
                  viewport: {
                    once: true,
                  },
                  transition: {
                    delay: (index % 10) * 0.05,
                  },
                  className:
                    "break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl bg-muted",
                  onClick: () => setSelectedIndex(index),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
                      src: `/gallery/${img.src}`,
                      alt: img.alt,
                      loading: "lazy",
                      className:
                        "w-full object-cover transition-transform duration-500 group-hover:scale-105",
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                      className:
                        "absolute inset-0 bg-soot/0 transition-colors duration-300 group-hover:bg-soot/20",
                    }),
                  ],
                },
                img.src,
              ),
            ),
          }),
        ],
      }),
      selectedIndex !== null &&
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm",
          onClick: () => setSelectedIndex(null),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
              className:
                "absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all",
              onClick: (e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              },
              "aria-label": "Zavřít",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-8 h-8" }),
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
              className:
                "absolute left-2 sm:left-4 md:left-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 sm:p-4 transition-all",
              onClick: handlePrev,
              "aria-label": "Předchozí",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, {
                className: "w-6 h-6 sm:w-8 sm:h-8",
              }),
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
              src: `/gallery/${galleryImages[selectedIndex].src}`,
              alt: galleryImages[selectedIndex].alt,
              className: "max-h-[90vh] max-w-[90vw] object-contain rounded-md shadow-2xl",
              onClick: (e) => e.stopPropagation(),
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
              className:
                "absolute right-2 sm:right-4 md:right-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 sm:p-4 transition-all",
              onClick: handleNext,
              "aria-label": "Další",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, {
                className: "w-6 h-6 sm:w-8 sm:h-8",
              }),
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className:
                "absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-md",
              children: [selectedIndex + 1, " / ", galleryImages.length],
            }),
          ],
        }),
    ],
  });
}
export { GaleriePage as component };
