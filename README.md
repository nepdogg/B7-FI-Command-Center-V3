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
