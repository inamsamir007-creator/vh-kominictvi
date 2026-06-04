import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Root2, I as Item, H as Header, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { u as useScroll, a as useTransform, m as motion } from "../_libs/framer-motion.mjs";
import { P as Phone, C as CircleCheck, S as Star, b as Scale, c as FileCheckCorner, B as Brush, d as ShieldCheck, T as TriangleAlert, e as Cog, L as Layers, a as MessageCircle, f as PhoneCall, g as CalendarCheck, W as Wrench, Q as Quote, h as MapPin, i as LoaderCircle, j as Send, k as CircleAlert, l as ChevronDown } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const PHONE_HREF = "tel:+420777444707";
function MagneticButton({ children, href }) {
  const ref = reactExports.useRef(null);
  const [position, setPosition] = reactExports.useState({ x: 0, y: 0 });
  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };
  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.a,
    {
      ref,
      href,
      onMouseMove: handleMouse,
      onMouseLeave: reset,
      animate: { x: position.x, y: position.y },
      transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
      className: "group inline-flex h-14 items-center justify-center gap-2 rounded-md bg-destructive px-8 text-lg font-bold text-destructive-foreground shadow-[var(--shadow-ember)] hover:brightness-110",
      children
    }
  );
}
function HeroSection() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const imageY = useTransform(scrollY, [0, 500], [0, 50]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        style: { y: backgroundY },
        className: "absolute inset-0 -z-10 bg-gradient-to-b from-cream via-background to-muted"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-ember/25 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-12 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7 fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-6xl font-extrabold tracking-tight text-soot md:text-8xl", children: [
          "Komín v pořádku.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-soot/70 to-soot/50 bg-clip-text text-transparent", children: "Papíry hned." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground md:text-xl", children: "Revize, čištění a kontroly komínů podle vyhlášky č. 34/2016 Sb. Přijedeme, uklidíme po sobě a vystavíme zprávu pro hasiče i pojišťovnu — bez čekání." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col gap-3 sm:flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(MagneticButton, { href: PHONE_HREF, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Phone,
              {
                "aria-hidden": "true",
                className: "h-5 w-5 transition-transform group-hover:-rotate-12"
              }
            ),
            "Zavolat zdarma"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#kontakt",
              className: "inline-flex h-14 items-center justify-center rounded-md border border-border bg-card/80 px-8 text-lg font-bold text-soot backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-muted hover:shadow-[var(--shadow-soft)]",
              children: "Získat nezávaznou nabídku"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-soot", children: [
          "Certifikace — revizní technik",
          "14 let praxe v oboru",
          "Více než 500 klientů ročně",
          "Pojištění odpovědnosti 5 mil. Kč"
        ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { "aria-hidden": "true", className: "h-4 w-4 text-ember" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: t })
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: { y: imageY }, className: "md:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-sm rounded-2xl border border-cream/20 bg-card/70 p-6 shadow-[var(--shadow-ember)] backdrop-blur-xl fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/vladan.jpg",
            alt: "Vladan Husařík — kominík VH Kominictví",
            width: 400,
            height: 500,
            className: "aspect-[4/5] w-full object-cover object-top",
            loading: "eager"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-soot", children: "Vladan Husařík" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Kominík · 14 let praxe" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-ember/20 px-3 py-1.5 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { "aria-hidden": "true", className: "h-4 w-4 fill-ember text-ember" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold leading-none text-soot", children: "4,9" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Google" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
function LegalCalloutBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-y border-soot/15 bg-soot text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-sm md:flex-row md:items-center md:justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { className: "h-4 w-4 text-ember" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Povinnost ze zákona:" }),
        " kontrola spalinové cesty 1× ročně dle vyhlášky č. 34/2016 Sb."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#cetnost", className: "text-ember underline-offset-4 hover:underline", children: "Jak často přesně? →" })
  ] }) });
}
const services = [
  {
    icon: FileCheckCorner,
    title: "Revize komínů",
    desc: "Revizní zpráva pro stavební úřad, hasiče i pojišťovnu. Platí pro nové i rekonstruované komíny.",
    featured: true,
    href: "/sluzby/revize-kominu"
  },
  {
    icon: Brush,
    title: "Čištění",
    desc: "Mechanické vymetení, odstranění sazí a dehtu. Bez nepořádku v bytě.",
    href: "/sluzby/cisteni-a-kontrola"
  },
  {
    icon: ShieldCheck,
    title: "Pravidelná kontrola",
    desc: "Roční kontrola dle vyhlášky 34/2016 Sb. včetně protokolu.",
    href: "/sluzby/cisteni-a-kontrola"
  },
  {
    icon: TriangleAlert,
    title: "Závady & posouzení",
    desc: "Diagnostika tahu, vlhkosti, dehtových usazenin a vyvložkování.",
    href: "/sluzby/zavady-a-posouzeni"
  },
  {
    icon: Cog,
    title: "Frézování",
    desc: "Zvětšení průměru komínového průduchu pro zvýšení tahu nebo instalaci tlustší vložky.",
    href: "/sluzby/frezovani"
  },
  {
    icon: Layers,
    title: "Vložkování",
    desc: "Sanace komína vložením nerezové či ohebné vložky. Nezbytné pro moderní kondenzační kotle.",
    href: "/sluzby/vlozkovani"
  }
];
function ServicesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "sluzby", className: "scroll-mt-20 bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.2em] text-ember", children: "Co dělám" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-4xl font-extrabold text-soot md:text-5xl", children: "Vše kolem komína na jednom místě" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Specializace na rodinné domy, chalupy a menší provozovny. Vždy s papírem, který obstojí u hasičů i pojišťovny." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-3", children: services.map((s) => {
      const Icon = s.icon;
      const featured = s.featured;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: s.href,
          className: [
            "group relative block rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-ember)] hover:border-ember/50",
            featured ? "md:col-span-2 md:row-span-1 bg-soot text-cream border-soot hover:border-ember/80" : ""
          ].join(" "),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: [
                  "grid h-11 w-11 place-items-center rounded-lg transition-all duration-500 group-hover:scale-110 group-hover:bg-ember group-hover:text-soot",
                  featured ? "bg-ember text-soot shadow-[0_0_15px_rgba(199,103,42,0.4)] group-hover:shadow-[0_0_25px_rgba(199,103,42,0.6)]" : "bg-ember/20 text-soot"
                ].join(" "),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: [
                  "mt-4 text-xl font-extrabold",
                  featured ? "text-cream" : "text-soot"
                ].join(" "),
                children: s.title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: [
                  "mt-2 text-sm",
                  featured ? "text-cream/80" : "text-muted-foreground"
                ].join(" "),
                children: s.desc
              }
            ),
            featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-4 inline-block rounded-full bg-ember px-3 py-1 text-xs font-bold text-soot", children: "Nejčastější zakázka" })
          ]
        },
        s.title
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3 rounded-xl border border-dashed border-ember bg-ember/10 px-4 py-3 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4 text-soot" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-soot", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Poradenství zdarma" }),
        " — než zavoláte jiného kominíka, zeptejte se. Telefon i SMS, odpovídám týž den."
      ] })
    ] })
  ] }) });
}
const data = {
  tuhe: {
    label: "Tuhá paliva (dřevo, uhlí)",
    rows: [
      { use: "Celoroční provoz", check: "1× ročně", clean: "3× ročně", highlight: true },
      { use: "Sezónní provoz", check: "1× ročně", clean: "2× ročně" },
      { use: "Rekreační objekt", check: "1× za 2 roky", clean: "1× ročně" }
    ]
  },
  kapalne: {
    label: "Kapalná paliva",
    rows: [
      { use: "Celoroční provoz", check: "1× ročně", clean: "2× ročně" },
      { use: "Sezónní provoz", check: "1× ročně", clean: "1× ročně" }
    ]
  },
  plynne: {
    label: "Plynná paliva",
    rows: [
      { use: "Spotřebič do 50 kW", check: "1× ročně", clean: "1× ročně" },
      { use: "Spotřebič nad 50 kW", check: "2× ročně", clean: "2× ročně" }
    ]
  }
};
function FrequencyTable() {
  const [fuel, setFuel] = reactExports.useState("tuhe");
  const set = data[fuel];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "cetnost", className: "scroll-mt-20 bg-muted/40 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.2em] text-ember", children: "Vyhláška 34/2016" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-4xl font-extrabold text-soot md:text-5xl", children: "Jak často musíte komín řešit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Vyberte si typ paliva — ukážu vám přesnou četnost kontrol a čištění." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 inline-flex rounded-full border border-border bg-card p-1", children: Object.keys(data).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setFuel(k),
        className: [
          "rounded-full px-4 py-2 text-sm font-semibold transition",
          fuel === k ? "bg-soot text-cream" : "text-muted-foreground hover:text-soot"
        ].join(" "),
        children: data[k].label.split(" ")[0]
      },
      k
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 hidden overflow-hidden rounded-2xl border border-border bg-card md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-soot text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 text-sm font-bold", children: "Provoz" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 text-sm font-bold", children: "Kontrola" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 text-sm font-bold", children: "Čištění" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: set.rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 font-semibold text-soot", children: r.use }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-soot", children: r.check }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: r.highlight ? "inline-block rounded-full bg-ember px-3 py-1 text-sm font-bold text-soot" : "text-soot",
            children: r.clean
          }
        ) })
      ] }, r.use)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-3 md:hidden", children: set.rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-soot", children: r.use }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-2 gap-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Kontrola" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-semibold text-soot", children: r.check })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Čištění" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: [
                "mt-1 font-semibold",
                r.highlight ? "inline-block rounded-full bg-ember px-2 py-0.5 text-soot" : "text-soot"
              ].join(" "),
              children: r.clean
            }
          )
        ] })
      ] })
    ] }, r.use)) })
  ] }) });
}
const steps = [
  {
    icon: PhoneCall,
    title: "Zavoláte",
    desc: "Krátký hovor — domluvíme termín a vysvětlím cenu předem."
  },
  {
    icon: CalendarCheck,
    title: "Domluvíme termín",
    desc: "Většinou do 3 dnů, v urgentních případech i tentýž den."
  },
  {
    icon: Wrench,
    title: "Odvedu práci",
    desc: "Profesionálně, čistě, s ohleduplností k vašemu bytu i domu."
  },
  {
    icon: FileCheckCorner,
    title: "Dostanete revizní zprávu",
    desc: "Protokol o provedení povinné roční kontroly spalinových cest."
  }
];
function HowItWorksSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "postup", className: "scroll-mt-20 bg-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.2em] text-ember", children: "Postup" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-4xl font-extrabold text-soot md:text-5xl", children: "Čtyři kroky, žádné překvapení" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "relative mt-10 grid gap-6 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 top-6 hidden h-px bg-ember/40 md:block" }),
      steps.map((s, i) => {
        const Icon = s.icon;
        const stepNumber = String(i + 1).padStart(2, "0");
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:shadow-[var(--shadow-soft)] hover:-translate-y-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-4 -top-6 text-[8rem] font-black leading-none text-muted/30 select-none z-0", children: stepNumber }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 grid h-12 w-12 place-items-center rounded-full bg-ember text-soot shadow-[var(--shadow-ember)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "relative z-10 mt-6 font-display text-sm font-bold uppercase tracking-wider text-ember", children: [
                "Krok ",
                i + 1
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative z-10 mt-1 text-xl font-extrabold text-soot", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative z-10 mt-2 text-sm text-muted-foreground", children: s.desc })
            ]
          },
          s.title
        );
      })
    ] })
  ] }) });
}
const reviews = [
  {
    text: "Přijel přesně na čas, vše rychle vyčistil, vysvětlil mi stav komína a hned na místě vystavil zprávu. Konečně někdo, kdo to bere vážně.",
    author: "Jana K.",
    place: "Žatec"
  },
  {
    text: "Férová cena, žádné překvapení na faktuře. Po práci nezůstal v bytě ani prach. Doporučuji všem sousedům.",
    author: "Martin D.",
    place: "Beroun"
  },
  {
    text: "Volal jsem v pátek odpoledne, v sobotu ráno už byl u nás. Zachránil mi pojistnou událost — papíry měl hotové na místě.",
    author: "Petr V.",
    place: "Kladno"
  }
];
function TrustSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "recenze", className: "scroll-mt-20 overflow-hidden bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.2em] text-ember", children: "Reference" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-4xl font-extrabold text-soot md:text-5xl", children: "Mluví za mě klienti" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-ember text-ember" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-soot", children: "4,9 / 5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "· 100 % pozitivních" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-3", children: reviews.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "figure",
      {
        className: "rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-6 w-6 text-ember" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "mt-3 text-soot", children: r.text }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-4 text-sm font-semibold text-muted-foreground", children: [
            r.author,
            " · ",
            r.place
          ] })
        ]
      },
      r.author
    )) })
  ] }) });
}
const groups = [
  {
    title: "Ústecký kraj",
    towns: ["Bochov", "Toužim", "Žatec", "Louny", "atd."]
  },
  {
    title: "Karlovarský kraj",
    towns: ["Karlovy Vary", "Sokolov", "Cheb", "atd."]
  },
  {
    title: "Plzeňský kraj",
    towns: ["Plzeň", "Tachov", "Rokycany", "atd."]
  },
  {
    title: "Středočeský kraj (sever a západ)",
    towns: ["Kladno", "Rakovník", "Mělník", "atd."]
  },
  {
    title: "Praha",
    towns: ["po domluvě"]
  }
];
function CoverageSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "oblast", className: "scroll-mt-20 border-y border-border bg-card py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.2em] text-ember", children: "Kde působíme" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-4xl font-extrabold text-soot md:text-5xl", children: "Severní & západní Čechy a Středočeský kraj" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Nejste si jistí, jestli k vám dojedu? Zavolejte — větší zakázky řeším po celé ČR." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: groups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-ember" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-soot", children: g.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 flex flex-wrap gap-2", children: g.towns.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded-full bg-muted px-3 py-1 text-sm text-soot", children: t }, t)) })
    ] }, g.title)) })
  ] }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
const faqs = [
  {
    q: "Účtujete si cestovné k zákazníkovi?",
    a: "Doprava v rámci Severních a západních Čech a Středočeského kraje je zahrnuta v ceně služby, takže neplatíte žádné skryté poplatky za výjezd."
  },
  {
    q: "Kolik stojí revize komínu?",
    a: "Standardní revize rodinného domu vychází od 1 200 Kč včetně písemné zprávy. Přesnou cenu vždy řeknu předem po telefonu, žádné překvapení na faktuře."
  },
  {
    q: "Jak rychle dokážete přijet?",
    a: "Běžně do 2–3 pracovních dnů. V akutních případech (zápach, podezření na požár) i tentýž den."
  },
  {
    q: "Vystavíte zprávu pro pojišťovnu?",
    a: "Ano. Revizní i kontrolní zprávu dostanete vytištěnou na místě, plně akceptovanou hasiči i českými pojišťovnami."
  },
  {
    q: "Uklízíte po sobě?",
    a: "Samozřejmě. Pracuji s vysavačem se sazovým filtrem a plachtami. V bytě po mně nezůstane prach."
  },
  {
    q: "Co když mi řeknete, že komín neprojde?",
    a: "Navrhnu konkrétní řešení (vyvložkování, oprava, čištění) a férovou cenu. Nikdy netlačím na zbytečné práce."
  }
];
function FaqSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "scroll-mt-20 bg-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.2em] text-ember", children: "Časté dotazy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-4xl font-extrabold text-soot md:text-5xl", children: "Na co se mě ptáte nejčastěji" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "mt-10", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `item-${i}`, className: "border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left text-lg font-bold text-soot hover:no-underline", children: f.q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-base text-muted-foreground", children: f.a })
    ] }, i)) })
  ] }) });
}
function ContactForm() {
  const [sent, setSent] = reactExports.useState(false);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({ phone: "", email: "", town: "", service: "Revize" });
  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    try {
      const response = await fetch("https://formsubmit.co/ajax/husarik@vhkominictvi.cz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          _subject: "Nová poptávka z webu!",
          email: form.email,
          "Telefonní číslo": form.phone,
          "E-mail": form.email,
          "Obec / město": form.town,
          Služba: form.service
        })
      });
      if (response.ok) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "kontakt", className: "scroll-mt-20 bg-soot py-20 text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.2em] text-ember", children: "Kontakt" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-2 text-4xl font-extrabold md:text-5xl", children: [
        "Stačí kontakt a obec.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ember", children: "Ozvu se do hodiny." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-cream/75", children: "Žádné formuláře na deset políček. Napíšete mi telefon, e-mail, město a co potřebujete — zbytek doladíme spolu." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "tel:+420777444707",
          className: "mt-6 inline-flex h-12 items-center gap-2 rounded-md bg-destructive px-6 font-bold text-destructive-foreground transition hover:brightness-110",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { "aria-hidden": "true", className: "h-5 w-5" }),
            "+420 777 444 707"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-cream/15 bg-cream p-6 text-soot shadow-[var(--shadow-soft)]", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center py-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { "aria-hidden": "true", className: "h-12 w-12 text-ember" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-2xl font-extrabold", children: "Díky, mám to." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-xs text-muted-foreground", children: "Ozvu se vám do hodiny v pracovní době, nejpozději druhý den ráno." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "grid gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "group grid gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold transition-colors group-focus-within:text-ember", children: "Telefon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            required: true,
            type: "tel",
            inputMode: "tel",
            autoComplete: "tel",
            spellCheck: false,
            value: form.phone,
            onChange: (e) => setForm({ ...form, phone: e.target.value }),
            placeholder: "+420 ...",
            className: "h-12 rounded-md border border-border/80 bg-background/50 px-3 outline-none transition-all focus:border-ember focus:bg-background focus:ring-4 focus:ring-ember/10"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "group grid gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold transition-colors group-focus-within:text-ember", children: "E-mail" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            required: true,
            type: "email",
            inputMode: "email",
            autoComplete: "email",
            value: form.email,
            onChange: (e) => setForm({ ...form, email: e.target.value }),
            placeholder: "vas@email.cz",
            className: "h-12 rounded-md border border-border/80 bg-background/50 px-3 outline-none transition-all focus:border-ember focus:bg-background focus:ring-4 focus:ring-ember/10"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "group grid gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold transition-colors group-focus-within:text-ember", children: "Obec / město" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            required: true,
            autoComplete: "address-level2",
            value: form.town,
            onChange: (e) => setForm({ ...form, town: e.target.value }),
            placeholder: "např. Karlovy Vary",
            className: "h-12 rounded-md border border-border/80 bg-background/50 px-3 outline-none transition-all focus:border-ember focus:bg-background focus:ring-4 focus:ring-ember/10"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "group grid gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold transition-colors group-focus-within:text-ember", children: "Co potřebujete" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: form.service,
            onChange: (e) => setForm({ ...form, service: e.target.value }),
            className: "h-12 rounded-md border border-border/80 bg-background/50 px-3 outline-none transition-all focus:border-ember focus:bg-background focus:ring-4 focus:ring-ember/10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Revize" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Pravidelná kontrola" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Čištění" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Frézování" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Vložkování" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Posouzení závady" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Nevím, poraďte" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          disabled: isSubmitting,
          className: "group mt-2 inline-flex h-14 items-center justify-center gap-2 rounded-md bg-soot text-lg font-bold text-cream transition-all duration-300 hover:scale-[1.02] hover:bg-soot/90 hover:shadow-[var(--shadow-ember)] disabled:pointer-events-none disabled:opacity-70",
          children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { "aria-hidden": "true", className: "h-5 w-5 animate-spin" }),
            "Odesílám..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Send,
              {
                "aria-hidden": "true",
                className: "h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              }
            ),
            "Odeslat poptávku"
          ] })
        }
      ),
      error && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-sm text-red-500 font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }),
        "Něco se pokazilo. Zkuste to prosím znovu, nebo nám zavolejte."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Odesláním souhlasíte se zpracováním údajů pouze pro vyřízení poptávky." })
    ] }) })
  ] }) });
}
function LandingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LegalCalloutBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FrequencyTable, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorksSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrustSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CoverageSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FaqSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {})
  ] });
}
export {
  LandingPage as component
};
