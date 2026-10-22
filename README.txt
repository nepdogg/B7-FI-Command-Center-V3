B7 FI COMMAND CENTER — V11.17.79 SYNC SAFETY / CACHE TEST

WHAT CHANGED
- Fixed the version text in the browser tab and application header.
- Changed all local JS and CSS references to use the new build cache key 111779.
- Added a Microsoft List pre-write conflict check: if the same tool changed since the last shared snapshot, reject the stale save rather than silently overwrite another laptop's changes.
- Blocked automatic synchronization from clearing a populated dashboard when the List contains tool rows but returns no valid tool data.

IMPORTANT LIMITATIONS
- The conflict check is not an atomic transaction: near-simultaneous writes can still race.
- Automatic sync is 10-second polling only when connected, not editing, and not saving.
- This is a targeted test build, NOT a comprehensive fix of all previously reported problems.
- Live Microsoft Graph connectivity and cross-laptop behavior have NOT been tested here.
- The dashboard is in local mode when the header reads LIST DISCONNECTED; reconnect before testing multi-user sync.

DEPLOY / TEST
1. Back up your existing GitHub repository files and Microsoft List data.
2. Extract the ZIP and copy the contents (not the ZIP) into your GitHub Desktop repository folder.
3. Commit and Push origin; wait for successful GitHub Pages deployment.
4. Reload website. Both browser title and blue header must read V11.17.79.
5. Confirm multi-user header reads connected before making a test edit.
6. On laptop A, edit a test tool; on laptop B, wait 10–30 seconds for it to appear.
7. Test weekday/weekend priority persistence on both machines.
8. If a SYNC CONFLICT appears, do not overwrite; retain local edit and reconcile first.

Do not use simultaneous edits to the same production tool as a test. Preserve a backup.
