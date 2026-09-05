# B7 FI Command Center V6.5.20

## 9/3/26 late field-test update
- Presentation Mode left identity zone enlarged: larger tool photo, identity text moved farther right, no wasted gap.
- Driver bar is directly editable by clicking it in Presentation Mode and regular Universal Tool Cards.
- Priority badge is directly editable in Presentation Mode: Lead/Manager rank can be changed and Tool Card priority source can be switched; Command Center rank remains brain-controlled.
- Powered Down badge remains present and is made more legible when inactive.
- Structured fields now use a visible hybrid selection + manual-entry control: predefined choices, N/A, and free typing are all available while preserving saved custom values.
- Existing b7fi-command-center-v3 production data compatibility is preserved.

# B7 FI Command Center V6.5.18

## 9/3/26 field-test update
- Universal Tool Card identity zone cleaned up: tool photo stays left; UTID / type / model / customer / Sales Order stay right.
- Removed the visible inner border boxes around the tool photo and identity information.
- Presentation Mode gives the identity panel more width and caps text sizing so UTID/customer/model/type/SO no longer clip.
- Direct manual badge editing is explicitly enabled in Presentation Mode with the same badge-specific popup workflow used in Live Operations.
- Automatic Lamp and Request Lamp badges remain read-only brain outputs.
- Existing b7fi-command-center-v3 production data compatibility is preserved.

# B7 FI Command Center V6.5.17

## V6.5.17 field-test changes
- Corrected Universal Tool Card identity zone: tool photo is locked on the left and UTID / tool type / model / customer / sales order are locked on the right.
- Added direct badge editing from the Universal Tool Card. Click any manual operational badge to open that badge's own valid status choices directly, including in Presentation Mode.
- Reduced Process is also directly editable from its badge.
- Automatic Lamp Hours and Request Lamp badges remain read-only/brain-driven and cannot be manually changed.
- Existing Tool Badge Control is preserved as a fallback.
- Preserves `b7fi-command-center-v3` browser data compatibility.

# B7 FI Command Center V6.5.16

9/3/26 field-test build.

Changes in V6.5.16:
- Added VERIFY LASER badge: default red; V3 Laser Connected green; Need V3 Laser red.
- Added REQUEST CAL CHIPS badge: default red; Cal Chips Requested green.
- Added VERIFY THERMAL RACK badge: default red; Gen 2 Thermal Rack / Gen 3 Thermal Rack green and display the selected rack generation.
- Expanded the Universal Tool Card indicator matrix to 2 x 14 while keeping LAMP and REQUEST LAMP together on the final row.
- Added the full 29-person FI driver roster plus Unassigned. Driver fields remain editable and can hold multiple names separated by /.
- Customer and all other short structured fields now use editable pull-down suggestions: select a known value or type a manual value.
- Reasserted the Tools page two-card desktop view.
- Rebuilt TOOL TYPE as a dynamic page-action dropdown generated from the tool types actually visible on the current Tools page; viewport positioning prevents clipping and each selection scrolls to that family section.
- Presentation Mode Tool control now explicitly switches between PLAY and PAUSE with matching text size.
- Reasserted the universal popup convention: one X pinned to the extreme upper-right while popup content scrolls.
- Preserves b7fi-command-center-v3 localStorage compatibility and existing production records.

# B7 FI Command Center V6.5.6

Field-test correction build based on V6.5.4.

Changes:
- Final Universal Tool Card left-column order: horizontal Priority bar at top of left column, Driver bar at bottom of tool photo, Reduced Process immediately above 2x12 badge grid.
- Presentation Mode live-status boxes and navigation typography enlarged.
- Driver can be updated from Tool Badge Control.
- Mystery Boxes forced into one responsive row.
- Original Quarter is editable; Current Quarter remains separately editable. Quarter Movement is derived from Original vs Current so new next-quarter tools are not counted as pushouts.
- Presentation Forecast modal controls are explicitly interactive.
- Site-wide modal convention: persistent X in upper-right corner for closable popups.
- Preserves b7fi-command-center-v3 localStorage compatibility.


V6.5.6 TOOL CARD SAMPLE LOCK
- Universal Tool Card left column now follows the approved sample exactly: horizontal Priority bar, identity, tool photo, horizontal Driver bar at photo bottom, Reduced Process row, then the 2x12 badge matrix.
- Shared explicit grid placement prevents Priority/Driver/Reduced Process from drifting or consuming the wrong rows in Live Operations, Tools pages, or Presentation Mode.
- Presentation summary-box typography was moderated while the actual Presentation tool-navigation controls were enlarged for wallboard readability.
- Removed the redundant TOOLS MYSTERY BOXES heading; responsive one-row mystery boxes remain.
- Existing V3 storage/data compatibility and V6.5.5 logic are preserved.


V6.5.7 FIELD TEST POLISH
- Universal Tool Card no longer opens from the photo/card surface; only the upper-right arrow opens Tool Edit.
- Priority bar shortened to protect the open-arrow area and enlarged for readability.
- Driver banner now uses one same-size DRIVER: NAME line.
- Added spacing between Driver and Reduced Process.
- 2x12 operational badge rows forced to equal height.
- Priority Center source helper sentence removed and comparison rows compacted.
- V3 storage key/data compatibility unchanged.

V6.5.9 APPROVED UNIVERSAL TOOL CARD POLISH
- Removed the upper-right open-tool arrow from the shared Universal Tool Card.
- Priority bar now uses the full top width in Live Operations, Tools, Presentation, and Screenshot contexts.
- Tool image is slightly reduced/repositioned upward so the full bottom of the equipment remains visible above Driver.
- Customer/Sales Order identity layout widened so long Sales Orders no longer truncate under normal card widths.
- Tools-page family navigation is reinforced as a sticky, always-visible, one-row responsive jump bar.
- Preserves the approved Driver / Reduced Process / 2x12 badge layout and all V3 production data compatibility.


V6.5.9 field-test changes:
- Presentation carousel follows selected priority source in ascending priority order.
- Priority Difference column widened and uses MATCH / CC N HIGHER / CC N LOWER wording.
- Priority edit uses 1..N dropdown rankings and reorders/renumbers automatically.
- Live status box renamed UPDATED CY26Q3 TOOLS.
- Tool photo is the only edit navigation target on Live Operations and Tools pages; disabled in Presentation/Screenshot.
- Presentation Driver-to-Reduced-Process spacing matched to normal card.
- Forecast Target popup uses the universal top-right X only.

## V6.5.12 — Shipped Tool Lifecycle Lock
- Shipped tools remain visible on Operations Center > Current Tools / Tools family pages until explicitly archived.
- Shipped tools are removed from Live Operations tool carousel and Presentation Mode.
- Shipped tools are removed from Lead/Manager and Command Center priority rankings and no longer receive a Priority badge.
- Shipped tools are removed from Morning/Daily active status, Cycle Time, active Shipping, Update Command Center, and active tool search results.
- Quarter summary still counts shipped tools for shipped totals and quarter shipping progress.
- Archived tools remain visible only in Tool Archive.
- Existing b7fi-command-center-v3 storage compatibility is preserved.

## V6.5.12 test updates
- Tool-family navigation on the Operations Center Tools page is now fixed below the main Command Center shell during normal scrolling, so BOXSTER / CELESTIQ / MACAN / PANAMERA / REGERA / TARGA / ZEPHYR remain available at all times.
- The final reserved Tool Card badge is now the automatic REQUEST LAMP badge, immediately to the right of the automatic Lamp badge.
- REQUEST LAMP is off normally, turns red when the Lamp badge first reaches the yellow warning range (50 hours remaining), remains latched through the red swap-now range, and clears only when lamp hours are reset to 0 after the lamp swap.
- REQUEST LAMP is brain-derived and is not exposed as a manual Tool Badge Control selection.
- Existing V3 localStorage compatibility and shipped-tool lifecycle rules are preserved.


## V6.5.12 — Tool Type Pagebar Menu
- Removed the full-width floating Tool Type navigation strip from the Tools page.
- Added a compact TOOL TYPE control directly in the Operations page navigation bar.
- Hovering or focusing/clicking TOOL TYPE opens the available tool families for the selected quarter.
- Selecting a family jumps directly to that family section without consuming permanent vertical space.
- The menu remains one-row friendly and is hidden outside the Current Tools page.
- Existing V3 localStorage key and production data compatibility are unchanged.


## V6.5.14 — Tool Type Action Menu + Presentation Carousel Control
- Moved TOOL TYPE out of the left page-navigation section and into the right Page Actions section on Current Tools.
- TOOL TYPE now opens a vertical tool-family submenu without adding a second navigation row.
- The separate floating family strip remains removed.
- Presentation carousel toggle now renders TOOLS and PLAY/PAUSE at the same font size and weight with stable button geometry.
- Preserves V3 localStorage key/data compatibility and all V6.5.12 lifecycle/brain behavior.


V6.5.14 FIELD TEST UPDATES
- TOOL TYPE is a working dynamic Page Actions dropdown generated from tool families actually visible on the current Tools page.
- TOOL TYPE supports click/hover and jumps to the selected family section without adding a navigation row.
- Universal popup convention: one close X at the upper-right of the popup and kept visible while popup content scrolls.
- Structured editable text fields now expose saved-value pull-down suggestions while retaining direct manual text entry. Existing constrained workflow/status fields remain dropdown selections to protect Command Center Brain logic.


## V6.5.16 — Left Column 2x14 Redesign
- Rebuilt the Universal Tool Card left column from the 9/3 hand sketch.
- Priority remains a full-width top bar.
- Tool photo and identity now share one horizontal section, approximately 50/50.
- Identity stack shows UTID, tool type, model, customer, and sales order beside the photo.
- Driver is now its own full-width bar below the photo/identity section and supports multiple names.
- Reduced Process remains its own full-width badge below Driver.
- Operational badges remain a fixed 2-column x 14-row matrix (28 positions).
- Current 27 operational badges use 27 positions; one position remains reserved for a future badge.
- Lamp and Request Lamp remain paired on the final row.
- The same left-column geometry is used on Live Operations, Tools, and Presentation Mode.


## V6.5.20 field-test changes
- Removed tool photo from Universal Tool Card left column.
- Added full-width directly editable UTID, Tool Type, Model, Customer, and Sales Order identity bars.
- Identity bars support known selections, N/A, and manual entry; Presentation Mode editing stays in place.
- Removed redundant Tool Badge Control from the Universal Tool Card.
- Added centered KLA+ branding in the freed lower-right card area.
- Preserved direct badge, Driver, Reduced Process, and Priority editing plus the 2x14 operational badge matrix.


## V6.5.21 field-test changes
- Rebound all Universal Tool Card direct-edit controls at render time so Presentation Mode uses the exact same direct-edit path as Live Operations.
- Priority, Driver, identity bars, Reduced Process, and every manual operational badge are directly editable in Presentation Mode; automatic Lamp and Request Lamp remain read-only.
- Normalized the left badge matrix to a fixed 2 x 14 layout with equal row heights and equal gaps so badges do not overlap or clip.
- Added a Presentation-only true black wallboard theme to improve text/status contrast and blend the KLA+ logo background into the card.
- Removed the divider line above the KLA+ logo.
- Preserved b7fi-command-center-v3 production storage compatibility.


## V6.5.22 — System Wafers Final Badge
- Filled the final open 2x14 badge slot with SYSTEM WAFERS.
- Default SYSTEM WAFERS state is red.
- REQUEST SYSTEM WAFERS is yellow/attention.
- SYSTEM WAFER KIT ISSUED is green/complete.
- SYSTEM WAFERS is directly editable anywhere manual badges are editable, including Presentation Mode.
- The badge matrix is now fully populated: 28 operational badges in a 2 x 14 grid, plus the separate Reduced Process badge.
- Preserved b7fi-command-center-v3 production storage compatibility.


## V6.5.24 — Presentation KLA Fit Fix
- Keeps the black Presentation Mode wallboard theme.
- Reserves a dedicated bottom-right KLA logo row in Presentation Mode.
- Uses contain-fit sizing so the KLA logo remains fully visible and centered instead of being cropped.
- Keeps the divider above the KLA logo removed.
- Normal Live Operations / Tools card KLA sizing remains unchanged.
- Preserves the V6.5.22 System Wafers final badge and existing `b7fi-command-center-v3` data compatibility.


## V6.5.25 — Presentation Quick Edit / Current Micro Schedule
- Presentation quick-edit popups now use visible pull-down menus for known selections, with manual entry retained where appropriate.
- Driver quick edit now provides a visible saved-driver pull-down plus manual multi-driver entry.
- Renamed UPDATED TOOL STATUS to UPDATE TOOL STATUS.
- Replaced the middle-column FI handoff/cycle-start section with CURRENT MICRO SCHEDULE directly below CURRENT FI TASK.
- Current Micro Schedule is directly editable; the right-column Micro Schedule remains a progress visualization.
- Removed the Presentation Mode phantom gap above Driver and explicitly keeps UPDATE TOOL STATUS visible in the left-column stack.
- Preserves localStorage key b7fi-command-center-v3 and existing production-data compatibility.


## V6.5.28 — Unified Interactive Brain Card
- Unified legacy Tool Card rendering onto the Universal Tool Card path.
- FI Testing and Micro Schedule progress blocks now open their checklist quick-update controls.
- Current Cycle Time opens FI Handoff / Cycle Start date.
- Target Cycle Time opens the management target editor.
- Lead/Admin progress opens the full admin task list.
- Customer Source and STR progress open workflow state/date editors.
- Packing/Shipping progress opens milestone controls.
- FI Status supports Brain AUTO plus visible manual override.
- Removed redundant middle-column Current FI Task and Current Micro Schedule sections.
- Added Live System Status / open NC summary in the recovered middle-column space.
- Preserves b7fi-command-center-v3 browser data compatibility.


## V6.5.28 — One Universal Tool Card + Live Brain Control
- One fixed Tool Card skeleton everywhere; Priority always renders with PRIORITY TBD placeholder when unranked.
- FI Forecast moved to the interactive progress area; progress reflects forecast checklist position and shows forecast date below.
- Middle column expanded for official Latest Status, actual open NC/escalation records, and separate Lead Notes/Reminders.
- Live status reads the tool record's authoritative latestStatus/ncs fields used by Status Center; closed/completed/resolved NCs are excluded.
- Lead Notes are directly editable without replacing official Latest Status.
- Existing V3 localStorage key/data compatibility preserved.


## V6.5.28 — Universal Tool Card finalization / quick-edit audit
- Presentation Play/Pause control now says only PLAY or PAUSE.
- Live System Status uses the authoritative Latest Status field; structured open NCs are read separately from each tool's NC / Escalations / POA records.
- Live System Status area expanded; Lead Notes / Reminders moved lower; internal card scrollbars removed.
- FI Forecast progress heading now includes the forecast date; selected checklist is shown below the bar.
- Final FI checklist canonicalized to FI_200 — Final QA and PrePack with compatibility mapping from the previous name.
- Tool Card quick-edit popups standardized: one field/control per simple update, history-backed datalist where useful, one Badge Status selector for status badges.
- Customer and Sales Order quick editors derive missing-data badges automatically from the single authoritative field.
- Existing b7fi-command-center-v3 localStorage compatibility retained.


## V6.5.32 — Universal Tool Card final layout parity
- FI Forecast heading keeps the forecast date on one line; selected checklist remains below the progress bar.
- Current Cycle Time is now CYCLE TIME. The progress bar tracks elapsed time while the detail line shows only FI handoff start date and Brain cycle status.
- Driver and Reduced Process use matched full-width spacing.
- Live System Status text is smaller and the Live Status / Lead Notes areas consume the full middle-column remainder with no card scrollbars.
- Presentation Mode removes connector-line framing and uses the same 2×14 badge matrix spacing and three-column geometry as Live Operations.
- Existing localStorage key `b7fi-command-center-v3` is unchanged.


## V6.5.32
- Presentation Mode now uses a fixed 1920×1080 internal canvas scaled uniformly to fit any monitor, so the same wallboard/card composition appears on laptop and large displays.
- Tool Edit fields were simplified to one control per field. Structured fields use one select; free/history-backed fields use one editable datalist input. Redundant Customer Status and Sales Order Status controls were removed and are now derived automatically.
- Driver and Reduced Process spacing corrected; FI Forecast heading constrained to one line; Cycle Time shows elapsed days at the top-right and status only below the bar.
- KLA branding added to the bottom of the middle UTC column without changing Brain data.


V6.5.32: Final UTC control/layout cleanup: target wording, forecast one-line fit, Driver/Reduced spacing, Lead Notes spacing, and true single-select structured quick-edit/Tool Edit controls with ENTER NEW support.


## V6.5.32
- Live System Status now uses the same Latest Status + open NC/POA line composition as Status Center/Daily Status.
- Driver and Reduced Process spacing normalized to the operational badge gap.
- FI Forecast heading/date reduced to fit on one line with percentage.
- Lead Notes/Reminders anchored directly below its divider.


## V6.5.33 — Universal Tool Card CSS consolidation
- Consolidated the final Universal Tool Card layout authority instead of stacking another conflicting spacing patch.
- Driver and Reduced Process are now wrapped in one shared two-row badge container with the same 4px rhythm as the operational badge matrix.
- FI Forecast reserves a fixed percentage column and uses a smaller one-line date label so weekday/date/percentage cannot collide.
- Lead Notes / Reminders starts directly under its divider while Live System Status and Notes consume the available middle-column space above the KLA logo.
- Live System Status continues to use Latest Status plus the structured open NC/POA records from the same tool record used by Status Center.
- Presentation Mode keeps the same Universal Tool Card geometry and only scales the wallboard canvas.
- Production storage key remains b7fi-command-center-v3.

## V6.5.34 — Universal Tool Card structural parity fix
- Restored one authoritative left-column structure in Live Operations and Presentation Mode.
- Left column order is now Priority, identity bars, Driver, Reduced Process, full 2x14 badge matrix, then Update Tool Status.
- Driver and Reduced Process use the same fixed 4px vertical rhythm as the operational badge matrix.
- FI Forecast uses dedicated title/date and percentage cells so the percentage cannot overwrite the forecast date.
- Presentation Mode no longer has its own ordering for the UTC left column or badge matrix.
- Preserves `b7fi-command-center-v3` production data compatibility.


## V6.5.35 — Universal Tool Card renderer + FI Forecast correction
- Corrected the Universal Tool Card DOM order itself instead of relying on CSS reordering.
- Authoritative left-column order is Priority → UTID → Tool Type → Model → Customer → Sales Order → UPDATE TOOL STATUS → Driver → Reduced Process → 2×14 operational badges.
- Driver and Reduced Process remain two separate full-width rows with the same 4px gap used by the badge matrix.
- FI Forecast header uses separate title/date and percentage cells with a reserved percentage width so the date and percentage cannot overlap.
- Live Operations and Presentation Mode use the same card geometry; Presentation Mode only scales the completed card.
- Existing b7fi-command-center-v3 production data remains compatible.


## V6.5.41 — Universal Tool Card structural reset
- Rolled back from the V6.5.36 regression to the V6.5.35 data/feature base.
- Removed the Driver/Reduced Process wrapper from the Tool Card DOM so the source order is authoritative: Priority, identity, Update Tool Status, Driver, Reduced Process, badge matrix.
- Added one V6.5.41-scoped card layout block so legacy UTC CSS can no longer reorder these rows.
- Rebuilt FI Forecast header sizing with a dedicated percentage column and smaller single-line date text.
- Presentation Mode inherits the same card DOM/layout and only scales the completed card.
- Preserves localStorage key b7fi-command-center-v3.

## V6.5.41 — Universal Tool Card typography refinement
- Preserves the stabilized V6.5.37 Universal Tool Card structure.
- Enlarges Priority and Driver text without changing card geometry.
- Restores FI Forecast to readable one-line text while retaining a dedicated percentage column.
- Matches Lead Notes / Reminders typography to Live System Status.


## V6.5.41 — Presentation / Tool Card finalization
- Increased FI Forecast title/date and percentage readability in Presentation Mode without overlap.
- Rebalanced Live System Status and Lead Notes spacing close to dividers.
- Lamp Hours quick edit is directly bound in Presentation Mode.
- Presentation Play/Pause controls are text-only.
- Presentation exit now fully clears scale/transform/overflow state so normal layout returns without refresh.


## V6.5.41 — Presentation Black / Alias Progress Finalization
- Presentation Mode uses a true black wallboard background and removes inter-column connector lines.
- Presentation tool control reads PLAY TOOLS / PAUSE TOOLS.
- Tool alias personalizes FI Progress, Cycle Time, Customer Source, STR, and Packing / Shipping progress headings.
- FI Forecast uses a compact readable date label with a dedicated percentage column; full date remains available as hover text.
- Live System Status and Lead Notes / Reminders use equalized vertical space with tighter divider spacing.
- Header KLA band gains the same top/bottom border treatment as the footer.
- Existing localStorage key b7fi-command-center-v3 is unchanged.
