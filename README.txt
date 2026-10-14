B7 FI COMMAND CENTER V11.17.5 — ZOOM, NAVIGATION & BADGE REPAIR (TEST ONLY)

BASED ON: Full-featured V11.17.4 package; all original app files, tool images, and launchers retained.

CHANGES
1. Page navigation now allocates room for carousel controls and readable action labels.
2. Computer Tracking and Component Tracking badges use compact full-width badge geometry like System Wafers.
3. Badge colors: neutral = no history, green = history accounted for, yellow = latest swap/replacement/borrowed, red = latest failed/missing. This is a preliminary indicator, not a complete inventory reconciliation.
4. Presentation left column removes fixed minimum badge heights that caused clipping; three columns remain aligned in one perimeter.
5. Normal Live Operations expands the tool card to better use viewport height when browser zoom is reduced.
6. Cache version advanced to V11.17.5.

HOW TO TEST TOMORROW
1. Extract ZIP into a NEW folder; do not overwrite production or other versions.
2. Run START-COMMAND-CENTER.bat locally, or deploy the extracted files to a TEST site.
3. Check Live Operations at 67%, 80%, 100%, and 125% browser zoom.
4. Check the navigation: Verify Tools, Update Command Center, Screenshot, and carousel controls.
5. Open Presentation Mode; verify the entire left badge column, update button, three columns, and bottom nav remain visible.
6. On a nonproduction tool, test both equipment badge modals and their colors after recording sample events.

IMPORTANT DATA SAFETY
- No Microsoft List records were deleted or reset. No List schema or sync logic was changed.
- Existing phantom-tool count, Microsoft List connection, and save failures are NOT resolved or production-verified by this update.
- Do not import real production records, clear browser storage, or delete List data to test this package.
- Keep the spreadsheet as source of truth until shared save/reload and cross-laptop sync pass.
- Browser layout was updated from source inspection; real Edge fullscreen and SharePoint integration require onsite testing.
