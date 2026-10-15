B7 FI COMMAND CENTER — V11.17.25 — BADGE ROW GEOMETRY TEST

Based on the full V11.17.24 package. All app data handling, editing,
Microsoft List connection code, tool fields, and event handlers are unchanged.

CHANGES
- Corrected the two-line badge clipping caused by old fixed 12-row
  fractional grid heights and newer minimum 36px badge heights.
- Live Operations card has the same fixed height and same photo/identity
  dimensions for every tool, with extra vertical room for the badge grid.
- POD, Computer Tracking, Component Tracking and System Wafers retain
  their existing positions and click handlers.
- Presentation Mode keeps its fixed card geometry and uses compact
  two-line badge text; no changes to the surrounding card sections.
- Tools Center badges grow vertically instead of cutting off text.

WORK TEST CHECKLIST
1. BACK UP REAL TOOL DATA FIRST. Do not reset or clear any Microsoft List.
2. Extract the complete ZIP into a new folder, not over your old build.
3. Test all 9 example tools: check long two-line badge states for overlap.
4. Edit a badge, save, refresh and verify the state text and color remain.
5. Test the Driver, POD, System Wafers, Computer and Component editors.
6. Test Live Operations, Tools Center and Presentation Mode separately.
7. On-site: confirm LIST CONNECTED, save a harmless test edit and verify
   the change from a SECOND signed-in laptop before trusting shared data.

IMPORTANT: This build addresses badge layout only. It has not been
validated against your corporate Microsoft List, and must not be
considered production-safe until your on-site multi-user test passes.
