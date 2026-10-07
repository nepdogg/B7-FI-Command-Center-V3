B7 FI COMMAND CENTER — V11.5.0 LAYOUT ARCHITECTURE RECOVERY

WHY V11.4.0 DID NOT SHOW THE EXPECTED CHANGES
The dedicated Tool Edit renderer bypassed the section-workspace enhancement, so the code existed but was never invoked when a tool was opened. The old CSS bundle also still contained many later legacy geometry overrides, so fixes earlier in the cascade could be overwritten again.

V11.5.0 CORRECTIONS
- Adds one final last-loaded layout authority stylesheet.
- Header + Center Nav + 3 Status Bars + Page Nav are now one fixed global shell on normal pages.
- Body offset is measured from the real shell height with ResizeObserver, including browser zoom changes.
- Tool Edit now explicitly invokes the section workspace after direct rendering.
- Priority/identity outer bubble is locked to the same dimensions for every tool at a given viewport.
- Tool Status cyan border is around the entire bar; the message text has no border.
- Tool Presentation Mode reserves the bottom nav before sizing the card.
- Quarter Summary Presentation Mode fills the viewport and makes the quarter switchbar the final row.
- Footer remains non-sticky.

TEST: scroll normal pages; 80/90/100/110/125/150% zoom; Tool Edit section nav; Tool Presentation; Quarter Summary Presentation; change tools and compare priority/status geometry.
