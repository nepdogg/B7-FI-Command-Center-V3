# B7 FI Command Center V3.0.0 — V1 Interface + V2 Stable Core

V3 combines the V1 operational presentation with a clean V2-style single runtime.

## Core goals
- V1-style page-specific views rather than generic V2 placeholders.
- One sticky shell / one navigation controller.
- One page-action controller with stable Create/Edit/Save/Cancel controls.
- Screenshot action on every center; Screenshot Mode removes page controls and lets footer follow content.
- One version authority: V3.0.0 in tab, footer, exports, and runtime.
- Full production checklist routes through 190-series plus one unified `FI 200 Final Pre-Pack and QA` terminal checklist.
- Tool Status is the authoritative phase: Waiting for FI → In FI → Packing → Shipped.
- Reaching FI 200 automatically changes Tool Status to Packing.
- Shipping Schedule = Complete automatically changes Tool Status to Shipped.
- Duplicate UTID protection.
- Test Data Manager and V1/V2 browser-data import.

## First QA sequence
1. Open all Centers repeatedly; confirm navigation stays stable.
2. Verify sticky header while scrolling.
3. Update Center → Add Tool → confirm `CANCEL / ADD TOOL / SCREENSHOT / EXPORT` appear.
4. Attempt duplicate UTID; second record must be rejected.
5. Update Center → CY26Q3 Tools → click a tool card → edit and save.
6. Update Center → Command Center Daily Update → Edit Daily Update → save changes.
7. Change a current checklist to `FI 200 Final Pre-Pack and QA`; verify Packing everywhere.
8. Shipping Center → Edit Shipping → set schedule Complete; verify Shipped everywhere.
9. Status Center → confirm email-style morning status presentation; use Screenshot Mode.
10. Priority Center → Edit Priorities → Save.
11. Meeting Center → start Escalation Meeting → Tool + NC + notes + POA + action → End Meeting.
12. Action Center → verify meeting action and escalation appear.
13. Administration → Scenario Test / Empty Test / Single Tool Test; check Data Integrity.

Keep V1 and V2 repositories as archives/reference. Use V3 as the new test branch/repository.
