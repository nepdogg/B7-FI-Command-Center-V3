B7 FI COMMAND CENTER V11.17.49 — BADGE GEOMETRY REPAIR — TEST ONLY

BASELINE: Complete V11.17.48 application, retained with its existing JavaScript logic, assets, launcher, Microsoft List integration, and reports.

CHANGES:
- New final stylesheet css/b7-badge-geometry-v11.17.49.css to resolve contradictory badge row geometry.
- Normal Universal Tool Card identity stack has four intrinsic rows (eight identity fields), not a fixed 148px block that can hide the bottom fields.
- Normal card badge grid, compact tool badges, and visual editor badge grid use 58px rows.
- System Wafers, Computer Tracking, Component Tracking each occupy one full-width row, not two rows.
- Badge cells no longer rely on conflicting 52px fixed/max heights and 54px auto heights.
- Presentation tracking badges forced to one row; existing Presentation Mode viewport fitting preserved.
- Application version set to 11.17.49.

TEST:
1. Extract to a NEW folder; preserve previous production application and List data.
2. Test one UTID in Live Operations, Tools Center, and Presentation Mode.
3. Check eight identity fields, Normal Process, Carryover, 27 standard badge slots, three tracking badges, and Update Tool Status.
4. Check 67%, 80%, 100%, 125% browser zoom and actual scroll behavior.
5. Verify that clicking existing controls and saving still works with TEST data.
6. For GitHub Pages testing, upload all files from this folder and hard-refresh the test site.

LIMITATIONS:
- Browser rendering, Microsoft List authentication, and coworker sync have not been verified.
- This is a focused badge and identity clipping correction, NOT a completed browser-zoom architectural rewrite or Brain/Admin/Shipping/Priority redesign.
- No production records or Microsoft List schemas are changed by this package.
