B7 FI COMMAND CENTER V10.3.2
Geometry + Quarter Navigation Correction

SOURCE
- Built directly from V10.3.1 Live Card Vertical Geometry Fix.

CHANGES
1. Live Operations middle column now divides its complete available height into six equal sections.
2. Live Operations right column now divides its complete available height into nine equal sections, including Overall Tool Progress.
3. Tool Status / Priority intelligence bar now owns a dedicated 94px row so its lower margin cannot overlap or cut off the tops of the three card columns.
4. Header left and right regions were widened; center region was resized to use the full header height and match the outside regions.
5. Quarter Summary navigation is now generated from the union of current quarter, live tool quarters, and archived quarter summaries. This restores the current-quarter Summary button (for example CY26Q4 SUMMARY) while retaining previous-quarter Summary access.
6. Presentation Mode uses the same six-equal middle / nine-equal right column geometry contract.
7. Existing V10.3.1 logic and the nine-section right-column model are preserved; duplicate Shipment Progress remains removed.

TEST ORDER
- Live Operations at 100% browser zoom.
- Confirm Tool Status/Priority bar does not overlap any column.
- Confirm all six middle sections are equal height.
- Confirm all nine right sections fill the column to the bottom.
- Confirm left/middle/right card columns share the same top and bottom boundaries.
- Confirm header outside sections use the available width and center header matches their height.
- Confirm CY26Q4 SUMMARY appears in Page Navigation and previous-quarter Summary remains available.
- Repeat Live Operations at 80% and 67% zoom.
- Enter Presentation Mode and verify the same middle/right geometry without clipping or scrolling.
