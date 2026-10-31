# CTUC — Art Direction

## Concept: "The Dossier and the Arena"

CTUC reads as two documents laid over each other: a **classified technical dossier**
(numbered sections, classification codes, coordinates, hairline rules, mono annotations)
and a **championship broadcast** (massive condensed type, a single crimson light source,
a stepped podium). The dossier gives credibility; the arena gives energy.
The cyber character comes from composition and typography, not effects.

## Typography

| Role       | Family          | Treatment                                                        |
| ---------- | --------------- | ---------------------------------------------------------------- |
| Display    | Archivo (var)   | `wdth 62` + weight 800–900 for championship marks (CTUC, numerals) |
| Editorial  | Archivo (var)   | `wdth 100–112`, weight 500–600, tight tracking for headlines       |
| Body       | Geist           | 16–18px, `leading-relaxed`, max 62ch                                |
| Annotation | JetBrains Mono  | 11–12px, uppercase only here, tracked +0.08em                       |

Uppercase is reserved for mono annotations. Headlines stay sentence case.

## Color

85% void/surface/line. Crimson = action, rank, primary CTA, one light source per view.
Electric blue = data, [TBA] markers, environment light, focus rings. Never both at full
intensity in the same component. No purple, no gradient text.

## Graphic language

- **Section codes**: `§01 — Brief`, `§02 — Classification` … numbering the whole site as one dossier.
- **Classification IDs**: `CLS-W01` style codes for challenge categories.
- **The Mark**: an original seal — instrument dial with 120 ticks + a skyline of vertical fins
  (an abstract architectural rhythm) whose tallest fin carries a crimson flag.
- **Chamfered corners** only on CTAs and the platinum sponsor slot.
- **Corner brackets** only on figures (the Mark, map, venue drawing).
- **[TBA]**: one consistent blue mono marker everywhere information is unconfirmed.

## Composition per section

| Section     | Composition                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| Hero        | Left-heavy: oversized condensed CTUC bleeding left, Mark overlapping right, instrument bar on a ruled baseline |
| About       | Editorial statement across 8 cols + narrow annotation rail; metrics as a ruled ledger |
| Categories  | Sticky header rail (4 cols) + 2×3 hairline classification matrix (8 cols)  |
| Schedule    | Giant date block on left, vertical slot rail on right                       |
| Prizes      | Full-width stepped podium of outlined numerals, crimson light behind 01      |
| Venue       | Full-bleed architectural line drawing with venue name set over it + map figure |
| Sponsors    | Quiet tier ledger with empty slots                                           |
| Final CTA   | Ghosted outline CTUC behind a left headline, compact countdown on the right  |

## Motion

One canvas (perspective floor + a few data packets, 30fps, paused when hidden, static
when reduced motion). Framer Motion only for reveals, countdown digits, drawer.
Hero glitch runs once on load and on hover. Nothing loops except the Mark's slow ring.
