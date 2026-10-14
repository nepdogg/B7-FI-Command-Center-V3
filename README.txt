B7 FI COMMAND CENTER V11.17.4 — RESPONSIVE CARD + PRESENTATION TEST

Based on V11.17.3. Existing app, images, launchers and local data keys retained.

CHANGES
1. Tools Center: three compact identity-only cards per row at desktop widths, two at narrow tablet widths, one on small mobile widths.
2. Tools Center: priority uses the same markup and source/ranking as Live Operations.
3. Tools Center: adds Computer and Component Tracking badges to the compact card; retains the original 28 and wafer badge.
4. Status message: replaces unexplained solid square with a small status dot.
5. Page navigation: one responsive row with left page choices and right action controls, including Tool Type.
6. Presentation Mode: single viewport outer border containing full card and bottom navigation; remove duplicate inner border.
7. Cache-busted new CSS and JS for GitHub Pages.

TESTING
Unzip to a NEW folder. Keep all earlier builds and data backups intact.
Do not overwrite the operational OneDrive directory.
Run START-COMMAND-CENTER.bat or serve static files using an approved local web server.
Test Tools Center (3 per row at 100% on wide monitor), priority and both equipment badges.
Test Tool Type menu and page navigation at 67%, 80%, 100%, 125%.
Test Presentation Mode border, three aligned columns, no scroll and bottom nav at 100%.
Test badge save and reload on nonproduction sample data only.

KNOWN LIMITATIONS / SAFETY
Microsoft List sync has NOT been independently verified. List disconnected means no shared saves.
Previous data-count issues are not resolved by this layout update. Do not reset or delete the List.
The production save workflows must be verified on the user's actual work environment.
This is a TEST build, not a production-certified release.
