B7 FI Command Center V11.17.46 — Sticky Header / Browser Zoom Reversal TEST

Changes:
- Removed the V11.17.45 devicePixelRatio-based global zoom script and CSS.
- Re-established normal document flow for header, body, and footer.
- Set sticky shell top:0, without transformed/zoomed application ancestors.
- No Microsoft List logic, records, or saved data intentionally changed.

This is a narrow regression repair, NOT the full responsive architecture rewrite.
Test on a separate deployment at 67, 80, 100 and 125 percent zoom. Verify header sticks during scroll, and check normal and presentation views. Do not deploy over live production until verified.
