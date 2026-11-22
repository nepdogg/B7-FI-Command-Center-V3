FI COMMAND CENTER V14.0.28 — SIGNAL TOWER DETAIL REFINEMENT

- Removed the outer colored tower frame.
- Widened realistic tower body by 18% inside the existing tower area.
- Centered KLA mark vertically on chrome base.
- Replaced the bottom status section with a black metallic badge, silver outline and rounded corners matching the Priority badge style.
- Status text matches active light color. Removed the extra symbol line.
- Existing single-active-light behavior retained, with no lights when powered down.
- Header center layout retained from V14.0.27.

GITHUB PAGES: update index.html, css/command-center.css, js/command-center.js together and include assets/signal-towers/realistic-master-v27.png if not already installed. Refresh Ctrl+F5 and confirm V14.0.28.
LOCAL: extract full ZIP into new folder; close old server before running START-COMMAND-CENTER.bat.

Code checks passed for all eight tower states, one active lamp and the revised badge/frame geometry. Browser rendering remains unverified.
