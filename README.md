# B7 FI Command Center V5.0.0 — Real Data Workflow Upgrade

Built from the V4.9.0 stable real-data testing baseline after the first full workday test with the current CY26Q3 fleet.

## Major workflow upgrades
- Lead/Admin summary progress now works like FI/Micro progress: selecting the Current Lead/Admin Task establishes the official workflow position, marks earlier normal tasks Complete, the selected task In Progress, and later normal tasks Not Started while preserving explicit N/A and Requirement TBD exceptions.
- The detailed FI and Lead/Admin checklists remain visual working aids / exception trackers and are displayed side-by-side in the Full Tool Editor with independent scrolling.
- Morning Status Update and Command Center Daily Update share the same operational tool form and expose the frequently changing tool fields, including Sales Order.
- Weekday and Weekend Priorities automatically populate from all active-quarter tools and read current master tool data live. Priority order/notes remain priority-specific.
- Reference Add/Save persistence is repaired and Reference Detail supports edit/save/favorite fields.
- Save operations use visible success/failure toast notifications.

## Live Operations upgrades
- New Tool Status summary box adds ship countdown, schedule health, current phase, and next FI milestone / packing handoff.
- Progress bars remain visible beside the new status box.
- FI panel is now ACTIVE FI CHECKLISTS and shows Open/In Progress work plus the next upcoming checklist, using full checklist names.
- Tool photo divider lines are removed; only the outer card carries schedule-health color.
- Long rotating status views have independently scrollable bodies and a small source-center launch control so scrolling does not trigger navigation.
- Tool Family Countdown remains display-only except Mystery Box reveal controls.
- Planned / Pulled In / Pushed Out quarter boxes are muted and show 0 until their data becomes active.

## Screenshot mode
- Replaces the large red EXIT SCREENSHOT MODE control with a small X control.
- Adds a consistent report title, report date, and appropriate item/system count to screenshot-enabled centers.

## Administration / input standards
- Administration Center includes a Planned Tool Count control for enabling planned-quarter status.
- Existing Tool Photo Management remains available.
- Known-choice operational fields use dropdowns where available; date fields use browser date inputs where supported.

## Recommended regression tests
1. Master Reset, then add a tool and reopen it.
2. Change Current Lead/Admin Task and verify Lead/Admin progress, remaining count, and upcoming tasks update.
3. Open both visual checklists in the Tool Editor and verify independent scrolling.
4. Change Sales Order from Daily Update and verify the Tool Editor, Live Operations, Shipping, and Priorities update.
5. Add and save a Reference, reopen it, edit it, and confirm save notifications.
6. Navigate Reference Center → Action Center and verify the Action body replaces the Reference body.
7. Scroll a long Morning Status slide inside Live Operations without navigating away.
8. Enter/exit Screenshot Mode on Status, Shipping, Priority, and Actions and verify consistent titles.
