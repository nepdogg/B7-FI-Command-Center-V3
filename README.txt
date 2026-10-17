B7 FI Command Center V11.17.56 — Geometry Test

Based on V11.17.54; preserves V11.17.53 Microsoft List deletion changes and Quarter Graphs.

Changes: corrected actual c11-* card selectors, removed section frames, equalized badge row heights, let badges expand without clipping, responsive 3-to-1-column layout at high zoom, restored sticky header and non-sticky footer, corrected launcher version text.

Verification: ZIP integrity and JS syntax checked. Real browser visual behavior and two-laptop Microsoft List sync remain unverified. This is not a production-certified release.

Test: extract to a NEW folder, use its START-COMMAND-CENTER.bat, check 80/100/125/150% zoom and scrolling, compare badge heights, then test deletion using disposable records only. The launcher requires an IT-approved Python installation; no Python means the local server will not start.

Do not overwrite production data or existing installation.

V11.17.56 STRUCTURAL REPAIR
- Overrides the fractional fixed-height identity grid with a content-sized badge grid.
- Gives badges equal height per grid row and removes clipping constraints.
- Removes direct middle/right section outlines, keeping horizontal dividers.
- Restores sticky normal-page shell and normal document scrolling; footer is not sticky.
- Stacks columns at narrow CSS viewports rather than shrinking badges indefinitely.
- Preserves Microsoft List logic from V11.17.55; cross-device deletion still needs live verification.
- Browser/zoom behavior not verified in a real browser; ZIP and syntax checks are not rendering tests.
