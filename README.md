# B7 FI Command Center V6.6.11 — Lead/Admin + 28 Badge Control + Presentation Scroll Lock

- Lead/Admin checklist modal now contains the existing 45 independent Lead/Admin tasks plus a separate **Tool Badges / System Verification** section with all 28 badge slots.
- Established badge selections are available from the consolidated morning-update panel. Lead/Admin-driven badge controls write back to the matching checklist tasks rather than creating duplicate badge-only state.
- Customer Source and STR controls write to their dedicated authoritative workflows. NC is read-only/automatic from NC records. Lamp is read-only/automatic from lamp state/hours. System Power becomes read-only/automatic once FI 200 has started.
- Clicking a UTC badge now opens the Lead/Admin / Badge control panel and jumps directly to that badge row, keeping automatic badges clickable without bypassing their authoritative source.
- Presentation Mode Lead/Admin modal scrolling is explicitly enabled for mouse wheel, trackpad, and touch, with the full 45-task + 28-badge content reachable and Save/Cancel kept accessible.
- Lead/Admin Progress continues to count genuine Lead/Admin tasks only; the 28 badge controls are not added to the progress denominator.
- Preserves V6.6.10 authoritative-source/applicability rules and all prior locked UTC, quarter lifecycle, Pacific calendar, and multi-user tester behavior.

# B7 FI Command Center V6.6.10 — Badge Authoritative Source + Applicability Lock

## V6.6.10 changes
- Preserves the existing 45-row Lead/Admin checklist as independent task statuses; tasks may be completed in any order.
- Customer Source badge is now driven only by the dedicated Customer Source Required/Status workflow in Tool Edit and its progress section. Lead/Admin checklist entries no longer overwrite Customer Source workflow fields; the corresponding Lead/Admin milestone rows are synchronized from the dedicated workflow for progress/Next Tasks consistency.
- STR badge remains driven by the dedicated STR Required/Status workflow; it is now treated as an automatic/non-direct-edit badge.
- System Power is automatically forced to SYSTEM POWERED DOWN as soon as FI_200 is the current checklist or the FI_200 visual checklist is Open/In Progress/Complete; Powered Down, Packing, and Shipped statuses also enforce the same process gate. The matching Lead/Admin task is synchronized to System Powered Down.
- NC badge is now fully automatic from actual NC / Escalations / POA records:
  - before FI handoff / FI-active phase = badge OFF
  - FI-active with no NC records = badge OFF
  - any open NC = NEED TO CLOSE ALL NCS (red)
  - any open escalated/blocking NC = SYSTEM IN NC ESCALATION (red)
  - all recorded NCs closed = ALL NCS CLOSED (green)
- AUTO Next System Tasks uses actual NC records for escalation blockers and explicitly reads the dedicated Customer Source and STR workflows.
- Automatic badge tooltips now describe authoritative tool data rather than implying every automatic badge comes from Lead/Admin.
- Preserves V6.6.09 Lead/Admin progress/task engine, V6.6.08 quarter lifecycle navigation, Multi-User footer location, Presentation viewport fit, Pacific calendar logic, Loader/NC workflow design, and locked 28-badge UTC geometry.

---

# B7 FI Command Center V6.6.09 — Automatic Badge + Lead/Admin Task Engine

## V6.6.09 changes
- Lead/Admin Progress is now calculated from the actual Lead/Admin checklist completion states instead of the Current Lead Task baseline.
- Clicking Lead/Admin Progress continues to open the real Lead/Admin checklist; it is now the authoritative progress source.
- Selected Lead/Admin workflow items now expose badge-specific multi-state choices (Customer Source requirement, Loader, CTD, Ironman, System Power, Options Testing/FACTD, and CCL).
- Checklist saves automatically update the mapped UTC badge states for Options Requested, Ship Kit, Cal Chips, POD, System Wafers, Ship Meeting, Loader, CTD, Customer Source, Ironman, System Power, Options Testing/FACTD, CCL, and Option Files.
- Existing badge/source data is bootstrapped into the Lead/Admin checklist when the checklist is first opened so adopting automation does not intentionally discard the current tool state.
- AUTO Next System Tasks now combines: NC blocker, official current FI checklist, remaining Lead/Admin checklist work, and unresolved independent badge conditions.
- Checklist-driven badges are deduplicated from AUTO Next System Tasks.
- Badges controlled by the Lead/Admin checklist are rendered as automatic indicators rather than independent direct-edit controls. Hardware/configuration and other independent badges remain driven by their dedicated fields.
- Preserves V6.6.08 quarter lifecycle navigation, Multi-User Test footer location, Presentation viewport fit, Pacific calendar logic, NC/Loader workflow, and all locked UTC geometry.

---

## Previous build — V6.6.08 Quarter Lifecycle + Multi-User Footer Lock

- Shipping Center and Cycle Time Center now separate active lifecycle tools by Current Quarter.
- Dynamic quarter navigation is generated from quarters that still contain at least one non-archived tool.
- Shipped tools remain on their quarter Shipping/Cycle pages until archived.
- When the last tool in a quarter is archived, that quarter automatically disappears from active Shipping/Cycle navigation; the next available quarter becomes selected.
- Status Center and Priority Center remain combined cross-quarter live-FI workload views.
- Live Operations / Presentation retain the full non-archived fleet lifecycle behavior.
- Multi-User Test launcher moved from floating overlay into the footer so it no longer blocks page content.
- Preserves V6.6.07 countdown urgency, combined NC workflow, Loader workflow, Pacific calendar handling, UTID jump navigation, Presentation fixes, and multi-user tester.

# B7 FI Command Center V6.6.07 — Countdown + NC / Loader Workflow Lock

## V6.6.07 changes

- Updated Ship Countdown urgency colors while preserving the Pacific/local-calendar date fix:
  - more than 14 days = white
  - 8–14 days = cyan
  - 6–7 days = yellow
  - 3–5 days = orange
  - 0–2 days / SHIPS TODAY / overdue = red
  - shipped = green
- Combined the old NC Escalation and NC Close badges into one NC badge with one authoritative state:
  - Need to Close All NCs = red/default
  - NC Escalation = red, displays SYSTEM IN NC ESCALATION
  - All NCs Closed = green
- Existing legacy NC Escalation data migrates into the new combined NC state.
- Added Loader badge in the freed 28-badge slot:
  - Verify Loader = red/default
  - Hybrid Loader = green
  - Phoenix 2 Loader = green
  - Phoenix 2 N2 Loader = green
  - Phoenix 6 Loader = green
  - Phoenix 6 N2 Loader = green
- Next System Tasks prioritizes SYSTEM IN NC ESCALATION and shows VERIFY LOADER only while the Loader badge is unresolved.
- Tool Edit, direct badge editing, regular UTC and Presentation Mode use the same combined NC and Loader source fields.
- Preserves V6.6.06 Pacific calendar handling, NC single-add fix, V6.6.05 UTID jump navigation, Presentation viewport/interaction fixes, and the multi-user tester.

---

# B7 FI Command Center V6.6.06 — Pacific Calendar + NC Single-Add Lock

## V6.6.06 changes

- Fixed **+ ADD NC** in the Update Command Center / all-tools editor so one click creates exactly one NC / Escalation / POA row.
- Removed the duplicate direct DOM add path and retained a single delegated add handler that first captures unsaved tool edits, then adds one authoritative NC record and re-renders.
- Fixed the shared Command Center `today()` helper so operational calendar dates use the browser's **local calendar date** instead of UTC (`toISOString().slice(0,10)`).
- This prevents late-evening Pacific Time from advancing the Command Center to the next UTC date before California reaches local midnight.
- Ship Countdown, automatic Command Center priority scoring, quarter-day calculations, milestone completion dates, and other date-only workflows now share the corrected local calendar day.
- Example: at 10:30 PM Pacific on 09/12/2026, an MFG Ship Date of 09/13/2026 correctly evaluates as **SHIPS TOMORROW**, not **SHIPS TODAY**.
- Preserves V6.6.05 UTID jump navigation, V6.6.04 strict Presentation viewport containment, V6.6.03 Lead/Admin Presentation editing, V6.6.02 badge workflows, and the existing Microsoft multi-user tester.

---

# B7 FI Command Center V6.6.05 — Update Command Center UTID Jump Navigation Lock

## V6.6.05 changes

- Added a **TOOL UTID ▼** page-action selector to the **Update Command Center** all-tools editor.
- The selector is populated from the same tools currently displayed on the page and follows the same Update Command Center ordering.
- Selecting a UTID smoothly jumps directly to that tool's edit card, eliminating long scrolling through the full tool list.
- The destination card receives a brief visual highlight so the selected system is immediately obvious after the jump.
- The selector resets to **TOOL UTID ▼** after every jump so another tool can be selected immediately.
- The control is confined to the Update Command Center edit page and does not change the regular Universal Tool Card, tool data, save behavior, ordering logic, Presentation Mode, or Microsoft multi-user tester.
- Preserves the V6.6.04 strict Presentation viewport-containment fix and all V6.6.03/V6.6.02 interaction and badge workflow fixes.

---

# B7 FI Command Center V6.6.04 — Presentation Strict Viewport Contain Lock

## V6.6.04 changes

- Fixed the work-laptop Presentation Mode bug where the right edge of the Command Center could be cut off.
- Presentation now uses the browser's actual usable fullscreen viewport and a small safety gutter, then uniformly scales the complete wallboard to fit inside both width and height.
- Removed the legacy Presentation `min-width:1920px !important` conflict that could override the adaptive V6.5.98 canvas width.
- Added a second protection pass using the frame's actual `scrollWidth` / `scrollHeight`, so any legacy intrinsic child width is included in the fit calculation instead of being clipped.
- Re-fits automatically on resize and fullscreen changes using the existing Presentation listeners.
- No regular Universal Tool Card geometry, badge layout, progress-bar geometry, data model, priority logic, or Microsoft multi-user test behavior was changed.
- Preserves V6.6.03 Presentation Lead/Admin editing and all V6.6.02 Laser + Options Testing workflow fixes.

## V6.6.04 changes

- Fixed Presentation Mode so the **Lead / Admin Progress** section is clickable and opens the same Lead / Admin Tasks editor used by the regular Universal Tool Card.
- Added Presentation Mode interaction allowance for both `data-lead-tasks` and `data-save-lead-tasks`; layout and regular UTC geometry are unchanged.
- Preserves V6.6.02 Laser and Options Testing / FACTD workflow changes, V6.6.01 FI workload ordering / priority-source behavior, Presentation Mode viewport fixes, and the complete multi-user Microsoft Graph test.

## V6.6.02 changes

- Laser badge is now a single 3-state workflow: `Verify Laser` (red/default), `V2 Laser` (green), `V3 Laser` (green).
- Legacy `V3 Laser Connected` is normalized to `V3 Laser`; legacy `Need V3 Laser` is normalized to `Verify Laser`.
- Options Testing / FACTD is now one authoritative 4-state workflow: `Need to Complete Options Testing` (red/default), `Installing and Testing Options` (yellow), `Testing FACTD` (yellow), `Options Testing Completed` (green).
- Removes the obsolete standalone FACTD badge from badge evaluation so completed Options Testing can no longer leave a hidden FACTD task behind.
- Next System Tasks now follows the combined Options Testing state and emits no Options/FACTD task after `Options Testing Completed`.
- Tool Edit labels now use `Options Testing` and `Laser` and expose the same centralized state choices as the UTC badge editor.
- Preserves V6.6.01 FI workload population/order rules, Priority Center source switching, Presentation Mode interaction fixes, and the complete multi-user test.

## V6.6.01 changes

- Priority Center source buttons are now functional selectors, not just visual toggles.
  - **LEADS / MANAGERS** immediately sorts Priority Center by the manually assigned Lead priority.
  - **COMMAND CENTER** immediately sorts Priority Center by the automatic Command Center ranking.
  - The selected source continues to drive the Universal Tool Card priority badge and active-FI carousel priority order.
- Automatic FI workload pages now use one shared population rule: **all non-archived, non-shipped tools that have been handed to FI, across all quarters**.
  - A future-quarter tool appears as soon as it is handed to FI.
  - A tool that has merely been added but has not reached FI remains visible in Live Operations / Presentation Mode, but not on the automatic FI workload pages.
- Standard automatic page ordering is now locked to the Daily Status convention: **non-Regera/Celestiq tools in ascending UTID, followed by Regera/Celestiq tools in ascending UTID**.
  - Applied to Status / Morning Status, Shipping Center, and Cycle Time Center.
  - Priority Center remains the only page intentionally sorted by priority.
- Status Center is explicitly quarter-independent because it is the daily FI morning-status workspace. Its main header is now simply **STATUS CENTER** and it combines every active FI tool regardless of quarter.
- Shipping and Cycle Time are also populated from the cross-quarter active FI workload so next-quarter systems already in FI are not hidden by the current-quarter filter.
- Live Operations and Presentation Mode retain the full non-archived fleet lifecycle view, including not-yet-FI and shipped tools.
- V6.6.00 Presentation Mode interaction fixes and V6.5.99 complete Microsoft multi-user end-to-end tester are preserved.

---

# B7 FI Command Center V6.6.00 — Presentation Multi-User Interaction Lock

## V6.6.00 changes
- Multi-User Test launcher is now explicitly allowed through the Presentation Mode interaction shield.
- Multi-User Test panel and every control inside it remain clickable while Presentation Mode is active.
- Test panel is forced above the presentation wallboard with a top-level z-index and pointer-event lock.
- Closing the tester returns to the existing Presentation Mode without changing UTC geometry or carousel data.
- Retains the V6.5.99 complete end-to-end Entra / Graph / Microsoft List test flow.
- Retains the Presentation Mode Next System Tasks click/edit fix and viewport-fit behavior.
- Regular Live Operations Universal Tool Card geometry remains unchanged.

This build is designed for the one-work-test-per-day workflow. The Multi-User Test panel can validate delegated KLA sign-in, Microsoft List discovery, read, external refresh, update + read-back, temporary row creation, and cleanup in one session. It also fixes Presentation Mode Next System Tasks click/edit access without changing locked UTC geometry.

## Work test order
1. Launch `START-COMMAND-CENTER.bat` and confirm `http://localhost:5500/`.
2. Back up production Command Center data, then load Test Scenario data if desired.
3. Multi-User Test → Sign In → Connect + Read. Confirm the two known Microsoft List rows appear.
4. Optional external-change test: add a harmless third row directly in Microsoft Lists, then press Refresh and confirm it appears in the panel.
5. Edit a harmless field in an existing test row and press Save Shared Row. The panel performs update + read-back.
6. Press Create Temp Test Row, verify it appears in Microsoft Lists, then Delete Temp Test Row.
7. Capture a screenshot of any failure message.

---

# B7 FI Command Center V6.6.00

## V6.6.00 — Multi-User + Presentation Viewport Fit Lock

This build keeps every V6.5.97 Microsoft Graph multi-user test feature and adds one presentation-only display fix.

### V6.6.00 changes
- Presentation Mode now adapts its virtual wallboard width to the actual fullscreen aspect ratio instead of always forcing a 1920×1080 canvas.
- Removes the large unused black bands above and below the Presentation wallboard on 16:10 laptop displays.
- Keeps uniform scaling, so text, badges, columns, and card geometry are not stretched or distorted.
- 16:9 displays continue to resolve to the familiar 1920×1080 presentation geometry.
- Recalculates automatically when Presentation Mode opens, fullscreen changes, or the browser/window is resized.
- Regular Live Operations UTC remains locked and unchanged.
- All V6.5.97 delegated Entra / Microsoft Graph multi-user connection and conflict-test behavior remains included.


## V6.5.97 — Multi-User Microsoft Graph Connection Test

This build preserves the V6.5.96 Command Center and adds a separate **MULTI-USER TEST** panel. It is intentionally a connection/concurrency test layer; it does not yet replace the Command Center master localStorage database with Microsoft Lists.

### Test configuration
- Delegated Microsoft Entra authentication (no client secret stored in the app).
- Redirect URI: `http://localhost:5500/redirect.html`.
- Microsoft List: `B7 FI Command Center` on the configured KLA OneDrive-backed SharePoint site.
- Requested Graph scopes: `User.Read` and `Sites.ReadWrite.All`.
- Reads existing shared List rows through Microsoft Graph.
- Allows test-row editing/writing directly to the shared List.
- Performs a last-modified conflict check before saving so a stale browser does not silently overwrite a row changed by another user.

### How to test
1. Copy this complete folder into the OneDrive **Command Center** folder.
2. Double-click `START-COMMAND-CENTER.bat`. Keep the command window open.
3. Edge should open `http://localhost:5500/`. Do not open `index.html` directly.
4. Click **MULTI-USER TEST** at the lower-right.
5. Click **SIGN IN WITH KLA**, then **CONNECT TO LIST**.
6. Confirm the two existing test tools appear.
7. Change a harmless value on a test row and click **SAVE SHARED ROW**.
8. On a second authorized user's computer, run the same build, sign in as that user, connect, and press **REFRESH SHARED DATA**. The saved change should appear.
9. To test conflict protection, have both users load the same row, let User A save first, then let User B save without refreshing. User B should receive a CONFLICT warning rather than overwriting User A.

### Important
- This is the first real multi-user backend test, not the final full-data synchronization build.
- V6.5.96 Universal Tool Card geometry, calculations, carousel, Presentation Mode, badge logic, and local production data model remain unchanged.
- If sign-in, Graph permissions, or List permissions fail, the test panel displays the Microsoft error so it can be sent to IT.

## V6.5.96 — Tool Type Operations Color Lock

### V6.5.96 changes
- Design-lock refinement only: no Universal Tool Card, calculation, carousel, drilldown, Presentation Mode, or data-model changes.
- Operations Center > Tools page Tool Type submenu/select now uses the Operations Center blue (#176FA8) instead of the previous gray/dark styling.
- Tool Type menu option text remains white and hover/focus retains the Operations accent language.

## V6.5.95 — Presentation Status Drilldown + Scrollbar-Free Lock

### V6.5.95 changes
- Fixes the Live Status summary-box drilldown in Presentation Mode by explicitly allowing the summary tiles and drilldown rows through the Presentation interaction shield.
- Live Operations and Presentation Mode now use the same clickable quarter/status drilldown feature and the same authoritative tool sets.
- Removes visible vertical and horizontal scrollbars from the drilldown popup while retaining mouse-wheel, trackpad, and touch scrolling for long lists.
- Keeps the compact Daily-Status-style list and click-a-row-to-jump-to-that-tool behavior.
- Does not change the finalized regular Universal Tool Card or the Presentation card geometry.

# B7 FI Command Center V6.5.93

## V6.5.93 — Countdown Geometry Recovery Lock

### V6.5.93 changes
- Preserves the V6.5.92 operational Ship Countdown and FI Status color logic.
- Restores protected Ship Countdown geometry so two-line states such as **1 DAY OVERDUE** and **SHIPS TODAY** do not clip.
- Keeps the MFG Ship Date fully visible beneath the large countdown.
- Keeps all 5 Next System Tasks visible in regular Live Operations and Presentation Mode.
- Does not change the locked Universal Tool Card width, three-column structure, badge matrix, or overall card height.

- Repairs the malformed V6.5.91 CSS block that prevented the latest visual changes from loading.
- Regular Live Operations UTC now reserves enough middle-column height to visibly render all five Next System Tasks.
- Presentation Mode and regular UTC both consume the same five-task data list.
- Ship Countdown text and MFG Ship Date now use urgency colors: white >14 days, cyan 8–14, yellow 4–7, orange 1–3, red today/overdue, green shipped.
- FI Status now uses semantic colors: green ahead/on schedule/complete, red behind/line-down/at-risk, orange waiting for parts, cyan packing.
- Keeps V6.5.90 priority ordering, all active WIP tools in Update Command Center, POD badge, and single-source badge/Tool Edit synchronization.

# B7 FI Command Center V6.5.91

## V6.5.91 — Priority + All WIP + Single Source Lock
- Live Operations carousel is always sorted by the selected Priority source, highest priority first.
- Updated Command Center includes every active work-in-progress tool across all quarters; only Shipped and Archived tools are excluded.
- Badge editors and Tool Edit now share canonical option lists and write the same fields on the master tool record.
- Customer Source and STR badge editors expose the exact Required + Status selections used by Tool Edit.
- FACTD is no longer a separate Tool Edit selector; it remains a state of Options Testing.
- System Wafers, NC Close, and EQ Checklists were added to Tool Edit so they use the same fields as their badges.
- Legacy badge values are normalized into the current canonical values when data loads.

# B7 FI Command Center V6.5.91

**Presentation Full-Screen Tool Edit Lock** — Presentation Tool Edit now uses true browser/document scrolling instead of a nested popup scroller. Save Updates, Cancel, and X remain fixed while all editor fields can be reached.

# B7 FI Command Center V6.5.84 — Render Recovery + Presentation Scroll Lock

This build is based on V6.5.82 and repairs the render-stopping regression found during Presentation Mode testing.

## Fixes
- Repairs the `nextSystemTasksAuto()` FACTD / Options Testing scope error that could stop Live Operations / Presentation tool cards from rendering.
- Keeps FACTD merged into Options Testing and preserves the open Future Badge position.
- Preserves Lamp Off, System Power semantics, shared STR / Customer Source / Lamp source-of-truth behavior, and the V6.5.81 editor controls.
- Presentation Mode > Update Tool Status now uses normal browser-page scrolling instead of trapping the full Tool Edit page inside the scaled wallboard frame.
- Internal version/build identifiers and cache-busting references updated to V6.5.84.
- Universal Tool Card layout remains unchanged.

## Validation
- JavaScript syntax check passed.
- Static render-path review confirms `nextSystemTasksAuto()` now defines the combined Options Testing / FACTD state locally before use.
- Automated browser execution was not available in this environment, so please validate the live UI interaction in your normal browser during testing.


## V6.5.84 — Presentation Tool Edit Actions Lock
- Keeps the working full-page Presentation Tool Edit scrolling behavior.
- Adds a fixed, always-visible Tool Edit action bar in Presentation Mode with CANCEL, SAVE UPDATES, and X.
- SAVE UPDATES saves the active tool and returns to the same Presentation Mode source view.
- CANCEL and X discard/confirm unsaved changes through the normal cancel path and return to Presentation Mode.
- Presentation click shielding is disabled while the full Tool Edit route is active, so all Tool Edit fields and action buttons remain interactive.
- Regular Live Operations Universal Tool Card layout is unchanged.

## V6.5.91 — Presentation Tool Edit Internal Scroll Lock
- Fixes the regression where Presentation Mode showed SAVE UPDATES / CANCEL / X but the Tool Edit content could no longer scroll.
- Presentation Tool Edit is now split into two independent layers: a fixed 56px action bar and a dedicated `#app` editor scroll viewport below it.
- The normal Presentation header/footer are hidden only while the full Tool Edit overlay is open so they cannot consume or lock scroll space.
- The outer page remains overflow-locked; only the Tool Edit workspace scrolls. This prevents Presentation wallboard scaling/overflow rules from taking control again.
- SAVE UPDATES, CANCEL, and X remain visible at all scroll positions and still return to the originating Presentation view.
- Regular Live Operations and Universal Tool Card geometry are unchanged.


## V6.5.91 Presentation Tool Edit scroll fix
Presentation-launched Tool Edit is now detached from the `presentation-mode` wallboard CSS while editing. Fullscreen remains active, the browser document owns vertical scrolling, and Save/Cancel/X restore the same Presentation Mode view.


## V6.5.91 — Presentation Tool Edit Overlay Lock
- Restores UPDATE TOOL STATUS in Presentation Mode as a true overlay instead of navigating to the normal Tool Edit route.
- Presentation Mode stays visible and unchanged behind the editor.
- The overlay uses one dedicated scroll owner (`.presentation-tool-overlay-scroll`) with a fixed action header.
- SAVE UPDATES, CANCEL, and X remain visible at all times.
- Save writes the edited tool to the same source-of-truth record, refreshes the Presentation card, and closes the overlay.
- Cancel/X discard unsaved changes after confirmation and return to the unchanged Presentation view.
- Regular Live Operations / Tools Tool Edit routing is unchanged.


## V6.5.91 changes
- Replaced the Future Badge placeholder with POD. Default is NEED TO REQUEST POD (red); POD REQUESTED is green.
- Next System Tasks now displays up to five AUTO tasks and supports five MANUAL tasks.
- Presentation Mode redistributes the middle column to give Next System Tasks more room while reducing Live System Status and Lead Notes / Reminders by approximately one display line each.
- Presentation tool area uses more of the available vertical wallboard space with a tighter gap below the presentation controls.
- Existing V6.5.88 Presentation Tool Edit overlay behavior is preserved.


## V6.5.91 — Five-Task Parity + Operational Status Color Lock
- Regular Live Operations UTC now reserves enough middle-column height to display the same five Next System Tasks as Presentation Mode.
- Next System Tasks remains one shared AUTO/MANUAL list (maximum 5) across both views.
- Ship Countdown large text and MFG Ship Date now use time-to-ship urgency colors: >14 days white, 8–14 cyan, 4–7 yellow, 1–3 orange, today/overdue red, shipped green.
- FI Status large text now conveys schedule condition: Ahead/On Schedule green; Behind/System Line Down/At Risk red; Waiting for Parts orange; Packing cyan; neutral states white.
- These colors use the same shared UTC markup in regular Live Operations and Presentation Mode.


## V6.5.94 — Carousel Lifecycle + Status Drilldown + Presentation Alignment Lock
- Live Operations and Presentation Mode carousels now include every non-archived tool across quarters. Archive is the only lifecycle state that removes a tool from the carousel.
- Carousel order is: active FI/WIP tools by current Priority, then tools not yet in FI, then Shipped tools last. Shipped tools remain excluded from Priority/Status/workload calculations.
- Command Center automatic workload engine now evaluates cross-quarter WIP tools; quarter shipping totals remain scoped to the active quarter.
- Top quarter/status summary boxes are clickable on Live Operations and Presentation Mode and open a compact read-only tool list for that exact status set. Clicking a listed tool jumps the carousel to that tool.
- Packing / Shipping progress text now reports packing/shipping workflow states only (PACKING NOT STARTED, READY TO START PACKING, current milestone, FINAL PACKING, SHIPPED) instead of FI TESTING.
- Customer Source and STR Not Required / N/A progress bars use a neutral diagonal striped pattern to distinguish not-applicable from 0% incomplete.
- Regular Live Operations UTC geometry remains locked. Presentation Mode middle-column proportions now mirror the finalized regular UTC: Countdown, FI Status, Current System Status, 5 Next Tasks, Live System Status, Lead Notes / Reminders.