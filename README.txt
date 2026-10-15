B7 FI COMMAND CENTER V11.17.30 — SHARED BADGE GRID TEST

Based on the supplied full V11.17.29 ZIP. No tool data, badge handlers, or Microsoft List logic was changed.

Changes:
- ONE final badge CSS contract used by Live Operations and Tools Center.
- 27 ordinary badges: exactly 42px high, 5px row and column gaps, nine rows.
- System Wafers, Computer Tracking and Component Tracking: three full-width 42px rows.
- Shared two-line font sizing across Live Operations and Tools Center.
- Fixed 1070px Live Operations card allocation so badge rows do not shrink when tool text changes.
- Presentation Mode retains its viewport-fitting equal-height 12-row grid.
- Existing badge state, status color, click-to-edit, save and Microsoft List code is unchanged.

TESTING:
1. Open the START-COMMAND-CENTER.bat launcher or your existing supported hosting method.
2. Compare the same UTID on Live Operations, Tools Center and Presentation Mode.
3. Confirm 27 standard badges + 3 full-width rows, 5px gaps, no missing POD.
4. Update a badge and verify its selected text and color after refreshing.
5. Check 100% zoom and laptop zoom levels.
6. Verify Microsoft List connectivity and cross-device save separately before production.

VALIDATION LIMITATIONS:
JavaScript syntax and ZIP structure checked. Browser rendering is blocked in this environment, so the visual result is not independently verified. Do not treat as production certified.
