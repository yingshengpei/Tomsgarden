# Design System Document: Editorial Warmth & Botanical Play

## 1. Overview & Creative North Star
This design system moves away from the sterile, modular appearance of standard lifestyle apps and toward a **"High-End Botanical Editorial"** aesthetic. Our Creative North Star is **"The Whimsical Curator."** It balances the structured authority of a high-end gardening magazine with the playful, community-focused warmth of a local neighborhood garden.

To break the "template" look, we employ intentional asymmetry. Illustrations of the "Tom" cat should never sit perfectly centered; they should peek from the edges of containers or overlap text elements to create depth. The layout uses a generous typography scale to establish a clear editorial voice, while the color palette provides a "sun-drenched" warmth that feels organic and inviting.

---

## 2. Colors
Our palette is rooted in a sophisticated trio: **Vibrant Yellow** (#F2B705) for high-impact brand moments, **Warm Cream** (#FCF9EF) for the canvas, and **Deep Charcoal** (#1B1C16) for authoritative grounding.

### Core Roles
*   **Primary (#785900) & Primary Container (#F2B705):** Used for key actions and brand-heavy labels. The Yellow is our "Sunlight" – use it to draw the eye to essential information.
*   **Secondary (#54634D):** Our "Sage Green." This is the nature-focused anchor, used for horticultural details and secondary accents.
*   **Background (#FCF9EF):** The "Warm Cream" canvas. It is softer than pure white, reducing eye strain and feeling more like premium recycled paper.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section off content. Traditional dividers are banned. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sits on a `surface` background to create a clean, modern break without the "boxed-in" feel of a grid.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, fine papers. Use the tiers to define depth:
1.  **Base:** `surface` (#FCF9EF)
2.  **Raised Sections:** `surface-container-low` (#F6F4EA)
3.  **Interactive Cards:** `surface-container-highest` (#E4E3D9)

### The "Glass & Signature" Rule
For floating action buttons or over-image overlays, use **Glassmorphism**. Apply the `surface` color at 70% opacity with a `24px` backdrop blur. To provide "soul" to CTAs, use a subtle linear gradient transitioning from `primary` (#785900) to `primary_container` (#F2B705) at a 135-degree angle.

---

## 3. Typography
The system uses a pairing of **Manrope** (Latin) and **Source Han Sans** (CN). This combo balances geometric modernity with the high legibility required for botanical data.

*   **Display (Lg/Md):** Manrope Bold. Used for hero headers and high-impact editorial statements. Keep tracking tight (-2%) for a premium feel.
*   **Headline (Sm/Md):** Source Han Sans Bold. Used for section titles.
*   **Title (Md/Sm):** Manrope SemiBold. Used for card titles and navigation.
*   **Body (Lg/Md):** Manrope Regular / Source Han Sans Regular. The workhorse for all garden descriptions.
*   **Label (Md/Sm):** Manrope ExtraBold / All-Caps. Used for the "Tom's Garden" specific label style (e.g., "SMALL POTTED PLANT").

**Hierarchy Note:** Use the `primary-container` (Yellow) as a background for labels with `on-primary-fixed` (Dark) text to mimic the physical product tags seen in the brand assets.

---

## 4. Elevation & Depth
We reject traditional drop shadows in favor of **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface-container-lowest` (#FFFFFF) card on a `surface-container-low` (#F6F4EA) background. This creates a soft, natural lift.
*   **Ambient Shadows:** If an element must float (like a modal), use an ultra-diffused shadow: `0px 20px 40px rgba(27, 28, 22, 0.06)`. Note the tint—the shadow is a low-opacity version of our Deep Charcoal, not a neutral grey.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at **15% opacity**. High-contrast, 100% opaque borders are strictly forbidden.

---

## 5. Components

### Buttons
*   **Primary:** High-gloss Yellow (`primary-container`). Roundedness: `full`. No border. Text in `on-primary-container`.
*   **Secondary:** Sage Green (`secondary`). Roundedness: `md`. 
*   **Tertiary:** Transparent background with a `Ghost Border` and Deep Charcoal text.

### Cards & Lists
*   **Cards:** Use `surface-container-highest`. No borders. Symmetrical padding is discouraged—try using `spacing-6` on the left and `spacing-4` on the right to create an editorial "pull."
*   **Separation:** Instead of divider lines, use `spacing-8` or `spacing-10` of vertical white space to separate list items. 

### Label Tags (Signature Component)
Inspired by the "Tom's Garden" product labels, these are rectangular with `rounded-md` corners, using the `primary-container` (Yellow) background. They should feature the cat icon peeking over the top edge or integrated into the corner.

### Inputs
Text fields should be "Underlined Only" or use a `surface-container-low` solid fill. Avoid 4-sided boxed inputs. The focus state should transition the underline to `primary` (#785900) with a `2px` thickness.

---

## 6. Do's and Don'ts

### Do
*   **DO** overlap the "Tom" cat illustration over card boundaries to break the grid.
*   **DO** use the Warm Cream (`surface`) as your default background to maintain the "lifestyle" warmth.
*   **DO** use large, bold display type to start sections, mimicking a magazine layout.
*   **DO** use the `spacing-scale` rigorously to ensure "breathing room."

### Don't
*   **DON'T** use 1px solid lines or dividers. Use color blocks instead.
*   **DON'T** use pure black (#000000). Always use Deep Charcoal (#1B1C16) for typography.
*   **DON'T** center-align everything. Use the asymmetrical layout to guide the eye through content.
*   **DON'T** use harsh, standard drop shadows. If it doesn't look like ambient light, it doesn't belong.