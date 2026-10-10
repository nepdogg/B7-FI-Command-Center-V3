B7 FI COMMAND CENTER V11.16.0 — DATA INTEGRITY RECOVERY CANDIDATE

IMPORTANT: This is a TEST CANDIDATE, not a production-certified build.
Back up the existing Command Center and export the Microsoft List before testing.
DO NOT run Master Reset, Clear Microsoft List, bulk archive, or bulk save.

PRIMARY DATA FIX
- Shared Microsoft List activity/presence records are now excluded from tool decoding.
- Rejects A-/P- activity-style IDs and malformed tool records.
- Tool write path rejects non-tool records.
- Removed automatic deletion of remote tool rows when a browser snapshot lacks them.
- Prevents auto-importing local test tools into an existing shared list on connection.
- Does not delete or clean existing incorrect Microsoft List records.

LAYOUT ADJUSTMENTS
- Shared header spacing and user badge vertical fill.
- Sticky shell and page-navigation spacing adjustments.
- Tools grid auto-fit for zoom-out/one-card pages.
- Update Command Center workspace width adjustments.
- Presentation outer-frame and navigation containment refinements.
- Version title and header set to V11.16.0.
- Includes new tool photos from V11.15.0.

TEST PLAN
1. Extract into a NEW folder. Do not overwrite your production folder.
2. Launch and confirm V11.16.0 in both header and browser tab.
3. Confirm the inflated 239/300 tool counts are no longer displayed. Compare actual tool IDs with Microsoft List.
4. DO NOT DELETE the A- activity rows: they are intentionally excluded from the tool UI.
5. Check header and page navigation at 100%, 75%, 125% zoom.
6. Test switching tool cards and both Presentation Modes.
7. Verify Update Command Center can switch sections WITHOUT SAVING to production.
8. Test second-laptop connection read-only before making a harmless controlled edit.

KNOWN LIMITATIONS
- No interactive verification against your corporate Microsoft List was possible.
- Headless layout checks passed at CSS viewport widths 1100, 1600 and 2200 px, and the tool Presentation card fits above its navigation. This is not equivalent to testing on a KLA laptop with real photos and Microsoft List data.
- Live sync and data edits must be confirmed on authorized work laptops.
- Automatic remote deletions are disabled for data safety. Use the Microsoft List directly for explicitly authorized removal after a backup.
- Historic quarter snapshots have not been migrated or recovered automatically.
