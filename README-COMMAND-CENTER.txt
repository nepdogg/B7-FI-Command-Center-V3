B7 FI COMMAND CENTER — V7.6.24
Structural layout correction build.

Key fixes:
- Changes applied to the actual linked active stylesheet (v7.6.1-clean-prototype.css), not legacy app.css.
- Quarter Summary Presentation Mode uses one-screen viewport geometry with bottom navigation always visible and family rows filling remaining space.
- Normal Quarter Summary grows vertically so final tool-family rows are not clipped.
- Removed outer family-table border while retaining row/cell divisions.
- Presentation Universal Tool Cards locked to the approved three-column reference geometry.
- KLA/user presence area widened and unclipped at 100% browser zoom.
- Browser tab/header version synchronized to V7.6.24 with stylesheet cache bust.

Testing: use browser zoom 100%. Hard refresh once after replacing an older GitHub/local build.
