# B7 FI Command Center V6.6.02 — Laser + Options Testing Workflow Lock


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