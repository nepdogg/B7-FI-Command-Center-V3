B7 FI COMMAND CENTER — V10.5.1
SINGLE OWNER GEOMETRY FIX

This build removes the circular Live Operations height calculation that caused the
middle/right columns to keep their old geometry even after prior updates.

Normal Live Operations:
- Left column is the intrinsic height reference.
- Middle column has exactly 6 equal rows and stretches to the left-column height.
- Right column has exactly 9 equal rows and stretches to the same height.
- No scripted pixel height is imposed on the card.

Presentation Mode:
- Card fills the viewport between the priority bar and presentation navigation.
- Left badges are densely distributed with no artificial blank rows.
- Middle remains 6 rows and right remains 9 rows.
- All three columns share the same top/bottom boundaries.

Navigation:
- Page navigation remains one line and clips/shrinks controls rather than overlapping.

Test at 100% browser zoom first, then 80% and 67%.
