```markdown
# Design System Documentation: The Sovereign Academic

## 1. Overview & Creative North Star: "The Digital Atelier"
The Sovereign Academic is not a generic learning platform; it is a high-performance environment designed for Spain's future elite civil servants. Our Creative North Star is **"The Digital Atelier."** 

This design system rejects the "template" look of standard EdTech. We move away from rigid, boxed grids and toward an editorial, boutique experience. By utilizing intentional asymmetry, overlapping elements, and high-contrast typography scales, we create an atmosphere that feels both authoritative and modern. The UI should breathe, using whitespace as a functional tool to reduce cognitive load during intense study.

---

## 2. Colors & Surface Philosophy

Our palette is rooted in the deep tradition of Spanish academic institutions but refined through a modern, glass-like lens.

### Color Tokens
- **Primary (`#000e24`):** The "Intelligence Navy." Use this for core brand moments and high-contrast text.
- **Tertiary (`#150c00`) & Tertiary Fixed (`#ffdea5`):** The "Legacy Gold." Gold is never a background; it is a precision tool used for accents, progress indicators, and "Elite" status markers.
- **Surface & Background (`#f8fafb`):** A cool, crisp white that prevents eye strain.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section off content. Traditional "boxes" make an interface feel heavy and trapped. Instead:
- **Define boundaries via background shifts:** Use `surface-container-low` sections sitting on a `surface` background.
- **Nesting Hierarchy:** Treat the UI as layers of fine paper. An inner card should be `surface-container-lowest` (#ffffff) placed upon a `surface-container` (#eceeef) background to create a soft, natural lift.

### Signature Textures & Glass
To evoke a "Premium" feel, use **Glassmorphism** for floating navigation and modal overlays. Use semi-transparent `surface` colors with a `backdrop-blur` of 20px–40px. 
- **The Depth Gradient:** For hero backgrounds or primary CTAs, do not use flat navy. Apply a subtle linear gradient from `primary` (#000e24) to `primary-container` (#00234b) at a 135-degree angle to provide "visual soul."

---

## 3. Typography: Editorial Authority

We use a dual-typeface system to balance modern performance with academic prestige.

- **Display & Headline (Manrope):** A geometric sans-serif with a high X-height. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero headers to create a "Power Editorial" look.
- **Title & Body (Inter):** The workhorse of the system. Inter provides maximum legibility for complex legal and administrative texts.

### Hierarchy Guidelines
- **Asymmetric Headers:** Pair a `display-md` headline with a `label-md` "kicker" text above it in `tertiary_fixed_dim` (Gold) to create a sophisticated, non-centered layout.
- **Line Height:** Maintain a generous 1.6x line height for all `body-lg` text to ensure long-form academic content remains approachable.

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows and borders are replaced by **Tonal Layering.**

- **The Layering Principle:** Stack your surfaces.
    - *Level 0:* `background` (#f8fafb) - The base canvas.
    - *Level 1:* `surface-container-low` (#f2f4f5) - Large section containers.
    - *Level 2:* `surface-container-lowest` (#ffffff) - Actionable cards or interactive elements.
- **Ambient Shadows:** When a floating state is required (e.g., a dropdown), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(0, 14, 36, 0.06);`. The shadow must be tinted with the `on-surface` color, never pure black.
- **Ghost Borders:** If accessibility requires a stroke, use `outline-variant` at 15% opacity. It should feel like a suggestion of a line, not a boundary.

---

## 5. Components

### Buttons: The "Call to Excellence"
- **Primary:** `primary` background with `on-primary` text. Use `xl` (0.75rem) roundedness. No shadow; use a subtle scale-up (1.02x) on hover.
- **Tertiary (Gold):** Use for "Achieve" or "Premium" actions. `tertiary_container` background with `on-tertiary_container` text.

### Cards & Lists: The "No-Divider" Mandate
- **Forbid Dividers:** Do not use horizontal lines to separate list items. 
- **The Alternative:** Use vertical whitespace (1.5rem+) or a 4px left-accent bar in `primary_fixed_dim` to denote separate items. 
- **Cards:** Use `surface-container-lowest` with a subtle `xl` corner radius.

### Input Fields
- **Minimalist Frames:** Inputs should not have a four-sided border. Use a `surface-container-high` background with a 2px bottom-border in `outline` that animates to `primary` on focus.
- **Academic Precision:** Helper text should use `label-sm` to maintain a clean, organized look even in complex forms.

### Special Component: The Progress "Aureola"
For student exam scores, use a circular progress ring using the `tertiary` (Gold) token against a `primary` (Navy) background, mimicking the "prestige" of a gold medal.

---

## 6. Do’s and Don’ts

### Do:
- **Use Wide Margins:** Treat the screen like a premium printed journal. Use 80px+ horizontal padding on desktop.
- **Embrace Asymmetry:** Place a large image off-center with text overlapping it using a `surface` glass container.
- **Use "Legacy Gold" Sparingly:** Gold is a reward. If everything is gold, nothing is elite.

### Don’t:
- **No 100% Black:** Never use `#000000`. Use `primary` or `on-background` to keep the palette sophisticated and "inky."
- **No Sharp Corners:** Avoid the `none` roundedness scale. Even the most "academic" UI needs the softness of `sm` or `md` corners to feel modern.
- **No Crowding:** If a section feels "full," it is wrong. Add 24px of whitespace. Academic clarity requires room to think.

---

## 7. Motion & Interaction
Interaction should feel **weighted and intentional.**
- **Transitions:** Use `cubic-bezier(0.2, 0, 0, 1)` for all surface transitions. This creates a "heavy" start and a smooth, luxurious finish.
- **Staggered Reveals:** When loading a dashboard, elements should fade in and slide up 10px sequentially, reinforcing the feeling of a curated, bespoke experience.