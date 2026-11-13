B7 FI COMMAND CENTER V12.0.49 — RAIDERS BADGE REPAIR TEST

- Replaces three conflicting recent badge override stylesheet links with one scoped CSS file.
- Adds a runtime geometry guard to style actual rendered badge buttons after card updates.
- Operational badges: 36px tall, 7px row/column gaps, black background, silver border.
- Full-width wafers/computer/component badges retained.
- Badge region scrolls if the fixed-height card cannot display all badges.
- Navigation and footer buttons use black/silver colors.
- Existing application JS/data and click handlers unchanged.

TEST: Check Live Operations, Tools and Presentation Mode; verify click-to-edit, scroll and sync.
This is a test build; no populated-browser visual verification has been completed.
