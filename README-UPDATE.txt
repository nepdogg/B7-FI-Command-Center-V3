B7 FI Command Center V11.18.10 — Forecast bar selected target display TEST
Based on V11.18.09.
The FI Forecast Progress bar now displays the selected checklist code and calculated forecast date INSIDE the bar, plus the checklist name and date below it.
Selection updates the card through the existing save/render handler. If no schedule supports a date, shows FORECAST DATE: TBD rather than a fabricated date.
FI Progress remains the current checklist/completion progress indicator.
Regression testing required on laptop and large monitor, Microsoft Lists sync, zoom, sticky header, tool cards and forecast popup.
