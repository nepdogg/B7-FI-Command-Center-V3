B7 FI Command Center V11.17.31 — Badge Grid Structural Repair (TEST)

Based on the full V11.17.30 package.

Changes:
- A single badge geometry stylesheet for Live Operations and Tools Center: 27 standard badges in 9 rows and 3 full-width badges, 44px high, 4px gaps.
- Fixed parent left-column allocation so the grid does not shrink.
- Controlled two-line/three-line status typography; no badge can grow beyond its row.
- Presentation Mode keeps proportional equal-height rows within its fixed screen.
- No change to badge state, editing, persistence, or Microsoft List code.

Testing:
1. Back up existing real data and retain your previous build.
2. Compare the same tool in Live Operations, Tools Center, and Presentation Mode.
3. Confirm all 27 standard and 3 full-width badges are visible, with 4px gaps in regular views.
4. Edit a badge, save, refresh, and check its text/color.
5. Microsoft List multi-user saving is NOT independently verified. Do not use as production source until confirmed.
