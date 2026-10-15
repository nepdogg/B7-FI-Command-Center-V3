B7 FI COMMAND CENTER V11.17.20 — HEADER / USER BADGES TEST
===============================================================
Based on V11.17.19. No changes to navigation, tool cards, stored data, or
Microsoft List synchronization logic.

HEADER
- Increase middle header width to approximately 39% of the row.
- Reduce gap between left, middle, and right header panels to 3px.
- Display two user badges vertically on each side of the KLA logo:
  2 LEFT + 2 RIGHT = 4 visible badges.
- Enlarge KLA logo while retaining connection status below.
- Continue tracking up to 8 active users in the underlying presence system;
  users 5-8 are not individually shown in the header. Their names appear
  in the middle panel tooltip when more than four users are active.

TEST
1. Extract to a new folder; do not overwrite a working version.
2. Compare header at 100% and 125% browser zoom.
3. Check the larger KLA logo and two badges on each side.
4. Confirm Live Operations and other page navigation have not changed.
5. Test local and multi-user header states separately.

This is a UI test build, NOT confirmation of Microsoft List readiness.
Keep daily backups of local production data.
