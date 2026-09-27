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
