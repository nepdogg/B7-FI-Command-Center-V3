# B7 FI Command Center V6.0.0 — Clean Foundation

This release is a stability rebuild of the presentation layer using the existing V5.6.7 business/data logic as the compatibility baseline.

## Data compatibility
- Keeps the existing browser storage key: `b7fi-command-center-v3`.
- Existing V3 Command Center production data remains compatible.
- Existing tool, status, shipping, meeting, action, archive, reference, cycle-time, screenshot/presentation, and administration workflows are retained.

## V6 clean-system changes
- Historical competing Universal Tool Card CSS selectors were removed before the V6 stylesheet was written.
- The Universal Tool Card now has one host class: `universal-card-host`.
- Live Operations and quarter Tools pages call the same `liveToolCard()` renderer and use the same host/card rules.
- The middle status column has one four-zone layout: Ship Countdown, FI Process, FI Cycle Time, FI Forecast.
- FI Process status is enlarged and FI Forecast uses a stacked next-step selector with a larger date.
- Operations navigation labels are locked to `UPDATE COMMAND CENTER` and `TOOL ARCHIVE`.
- `ALL ACTIVE TOOLS` is not present in Operations navigation.
- Carousel names are stacked over PLAY/PAUSE to save horizontal space.
- Page/action controls use one full-width bar system.
- `DATA: PRODUCTION` is located next to Administration Center in the footer.
- Current-quarter navigation no longer uses a special green treatment.
- Tool-family jump navigation remains available and sticky.

## Version
- Version: 6.0.0
- Build: `20260830-V6.0.0-CLEAN-FOUNDATION`
