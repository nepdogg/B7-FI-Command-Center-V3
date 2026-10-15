B7 FI Command Center V11.17.35 - Canonical Badge Layout Test

Based on full V11.17.34 application; no tool data intentionally changed.

Changes:
- Removed three competing legacy badge overlay stylesheet links.
- Added a single final authoritative badge layout for standard Live Operations and Tools Center.
- 27 standard badges + System Wafers + Computer Tracking + Component Tracking: 12 rows, 50px high, 5px gaps.
- Fixed Live Operations card height and column layout; preserve Presentation Mode sizing.
- Kept status colors and 20px progress bars.
- Sticky header retained in document flow.

Test with disposable tool data. Browser refresh (Ctrl+Shift+R), scroll through all badges, then test badge state save/reload. Microsoft List sync is NOT verified.
