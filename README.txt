B7 FI COMMAND CENTER — V11.17.15 LAYOUT REPAIR TEST

WHAT CHANGED
- Added one isolated CSS layout repair layer (css/layout-repair.css), loaded after legacy CSS.
- Navigation buttons size to text with internal padding. Navigation scrolls horizontally only if there is not enough width to fit all controls; labels are not deliberately truncated.
- Full three-column tool card uses stable column proportions and a 16px progress track.
- Identity photo is contained; wafer/computer/component badges occupy consistent full-width rows.
- Removes the forced 940px minimum tool-card width at narrow screen sizes, stacking columns instead.
- Tools Center uses 3 columns on wide screens, 2 on medium screens, 1 on narrow screens.

TESTING
1. BACK UP your local data and Microsoft List separately before testing.
2. Extract into a NEW folder. Do not overwrite your current working copy.
3. Open index.html in local mode. Check Tools Center and Live Operations at 67%, 80%, 100%, 125% zoom and on both monitors.
4. Check tool cards for Targa, Vanquish, Regera; verify the 30 badges and progress bars.
5. Check each page navigation bar; on small screens a horizontal scrollbar is intentional rather than cutting labels.
6. Check Presentation Mode, tool editing, save and reload on test records only.

LIMITATIONS
This is a targeted layout TEST, not a verified production-safe release. Microsoft List sign-in, sync, phantom records, and data migration are not fixed or validated by this package. Do not reset/delete production list records. Real multi-user access requires testing in the KLA environment.
