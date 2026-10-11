B7 FI COMMAND CENTER — V12.1.0 UNIVERSAL FRAMEWORK — TEST BUILD
============================================================
THIS IS NOT YET A PRODUCTION MULTI-USER RELEASE.

WHAT CHANGED
- Expanded global and per-center navigation; Operations, Tools, Update, Shipping,
  Priorities, Status, Cycle Time, Meeting, Action, Reference, Search, Archive,
  Quarter Summary, Administration.
- Restored functional local-only workflows for multi-tool daily updates, meeting
  notes/history, action items/escalations, reference links, tool-type filters,
  and tool countdown grids.
- Removed 1600px maximum content width and standardized layout rules for zoom.
- Improved presentation frame sizing and quarter summary presentation.
- Retained individual IndexedDB tool saves, badge/checklist editing, JSON backups,
  and activity-style record exclusion.
- One common header/navigation/status/tool-card framework, one stylesheet.

LIMITATIONS / NOT YET VERIFIED
- Microsoft List live synchronization is intentionally NOT connected. Data saved
  in one browser will NOT automatically appear on another laptop.
- Original V11 tool records are NOT automatically loaded. Import ONLY a trusted,
  verified JSON backup. Do NOT import an inflated 200+ record export blindly.
- Historical final quarter snapshots, advanced shipping handoffs, mystery-box
  reveal artwork, full FI checklists and other advanced V11 workflows are NOT
  yet feature-complete. Some legacy UI remains simplified.
- Presentation and responsive behavior require validation on your actual monitor.
- No corporate Microsoft List write operations are performed.

INSTALL AND TEST
1. Extract to a NEW folder. Keep V11 and your spreadsheet unchanged.
2. Start START-COMMAND-CENTER.bat or host the static files on an approved site.
3. Use + ADD TOOL to create a test tool (UTID TEST-001, Panamera, CY26Q4).
4. Save, refresh, edit badge, save checklist, refresh and verify persistence.
5. Test UPDATED COMMAND CENTER Save All with two local test tools.
6. Test zoom at 67%, 80%, 100%, 125% at your normal screen resolution.
7. Check header stickiness, navigation accessibility, and Tool Presentation.
8. Export a backup before importing any historical records.
9. Never reset or bulk-delete Microsoft List based on a local test result.

KNOWN GAP: This is a recovery test build, NOT a verified full V11 replacement.
