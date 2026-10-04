B7 FI COMMAND CENTER V10.5.0 — RUNTIME RENDERER REBUILD

BASE: V10.4.0 user-tested source.

ROOT CAUSE FIXED
Previous V10.3.x/V10.4.0 geometry changes targeted legacy .utc/.v10 wrapper paths while the active Live Operations VIEWS renderer is v9ToolCard(), which outputs .v10-tool-card / .v10-card-grid / .v10-status-column / .v10-progress-column. V10.5.0 targets the active runtime renderer directly.

CHANGES
- Header locked 35/30/35 with all three sections equal height.
- Page navigation remains one line and compresses button widths instead of dropping controls.
- Live Tool Status/Priority intelligence bar is structurally above the three-column grid.
- Live Operations three columns share one full card height.
- Middle column is exactly six equal-height sections.
- Right column is exactly nine equal-height sections including Overall Tool Progress.
- Left badge matrix absorbs remaining height so the left column no longer leaves a large dead region below Update Tool Status.
- Presentation Mode uses the same 6/9 contract and fits between the top intelligence bar and bottom presentation navigation without internal scrolling.
- CY26Q3/CY26Q4 quarter navigation and existing business/data logic preserved.
- One README only.

TEST FIRST
1. Confirm browser tab/header says V10.5.0.
2. Live Operations 100%: all three columns must share the same bottom edge.
3. Middle: six equal sections. Right: nine equal sections.
4. Check 80% and 67%.
5. Presentation Mode: full card visible above bottom nav, no clipping/scrolling.
