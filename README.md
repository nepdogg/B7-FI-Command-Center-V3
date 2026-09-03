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
