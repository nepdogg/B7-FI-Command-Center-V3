B7 FI COMMAND CENTER — V7.6.51
UI REGRESSION LOCK + ARCHIVE CENTER + SCREENSHOT MODE RESTORATION

BASELINE
- Built from V7.6.50, which was built from the uploaded V7.6.48 Root Cause Consolidation source.

CHANGES
1. Added ARCHIVE CENTER as a permanent top-level Center.
   - Quarter Archives
   - Tool Archives
   - Archive Search
2. Removed Presentation Mode from the permanent Center navigation.
   - Presentation Mode is now a page action on Live Operations / Quarter Summary.
3. Removed the old Tool Archive button from Operations navigation.
4. Screenshot Mode regression lock:
   - Keeps the established page/header/status/sub-navigation/content/footer presentation.
   - Hides interaction-only action controls.
   - Keeps Mystery Boxes and read-only summary/status content visible.
   - Adds a color-matched capture border.
   - Does not globally resize/redesign established page components.
5. Preserves automatic quarter-close archive behavior from V7.6.50.
6. Preserves simple Search Center layout and structured search logic from V7.6.50.
7. Existing page design is treated as locked; new functionality should not redesign established pages.

QUARTER-END TEST
- Final day: Quarter Summary should show FINAL DAY / DAY 92 OF 92 / 100%.
- First day of next quarter: previous quarter freezes at 100% and an automatic Quarter Close snapshot should appear in ARCHIVE CENTER > QUARTER ARCHIVES.
- Do not manually create the quarter archive for this test.
- Reopen/refresh to confirm no duplicate quarter snapshot is created.

SCREENSHOT MODE TEST
- Test Screenshot on Operations, Priority, Status, Action, Reference, Search, Archive, Tool Edit and Administration pages.
- Confirm established page formatting remains intact.
- Confirm action/edit controls disappear while operational content remains visible.
- Confirm Mystery Boxes remain visible where applicable.
- Exit with X and confirm the exact normal page returns.
