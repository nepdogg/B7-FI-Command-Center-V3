# B7 FI Command Center V4.3.0 — Tool Editor Routing Fix

This build is a focused stability update on top of V4.0.0.

## Core fixes
- Rebuilt the **ADD TOOL** click path so it directly opens the blank full Tool Editor.
- Rebuilt tool-card routing so Live Operations, Update Center tool cards, Search results, and tool-specific alert bars directly open the selected tool's full Tool Editor instead of only switching to Update Center.
- Added an independent Tool Editor state so the selected tool/create mode cannot be lost during center navigation/rendering.
- Kept duplicate UTID validation and the existing Save/Cancel workflow.
- Removed the white photo panel from the Live Operations tool image area; transparent tool PNGs now render over the Command Center dark background and remain centered/contained.
- Preserves V4.0.0 status colors, modal fixes, backup/restore, and unified Operations layout.

## First tests
1. Update Center → ADD TOOL → verify the blank Tool Editor appears with CANCEL / SAVE TOOL.
2. Save a test tool and verify it appears in the current-quarter list.
3. Click any current-quarter tool card and verify its full Tool Editor opens.
4. Click a Live Operations tool carousel card and verify the same Tool Editor opens for that exact UTID.
5. Search for a tool and click the result.
6. Click a tool-specific top alert.


## V4.3.0 core-routing hard fix
- Add Tool uses a direct, global click path and forcibly re-renders the blank Tool Editor after the click event completes if any legacy navigation handler reset the page.
- Live Operations tool cards, Update Center tool cards, Search tool results, and tool-specific alert bars use direct tool-editor routing.
- Tool Editor state is re-asserted on the next event-loop tick so a later delegated handler cannot leave the user on the Update Center list.
- Save Tool and Cancel Tool have direct editor handlers on the page action buttons.
- Tool photo panels remain dark/transparent rather than painting the old white rectangle.


## V4.3.0 core fix
- Rebuilt Tool Editor as an explicit Update Center route (`tool`) instead of inferring editor state from the generic tools list.
- Live tool card, Update Center tool card, Search result, and alerts now route directly to a selected tool editor.
- ADD TOOL routes directly to a dedicated new-tool editor.
- Save/Cancel return to the originating page or CY26Q3 Tools.

- Initial Tool Editor render now bypasses the generic Update Center body renderer entirely and writes the Tool Editor directly into the page body. This is the hard fallback for the exact failure observed in V4.2 where the action bar entered edit mode but the tool list remained visible.
