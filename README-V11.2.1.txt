B7 FI COMMAND CENTER — V11.2.1 LAYOUT ENGINE RECOVERY

This build replaces the failing live-card status-value geometry instead of adding another cosmetic patch.

KEY FIXES
- Removed the generic .hero class collision that was forcing the large Live Operations values into black/clipped legacy hero boxes.
- Live Operations C11 card now owns its status-value sizing and wrapping.
- Presentation Mode uses the available fullscreen card rectangle without global application scaling.
- Presentation text, badge, identity, task and progress sizes increased for wallboard readability.
- Three-column Presentation card remains locked to 29% / 38% / 33% with aligned bottoms.
- Middle column remains six equal-height sections; right column remains nine controlled progress sections.
- Shipped tools are removed from the active Live Operations / Presentation tool carousel. They remain in the data and shipping/archive workflows.
- Existing tool data/storage key and multi-user logic are preserved.
- Runtime/header/cache identifiers synchronized to V11.2.1.

DEPLOYMENT
1. Extract this ZIP.
2. Replace the ENTIRE contents of the GitHub Pages repository with the contents of this folder. Do not copy this folder itself into the repository.
3. Confirm index.html is at repository root beside css/, js/, assets/.
4. Commit/push all changed files, especially index.html, js/app.js and css/v11-clean-ui.css.
5. Open the deployed site and hard refresh (Ctrl+F5).
6. Confirm the top-left header reads B7 FI COMMAND CENTER — V11.2.1 before testing.

FIRST TESTS
- Live Operations: countdown / Current Tool Status / Current System Status must render as normal text with no black inner rectangles and no clipping.
- Cycle through every active tool; shipped tools must not appear in the active carousel.
- Enter Presentation Mode at 100% browser zoom; the full card must fit between the top intelligence bar and bottom navigation, with readable badges/text and aligned column bottoms.
- Exit Presentation Mode and verify normal page geometry returns without requiring reload.

V11.2.1 TOOLS PAGE RECOVERY
- Restored the TOOL TYPE dropdown/menu to the Tools page navigation/action bar.
- Restored the six Live Tool status boxes (All Tools, Waiting FI, In FI, Packing, Shipped, Carryover) as proper boxed KPI controls instead of raw stacked text.
- Preserved the Tool Type family jump targets and dropdown behavior.
- Kept the Tools page priority + UTID/model/type combined header introduced in the prior build.
