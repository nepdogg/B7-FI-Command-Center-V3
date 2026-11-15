B7 FI COMMAND CENTER V13.0.40 — DESIGN STABILIZATION TEST
Based on V13.0.39. Full app and Microsoft List code retained.

IMPLEMENTED:
- LIGHTS OFF now swaps the existing tower image for the actual unlit Not-in-FI tower asset, without changing status or badge. Pulse/Steady restore the original image.
- Stronger CSS selectors for mini Raiders shield user badges using the supplied asset.
- Four-part Raiders footer layout styling and readable text.
- Broad silver progress fill normalization, dropdown hover contrast, and presentation chrome/nav styling.

NOT COMPLETE / NOT VERIFIED:
- Complete visual reproduction of the reference design on all pages.
- All Tools three compact right-column cards.
- Presentation card scaling/clipping at all resolutions.
- Native select menus (browser-drawn), multi-user sync and cycle time persistence.
- All menu event handling and all UI controls on the work environment.

TEST: Extract entire ZIP; hard-refresh Edge. Verify V13.0.40. Test lighting OFF/PULSE, user shields, footer, dropdowns, and three presentation modes at 100% zoom. Do not treat as design locked or production verified.
