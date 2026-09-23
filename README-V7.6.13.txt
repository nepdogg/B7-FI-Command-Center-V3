B7 FI COMMAND CENTER — V7.6.13

Changes from V7.6.12
- Restored sticky Command Center header/main navigation/status bars/page navigation on normal pages.
- Presence badges are fixed as a centered 2x2 grid.
- Universal Tool Card uses one master geometry on Tools and Live Operations.
- Live Operations card is no longer compressed/cropped by the old 606px carousel viewport.
- Tools page remains two cards per row on desktop.
- UTC outside padding and 3-column spacing normalized.
- Final Packing / Shipping progress row no longer has an unnecessary divider below it.
- Badge cells support two-line labels without changing the 2x14 matrix.
- Version/build labels normalized to V7.6.13.
- Added Command-Center.ico generated from the R900/Regera-Celestiq tool image.
- Added CREATE-COMMAND-CENTER-DESKTOP-SHORTCUT.bat. Run it once to create a desktop shortcut named "Command Center". The shortcut launches START-COMMAND-CENTER.bat and uses the R900 tool icon.

TEST
1. Extract the full ZIP to the normal Command Center folder.
2. Run START-COMMAND-CENTER.bat and keep the server window open.
3. Open http://localhost:5500/ at 100% browser zoom.
4. Verify Live Operations UTC matches Tools-page UTC geometry.
5. Verify CY26Q3 Tools shows two cards per row on a normal desktop display.
6. Scroll several pages and confirm the header/navigation/page bar remain sticky.
7. Verify footer user badges are 2x2.
8. Run CREATE-COMMAND-CENTER-DESKTOP-SHORTCUT.bat once, then launch from the new desktop "Command Center" shortcut.
9. Smoke-test Multi-User sign-in and automatic sync.
