FI COMMAND CENTER V14.0.31 — SIGNAL LIGHTING CONTROL REPAIR

- Brightness now controls active-lamp intensity in Steady and Pulse modes.
- Glow intensity now controls halo strength and blur on the current realistic tower.
- Pulse duration and Smooth/Double Flash use the current active lamp.
- OFF hides the active illumination while preserving tool status; powered down always has no active lamp.
- APPLY previews adjustments without saving.
- SAVE applies and persists settings on this browser.
- CLOSE, Escape, or clicking outside discards unsaved adjustments and restores saved settings.
- Settings panel scrolls when necessary to keep actions reachable.
- Separate TOOL STATUS title from V14.0.30 retained. Header center and other sections retained.

GITHUB PAGES: update index.html, css/command-center.css and js/command-center.js together. Keep assets, including realistic-master-v27.png. Refresh Ctrl+F5 after deployment and confirm V14.0.31.
LOCAL: extract full ZIP into a new folder. Close the old server before START-COMMAND-CENTER.bat.

CHECKS: JavaScript syntax; all eight tower states; single-light behavior; Apply without storage; Save persistence; Close restoration; failed-save handling; brightness/glow endpoints. All passed. Live browser rendering remains unverified.
