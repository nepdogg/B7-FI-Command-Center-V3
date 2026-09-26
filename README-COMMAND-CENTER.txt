B7 FI COMMAND CENTER — V7.6.36
DYNAMIC QUARTER SUMMARY
September 25, 2026

BASELINE
- Built directly from V7.6.35 Structural Geometry Fix.
- V7.6.35 outer page, footer, UTC, and Presentation Mode geometry remains the baseline.

V7.6.36 CHANGES
1. Quarter Summary SYSTEM column is now data-driven.
   - The largest tool-family count in the active quarter determines how much horizontal width SYSTEM receives.
   - Six or fewer tools uses the normal layout.
   - Each tool beyond six progressively expands SYSTEM.
   - SYSTEM can expand to 50% of the table when required.
2. All remaining Quarter Summary columns automatically give up width proportionally when SYSTEM expands.
   - TOTAL, WAITING FI, IN FI, PACKING, SHIPPED, SHIPPING PROGRESS and REVEAL stay aligned across every row.
3. Every family row independently sizes its own tool thumbnails.
   - A visible gap is maintained between every tool.
   - Photos shrink only when that family needs the additional room.
   - Families with fewer tools retain larger photos.
4. Shipped red X is locked to each individual thumbnail container.
   - It scales with that tool photo.
   - It cannot extend into the neighboring tool container.
5. The same dynamic rules apply to:
   - CY26Q3 Summary page
   - Quarter Summary in Live Operations
   - Quarter Summary Presentation Mode
6. No quarter-specific tool counts are hard-coded.

TEST FOCUS
- Test at 100% browser zoom.
- Add/remove tools so one family has 1-3 tools, another 6, and another 8-12 if practical.
- Confirm SYSTEM expands when the largest family grows.
- Confirm the other columns become narrower but remain aligned.
- Confirm there is visible space between every tool photo.
- Confirm every shipped red X remains centered on exactly one photo.
- Confirm the same data/layout behavior on Summary, Live Operations and Presentation Mode.
- Confirm Presentation Mode bottom navigation remains fully visible.

LAUNCH
Extract the entire ZIP, then run START-COMMAND-CENTER.bat.
