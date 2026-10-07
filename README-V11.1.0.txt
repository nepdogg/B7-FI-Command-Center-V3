B7 FI COMMAND CENTER — V11.1.0 PRODUCTION RECOVERY
Build: 2026-10-06

PURPOSE
Production recovery build for CY26Q4. Rebased from V11.0.0 Clean UI Architecture instead of adding another patch to V11.0.2.

LOCKED FIXES
- Runtime/header/cache version aligned to V11.1.0.
- Quarter Summary is a static page: carousel/status rotation is restricted to Live Operations.
- Live Operations tool rotation remains restricted to Operations > Live.
- Tools-page priority banner now includes UTID plus MODEL · TOOL TYPE next to priority.
- Normal page shell uses sticky header-through-page-navigation without overlaying page content.
- Normal page navigation is forced to a single-row layout.
- Presentation Mode reserves bottom-navigation space and prevents the Universal Tool Card from extending underneath it.
- CY26Q4 remains the active operational quarter while prior-quarter carryover tools remain visible operationally.
- Existing V11 data model, badges, System Wafers, tool edit, Update Command Center, shipping, priorities, search, archive and multi-user code are preserved.

DEPLOYMENT / CACHE TEST
1. Replace the complete GitHub Pages site contents with this package; do not copy only index.html.
2. Commit/publish all files together.
3. At work, open the site and press Ctrl+F5 once.
4. The top-left header MUST read: B7 FI COMMAND CENTER — V11.1.0.
5. If it does not, the browser/GitHub deployment is still serving an older build; do not evaluate layout until V11.1.0 appears.

FIRST PRODUCTION TEST
- Live Operations: verify tool changes every 8 seconds only while PLAY is active.
- CY26Q4 Summary: leave open at least 20 seconds; it must not turn into a tool card or change pages.
- CY26Q4 Tools: verify priority header shows Priority + UTID + Model + Tool Type.
- Presentation Mode: cycle Previous/Next through all tools and verify bottom UPDATE TOOL STATUS and navigation remain visible.
- Update Command Center: save one harmless status change and confirm it appears on Live Operations.

DATA
This build preserves the existing browser storage key/data architecture. Replacing the static site files does not intentionally erase the locally stored tool dataset.
