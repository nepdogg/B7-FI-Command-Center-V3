FI COMMAND CENTER V14.0.21 — REGRESSION AND STARTUP REPAIRS
Based directly on your uploaded V14.0.20 Regression Repair.

CHANGES IN THIS VERSION
- Preserves V14.0.20's larger 120px header. Corrects the bundled script that still forced it to 96px after rendering.
- Preserves two static mini Raider shields in the center header, including Local Mode. Uses the transparent mini-shield asset. Connected-user badges remain separate.
- Makes the tool-badge rows uniformly 84px with equal 8px gaps and black backgrounds. V14.0.20's auto-sized rows could differ in height. Wafer and equipment badges keep their normal grid cells.
- Restores the System Wafers kit-status text alongside the additional FI wafer counts. The underlying kit data is unchanged.
- Retains the nonsticky footer and consistent-height cells, with the footer after page content.
- Removes an obsolete malformed UTC CSS fragment found during structural checking.
- Corrects the runtime version constant, title, header, footer and startup labels to V14.0.21.
- Replaces the PowerShell-based startup/browser sequence with a standard-library Python launcher. Tests an actual Python interpreter, checks required files, starts the server, then requests the browser.
- Reports a conflicting older server instead of silently opening it; reuses an already running V14.0.21 server. Displays the URL if browser launch is blocked.
- Adds no-cache headers and a read-only local version endpoint.
- Complete ZIP includes the unchanged assets and icon from your supplied V14.0.17 package. Your V14.0.20 ZIP contained no assets. The small update ZIP requires your existing assets folder.

PRESERVED FROM V14.0.20
Command Center Brain section, click-through tool intelligence, separated status-message sources, forecasts with pending states, silver progress fills, automatic Powered Down tower state, shared-data comparison/merge safeguards, shared settings/volunteers, and prior presentation repairs. Existing browser data keys remain unchanged. One application CSS, one application JS, one README.

VALIDATION
Passed JavaScript syntax and Python compilation checks.
Passed focused logic tests for canonical comparisons, disjoint field merges, same-field conflict rejection, shared weekend metadata, weighted progress, blocker/pending forecasts, card/detail consistency, text escaping, and all eight tower states.
Passed launcher checks for required files, browser success/fallback, same-version reuse and older-version collision handling.
Passed actual local HTTP requests for the version endpoint, index, no-cache headers, JavaScript MIME/version and shield asset.
Passed CSS structural checks, local asset references and ZIP integrity.

LIMITS / OUTSTANDING VERIFICATION
The browser engine is blocked in this environment, so rendered fit, zoom, hover and presentation have not been visually verified. Windows browser launch and your KLA Microsoft List connection cannot be verified on this Linux host. Live two-laptop synchronization remains a field test.
The newer badge-completion rules and options-tracker/rack-label discussion from the other chat are not fully available here. This release does not add an options tracker or invent new completion rules from partial notes.

INSTALL COMPLETE PACKAGE
1. Extract the complete ZIP into a NEW normal folder. Do not run from inside the ZIP. No manual asset copying is needed.
2. Close the previous Command Center server window.
3. Run START-COMMAND-CENTER.bat. Keep its status window open while using the application.
4. If browser launch is blocked, open http://localhost:5500/ manually.
5. Confirm V14.0.21 and press Ctrl+F5 once.
6. Opening index.html directly remains available for a local visual check, but Microsoft sign-in requires the localhost server.

INSTALL SMALL UPDATE
Make a copy of your complete existing V14.0.17–V14.0.20 folder. Extract the small update into that copy and replace matching files. The copied folder must retain its assets directory and icon. Then follow steps 2–5 above.

FIRST FIELD CHECK
Confirm the 120px header, two center shields, equal badge heights/gaps, wafer kit text, footer position, and the Brain/tower controls. Check both presentation modes. Then test a harmless save on each work laptop and confirm the other laptop receives the verified changes. Merely opening this build does not import test tools into your List.
