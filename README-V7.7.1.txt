B7 FI COMMAND CENTER V7.7.1 — QUARTER TRANSITION UI RECOVERY
Build: 2026-09-30

PURPOSE
Stability build for the real CY26Q3 -> CY26Q4 transition test on 2026-10-01.
Keep V7.6.58/V7.7.1 unchanged as fallback copies.

KEY UPDATES
- Restores one sticky Command Center shell through the page-navigation bar.
- Footer remains in normal document flow and cannot be covered by page content.
- Browser zoom uses responsive viewport geometry instead of a capped miniature workspace.
- Live Operations restores two equal-proportion/equal-height carousels with a minimal gutter.
- Quarter Presentation FINAL DAY / QUARTER ENDED KPI text is constrained to one line and retains its progress strip.
- Presentation quarter navigation uses a direct quarter-switch handler; Q3 <-> Q4 remains in Presentation Mode.
- Three status bars rotate through a shared Command Center Brain message pool every 8 seconds and avoid simultaneous duplicate messages when alternatives exist.
- Final-day unshipped tools show a full-width QUARTER CLOSE — MUST SHIP TODAY banner in the same location that becomes QUARTER CARRYOVER — SHIP ASAP after the quarter changes.
- Carryover banner is directly below Driver and above Reduced/Normal Process; it does not consume one of the 28 operational badges.
- Cycle Time remains frozen at shipment and displays elapsed/target days plus percentage.
- Existing quarter-close/carryover/archive logic from V7.7.1 is retained.

OCTOBER 1 TEST
1. Start V7.7.1 from a new empty folder.
2. Verify CY26Q4 becomes active automatically.
3. Verify unfinished CY26Q3 tools remain operational and gain the full-width CY26Q3 CARRYOVER — SHIP ASAP banner.
4. Verify CY26Q3 Summary reports QUARTER ENDED and preserves the close result.
5. Verify the Q3 close snapshot is created after quarter end and remains immutable.
6. Verify Q3 and Q4 Presentation Summary links work both directions without leaving Presentation Mode.
7. Verify all three status bars rotate to different live messages every 8 seconds.
8. Verify Live Operations carousels remain equal height/proportion with a minimal center gap.
9. Test browser zoom at 100%, 90%, 80%, 75%, 67%, 110%, and 125%.
10. Verify header through page navigation remains sticky and footer stays below page content.
11. Verify Multi-User sign-in, List connection, latest sync, save/write, and remote refresh in the real work environment.

IMPORTANT
Do not use Master Reset or Clear Microsoft List against production data.
Real KLA/Microsoft authentication and Microsoft List synchronization must be verified in the work environment.
