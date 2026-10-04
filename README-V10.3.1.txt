B7 FI COMMAND CENTER — V10.3.1
LIVE CARD VERTICAL GEOMETRY FIX

This build is based on the actual V10.3.0 source and targets the rendered problems shown in the latest test screenshots.

CHANGES IN V10.3.1
- Left Tool Card column no longer reserves a large dead grid row below the photo. The photo bubble now expands into genuinely available vertical space and the identity/badge controls remain grouped below it.
- Middle column vertical balance corrected: the top three operational status bubbles are shorter and top-aligned; the bottom three information-heavy bubbles receive more height.
- Right column now uses nine equal progress sections: FI, Micro Schedule, FI Forecast, Cycle Time, Lead/Admin, Customer Source, STR, Packing/Shipping, and Overall Tool Progress.
- Duplicate Tool Shipment Progress remains removed. Packing / Shipping is the single authoritative physical shipping workflow.
- All right-column progress sections receive the recovered vertical space and use thicker progress tracks.
- Overall Tool Progress is still calculated automatically by the Command Center Brain using FI + Lead/Admin + Packing/Shipping, but its UI is now the same simple progress-row format as the other right-column metrics. The redundant three mini breakdown boxes were removed.
- Presentation Mode uses the same nine-row right-column contract and the same middle-column vertical proportions while retaining its required enclosing presentation border.

BRAIN RULE
Default Overall Tool Progress weighting remains:
FI 50% + Lead/Admin 20% + Packing/Shipping 30%.
The value is derived automatically; it is not manually entered.

TEST FIRST
1. Live Operations at 100% browser zoom: verify no large dead space in the left column.
2. Verify the middle top three bubbles are shorter than the lower three and all content begins near the top.
3. Verify exactly nine right-column progress sections and no separate Tool Shipment Progress row.
4. Verify Overall Tool Progress looks like the other progress rows.
5. Test browser zoom at 80% and 67% and verify the photo consumes available left-column space instead of leaving a blank vertical region.
6. Enter Presentation Mode and verify the same middle/right proportions remain visible inside the presentation border.

This package contains one README/update text file only.
