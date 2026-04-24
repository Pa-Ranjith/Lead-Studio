# Tech-Emerald Design System

## Core Concept
A brutalist, high-performance "tech execution" aesthetic designed for high conversion. It replaces generic corporate fluff with raw, code-centric layouts, solid borders, offset shadows, and functional micro-animations. The system feels like an IDE or terminal engineered for action.

## Color Palette
*   **Base Background:** Beige Light (`#F5F5F4`)
*   **Secondary Background:** Beige Dark (`#E7E5E4`)
*   **Text/Borders (Primary):** Tech Black (`#1C1917`)
*   **Code Elements:** Tech Code (`#292524`)
*   **Accent (Primary Action):** Tech Emerald (`#10B981`)
*   **Accent Hover:** Emerald-600 (`#059669`)

## Typography
*   **Headings & Accents:** `JetBrains Mono`
    *   *Usage:* Bold/Raw aesthetics, capitalized tags, system readouts, tracking/letter-spacing (`tracking-widest` or `tracking-tighter`).
*   **Body & Readability:** `Inter`
    *   *Usage:* Clean, highly legible sans-serif for main paragraphs and non-accent headers.

## Interactive Elements
*   **Buttons & Containers:** Hard, untamed shadows using Box Shadow offsets (`shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]`).
*   **Hover States:** The shadow disappears and the element translates down (`translate-y-[2px]` or `-4px` depending on the shadow weight), simulating a physical, mechanical button press.
*   **Borders:** Heavy, solid borders for division (`border-stone-300` for layout, `border-tech-black` for hard boxes). No soft curves or subtle drop-shadows on main elements.

## Key UI Components
*   **Terminals:** Faux bash-terminals (`bg-tech-code`) with typing effects used to visualize hidden value (e.g., lead capturing process).
*   **Geometric Logos:** Simple, rigid shapes (e.g., a square within a square) with rotate animations (`rotate-45` to `rotate-90`) on hover. Used alongside text to represent the brand instead of a traditional corporate logo.
*   **Floating Actions:** Heavy block-styled sticky CTAs replacing generic circles (e.g., the WhatsApp icon in a sharp shadow box).
*   **Badges:** High contrast text blocks (like the "5 Slots Available" banner) pinned to the corners of cards with absolute positioning.

## Motion & Animation
*   **Intersection Reveals:** `opacity-0` to `opacity-100` with slight `translateY(20px)` on scroll, tied to an Intersection Observer.
*   **Typing Effects:** Raw letter-by-letter typing with a blinking block cursor (`border-r-2 border-tech-emerald`) executed through a simple JS loop.
*   **Hover Color Inversions:** Darkening or turning borders to `tech-emerald` on interaction to signify active components.
