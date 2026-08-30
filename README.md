# B7 FI Command Center V5.6.4 — Deployment + Navigation Verification

This build is packaged FLAT: `index.html`, `css/`, `js/`, and `assets/` are at the ZIP root so they can be copied directly over the GitHub Pages repository files.

## Deployment verification
After deploying and refreshing, both the browser tab and footer must show **V5.6.4**. If either still shows V5.6.1/V5.6.3, GitHub Pages is serving old files and the new root files were not deployed.

## Included fixes
- Operations remains the consolidated home for Live Operations, quarter tool views, All Active Tools, Daily Update, and Quarter Archive.
- Operations page-navigation row is hard-locked visible and separate from the Live Operations carousel action controls.
- Presentation Mode remains a top-level navigation action.
- Existing V5.6 automation-engine and universal-card code preserved.
- Cache-busting asset query strings and no-cache metadata added for verification.
