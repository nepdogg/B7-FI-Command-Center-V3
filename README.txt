B7 FI COMMAND CENTER V11.17.6 — PRESENTATION / QUARTER / ZOOM TEST

Based on the existing full-featured V11.17.5 package. No tool records or Microsoft List settings are modified by this build.

CHANGES
- Quarter Summary presentation CY26Q3/CY26Q4 TOOLS links: fixed a click blocker that swallowed tool-quarter navigation.
- Quarter selection for historical tool presentations: selected quarter now determines the displayed tools.
- Quarter Summary links: one event handler handles the navigation, avoiding duplicate clicks.
- Tool presentation: stronger single outer cyan border containing card and bottom navigation.
- Status lamp: larger 17–22px red/yellow/green dot with glow, reduced-motion support.
- Computer / Component badges: standardized compact full-width geometry across fleet and live tool cards.
- Live Operations: improved flexible vertical fill when zoomed out.

TESTING (Edge)
1. Extract ZIP into a NEW folder, preserving V11.17.5 as backup. Run START-COMMAND-CENTER.bat.
2. Test Live Operations at 67%, 80%, 100%, and 125% zoom. Inspect all three columns, footer and page navigation.
3. Open Presentation Mode. Verify one outer cyan border encloses the full card and navigation.
4. Open CY26Q3 SUMMARY presentation; click Q3 TOOLS, Q4 TOOLS, Q3 SUMMARY and Q4 SUMMARY. Verify each target.
5. Compare Computer/Component badges on different tools and Tools Center cards; click to inspect tracking history.
6. Check the larger alert lamp.

SAFETY / LIMITATIONS
TEST ONLY. Microsoft List sync, save reliability and phantom 200+ records remain unverified. Do not delete or reset List data without a verified backup. This build does NOT fix or reset those records.
