FI COMMAND CENTER V14.0.44 — RESTORED LATEST DAILY SYSTEM STATUS

Middle column order: Ship Countdown, Next System Tasks, Latest System Status, Lead Notes, Command Center Brain.
Latest System Status uses the existing daily-update fields: current checklist, customer, lamp hours/state, latest status/task text, open NC descriptions and POA. Click opens the existing latestStatus editor. NC editing remains in the full tool editor.
The daily status section has a fixed 360px slot with internal scrolling. Three-column height remains fixed at 1900px. Other middle slots redistributed; right Tool System Status retained as the tool phase/condition overview.

GITHUB PAGES: replace index.html, css/command-center.css and js/command-center.js together. Keep assets. Refresh Ctrl+F5 and confirm V14.0.44.
LOCAL: extract full ZIP to new folder; close old server before START-COMMAND-CENTER.bat.

Regression tests passed including checklist, customer, lamp zero/off states, multiline daily text, open NCs, POA and closed-NC exclusion. Browser rendering remains unverified.
