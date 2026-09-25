B7 FI COMMAND CENTER — V7.6.25
Updated: 09/24/2026

LATEST UPDATE
- Header center is now the Multi-User Connection Center.
- KLA connection/status has its own color-coded inner border: green connected, yellow connecting, red disconnected, cyan local.
- Multi-User Mode / List Connected moved from the footer to directly under the KLA logo.
- KLA center section is substantially wider; left/right title panels give up width first.
- User badges now display the FULL Microsoft display name instead of only the first token/surname fragment.
- Footer simplified to three sections: Administration Center | Command Center Activity | Last Sync.
- Command Center Activity receives the largest footer area.
- Added Administration Center control: IMPORT LOCAL PRODUCTION TO MULTI-USER.
- Production migration validates UTIDs, downloads one combined safety backup of Local Production + current Microsoft List, replaces shared rows, then reads back and verifies tool count/UTIDs.
- One Microsoft List row remains one physical tool.
- V7.6.24 proven two-laptop Add / Update / Delete synchronization behavior is preserved.

MIGRATION SAFETY
Run IMPORT LOCAL PRODUCTION TO MULTI-USER only from the browser/laptop that contains the authoritative real Local Production fleet. Do not delete the Local Production copy after migration. The migration creates a downloadable pre-migration backup before replacing the shared List dataset.

TEST AT WORK
1. Extract the ZIP and run START-COMMAND-CENTER.bat.
2. Test at 100% browser zoom.
3. Confirm full Microsoft display name appears in the header badge.
4. Confirm KLA status box reads MULTI-USER MODE (or MULTI-USER PRODUCTION) / LIST CONNECTED and is green when connected.
5. Confirm footer has exactly three visible sections.
6. Repeat two-laptop Add / Update / Delete sync test before importing real production data.
7. When ready, use Administration Center > IMPORT LOCAL PRODUCTION TO MULTI-USER from the laptop holding the real Local Production data.

------------------------------------------------------------
PRIOR BUILD NOTES / HISTORY
------------------------------------------------------------
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
