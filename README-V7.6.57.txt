B7 FI COMMAND CENTER V7.6.57 — QUARTER-END STABILITY
Build date: 2026-09-29

PURPOSE
Final stability build for September 30 / October 1 quarter transition testing.
Built from V7.6.54 source; V7.6.55 and V7.6.56 are not baselines.

ROOT FIXES
- Restored fixed top application shell from Header through Page Navigation.
- Removed the legacy 720px ceiling from all three Live Operations UTC columns.
- Live Operations UTC host, card, and all three columns now fill the carousel height.
- Live Operations Status and Tool carousel frames use the same viewport-driven height.
- Preserved 29% / 36% / 35% UTC column widths with equal full-height columns.
- Restored 14px UTC progress tracks and protected them from vertical cropping.
- Both Live Operations carousel controls reserve symmetrical left/center/right tracks.
- Footer remains in normal document flow; Presentation Mode remains beside Administration Center.
- Tool Edit remains page-scrollable.
- Presentation Quarter Summary navigation controls are explicitly allowed by the interaction shield.
- Presentation shipped-tool photos keep spacing and a centered full-photo red X.
- Quarter lifecycle/archive logic from V7.6.54 remains intact.

TOMORROW TEST ORDER
1. Hard refresh (Ctrl+F5) and confirm header says V7.6.57.
2. Test browser zoom at 100%, 80%, 67%, 50%, and your normal wallboard zoom.
   Header through Page Navigation must stay fixed; page content scrolls underneath.
3. Live Operations: compare both carousel outer heights.
4. Tool carousel: verify all three UTC columns reach the bottom of the carousel and progress bars are not cut off.
5. Verify both arrows exist for Status carousel and Tool carousel.
6. Enter Presentation Mode from footer; test tool presentation and Quarter Summary links.
7. On Sep 30 verify final-day quarter wording.
8. On Oct 1 verify Q4 activation, Q3 close snapshot/archive, and any Q3 carryover remains operational until archived.

IMPORTANT
Do not use V7.6.55 or V7.6.56 as the baseline for further geometry work.
