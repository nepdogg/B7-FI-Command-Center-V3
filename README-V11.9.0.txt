B7 FI COMMAND CENTER V11.9.0 - WORKSPACE GEOMETRY RECOVERY

BASE: V11.8.0. Existing data format and Microsoft List code retained.

CHANGES
- Fix Update Command Center collapsed editing pane by explicitly removing the old daily-card two-column grid for the new workspace.
- Make the active editing form fill the available right-hand workspace width.
- Keep all tool forms mounted so the existing multi-tool save collector can still access them.
- Enforce two-column Tools page cards at desktop widths, one column on narrower viewports.
- Preserve section picker, per-tool section navigation and existing tool fields.

TEST FIRST (USE TEST DATA / BACK UP PRODUCTION DATA)
1. Launch locally with START-COMMAND-CENTER.bat. Confirm the header displays V11.9.0.
2. Open Update Command Center. Confirm a full-width form appears to the right of the menu.
3. Switch Tool UTID and sections. Confirm each section fills the right pane.
4. Test edits to two test tools, Save Updates, and reopen both.
5. Test Tools page and browser zoom at 80%, 100%, 125%.

NOT VERIFIED / OPEN
This package has not passed interactive browser regression testing. Multi-user two-laptop connectivity, sticky navigation, presentation geometry, fixed live tool card geometry, historical archive snapshots and all zoom levels remain open until tested. Do not use for production writes before testing.
