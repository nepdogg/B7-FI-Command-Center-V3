B7 FI Command Center V11.17.52 — QUARTER GRAPHS TEST (16 October 2026)

New: Monthly planned shipping graph by tool type above the Shipping Center table. Actual shipment month only counted when an actual date exists.
New: Cycle Time graph of every quarter tool, individual target markers, family target lines, and status colors above existing table.
New: Historical archive warning when original pre-archive shipping statuses are unavailable. No automatic historical status rewrite.
New: Unrecognized quarter status now classified Other rather than silently Waiting FI.

IMPORTANT: This is a TEST BUILD, not a complete implementation of every previously reported defect.
Visual Tool Editor unification, Presentation Mode automatic rotation, archived record recovery, and Microsoft List multiuser verification are not completed here. Do not overwrite production until validated.

Test on a copy or staging GitHub Pages branch. Check Shipping and Cycle Time graphs at 100%, 80%, 125%. Check shipped tools without actual dates: these should not be attributed to a month. Back up production List and existing quarter snapshots before any migration.
