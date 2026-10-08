B7 FI COMMAND CENTER V11.8.0 — UPDATE WORKSPACE TEST

CHANGED: Update Command Center now uses a left-side tool selector and per-tool section navigation (same design principle as Individual Tool Edit). All tool forms stay mounted when switching tools/sections, so SAVE UPDATES continues to collect every form. Existing shared List and local data formats are unchanged.

NOT VERIFIED: browser visual regression tests, Microsoft List two-user synchronization, sticky shell, Presentation Mode, or all legacy geometry issues. This is a targeted test candidate, not a claim that all remaining issues are fixed.

TEST: Open Update Command Center, switch UTIDs and sections, change two test tools, SAVE UPDATES, reopen each tool and verify values. Back up production data first. Do not use Master Reset/Clear List.

PRIOR BASELINE NOTES:
B7 FI COMMAND CENTER V11.7.0 — COMPLETION RECOVERY

BASELINE
- Built from V11.5.0 rather than the rejected V11.6.0 regression build.

MULTI-USER
- Step 2 now caches and reconnects by the permanent Microsoft List ID after a successful discovery.
- Diagnostics now exposes SET LIST ID and COPY LIST ID. This provides a reliable fallback for a coworker whose account can open/edit the List in SharePoint but Graph list enumeration says the list is not found.
- Shared presence heartbeat added. Connected users are published every 5 seconds and shown in the KLA header on all connected laptops.
- Active presence expires after 20 seconds without a heartbeat.
- Shared activity records added so Command Center activity can show who updated the shared system.
- Automatic shared sync check reduced from 3 seconds to 2 seconds.

QUARTER ARCHIVE INTEGRITY
- If a Final Quarter Summary snapshot exists, the Quarter Summary now renders from the frozen snapshot instead of live/archived tool rows.
- Archived quarter keys are retained in Presentation navigation, so the previous-quarter Summary remains available after all of that quarter's tools are archived.

IMPORTANT SECOND-LAPTOP TEST
1. On the laptop that already connects: Administration > Multi-User Diagnostics > Step 1 > Step 2.
2. Click COPY LIST ID and copy the ID.
3. On the coworker's laptop: Step 1, click SET LIST ID, paste the ID, then Step 2.
4. Confirm LIST CONNECTED on both laptops.
5. Confirm both names become bright/active in both headers.
6. Save a harmless test-tool change on one laptop and confirm the other receives it within a few seconds.

SAFETY
- Do not use Clear Microsoft List or Master Reset against production data while validating multi-user.
