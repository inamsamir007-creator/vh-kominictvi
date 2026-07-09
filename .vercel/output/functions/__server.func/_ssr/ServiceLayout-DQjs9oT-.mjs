import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as ChevronRight, P as Phone } from "../_libs/lucide-react.mjs";
function ServiceLayout({ title, subtitle, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", {
    className: "min-h-screen bg-background",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", {
        className: "relative overflow-hidden bg-soot py-20 text-cream md:py-32",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className:
              "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,103,42,0.15),transparent_50%)]",
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "mx-auto max-w-4xl px-4 relative z-10 text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className:
                  "mb-6 flex items-center justify-center gap-2 text-sm font-semibold text-ember",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
                    to: "/",
                    className: "hover:underline",
                    children: "Domů",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Služby" }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", {
                className: "text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl",
                children: title,
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "mt-6 text-lg text-cream/80 md:text-xl max-w-2xl mx-auto",
                children: subtitle,
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className:
          "mx-auto max-w-3xl px-4 py-16 md:py-24 prose prose-zinc prose-lg prose-headings:font-display prose-headings:font-bold prose-a:text-ember prose-a:no-underline hover:prose-a:underline",
        children,
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
        className: "border-t border-border bg-card py-20",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "mx-auto max-w-4xl px-4 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", {
              className: "text-3xl font-extrabold text-soot",
              children: "Potřebujete pomoct s komínem?",
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
              className: "mt-4 text-muted-foreground",
              children: "Zavolejte mi nebo napište. Poradím vám zdarma a navrhnu nejlepší řešení.",
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
                  href: "tel:+420777444707",
                  className:
                    "inline-flex h-14 items-center justify-center gap-2 rounded-md bg-destructive px-8 text-lg font-bold text-destructive-foreground transition-all hover:scale-105 hover:shadow-[var(--shadow-soft)]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }),
                    "+420 777 444 707",
                  ],
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
                  to: "/",
                  hash: "kontakt",
                  className:
                    "inline-flex h-14 items-center justify-center gap-2 rounded-md border-2 border-soot bg-transparent px-8 text-lg font-bold text-soot transition-all hover:bg-soot hover:text-cream",
                  children: "Nezávazná poptávka",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { ServiceLayout as S };
