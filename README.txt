B7 FI COMMAND CENTER V11.17.45 — BROWSER ZOOM RECOVERY TEST

SOURCE: V11.17.44 full application. No tool records or Microsoft List settings intentionally modified.

CHANGES:
- Introduced a low-browser-zoom normalization layer for standard pages. Edge/Chrome browser zoom below 100% reduces devicePixelRatio; the new logic adjusts application layout zoom and CSS viewport width together to keep the interface from collapsing into tiny text at very low zoom.
- Removed the V11.17.44 forced 760px minimum height from the normal Live Operations Tool Card so middle/right columns do not stretch into oversized empty sections.
- Preserved the existing shared badge styling and card functionality.
- Version updated to 11.17.45.

KNOWN LIMITATIONS / SAFETY:
- Browser-rendered visual verification was blocked by this environment. This is an UNVERIFIED TEST BUILD, not a production-ready fix.
- DevicePixelRatio also reflects Windows display scaling, so zoom normalization may be imperfect on displays with 125%/150% Windows scaling or multiple monitors.
- The accumulated legacy CSS still exists; this build is a targeted zoom experiment, not a full layout rewrite.
- Do not use production reset/import, and do not overwrite the working production deployment without backup.
- Microsoft List sign-in for different users and the planned Brain, reporting, and editor redesign are NOT repaired here.

TEST:
1. Extract to a new folder. Keep V11.17.44 and your live data safe.
2. Open the test site and check browser zoom 25%, 50%, 67%, 80%, 100%, 125%.
3. Compare header spacing, badge readability, card alignment, and footer position.
4. Verify the same tool UTID in Live Operations, Tools Center, and Presentation Mode.
5. If a layout issue remains, record zoom %, Windows display scaling %, and a screenshot.
