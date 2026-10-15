B7 FI COMMAND CENTER V11.17.14 — RESPONSIVE LAYOUT TEST

This build is based on V11.17.13. It targets CSS layout only and does not modify Microsoft List synchronization, stored tool data, import/export or deletion behavior.

CHANGES
- Tools Center: tool-family tiles now form the responsive 3/2/1 column grid. This fixes the prior error of applying three columns INSIDE each family, which leaves blank space when each family has only one tool.
- Navigation: one horizontally scrollable bar instead of two independently clipped scroll areas. Buttons size to content, with consistent padding and no divider bars.
- Full-size Live Operations tool cards: consistent column proportions, full-width System Wafers/Computer Tracking/Component Tracking badges and 16px progress bars.
- Laptop-width viewports: full tool card retains readable geometry and can scroll horizontally instead of crushing the three columns.

TEST
1. Extract to a NEW folder and launch index.html for LOCAL testing. Do not overwrite your production folder.
2. At 67%, 80%, 100% and 125% browser zoom check Tools Center: three family cards per row on wide screens, two on medium, one on narrow.
3. Check navigation labels at each zoom; if bar is wider than the screen, scroll the bar horizontally.
4. Check Live Operations and Presentation Mode for geometry and badges.
5. If deploying to GitHub Pages, upload the entire extracted package and refresh. The header should read V11.17.14.

KNOWN LIMITATIONS
Microsoft List disconnection and 200+ bogus List rows are NOT fixed in this build. Do not reset/delete shared data or use shared migration for this test. Interactive rendering and Microsoft authentication require testing in your environment.
