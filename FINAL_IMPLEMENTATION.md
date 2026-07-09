# VH Kominictví — Brand Colors & Design Guidelines

> Extracted from the official VH Kominictví logo. This document defines the brand color palette, typography, and guidance for applying the brand consistently across the website.

---

## Logo

The cleaned logo (`public/logo.png`) is a transparent PNG and should always be displayed on dark or neutral backgrounds for maximum contrast. Avoid placing it on busy imagery without a backdrop.

---

## 🎨 Brand Color Palette

### Primary Colors (from logo)

| Role                 | Hex       | OKLCH                  | Swatch | Description                                                                                          |
| -------------------- | --------- | ---------------------- | ------ | ---------------------------------------------------------------------------------------------------- |
| **Soot Black**       | `#1A1A1A` | `oklch(0.18 0.005 50)` | ⬛     | Dominant logo color. The chimney sweep's uniform, "VH" letterforms, hat. This is the brand's anchor. |
| **Chimney Charcoal** | `#2D2D2D` | `oklch(0.25 0.005 50)` | ⬛     | The chimney structure, secondary dark elements. Slightly softer than soot black.                     |
| **Brick Red**        | `#B83A1A` | `oklch(0.50 0.17 30)`  | 🟥     | Chimney bricks, red ribbon behind "KOMINICTVÍ". Bold, warm, and traditional. The signature accent.   |
| **Crimson Accent**   | `#D41A1A` | `oklch(0.52 0.22 28)`  | 🔴     | Red accent tips on the ribbon edges. Used sparingly for high-impact moments.                         |
| **Gold Brass**       | `#D4A530` | `oklch(0.76 0.15 80)`  | 🟡     | Buttons, belt buckle, uniform trim. Warm and premium. Connotes craftsmanship and trust.              |
| **Silver Chrome**    | `#B8B8B8` | `oklch(0.78 0.005 0)`  | ⬜     | Metallic "VH" letters, ladder, tools. Provides industrial professionalism.                           |
| **Smoke Grey**       | `#9A9A9A` | `oklch(0.68 0.005 0)`  | 🩶     | Chimney smoke. Soft, airy, neutral.                                                                  |

### Extended Palette (derived for web use)

| Role            | Hex       | OKLCH                  | Use Case                                                                             |
| --------------- | --------- | ---------------------- | ------------------------------------------------------------------------------------ |
| **Warm Cream**  | `#FAF5EE` | `oklch(0.97 0.012 85)` | Page background. Feels like parchment/paper — warm and inviting, not clinical white. |
| **Smoke Mist**  | `#F0ECE6` | `oklch(0.94 0.012 80)` | Muted card backgrounds, section alternation.                                         |
| **Ember Amber** | `#D4922A` | `oklch(0.72 0.16 70)`  | CTA hover states, highlights, accent badges. A warmer variant of Gold Brass.         |
| **Deep Brick**  | `#8B2A14` | `oklch(0.42 0.15 28)`  | Hover state for Brick Red. Darker for contrast.                                      |
| **Ash Border**  | `#D6CFBF` | `oklch(0.85 0.015 75)` | Borders, dividers, input outlines. Warm grey that matches the cream.                 |

---

## 🔤 Typography

| Role                   | Font       | Weight             | Usage                                                                                               |
| ---------------------- | ---------- | ------------------ | --------------------------------------------------------------------------------------------------- |
| **Display / Headings** | **Sora**   | 700, 800           | Hero headlines, section titles, `<h1>`, `<h2>`. Geometric, modern, premium feel.                    |
| **Body / UI**          | **Nunito** | 400, 600, 700, 800 | Paragraphs, labels, navigation, buttons. Rounded and friendly, supports Czech diacritics perfectly. |

### Typography Rules

- **h1**: Sora 800, `text-5xl` → `text-7xl`, letter-spacing `-0.01em`, line-height `1.05`
- **h2**: Sora 700, `text-3xl` → `text-5xl`, letter-spacing `-0.01em`
- **h3/h4**: Nunito 800
- **Body**: Nunito 400, `text-base` → `text-lg`
- **All Czech characters** (ě, š, č, ř, ž, ý, á, í, é, ú, ů, ď, ť, ň) must render cleanly — both chosen fonts support them fully.

---

## 📐 Where to Use Each Color on the Website

### Soot Black (`#1A1A1A`)

| Component         | How to Use                                      |
| ----------------- | ----------------------------------------------- |
| **StickyHeader**  | Background color for the sticky navigation bar  |
| **Footer**        | Primary background color                        |
| **Body text**     | Main text color on light backgrounds            |
| **Hero heading**  | Large display text color                        |
| **MobileCallBar** | Background for mobile bottom call-to-action bar |

### Brick Red (`#B83A1A`)

| Component            | How to Use                                                             |
| -------------------- | ---------------------------------------------------------------------- |
| **Phone CTA button** | Primary phone call-to-action button — the single most important action |
| **"Zavolat" button** | Prominent call button in hero and sticky header                        |
| **Ring/Focus**       | Focus ring on form inputs and interactive elements                     |
| **Active states**    | Active navigation link indicator                                       |
| **Section accents**  | Thin red lines or accent bars separating sections                      |

### Crimson Accent (`#D41A1A`)

| Component         | How to Use                                            |
| ----------------- | ----------------------------------------------------- |
| **Hover state**   | Brick Red button hover (slightly brighter/more vivid) |
| **Error states**  | Form validation error messages and borders            |
| **Urgent badges** | "Dnes ještě volné termíny" type urgency badges        |

### Gold Brass (`#D4A530`)

| Component            | How to Use                                         |
| -------------------- | -------------------------------------------------- |
| **Secondary CTA**    | "Poptat revizi" / quote-request buttons            |
| **Star ratings**     | Google Reviews stars in the trust section          |
| **Icons**            | Service card icons, checkmarks, bullet point icons |
| **Badges**           | Certification and credential badges                |
| **Hover underlines** | Link hover effects — gold underline transition     |

### Ember Amber (`#D4922A`)

| Component               | How to Use                                     |
| ----------------------- | ---------------------------------------------- |
| **Gold Brass hover**    | Darker hover state for Gold Brass elements     |
| **Accent highlights**   | Highlighted words in headlines (gradient text) |
| **Progress indicators** | Step numbers in HowItWorksSection              |

### Silver Chrome (`#B8B8B8`)

| Component               | How to Use                                    |
| ----------------------- | --------------------------------------------- |
| **Muted text**          | Secondary text, timestamps, disclaimers       |
| **Disabled states**     | Disabled button backgrounds                   |
| **Decorative elements** | Large translucent step numbers behind content |
| **Tool/icon outlines**  | Service icons in a subtle metallic style      |

### Smoke Grey (`#9A9A9A`)

| Component            | How to Use                            |
| -------------------- | ------------------------------------- |
| **Placeholder text** | Form input placeholder color          |
| **Captions**         | Photo captions, fine print            |
| **Borders (hover)**  | Border color transition on card hover |

### Warm Cream (`#FAF5EE`)

| Component           | How to Use                                   |
| ------------------- | -------------------------------------------- |
| **Page background** | Main `<body>` background. Warm, not sterile. |
| **Button text**     | Text color on dark (Soot Black) buttons      |
| **Card text**       | Text on dark-background cards                |

### Smoke Mist (`#F0ECE6`)

| Component                | How to Use                                                 |
| ------------------------ | ---------------------------------------------------------- |
| **Alternating sections** | Background for every other section to create visual rhythm |
| **Card backgrounds**     | FAQ cards, service cards on light sections                 |
| **Input backgrounds**    | Form field backgrounds                                     |

---

## 🎯 Current vs. Recommended Changes

The website already uses a warm palette. Here's what can be improved to better match the logo:

| Area                     | Current State                                         | Recommended Change                                                                                                             |
| ------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Primary color**        | `oklch(0.25 0.018 55)` — close but slightly too brown | Adjust to `oklch(0.18 0.005 50)` — truer to the logo's deep soot black                                                         |
| **Destructive/CTA**      | `oklch(0.55 0.19 28)` — already Brick Red ✅          | Keep as-is. Perfect match.                                                                                                     |
| **Secondary/Accent**     | `oklch(0.78 0.16 70)` — ember amber                   | Consider splitting into **Gold Brass** (`oklch(0.76 0.15 80)`) for CTAs and **Ember Amber** (`oklch(0.72 0.16 70)`) for hovers |
| **Logo usage**           | Not currently used on the site                        | Add `logo.png` to `StickyHeader`, hero section, and footer                                                                     |
| **Header background**    | Likely light/transparent                              | Switch to **Soot Black** with cream text for stronger brand presence                                                           |
| **Service card icons**   | Generic emoji/icons                                   | Switch to Gold Brass colored SVG icons matching the logo's warmth                                                              |
| **Google Reviews stars** | Default color                                         | Change to Gold Brass `#D4A530`                                                                                                 |
| **Section rhythm**       | Uniform backgrounds                                   | Alternate between Warm Cream and Smoke Mist for visual depth                                                                   |

---

## 🚫 Brand Don'ts

1. **Never use pure white (`#FFFFFF`)** as page background — always use Warm Cream (`#FAF5EE`)
2. **Never use pure black (`#000000`)** for text — always use Soot Black (`#1A1A1A`)
3. **Never use cold blues or greens** — the brand is entirely warm-toned (reds, golds, warm greys)
4. **Never place the logo on a red background** — red-on-dark or dark-on-red reduces legibility
5. **Don't overuse Brick Red** — it's reserved for phone CTAs and urgent elements only
6. **Don't use Gold Brass for body text** — too light for readability; it's for accents only
7. **Don't stretch or distort the logo** — always maintain original proportions

---

## ✅ CSS Variable Mapping

Here's how the brand colors map to the existing CSS custom property system in `styles.css`:

```css
:root {
  /* Core Brand */
  --background: oklch(0.97 0.012 85); /* Warm Cream */
  --foreground: oklch(0.18 0.005 50); /* Soot Black */

  /* Primary = Soot Black */
  --primary: oklch(0.18 0.005 50);
  --primary-foreground: oklch(0.97 0.012 85);

  /* Secondary = Gold Brass */
  --secondary: oklch(0.76 0.15 80);
  --secondary-foreground: oklch(0.18 0.005 50);

  /* Accent = Ember Amber */
  --accent: oklch(0.72 0.16 70);
  --accent-foreground: oklch(0.18 0.005 50);

  /* Destructive = Brick Red (phone CTA) */
  --destructive: oklch(0.5 0.17 30);
  --destructive-foreground: oklch(0.97 0.012 85);

  /* Muted = Smoke Mist */
  --muted: oklch(0.94 0.012 80);
  --muted-foreground: oklch(0.5 0.005 50);

  /* Borders */
  --border: oklch(0.85 0.015 75); /* Ash Border */
  --input: oklch(0.85 0.015 75);
  --ring: oklch(0.5 0.17 30); /* Brick Red focus ring */

  /* Brand semantic tokens */
  --cream: oklch(0.97 0.012 85);
  --soot: oklch(0.18 0.005 50);
  --ember: oklch(0.72 0.16 70);
  --ember-foreground: oklch(0.18 0.005 50);
  --brick: oklch(0.5 0.17 30);
  --gold: oklch(0.76 0.15 80); /* NEW — Gold Brass */
  --chrome: oklch(0.78 0.005 0); /* NEW — Silver Chrome */
  --smoke: oklch(0.68 0.005 0); /* NEW — Smoke Grey */
}
```

---

## 📁 Logo Files

| File                   | Format            | Use                                                  |
| ---------------------- | ----------------- | ---------------------------------------------------- |
| `public/logo.png`      | PNG (transparent) | Website header, hero section, footer, favicon source |
| `public/logo.png.jpeg` | JPEG (white bg)   | Original upload — keep for reference                 |
