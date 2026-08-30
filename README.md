# B7 FI Command Center V5.6.1

## Locked Shell + Universal Tool Card

This build preserves the V5.6 automation-engine foundation while restoring the finalized application architecture and enforcing one universal tool-card component.

### Navigation
- Update Center is consolidated into Operations Center.
- Archive Center is consolidated into Operations Center.
- Operations page navigation now provides Live Operations, dynamic quarter tool views, All Active Tools, Command Center Daily Update, and Quarter Archive.
- Presentation Mode is available directly from the primary navigation bar.
- Older saved Update/Archive routes automatically normalize to their new Operations locations.

### Universal Tool Card
- Live Operations and Operations > Tools use the exact same renderer and final CSS geometry.
- No Update/Tools-specific internal card styling is permitted.
- Operations > Tools displays two native universal cards side-by-side on desktop.
- The Status and Tool Carousel frames are restored to equal 660px dimensions.
- The middle Tool Status column uses four balanced sections so FI Forecast is not clipped.

### Automation / Forecast
- Retains V5.6.0 centralized Command Center automation-engine calculations.
- FI Forecast now uses management cycle targets when available and falls back to ship-date schedule interpolation / Micro Schedule information when possible instead of returning TBD prematurely.

Existing localStorage data remains under `b7fi-command-center-v3`.
