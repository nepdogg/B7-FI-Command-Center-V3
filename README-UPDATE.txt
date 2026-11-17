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
