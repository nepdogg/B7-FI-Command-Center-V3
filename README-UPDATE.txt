B7 FI COMMAND CENTER V14.0.19 — CONSOLIDATED REPAIRS TEST
Built from your V14.0.17 upload, including the V14.0.18 Brain work.

WHAT CHANGED
HEADER AND NAVIGATION
- Replaced the forced 156px header with a 96px three-section layout.
- Title sizing measures the text separately from the logos.
- Restored a fixed upper shell with one measured spacer. Removed the second body offset that could produce a large blank gap below navigation.
- Added date/time in the connection section.
- Displays individual active-user shields, up to eight, instead of hiding colleagues behind a +count. Clicking a shield opens the user roster.
- Local/connected/syncing/paused header states use neutral borders; disconnected/error uses red.
- Navigation can wrap action controls while page tabs remain accessible.

FOOTER
- Removed fixed-height legacy footer grid rows that could leave a blank extra row.
- Administration, Presentation, Activity and Connection cells use consistent heights, contained wrapping, and a responsive two-row layout on narrow windows.
- Footer remains nonsticky. Connection copy distinguishes Local Mode from disconnected shared mode and identifies V14.0.19.
- Hover/focus indication does not change control size.

TOOL BADGES AND CARD
- Removed the legacy script that rewrote inline badge heights, card heights, grid rows, and full-width equipment/wafer cells after every render. This was overriding stylesheet repairs.
- Removed the inline fixed badge-region layout from the card template.
- CSS owns equal-height badge cells, black backgrounds and equal gaps. Wafer and equipment badges occupy normal cells.
- Normal-page columns have equal widths and stretch to the same row height; their content remains accessible by page scrolling.
- FI Handoff and FI Powered Down date badges and existing click controls are preserved.
- Current testing-status text now respects the actual tool phase instead of saying ON SCHEDULE for a tool outside FI.

PROGRESS BARS
- Silver fill is applied consistently to card and summary progress tracks without changing the recorded percentage.
- Standardized track containment, label wrapping, panel spacing and minimum heights.
- Progress values remain bounded within the visible track. FI, Micro, Forecast, Cycle, Lead/Admin, Customer Source, STR and Packing/Shipping controls remain separate.

SIGNAL TOWER
- Retained the supplied KLA tower artwork and contain sizing, preserving image proportions.
- Tested red Critical, yellow Attention, green Normal, cyan Ahead, blue Packing, purple Shipped, white Not in FI, and all-off Powered Down.
- Powered Down badge/flag automatically selects the OFF tower. Shipped and Packing take their appropriate lifecycle states.
- SYSTEM LINE DOWN is recognized as critical.
- Stopped lamp-label rewrites from triggering a continuous MutationObserver/render loop.
- Decorative lamp settings no longer substitute the Not in FI picture for the actual tool state. Operational Powered Down stays distinct from visual lighting preferences.

PRESENTATION AND QUARTER SUMMARY
- Replaced the fitting function that returned before checking Live Operations layout. Presentation uses the real viewport, a reserved navigation row, three equal-width columns, and a compact badge grid.
- Eliminated global transform scaling and duplicate normal-header offsets from presentation.
- The Brain section has a reserved space alongside the other progress panels.
- Quarter Summary uses allocated hero, live-count, family-table and navigation regions.
- Eight live count boxes have consistent heights; labels can wrap. Shipped X overlays cover their tool images in either mode.
- Mystery celebration opens full-screen. Screenshot mode hides header, spacer and footer so the body can be captured.
- Very dense content may still require scrolling inside individual presentation status sections or the family list; it is not silently discarded.

BRAIN AND INTELLIGENCE CENTER
- Larger Command Center Brain section: overall progress, FI completion estimate/pending status, findings, next action, rotating messages, and click-through to the selected tool.
- Tool card and detailed view share the same analysis. Detail explains the weights, remaining work, blockers and forecast assumptions.
- Leads Alert uses manual actions; System Status uses connection/application activity; Command Center Brain uses operational findings. Critical counts remain visible while messages rotate.
- FI completion is a calendar-day estimate from the configured cycle target and remaining checklist fraction. Missing required data, a recorded blocking issue or Engineering hold produces PENDING. It is not a shipping readiness promise or a trained prediction model.
- Overall progress retains configured FI / Lead-Admin / Packing-Shipping weights, normally 50/20/30. Delays do not erase completed work.
- Tool swaps and forecast history remain review/preview capabilities; no automatic swaps or historical forecasts are invented.

SHARED DATA / PRIORITIES / AUTHENTICATION
- Shared refresh merges application settings instead of replacing the entire application with a tools-only object. Keeps the selected carousel tool when possible.
- Added one shared command-state row for priorities, weekend volunteers/leadership, actions, meetings, references, status records and shared configuration. This is an intentional non-tool row; tool counts ignore it. It uses the existing Tool Data column, not a new List schema.
- Canonical comparisons ignore JSON property order and local row identifiers. This avoids false conflicts from formatting or normalization.
- A three-way save merges disjoint field edits on the same tool, rejects conflicting edits to the same field, and sends the read ETag with updates when returned by Graph.
- Validates the full tool payload after writing, not just a short subset of fields.
- Refresh and saves pause appropriately during editing. A failed save retains an unsynced recovery snapshot and prevents background refresh from silently replacing the local edits.
- Ship-date changes and deliberate clearing of friendly List date/customer/order fields are read back consistently.
- Weekend Add/Remove Volunteer preserves current priority rows, leadership, date, notes and volunteer entries. Cancel restores the pre-edit priority state.
- Background token renewal no longer opens a popup; an explicit KLA-header reconnect can prompt when needed.
- Microsoft throttling/backoff and explicit server-verified deletion remain in place. Multi-record saves are not atomic transactions; the header reports failures rather than promising all changes reached the List.

STARTUP AND FILES
- One application CSS file and one application JS file, plus the external Microsoft authentication dependency. Runtime patches are bundled in a defined order.
- Version title, header, runtime, diagnostics, footer and Windows startup identify V14.0.19.
- Startup waits for the local server before opening the browser. Sign-in redirect has no stale missing stylesheet references.
- Existing browser storage keys and tool data format are retained. One README only.

CHECKS COMPLETED
- Syntax checks on every active JavaScript source and the packaged JS bundle.
- Focused execution tests: all eight tower states, powered-down linkage, canonical comparison, independent/nested field merges, same-field conflict rejection, guarded save/read-back, shared priority/volunteer metadata and direct List field overlays.
- Brain tests: weighted progress, cycle estimate, pending forecast under blockers, preserved completed work, card/detail consistency, text escaping, separate status sources and persistent critical indicators.
- Existing 9-tool scenario tested: previous + current quarter coverage. Engineering counts as Waiting; archived shipped classification retained.
- CSS structural delimiter checks, local HTML/CSS asset references, tower artwork inspection, ZIP integrity and one-CSS/one-JS packaging checks.

CHECKS NOT POSSIBLE HERE
The browser engine cannot launch in this environment. Rendered header/footer fit, hover behavior, badge text fit, browser zoom and Presentation Mode have not been visually verified. No connection to your KLA Microsoft account/List was made; actual two-laptop synchronization, user presence, token renewal, throttling and Graph ETag behavior require validation there. These are code repairs with focused simulated tests, not a claim that every field issue is proven resolved.

INSTALL THIS SMALL UPDATE
This package reuses the unchanged assets from V14.0.17.
1. Make a COPY of your complete V14.0.17 folder.
2. Extract this update into that copied folder and replace matching files.
3. Close the previous server, then run START-COMMAND-CENTER.bat from the updated folder.
4. Confirm V14.0.19 and press Ctrl+F5.
Do not run this patch as a standalone folder: it requires the existing assets folder.

FULL PACKAGE INSTRUCTIONS / FIRST CHECK
1. Keep the current folder as a backup. Extract this complete ZIP into a NEW folder.
2. Close the previous Command Center server window, then run START-COMMAND-CENTER.bat in the new folder. Use the same browser profile to retain local data. Confirm V14.0.19 and press Ctrl+F5 once.
3. Check header/footer and Live Operations at 100% zoom; inspect all badges, tower and bars. Click the Brain and several existing direct-edit controls.
4. Check Tool Card and Quarter Summary presentation, including the navigation, live count boxes and shipped X overlay.
5. Connect both work laptops. Make one priority change and one harmless tool-field change, confirm verified save, and confirm the other laptop updates. Check weekend Add Volunteer preserves earlier entries.
6. For optional read-only layout measurements, open http://localhost:5500/?b7diagnostics=1 .
No test tools are injected into your shared List merely by opening this release.
