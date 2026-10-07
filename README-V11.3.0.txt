B7 FI COMMAND CENTER — V11.3.0 PRODUCTION STABILITY LOCK
Build: 20261006-V11.3.0-PRODUCTION-STABILITY-LOCK

THIS BUILD STARTS FROM V11.2.1 TOOLS PAGE RECOVERY AND PRESERVES EXISTING DATA STORAGE.

FIXES / UPDATES
- Header geometry locked to one equal-height row with wider left/right areas and protected center KLA/user area.
- Sticky region remains header through page navigation/status bars; footer remains non-sticky.
- Page navigation locked to one row with a protected action region.
- Tools page TOOL TYPE menu is restored as a dedicated navigation action and cannot be squeezed away.
- Tools page live KPI/status boxes restored to a six-box matrix.
- Tools page priority badge includes UTID plus Model/Tool Type identity beside priority.
- Priority badge typography is uppercase and dynamically enlarged with clamp sizing.
- Universal Tool Card top intelligence row is explicitly split into Priority/Tool Identity + Tool Status Bar.
- Presentation Mode uses a dedicated viewport contract with a visible outer border around the complete Tool Card.
- Presentation Tool Card reserves the bottom navigation area and uses adaptive column rows to prevent bottom clipping.
- Presentation columns share the same full available height.

TEST AT WORK
1. Replace the repository files with this package and hard refresh the browser (Ctrl+F5).
2. Confirm the title shows V11.3.0.
3. Tools page: confirm TOOL TYPE is visible, opens, and jumps to each tool family.
4. Tools page: confirm ALL TOOLS / WAITING FI / IN FI / PACKING / SHIPPED / CARRYOVER display as six boxes.
5. Confirm priority header is uppercase and shows tool UTID + model/type beside the priority.
6. Live Operations: confirm Priority/Tool Identity and Tool Status are two separate top sections.
7. Presentation Mode: confirm the complete cyan outer border is visible above the bottom navigation and all three columns end at the same bottom edge.
8. Test at 100% browser zoom first, then verify zoom behavior.

NOTE
Existing local browser data keys are unchanged so this build does not intentionally reset your Command Center data.
