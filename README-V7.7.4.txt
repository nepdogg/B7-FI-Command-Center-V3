B7 FI COMMAND CENTER V7.7.4 — FOUNDATION LOCK
================================================

Purpose
-------
This build is a blocker-fix build for the final CY26Q3 -> CY26Q4 transition test.
It does not add another visual variant. It locks the existing universal components.

Changes in V7.7.4
-----------------
1. FIXED APPLICATION SHELL
   - Header, Center navigation, Leads Alert, System Status, Command Center status,
     and page navigation are one fixed shell.
   - Only the workspace below scrolls.
   - Footer remains in normal document flow.
   - Shell height is measured by the existing runtime and used as the workspace offset.

2. PRESENTATION QUARTER SWITCH FIX
   - CY26Q3 / CY26Q4 Quarter Summary controls are now explicitly allowed through
     the Presentation Mode interaction shield.
   - Existing B7PresentationQuarterSwitch handler remains the single switch path.

3. ONE UNIVERSAL QUARTER SUMMARY
   - Regular Quarter Summary, Presentation Quarter Summary, and the Live Operations
     Quarter Summary slide use the same master component geometry.
   - When Quarter Summary is the active Live Operations status slide, it owns the
     full combined carousel workspace. The Tool Card is temporarily hidden for that
     slide instead of squeezing the Summary into half the screen.
   - Same KPI geometry, eight live boxes, family rows, photos, red X overlays,
     progress bars, and reveal column.

4. ONE UNIVERSAL TOOL CARD LOCK
   - Retains the V7.7.3 single liveToolCard renderer.
   - Locks canonical internal order:
       Priority -> Identity -> Driver -> Quarter Lifecycle -> Process -> 28 badges -> Update
   - Locks the same middle and right column section geometry in every host.

5. BROWSER ZOOM / LIVE OPERATIONS
   - Removes the final minimum-height floor from the Live Operations workspace.
   - Workspace height follows the CSS viewport at browser zoom.

6. EXISTING V7.7.x FUNCTIONALITY RETAINED
   - Rotating status-bar Brain message pool.
   - Final-day / Carryover lifecycle banner.
   - Quarter lifecycle / carryover logic.
   - Multi-user files and startup launcher unchanged.

Priority test sequence for tomorrow
-----------------------------------
A. Normal page: scroll a long page and confirm the complete shell remains fixed.
B. Quarter Summary Presentation: switch CY26Q3 -> CY26Q4 -> CY26Q3.
C. Compare CY26Q3 Summary page, Live Operations Quarter Summary slide, and
   Presentation Quarter Summary. Internal layout should be the same.
D. Compare one UTID in Tools, Live Operations Tool Card, and Tool Presentation.
E. Browser zoom: 100%, 90%, 80%, 75%, 67%, 110%, 125%.
F. On CY26Q4 activation, confirm unfinished CY26Q3 tools receive Carryover state/banner.

Packaging
---------
Exactly one README/update TXT file is included in this package.
