B7 FI COMMAND CENTER V11.17.43 — RESPONSIVE + VISUAL EDITOR TEST

Based on V11.17.42; all original application and Microsoft List scripts preserved.

CHANGES IN THIS BUILD
- New final-loaded responsive CSS contract removes double-offset body-shell padding and fixed top spacing.
- Shared badge renderer from V11.17.42 retained; 12 equal rows, 48px each in standard cards.
- Normal Live Operations tool card left column flows with content instead of fixed height.
- Tool Edit: visual tool identity banner, one-tool dropdown, Quick Update and Full Edit category tabs; original fields and save/cancel remain.
- Version updated to V11.17.43.

LIMITATIONS / NOT YET COMPLETE
- Browser appearance could not be validated automatically in this environment.
- Presentation Mode retains its own fit-to-screen geometry and may still need work.
- Brain rule engine, full shipping/priority report builders, new tool master-data editor, multi-user coworker sign-in, historical archive corrections are NOT implemented by this patch.
- Do not use production reset/import or change real Microsoft List data during test.

TEST PROCEDURE
1. Back up existing files and data. Extract to a new folder; test Local Mode with TEST records.
2. At browser zoom 67, 80, 100, 125%, check header position, Tool Card clipping, and badge row heights.
3. Open the same UTID in Live Operations and Tools Center; compare badge colors.
4. Open Tool Edit; test one-tool dropdown, Full Edit tabs, Quick Update and Save with TEST records only.
5. Do not deploy to GitHub Pages production until these checks pass.
