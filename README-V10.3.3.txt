B7 FI COMMAND CENTER — V10.3.3
GEOMETRY + QUARTER NAVIGATION CORRECTION LOCK

Built directly from the user's V10.3.1 test source and corrected after V10.3.2 did not visibly identify itself as a new build.

VISIBLE BUILD IDENTIFICATION
- Header and browser title now display V10.3.3.
- JavaScript VERSION/BUILD are V10.3.3.
- CSS and JS cache-busting query strings are V10.3.3 so GitHub Pages/browser cache cannot silently reuse V10.3.1 assets.

LIVE OPERATIONS
- Tool intelligence/status bar occupies its own row above the Universal Tool Card columns and cannot cover their top edges.
- All three columns stretch from the same top line to the same bottom line.
- Middle column is six exactly equal-height sections.
- Right column is nine exactly equal-height sections and fills the available height through Overall Tool Progress.
- No Shipment Progress duplicate was restored.

HEADER
- Left and right header regions widened.
- Center KLA/connection region made the same full height as the outside header regions.

PAGE NAVIGATION
- Quarter Summary buttons are generated dynamically for lifecycle/current quarters.
- CY26Q4 SUMMARY appears when CY26Q4 is active/available while prior-quarter summaries remain accessible.
- Navigation remains one line and buttons flex to available width.

PRESENTATION MODE
- Uses the same six-section middle and nine-section right geometry contract.

TEST ORDER
1. Confirm browser tab/header say V10.3.3. If they do not, the deployment is still serving an older file.
2. Live Operations at 100% zoom.
3. Verify Tool Status bar does not overlap columns.
4. Verify six middle sections are equal height.
5. Verify nine right sections fill the right column to its bottom.
6. Verify CY26Q4 SUMMARY appears.
7. Test 80% and 67% zoom.
8. Test Presentation Mode.

PACKAGE NOTE
This is the only README/update TXT file in the package.
