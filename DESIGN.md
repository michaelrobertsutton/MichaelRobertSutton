# Design System — michaelrobertsutton.com

## Product Context
- **What this is:** Personal portfolio site for a Solutions Architect & Technical Program Manager
- **Who it's for:** GovCon BD directors, recruiters, federal health peers, referral network
- **Space/industry:** Federal health tech, GovCon, CMS modernization
- **Project type:** Marketing/editorial personal portfolio

## Aesthetic Direction
- **Direction:** Editorial/Magazine
- **Decoration level:** Intentional (accent bars on h2, glow backgrounds on callouts, diagonal clip-path on proof section)
- **Mood:** Authoritative and precise, like a well-designed feature article. Not flashy, not generic. The site should feel like something a person with taste built, not configured.
- **Key pattern:** The hero reads like a magazine cover. Sections are ruled and typographically driven. Whitespace does the heavy lifting.

## Typography
- **All roles:** Poppins (Google Fonts, weights 300-800)
- **Loading:** `https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap`
- **Rationale:** Single font family. Hierarchy achieved through weight and size, not font switching. Poppins at 800 weight has enough personality for display use. At 400 it reads clean for body.

### Type Scale
| Role | Size | Weight | Letter-spacing | Line-height | Notes |
|------|------|--------|---------------|-------------|-------|
| Hero headline | clamp(2.6rem, 7vw, 6rem) | 800 | -0.04em | 1.05 | White first sentence, accent second |
| h2 | clamp(1.7rem, 3vw, 2.35rem) | 700 | -0.01em | 1.2 | Blue accent bar above |
| h3 | clamp(1.2rem, 2vw, 1.42rem) | 700 | -0.01em | 1.2 | |
| Body | 1rem | 400 | normal | 1.75 | max-width: 66ch |
| Intro/subtitle | 0.85rem | 400 | 0.02em | 1.75 | color: --color-ink-muted |
| Nav links | 0.84rem | 600 | 0.04em | — | uppercase |
| Eyebrow/label | 0.75-0.82rem | 700 | 0.08-0.14em | — | uppercase, accent color |
| Small text | 0.72rem | 700 | 0.05-0.09em | — | badges, footnotes |
| Proof figures | clamp(3rem, 10vw, 5.5rem) | 800 | -0.05em | 0.9 | |

## Color

### Approach
Restrained: 1 cool accent (icy blue) + 1 warm accent (amber gold) + cool-toned neutrals. Color is used sparingly and with purpose. The warm accent creates temperature contrast that most portfolio sites lack.

### Core Tokens
| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `--color-bg` | #35393C | #F5F7FA | Page background |
| `--color-surface` | #3E4347 | #FFFFFF | Cards, nav, alt sections |
| `--color-surface-2` | #464B50 | #EDF0F4 | Hover states, secondary surfaces |
| `--color-line` | rgba(255,255,255,0.10) | rgba(0,0,0,0.10) | Borders, dividers |
| `--color-ink` | #F0F2F4 | #1A1E22 | Primary text |
| `--color-ink-muted` | #9BA3AB | #5A6270 | Secondary text, captions |
| `--color-accent` | #A4D8FF | #2B8FCC | Primary accent (icy blue) |
| `--color-accent-dark` | #7CC0F0 | #1E6FA0 | Links, hover accent |
| `--color-accent-glow` | rgba(164,216,255,0.15) | rgba(43,143,204,0.12) | Focus rings, glow backgrounds |
| `--color-btn-text` | #35393C | #FFFFFF | Text on accent-background buttons |
| `--color-warm` | #C9A460 | #9A7A35 | Secondary accent (amber gold) |
| `--color-warm-glow` | rgba(201,164,96,0.12) | rgba(154,122,53,0.10) | Warm accent glow backgrounds |
| `--header-bg` | rgba(53,57,60,0.92) | rgba(245,247,250,0.92) | Sticky header with blur |

### Semantic Colors (dark mode values, reduce saturation ~15% for light)
| Token | Value | Usage |
|-------|-------|-------|
| Success | #6FCF97 | Positive states |
| Warning | #F2C94C | Caution states |
| Error | #EB5757 | Error states |
| Info | #A4D8FF | Informational (shares accent) |

### Color Rules
- Warm accent: max 1-2 elements per section. Restraint is the point.
- Accent glow: use for focus rings, selected states, callout backgrounds. Never as solid fill.
- Proof section: full accent-color background with inverted text (--color-btn-text). This is the one place color goes bold.

## Spacing
- **Base unit:** 4px
- **Density:** Comfortable (generous section padding, readable line-height)

### Scale
| Token | Value | Px | Usage |
|-------|-------|----|-------|
| `--space-2` | 0.5rem | 8px | Tight gaps, badge padding |
| `--space-3` | 0.75rem | 12px | Chip padding, small gaps |
| `--space-4` | 1rem | 16px | Standard gap, card padding |
| `--space-5` | 1.25rem | 20px | h2 padding-top, nav gap |
| `--space-6` | 1.5rem | 24px | Section inner gaps, proof-intro margin |
| `--space-8` | 2rem | 32px | Hero display gap, mobile section padding |
| `--space-10` | 2.5rem | 40px | About grid gap, work entry desktop gap |
| `--space-12` | 3rem | 48px | (reserved) |
| `--space-16` | 4rem | 64px | Mobile section padding-block |
| `--space-20` | 5rem | 80px | (reserved) |

### Section Padding
| Breakpoint | Section padding-block |
|------------|----------------------|
| Mobile (<768px) | 4rem (64px) |
| Tablet (768px+) | 5rem (80px) |
| Desktop (1024px+) | 6rem (96px) |

## Layout
- **Approach:** Creative-editorial (hero breaks grid, sections use grid-disciplined containers)
- **Container max:** 68rem
- **Container padding:** 1.1rem (mobile), 1.5rem (tablet+)
- **Grid:** CSS Grid and Flexbox, no framework. Responsive via 3-tier breakpoints.

### Breakpoints
| Name | Value | Nav behavior |
|------|-------|-------------|
| Mobile | <768px | Full-screen overlay menu |
| Tablet | 768px+ | Hamburger with slide-out |
| Desktop | 1024px+ | Horizontal nav bar |

### Border Radius
| Size | Value | Usage |
|------|-------|-------|
| sm | 0.3rem | Badges, small tags |
| md | 0.45rem | Buttons, inputs, cards, header controls |
| lg | 0.65rem | Portrait image, focus callout, mockup frames |
| full | 999px | Pills, chips |

## Motion
- **Approach:** Intentional (entrance animations, meaningful transitions, no gratuitous motion)
- **Easing:** ease (entrance), ease (transitions)
- **Reduced motion:** Full `prefers-reduced-motion` support. All transitions and animations disabled.

### Duration Scale
| Type | Duration | Usage |
|------|----------|-------|
| Micro | 150ms | Button hover, link hover |
| Short | 200-250ms | Nav underline, menu item transitions |
| Medium | 300-350ms | Mobile menu open/close, theme transitions |
| Long | 550-700ms | Hero entrance (fade-up), scroll reveal |

### Animations
| Name | Description | Duration | Trigger |
|------|-------------|----------|---------|
| `fade-up` | opacity 0->1, translateY(20px->0) | 0.7s ease | Hero entrance, delayed 0.1-0.4s |
| `.reveal` | opacity 0->1, translateY(24px->0) | 0.55s ease | IntersectionObserver, threshold 0.12 |
| Mobile nav stagger | opacity 0->1, translateX(-16px->0) | 0.4s cubic-bezier(0.4,0,0.2,1) | Menu open, staggered 0.05s per item |

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-28 | Poppins as sole typeface | Weight variation (300-800) provides sufficient hierarchy. Single font reduces load time and complexity. |
| 2026-03-28 | Warm amber (#C9A460) as second accent | Temperature contrast differentiates from monochrome+blue portfolio norm. Max 1-2 elements per section. |
| 2026-03-28 | Proof section color-flip | Full icy-blue background breaks visual rhythm intentionally. Creates the most memorable moment on the page. |
| 2026-03-28 | Editorial/magazine aesthetic | Matches the "I make the hard ones executable" thesis. The site itself demonstrates clear, structured thinking. |
| 2026-03-28 | Initial design system documented | Created by /design-consultation. Extracted from existing styles.css. |
