B7 FI COMMAND CENTER V11.17.51 — STRUCTURAL TEST BUILD

BASE: V11.17.50. Preserve your existing production installation and Microsoft List.

IMPLEMENTED:
- Unified normal-page CSS geometry contract for header, body, footer, three-column cards, identity fields, badge grid, and fleet cards.
- All standard and full-width badges have 60px row height on normal pages; saved badge status colors are not replaced.
- Section border accents for Tool Identity, FI Status, Progress, Shipping and Lead/Admin.
- Browser zoom handled by browser; no devicePixelRatio zoom compensation. Narrow layouts scroll rather than shrinking all text.
- Tool Editor defaults to Badges category with corresponding selected navigation state.
- Diagnostic overlay: append ?b7diagnostics=1 to the URL to inspect the loaded layout stylesheet, sticky position, card/badge heights and viewport. This never edits production data.
- Updated application version and cache-busting query parameters.

NOT CLAIMED FIXED: Complete Brain admin editor, full shipping/priority schedule editing, historical archive repair, and coworker Microsoft authentication. They need functional implementation and testing.

VALIDATION: JavaScript syntax, archive integrity, stylesheet references and source structure checked. Real browser rendering could not be verified in this environment.

TEST: Use a separate extracted folder/test URL. Test 67%,80%,100%,125% and scroll the page to verify sticky header. Compare the same UTID across Live Operations, Tools Center and Presentation Mode. Use ?b7diagnostics=1 to see if the expected CSS actually loaded. Do not reset or delete production Microsoft List records.
