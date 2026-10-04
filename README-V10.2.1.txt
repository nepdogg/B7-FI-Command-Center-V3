B7 FI COMMAND CENTER — V10.2.1 STABILIZATION LOCK TEST
Build: 20261003-V10.2.1-STABILIZATION-LOCK

This build is based directly on V10.2.0 and targets the repeated runtime geometry defects reported during FI monitor testing.

CHANGES
- Header rebuilt as a three-cell responsive grid. Center is reserved for the 2x2 user grids + KLA + 2x2 user grids; the red KLA/presence border tightly wraps that content.
- Left/right header titles dynamically shrink instead of clipping.
- Main/Page navigation retain one 44px height contract; Page Navigation continues to use runtime label-aware width allocation.
- Live Operations Tool Status Bar is locked to the same canonical DOM structure used by Presentation Mode, with forced full-width message area and visible two-line message text.
- Tool Status Bar retains Priority/Leads + UTID/model/type + signal/message + View Details.
- Top three middle-column cards now use large responsive typography and vertical centering to fill their bubbles.
- Normal-mode progress tracks increased to 30px. Presentation tracks increased to 16px while preserving full-card fit.
- Normal Live Operations viewport sizing now uses the measured --sticky-shell-height instead of the old fixed shell estimate, to improve 100/90/80/75/67% browser zoom reflow.
- Normal pages remain frameless; Presentation Mode retains its intentional enclosing frame.
- Existing quarter lifecycle, carryover, Tools-page, archive, Microsoft List, and workflow logic retained.

PRIMARY TESTS
1. Live Operations at 100%, 90%, 80%, 75%, and 67% browser zoom. Confirm the card uses added viewport height rather than leaving a large dead area.
2. Compare Tool Status Bar in Live Operations vs Presentation Mode for the same tool. Confirm full message, identity, icon, and View Details are visible.
3. Check the top three middle cards. Primary messages should be substantially larger and use the bubble space.
4. Check all right-column progress cards. Tracks should be visibly taller (30px normal mode).
5. Check header at normal and reduced zoom. KLA/user area must remain contained; left/right titles must not clip.
6. Visit each Center and verify Page Navigation labels and right-most buttons remain visible.

NOTE
This package contains one consolidated README/update file only.
