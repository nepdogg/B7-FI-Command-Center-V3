B7 FI COMMAND CENTER V10.1.5 — RENDERED GEOMETRY CORRECTION

Build focus:
- Priority block now reads PRIORITY large with LEADS / COMMAND CENTER as the smaller source label.
- Tool Status Bar is one continuous component internally organized as Priority | Tool Identity | Tool Intelligence Message | View Details.
- Tool Identity is UTID first line, Tool Type + Model second line. Full intelligence message wraps instead of ellipsis.
- Header center is 2x2 user grid + KLA/status + 2x2 user grid, with connection text protected from clipping.
- Page Navigation is one dynamic full-width row with no reserved spacer region.
- Removed inherited Live Operations outer body frame and legacy state-value pseudo-element lines.
- Removed the V10.1.4 forced 100vh normal-mode stretch that caused giant empty bubbles at browser zoom-out.
- Footer Administration / Presentation controls are equal-size and centered.
- Presentation Tool Card and Quarter Summary reserve bottom navigation space and constrain content to viewport.
- Quarter Summary presentation navigation is generated from visible lifecycle quarters and exposes Tools + Summary destinations.
- Tools pages retain grouped Tool Type fleet cards introduced in V10.1.4.

TEST:
1. Live Operations at 100%, 80%, 67%, 125% browser zoom.
2. Scroll and verify Header through Page Navigation remains sticky.
3. Verify Page Navigation has no internal blank gap and Screenshot remains visible.
4. Verify Tool Status message wraps fully and identity is separated.
5. Verify no cyan lines around SHIPPED / ON SCHEDULE / PACKING values.
6. Verify Presentation Tool Card and Quarter Summary are fully visible above bottom navigation.
7. Verify Q3/Q4 Summary buttons render the quarter selected.
