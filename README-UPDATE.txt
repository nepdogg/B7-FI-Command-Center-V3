B7 FI COMMAND CENTER — V14.0.15 SIGNAL TOWER INTEGRATION (TEST)

BASELINE: V14.0.14 Intelligence Center Preview. Existing Intelligence Center retained.

CHANGES:
- Eight individually cropped KLA-blue-branded realistic signal tower graphics from the approved visual concept.
- Seven physical lenses; operational states: Critical, Attention, Normal, Ahead of Schedule, Packing, Shipped, Not in FI, Powered Off (Prepack).
- Powered Off (Prepack) derives automatically from the System Powered Down badge, FI 200 start, or Powered Down tool phase.
- Status precedence: Shipped > Packing > Powered Off > FI alert/ahead/normal > Not in FI.
- Ahead of Schedule follows the existing FI-vs-micro progress comparison (more than 5 points ahead); this is not yet a shipping forecast.
- No manual signal tower status entry required.
- Preserved existing Intelligence Center and Microsoft Lists integration code.

TEST:
1. Open app; inspect tower graphics on Universal Tool Cards and presentation cards.
2. Change System Power badge to System Powered Down and save: tower should turn OFF.
3. Verify FI 200 start also turns tower OFF.
4. Verify Packing shows blue and Shipped shows purple even if Powered Down badge remains set.
5. Verify non-FI tool shows white and FI tool >5 points ahead of micro progress shows cyan.
6. Verify on second laptop after normal synchronization; do not assume cross-client verification from this package alone.

LIMITATIONS:
- Cropped tower artwork is derived from a composite illustration, not individually rendered transparent originals; panels include dark backgrounds.
- This build has not been visually browser-tested or multi-user-tested. Other previously reported header, footer, navigation, and progress-bar issues remain unverified/unresolved.
- 'LIGHTS OFF' in the global lighting controls is distinct from the operational POWERED OFF (PREPACK) status.

PREVIOUS RELEASE NOTES:
B7 FI COMMAND CENTER V14.0.14 — INTELLIGENCE CENTER PREVIEW

BASELINE: V14.0.13 Section Graphics Test. Existing pages, assets, badges, tool editing, signal towers and Microsoft Lists integration retained without intentional behavioral changes.

NEW IN THIS BUILD
- INTELLIGENCE CENTER added to the existing Center selector.
- Toggle: COMMAND CENTER · FULL AUTO / FI LEADS / MANAGERS.
- Auto mode reads active tool records and surfaces date-proximity alerts and same-type candidate counts. These are NOT verified lateness forecasts.
- Manual Tool Swap Analyzer: choose an at-risk UTID; find all active same-tool-type candidates, regardless of model; select candidates to see side-by-side data, pros/cons, and before/after preview for model, customer and sales order.
- Manual FI Forecasting: display existing checklist forecasts and micro target dates, with explicit limitations about missing reliable power-down and earliest-ship estimates.
- What-If: propose an earlier shipping date without changing records.
- Forecast History: design placeholder, not a fake audit log.
- Raiders black/silver style scoped to the new page.

IMPORTANT LIMITATIONS
- This is a READ-ONLY first-stage Brain Center. No automated tool swap execution, approvals, or multi-record Microsoft Lists writes have been implemented.
- No new independently validated ship readiness or power-down forecast engine. Existing checklist forecast is not equated with ship readiness.
- The auto overview flags approaching/past ship dates, not confirmed schedule failures; swap candidates are same-type matches, not proven feasible swaps.
- This release does NOT claim to fix all pre-existing defects. Existing functionality was preserved, but browser, multi-user, cross-laptop and live-data regression tests have not been run.

TEST
1. Back up existing production and shared data.
2. Start Command Center as usual; select INTELLIGENCE CENTER from Center dropdown.
3. Switch modes; select an existing UTID in TOOL SWAP.
4. Verify same-type candidate filtering, compare fields, no unintended writes.
5. Test the existing Priority, Operations, Shipping and Tool Edit pages for regressions.
6. Verify Microsoft Lists synchronization on two machines before considering production use.
