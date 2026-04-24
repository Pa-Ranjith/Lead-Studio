# Lead Studio: Project Context & Build Documentation

## 1. Project Overview
**Objective**: Build a premium, high-converting, single-page landing site for "Lead Studio"—a specialized service offering highly engineered, conversion-focused landing pages for small businesses.
**Target Audience**: Small business owners (Real Estate, Coaches, Local Services) who need high-converting funnels without the fluff.
**Primary Conversion Action**: Form submission via Google Forms or direct WhatsApp inquiry.

## 2. Narrative Architecture & Storytelling
Instead of a generic brochure, the page acts as a structured "Conversion Arc". The user's eye is strictly guided using GSAP animation timelines.

*   **The Hook (Hero)**: "Most websites don't convert traffic to leads. This one will."
*   **The Pivot**: "Lead Studio builds landing pages that start bringing enquiries within days."
*   **The Agitation (Realization)**: Highlight the current failures—No Direction, Too Much Fluff, No Trust.
*   **The Solution/Proof**: Brutalist ROI metrics grid (4x Enquiries, +40% - 70% Conversion Rate, 3x WhatsApp Leads).
*   **The Evidence (Sample Work)**: Interactive case study cards with kinetic "View Returns" hover states and modal breakdowns.
*   **The Offer**: Explicit package details (Pricing, Timeline, Deliverables).
*   **The Climax**: Final frictionless CTA and FAQ.

## 3. Design System & Aesthetics
*   **Color Palette**: Obsidian (`#0A0A0A`), Electric Blue (`#2563EB` / `blue-600`), and pure White for massive contrast.
*   **Typography**: `Syne` for heavy, premium, authoritative headlines. `Inter` for highly legible body copy.
*   **Brand Distinguishing Factor**: Moved away from generic gradients. The brand accent is now a distinct **Solid Glow Pill** (`rgba(37, 99, 235, 0.15)` background with a `#60A5FA` text color and glowing border), making the brand name strictly pop within paragraphs.
*   **UI Components**: Utilizes the "Premium Card" design—glassmorphism, subtle borders, and smooth elevation on hover.

## 4. GSAP & Kinetic Engineering
Animations are tuned strictly to **reduce cognitive load** and control storytelling.
*   **Strict Storytelling Sync**: Elements do not load simultaneously. In the Hero section, there is an explicit `0.3s` pause between the setup ("Most websites don't convert...") and the punchline ("This one will.") to force linear reading.
*   **Speed Optimization**: In the Realization section, massive delays were removed in favor of snappy `0.15s` staggers and `0.8s` durations to prevent dead air for fast scrollers.
*   **Hover Kinetics**: Custom cubic-bezier timing controls elevation and ambient shadow transitions on cards.

## 5. Mobile-First Optimization
Validated against the `mobile-first-design-mastery.md` skill protocols.
*   **Collision Avoidance**: The sticky bottom CTA bar and floating WhatsApp button are dynamically offset so they never overlap on mobile.
*   **Safe Touch Targets**: All buttons meet minimum tap target guidelines. Modal close buttons were moved inward (`top-6 right-6`) to prevent screen-edge clipping on small devices like iPhone SE.
*   **Fluid Padding**: Static padding (`p-12`) was converted to responsive (`p-6 md:p-10 lg:p-12`) to prevent text overflow and horizontal scrolling on narrow viewports.

## 6. Technical Stack & Deployment
*   **File**: `lead studio landing page.html` (Fully contained, single-file deployment).
*   **Frameworks**: HTML5, TailwindCSS (CDN), GSAP (ScrollTrigger), Lucide Icons.
*   **Deployment Ready**: Can be deployed immediately to Vercel, Netlify, or GitHub Pages.

---
*Documented on: 2026-04-24*
*Status: Finalized & Production-Ready*
