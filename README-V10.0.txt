B7 FI COMMAND CENTER — V10.0.7 STICKY SHELL + PRESENTATION FIT STABILIZATION

PURPOSE
This test build continues the V10 modern redesign while correcting the geometry regressions identified during V10.0.6 testing.

V10.0.7 CHANGES
- Restored one global sticky control stack in normal mode: Header -> Main Navigation -> Leads Alert -> System Status -> Command Center -> Page Navigation.
- Footer remains non-sticky and in normal document flow.
- Header is enforced as three responsive sections: Command Center title / KLA connection / current Center title.
- Removed navigation-rail framing so the rounded buttons provide the visible navigation geometry.
- Main navigation, all three status bars, and page-navigation controls share a 42px control height.
- Page navigation now redistributes the complete row across page buttons, the single Tool Carousel control group, Verify Tools, Update Command Center, and Screenshot.
- Removed the obsolete Status Carousel allocation from the V10 page-navigation geometry.
- Live Operations Tool Card no longer has the old 980px maximum-height behavior; browser zoom-out can use the larger CSS viewport instead of leaving a large unused lower area.
- Strengthened the Tool Intelligence / Tool Status bar treatment while preserving live urgency colors and large UTID / tool type / model identity text.
- Presentation Mode live Tool Card now uses the actual browser viewport rather than the legacy 1080px virtual-canvas scale routine.
- Presentation Mode reserves 58px for its bottom navigation and fits the complete Tool Card above it.
- Presentation Mode aligns the bottom of the left, middle, and right columns.
- Presentation Mode keeps all six middle-column bubbles visible: Ship Countdown, Current Tool Status, Current System Status, Next System Tasks, Latest System Status, and Lead Notes / Reminders.
- Presentation Mode fits all right-column progress bubbles plus Tool Readiness.
- Presentation Mode retains the 3-column operational badge matrix and full-width System Wafers badge.
- Large status values such as SHIPPED and ON SCHEDULE remain visible inside their bubbles.

TESTING PRIORITIES
1. Normal Live Operations: scroll down and confirm the complete header through Page Navigation remains sticky.
2. Browser zoom: test 100%, 90%, 80%, 75%, 67%, 110%, and 125%. Confirm the workspace reflows and does not become a miniature dashboard with a large empty lower area.
3. Header: confirm all three header sections remain visible and the KLA center section is not clipped.
4. Main/Page Navigation: confirm no rectangular outer rail box is visible and all buttons retain the modern rounded appearance.
5. Status bars: confirm Leads Alert, System Status, and Command Center are the same height as navigation controls.
6. Tool Status bar: confirm urgency colors, large message, and large UTID / type / model identity.
7. Presentation Mode: confirm the entire Tool Card is visible above the bottom navigation with no clipped badges, notes, progress rows, or Tool Readiness.
8. Presentation Mode: verify Previous Tool, Play/Pause, Next Tool, Quarter Summary, and ESC behavior.
9. Confirm tool edits, local data, multi-user controls, quarter logic, and archive behavior remain intact.

DATA SAFETY
This package does not intentionally reset production/local tool data. Continue keeping the previous working build available while testing V10.0.7.
