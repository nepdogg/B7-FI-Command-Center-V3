B7 FI COMMAND CENTER V11.17.78 — MULTI-USER SYNC / PRIORITY TEST

BASE: V11.17.77 existing full Command Center. All Centers and assets retained.

CHANGES:
- Background Microsoft List polling shortened from 60 seconds to 10 seconds while connected, idle, and not editing. This is near-real-time polling, not push notifications.
- Weekday and weekend manual lead priority ranks now also saved into each affected tool's shared Tool Data record.
- On shared data refresh, the lead priority lists are reconstructed from saved per-tool ranks when present.
- Priority field included in server read-back verification.

IMPORTANT LIMITATIONS:
- Microsoft List behavior and conflicts were NOT tested against your workplace tenant.
- Existing priorities saved only in local browser data will not appear on other laptops until you save priorities once from the new version.
- Only the tool records are synchronized. Other app-wide state (activity, meetings, preferences, some status data) is not guaranteed shared.
- Simultaneous edits to the same tool can still overwrite one another. Do not use this build for concurrent production editing without a backup and tenant-level testing.
- Live Operations direct-edit popup parity and the full list of previously reported issues are NOT certified fixed in this release.

TEST SAFELY:
1. Export both a Microsoft List backup and local JSON backup before testing.
2. Deploy identical build files on both laptops. Connect both to the same List.
3. Edit one ship date on laptop A, save, and wait up to ~20 seconds without editing on laptop B.
4. Edit weekday priorities on laptop A, save, verify List confirmation, and observe laptop B.
5. Refresh both browsers to check whether ranks persist.
6. Do not edit the same tool simultaneously. If sync fails, stop and preserve backups.
