B7 FI COMMAND CENTER — V11.17.67 RECOVERY TEST
Based on V11.17.66 Brain Responsive Pilot. TEST ONLY — back up production data first.

CHANGES INCLUDED
- Weekend Priority volunteers: clicking Add/Remove now captures all existing unsaved volunteer name/hours/notes fields before rebuilding rows, preventing previous entries from being cleared.
- Visual recovery CSS: rounded individual section/badge styling, soft white outlines, removal of outer card-column boxes, smaller gaps and responsive padding.
- Screenshot mode: additional suppression of screenshot exit button and common app chrome, plus print stylesheet.
- Mystery reveal: celebration overlay fills viewport, with image sized to fit.
- Existing Brain status and three independently rotating status panels are retained from V11.17.66.

NOT VERIFIED / NOT CLAIMED FIXED
- Priority persistence after a Microsoft List refresh, shared-list conflict resolution, throttling and VPN multi-user behavior.
- Email export layout and Outlook integration.
- Full responsiveness across all monitor sizes at 100% zoom.
- All Administration, Shipping and Cycle Time controls.
- Complete screenshot-only page-body selection for every route.
- All historical regressions and functional paths.

TEST PROCEDURE
1. Back up production data and test with a disposable scenario first.
2. Launch START-COMMAND-CENTER.bat and open the application at 100% zoom.
3. Enter Saturday volunteer details, add a second volunteer, and confirm the first remains populated. Repeat for Sunday. Save and reload.
4. Verify independent rounded sections, badges and column outlines in Live Operations and Tool Edit.
5. Test screenshot mode (Esc exits) and full-screen mystery celebration.
6. Test priority saving, reload, and second-device Microsoft List sync; treat failures as unresolved.
7. Verify all controls before production use.

This build is an incremental recovery package, not a certified all-issues-resolved release.
