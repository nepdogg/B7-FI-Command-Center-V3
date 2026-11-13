B7 FI COMMAND CENTER — V12.0.72 RAIDERS GLOBAL THEME TEST

BASE: V12.0.71. This build retains the application JavaScript, existing data
model, multi-user connection code, and V12.0.62/64/65 badge geometry.

CHANGES:
- Added one final global Raiders-theme CSS file, loaded after all legacy CSS.
- Applies black / glossy charcoal / silver / white to common page panels,
  navigation, tool editors, administration, archive, status, quarter summary,
  presentation, forms, modal dialogs, and footer.
- Taller header with larger white text, metallic separators and Raiders logos.
- Metallic black navigation buttons; silver-white selected/active state.
- Existing operational alert colors and progress-fill colors are retained.
- No intentional changes to tool-badge height, grid, or line wrapping.

TEST CHECKLIST:
1. Hard refresh (Ctrl+Shift+R) after deploying the entire folder.
2. Visit every center and each subpage, not only Live Operations.
3. Confirm inactive buttons black/silver and selected button silver/white.
4. Verify badges remain equal height, including priority and special badges.
5. Check at 100%, 80%, 125% browser zoom and at different window widths.
6. Check presentation mode, popups, tool editing, saving and multi-user sync.

KNOWN LIMITATION: This is a CSS-first global visual pass, not a verified
end-to-end browser test. Dynamically generated or unusually named components
may require follow-up styling. Existing zoom compensation is unchanged.
