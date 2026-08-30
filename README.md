# B7 FI Command Center V5.6.0 — Tool Editor Workflow Polish

Changes: reorganized FI/Micro Schedule editor; removed editor Lead/Admin progress bar; controlled Cleanroom CR1/CR2/CR3; Macan models 2930XR/2935XR; standardized AV Data/SCC Cleanup/Backup lists; split Customer Source and STR workflows; combined source handoff/start and return-to-FI date labels; standardized shipping schedule status; paired Next Step Forecast checklist with forecast date; reinforced Mystery/Reveal visibility in Screenshot and Presentation modes. Existing localStorage key/data remain compatible.

# B7 FI Command Center V5.5.17 — Navigation Effects + Presentation Restore

This build continues the consolidated Operations Center architecture.

Changes in V5.5.17:
- Operations Center page-navigation buttons are equal-width, larger, and more pronounced across the available navigation area.
- Previous, current, and next-quarter universal tool-card pages are locked to two cards per row on normal desktop widths.
- An odd final tool card remains half-width instead of stretching across the entire page.
- The consolidated Operations Center now receives the same universal-card geometry/parity CSS that previously applied only to the old Update Center.
- Tool cards collapse to one per row only on narrow/mobile widths.
- Existing Live Operations carousel controls and Operations actions are preserved.
- Existing localStorage key/data compatibility is preserved.


V5.5.17: Operations page navigation now uses the standard five-button Center page-nav treatment. Added a permanent PRESENTATION MODE action to the main navigation. It always presents Live Operations and returns to the originating page when Presentation Mode exits (including Esc/fullscreen exit).


V5.5.17: Operations action controls now match the standard page-action geometry; current-quarter navigation uses the Operations accent instead of green; the global Presentation Mode button inherits the active Center color on hover/focus; Presentation Mode hides all page navigation/actions and still returns to the originating route on exit.


V5.5.17: Standardized hover/focus/active feedback across the main Center navigation, all Center page-navigation bars, and page actions. Each main Center previews its own identity color; page navigation inherits the active Center accent. Fixed the first-exit Status Center Presentation Mode scale bug by deferring route/layout restoration until fullscreen has fully closed and clearing presentation zoom before the normal render.


## V5.6.0 Automatic Forecast Engine
- Added centrally stored Regera/Celestiq and standard-tool timing profiles.
- Automatic checklist-based FI/power-down forecasts.
- Automatic required power-down date from ship date minus 5-day or 3-day packing window.
- Automatic schedule health feeds Systems Requiring Attention.
- Forecast Center now compares estimated FI completion, required power down, packing window and ship date.
- Calculation Standards are editable in Administration and saved in the existing local database.
