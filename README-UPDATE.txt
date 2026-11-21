FI COMMAND CENTER V14.0.22 — LAYOUT RESTORATION TEST
Based on V14.0.21 functionality and the earlier V14.0.17 styling baseline.

WHY V14.0.21 LOOKED WRONG
The new normal-page layout stretched the status and progress panels to fill the much taller two-column badge area. Generic progress-panel rules also affected the Brain heading. The image selected for the static mini Raider logos was actually an empty shield outline. These were layout regressions introduced in the updates, not a reason to change your tool data or browser zoom.

CHANGES FOR YOUR SCREENSHOTS
- Removes the broad V14.0.19 normal-page geometry overrides and the V14.0.20/21 badge-size overrides. Uses the earlier styling as the base.
- Restores the earlier 156px header size in both CSS and the runtime header enforcer.
- Uses the actual Raider logo for both static mini logos, rather than the blank outline asset. Connected-user initial badges remain separate.
- Lays out the KLA logo, connection labels and date/time in normal document flow inside the center panel; removes competing absolute positioning and extra pseudo-elements there.
- Restores three tool-badge columns and one 64px height for ordinary, wafer and equipment badge cells. Identity and FI date cells also use 64px. Black backgrounds and equal 6px gaps.
- Stops middle and right cards from expanding to hundreds of pixels merely to fill the left column. Cards size from their content with deliberate minimum heights.
- Reserves icon space in status headings. Icons no longer sit on top of the tool name or large status text.
- Reduces progress-track margins and restores compact progress panels.
- Gives the Command Center Brain its own heading and track classes. The legacy overall-progress panel styles cannot clip the Brain header. Its full section remains clickable.
- Restores a compact, consistent 52px footer row after the content. It remains nonsticky. Text can wrap; disconnected text is no longer falsely green.
- Removes duplicate decorative status dots and keeps critical counts highlighted during message rotation.
- Updates all runtime and visible version labels to V14.0.22.

PRESERVED
Tool data format, browser storage keys, shared saves, priorities, volunteers, Brain calculations and click-through, forecast logic, all eight Signal Tower states, silver fills, System Wafers kit-status/counts, and the V14.0.21 Python startup launcher. No new shared fields or data migrations were introduced by this layout repair. One application CSS, one application JS, one README.

VERIFICATION
JavaScript syntax and Python compilation passed. Focused execution checks passed for shared comparisons/merges, conflict rejection, weekend metadata, weighted progress, blocker forecasts, Brain card/detail output and all eight tower states. Source-contract checks confirm the restored header height, real logo references, original-size badge grid, removal of the stretching layer, independent Brain classes, and matching version labels. Local HTML/CSS image references and CSS structure passed. The two shield artwork files were inspected directly, identifying the empty-outline mistake.
Rendered browser verification is NOT complete. Local Chromium is blocked and the remote preview cannot access the local server. No KLA Microsoft List connection was made. Do not treat this as a claim that all screen sizes or live work-laptop behavior have passed.

INSTALL — GITHUB PAGES
Your screenshots show GitHub Pages. Replace index.html, css/command-center.css and js/command-center.js from the SAME V14.0.22 package in your repository. Keep the assets directory. Do not mix files from different versions. Once Pages updates, use Ctrl+F5 and confirm V14.0.22.

INSTALL — LOCAL WINDOWS
Extract the full ZIP into a NEW folder, close the previous server, and run START-COMMAND-CENTER.bat. The full ZIP includes assets. For the small update, extract over a COPY of your existing complete folder and replace matching files; retain its assets and icon. If browser launch is blocked, manually open http://localhost:5500/ . Direct index.html is a local visual check only; Microsoft sign-in requires localhost.

COMPARE FIRST
Check the top and bottom of Live Operations: header center text and two real logos, three-column equal-height badges, status-heading icon spacing, compact right-side progress panels, complete Brain heading, and footer row. Then check presentation separately. Use the test data already present; this package does not automatically publish test tools to your List.
The newer options-tracker and badge-completion requirements from the other chat remain outside this targeted visual repair because their full specification was not supplied here.
