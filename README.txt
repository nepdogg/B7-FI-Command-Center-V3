B7 FI COMMAND CENTER V11.17.29 — BADGE LAYOUT CONSOLIDATION (TEST ONLY)

Based on the uploaded V11.17.28 full application. No changes to tool data, badge state editing, Microsoft List, or persistence code.

Changes:
- Replaced the last-loaded badge override with one shared 12-row / 3-column geometry for Live Operations and Tools Center.
- 27 operational badges in nine rows of three, followed by System Wafers, Computer Tracking, and Component Tracking as three full-width rows.
- Exactly 42px height per badge and 5px gutters in regular views; all rows equal within the fixed presentation viewport.
- Two-line badge labels/states use consistent compact font sizes and wrapping.
- Fixed photo/identity region dimensions are retained.

TEST PLAN
1. Extract to a new folder, preserving the previous build and any real data.
2. At 100% zoom inspect all 27 badges + three full-width rows on Celestiq, Zephyr, and Panamera in Live Operations, Tools Center, and Presentation Mode.
3. Check EQ CHECKLISTS, OPTIONS TESTING, POD and all full-width badges.
4. Update a badge, save, refresh, verify text and color.
5. Verify Microsoft List connection and sync on-site before trusting production edits.

Validation limitations: CSS was structurally parsed and JS syntax checked. Automated browser rendering is blocked in this environment, so visual success is not yet verified.
