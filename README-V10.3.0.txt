B7 FI COMMAND CENTER — V10.3.0
Brain Overall Progress + Responsive Geometry Lock

WHAT CHANGED
- Added Brain-calculated OVERALL TOOL PROGRESS. It is automatic and uses FI, Lead/Admin, and Packing/Shipping progress.
- Default Overall Tool Progress weights: FI 50%, Lead/Admin 20%, Packing/Shipping 30%.
- Added those three weights to Administration Center > Command Center Brain Settings.
- Removed the duplicate Tool Shipment Progress bar. Packing / Shipping Progress is now the single authoritative shipping workflow bar and reaches 100% when shipped.
- Replaced Tool Readiness with a larger Overall Tool Progress bar and automatic Brain status message.
- Freed right-column vertical space is redistributed across the remaining progress sections; progress tracks are taller.
- Live Operations and Presentation Mode use the same Tool Status Bar component and status message.
- Enlarged Priority / Leads-or-Command-Center / UTID / type-model text on the left side of the Tool Status Bar.
- Added a clear gutter between the Tool Status Bar and the three Tool Card columns.
- Middle-column top three cards are shorter, top-aligned, and retain large hero text. Bottom three cards receive more height.
- Presentation Mode receives the same thicker progress bars and middle-column hierarchy, taller badges, a shorter photo area, and an intentional outer presentation frame.
- Reworked normal header geometry: larger KLA/multi-user center section, black center background, tighter KLA presence box, dynamic left/right title fitting.
- Reworked Main Navigation and Page Navigation sizing so the full row is distributed from actual available width instead of old fixed button geometry.
- Removed normal-page/body master border frames. Individual component bubbles remain.
- Removed the old 620px Live Operations minimum that caused browser zoom-out to leave a large dead area; Live Operations now derives usable height from the current viewport and measured sticky shell.
- Tools page retains tool-type headings/live status counts and three compact left-column cards per row at FI-monitor widths.
- Footer Administration Center and Presentation Mode buttons are equal-width and centered.
- Existing quarter lifecycle behavior remains: prior-quarter pages remain while unarchived tools exist; active-quarter pages are generated from lifecycle quarters.

TESTING
1. Deploy all files together; do not copy only index.html or CSS.
2. Hard refresh after deployment (Ctrl+F5).
3. Live Operations: compare browser zoom 100%, 90%, 80%, 75%, and 67%. The dashboard should use the viewport rather than becoming a small block above dead space.
4. Verify header left title, KLA/multi-user center, and right Center/CY26Q4 title are fully visible.
5. Verify Main Navigation and Page Navigation do not clip button labels.
6. Verify Live Tool Status Bar matches Presentation Mode and shows the complete message (up to two lines).
7. Verify middle top three cards are shorter/top-aligned and lower three cards are taller.
8. Verify right column contains one Packing / Shipping Progress bar and one Overall Tool Progress bar; there is no Tool Shipment Progress duplicate.
9. Change FI / Lead-Admin / packing states and confirm Overall Tool Progress changes automatically.
10. In Administration Center, verify Overall Progress weights default to 50 / 20 / 30 and can be changed.
11. Open Presentation Mode and verify complete card, outer frame, taller badges, shorter photo, thicker progress bars, and bottom navigation all fit.
12. Open CY26Q3/CY26Q4 Tool pages and verify tool-type headings and three cards per row at normal FI-monitor width.

NOTE
This build changes shared layout/component rules and Brain logic rather than adding another separate visual renderer for Live Operations.
