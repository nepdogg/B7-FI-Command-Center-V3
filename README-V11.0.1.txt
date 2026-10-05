B7 FI COMMAND CENTER V11.0.1 — NAVIGATION + TOOLS PRIORITY IDENTITY

This build replaces the Live Operations / Presentation Tool Card presentation layer with a new c11 component namespace. Historical v9/v10 card geometry rules cannot select the new card.

KEY FIXES
- Normal Live Operations: left column is intrinsic master height; middle and right stretch to the same bottom.
- Middle column: exactly 6 equal sections.
- Right column: exactly 9 equal sections including Overall Tool Progress.
- Presentation Mode: independent viewport-fit 3-column layout, 6 middle rows / 9 right rows, no artificial badge gaps.
- Header: 35/30/35 geometry with equal section heights.
- Page navigation: one-line flexible layout; quarter summary/tool controls and actions no longer overlap.
- Priority / Tool Status bar remains structurally above all three card columns.
- Existing application data/workflow logic, badges, FI calculations, shipping, quarter lifecycle, editors, Microsoft List code and other centers are preserved.

TEST ORDER
1. Live Operations at 100% browser zoom. Scroll to the bottom of the card and verify all 3 columns share one bottom edge.
2. Verify all 6 middle sections are equal height.
3. Verify all 9 right sections fill the full column and Overall Tool Progress is the ninth row.
4. Enter Presentation Mode and verify the entire card fits between the top intelligence bar and bottom presentation navigation.
5. Verify page navigation is one line and current/previous quarter Summary/Tools controls remain accessible.


V11.0.1 ADDITIONAL FIXES
- Page navigation now has one V11 owner across normal pages. Sub-navigation and page actions remain on one line without the large dead-space/overlap behavior seen in prior builds.
- Live Operations carousel controls and actions remain grouped and symmetrical.
- Tools page priority header now displays Priority + UTID + Model + Tool Type in the same header, directly above the photo.
- Clicking the priority portion still edits priority; clicking the UTID/model/type portion opens the tool.
