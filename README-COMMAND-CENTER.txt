B7 FI COMMAND CENTER — V7.6.49
Build: 2026-09-29 — Quarter Archive + Search Expansion

BASELINE
- Built directly from V7.6.48 Root Cause Consolidation supplied for this test cycle.
- Existing local/shared data storage keys are preserved so current test data can continue to load.

V7.6.49 CHANGES
1. SEARCH CENTER
- Current Tools and Archive Tools are now shown in separate result sections.
- Search understands tracked workflow facts, not only literal text.
- Supported test searches include: reduced process, extra shiny wafers, extra haze wafers, extra DSW65 wafers, extra DSW65F wafers, 150 checklist, system wafers, UTID, customer, sales order, driver, status, notes, badges and checklist text.
- Added one-click example searches for Reduced Process, Extra Shiny Wafers, 150 Checklists and System Wafers.
- Archived quarter snapshots are included in archive searches.

2. REDUCED PROCESS
- Active Reduced Process indicator now uses a brighter orange/yellow high-visibility treatment so it stands out immediately from the normal badge matrix.

3. QUARTER END LIFECYCLE
- Quarter day progress stops at 100% when the quarter ends.
- The days card changes to QUARTER COMPLETE / CLOSED / QUARTER ENDED instead of continuing into negative days.
- Final shipping result remains visible: MISSION COMPLETE if all tools shipped, otherwise the number of tools not shipped.

4. AUTOMATIC FINAL QUARTER ARCHIVE
- On the first day after a quarter ends, the Command Center automatically creates a frozen final-quarter snapshot the next time the app is opened/rendered.
- Snapshot records the quarter, final tool count, shipped count, tools not shipped, final result, and final tool records.
- Operations Center > Tool Archive now contains FINAL QUARTER SUMMARIES above the individual archived-tool list.
- Final snapshots remain frozen even if live tool records are changed later.
- OPEN FINAL TOOL LIST recalls the tool-level final state captured in the snapshot.

5. MYSTERY BOX REVEAL
- Celebration reveal is now full-screen instead of a small side/modal card.
- Media and celebration text scale to the full display while keeping the close control available.

TESTING
A. Search Center
- Search "reduced process" and verify only reduced-process tools appear.
- Search "extra shiny wafers" and verify only tools with additional shiny wafer count > 0 appear.
- Search "150 checklist" and verify tools currently in FI_150-series checklists appear.
- Verify CURRENT TOOLS and ARCHIVE TOOLS are separate sections.

B. Quarter Close
- Normal current-quarter behavior should remain unchanged before the end date.
- After the quarter end date, verify day progress freezes at 100%, the card says CLOSED / QUARTER ENDED, and no negative day count appears.
- On the day after quarter end, open Tool Archive and verify a FINAL QUARTER SUMMARY is automatically present.

C. Mystery Box
- Open an unlocked reveal and verify the celebration occupies the full screen.

D. Reduced Process
- Open CY26Q3 Tools and verify an active Reduced Process badge is immediately visible and clearly different from the inactive/normal state.

PACKAGING
- This is the only README/update TXT file in the build.
