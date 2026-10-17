B7 FI COMMAND CENTER V11.17.59 — CANONICAL LAYOUT TEST

Source: V11.17.58 user-uploaded package.

Changes: Removed V11.17.58 last stylesheet reference and replaced it with one targeted canonical stylesheet for normal Universal Tool Cards. Explicitly target the actual .c11-identity-column > .c11-badges > .c11-badge markup. Operational badges have 43px minimum row height, consistent grid row stretching, and no text clipping. Full-width System Wafer, Computer and Component rows have independent sizing. Photo height reduced to release space. Middle/right individual section outlines replaced by horizontal dividers. Three-column desktop layout; stacks only below 850 CSS pixels. Sticky header and normal document scrolling restored; footer remains in normal flow. Browser tab, application heading and startup launcher updated to V11.17.59.

Preserved: existing application JS and Microsoft List code, presentation-mode styles, graph features and assets. This is not a verified fix for authentication or multi-user deletion.

CHECK: deploy entire ZIP to GitHub Pages, refresh Ctrl+Shift+R, verify badge size and card at 80/100/125/150% browser zoom; scroll to check sticky header. Test multi-user functions with disposable tools only.

Verification: file references and JS syntax and ZIP integrity checked. Live browser visual parity and Microsoft List sync NOT VERIFIED. Keep existing production backup.
