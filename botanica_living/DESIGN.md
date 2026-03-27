# Design System: Editorial Nature & The Living Lab

## 1. Overview & Creative North Star: "The Botanical Curator"
This design system rejects the "commercial template" in favor of a high-end editorial experience. Our Creative North Star is **The Botanical Curator**. The UI should feel less like a software interface and more like a premium lifestyle magazine or a physical gallery tucked inside a forest.

To achieve this, we break the rigid digital grid. We utilize **intentional asymmetry**, where images may bleed off-edge or overlap with text blocks, and **tonal layering**, where depth is created through color shifts rather than artificial shadows. The goal is a digital environment that breathes, mirroring the airy, sunlight-drenched atmosphere of the physical "Tom's Garden Living Lab."

---

## 2. Colors: Tonal Earthiness
The palette is rooted in low-saturation forest tones and warm neutrals. We use these not just as accents, but as structural tools.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Boundaries must be established via background color shifts. For example, a `surface-container-low` (#faf2ea) section should sit directly against a `surface` (#fff8f2) background. The contrast is felt, not seen.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, fine-paper sheets. Use the `surface-container` tiers to define importance:
- **Base Layer:** `surface` (#fff8f2) for global backgrounds.
- **Secondary Content Areas:** `surface-container-low` (#faf2ea).
- **Interactive Cards/Modals:** `surface-container-lowest` (#ffffff) to create a subtle "pop" of clean white against the creamy background.

### The "Glass & Gradient" Rule
To add "soul" to the interface:
- **CTAs:** Use a subtle linear gradient from `primary` (#334537) to `primary-container` (#4a5d4e) to give buttons a soft, three-dimensional weight.
- **Floating Overlays:** Use `surface` (#fff8f2) at 80% opacity with a `backdrop-blur` of 20px. This allows botanical photography to bleed through the UI, maintaining the "garden-like" atmosphere.

---

## 3. Typography: Elegant Editorial
We use a dual-sans-serif approach to balance modern utility with sophisticated warmth.

- **Display & Headlines (Manrope):** These are our "Statement" pieces. Large scales (`display-lg` at 3.5rem) should be used with generous letter-spacing to command attention. Use `primary` (#334537) for headlines to ensure a grounded, authoritative feel.
- **Body & Labels (Plus Jakarta Sans):** This typeface provides a clean, breathable legibility. The `body-lg` (1rem) is our workhorse for descriptions, ensuring the "Living Lab" philosophy is easy to digest.
- **Hierarchy Tip:** Use `secondary` (#775928) for `label-md` or `title-sm` when highlighting "Lifestyle Tips" or "Garden Status" to provide a warm, wooden accent that breaks the green/cream monotony.

---

## 4. Elevation & Depth: Tonal Layering
Traditional material design relies on shadows; this system relies on **Atmospheric Perspective.**

- **The Layering Principle:** Place a `surface-container-lowest` (#ffffff) card on a `surface-container-high` (#eee7df) section. The depth is organic and mimics how light hits different textures of paper.
- **Ambient Shadows:** If a floating element (like a mobile navigation bar) requires a shadow, use a 32px blur with 4% opacity, using the `on-surface` color (#1e1b16). It should look like a soft glow, not a drop shadow.
- **The "Ghost Border" Fallback:** If a divider is functionally required for accessibility, use `outline-variant` (#c3c8c1) at **15% opacity**. It should be a suggestion of a line, barely perceptible.

---

## 5. Components: Soft & Intentional

### Cards & Photography
- **Constraint:** Never use dividers within cards. Separate headers from body text using `spacing-4` (1.4rem).
- **Style:** Use `rounded-xl` (1.5rem) for main feature cards. Photos should always occupy the full width of the card or be inset with `spacing-6` to create a "matted frame" look.

### Buttons
- **Primary:** `primary` background with `on-primary` text. Shape: `full` (pill). No border.
- **Secondary:** `surface-container-highest` background. Subtle, understated.
- **Tertiary/Text:** `primary` text with no background. Use for "Read More" links in editorial sections.

### Inputs & Fields
- Use `surface-container-low` as the field background. 
- **Focus State:** Transition the background to `surface-container-lowest` and add a `ghost-border` (outline-variant at 20%). Avoid harsh color changes.

### Signature Component: The "Botanical Badge"
- Use `secondary-container` (#ffd79b) with `on-secondary-container` (#7a5c2b) text. Use these for status tags like "In Bloom," "Workshop Open," or "New Season."

---

## 6. Do’s and Don’ts

### Do:
- **Embrace White Space:** If you think there is enough margin, add `spacing-4` more. The "Garden" needs room to grow.
- **Use Asymmetry:** Offset a headline to the left and a supporting image to the right, overlapping them slightly with a `surface` background text-wrap.
- **High-Quality Imagery:** Only use photography with natural lighting. Avoid studio-lit, sterile commercial shots.

### Don’t:
- **Don't use pure black:** Use `on-surface` (#1e1b16) for all dark text. Pure black (#000) kills the warmth of the wood and forest tones.
- **Don't use sharp corners:** Nothing in a garden is a perfect 90-degree angle. Stick to the `roundedness` scale, favoring `lg` and `xl`.
- **Don't crowd the UI:** If a screen feels busy, move secondary information to a "View Details" glassmorphic overlay.