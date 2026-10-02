B7 FI COMMAND CENTER — V9.0 MODERN UI REWRITE
Build: 2026-10-01

PURPOSE
V9.0 starts the clean modern presentation-layer rewrite while preserving the existing Command Center data model, Brain calculations, quarter/carryover logic, tool workflows, Microsoft/KLA multi-user integration code, archive/search logic, and production data keys.

MAJOR UI CHANGE
- Live Operations is rebuilt as a modern visual dashboard rather than reusing the old three-column card as the page layout.
- New large visual Universal Tool Card: tool image, priority, identity, ship countdown, carryover escalation, operational badges, current operation, next tasks, live status, FI/Micro/Cycle progress, forecast, Lead/Admin, Customer Source, STR, Packing.
- Fleet Intelligence remains alongside the card with Quarter Pulse, FI Pipeline, Cycle Time Health, Top Priorities, and Upcoming Ships.
- Active Fleet selector remains below the dashboard.
- Modern dark navy application shell retained across all Centers.
- Responsive layout uses reflow instead of whole-application scaling.

FUNCTIONAL FOUNDATION RETAINED
- Existing local production data key and tool schema.
- Command Center Brain / quarter lifecycle / carryover logic.
- Full Tool Edit workflows and all existing tool fields.
- FI checklist, Lead/Admin checklist, badges, System Wafers, Customer Source, STR, shipping, cycle time, actions, search, archive, meetings, status, priority and reference functionality.
- Microsoft/KLA sign-in and Microsoft List multi-user integration code.

IMPORTANT MULTI-USER TEST NOTE
Private KLA/Microsoft authentication and List read/write cannot be verified outside the work tenant. Test sign-in, List connection, load, save, and second-device synchronization at work before treating V9.0 as production-ready.

RECOMMENDED TEST ORDER
1. Live Operations at 100%, 90%, 80%, 75%, and 67% browser zoom.
2. Cycle Time, Shipping, Priority, Status, Reference, Search and Archive Centers.
3. Tool Update/Edit and all workflow tabs/fields.
4. Quarter Summary and Presentation Mode.
5. Microsoft/KLA sign-in, List connection, save/write-through, refresh and second-device synchronization.

SAFETY
Keep the previous production build available as fallback while V9.0 is being tested. Do not clear or reset the Microsoft List for UI testing.
