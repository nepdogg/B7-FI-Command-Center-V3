B7 FI COMMAND CENTER V11.17.37 — TARGETED FINALIZATION TEST
15 October 2026

SOURCE
Full original V11.17.36 Badge Container Repair TEST ZIP. Original package remains unchanged.

IMPLEMENTED IN THIS TEST BUILD
1. Screenshot Mode: suppresses the X button, header, navigation, footer, modal chrome and auto-generated report title. Escape exits Screenshot Mode. Retains selected page content and existing underlying rendering.
2. Administration Center: adds an icon/color-coded directory with links to the existing equipment, data/multi-user, quarter, cycle-time, Brain, mystery box, photos, and integrity sections. Existing controls and data operations remain intact.
3. Launcher: clearer version, missing-Python diagnosis, startup logging and readable error on unexpected server exit. Does NOT install Python or resolve Microsoft account authentication.
4. Full V11.17.36 application and assets preserved; no intentional changes to tool data schemas or Microsoft List endpoints.

NOT IMPLEMENTED OR NOT VERIFIED
The requested major Command Center Brain lifecycle rewrite, tool/model master-data editor, redesigned one-tool Quick/Full editor, new Shipping/Priority report composers, badge logic/layout correction, archived-quarter snapshot recovery, missing CY26Q4 status reconciliation, Lead/Admin calculation correction, multi-user sign-in and conflict handling, and presentation auto-rotation are NOT delivered in this patch. Do not treat this as the all-issues-fixed release.

SAFE TEST INSTRUCTIONS
- Keep the original V11.17.36 folder and a verified backup of your production List.
- Extract the ZIP into a NEW folder; do not overwrite the working version.
- First test in Local Mode with disposable test data, then inspect Screenshot Mode on Status, Shipping, Live Operations, and other pages. Press Escape to exit.
- Test Administration directory navigation without using reset/import/publish buttons.
- Run START-COMMAND-CENTER.bat; a missing Python runtime should show a readable message rather than disappear.
- Do NOT run Master Reset, shared scenario, restore, import, or production publish against the real List.
- Work-connected Microsoft List login and synchronization were not verified in this environment. Do not deploy to production without an onsite validation and rollback plan.

This is a limited, real code patch and not the full major release discussed today.
