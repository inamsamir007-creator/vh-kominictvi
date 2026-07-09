import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import {
  c as createRouter,
  a as createRootRouteWithContext,
  u as useRouter,
  L as Link,
  O as Outlet,
  H as HeadContent,
  S as Scripts,
  b as createFileRoute,
  l as lazyRouteComponent,
} from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import {
  F as Facebook,
  M as MapPin,
  P as Phone,
  a as Mail,
  b as MessageCircle,
} from "../_libs/lucide-react.mjs";
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
const PHONE_DISPLAY = "+420 777 444 707";
const PHONE_HREF = "tel:+420777444707";
function StickyHeader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", {
    className:
      "sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
          href: "/#top",
          className: "group flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
              src: "/logo.png",
              alt: "VH Kominictví Logo",
              className:
                "h-10 w-auto object-contain drop-shadow-sm transition-transform group-hover:scale-105",
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
              className: "font-display text-xl font-bold tracking-tight text-soot",
              children: "VH Kominictví",
            }),
          ],
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "hidden items-center gap-6 md:flex",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "flex items-center gap-3 border-r border-border/60 pr-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                  href: "https://www.facebook.com/vhkominictvicz/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-muted-foreground hover:text-blue-600 transition-colors",
                  "aria-label": "Facebook",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, {
                    className: "h-5 w-5",
                  }),
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                  href: "https://maps.app.goo.gl/tvk12uiNMT5JsqND9",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-muted-foreground hover:text-emerald-600 transition-colors",
                  "aria-label": "Google Business Profile",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5" }),
                }),
              ],
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
              to: "/galerie",
              className: "text-sm font-bold text-ember hover:text-soot transition-colors",
              children: "📸 Naše Galerie",
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
              href: PHONE_HREF,
              className:
                "inline-flex h-9 items-center gap-2 rounded-md bg-destructive px-4 text-sm font-bold text-destructive-foreground shadow-sm transition hover:brightness-110",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, {
                  "aria-hidden": "true",
                  className: "h-4 w-4",
                }),
                PHONE_DISPLAY,
              ],
            }),
          ],
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "flex items-center gap-3 md:hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
              href: "https://www.facebook.com/vhkominictvicz/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-muted-foreground hover:text-blue-600 transition-colors",
              "aria-label": "Facebook",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-5 w-5" }),
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
              href: "https://maps.app.goo.gl/tvk12uiNMT5JsqND9",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-muted-foreground hover:text-emerald-600 transition-colors",
              "aria-label": "Google Business Profile",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5" }),
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
              href: PHONE_HREF,
              className:
                "inline-flex h-9 items-center gap-2 rounded-md bg-destructive px-3 text-sm font-bold text-destructive-foreground ml-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, {
                  "aria-hidden": "true",
                  className: "h-4 w-4",
                }),
                "Volat",
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", {
    className: "border-t border-border bg-background",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "group flex cursor-default items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
                    src: "/logo.png",
                    alt: "VH Kominictví Logo",
                    className:
                      "h-10 w-auto object-contain drop-shadow-sm transition-transform group-hover:scale-105",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                    className: "font-display text-xl font-bold text-soot",
                    children: "VH Kominictví",
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "mt-3 max-w-xs text-sm text-muted-foreground",
                children:
                  "Certifikovaný kominík pro Severní & západní Čechy a Středočeský kraj. Revize · čištění · kontroly.",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "mt-3 text-base font-extrabold uppercase tracking-wide text-ember",
                children: "Máme na to koule",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "mt-4 flex items-center gap-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                    href: "https://www.facebook.com/vhkominictvicz/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "rounded-full bg-muted p-2 text-muted-foreground hover:bg-blue-50 hover:text-blue-600 transition-colors",
                    "aria-label": "Facebook",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, {
                      className: "h-5 w-5",
                    }),
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                    href: "https://maps.app.goo.gl/tvk12uiNMT5JsqND9",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "rounded-full bg-muted p-2 text-muted-foreground hover:bg-emerald-50 hover:text-emerald-600 transition-colors",
                    "aria-label": "Google Business Profile",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, {
                      className: "h-5 w-5",
                    }),
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "mt-6 flex items-center gap-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
                    src: "/kominici-logo.png",
                    alt: "Společenstvo kominíků ČR",
                    className: "h-12 w-auto object-contain",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "text-xs font-bold text-muted-foreground leading-tight",
                    children: [
                      "Revizní technik spalinových cest ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "Člen společenstva kominíků ČR",
                    ],
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "text-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "font-bold text-soot",
                children: "Kontakt",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", {
                className: "mt-3 space-y-2 text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", {
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, {
                        "aria-hidden": "true",
                        className: "h-4 w-4 text-ember",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                        href: "tel:+420777444707",
                        className: "hover:text-soot",
                        children: "+420 777 444 707",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", {
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, {
                        "aria-hidden": "true",
                        className: "h-4 w-4 text-ember",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                        href: "mailto:husarik@vhkominictvi.cz",
                        className: "hover:text-soot",
                        children: "husarik@vhkominictvi.cz",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", {
                    className: "pt-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                        className: "block font-bold text-soot",
                        children: "Vladan Husařík",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                        className: "block text-xs",
                        children: "IČO: 88883736",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "text-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "font-bold text-soot",
                children: "Služby",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", {
                className: "mt-3 space-y-2 text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
                      to: "/sluzby/revize-kominu",
                      className: "hover:text-soot transition-colors",
                      children: "Revize komínů",
                    }),
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
                      to: "/sluzby/cisteni-a-kontrola",
                      className: "hover:text-soot transition-colors",
                      children: "Čištění & Kontroly",
                    }),
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
                      to: "/sluzby/zavady-a-posouzeni",
                      className: "hover:text-soot transition-colors",
                      children: "Závady & posouzení",
                    }),
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
                      to: "/sluzby/frezovani",
                      className: "hover:text-soot transition-colors",
                      children: "Frézování",
                    }),
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
                      to: "/sluzby/vlozkovani",
                      className: "hover:text-soot transition-colors",
                      children: "Vložkování",
                    }),
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "text-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "font-bold text-soot",
                children: "Rychlé odkazy",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", {
                className: "mt-3 grid grid-cols-2 gap-2 text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                      href: "/#sluzby",
                      className: "hover:text-soot transition-colors",
                      children: "Služby",
                    }),
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                      href: "/#cetnost",
                      className: "hover:text-soot transition-colors",
                      children: "Četnost",
                    }),
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                      href: "/#postup",
                      className: "hover:text-soot transition-colors",
                      children: "Postup",
                    }),
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                      href: "/#recenze",
                      className: "hover:text-soot transition-colors",
                      children: "Recenze",
                    }),
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                      href: "/#oblast",
                      className: "hover:text-soot transition-colors",
                      children: "Oblast",
                    }),
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                      href: "/#faq",
                      className: "hover:text-soot transition-colors",
                      children: "FAQ",
                    }),
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
                      to: "/galerie",
                      className: "hover:text-soot transition-colors text-ember font-semibold",
                      children: "Galerie",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "border-t border-border py-4 text-center text-xs text-muted-foreground",
        children: ["© ", /* @__PURE__ */ new Date().getFullYear(), " VH Kominictví · IČO 88883736"],
      }),
    ],
  });
}
function MobileCallBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className:
      "fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 p-2 backdrop-blur md:hidden",
    style: { paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" },
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "grid grid-cols-2 gap-2",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
          href: "tel:+420777444707",
          className:
            "inline-flex h-11 items-center justify-center gap-2 rounded-md bg-destructive font-bold text-destructive-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
            " Zavolat",
          ],
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
          href: "/#kontakt",
          className:
            "inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-card font-bold text-soot",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
            " Poptávka",
          ],
        }),
      ],
    }),
  });
}
const appCss = "/assets/styles-Dsci01Kl.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", {
          className: "text-7xl font-bold text-foreground",
          children: "404",
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", {
          className: "mt-4 text-xl font-semibold text-foreground",
          children: "Page not found",
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "The page you're looking for doesn't exist or has been moved.",
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "mt-6",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
            to: "/",
            className:
              "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
            children: "Go home",
          }),
        }),
      ],
    }),
  });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", {
          className: "text-xl font-semibold tracking-tight text-foreground",
          children: "This page didn't load",
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "Something went wrong on our end. You can try refreshing or head back home.",
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "mt-6 flex flex-wrap justify-center gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
              onClick: () => {
                router.invalidate();
                reset();
              },
              className:
                "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
              children: "Try again",
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
              href: "/",
              className:
                "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
              children: "Go home",
            }),
          ],
        }),
      ],
    }),
  });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "VH Kominictví — Revize, čištění a kontroly komínů" },
      {
        name: "description",
        content:
          "Certifikovaný kominík: revize, pravidelné čištění a kontroly komínů. Rychlý termín, férová cena, papíry pro hasiče i pojišťovnu.",
      },
      { property: "og:title", content: "VH Kominictví — Revize, čištění a kontroly komínů" },
      { name: "twitter:title", content: "VH Kominictví — Revize, čištění a kontroly komínů" },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c44c8210-e54e-450f-af34-50694c517f1c/id-preview-8769b082--4813cba9-e859-41ec-9a97-505914ee6a22.lovable.app-1780154257768.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c44c8210-e54e-450f-af34-50694c517f1c/id-preview-8769b082--4813cba9-e859-41ec-9a97-505914ee6a22.lovable.app-1780154257768.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://vhkominictvi.cz/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Nunito:wght@400;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", {
    lang: "cs",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("head", {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("body", {
        children: [children, /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})],
      }),
    ],
  });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, {
    client: queryClient,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "flex min-h-screen flex-col bg-background pb-16 md:pb-0",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StickyHeader, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", {
          className: "flex-1",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MobileCallBar, {}),
      ],
    }),
  });
}
const $$splitComponentImporter$6 = () => import("./galerie-DGkq8L9G.mjs");
const Route$6 = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      {
        title: "Galerie naší práce | VH Kominictví",
      },
      {
        name: "description",
        content:
          "Prohlédněte si ukázky naší práce. Frézování, vložkování, čištění a stavby komínů v oblasti Kryry, Louny, Žatec, Rakovník a širokém okolí.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
});
const $$splitComponentImporter$5 = () => import("./index-CKeghOKz.mjs");
const Route$5 = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "VH Kominictví — Revize, čištění a kontroly komínů | Severní & západní Čechy a Středočeský kraj",
      },
      {
        name: "description",
        content:
          "Certifikovaný kominík pro Prahu a Středočeský kraj. Revize, čištění a kontroly komínů dle vyhlášky 34/2016 Sb. Rychlý termín, férová cena, papíry hned.",
      },
      {
        property: "og:title",
        content: "VH Kominictví — Revize a kontroly komínů",
      },
      {
        property: "og:description",
        content: "Komín v pořádku. Papíry hned. Severní & západní Čechy a Středočeský kraj.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
});
const $$splitComponentImporter$4 = () => import("./zavady-a-posouzeni-DqgKEh6x.mjs");
const Route$4 = createFileRoute("/sluzby/zavady-a-posouzeni")({
  head: () => ({
    meta: [
      {
        title: "Závady komínů & odborné posouzení | VH Kominictví",
      },
      {
        name: "description",
        content:
          "Máte podezření na závadu komína? Diagnostika tahu, vlhkosti, dehtových usazenin. Odborné posouzení stavu a návrh řešení na míru.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
});
const $$splitComponentImporter$3 = () => import("./vlozkovani-BnxLy2Rg.mjs");
const Route$3 = createFileRoute("/sluzby/vlozkovani")({
  head: () => ({
    meta: [
      {
        title: "Vložkování komínů | Bezpečná sanace nerezovou vložkou | VH Kominictví",
      },
      {
        name: "description",
        content:
          "Vložkování komína nerezovou vložkou je rychlý a cenově výhodný způsob rekonstrukce starších komínů. Získejte komín, který splní všechny normy.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
});
const $$splitComponentImporter$2 = () => import("./revize-kominu-FadOI78o.mjs");
const Route$2 = createFileRoute("/sluzby/revize-kominu")({
  head: () => ({
    meta: [
      {
        title: "Revize komínů | Certifikovaná revizní zpráva | VH Kominictví",
      },
      {
        name: "description",
        content:
          "Potřebujete revizi komína pro stavební úřad, hasiče nebo pojišťovnu? Certifikovaný kominík s 14 lety praxe. Rychlý termín a férová cena.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
});
const $$splitComponentImporter$1 = () => import("./frezovani-kRxTtIfL.mjs");
const Route$1 = createFileRoute("/sluzby/frezovani")({
  head: () => ({
    meta: [
      {
        title: "Frézování komínů | Rychlá obnova tahu | VH Kominictví",
      },
      {
        name: "description",
        content:
          "Ekonomicky výhodný a šetrný způsob rekonstrukce komínového tělesa bez bourání. Zvětšete průduch a připravte komín pro bezpečné vložkování.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
});
const $$splitComponentImporter = () => import("./cisteni-a-kontrola-CUVcwDPL.mjs");
const Route = createFileRoute("/sluzby/cisteni-a-kontrola")({
  head: () => ({
    meta: [
      {
        title: "Čištění a pravidelná roční kontrola komínů | VH Kominictví",
      },
      {
        name: "description",
        content:
          "Zajistěte si klidný spánek s pravidelnou kontrolou a čištěním komína. Certifikované služby, mechanické odstranění sazí a dehtu, zpráva pro pojišťovnu.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
});
const GalerieRoute = Route$6.update({
  id: "/galerie",
  path: "/galerie",
  getParentRoute: () => Route$7,
});
const IndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7,
});
const SluzbyZavadyAPosouzeniRoute = Route$4.update({
  id: "/sluzby/zavady-a-posouzeni",
  path: "/sluzby/zavady-a-posouzeni",
  getParentRoute: () => Route$7,
});
const SluzbyVlozkovaniRoute = Route$3.update({
  id: "/sluzby/vlozkovani",
  path: "/sluzby/vlozkovani",
  getParentRoute: () => Route$7,
});
const SluzbyRevizeKominuRoute = Route$2.update({
  id: "/sluzby/revize-kominu",
  path: "/sluzby/revize-kominu",
  getParentRoute: () => Route$7,
});
const SluzbyFrezovaniRoute = Route$1.update({
  id: "/sluzby/frezovani",
  path: "/sluzby/frezovani",
  getParentRoute: () => Route$7,
});
const SluzbyCisteniAKontrolaRoute = Route.update({
  id: "/sluzby/cisteni-a-kontrola",
  path: "/sluzby/cisteni-a-kontrola",
  getParentRoute: () => Route$7,
});
const rootRouteChildren = {
  IndexRoute,
  GalerieRoute,
  SluzbyCisteniAKontrolaRoute,
  SluzbyFrezovaniRoute,
  SluzbyRevizeKominuRoute,
  SluzbyVlozkovaniRoute,
  SluzbyZavadyAPosouzeniRoute,
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
  return router;
};
export { getRouter };
