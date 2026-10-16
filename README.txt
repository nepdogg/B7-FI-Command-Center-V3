B7 FI Command Center V11.17.47 — Layout + Email Report TEST

SOURCE: Complete V11.17.46 package. Keep V11.17.46 and production data backed up.

ACTUALLY CHANGED:
1. Added a new layout stylesheet intended to restore the normal sticky shell at the top of the page, prevent app-wide zoom compensation, and keep badge rows at consistent 48px heights in normal views. Removed the reference to a missing V11.17.45 layout stylesheet (points to existing V11.17.44 file instead).
2. Added Shipping Center COPY EMAIL REPORT and PREVIEW REPORT buttons in view mode. The HTML report uses saved tool shipping planned dates, actual dates, and notes. MST is N/A for tool families that do not require it. Paste into Outlook; no email is sent by the app.
3. Added Priority Center COPY EMAIL REPORT and PREVIEW REPORT buttons in view mode. Report uses saved weekday/weekend priority order, assignments, and notes. Save edits before copying.
4. Updated app and browser-tab version to 11.17.47. Preserved existing source, tool edit controls, Microsoft List code, and assets.

NOT COMPLETED: The full unified Tool Card rewrite, complete Brain rule configuration, tool type/model master editor, full visual editing redesign, full administration redesign, and all outstanding production bugs. These must not be represented as finished.

TEST INSTRUCTIONS:
- Extract to a NEW folder and launch on localhost. Do not overwrite the live GitHub Pages deployment or modify the production Microsoft List during testing.
- Test 67%, 80%, 100%, 125% browser zoom; verify sticky header when scrolling, equal badge heights, and no clipping. If it fails, capture screenshot and zoom value.
- Shipping Center: Edit Shipping, enter planned dates and notes on TEST tools, Save, then Preview/Copy Email Report. Paste into an Outlook draft and verify the table.
- Priority Center: Edit weekday/weekend priorities, Save, then Preview/Copy Email Report. Verify ranks and notes.
- Rich HTML clipboard may require HTTPS or localhost and clipboard permission; the fallback displays selectable HTML.
- Confirm tool updates, other pages, and multi-user diagnostics still behave as before. No Microsoft List authentication or cross-user synchronization testing was possible in this environment.

VERIFICATION: JavaScript syntax, package files, and ZIP integrity checked. Automated Chromium visual rendering was attempted but did not complete; responsive layout is NOT visually certified.
