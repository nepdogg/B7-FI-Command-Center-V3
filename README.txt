B7 FI COMMAND CENTER V11.17.3 - PRESENTATION PERIMETER TEST

Based on V11.17.2.

CHANGES
- Tool Presentation Mode uses one cyan outer border enclosing tool card and navigation.
- Removes extra frame/border from the card wrapper and grid without removing individual column/section dividers.
- Reserves a fixed 48px bottom navigation row and sizes the card to the remaining viewport height.
- Normal pages, Quarter Summary Presentation, tool data, save logic and Microsoft List connector unchanged.

TEST
1. Extract to a separate folder; do not overwrite the production Command Center.
2. Open a test tool in Tool Presentation Mode.
3. Check full outer border and bottom navigation at 67%, 80%, 100%, 125% browser zoom.
4. Confirm all 3 columns end above nav; no second outer cyan frame; nav remains clickable.
5. Do not assume Microsoft List saving works; connection has not been verified.

VERIFICATION
- Package file checks only; visual behavior requires confirmation on the actual monitor.
