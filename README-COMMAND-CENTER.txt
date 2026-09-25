B7 FI COMMAND CENTER — V7.6.29

V7.6.29 TEST BUILD
- Local Add/Update/Delete/save activity is now wired to the top Command Center Activity bar.
- Last Activity persists in the footer after the page rerenders.
- Local actions now timestamp Last Sync as LOCAL + time.
- Footer is explicitly locked to three equal columns with no legacy empty column.
- Existing V7.6.28 multi-user and Quarter Summary fixes are preserved.

TEST: Extract, run START-COMMAND-CENTER.bat, use 100% browser zoom, update/add/delete a local tool, then verify both top activity bar and footer change immediately.
