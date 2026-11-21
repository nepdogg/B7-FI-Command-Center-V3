FI COMMAND CENTER V14.0.26

Changes from V14.0.25:
- Rebuilt the signal tower as a scalable vector UI component. The outer frame is inset on every side so no state uses the cropped bitmap edge.
- Seven lamp segments with exactly one active lamp. Powered-down state has no active lamp. Inactive lamps are dark gray.
- Center header shield/logo group constrained to 390px and centered, moving the shields inward beside the KLA logo. Round user badges remain inside the empty shields.
- Left/right header panels and operational sections retained.

INSTALL: extract into a new folder. Close old server before START-COMMAND-CENTER.bat.
GITHUB PAGES: replace index.html, css/command-center.css and js/command-center.js together. Keep assets. After deployment press Ctrl+F5 and confirm V14.0.26.

Code checks passed including all eight tower states and the single-active-light invariant. Live browser appearance remains unverified.
