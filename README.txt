B7 FI COMMAND CENTER V11.17.33 — BADGE GEOMETRY CONSOLIDATION — TEST BUILD

BASE: Complete uploaded V11.17.32 package. All original pages, photos, editing handlers, tool records, and Microsoft List integration code remain included.

WHAT CHANGED
- Added one last-loaded stylesheet: css/badge-geometry-v11.17.33.css.
- Resolved competing badge height rules in the Live Operations and Tools Center cards.
- Standard badge grid: 27 standard badges in nine 3-column rows, followed by System Wafers, Computer Tracking and Component Tracking in three full-width rows.
- All 30 badge cells have equal 50px heights and 4px horizontal/vertical spacing on standard cards. The badge grid reserves 644px and the full Live Operations card reserves enough vertical space instead of shrinking or clipping the bottom rows.
- Label and selected state remain visible in separate lines; existing color state and click/save handlers are preserved.
- Presentation Mode retains screen-fitting equal rows, with its own compact text scaling; it does not inherit the standard card's 644px minimum.
- Version updated to V11.17.33 in the header.

VALIDATION COMPLETED
- JavaScript syntax check passed for js/app.js.
- Chromium isolated CSS fixture using the real stylesheet stack, at 1920px, 1366px and 1024px viewport widths: each of the Live and Tools badge grids rendered 30 cells in 12 rows, all 50px high, 4px gap, and no grid overflow.

LIMITATIONS
- Isolated CSS fixture testing is NOT a full production browser test. Full application startup, all badge save workflows, Presentation Mode interactions and corporate Microsoft List connection were not verified. Do not treat this test build as production approved.
- The old CSS files are retained for compatibility. The new stylesheet must remain the last stylesheet in index.html.
- If a small screen cannot display the full height of the tool card at once, the page must scroll vertically; this is intentional to prevent badge clipping. Presentation Mode uses a separate fit-to-screen layout.

HOW TO TEST
1. Unzip into a NEW folder and run START-COMMAND-CENTER.bat (or deploy the entire folder to your test GitHub Pages branch). Confirm V11.17.33 in the header.
2. Hard refresh (Ctrl+F5). In DevTools Network, verify badge-geometry-v11.17.33.css returns HTTP 200.
3. In Live Operations and Tools Center, check every row, including POD, System Wafers, Computer Tracking, Component Tracking. Confirm uniform height and spacing.
4. Test at 100%, 80%, 67%, 125% browser zoom and on your laptop. Scroll to the bottom of the card if needed.
5. Open Presentation Mode and check the same tool. Test badge editing, saving, page reload, and persistence. Confirm current state text and color.
6. Test Microsoft List syncing separately at work with test tools only; confirm another laptop sees a saved change. Do not delete/reset production list or browser data.

If badge updates or Microsoft List sync fail, collect the exact error text and note which mode (local/GitHub Pages) and tool UTID. These behaviors were not changed in this geometry-only update.
