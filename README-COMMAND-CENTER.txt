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
