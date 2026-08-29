# B7 FI Command Center V5.2.0 — Live Operations Finalization

This build consolidates the Live Operations design and workflow corrections from real-data testing.

Highlights:
- Balanced 3×2 live tool card, uniform outer health border, centered carousel controls.
- State-aware lifecycle: OPI → OI → FI → Powered Down → Packing → Shipped. FI summary remains simplified: OPI/OI = Waiting FI; FI/Powered Down = In FI.
- Reduced Process turns the photo panel red and remains a separate tool-level flag.
- Shipped tools display all live progress bars at 100% and FI/Lead panels as complete without overwriting historical checklist data.
- Alias ship countdown includes weekday + date.
- Tool Family Countdown is generated automatically from active tool data, supports additional families, and includes family thumbnails, larger headings, and shorter progress bars.
- Rotating frame headings standardized with current date: SYSTEM STATUS, SYSTEM PRIORITIES, SYSTEM SHIPPING SCHEDULE, SYSTEMS REQUIRING ATTENTION, and <QUARTER> TOOL SHIPPING PROGRESS.
- Added automatic quarter-time progress directly under quarter shipping progress.
- Quarter status boxes reordered: quarter tools, pulled in, pushed out, updated planned tools, waiting FI, in FI, packing, shipped.
- Packing/shipping progress is milestone-based, reversible, and order-independent. MST Installation is included only for Regera/Celestiq.
- Milestone editors support Planned date, Completed checkbox, and Actual date.
- Reference Detail includes Delete Reference; reference modal is viewport-safe.
- Compact save notifications.

The localStorage key remains unchanged so existing V5.x browser data can be reused. Legacy Waiting for FI / In FI records migrate to OI / FI.
