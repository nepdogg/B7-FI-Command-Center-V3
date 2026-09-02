B7 FI Command Center V6.4.4

Tool Card Flow + Badge Control Fix

Changes in this build:
- Preserves localStorage key b7fi-command-center-v3 and existing production data compatibility.
- Left identity header now places UTID/model/tool type on the left and larger Customer / SO # on the right.
- Fixed 20-badge panel remains 2 columns x 10 rows with no scrollbar.
- Badge messages are single-state messages and are centered in each badge.
- Middle column reordered: Ship Countdown -> FI Status -> Current FI Task -> FI Forecast -> Cycle Time.
- NEXT FI TASK renamed CURRENT FI TASK and displays the current FI checklist.
- Right-column progress and current-step typography enlarged.
- Cycle progress rows continue to display their values in days without changing cycle calculations.
- Tool Badge Control update flow repaired and legacy indicator fields synchronized for compatibility.
- Cycle Time Center now shows TARGET TBD when FI Handoff exists but no cycle target is configured, instead of NOT STARTED.
- Existing FI progress, shipping, forecast, meeting, synchronization, and storage workflows preserved.


V6.4.1 Tool Card corrections:
- Left identity header now uses three rows: UTID centered; Tool Type / Customer; Model / SO #.
- Right column is locked to six evenly distributed progress rows plus one divider and Tool Badge Control.
- Cycle Time remains only in the middle column.
- Badge control remains interactive in normal and Presentation Mode.


V6.4.1: finalized 20-position badge vocabulary/default ignition states, independent WWC 1/2/3 controls, exact three-row identity header, FI Status/System Status divider, and even middle/right column spacing.


V6.4.3 Approved Universal Tool Card layout:
- Restored a large tool image in the left column.
- Compact three-row identity block: centered UTID; Tool Type/Customer; Model/SO #.
- Reduced Process remains a full-width banner immediately below the tool image.
- Fixed 20-position FI indicator matrix uses the full width below Reduced Process and fills all remaining column height.
- Indicator matrix is exactly 2 columns x 10 rows, centered, fixed-position, and never scrolls.
- Badge text remains one centered state message per indicator.
- Existing V3 production storage, indicator states, progress logic, presentation sync, and tool workflows remain unchanged.


V6.4.4 Prototype-match Universal Tool Card:
- Desktop UTC proportions now match the approved prototype more closely: taller card, balanced three-column layout.
- Left identity block, large tool image, Reduced Process banner, and fixed 20-position badge matrix match the approved visual hierarchy.
- Middle column spacing/dividers follow the approved prototype layout.
- Right column keeps the approved progress/control styling and restores Current/Target Cycle Time gauges in days.
- No data schema, storage key, FI calculations, shipping calculations, or cross-window synchronization changes.
