B7 FI COMMAND CENTER V10.1.0 — MODERN UI REBUILD

PURPOSE
This build replaces the accumulated V10 Live Operations visual patch stack with one authoritative V10 UI layer while retaining the existing Command Center data, Brain, editing, archive, shipping, and multi-user JavaScript workflows.

PRIMARY CHANGES
- Modern prototype geometry applied directly to the V10 Live Operations Tool Card.
- Tool Intelligence row: separate Priority bubble + full Tool Status alert bubble + View Details.
- Every Tool Card section title is automatically prefixed with the current tool alias/UTID.
- Left identity area uses compact two-column identity bubbles instead of a long single-column stack.
- Operational requirement badges use three columns; System Wafers spans the full width.
- Middle column is six independent rounded bubbles. Removed black inset rectangles and internal divider bars.
- Right progress metrics are independent rounded bubbles with larger tracks and Tool Readiness.
- Main Navigation and Page Navigation share the same rounded-button visual language.
- Leads Alert, System Status, and Command Center bars use the same navigation-row height.
- Header remains three explicit sections with a protected center KLA/multi-user region.
- Sticky shell ends after Page Navigation. Footer remains in normal document flow.
- No whole-app transform scaling. Normal browser zoom is allowed to reflow the responsive grid.
- Presentation Mode uses the same Tool Card component with viewport-fit compact rules.

TEST FIRST
1. Live Operations at 100% browser zoom.
2. Compare Priority/Tool Status row, identity area, six middle bubbles, and right progress bubbles with the modern prototype.
3. Test browser zoom 90%, 80%, 75%, and 67%; the workspace should expand rather than becoming a tiny fixed canvas.
4. Scroll normal mode and confirm Header through Page Navigation stays sticky while the footer remains below content.
5. Open Presentation Mode and verify the Tool Card fits above its navigation without clipping.
6. Verify direct-click editing for identity, status, progress, wafers, priority, and View Details.
7. Verify Shipping, Status, Priority, Cycle Time, Tool Edit, Quarter Summary, Archive, and Administration pages still open.
8. In Multi-User mode verify KLA sign-in/list connection and a save/sync cycle in the real environment.

NOTE
The legacy command-center.css remains loaded because non-Live-Operations centers still depend on its established page styling. The V10.1.0 stylesheet is authoritative for the shell and modern Live Operations component and no longer contains sequential V10.0.x patch blocks.
