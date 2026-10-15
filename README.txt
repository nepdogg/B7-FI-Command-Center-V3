B7 FI COMMAND CENTER V11.17.10 — CARD GEOMETRY / NAVIGATION TEST

CHANGES
- Unified the Universal Tool Card left-column grid for carryover and non-carryover tools.
- Fixed the root badge-row overflow: equipment badges no longer consume two grid rows.
- Standardized all 12 badge rows, image containers, and update-button placement.
- Reworked page navigation: intrinsic button widths, measured text sizing, independently scrollable tab/action groups as a narrow-screen fallback.
- Aligned presentation and live-operation progress-bar dimensions and typography.
- No intentional changes to stored tool data, Microsoft List schemas, or authentication.

TESTING
1. Extract to a new folder; keep the last working copy and all backups.
2. Open index.html in local mode; compare TEST-TAYCAN and TEST-VANQUISH in Presentation Mode.
3. Check all 12 badge rows, photo dimensions, update-button alignment and the three columns.
4. At 67%, 80%, 100% and 125% zoom check page navigation on Operations and Tools Center. If the viewport is too narrow, horizontal scrolling is intentional instead of clipping text.
5. Before hosted testing, deploy the complete new package and verify the visible title says V11.17.10.
6. Test Microsoft List connectivity separately with backed-up test data only.

LIMITATIONS
- Not browser-verified in the corporate environment.
- Microsoft List sync and the 200+ bogus records are NOT fixed in this layout release. Do not delete list records or local data.
