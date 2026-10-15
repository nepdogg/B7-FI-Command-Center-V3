B7 FI COMMAND CENTER V11.17.21 — BADGE SAVE / SHARED LIST TEST
================================================================
Based on the user-uploaded V11.17.20. TEST BUILD — NOT PRODUCTION CERTIFIED.

Changes:
1. Badge editor tracks dropdowns explicitly changed by the user, so stale
   Lead/Admin checklist selectors do not silently override them.
2. Direct badge and additional wafer dialogs stay open on failed local save.
3. Local saves read back from browser storage before reporting success;
   audit history capped at 150 entries to reduce storage growth.
4. In connected shared mode, saving displays LOCAL SAVE / SYNC PENDING,
   then separately displays MICROSOFT LIST VERIFIED after Graph read-back.
5. Shared sync read-back checks badge, checklist, wafer, computer and component
   data, not just whether the tool row exists. Errors show a blocking alert.
6. Auto-refresh does not run while a List write is pending.
7. Header spacing reduced and text scaled; tracking badges forced full width.
8. Existing navigation and tool-card geometry otherwise preserved.

TEST AT WORK:
A. BACK UP all existing local data and export List backup BEFORE testing.
B. Test on a disposable test tool first, not a live production tool.
C. In Local Mode, change Ironman and another badge, save, refresh, verify.
D. Change System Wafers counters, Computer Tracking, Component Tracking;
   refresh and verify. Check Live Operations, Tools, Presentation views.
E. In Multi-User Mode, confirm LIST CONNECTED. Change a test badge.
   Wait for explicit MICROSOFT LIST SAVE VERIFIED. Refresh and verify.
F. Open a second laptop, connect to the same List, and verify the value.
G. Disconnect network and try another edit. Confirm the UI does NOT claim
   that the Microsoft List has saved it.
H. Test at 100% and 125% zoom and check the header/title.

WARNING: Microsoft authentication, Graph permissions, remote List schema,
network, and actual two-laptop sync CANNOT be verified offline. Do not use
this release as the sole source of real production data until those tests pass.
No list rows are deleted or reset by this update.
