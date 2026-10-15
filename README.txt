B7 FI COMMAND CENTER V11.17.28 — UNIFORM BADGE GRID TEST

Base: V11.17.27 full source package.

CHANGES
- One final stylesheet controls all standard badge cells in Live Operations, Tools Center and Presentation Mode.
- 27 standard badges in 9 rows of 3, plus 3 full-width tracking rows.
- Every standard badge fixed at 42px high on normal pages with 4px horizontal and vertical gaps.
- Consistent 42px height for full-width tracking badges, separate from standard grid.
- Live card reserves exact badge-grid space rather than shrinking rows to fit content.
- Presentation Mode keeps equal-sized rows with 3px gaps and scales all rows together to the available viewport.
- Badge labels and selected status are centered with compact type; badge state logic and saving code are unchanged.

TESTING
1. Extract to a NEW folder; keep previous ZIP and real-data backups.
2. Inspect all 27 badges plus System Wafers, Computer Tracking, Component Tracking in Live Operations, Tools Center and Presentation Mode.
3. Check long states (EQ Checklists, Options Testing, POD), and 0/100% browser zoom.
4. Change a badge, save, refresh and verify state and color persist.
5. Verify Microsoft List connection and cross-device sync at work before relying on production data.

LIMITATIONS
- This build repairs CSS geometry only. No corporate Microsoft List connectivity test has been performed.
- Browser rendering may differ on your monitors; use screenshots to report remaining issues.
