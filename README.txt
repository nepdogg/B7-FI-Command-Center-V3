B7 FI COMMAND CENTER V13.0 — CLEAN REBUILD TEST
===============================================
This is a NEW implementation with one original CSS file and one original JavaScript file.
It is not a claim of full feature parity with the previous V12 application.

START: extract ZIP; run START-COMMAND-CENTER.bat on Windows or serve this directory using `python -m http.server 8000`, then visit http://localhost:8000.

SAFETY: V13 uses an isolated browser localStorage key, b7fi-v13-rebuild-local.
It does not alter the old V12 browser key or Microsoft List. Its initial records are DEMO records. Do not use for live production operations.

TO LOAD EXISTING DATA: open Administration > Data & Backups. Export an existing backup first. Choose a JSON file to import or click Copy Legacy Browser Test Data (only works on the same browser origin). Confirm imported UTIDs before editing. Always export a backup before changes.

FUNCTIONS IMPLEMENTED: tool card and compact uniform badges, tool create/edit/save/readback, local priority updates, weekend volunteer rows, shipping handoff dates, cycle dashboard, latest status, quarter summary, meetings, action items, references, search, archive, local backups/import, presentation navigation, and print stylesheet.

NOT IMPLEMENTED / NOT VERIFIED: Microsoft List sign-in and synchronization; shared multi-user conflict resolution; complete old badge state editing and all historic checklist workflows; all old morning-meeting behavior; original Brain rule engine; full quarter-end automation; mystery-box reveals; automatic emailed reports; screenshot image export (Print / Save as PDF is available instead); old administrative workflows; live production validation. Do not use V13 as a replacement for V12 until these are rebuilt and verified.

IMPORTANT: One CSS and one JS file simplify maintenance but do not by themselves provide feature parity. This test package deliberately avoids pretending unimplemented features are working.
