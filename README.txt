B7 FI COMMAND CENTER V11.17.36 - BADGE CONTAINER REPAIR - TEST

Based on complete V11.17.35 application.

CHANGE: One final layout contract for 27 standard badges (9 x 3) plus System Wafers, Computer Tracking, Component Tracking (three full-width rows). All badge rows 50px, gaps 5px.
CHANGE: Live Operations card now grows to fit the full left column; removed fixed parent height clipping. Identity stack reserves 4 rows including Quarter and Ship Date. Tools Center uses the same badge geometry.
UNCHANGED: Existing badge click/edit/save code, colors, tool data and Microsoft List connection logic. Presentation Mode viewport layout unchanged.

IMPORTANT: This is a TEST BUILD. Source/ZIP validation performed; interactive browser testing and Microsoft List sync NOT verified. Do not replace your production data with test data.

TEST: Use Live Operations and scroll to the bottom of a tool card. Verify POD, System Wafers, Computer Tracking, Component Tracking and Update Tool Status are all visible. Compare Tools Center. Test editing a badge and reload to verify persistence.
