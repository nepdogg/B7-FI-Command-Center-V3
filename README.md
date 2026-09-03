B7 FI Command Center V6.5.3

Prototype Lock + Badge Rules

This release preserves the existing browser storage key:
b7fi-command-center-v3

V6.4.9 changes:
- Universal Tool Card uses one final desktop authority block in all normal and Presentation Mode contexts.
- Left column is locked to the approved composition: compact identity, large tool image, Reduced Process banner, fixed 2 x 10 indicator matrix.
- Tool Type, Model, Customer, and Sales Order use distinct identity colors.
- Middle column is now six explicit sections with consistent divider spacing: Ship Countdown, FI Status, Current System Status, Current FI Task, FI Forecast, Cycle Time.
- Right column retains FI Testing, Micro Schedule, Current Cycle Time, Target Cycle Time, Lead/Admin, Customer Source, STR, Packing/Shipping, and Tool Badge Control.
- Badge controls updated to the latest user-defined states/default semantics, including Reduced Process, WWC single-state selection, CTD colors/states, CCL, STR, Postmag, Foresight, OPK, NC Escalation, and Powered Down.
- 20 physical badge positions remain; two positions are reserved for future indicators.
- No core FI progress, shipping, forecast, cycle-time, or localStorage key changes.


V6.4.9 middle-column lock:
- Matches the approved middle-column sample: countdown, FI status, current system status, current FI task, FI forecast, cycle time.
- Prevents ship countdown clipping.
- Adds consistent breathing room around section dividers.
- Keeps the same middle-column geometry in normal carousel and Presentation Mode.

## V6.4.9 stabilization
- Finalized Universal Tool Card columns now stretch to the full available card height.
- Approved left/middle/right internal spacing remains proportional as height changes.
- Eliminates the blank strip beneath the three columns in Live Operations/Presentation Mode.
- Tool Badge Control is explicitly interactive in full-screen Presentation Mode and uses the same badge workflow as Live Operations/Tools pages.
- Storage key remains `b7fi-command-center-v3`; no core FI calculations were changed.

## V6.5.1 — Brain V1: Central Tool State Engine
- Adds centralized `evaluateTool(tool)` derived-state engine.
- Badge state/message/color/active logic is now evaluated through one brain path.
- Adds derived badge intelligence including active, critical, attention, and attention-count summaries.
- Existing Command Center operational intelligence can consume the same centralized result.
- Existing V3 localStorage production data remains authoritative and unchanged; derived intelligence is calculated at render time and is not written back into stored tool records.
- No schedule, cycle-time, FI-progress, shipping, priority scoring, or workflow calculation formulas were intentionally changed in this first brain step.


## V6.5.1 — 9/2 Field Test / Priority Intelligence
- Tools-page Universal Tool Cards now stretch all three columns to full card height.
- Presentation Mode Reduced Process row is normalized and the gap above the 2x12 badge matrix is removed.
- Presentation Mode quarter/status/progress text is enlarged for wallboard readability.
- Badge panel is now 25 indicators total: Reduced Process + 24 fixed slots in a 2x12 grid.
- Foresight badge replaced by IMC Config with four resolved green selections and a red default.
- Added FACTD, Packing the System, Complete Options, Ship Meeting, and automatic Lamp badges.
- Lamp thresholds use 672h for Regera/Celestiq/Targa/Taycan/Boxster/Macan and 1000h for Zephyr/Vanquish/Panamera; yellow at <=50h remaining and red at <=5h remaining.
- NC rows can be removed during Update Command Center / morning all-tool updates.
- Presentation Mode forecast target selection now forces recalculation and refreshes the wallboard card without exiting Presentation Mode.
- Added dynamic red diagonal PRIORITY # ribbons to Tool Cards.
- Priority Center compares Lead Priority with independent Command Center Priority and includes a global badge-source switch.
- Command Center Priority does not use Lead Priority as an input.
- Existing b7fi-command-center-v3 localStorage compatibility preserved.


## V6.5.3 — Driver Ribbon + FI-Only Update Command Center
- Adds a dedicated DRIVER ribbon over the lower-right corner of the Universal Tool Card photo, opposite the red Priority ribbon.
- Driver ribbon is angled 45 degrees and automatically displays the tool's current Driver / Tool Assignment on Live Operations, Tools pages, and Presentation Mode.
- Tool Assignment is now a dropdown sourced from currently known driver names in production data plus Unassigned; the master roster can be expanded when the full driver list is provided.
- Update Command Center now includes only tools whose current Tool Status is FI. Engineering, Waiting FI/OI/OPI, Powered Down, Packing, Shipped, and Archived tools are excluded from that interface.
- Existing b7fi-command-center-v3 storage compatibility is preserved.


## V6.5.3 — Priority Ribbon Semantic Tiers
- Priority ribbons now show exact rank plus operational meaning: `#1 TOP PRIORITY`, `HIGH PRIORITY`, normal `PRIORITY`, and `LOW PRIORITY`.
- Tier wording adapts to the number of ranked tools so reduced weekend staffing can read the fleet faster.
- Priority #1 receives a slightly stronger red treatment while all priority ribbons remain red.
- Priority source remains switchable between COMMAND CENTER and LEADS / MANAGERS; switching display source does not merge or overwrite either ranking.
- Command Center Priority remains independent of Lead Priority.
- Existing Weekend Volunteer workflow remains the staffing/resource-allocation workspace; no duplicate weekend staffing feature was added.
- Driver ribbon remains lower-right on the tool photo and continues to use the Driver / Tool Assignment field.
- Update Command Center remains FI-only.
- Storage key and production-data compatibility remain unchanged.
