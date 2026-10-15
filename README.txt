B7 FI COMMAND CENTER — V11.17.27 — EQUAL HEIGHT BADGE TEST

SOURCE: Complete V11.17.26 full package, with an additional final badge geometry stylesheet.

CHANGES
- Standard badges on Live Operations and Tools Center use a fixed 42px row,
  matching the SCC CLEANUP badge example. Every standard badge has the same height.
- Two-line name/status faces are centered; longer statuses use compact text.
- System Wafers, Computer Tracking and Component Tracking span all three columns
  and use the same 42px row height.
- Presentation Mode preserves one-screen geometry and twelve equal badge rows.
  Its badge row height is scaled uniformly to fit the available viewport.
- Live Operations uses fixed photo and identity heights across all tools.
- All existing edit, badge state/color, POD, Driver, and List sync logic retained.

TEST AT WORK
1. Back up real tool data. Do NOT reset the Microsoft List.
2. Extract ZIP to a NEW folder. For GitHub Pages, deploy the entire extracted
   folder contents, not only index.html; then hard-refresh the browser.
3. Compare the SCC CLEANUP row to EQ CHECKLISTS, OPTIONS TESTING, POD and
   the three full-width tracking badges on Tools, Live and Presentation views.
4. Save a badge state, refresh, and confirm its text and color persist.
5. Confirm LIST CONNECTED and verify a harmless edit from a second laptop
   before trusting shared production data.

VALIDATION LIMITATIONS
Static code/ZIP checks do not prove visual correctness in every browser or
Microsoft List connectivity in your workplace. This remains a TEST build.
