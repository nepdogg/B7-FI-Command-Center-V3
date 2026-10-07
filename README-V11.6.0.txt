B7 FI COMMAND CENTER V11.6.0 — FOUNDATION REBUILD

Purpose
This build replaces the conflicting final layout behavior for the specific structural failures repeatedly seen during testing.

Foundation changes
- One fixed normal-page global shell: Header, Center Navigation, three Status Bars, and Page Navigation move/stay together.
- Body offset is measured from the real shell height after resize/zoom.
- Header uses one shared 3-column height; center KLA/user content must fit inside it.
- Page Navigation uses one 48px geometry on every normal page.
- Universal Tool Card Live Operations geometry is fixed. Tool content cannot change outer card/section dimensions.
- Priority/Tool Identity bubble is fixed size; only internal text adapts.
- Tool Status has one border around the complete message/View Details bubble, not around message text.
- Tool Edit retains left-side section navigation with one selected section visible.
- Presentation Mode no longer uses the old virtual 1920x1080 transform/scaling path for Tools or Quarter Summary.
- Tool Presentation reserves a dedicated bottom navigation row.
- Quarter Summary Presentation consumes the complete available viewport and reserves its navigation row.
- Existing quarter-aware Tools/Summary presentation destinations remain available.

Blocking validation targets
1. Normal page: scroll and confirm Header through Page Navigation remains visible.
2. Repeat at browser zoom 80%, 90%, 100%, 110%, 125%, 150%.
3. Switch tools: Tool Card section borders must not move because text/content changes.
4. Open Tool Edit: left section navigation must be visible and only one section shown at a time.
5. Tool Presentation: complete card border and bottom nav must both be visible.
6. Quarter Summary Presentation: no unused bottom gap and bottom navigation must be visible/clickable.
7. Navigate between quarter Tools and Summary views from Presentation navigation.

Install
Replace the prior site files with this package. Confirm upper-left header reads V11.6.0 before testing. A hard refresh is recommended after deployment because older builds used aggressively cached CSS/JS names.
