B7 FI COMMAND CENTER — V7.6.55 FINAL QUARTER STABILITY LOCK
Build date: 2026-09-29

PURPOSE
This build is a stability/restoration build for final-day CY26Q3 testing. It is based directly on V7.6.54 and preserves the existing quarter lifecycle/data logic while correcting the recent layout regressions.

V7.6.55 CHANGES
- Restores normal browser-zoom workspace behavior so zooming out gives the Command Center more usable space instead of leaving a miniature dashboard at the top.
- Live Operations: System Priorities/Status carousel and Universal Tool Card carousel are equal-height workspace peers.
- Live Operations Universal Tool Card fills the available right carousel instead of sitting as a compressed card at the top.
- One Universal Tool Card geometry is enforced in normal Live Operations and Presentation Mode: 29% identity/badges, 36% system status, 35% progress.
- Presentation Mode no longer gets a different 3-column badge arrangement. The 28 operational badges remain in the same 2 x 14 matrix and same locations as the normal Universal Tool Card.
- All three UTC columns stretch to the same full height.
- Middle UTC column distributes the six existing sections through the available height without changing their order.
- Right UTC column distributes all nine progress/workflow sections through the available height.
- Restores substantial 14px normal / 16px Presentation progress bars and prevents the progress tracks from being clipped.
- Live Operations carousel controls remain symmetrical and reserve both left/right arrows for both carousels.
- Presentation Tool view receives a protected viewport inset so the complete outer frame and bottom navigation remain visible.
- Presentation Quarter Summary receives the same protected viewport inset and complete outer border.
- Quarter Summary Presentation navigation is forced into the top interactive layer so previous/current quarter summary buttons remain clickable.
- Presentation Quarter Summary tool photos use the same semantic layout as the normal Quarter Summary: fixed name zone, one-photo-width gap, left-to-right photos, consistent photo spacing.
- Shipped red X is centered on each individual photo and covers the full photo footprint without blocking tool clicks.
- Footer remains in normal document flow (not sticky/overlaying page content).
- Tool Edit remains fully page-scrollable.
- Existing CY26Q3 final-day, CY26Q4 pre-start, automatic quarter-close/archive, Search Center, Archive Center, status brain, and multi-user logic are preserved.

FINAL-DAY TEST CHECKLIST — 09/30/2026
1. Open CY26Q3 Summary and verify FINAL DAY / DAY 92 OF 92 / QUARTER ENDS TODAY behavior.
2. Verify current tool totals and shipped/remaining counts.
3. Open Live Operations at normal zoom and zoomed-out browser levels. Both carousel frames should remain equal height and the UTC should fill the right frame.
4. Verify both carousel control groups show BOTH arrows.
5. Enter Tool Presentation Mode. Compare badge locations directly with the same tool in Live Operations; they should match.
6. Enter Quarter Summary Presentation Mode. Verify full cyan border, photo spacing, centered full-size shipped X overlays, and clickable CY26Q3/CY26Q4 summary navigation.
7. Verify Tool Edit scrolls to every field and footer does not cover content.

FIRST-DAY TEST CHECKLIST — 10/01/2026
1. Open Command Center after the date changes to CY26Q4.
2. Verify CY26Q4 becomes the active quarter and begins DAY 1 OF 92.
3. Verify the CY26Q3 Quarter Close snapshot/archive is created automatically by the quarter lifecycle logic.
4. Verify CY26Q3 remains historically available through Archive Center / Quarter Archives.
5. If CY26Q3 carryover tools remain, verify they remain operationally visible until archived while the frozen quarter-close summary remains unchanged.
6. Verify CY26Q3 and CY26Q4 Quarter Summary Presentation links can switch between the available summaries.

IMPORTANT
The automatic quarter archive is a data snapshot, not a screenshot. Do not manually archive CY26Q3 before the 10/01 lifecycle test if the goal is to observe the automatic transition.
