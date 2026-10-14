B7 FI COMMAND CENTER V11.17.7 — DATA SAFETY / PERFORMANCE CANDIDATE

STATUS: TEST ONLY. NOT CERTIFIED FOR PRODUCTION MULTI-USER USE.

Confirmed source defect: every shared activity update previously created a permanent A-<timestamp> record in the SAME Microsoft List as tools. Those are activity records, not physical tools. This candidate stops writing new activity rows; it does not delete any existing rows.

Changes:
- Stops unbounded activity-row creation from save/activity events.
- Full-list sync interval changed from 2 seconds to 15 seconds; presence interval from 5 to 12 seconds.
- Quarantines A-/P- and typed activity/presence records from the physical-tool collection.
- Validates tool identifiers before shared writes.
- Refuses to delete duplicate List rows automatically during tool updates.
- Adds a defensive Tool Card renderer to skip a malformed tool rather than blank Live Operations; logs errors to F12 Console.
- Removes an accidental duplicate UTID row from the Universal Tool Card.
- Preserves all existing pages and assets. Does NOT delete Microsoft List records or clear browser data.
- Launcher prints its served folder and refuses to open if port 5500 is already used by another server.

IMPORTANT LIMITATIONS:
- Microsoft Graph authentication, two-user synchronization, saves, and browser zoom were NOT verified in a live corporate environment.
- Existing 200+ A- rows remain in SharePoint and should be exported/backed up before selective cleanup.
- Local and localhost browser storage are separate. Keep your working Local Mode backup.
- Do not overwrite your working application folder. Extract this ZIP into a separate test folder.
- No claim is made that all remaining layout and sync issues are fixed.

TESTING:
1. Back up the Microsoft List and export Local Mode data first.
2. Launch from a separate folder and check Live Operations, Priority Center, Tool Edit.
3. Check that A- entries do not appear as tools. Do not delete List rows.
4. On a TEST List only, edit one tool and confirm the Tool Data row updates without new A- activity rows.
5. Check Console for Tool Card errors. Check performance at 100% and 67% zoom.
6. Only after successful tests on two laptops should production use be considered.
