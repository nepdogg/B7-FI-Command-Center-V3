B7 FI COMMAND CENTER — V7.6.20
Build: 20260923-V7.6.20-NAV-HEADER-PROGRESS-READABILITY

START
1. Extract the entire ZIP to a normal folder.
2. Double-click START-COMMAND-CENTER.bat.
3. Keep the black server window open.
4. Open http://localhost:5500/ if the browser does not open automatically.
5. Test at 100% browser zoom.

V7.6.20 CHANGES
- Replaced the native TOOL UTID select with the same custom dark submenu component used by TOOL TYPE.
- TOOL UTID is populated dynamically from active Update Command Center tools and jumps to the selected tool card.
- Corrected KLA/user-presence geometry so all four badges fit inside the existing KLA border without clipping.
- Enlarged the KLA logo vertically to match the two stacked user-badge rows.
- Quarter Summary top progress bars now use two balanced message zones with a center divider:
  tools shipped | tools left to ship, and day X of Y | days left.
- Quarter Summary Presentation Mode top progress bars are taller with larger text.
- System-family SHIPPING PROGRESS bars are much taller and nearly fill their cells, with larger readable text.
- Preserves V7.6.19 fleet tool icons/red shipped X behavior and V7.6.18 multi-user changes.

TEST FOCUS
- Update Command Center: TOOL UTID dropdown should look and behave exactly like TOOL TYPE.
- Header: verify all four user slots fit with no clipping and KLA logo is vertically balanced.
- Quarter Summary Presentation Mode: verify taller family progress bars and separated top-bar messages.
- Continue two-laptop shared Add / Update / Delete testing.
