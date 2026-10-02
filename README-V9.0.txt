B7 FI COMMAND CENTER — V9.0.1 MODERN UI RECOVERY TEST

PURPOSE
This build corrects the V9.0 Live Operations failure that caused the legacy Universal Tool Card to be displayed as a recovery fallback. V9.0.1 keeps the existing Command Center data model, Brain/workflow logic, quarter/carryover logic, tool fields, and multi-user integration while continuing the modern presentation-layer transition.

V9.0.1 CHANGES
- Removed the legacy Universal Tool Card as the Live Operations render-error fallback.
- Hardened the modern Live Operations page so Tool Card, Fleet Intelligence, and Active Fleet render independently. One bad data/component state no longer replaces the entire modern page with the old design.
- Preserves the modern V9 tool card, Fleet Intelligence widgets, Active Fleet strip, carryover state, progress/performance, next-system-tasks, operational badges, and update-tool workflow.
- Updated build identification to V9.0.1.
- Existing production data keys and multi-user code are retained; this package does not reset production data.

TEST FIRST
1. Open Live Operations and confirm the old 3-column legacy card does not appear.
2. Cycle through multiple tools, especially carryover tools and tools with incomplete/missing fields.
3. Test 100%, 90%, 80%, 75%, and 67% browser zoom.
4. Open Update Tool Status and verify existing tool fields remain available.
5. Validate Microsoft/KLA sign-in and Microsoft List sync in the work environment.

IMPORTANT
The real KLA/Microsoft List environment cannot be validated outside the work environment. Keep the last known production build available as a fallback while V9 reaches full parity.
