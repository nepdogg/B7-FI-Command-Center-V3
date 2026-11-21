FI COMMAND CENTER V14.0.24 — HEADER AND SIGNAL TOWER REPAIR

Changes from V14.0.23:
- Enlarged center KLA logo; connection labels share one readable line.
- Removed the standalone divider and inner red rectangle. Disconnection marks the center panel.
- Restored two user shields: own initials and additional active-user count. Signed-out users show a dash.
- Replaced conflicting tower lighting overlays with a single scalable canvas containing the complete original tower artwork and the correctly positioned active light.
- All seven lights, status label and border scale together; powered-down artwork has no active light.
- Existing badge layout, operational sections, Brain panel, data and sync logic retained.

INSTALL
Keep your current folder as a backup. Extract this full ZIP into a new normal folder. Close the old command-center server and run START-COMMAND-CENTER.bat. Confirm V14.0.24.

GITHUB PAGES
Update index.html, css/command-center.css and js/command-center.js together. Keep the existing assets folder (the full package also includes it). Wait for Pages to finish, then press Ctrl+F5. Confirm V14.0.24 in the header.

CHECKS
JavaScript syntax and regression checks passed, including all eight tower states and user badge states. Browser rendering could not be verified in this environment.
