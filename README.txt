B7 FI COMMAND CENTER — V11.17.80 REGRESSION REPAIR / TEST ONLY

BASE: V11.17.79. All application scripts and Microsoft List logic retained, except quarter-aware scenario generator.

CHANGES
1. Removed the old forced 1160px Live Ops card height, allowing card to grow with viewport.
2. Restored two-column badges on Universal Tool Card and Tool Editor badge overview.
3. Wafer, computer and component badges span the full badge width.
4. Added priority identity overflow protection and editor minimum viewport height.
5. 9-tool scenario generator now assigns four tools to previous calendar quarter and five to current calendar quarter; ship dates match the assigned quarters. Quarter determined dynamically.
6. Updated title/header and cache-busting version to 11.17.80.

TEST
- Make a backup of production data and do not use scenario switching on production records: the existing test-dataset control replaces local state.
- Verify tool card at 100%, 50%, 33%; test tool editor, badges and footer.
- Test 9-tool generator only in a separate local test instance, not in your shared production list.
- Confirm quarter archive still works and that Microsoft List sync/priorities are unchanged.

VALIDATION LIMITS
JavaScript syntax and ZIP integrity checked. No browser screenshot regression, Microsoft List integration, or simultaneous laptop tests were performed. Layout overrides are targeted but not certified across all pages.
