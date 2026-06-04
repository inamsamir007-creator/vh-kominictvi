# Implementation Plan — Frontend & Branding Uplift for VH Kominictví

This plan outlines the visual enhancements, copy updates, and structural changes to uplift the [VH Kominictví](file:///Users/samirinam/Downloads/reinvestinpleitostsespolenostbigbuildservices/BigBuild/Sartin/WEBSITES/KLIENTI/VH%20KOMNICTVI/vh-kominictvi) landing page into a state-of-the-art, highly professional, and visually premium website. All modifications respect the original color scheme while modernizing typography, margins, layouts, and interactive elements.

---

## User Review Required

> [!IMPORTANT]
>
> - **Vladan Husařík's Photo:** We will use the cropped image `media__1780574979091.jpg` showing Vladan sitting on the white van. We will copy this to `src/vladan.jpg` and render it in the card in place of the generic CSS chimney/flame illustration.
> - **Geographic Coverage Scope:** The website header description will be updated from "Praha & celý Středočeský kraj" to align with the new focus: "Severní & západní Čechy, západ Středočeského kraje and po domluvě Praha".

---

## Proposed Changes

The updates will be implemented across five key components of the application.

### 1. Typography & Global Design System

#### [MODIFY] [styles.css](file:///Users/samirinam/Downloads/reinvestinpleitostsespolenostbigbuildservices/BigBuild/Sartin/WEBSITES/KLIENTI/VH%20KOMNICTVI/vh-kominictvi/src/styles.css)

- **Font Upgrades:** Upgrade the display font family from `"Barlow Condensed"` (which looks narrow and industrial) to **`"Sora"`** or **`"Plus Jakarta Sans"`** (which look premium, geometric, and modern). Both support Czech diacritics perfectly.
- **Global Text Enhancements:** Adjust line heights and weights for the new display typeface to ensure massive visual weight and impact.
- **Card & List Animations:** Add a premium shadow theme variable and micro-interactions (e.g. lift-up on hover) to make the page feel tactile and responsive.

#### [MODIFY] [\_\_root.tsx](file:///Users/samirinam/Downloads/reinvestinpleitostsespolenostbigbuildservices/BigBuild/Sartin/WEBSITES/KLIENTI/VH%20KOMNICTVI/vh-kominictvi/src/routes/__root.tsx)

- Update Google Font links to load the new premium typography font families (e.g., `Sora` and `Nunito` or `Inter`) with full weights (400, 600, 700, 800) and Czech subsets.

---

### 2. Hero Section

#### [MODIFY] [HeroSection.tsx](file:///Users/samirinam/Downloads/reinvestinpleitostsespolenostbigbuildservices/BigBuild/Sartin/WEBSITES/KLIENTI/VH%20KOMNICTVI/vh-kominictvi/src/components/HeroSection.tsx)

- **Main Heading:** Increase size (`text-6xl md:text-8xl`) and tighten letter-spacing. Use the new display font. Add a subtle color gradient to `"Papíry hned."` to draw focus.
- **Sub-hero Text:** Make the description font size slightly larger (`text-lg md:text-xl`) and change color to a higher-contrast soot variant for improved legibility.
- **Delete Badge:** Remove the `<span className="...">Dnes ještě volné termíny</span>` badge completely.
- **Sleeker CTAs:** Increase the buttons height from `h-12` to `h-14` with larger text (`text-lg`). Add hover animations (scaling and a soft brick-red glow).
- **CTA Bullet Points:** Change text styling under the CTAs to `font-bold` for stronger visual authority.
- **Bullet Copy Update:** Change `"Certifikát ČKČ"` to `"Certifikace — revizní technik spalinových cest"`.
- **Owner Photo Integration:**
  - Import `vladanImg` from local assets.
  - Replace the CSS chimney illustration with a high-fidelity `<img />` showing Vladan Husařík on the white van.
  - Update the name text from `"Václav H."` to `"Vladan Husařík"` with larger font sizing.
  - Make the Google Reviews badge and rating (`4,9`) more prominent by adding a star icon and setting high text contrast.

---

### 3. Services Section

#### [MODIFY] [ServicesSection.tsx](file:///Users/samirinam/Downloads/reinvestinpleitostsespolenostbigbuildservices/BigBuild/Sartin/WEBSITES/KLIENTI/VH%20KOMNICTVI/vh-kominictvi/src/components/ServicesSection.tsx)

- **Frézování & Vložkování Addition:** Add two new services into the services grid:
  1. **Frézování komínů** (Milling) — Description: _"Zvětšení průměru komínového průduchu pro zvýšení tahu nebo instalaci tlustší vložky."_
  2. **Vložkování komínů** (Lining) — Description: _"Sanace komína vložením nerezové či ohebné vložky. Nezbytné pro moderní kondenzační kotle."_
- **Layout Adjustments:** Change the grid layout to accommodate 6 cards cleanly on both mobile (1 column) and desktop (3 columns).
- **Interactive Uplift:** Add a scale effect and a subtle border lighting on hover to make each service feel premium.

---

### 4. Steps Section

#### [MODIFY] [HowItWorksSection.tsx](file:///Users/samirinam/Downloads/reinvestinpleitostsespolenostbigbuildservices/BigBuild/Sartin/WEBSITES/KLIENTI/VH%20KOMNICTVI/vh-kominictvi/src/components/HowItWorksSection.tsx)

- **Krok 4 Update:** Change Step 4's header to `"Dostanete revizní zprávu"`.
- **Krok 4 Description:** Change Step 4's description to `"Protokol o provedení povinné roční kontroly spalinových cest."`
- **Visual Polish:** Render large, translucent order numbers (`01`, `02`, `03`, `04`) in the background of each step column to emphasize progression.

---

### 5. Coverage Area Section

#### [MODIFY] [CoverageSection.tsx](file:///Users/samirinam/Downloads/reinvestinpleitostsespolenostbigbuildservices/BigBuild/Sartin/WEBSITES/KLIENTI/VH%20KOMNICTVI/vh-kominictvi/src/components/CoverageSection.tsx)

- **Geographical Re-focus:** Replace the old regions structure with the following focus areas:
  1. **Ústecký kraj** (Bochov, Toužim, Žatec, Louny, atd.)
  2. **Karlovarský kraj** (Karlovy Vary, Sokolov, Cheb, atd.)
  3. **Plzeňský kraj** (Plzeň, Tachov, Rokycany, atd.)
  4. **Středočeský kraj** _(pouze severní a západní část — Kladno, Rakovník, Mělník, atd.)_
  5. **Praha** _(po domluvě)_
- **Section Heading:** Change the section title from "Praha & celý Středočeský kraj" to `"Kde působíme"` (Where we operate).

---

## Verification Plan

### Automated Checks

- Run `npm run build` to verify there are no typescript or stylesheet compilation errors.

### Manual Verification

- Run `npm run dev` and open the local preview.
- Inspect the hero section layout, confirming fonts render correctly and headings are bold and legible.
- Verify Vladan's photo renders inside the portrait card.
- Confirm that the Google reviews badge and CTAs are highly legible and responsive on both mobile and desktop viewports.
