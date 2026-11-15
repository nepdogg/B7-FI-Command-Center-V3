B7 FI COMMAND CENTER V13.0.34 - VISUAL + NAVIGATION REPAIR TEST

Based on V13.0.33.

Changes:
- Larger graphics and text hierarchy for Live Operations middle column.
- Metallic black/silver progress cards and distinct progress icons.
- Silver progress fills regardless of tool tone.
- Dropdown menus use scrollable overlay, consistent silver-hover/black-text styling.
- Presentation border and bottom-nav visual alignment improvements.

NOT YET VERIFIED OR FIXED:
- Dropdown click/selection in live browser; Microsoft List data syncing.
- All Tools three-card layout; cycle-time persistence; shipped tool carousel logic.
- Pixel-perfect reference reproduction or complete all-page design lock.

TEST at 100 percent zoom, confirm menus and data before production deployment.


V13.0.35 - PULSATING SIGNAL TOWERS
- Replaced all six signal tower images with user-supplied originals.
- Added colored glow overlays aligned to the active lamp: red, yellow, green, blue, purple. Silver Not in FI remains unlit.
- Critical flashes twice; other statuses pulse at differing speeds.
- Added LIGHTS control: Pulsating / Steady / No added light animation. Persists locally in this browser via localStorage; does not alter tool status or Microsoft List.
- Respects reduced-motion accessibility settings.
- Existing layouts and Brain functionality otherwise unchanged.
- Browser visual verification required on the target monitors.
