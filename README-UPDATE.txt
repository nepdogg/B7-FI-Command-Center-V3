B7 FI Command Center V12.0.29 — Signal Tower Image Test

Based on V12.0.28.
- Added six transparent PNG tower images (five active states plus unknown).
- All tower displays use the same existing b1217Signal(t) evaluator.
- Removed duplicate status label beneath the tower and TOOL INFORMATION heading.
- Reason banner now derives a reason from tool NCs, notes, schedule and workflow.
- Preserved segmented progress bars and existing data/sync logic.

TEST: Start locally, inspect Live Operations, Presentation and Hybrid at 100% zoom. Confirm the light and reason agree with recorded data.
IMPORTANT: Microsoft Lists live sync and all workflows have not been browser-tested. Keep prior release as backup.
