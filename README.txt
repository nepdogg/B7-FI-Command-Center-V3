B7 FI COMMAND CENTER V11.17.83 — TOOL GROUPS & MILESTONES TEST

Starting point: V11.17.82 Shipping/Archive test package.

CHANGES
- Tools Center groups tools by type, with five live status count boxes directly above each type’s cards and a strong divider after the group. Three cards per row at desktop widths.
- FI Handoff Date and FI Powered Down Date appear as two equal-sized badges ABOVE Normal/Reduced Process in Live Operations, Tools Center and Presentation Mode.
- Computer Tracking and Component Tracking remain in the original operational badge area; no new history system was introduced.
- New tool records initialize FI Powered Down Date explicitly.
- Preserves entered line breaks in Presentation Mode notes/latest status via CSS.
- Single version label V11.17.83 in title/header/app code and cache query parameters.

TEST
1. Run local start BAT file and confirm V11.17.83 in header and tab.
2. Open CY26Q4 Tools: Boxster group, status boxes, Boxster cards, divider, then next type.
3. Check date badges in Tools, Live Operations and Presentation Mode; click to open editor and verify dates.
4. Check shipping charts, archive carousel, and List sync from V11.17.82 are retained.
5. Verify notes with multiple lines in Presentation Mode.

LIMITATIONS
JS syntax and ZIP packaging are checked locally. Microsoft List connectivity, real browser zoom behavior, concurrent editing, and end-to-end workplace workflows have not been verified. Do not overwrite the prior working build before testing.
