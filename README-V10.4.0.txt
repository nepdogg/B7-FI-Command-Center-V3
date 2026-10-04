B7 FI COMMAND CENTER V10.4.0 — CLEAN GEOMETRY REBASE

This build stops the V10.3.x override stacking approach. Historical V10.3.2-V10.3.4 geometry blocks were removed from the end of v10-command-center.css and replaced by one V10.4.0 owner block.

KEY FIXES
- Normal Live Operations uses the LEFT identity/badge column as the reference height.
- JS temporarily isolates the left column, measures its true intrinsic content height, then assigns that exact pixel height to all three columns.
- Middle column is exactly six equal rows across the complete shared height.
- Right column is exactly nine equal rows, including Overall Tool Progress, across the complete shared height.
- Priority/Tool Status bar remains structurally above the three columns and cannot overlap them.
- Header is 35% / 30% / 35%; center has the same 76px height as left/right.
- Page navigation remains one line and contracts buttons instead of dropping/wrapping quarter buttons.
- Presentation Mode uses the available viewport between its status area and bottom navigation and keeps the same 6/9 row contract.
- Existing application/data/workflow logic is preserved; this is a geometry rebase, not a data-model rewrite.

TEST ORDER
1. Confirm browser title/header says V10.4.0.
2. Live Operations at 100%: verify left/middle/right bottoms are identical.
3. Verify six middle sections are equal height.
4. Verify nine right sections are equal height and Overall Tool Progress ends at the common bottom.
5. Test 80% and 67% zoom.
6. Test Presentation Mode: full card must fit above bottom presentation navigation without clipping/scrolling.
7. Spot-check Tools, Shipping, Cycle Time, Status and Archive pages for regressions.
