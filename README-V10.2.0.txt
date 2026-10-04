B7 FI COMMAND CENTER — V10.2.0 AUTHORITATIVE COMPONENT RESET
Date: 2026-10-03

PURPOSE
This build is based directly on V10.1.9 and replaces the final runtime geometry for the repeatedly failing shared components instead of adding page-specific visual tweaks.

CHANGES
- Canonical Tool Status Bar geometry now applies identically to Live Operations and Tool Card Presentation Mode.
- Tool Status Bar remains one continuous element: Priority/Source, UTID + Tool Type/Model, status icon/message, View Details.
- Header uses a contained 24/52/24 responsive grid; KLA + eight-user assembly is centered and bounded.
- Header titles dynamically reduce font size instead of clipping.
- Main Navigation remains equal-cell and contained to the viewport.
- Every Page Navigation bar uses content-aware sizing based on the complete button labels; long labels receive more width, arrows receive less, and the row consumes exactly the available width.
- Normal Live Operations shell/tool card expands through the effective browser viewport as browser zoom changes.
- Progress tracks increased again to 24px in normal mode; Presentation Mode uses 14px to preserve full-card fit.
- Normal pages remain frameless; Presentation Mode retains its intentional presentation frame.
- Existing quarter lifecycle, carryover, data, badges, tools, and multi-user behavior retained.

TEST FIRST
1. Live Operations at browser zoom 100%, 80%, and 67%.
2. Compare Live Operations Tool Status Bar directly with Presentation Mode; internal order/geometry should match.
3. Visit several Centers and verify every Page Navigation label is complete and the final button remains visible.
4. Verify left/right header titles and complete KLA/user block remain visible.
5. Check progress-bar thickness and Tool Card vertical fill.

NOTE
This package contains one consolidated README/update file only.
