B7 FI COMMAND CENTER V11.17.17 — GEOMETRY AND NAVIGATION TEST

This is a TEST package, not a verified production or Microsoft List repair.

Changes:
- Computer and Component Tracking badges now share the full-row wafer-badge CSS path in the full Universal Tool Card, matching Tools Center layout.
- Live Operations three-column card uses a fixed 870px content grid: fixed 250px photo, six equal status panels, nine equal progress panels, 12 badge rows. Content varies; geometry does not.
- Progress tracks increased to 20px in Live Operations and Presentation Mode.
- Page navigation overrides legacy fixed-width grid and equal-width button rules. Labels get content-width controls with 14px padding. At narrow zoom/monitor widths the pagebar scrolls horizontally rather than truncating buttons.
- At CSS viewport widths <=1050px Live Operations stacks the three sections instead of crushing them.

Test:
1. Back up local data. Extract into a separate folder. Do not overwrite the working copy.
2. Open index.html and compare Targa, Vanquish, Regera, and Taycan in Live Operations and Presentation Mode.
3. Compare all three full-width badges with Tools Center.
4. Test navigation at 67%, 80%, 100%, 125%, and on laptop/monitor.
5. If testing via GitHub Pages, upload the entire new folder and refresh cache; the CSS cache query is now 111717.

Limitations: Microsoft List disconnection, bogus A-... records, saves and multi-user sync were NOT modified or validated. Browser rendering needs verification on your devices. Do not use this test build as the only source of production data.
