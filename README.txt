B7 FI COMMAND CENTER V11.17.0 — EQUIPMENT TRACKING — TEST BUILD
October 13, 2026

IMPORTANT: THIS IS NOT A VERIFIED PRODUCTION RELEASE.

SOURCE: V11.16.0 full Command Center ZIP, not the incomplete V12 rebuild.
This package retains the V11 centers/pages, launcher, images, styles, and
Microsoft List integration code. The original V11 issues are NOT all fixed.

NEW
- Adds TWO full-width clickable badges to the existing 28-badge tool card:
  COMPUTER TRACKING and COMPONENT TRACKING (30 total).
- Computer types: SS (Subswath Server), GPU (GPU Servers), DBB (Global
  Storage Server), RTAT (RTAT Server), SCC (SCC Computer), DAS (DAS Server),
  Host (Host Server), Dart (Dart Server).
- Component types: FWA (Filter Wheel Assembly), LCA (Lamp Cooling Assembly).
- Admin Center: Manage Component Types; add custom types as list grows.
- Each badge opens a history editor with type, unit/serial number, action,
  date, source tool UTID, destination tool UTID and notes.
- Each badge shows event count, distinct identified units and swap count.
  A repeated serial/type counts as one distinct unit on that tool. An entry
  without a serial/ID cannot be counted as a distinct unit.
- All records are stored on the tool in equipmentTracking.computers and
  equipmentTracking.components; catalog is stored in config.componentTypes.
- Tool records survive the existing normalization and JSON export/import.

BEFORE TESTING
1. Keep your current OneDrive production folder and spreadsheet unchanged.
2. Extract this ZIP to a SEPARATE local test folder.
3. Do not reset or delete the Microsoft List, do not run bulk imports.
4. Start using START-COMMAND-CENTER.bat from the test folder.
5. Check tool counts BEFORE editing; V11.16.0 had unresolved inflated tool
   counts and storage-quota/save problems.
6. Use a temporary test tool; click COMPUTER TRACKING, add an entry, save,
   refresh, and reopen. Repeat with COMPONENT TRACKING.
7. In Administration, add one sample component type, save, refresh, verify.
8. Export a JSON backup after a successful local test.
9. Do not rely on this build for tomorrow's production tracking until saves
   persist after reload and the correct tools are shown.

NOT VERIFIED / KNOWN RISKS
- Corporate Microsoft List sync, cross-laptop writes, and permissions.
- The legacy saveState writes the entire application state to browser storage;
  if the browser quota is exceeded, new equipment changes will NOT save.
- Incorrect A- activity-record tool counts may still occur in V11.
- Sticky header, responsive zoom, presentation layout, and other V11 bugs
  remain unresolved; this release does not claim to fix them.
- Browser interaction tests were blocked by the execution environment.
- Transfer entries store both UTIDs for reference; they do not automatically
  create/update a second tool's equipment history.

VALIDATION COMPLETED
- JavaScript syntax checks for app.js and equipment-tracking.js.
- ZIP integrity and file presence checked.

One README file only. Keep this test version separate from production.
