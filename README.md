# B7 FI Command Center V5.6.7

Universal Card / Navigation / Tool Jump refinement.

Key changes:
- Restores Cycle Time Center as a top-level center.
- Operations page navigation and Live Operations controls share one compact single-row bar.
- Universal Tool Card is no longer globally clickable; only the tool photo and its ↗ arrow open Tool Editor.
- Middle status column spacing is rebalanced into Shipping/FI Process, FI Cycle Time, and FI Forecast zones.
- Tool pages add a sticky dynamic Tool Type jump row.
- Tool family dividers and Total / Waiting / In FI / Packing / Shipped status boxes are larger and easier to see while scrolling.
- Existing localStorage key remains b7fi-command-center-v3.


## V5.6.7
- Moved DATA environment indicator from page navigation to footer.
- Standardized one-line page navigation sizing and removed special current-quarter green state.
- Removed Tools/date page heading above family jump navigation.
- Locked Live Operations and Tools pages to the same Universal Tool Card geometry and renderer.
- Rebuilt the middle card column into four protected sections to prevent overlap/clipping.
- Protected UTID/model header from the top-right Tool Editor arrow.


V5.6.7 regression locks:
- Operations labels restored: UPDATE COMMAND CENTER and TOOL ARCHIVE.
- ALL ACTIVE TOOLS removed from Operations page navigation.
- Carousel name stacked above PLAY/PAUSE in highlighted controls.
- Footer DATA status moved beside Administration Center.
- Universal Tool Card middle column enlarged/rebalanced; FI Process status emphasized; forecast selector stacked with larger forecast date.
- Page-navigation/action cells normalized to full-height highlighted controls with no right-edge gap.
