B7 FI COMMAND CENTER — V7.6.42

STRUCTURAL CONSOLIDATION TEST BUILD

This build works from the actual V7.6.41 source rather than adding screenshot-only patches.

CHANGES
- Quarter Summary fleet geometry is now one final override shared by normal Summary, Live Status Quarter Summary carousel, and Presentation Mode.
- Tool fleets are right anchored and grow right-to-left. A protected one-thumbnail-width clearance remains after the tool type name. Images shrink only when the fleet consumes its available lane.
- Red shipped X remains attached to the individual tool image and scales with it.
- Live Status Quarter Summary snapshot now preserves tool click targets instead of stripping data-tool attributes.
- Presentation Quarter Summary reserves explicit viewport space for hero, 8 status boxes, family table, bottom navigation, outer border and gaps.
- 8 live status boxes reduced to a compact fixed geometry so their lower border cannot collide with the SYSTEM table header.
- Clickable status-bar regions use navigation-style semantic glow with no narrow inner hover artifact.
- Command Center activity arrow remains removed.
- System Wafers badge is forced into one badge slot with a true horizontal divider: top half = System Wafer Kit workflow; bottom half = additional wafer tally.

TEST FOCUS
1. Normal CY26Q3 Summary with 9 tool types and a large Boxster fleet.
2. Live Operations Quarter Summary carousel: compare fleet spacing/X placement and click a tool image.
3. Quarter Summary Presentation Mode at 100% browser zoom: verify full outer border, all family rows, and bottom nav are visible. Hover/click individual tool images.
4. Hover actionable sections of all three status bars.
5. Inspect System Wafers badge with zero and non-zero additional wafer counts.

Extract the entire ZIP before running START-COMMAND-CENTER.bat.

============================================================
V7.6.43 — DYNAMIC QUARTER LIFECYCLE / SUMMARY + WAFER UPDATE
============================================================
- Calendar quarter is now detected automatically at startup/render. At quarter rollover the new calendar quarter becomes the active quarter automatically.
- Adding the first tool assigned to a future quarter automatically exposes that quarter's Summary and Tools navigation; no hand-built quarter page is required.
- Live Operations tool carousel continues to include all non-archived tools across quarter rollover. Previous-quarter carryover remains live until explicitly archived.
- Quarter Summary navigation is data-driven. Each non-archived quarter receives its own Summary using the same master Quarter Summary renderer.
- Regular Quarter Summary remains the reference geometry. Family tool photos stay right-anchored, grow left, preserve a protected one-photo-width gap from the tool-family name, retain click/hover behavior, and keep shipped red-X overlays on the photo.
- Presentation Summary and embedded Live Operations status-carousel Summary receive parity/fit refinements so the complete wallboard remains inside its border.
- System Wafers remains one normal badge footprint with two stacked rows: System Wafer Kit state on top and additional wafer counters on bottom. Extra-wafer attention can be red independently of the kit-complete state.
- Existing multi-user, archive, tool edit, shipping, priority, status, and checklist data behavior retained.

============================================================
V7.6.44 — QUARTER SUMMARY / PRESENTATION / WAFER LOCK
============================================================
CHANGES
- Regular Quarter Summary remains the master visual reference.
- The 8 Live Tool Status boxes now reserve enough label height for two-line labels, keep equal geometry, and remove the unwanted lower divider/border.
- Quarter Summary status counts are now calculated for the quarter being viewed instead of always using the calendar/current quarter.
- SYSTEM tool-family photo lanes now begin one tool-photo-width after the family name and grow left-to-right as tools are added. Photo-to-photo spacing and shipped red-X attachment remain locked.
- Presentation Mode now renders the same Quarter Summary content/layout and reserves a fixed bottom navigation lane so the table and outer border remain visible.
- Presentation Mode automatically creates a Quarter Summary navigation button for every currently active/non-archived quarter (for example CY26Q3 and CY26Q4).
- System Wafers uses the same outside badge footprint as every other badge. Inside that normal badge: top row = System Wafer Kit workflow state; bottom row = S / H / D65 / D65F additional-wafer counters.
- Quarter Summary navigation no longer keeps an empty quarter Summary solely because it is the calendar quarter. When the final tool for a quarter is archived, that Summary can disappear and the remaining quarter becomes the selected Summary.

TEST FOCUS
1. CY26Q3 Summary: verify all 8 Live Tool Status labels/numbers and borders are fully visible with no gray line below.
2. SYSTEM rows: verify the first photo begins about one photo-width after each family name and additional photos grow to the right.
3. System Wafers badge: compare its outside edges directly with the badge beside it; they must match exactly.
4. Presentation Mode: verify the complete Quarter Summary, all tool-family rows, outer border, and bottom navigation are visible at 100% zoom.
5. With a CY26Q4 tool present, verify Presentation Mode shows both CY26Q3 and CY26Q4 Quarter Summary buttons and switches between them without leaving Presentation Mode.
6. Archive CY26Q3 tools one at a time. After the final CY26Q3 tool is archived, verify CY26Q3 Summary disappears and CY26Q4 Summary becomes the selected active Summary. Confirm archived Q3 tools remain in Tool Archive.

Extract the entire ZIP before running START-COMMAND-CENTER.bat.

============================================================
V7.6.45 — SKETCH LAYOUT LOCK — 2026-09-26
============================================================
This build uses the hand-drawn layout supplied during testing as the authoritative geometry specification.

QUARTER SUMMARY / SYSTEM PHOTO ROWS
- Tool-family photos are RIGHT-ANCHORED again.
- One tool stays at the far right; additional tools grow from RIGHT TO LEFT.
- A protected minimum gap approximately equal to one tool-photo width is reserved between the family name and the closest photo.
- Existing photo-to-photo spacing and shipped red-X overlay behavior are preserved.
- Rule applies to the shared Quarter Summary presentation/master contexts.

SYSTEM WAFERS BADGE
- System Wafers remains ONE standard badge-grid cell with the same outside footprint as neighboring badges.
- Inside only, the badge is divided into two stacked rows by one thin horizontal divider.
- Top row = System Wafer Kit workflow/status.
- Bottom row = additional wafer counters: S / H / D65 / D65F.
- Counter format is compact: S=0 | H=0 | D65=0 | D65F=0.
- Existing wafer workflow automation and manual additional-wafer counters are preserved.

QUARTER SUMMARY LIVE STATUS
- Reinforces removal of any extra lower rail/divider beneath the eight live-status cells.

TEST FOCUS
1. Compare SYSTEM rows directly to the approved sketch with families containing 1, 2, 3, 5, and many tools.
2. Verify the rightmost photo remains anchored and new photos grow left.
3. Verify the closest photo never crowds the family name; retain about one photo-width minimum gap.
4. Verify shipped X overlays remain centered on their exact photos.
5. Compare System Wafers outside edges to the badge immediately beside it: top, bottom, width, and grid alignment must match.
6. Verify wafer top status and bottom counters are both readable without changing the badge-grid geometry.
