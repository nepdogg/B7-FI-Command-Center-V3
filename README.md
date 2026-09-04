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
