B7 FI COMMAND CENTER — V11.17.13 RESPONSIVE LAYOUT REPAIR (TEST ONLY)

BASE: V11.17.12 package; existing application logic, assets and Microsoft List integration retained.

ROOT CAUSE FIXES:
- Consolidated 21 historical stylesheet loads into one ordered stylesheet with final authoritative layout rules.
- Fixed Tools Center: each tool FAMILY spans the page; the CARDS within it form 3/2/1 columns based on viewport. Previous patch mistakenly made each family 1/3 of the page.
- Removed page navigation divider borders and forced intrinsic button widths with consistent padding.
- Navigation groups scroll independently rather than clip text.
- Fixed computer/component badge rows to full width in compact and full tool cards.
- Standardized progress track height at 16px.
- Maintained all existing application JavaScript and local data storage keys.

TEST: Back up local production data first. Unzip to a NEW directory; do not overwrite your production folder. Check laptop and large monitor at 67, 80, 100, 125 percent browser zoom; Tools Center, Live Operations, Presentation Mode and navigation.

LIMITATIONS: Microsoft List connectivity and bogus A-... records have not been repaired or validated in this layout-only build. DO NOT use shared production List data or perform destructive reset/cleanup. Browser and Microsoft corporate sign-in testing are still required.
