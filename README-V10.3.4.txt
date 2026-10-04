B7 FI COMMAND CENTER V10.3.4 — MEASURED LIVE GEOMETRY LOCK

SOURCE
Built directly from the tested V10.3.3 package.

CHANGES
- Normal Live Operations now measures the real left-column content height and remaining viewport height, then assigns one explicit shared height to the complete three-column grid. This removes the unused space below the right column.
- Middle column is locked to six equal-height sections.
- Right column is locked to nine equal-height sections, including Overall Tool Progress, filling the same top-to-bottom height as the left and middle columns.
- Status/Priority bar remains in its own row above the three columns and cannot overlap their top edges.
- Header outside sections are widened to 34% / 32% / 34%; the center section and KLA connection box are 76px tall to match the left/right sections.
- Presentation Mode keeps its fixed viewport fit and uses the same six-equal / nine-equal section contract.
- Dynamic current/previous Quarter Summary navigation from V10.3.3 is preserved.
- One-line page navigation and all V10.3.3 data/workflow behavior are preserved.

TEST
1. Confirm browser title and upper-left header show V10.3.4.
2. Live Operations at 100%: verify all three columns end on the same bottom line.
3. Verify the middle has six equal sections and the right has nine equal sections with no empty area below Overall Tool Progress.
4. Verify the Status/Priority bar is fully above the columns.
5. Verify header left/right regions are wider and all three header regions have equal height.
6. Repeat at 80% and 67% zoom.
7. Enter Presentation Mode and verify the complete card fits between the top status bar and bottom presentation navigation with six equal middle and nine equal right sections.
8. Verify CY26Q3 SUMMARY and CY26Q4 SUMMARY navigation remains available as applicable.
