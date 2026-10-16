B7 FI COMMAND CENTER V11.17.40 — GEOMETRY RECOVERY TEST
=======================================================
Based on V11.17.39. This is a targeted CSS recovery build, NOT a verified production release.

CHANGES
- Removed the duplicate header offset (one stylesheet set margin-top while another
  separately set padding-top). The body now uses one measured header clearance.
- Replaced fixed/percentage-clipped normal-mode badge grid heights with 12 rows
  that can grow to contain their text. Retained all 30 existing badges and data.
- Made the normal Live Operations left identity column grow with badge content.
- Kept Tools Center family sections full-width and grouped cards inside them.
- Left Presentation Mode geometry, Microsoft List authentication, storage and
  tool update logic unchanged.
- Updated visible version and JS version to V11.17.40.

TESTING
1. BACK UP V11.17.39 and any production data. Unzip into a NEW directory.
2. Test in Local Mode with test data before trying any connected production use.
3. At browser zoom 67%, 80%, 100%, 125%: inspect top of header, all badges,
   left column identity rows, tool card bottom, and Tools Center group layout.
4. Compare the same UTID in Live Operations, Tools Center and Presentation Mode.
5. Do not reset/import/clear Microsoft List data as part of these layout tests.
6. Report exact zoom and view if any text still clips. Browser zoom intentionally
   changes the physical size of all content; the goal is no clipping/overlap,
   not identical physical text size at every zoom.

NOT YET VERIFIED
No browser-based visual regression tests or coworker authentication tests were
run in this environment. The new stylesheet has not been verified on your monitor.
The major Brain, Shipping/Priority report builders, and other previously listed
features are NOT included in this targeted geometry patch.
