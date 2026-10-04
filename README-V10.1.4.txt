B7 FI COMMAND CENTER V10.1.4 — RESPONSIVE / PRESENTATION / FLEET LOCK
Date: 2026-10-03

This build is based on the actual V10.1.3 source and consolidates the latest test feedback.

CHANGES
- Header presence is now 2x2 users on the left of KLA+ and 2x2 users on the right (8 total), without increasing header height.
- Page Navigation uses one continuous dynamic grid: every visible control shares the full row; no reserved carousel spacer; no right-edge clipping.
- Page Navigation retains the same rounded visual language and height as Main Navigation.
- Tool Status headline now begins with UTID + tool type/model at the same size/weight as the Brain message.
- Tool Status message may wrap to two lines instead of truncating with ellipsis.
- Priority block removes the redundant HIGH PRIORITY wording and identifies LEADS or COMMAND CENTER priority.
- Live Operations outer body/master Tool Card frame is explicitly removed at the actual page/body/card wrapper levels.
- Normal Live Operations now stretches into viewport height exposed by browser zoom instead of remaining a fixed-height miniature canvas.
- Footer Administration Center and Presentation Mode controls receive modern rounded dark/cyan button styling.
- Tools page table is replaced by compact visual Tool Identity Cards based on the Universal Tool Card left column.
- Tools pages restore Tool Type family headings and per-family status summary boxes.
- Compact Tools cards add a Priority badge above the photo and retain identity, Ship Date, process/carryover, operational badges, System Wafers, and Update Tool Status.
- Tool Card Presentation Mode now reserves the bottom navigation height and compacts all three columns to fit above it.
- Quarter Summary Presentation Mode gets explicit viewport containment and a visible outer frame above the presentation navigation.
- Existing quarter-switch logic is retained so selected summary quarter is the renderer source.
- Existing Brain, data, editing, shipping, archive, and multi-user logic retained.

TEST FIRST
1. Header: verify 2x2 user grid | KLA+ | 2x2 user grid.
2. Page Navigation: verify zero gap after carousel controls and SCREENSHOT is fully visible.
3. Live Operations: verify no master outer border and full Tool Status message is visible (1 or 2 lines).
4. Zoom: test 100%, 90%, 80%, 75%, 67%, 110%, 125%; workspace should use available height.
5. Tools: verify family headings and compact visual cards replace the old one-line table.
6. Presentation Tool Card: verify entire left badge matrix, middle cards, right progress/readiness, and bottom nav are visible simultaneously.
7. Presentation Quarter Summary: verify full outside frame is visible and selected quarter matches displayed quarter.

NOTE
Browser/KLA/Microsoft List rendering must still be validated in the production Edge environment. Syntax/archive checks do not substitute for that visual/runtime test.
