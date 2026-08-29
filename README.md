# B7 FI Command Center V5.4.2 — Live Operations Readability & Layout

Consolidated test build based on V5.4.0. It retains the Operational Logic Upgrade and adds the latest workflow rules discovered in production testing.

## Latest changes
- Shipped tools remain visible in Tool Center, Shipping Center, Live Operations, quarter totals and historical records.
- Shipped tools are automatically excluded from current Weekday/Weekend Morning Status, Morning Meeting workspaces, Weekday/Weekend Priority lists and Systems Requiring Attention.
- Morning Status ordering is now automatic and deterministic:
  1. all non-Regera/Celestiq tools, ascending UTID;
  2. Regera tools, ascending UTID;
  3. Celestiq tools, ascending UTID.
- The same automatic order is used by Weekday Status, Weekend Status, Daily Update and Morning Meeting. Manual Morning Status reorder controls are no longer needed.
- Priority lists rebuild from the current operational workload so a newly shipped tool drops out automatically without deleting its quarter record.

## Retained from V5.4.0
Multi-quarter Tool Center navigation and Active Quarter management, Engineering lifecycle status, FI cycle-time tracking and management target averages, sixth Live Operations Cycle Time rotation page, FI handoff/Engineering/forecast date fields, Action Center editable history, clickable immutable Status History snapshots, compact global save notifications, form clipping fixes, dense one-row Shipping Center formatting, Status screenshot cleanup, and Reveal-column preservation in Screenshot/Presentation modes.

Existing localStorage key remains `b7fi-command-center-v3`, so existing V5.x browser data is preserved and normalized forward.


## V5.4.2 Live Operations Readability & Layout
- Enlarged both Live Operations rotating panels to identical dimensions.
- Rebuilt the Live Tool Card into a 4-panel top row and 3-panel bottom row.
- Added a dedicated FI Cycle Time Status panel between Ship/FI Status and Progress.
- Reordered progress bars: FI Testing, Micro Schedule, Tool Cycle Time, Average Cycle Time, Lead/Admin, Packing/Shipping.
- Removed internal Tool Card scrollbars and increased typography/panel sizing for 100% zoom readability.
- Added a distinct full-width body shell and moved the footer visually outside that workspace.
- Redesigned the footer to mirror the header: themed left/right sections with a dark centered KLA+ section.
