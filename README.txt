B7 FI COMMAND CENTER V11.17.19 — OTHER PAGES NAVIGATION TEST
===============================================================
Base: V11.17.18, the version where Live Operations navigation was confirmed working.

CHANGE
- Apply main-navigation-style evenly distributed page tabs on all OTHER pages.
- Reserve intrinsic width for the right-side action buttons (Tool Type, Update,
  Add Tool, Screenshot, and other page-specific controls).
- The tab count follows the actual number of page buttons, not a hard-coded five.
- When a monitor or browser zoom is too narrow, the entire navigation row
  scrolls horizontally instead of overlapping or hiding controls.
- LIVE OPERATIONS NAVIGATION IS EXCLUDED from the new CSS rules.
- Tool card, badge, data, and Microsoft List logic are unchanged.

TEST
1. Extract to a new folder. Do not overwrite your working Command Center.
2. Back up local data before testing; do not use real multi-user List data.
3. Verify Live Operations navigation is IDENTICAL to V11.17.18.
4. Verify CY26Q3/CY26Q4 Tools: all five tabs AND Tool Type, Update,
   Add Tool, Screenshot visible without overlap at normal monitor width.
5. Check Shipping, Priority, Status, Cycle, Meeting, Action, Reference,
   Search, Archive, and Administration pages.
6. Check browser zoom 80%, 100%, 125% and a smaller laptop viewport.
   A horizontal scrollbar is expected if all controls cannot fit.

LIMITATIONS
- Source edits and JS syntax can be checked automatically; visual browser
  behavior needs confirmation on your actual devices.
- Microsoft List connectivity and bogus records are NOT fixed in this build.
- This build does not delete or migrate any stored records.
