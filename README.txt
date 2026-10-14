B7 FI COMMAND CENTER V11.17.8 — NAVIGATION / PRESENTATION / STARTUP TEST
====================================================================
BASE: V11.17.7 Data Safety & Performance Candidate.

CHANGES
- Corrected equipment catalog initialization order: both tracking catalogs are now initialized before the initial application render. Addresses the EQUIPMENT_COMPUTERS temporal-dead-zone error.
- Shared page navigation uses content-sized buttons, not equal-width button slots. Left page links scroll horizontally only if the available viewport cannot accommodate all links. Right actions and carousel controls preserve full labels and widths.
- Presentation Tool Card progress bars and text sizes now match Live Operations styles, while preserving the existing outer presentation border.
- Build version incremented to V11.17.8.

DATA SAFETY
- No changes to tool data, storage keys, List schema, or List rows.
- Existing 200+ unwanted Microsoft List records are NOT deleted or cleaned up.
- Microsoft List multi-user sign-in and sync are NOT verified; do not rely on this candidate for production writes.
- Preserve your working local data backups and the previous installation. Extract to a NEW folder.

TEST
1. Back up the working local dataset before switching builds.
2. Open index.html in Local Mode; check Live Operations immediately after load.
3. Inspect navigation labels on Operations, Tools, and other centers at 67/80/100/125% browser zoom.
4. Test previous/pause/next and the Verify/Update/Screenshot buttons.
5. Test Presentation Mode: border, progress bars, text, next/previous tool and exit.
6. Test the BAT server mode separately; verify Microsoft List connection before editing any real records.
7. Do NOT delete or reset List records based solely on an A- prefix without confirming a backup and record type.

LIMITATIONS
Static syntax and package checks are performed. Full Edge/SharePoint multi-user testing requires your environment. Existing performance, save, and multi-user issues may remain.
