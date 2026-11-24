FI COMMAND CENTER V14.0.43 — FIXED TOOL CARD SECTION GEOMETRY

- Three equal-height Live Operations columns, fixed at 1900 CSS pixels to retain the complete tool/badge record without global shrinking.
- Every identity, photo, status, task, note, Brain and progress section has a reserved grid slot.
- Content changes no longer set section heights.
- Long notes, tasks and findings scroll inside their reserved section.
- Empty system-status schedule slot retained so state changes do not shift the layout.
- Two-column identity, three-column operational badges and full-width tracking badges retained.
- Existing header, footer, tower, controls and data behavior retained.

GITHUB PAGES: replace index.html, css/command-center.css and js/command-center.js together. Keep assets. Refresh Ctrl+F5 and confirm V14.0.43.
LOCAL: extract full ZIP to new folder; close old server before START-COMMAND-CENTER.bat.

JavaScript syntax and regression checks passed. Browser rendering remains unverified.
