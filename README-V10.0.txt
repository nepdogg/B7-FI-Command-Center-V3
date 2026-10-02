B7 FI COMMAND CENTER — V10.0 CLEAN MODERN FOUNDATION TEST
Build: 2026-10-02

PURPOSE
V10 starts the clean visual rewrite requested for the B7 FI Command Center. The existing operational data model, Command Center Brain logic, quarter/carryover rules, tool workflows, local data keys, Microsoft List integration, multi-user script, archive logic, search, meetings, actions and tool-edit workflows are retained so the new UI can be tested against the existing functionality.

WHAT IS NEW IN V10.0
1. LIVE OPERATIONS IS NOW ONE LARGE UNIVERSAL TOOL CARD CAROUSEL.
   - No Fleet Intelligence sidebar competing with the tool.
   - New Tool Intelligence top bar with Priority + live tool-specific Brain message.
   - Three large columns based on the four sketches:
     LEFT: photo, UTID, tool type, model, customer, sales order, driver, quarter, process, carryover and 28 operational badges.
     MIDDLE: ship countdown, current tool/FI status, current system status, next system tasks, latest status and lead notes.
     RIGHT: FI, micro schedule, forecast, cycle time, Lead/Admin, Customer Source, STR, Packing/Shipping and overall Tool Shipment progress.
   - Operational badges use a 3-column layout for wider labels and larger text.
   - Tool photo uses the full photo region with contain scaling so it is not cropped.
   - The Tool Presentation Mode now uses the SAME V10 Universal Tool Card component.

2. CLICK / UPDATE BEHAVIOR PRESERVED ON THE NEW CARD.
   - Priority opens priority control.
   - UTID / Tool Type / Model / Customer / Sales Order open their direct editors.
   - Driver, Reduced Process and operational badges open their existing controls.
   - Ship date, FI status, system status, FI checklist, micro schedule, forecast, cycle target, Lead/Admin, Customer Source and STR retain quick-update controls.
   - Packing / Shipping opens the existing shipping handoff editor.
   - UPDATE TOOL STATUS opens the full Tool Control Center.

3. TOOLS CENTER IS NOW A FLEET BROWSER.
   - Compact KPI row + readable tool table instead of repeating full Universal Tool Cards.
   - Click a tool row to open Tool Control Center.

4. SHIPPING CENTER GETS A VISUAL FLOW SUMMARY.
   - Waiting/In FI -> Packing -> Shipped lanes above the detailed shipping table.
   - Existing shipping milestones and update controls remain.

5. CYCLE TIME / REFERENCE / DATA PAGES USE THE NEW DESIGN LANGUAGE.
   - Cycle Time keeps the new graphics and health visualization.
   - Reference Center uses large launch tiles.
   - Tables use open rows, fewer box borders and stronger status color.
   - Search, Action, Archive, Status, Meeting, Administration and Tool Edit inherit the V10 surface/spacing/type system.

6. RESPONSIVE / BROWSER ZOOM FOUNDATION.
   - Normal application shell is document-flow based.
   - Footer is static, not a viewport overlay.
   - Workspace uses min-height rather than a fixed desktop canvas.
   - No whole-dashboard transform scaling is added by V10.
   - Live Tool Card uses responsive CSS Grid and changes to a stacked layout only when the CSS viewport becomes narrow.

7. CSS CLEANUP FOR THIS BUILD.
   - index.html loads the existing functional base stylesheet plus ONE new V10 visual stylesheet.
   - The V7/V8/V9 patch stylesheets are no longer loaded and have been removed from this package.
   - V10 visual changes live in css/v10-command-center.css.

TEST FIRST
A. Start with LOCAL / TEST data before changing Production records.
B. Test Live Operations at browser zoom: 125%, 110%, 100%, 90%, 80%, 75%, 67%.
C. Verify Previous / Next / Pause Tool carousel controls.
D. Click every identity badge and several operational badges.
E. Click each middle-column status panel and right-column progress lane.
F. Verify Tool Presentation Mode uses the same card and Quarter Summary Presentation Mode still opens.
G. Test Tools, Shipping, Priority, Cycle Time, Status, Meeting, Action, Reference, Search, Archive, Tool Edit and Administration.
H. Test Microsoft/KLA login and Microsoft List multi-user sync in the actual work environment. This package preserves that integration, but external Microsoft authentication/List access cannot be validated in this offline build environment.

DATA SAFETY
- This package does not intentionally reset or clear production data.
- Existing local production storage key is preserved.
- Microsoft List reset/delete functions remain isolated in Administration and still require confirmation.
- Keep the previous working V9.3 folder as a fallback while V10 is being tested.

KNOWN TEST STATUS
- JavaScript syntax check passed for js/app.js.
- V10 CSS delimiter/brace validation passed.
- Full Microsoft authentication/List behavior requires testing in the connected work environment.
- Headless browser screenshot testing was attempted in the build container, but the container Chromium process did not complete reliably, so this build is intentionally labeled a TEST build rather than claimed fully verified.

FILES
index.html
css/command-center.css              Existing functional/base compatibility CSS
css/v10-command-center.css          New V10 visual foundation
js/app.js                           Existing Brain/data/workflow engine + V10 UI renderers
js/multiuser-test.js                Existing Microsoft multi-user integration
assets/*                            Existing KLA/tool/celebration assets
START-COMMAND-CENTER.bat
CREATE-COMMAND-CENTER-DESKTOP-SHORTCUT.bat

NEXT V10 PHASE AFTER THIS TEST
Use your screenshots from the FI monitor to lock the Universal Tool Card geometry first. Then refine Quarter Summary, Tool Control Center and each specialized Center without changing the locked card geometry.
