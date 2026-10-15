B7 FI COMMAND CENTER V11.17.23 — POD AND BADGE CONSISTENCY TEST

Based on V11.17.22, the version where the user confirmed badge updates save.

CHANGES
- Live Operations now builds its badges from the same canonical
  INDICATOR_SLOT_KEYS list as the Tools page. Previously it built badges
  from a derived evaluation list and sliced to 28; extra derived badges
  could push POD off the end. The slice is removed.
- Preserve all 27 ordinary badges (including POD) and three full-width
  rows: System Wafers, Computer Tracking, Component Tracking.
- Added layout protections for badge widths, labels and grid rows.
- Badge editor, storage, and Microsoft List synchronization code unchanged.

TEST
1. Back up existing data before testing; use a test tool.
2. Confirm POD appears on Tools, Live Operations and Presentation Mode.
3. Click POD, save a status change, refresh, and check it persists.
4. Repeat with another standard badge and all three tracking badges.
5. Compare badge order/colors across the three card views.
6. Test at 100% and laptop browser zoom settings.
7. Multi-user mode is NOT validated until LIST CONNECTED and remote save
   confirmation are independently observed at work.

Do not delete or reset existing List or browser records.
