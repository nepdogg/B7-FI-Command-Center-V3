FI COMMAND CENTER V14.0.42 — BADGE GROUPS / SPLIT OUTER HEADER SECTIONS

- Tool details use two columns.
- Operational badges use three columns with centered label/value text.
- System Wafers, Computer Tracking and Component Tracking remain full-width below them.
- Left header now has two distinct framed sections: FI Command Center title above Leads Alert.
- Right header now has two distinct framed sections: current-page title above Command Center Brain alert.
- Fixed page-title updates so they no longer consume or merge the Brain alert text.
- KLA/user center, tower, tool-system-status location, expanded Brain, footer and data behavior retained.

INSTALL
GITHUB PAGES: replace index.html, css/command-center.css and js/command-center.js together. Keep assets. Refresh Ctrl+F5 and confirm V14.0.42.
LOCAL: extract full ZIP to new folder; close old server before START-COMMAND-CENTER.bat.

CHECKS
JavaScript syntax, regression checks and ZIP integrity passed. Browser rendering remains unverified.
