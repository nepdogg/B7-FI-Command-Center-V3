# B7 FI Command Center V6.0.3 — Universal Card Spacing + Centering

This release is a stability rebuild of the presentation layer using the existing V5.6.7 business/data logic as the compatibility baseline.

## Data compatibility
- Keeps the existing browser storage key: `b7fi-command-center-v3`.
- Existing V3 Command Center production data remains compatible.
- Existing tool, status, shipping, meeting, action, archive, reference, cycle-time, screenshot/presentation, and administration workflows are retained.

## V6 clean-system changes
- Historical competing Universal Tool Card CSS selectors were removed before the V6 stylesheet was written.
- The Universal Tool Card now has one host class: `universal-card-host`.
- Live Operations and quarter Tools pages call the same `liveToolCard()` renderer and use the same host/card rules.
- The middle status column has one four-zone layout: Ship Countdown, FI Process, FI Cycle Time, FI Forecast.
- FI Process status is enlarged and FI Forecast uses a stacked next-step selector with a larger date.
- Operations navigation labels are locked to `UPDATE COMMAND CENTER` and `TOOL ARCHIVE`.
- `ALL ACTIVE TOOLS` is not present in Operations navigation.
- Carousel names are stacked over PLAY/PAUSE to save horizontal space.
- Page/action controls use one full-width bar system.
- `DATA: PRODUCTION` is located next to Administration Center in the footer.
- Current-quarter navigation no longer uses a special green treatment.
- Tool-family jump navigation remains available and sticky.

## Version
- Version: 6.0.3
- Build: `20260830-V6.0.3-CARD-SPACING-CENTERING`


## V6.0.1 focused stabilization
- Live Operations status and tool carousels are locked to the exact same height.
- Universal Tool Card geometry is authoritative and identical in carousel and quarter Tools pages.
- Tool information column restored as one full-height outlined panel.
- UTID and tool type/model enlarged and centered.
- Tool image region tightened to remove excess top/bottom dead space.
- Middle column uses four fixed zones with exactly three section dividers; duplicate FI Forecast divider removed.
- Progress column restored as one full-height outlined panel.
- Progress rows receive dedicated spacing so labels/bars do not collide.
- FI Checklists and Lead/Admin Tasks are open sections separated by divider lines, not nested outer boxes.
- No navigation, data-schema, calculation, workflow, or localStorage behavior was intentionally changed in this release.


## V6.0.3 focused card corrections

- Universal Tool Card columns are now exactly equal width: 1/3 + 1/3 + 1/3.
- Left-column UTID and tool type/model are hard-centered independent of the editor-arrow button.
- Left-column vertical zones are explicitly balanced to reduce dead space around the photo and tool metadata.
- Removed the trailing divider under Ship Date.
- Middle-column four zones were rebalanced without adding any new content or changing data logic.
- Right-column progress rows receive even vertical spacing.
- Added one explicit divider between progress and FI Checklists, and one explicit divider between FI Checklists and Lead/Admin Tasks.
- FI Checklists and Lead/Admin Tasks remain open sections, not nested boxed cards.
- No navigation, storage, workflow, or calculation logic was changed.


### V6.0.3 stabilization pass
- Centers the UTID / tool type-model header against the full left column independent of the editor arrow.
- Slightly increases Customer / Sales Order / Ship Date text and distributes those rows more evenly.
- Redistributes the four middle-column sections across the full card height to reduce unused bottom space.
- Gives all eight progress rows dedicated equal-height slots with additional label-to-bar spacing.
- Uses one inset divider above FI Checklists and one inset divider above Lead / Admin Tasks, matching the middle-column divider style instead of touching the column border.
- No navigation, storage schema, calculation, workflow, or page-generation logic changes.


## V6.0.5
Rollback to V6.0.3 card structure, targeted centering/spacing fixes, visible progress bars, and active-center footer mirroring the header.


## V6.0.6
Equalized all three Universal Tool Card columns, enlarged left-column data, and rebuilt the footer with the exact header wing geometry and active-center accent.


## V6.0.7
Corrected the actual Universal Tool Card DOM grid placement, enlarged visible progress bars, improved spacing, and matched footer blue/black geometry to the header.


## V6.0.8
Universal Tool Card design-lock candidate. All tool states now use state-independent card geometry: identical three-column widths, fixed left/middle/right section slots, fixed checklist/task regions, and eight always-visible progress bars. Footer/navigation preserved from V6.0.7.

## V6.0.9
Universal Tool Card refinement:
- exact equal three-column framework
- all major data regions forced to full column width
- left, middle, and right sections distribute from top to bottom
- eight progress rows fill the progress region evenly
- checklist/admin regions consume their full assigned height
- footer design preserved from V6.0.8, height reduced to 54px

## V6.0.10
Universal Tool Card finalization pass:
- exact equal outer boxes for all three columns
- restored complete left-column box including bottom border
- state-independent geometry across FI/Packing/Shipped cards
- middle column starts at top and extends to bottom
- larger progress region with 11px bars and more spacing
- fixed checklist/task slots regardless tool state
- finalized footer retained and shortened slightly to 52px

## V6.0.11
Universal Tool Card framework lock pass:
- all tool states share one alignment and width system
- all data regions span full column width
- active and completed checklist/task states use the same geometry
- progress rows use full-width label/value/bar layout
- footer left and right wings now both use the active center/page accent
- finalized 52px footer height preserved

## V6.0.12
Final Universal Tool Card desktop lock:
- fixed 680px card geometry
- exact equal 3-column widths
- absolute fixed row heights inside all three columns
- UTID centered independently from the arrow
- full-width metadata rows with non-clipping ship date
- no empty top band in Ship Countdown
- stronger separation inside FI Process
- more spacing between FI Next Step and FI Forecast Date
- full-width 12px progress bars with larger gaps
- active/packing/shipped/complete states forced into identical geometry
- active-page accent footer preserved at 52px

## V6.1.0
Clean Universal Tool Card Component rebuild:
- replaced the legacy card markup with a dedicated UTC component
- exact three equal columns
- state-independent fixed regions
- centered UTID/model header
- reference-mockup layout for FI Process / Cycle / Forecast
- full-width progress bars
- fixed checklist/admin regions for active and completed states
- page containers can position the card but cannot restyle its internals
- active-page accent footer retained

## V6.1.1
Framework finalization:
- standardized page-action buttons
- added active-page color divider between page navigation and page actions
- Presentation Mode button now follows active center accent and no longer appears permanently active/blue
- Screenshot Mode now has top breathing room and a complete outer report border
- screenshot tables/list content are constrained inside the report frame
- Live Operations now always shows Tool Family Mystery Boxes with locked/unlocked state

## V6.1.2
Final screenshot/framework cleanup:
- removed the extra outer blue screenshot shell
- screenshot pages now keep only the active-color report border
- Tool Family Mystery Boxes remain visible in Screenshot Mode
- screenshot mystery boxes are display-only while capturing
- footer version text now shows only `B7 FI COMMAND CENTER V6.1.2`
- browser tab and footer now use the same concise version identity

## V6.1.3
Targeted workflow cleanup:
- Shipping button text changed from UPDATE MILESTONES to UPDATE PROGRESS
- Tool Edit FI/Micro section restored to two-column workflow
- Lead/Admin Progress visual removed from Tool Edit
- Current Lead/Admin Task belongs under Current FI Checklist
- Micro Schedule Start/Complete belong under Micro Schedule Target
- Complete FI Checklist and Complete Lead/Admin Checklist now support Minimize/Expand
- Screenshot Mystery Boxes visibility reinforced

## V6.1.4
Actual Tool Edit correction:
- Current Lead/Admin Task is directly under Current FI Checklist
- Micro Scheduled Start and Complete are directly under Micro Schedule Target
- automatic Lead/Admin Progress visual is removed from Tool Edit
- Complete FI Checklist and Complete Lead/Admin Checklist now have working MINIMIZE / EXPAND controls
- removed the unintended extra Tool Family Mystery Boxes strip from Live Operations
- existing family matrix Reveal/Mystery functionality remains intact

## V6.1.5
- Restored the always-visible mystery-box row on Live Operations.
- Renamed TOOL FAMILY MYSTERY BOXES to TOOLS MYSTERY BOXES.
- Each mystery box now uses only its codename as the main label.
- Locked boxes show lock + shipped/total count.
- Completed families show UNLOCKED and retain the existing celebration/reveal action.
- Preserves the V6.1.4 Tool Edit corrections and Update Progress wording.
\n## V6.1.6\n- 14 tool-card indicators: 6 workflow badges + 8 compact on/off chips.\n- Added Tool Edit controls for WWC 1/2/3, Postmag, Foresight, OPK, Options Requested, Ship Kit Requested, Reduced Process, and NC Escalation.\n- Fixed Reduced Process normalization so an explicit unchecked state stays unchecked.\n- Existing V3 data remains compatible; new flags default OFF.\n
## V6.1.7 — Presentation Tool Focus
- Presentation Mode now displays one giant Universal Tool Card at a time.
- Normal Live Operations still keeps both carousels.
- Existing Tool carousel controls remain at the top and are active in Presentation Mode.
- Previous / Pause-Play / Next work while Presentation Mode stays read-only.
- ESC exits Presentation Mode.
- Presentation exit performs a stronger layout reset to prevent the normal Command Center from remaining distorted.
- Added same-browser cross-window storage refresh so a Presentation window can receive saved data from another Command Center window.
- NEXT FI TARGET label changed to NEXT FI TASK.

## V6.1.8 — Stability / Universal Editor / Presentation
- UPDATE COMMAND CENTER removed from Operations page-navigation buttons.
- UPDATE COMMAND CENTER is now an Operations page action.
- It opens the all-tools editor directly.
- All-tools save button is now SAVE UPDATES and returns to the originating Operations page.
- Rebuilt the all-tools editor as a much more complete universal tool editor.
- FI Testing / Micro Schedule is restored to the correct two-column structure:
  left = Current FI Checklist + Current Lead/Admin Task;
  right = Micro Schedule Target + Start/Complete dates.
- Removed Lead/Admin Progress from the editor.
- Added a dedicated TOOL BADGES section with checkbox controls.
- Added Key Process, Customer Source, STR, Shipping/Packing, NC/POA and complete checklist working-aid sections to the all-tools editor.
- Improved all-tools visual separation with strong sticky tool headers.
- Latest Status display no longer adds a second dash to lines that already have one.
- Presentation Mode now includes the compact quarter summary, shipping progress, and days remaining.
- Presentation controls are spread across the full action bar.
- Universal Tool Card expands to use remaining presentation height.
- Presentation-only overflow/line-height corrections reduce clipped text.

## V6.1.9
- Update Command Center now renders the exact individual Tool Edit form for every tool.
- Repeated forms use scoped IDs and the same authoritative Tool Edit collection/save logic.
- Compact tool badges moved upward under the photo.
- Open arrow moved into the upper-right corner treatment.
- Added inset divider before Next FI Task; task value is gold.
- Enlarged ship-date / missing-date text.
- Screenshot Mode is full-screen with one complete center-colored outer border.

## V6.2.0
- Added POWERED DOWN as the 15th Universal Tool Card indicator.
- REDUCED PROCESS restored as a full-width red banner above all other badges.
- Compact badges tightened to preserve the current card dimensions.
- Removed divider below the badge block.
- Shortened Customer / Sales Order / Ship Date rows slightly.
- Removed two extra divider lines below quarter progress bars.
- Presentation Mode tool card stretches to use the full remaining viewport height.
- Complete FI Checklist and Complete Lead/Admin Checklist start minimized by default.
- Screenshot Mode keeps a single full-screen outer border.

## V6.2.2 — Stability / Non-Brain Fix Pass
This release intentionally does not redesign the Command Center decision/alert brain.

Implemented:
- One authoritative Tool Edit renderer/save path for individual and Update Command Center all-tools editing.
- Update Morning Status now opens the same all-tools editor and returns to Status Center after Save Updates.
- FI workflow membership: Morning Status and Priority lists use FI / Engineering / Powered Down / Packing tools only.
- Operations Shipping Schedule uses FI workflow tools only.
- Morning order corrected: all non-Regera/Celestiq tools ascending first; Regera + Celestiq combined and ascending second.
- FI cycle time freezes at the stored Powered Down date instead of continuing after packing/shipping.
- Powered Down badge control added; Reduced Process remains its own full-width red banner.
- Complete FI and Lead/Admin checklists remain minimized by default.
- Latest Status preserves pasted dash formatting instead of manufacturing another dash.
- Morning Meeting save remains one draft; completed meeting/history is de-duplicated by type/date.
- Morning Meeting history now displays general notes, all tool snapshots, per-tool notes, and actions.
- VERIFY TOOLS added to Live Operations and Data Integrity expanded into a phase-aware completeness checker.
- Same-browser cross-window refresh improved so Presentation Mode receives saved data while keeping the current tool when possible.
- Presentation Mode keeps quarter summary and stretches the Universal Tool Card through the remaining viewport.
- Screenshot Mode retains one full-page outer border.

## V6.2.4 — Recovery Hotfix
- Rebased on the known-working V6.2.2 render path after V6.2.3 blanked Live Operations.
- Presentation Mode uses the Screenshot-style dual Live Operations layout.
- Removed quarter progress divider lines.
- Powered Down active chip is green.
- Reduced Process no longer defaults ON from legacy process text.
- SCC Cleanup / Backup use Not Started / In Progress / Completed and In Progress lights yellow.
- Customer Source / STR Required=Yes activates the workflow badge; Complete/Approved states are green.
- Minimized FI and Lead/Admin checklist panels collapse to header-only height.
- Next FI Task value is white.
- Morning Meeting code is kept on the V6.2.2 stable path for this recovery build rather than applying the V6.2.3 rewrite.

## V6.2.5 — Presentation / Screenshot Parity
- Presentation Mode now uses the same clean full-screen framed visual structure as Screenshot Mode.
- Normal header, alerts/status shell, and external pagebar are hidden in Presentation Mode.
- Presentation navigation is inserted directly below the quarter progress bars in the former Mystery Box space.
- Presentation navigation controls both Status and Tool carousels and keeps ESC-to-exit.
- Tools Mystery Boxes are removed from Presentation Mode only.
- Removed the actual divider-line sources: Quarter Days Remaining border-top and Mystery Box strip border-top.
- FI Forecast Date now includes the weekday, e.g. TUESDAY · 09/15/2026.
- Existing V6.2.4 recovery fixes and V3 storage compatibility are preserved.

## V6.2.6 — Controlled UI Fixes
This release intentionally changes only the items confirmed still outstanding in the currently tested V6.2.5 build.

- Added FI STATUS as the main heading above FI Process / Current System Status / Next FI Task.
- Presentation Mode lower Status + Universal Tool Card carousels now stretch through all remaining height to the bottom frame.
- Shipping Center now displays the existing Shipping / Packing -> Shipping Notes field in a NOTES column.
- Added Source Notes to Customer Requirements -> Customer Source, matching STR Notes.
- Source Notes is persisted in the same tool record and is backward compatible with existing V3 browser data.
- No Command Center brain/calculation rules changed.

## V6.2.7 — Presentation Tool-Only Carousel
- Presentation Mode removes the left Status/Status Pages carousel completely.
- The Universal Tool Card carousel is now the only lower Presentation Mode panel.
- The tool carousel expands across the full available width and height.
- Presentation controls are simplified to Previous Tool / tool count / Tools Play-Pause / Next Tool / ESC to Exit.
- Normal Live Operations remains unchanged with both carousels.
- Existing quarter summary, progress bars, FI Status, Source Notes, Shipping Notes column, and V3 data compatibility are preserved.

## V6.2.8 — Presentation Tool Card Text Fit
- Preserves the V6.2.7 single enormous Universal Tool Card Presentation Mode.
- Prevents enlarged middle-column text from clipping/overlapping.
- Countdown, FI Status, Current System Status, Next FI Task and forecast text now wrap/scale within their sections.
- Long checklist/task text can use available card width instead of being cut off.
- No calculation, data-model, workflow, or Command Center brain changes.

## V6.2.9 — Middle Column Cleanup
- Removed the large section titles FI STATUS / FI CYCLE TIME / FI FORECAST.
- Renamed cyan FI PROCESS label to FI STATUS.
- Renamed cyan FI HANDOFF label to FI CYCLE TIME.
- Renamed cyan FI NEXT STEP label to FI FORECAST STEP.
- Removed unnecessary structural divider lines between the middle-column blocks.
- Preserved useful inset row separators and all existing data/workflow behavior.
- Presentation Mode keeps the V6.2.8 tool-only full-screen layout and text-fit corrections.

## V6.3.1 — Presentation Card Fit / Spacing
- Presentation Mode keeps the V6.2.9 single enormous Universal Tool Card layout.
- Rebalanced left, middle, and right column spacing so card content fits without clipping.
- Reduced presentation-only typography where necessary instead of changing normal Live Operations.
- Long Next FI Task and FI Forecast Step text can wrap cleanly.
- Right-column checklist/task text can wrap instead of being clipped.
- Customer Source badge is allowed to wrap its label to two lines so the status has more room.
- Tool photo, badge block, metadata rows, cycle rows, and forecast area were compacted only in Presentation Mode.
- No data, workflow, calculation, or Command Center brain changes.

## V6.3.2 — Cycle Label / Middle Spacing Fix
- Corrects the actual current Universal Tool Card renderer so FI HANDOFF now displays as FI CYCLE TIME START.
- Restores the agreed cyan labels FI STATUS and FI FORECAST STEP.
- Replaces fixed middle-column row heights with natural sections and equal spacing between Ship Countdown, FI Status, FI Cycle Time, and FI Forecast.
- Prevents the forecast date from creating an oversized gap by keeping it inside the FI Forecast block.
- Preserves the V6.3.1 Morning Meeting history viewer/close-button fixes.
- No data, workflow, calculation, or Command Center brain changes.

## V6.3.3 — Universal Card / Meeting History Polish
- Added the two missing middle-column divider lines:
  - Next FI Task -> FI Cycle Time Start
  - Target Cycle Time -> FI Forecast Step
- Divides the middle column into four equal-height bands so divider spacing is even.
- Presentation Mode uses the same three individually boxed Universal Tool Card columns as Live Operations.
- Customer Source badge label can wrap to two lines to preserve room for its status.
- Meeting History close X is anchored to the popup upper-right and remains visible while content scrolls.
- Applies the same meeting popup behavior from both Status Center and Meeting Center.
- No data model, workflow, calculation, alert, or Command Center brain logic changed.
