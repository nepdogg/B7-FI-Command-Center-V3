# B7 FI Command Center V3.6.0 — Production Stability

Build: `20260827-V3.4-PRODUCTION-STABILITY`

This build is the production-stability pass created from V3.3.0 after the 8/27/2026 real-work testing. It keeps the V3 interface and center structure, but changes the core workflow so **Tool Status is the highest-precedence operational state**.

## Critical production rules

- **Tool Status is authoritative:** Waiting for FI / In FI / Packing / Shipped.
- FI Checklist, Micro Target, Lead/Admin Step, and Packing/Shipping handoffs are independent progress records. They do not automatically change Tool Status.
- A tool may be moved to **Packing at any FI checklist** when management approves packing/shipping.
- A tool may be corrected from Shipped back to Packing (or any other valid active state); counts, family progress, quarter shipping progress, Shipping Center state, and mystery-box unlocks recalculate from Tool Status.
- Reaching `FI 200 Final Pre-Pack and QA` no longer forces Packing.
- Completing Subsystems / Accessories / Cables / MST / IS no longer forces Shipped.
- A Shipped tool can retain an incomplete FI percentage if FI work was waived/skipped.

## Production start / test data

Administration Center now includes a dedicated mode manager:

- **START / RETURN TO PRODUCTION** — creates a clean Production database.
- **0 TOOL TEST**
- **1 TOOL TEST**
- **SCENARIO TEST**
- **BACKUP COMMAND CENTER** — exports the current complete V3.4 JSON data.
- **RESTORE BACKUP** — imports a V3 JSON backup.
- **MASTER RESET** — double-confirmed total reset to an empty Production database.

A fresh install with no existing V3 local data starts in **PRODUCTION** rather than automatically loading scenario data.

## Add Tool / Tool editing

`Update Center → CY26Q3 Tools → ADD TOOL` is the production entry point for manually building the quarter from scratch.

The full Tool Editor includes Alias, quarter, family/code name, model, Tool Status, sales order, customer, cleanroom/bay, driver, ship date, software, lamp, FI checklist, Micro Target, Lead/Admin task, Latest Status, notes, Customer Source, STR, shipping details, NCs, escalations, and POA fields.

## Daily / Morning Status update

The quick all-tools editor now includes:

- Alias
- Quarter
- Tool Status
- FI Checklist
- Micro Target
- Customer
- Driver
- Ship Date
- Lead/Admin current step (percentage calculated automatically)
- Cleanroom / Bay
- SW Version
- Process: Full Process / Reduced Process
- Lamp Hours / Lamp State
- Escalated NC day counts
- Packing handoffs: Subsystems / Accessories / Cables / MST / IS
- Latest Status
- Notes

## Morning Status email-format output

The Status Center output now follows the real daily status email structure:

1. First line: UTID, cleanroom/bay, model-family, SW version, FI checklist + checklist name, customer, ship date, Lamp Hours, Reduced Process if applicable, and active Escalated NC + Day count.
2. Second line: Latest Status.
3. Every active NC appears one at a time on its own line below Latest Status.
4. POA displays below its related NC when present.
5. Lamp state is shown only when the lamp is **OFF**. Normal ON state is omitted.
6. Dashboard-only tags such as MICRO / In FI / Quarter are not shown in the email-format body.

## Shipping Center

The main Shipping Center is simplified. Packing tools show one **UPDATE HANDOFFS** button instead of five inline controls. The popup contains date-picker fields for:

- Subsystems
- Accessories
- Cables
- MST
- IS
- Shipping Notes

Shipping handoffs are available only while Tool Status = Packing.

## Standard forms / popups

Browser `prompt()` dialogs have been removed. Focused changes now use Command Center modal forms with dropdowns and date pickers whenever the choice is known.

Updated examples include:

- Add Action
- Add Reference
- Add Tool to Archive
- Update Shipping Handoffs

Large workflows such as Daily Update and Full Tool Edit remain full-page interfaces.

## Mystery boxes

Administration Center now has per-family mystery configuration for Regera, Celestiq, Targa, Panamera, Boxster, and Macan:

- Popup title
- Headline
- Message line 1
- Message line 2
- Raiders JPG or Raiders GIF media
- Show/hide completion count

The redundant `MYSTERY BOX UNLOCKED` line and bottom Close button were removed. The popup closes using:

- top-right **X**
- **Escape** key
- clicking the dark backdrop

Mystery boxes unlock only when every active tool in that family has Tool Status = Shipped, and relock if a tool is corrected back to another state.

## Visual stability

- Centered defined Command Center width restored.
- Main navigation remains evenly distributed and no longer intentionally switches to a horizontal-scroll layout at laptop width.
- Page navigation is compressed to fit rather than showing scrollbars.
- Header title sizes use responsive clamping so long Center titles stay inside their colored header zone.
- KLA logo remains enlarged but constrained to the center zone.
- Short pages retain a consistent minimum body height so the footer does not jump directly under a small search/archive panel.
- Center accent colors, body borders, tool-status colors, and footer accent behavior remain enabled.

## Recommended first real-production test

1. Administration Center → **MASTER RESET**.
2. Confirm `CURRENT MODE: PRODUCTION`.
3. Update Center → CY26Q3 Tools → **ADD TOOL**.
4. Add one real tool and save it.
5. Click its live tool card and verify the Full Tool Editor opens and saves.
6. Add the remaining quarter tools.
7. Use Daily Update to change one tool from In FI → Packing while leaving it on an early FI checklist.
8. Verify Shipping Center activates the handoff progress while FI % stays based on its actual checklist.
9. Change it Packing → Shipped and verify family/quarter counts and mystery unlock logic.
10. Change it Shipped → Packing and verify the dashboard rolls back correctly and the mystery relocks.
11. Create a new V3.4 backup after the real quarter data is entered.


## V3.6.0 Operational Checklists + Lead/Admin Workload
- Provisional ordered Lead/Admin master checklist per tool.
- Per-task states: Not Started, In Progress, Complete, N/A, Requirement TBD.
- Automatic Lead/Admin percentage and remaining-task count.
- Live carousel shows the next five unresolved tasks and opens the complete checklist.
- New automatic Operational Focus panel summarizes fleet attention items.
- Meeting navigation simplified; FI Operations meeting removed.
- Export moved conceptually to Administration as Export Backup.
- Archive detail includes restore-to-current-quarter control.
- Reference rows are clickable.


## V3.6.0 additions
- Reorganized Live Operations carousel: code name centered above tool photo; UTID and static tool fields under photo.
- Shorter progress bars free space for live work panels.
- FI CHECKLISTS panel shows completed count, incomplete count, and currently Open/In Progress checklists.
- Full per-tool FI checklist matrix with Not Started / Open / In Progress / Complete / N/A pull-down status.
- Visual FI checklist status is intentionally independent from the Official FI Checklist.
- Lead/Admin panel continues to show the next five unresolved tasks with full checklist access.
- Existing V3.5 operational focus, meeting/action safeguards, archive restore, backup controls, and report work are retained.
