B7 FI COMMAND CENTER V11.17.22 — BADGE EDITING / CARD CONSISTENCY TEST
=======================================================================
Based on V11.17.21. Preserve existing data and export backup before test.

DATA FIXES
- Clicking most standard badges now opens a dedicated single-badge editor
  instead of opening the entire 37-task Lead/Admin checklist.
- Linked badge changes update the authoritative Lead/Admin task before
  synchronization; unchanged task fields cannot overwrite the new badge.
- Full checklist editor now applies only user-edited badge/task dropdowns.
- System Wafers retains its specialized additional-wafer editor.
- Computer/Component Tracking retain their equipment event/history editors.
- Read-only automatic badges (NC, Lamp, FI200 System Power) remain workflow driven.

LAYOUT
- Remove header column gaps; reduce title font size to fit text.
- Enforce full-width tracking badges with a shared grid layout.
- No navigation or tool-card data-model changes.

TEST
1. Export your local backup. Keep existing version intact.
2. Change Request Options, save, refresh. Confirm color/state persists.
3. Change Ironman, save, refresh. Confirm color/state persists.
4. Change System Wafers extra counts, save, refresh.
5. Save Computer and Component event histories and refresh.
6. Check same tool on Live Operations, Tools, and Presentation Mode.
7. In Multi-User Mode, confirm LIST CONNECTED and LIST SAVE VERIFIED,
   then refresh on a second device. If LIST DISCONNECTED, do not assume
   the data was uploaded. Never delete or reset the List for this test.

TEST BUILD: Syntax/ZIP verification is not a real Microsoft List connection test.
