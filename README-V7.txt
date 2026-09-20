B7 FI COMMAND CENTER V7.0.1 — CLEAN FOUNDATION

Purpose
- First clean-foundation build after V6.6.x responsive regressions.
- Preserves existing Command Center data, workflows and Multi-User test logic.
- Replaces the normal-mode shell/summary/footer geometry with a bounded 1920x1080 design canvas.
- Browser zoom is not detected or compensated for. The browser scales the bounded canvas naturally.
- Removes viewport-derived JavaScript sizing from Quarter Summary.
- Normal Quarter Summary and carousel Quarter Summary share the same CSS geometry.
- Footer is exactly two rows with seven presence badges and one system-information row.

First regression test
1. Open at 100% zoom.
2. Test 80%, 50%, 25%, then 110% and 125%.
3. The Command Center should scale down when zooming out instead of inflating to fill the larger CSS viewport.
4. Check normal Quarter Summary and the carousel Quarter Summary: both progress bars must remain visible and family rows must distribute evenly.
5. Check footer: no phantom black third strip; seven badges remain visible.
6. Only after layout passes, resume 1-tool / 9-tool Microsoft List testing.
