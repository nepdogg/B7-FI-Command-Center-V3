B7 FI COMMAND CENTER V11.17.76 — QUARTER CLASSIFICATION TEST

This is a targeted test build based on V11.17.75, NOT a certified fully repaired release.

Changes:
- Active Quarter Summary navigation no longer includes archived-only quarters. Archived summaries remain in Archive Center.
- Engineering and other non-FI statuses are counted in Waiting FI on quarter summaries (unless Packing/Shipped).
- Archived records with a recorded shippedAt date or explicit pre-archive Shipped status are counted as Shipped in historical summary calculations. Unknown shipment history is not fabricated.
- Retains V11.17.75 center pages, shared-list code, FI editor, graphs and V13-on-V11 CSS.

SAFETY: Export and retain local and Microsoft List backups before testing. Test in LOCAL MODE with copies of data first. Do not reset or publish production records for this test.

NOT VERIFIED: Browser rendering at zoom settings, actual Microsoft List authentication/sync, archive carousel, full badge change history, all pages and all reported issues. This package does NOT implement historical playback or the requested complete archive carousel. A shippedAt date alone should be checked against authoritative shipping records. Do not treat this as production-certified.

TEST: Open START-COMMAND-CENTER.bat, test quarter navigation and archived shipping counts against backups, and test at 80%, 100%, and 125% zoom. Check archived records against actual shipment data.
