FI COMMAND CENTER V14.0.23 — SECTION FORMATTING / SIGNAL TOWER
Formatting update based on V14.0.22. No tool-data migration.

CHANGES
- Restores TWO operational badge columns.
- Every badge uses label LEFT and value RIGHT, with one 64px height and equal 6px gaps. Black backgrounds remain.
- System Wafers and computer/component badges use the same cell size. Their detail lines stay within the value side.
- Middle and right sections distribute through the common card height so the three column bottoms align. Removes the early-ending sections/large empty column areas shown in the V14.0.22 screenshots.
- Separates the Priority/Alias row from the photo/tower row. The photo area can no longer consume the height allocated to the heading.
- Explicitly bounds tower, wrapper and image heights to the photo row. The full tower PNG uses object-fit:contain, including the bottom state label and icon.
- Tool photo also uses contain fitting. The photograph and tower share the same media-row height.
- Retains the dedicated Command Center Brain section and click-through.
- Header/footer styling is retained from V14.0.22; this release does not introduce another header/footer redesign.
- Runtime version and startup labels updated to V14.0.23.

VALIDATION
JavaScript functions are identical to V14.0.22 apart from version strings. JavaScript syntax and Python compilation passed. Focused regression checks for shared-field merges/conflicts, weekend metadata, Brain progress/forecasts and eight tower states passed. CSS structural checks and all local HTML/CSS asset references passed. Separate-row and contain-fit rules were checked, including fit calculations for all eight PNG tower assets. ZIP integrity checked.
These are source/logic checks. Rendered browser verification is still unavailable in this environment, and no KLA List connection was made. Full visible tower labels, text fit, shared work-laptop behavior and presentation must still be checked on your actual screens. This is not a claim that an exact match to an unavailable last-good ZIP has been visually proven.

FULL PACKAGE
This ZIP includes assets and the icon. Keep your current folder as a backup, then extract the full ZIP into a new normal folder. Close the old server and run START-COMMAND-CENTER.bat. If the browser does not open, visit http://localhost:5500/ manually. Confirm V14.0.23 and refresh with Ctrl+F5.

GITHUB PAGES
Your screenshots show GitHub Pages. Update index.html, css/command-center.css and js/command-center.js together from this package. Keep the assets folder. After Pages finishes updating, press Ctrl+F5 and verify the tab/header both show V14.0.23. Do not mix HTML/CSS/JS from different versions.

CHECK FIRST
1. On Live Operations, confirm two badge columns and left/right text alignment.
2. Check the Signal Tower's entire bottom label for Packing, Shipped and Powered Off states.
3. Scroll to the bottom: confirm all three column edges align and Brain is visible.
4. Check Tool Card/Quarter Summary presentation separately.
This formatting release does not add the incompletely specified options tracker or new badge-completion workflows from the other chat.
