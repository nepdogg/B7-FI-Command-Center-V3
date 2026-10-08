B7 FI COMMAND CENTER — V11.11.0 STRUCTURAL REPAIR CANDIDATE

SOURCE: user-provided V11.10.0 archive. Existing app JavaScript, Microsoft List
integration, and asset files preserved unchanged.

CHANGED:
- Header: reduced gaps between the three major panels; user badge cells stretch
  vertically to use their grid rows.
- Normal page navigation: explicit full button height and visible bottom border.
- Tool presentation: single outer viewport border encloses card AND bottom nav;
  removed second outer border on the card.
- Quarter summary presentation: removed unused bottom padding and sized the
  summary presentation to the available viewport.

LIMITATIONS: This is a targeted structural repair candidate, NOT a verified
complete fix for all previously reported issues. Multi-user sync, archive
snapshots, all browser zoom levels, and all page navigation actions have NOT
been validated in a browser against your Microsoft List. The pre-existing CSS
contains many conflicting !important overrides; deeper refactoring remains.

TEST:
1. Back up production data and the prior ZIP before replacing anything.
2. Run START-COMMAND-CENTER.bat from this extracted folder.
3. Test header and page navigation at 100%, 75%, 125% browser zoom.
4. Enter Tool Presentation and Quarter Summary Presentation. Check one outer
   border, navigation placement, tool switching and quarter navigation.
5. Test all pages and editing before using the build for live production.
6. Do not clear or reset Microsoft List production data for UI testing.
