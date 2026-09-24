B7 FI COMMAND CENTER — V7.6.23
Build: 20260923-V7.6.23-SUMMARY-DYNAMIC-FOOTER

V7.6.23 CHANGES
- Quarter Summary top progress-bar fill now follows the same dynamic urgency state as the large hero box. With 8 tools left and 7 days remaining, the quarter-level bars use the critical red treatment instead of healthy green.
- Presentation Mode fleet rows remain fully dynamic: fewer tool families expand to fill the available table space; more families compress so every family remains visible on one screen.
- Normal Quarter Summary is now intentionally taller and scrollable rather than clipping the last tool-family row.
- Normal Quarter Summary gives more vertical space to the two large hero boxes and slightly less to the small summary strip.
- Every normal-page family row must render completely; the footer no longer covers the last row.
- Footer redesigned around purpose rather than equal widths: compact Administration navigation, Multi-User connection state, a larger Command Center Activity area, and Last Sync.
- Multi-User and Last Sync remain separate because connection state and data freshness are independent.
- Preserved V7.6.21 responsive Quarter Summary, Live Operations parity, KLA presence panel, Tool UTID dropdown, and prior multi-user synchronization changes.

TEST FOCUS
1. Quarter Summary Presentation Mode: confirm critical hero bars are red and all family rows dynamically fill the available height.
2. Reduce the number of tool families and confirm remaining family rows grow to use the space.
3. Normal Quarter Summary: confirm the page can scroll and every family row, including the final row, is fully visible.
4. Confirm the two normal-page hero boxes have improved vertical spacing.
5. Footer: confirm compact ADMIN, Multi-User status, wide Activity, and Last Sync are all visible and balanced.
6. Continue two-laptop Add / Update / Delete shared-mode testing.

V7.6.23 TEST UPDATE
- Quarter Summary Presentation Mode restored to a strict one-screen layout: no blank bands above/below fleet rows and bottom navigation remains visible.
- Fleet rows dynamically divide the available Presentation Mode height.
- Removed the unnecessary outer border around the tool-family matrix while retaining individual row/cell borders.
- Normal Quarter Summary can grow/scroll so the final tool-family row is never sacrificed.
- Presentation Universal Tool Card geometry locked to the approved reference layout for all tool states (Testing/Packing/Shipped/etc.).
- KLA/user connection panel widened/tallened to prevent stacked user badges from clipping at 100% browser zoom.
