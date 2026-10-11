B7 FI COMMAND CENTER V12.0.1 — NAVIGATION AND ADMIN RECOVERY TEST
=========================================================
IMPORTANT: THIS IS A CLEAN LOCAL RECOVERY FOUNDATION, NOT A PRODUCTION-READY REPLACEMENT.

WHAT CHANGED IN V12.0.1
- Administration now has ADD NEW TOOL and MANAGE EXISTING TOOLS actions.
- Restored center navigation for Cycle Time, Meeting, Action, Reference, Archive and their basic page routes.
- Page navigation is now contextual to the active center.
- Morning Meeting, Cycle Time and Update Command Center provide basic tool-based views.
- Some restored routes are explicitly labeled NOT YET MIGRATED rather than implying missing functions work.
- No sample/fake production tools are added.

WHAT IS NEW
- Completely new application shell and single shared stylesheet (no V11 cascading patches).
- Global header, status bars, navigation, footer and universal tool card components.
- Responsive CSS grid designed to avoid clipping on narrower screens and at browser zoom.
- Each physical tool is one IndexedDB record, not an entire state blob in localStorage.
- Add/Edit Tool, badge editor, FI/Lead checklist editor, local saving and reload.
- Local tool counts, shipping view, priorities, search, quarter summary and tool presentation.
- JSON backup export and previewed import with invalid A-/P-/activity records excluded.
- Python launcher prints useful messages and writes a persistent diagnostic log.

CRITICAL LIMITATIONS
- Microsoft List multi-user sync is NOT IMPLEMENTED in this foundation. It cannot be used for shared production updates.
- V11 complex meeting, archive, screenshot, packing handoff and administrative workflows are NOT migrated yet.
- V11 legacy browser storage is NEVER automatically loaded or modified.
- No fake sample production tools are inserted. Use ADD TOOL or import a trusted backup.
- This build has not been tested against corporate authentication, OneDrive network paths or live tool data.
- Imported records from V11 may have custom fields that V12 retains but does not yet display/edit.
- Use your verified spreadsheet as the authoritative source until production validation is complete.

SAFE TEST INSTRUCTIONS
1. Extract into a NEW folder, not the V11 production folder. Keep all existing backups.
2. Close any V11 server window on port 5500 before starting V12.
3. Double-click START-COMMAND-CENTER.bat. The server should show V12 and its folder path.
4. Use ADD TOOL to create a TEST-... tool. Save and refresh the browser. Confirm it persists.
5. Edit its badge and checklists. Refresh and verify both changes.
6. Export a JSON backup and save it in a safe location.
7. Import only a trusted JSON file and review the preview counts before confirming.
8. Test navigation and zoom at 67%, 80%, 100% and 125%.
9. DO NOT use V12 for real multi-user production data until Microsoft List integration is implemented and tested.

DIAGNOSTICS
- Visible server messages show version, source folder, ready state, startup failure, HTTP errors.
- Persistent server log: %LOCALAPPDATA%\B7-FI-Command-Center\logs\v12-diagnostics.log
- Browser errors appear in browser DevTools console. Server-side log endpoint is available at /__client_error.
- Local tool data is in browser IndexedDB for http://localhost:5500. Do not clear site data without exporting a backup.
- If an old server is using port 5500, V12 will NOT silently open the old version.

VERIFICATION STATUS
- Static JavaScript syntax: tested with node --check.
- Python launcher syntax: tested with py_compile.
- Browser interaction tests: results documented in delivery response.
- Live Microsoft List sync: NOT TESTED / NOT IMPLEMENTED.
- Corporate laptop/network launch: NOT TESTED.

BUILD PHILOSOPHY
V12 is an independent rewrite; it does not modify V11 and does not inherit V11 CSS overrides.
One component definition per repeated UI element. Further features should be migrated only after passing regression tests.
