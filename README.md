# B7 FI Command Center V4.0.0 — Stable Core Workflows

This build prioritizes the core workflows needed for production testing.

## Core fixes in V4.0.0
- Add Tool opens the full blank Tool Editor and saves a new tool with duplicate-UTID validation.
- Every current-quarter tool card, Live Operations tool card, Search tool result, and tool-specific alert drills into the same full Tool Editor.
- Correct cache/version stamps in index.html so browsers load the V4.0 code instead of a stale earlier JS/CSS build.
- Live status summary/family boxes use consistent phase colors: Waiting for FI red, In FI yellow, Packing cyan/blue, Shipped green.
- Live tool photo is constrained and centered in its photo frame.
- Tool carousel content stretches to use the available card height.
- More even dashboard spacing and a deliberate gap above the footer.
- FI and Lead/Admin checklist dialogs remain viewport-safe with no horizontal scrolling.
- Administration backup/import/master reset behavior from V3.9 is retained.

## Recommended test order
1. Administration → Scenario Test.
2. Update Center → ADD TOOL → enter a unique UTID → SAVE TOOL.
3. Click the new tool card and confirm the full editor opens.
4. Operations Center → click the Live Tool card and confirm the same editor opens.
5. Search Center → search UTID → click result.
6. Click Leads Alert/System Status tool messages.
7. Test FI Checklist and Lead/Admin VIEW ALL dialogs.
8. Export backup, change data, import backup and verify restoration.
