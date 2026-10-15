B7 FI COMMAND CENTER V11.17.32 - BADGE STYLESHEET LOAD FIX

ROOT CAUSE FOUND: V11.17.31 index.html referenced css/badge-geometry-v11.17.31.css but the actual ZIP contained css/badge-grid-v11.17.31.css. The browser therefore did not load the new badge layout rules.

FIX: index.html now references the existing css/badge-grid-v11.17.31.css with an updated cache-busting version. No badge editing/saving code changed.

VALIDATION: Confirmed all linked local CSS files exist. Chromium isolated fixture test with the actual three app CSS files measured 30 badges per card, standard/full-width row height 44px, row gap 4px, no overflow in test content. Browser navigation to the full application was blocked in this environment, so full app UI and Microsoft List synchronization remain unverified.

TEST: Unzip to a NEW folder, start app, verify V11.17.32 in header, open Live Operations/Tools/Presentation and compare same tool. Inspect Network tab to ensure badge-grid-v11.17.31.css loads with HTTP 200. Save badge, reload and verify persistence. Do not delete production tool data.

All other behavior is inherited from V11.17.31.
