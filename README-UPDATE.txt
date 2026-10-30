B7 FI Command Center V11.17.92 - CARD LAYOUT REPAIR TEST
Source: V11.17.91. No tool data, Microsoft Lists schema, or shipping logic changed.
Changes:
- Removed obsolete 85, 86 and 89 card-specific stylesheet references from index.html.
- Introduced one last-loaded card stylesheet for equal three-column geometry, border removal, uniform badge rows, FI date separation and tool type grouping.
- Added a lightweight post-render badge row-height equalizer; runs on app re-render and browser resize.
- Updated visible version to 11.17.92.
NOT VERIFIED: Browser rendering at various zoom settings; Microsoft Lists; Presentation Mode height; all workflows.
TEST: Back up V11.17.91, deploy the complete ZIP contents, confirm V11.17.92 header, refresh, test 100/67/50% zoom. Do not clear local browser storage or reset shared data.
