FI COMMAND CENTER V14.0.50 — HYBRID POSITIONING AND SUMMARY PROPORTIONS

- Fixed conflicting active/side carousel transforms that displaced cards downward and rightward.
- Explicit pixel offsets and angles for centered and receding cards; seven cards remain available.
- Quarter Summary and Hybrid now share the same hero height, metric rows, progress-bar height and counter-row dimensions.
- Hybrid no longer stretches the summary hero across half the screen independently of Quarter Summary.
- Existing mini-card fields, tower, dots, arrows, rotation and navigation retained.

GITHUB PAGES: replace index.html, css/command-center.css and js/command-center.js together. Keep assets. Refresh Ctrl+F5 and confirm V14.0.50. Exit/re-enter Hybrid.
LOCAL: extract full ZIP to new folder; close old server before START-COMMAND-CENTER.bat.

Syntax and regression tests passed. Live browser rendering remains unverified.
