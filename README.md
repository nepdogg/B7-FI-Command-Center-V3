B7 FI Command Center V6.4.8

Prototype Lock + Badge Rules

This release preserves the existing browser storage key:
b7fi-command-center-v3

V6.4.8 changes:
- Universal Tool Card uses one final desktop authority block in all normal and Presentation Mode contexts.
- Left column is locked to the approved composition: compact identity, large tool image, Reduced Process banner, fixed 2 x 10 indicator matrix.
- Tool Type, Model, Customer, and Sales Order use distinct identity colors.
- Middle column is now six explicit sections with consistent divider spacing: Ship Countdown, FI Status, Current System Status, Current FI Task, FI Forecast, Cycle Time.
- Right column retains FI Testing, Micro Schedule, Current Cycle Time, Target Cycle Time, Lead/Admin, Customer Source, STR, Packing/Shipping, and Tool Badge Control.
- Badge controls updated to the latest user-defined states/default semantics, including Reduced Process, WWC single-state selection, CTD colors/states, CCL, STR, Postmag, Foresight, OPK, NC Escalation, and Powered Down.
- 20 physical badge positions remain; two positions are reserved for future indicators.
- No core FI progress, shipping, forecast, cycle-time, or localStorage key changes.


V6.4.8 middle-column lock:
- Matches the approved middle-column sample: countdown, FI status, current system status, current FI task, FI forecast, cycle time.
- Prevents ship countdown clipping.
- Adds consistent breathing room around section dividers.
- Keeps the same middle-column geometry in normal carousel and Presentation Mode.
