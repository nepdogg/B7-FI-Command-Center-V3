B7 FI Command Center V5.5.15 — Extended Universal Tool Columns

# B7 FI Command Center V5.5.12 — Three-Column Universal Tool Cards

## This build
- Rebuilds the universal tool card into three full-height vertical information columns.
- Left column: tool photo/identity/badges + complete tool information.
- Middle column: ship countdown/FI/cycle/forecast status + Active FI Checklists.
- Right column: all progress bars + Next Lead/Admin Tasks.
- Active FI Checklists now shows the next 3 items.
- Next Lead/Admin Tasks now shows the next 3 items.
- VIEW ALL remains available for both complete lists.
- Live Operations and Update Center use the same universal card renderer and three-column geometry.
- Existing localStorage data key is unchanged.

# B7 FI Command Center V5.5.8 — Two-Column Universal Tool Cards

This build continues the locked universal Live Operations tool-card design across the Update Center.

## V5.5.8 changes
- Update Center family sections now render **two complete universal tool cards side by side** at normal desktop widths.
- Cards no longer stretch to fill the entire page width.
- Each card keeps the same six-panel proportions and shared live data/status logic used by the Operations Center Tool Carousel.
- At narrower widths the layout collapses to one card per row for usability.
- Existing V5.x localStorage data remains compatible.

# B7 FI Command Center V5.5.7 — Universal Live Tool Cards

Update Center tool cards now use the same complete card renderer as the Live Operations carousel, including UTID identity, tool photo, Reduced Process, six workflow/test badges, ship countdown and FI status, cycle information, FI/Micro/Lead/Customer Source/STR/Packing progress, tool information, active FI checklists, and next Lead/Admin tasks.

# B7 FI Command Center V5.5.4

Customer Source + STR Progress update.

Changes from V5.5.3:
- Added CUSTOMER SOURCE progress to the Live Operations tool-card progress panel.
- Added STR progress to the Live Operations tool-card progress panel.
- Progress order is now FI Testing, Micro Schedule, Tool Cycle Time, Average Cycle Time, Lead/Admin, Customer Source, STR, Packing/Shipping.
- Customer Source and STR bars use the same underlying workflow fields as their badges.
- Required = No displays N/A / Not Required.
- Required = TBD displays TBD / Requirement TBD.
- Required workflow states advance the progress bar through their defined stages.
- Existing V5.x browser/localStorage data remains compatible.


## V5.5.6 — Status Header, Reveal & UTID Fix
- Live Tool Carousel photo panel now displays the UTID as the primary tool identifier.
- Tool Information panel replaces the redundant UTID row with Tool Type / Code Name.
- All other V5.5.4 functionality and stored data remain unchanged.


## V5.5.6 changes
- Restored **UTID** as the first field in the lower Live Operations tool-information panel while keeping UTID as the large primary identifier above the photo.
- Status Center Weekday/Weekend pages now use the same external **PAGE NAME · DATE** body heading treatment as Priority Center; the duplicate embedded email heading is hidden in normal mode.
- Hardened Screenshot and Presentation family-progress layouts so the **REVEAL / Mystery** column remains visible and display-only instead of being clipped.


V5.5.9: Update Center universal cards now use the same final 3x2 layout, dimensions, typography, badge geometry, progress spacing, and status/cycle composition as the Live Operations Tool Carousel. Two cards remain side-by-side at normal desktop widths.


V5.5.16 — Universal Tool Card Single Layout
- Removed the visual divergence between Live Operations and Update Center universal tool cards by overriding legacy Operations-only two-row grid rules.
- Both centers now use the same 3-column, single-row, 610px universal card geometry.
- Left and middle columns fill the complete card height; right column preserves progress + 3 FI checklists + 3 Lead/Admin tasks.


V5.5.17 — Universal Tool Card Balance Refinement
- Centered/larger UTID and tool type/model identity.
- Enlarged and evenly spaced Customer / Sales Order / Ship Date area.
- Middle column distributed through full height with only major section dividers.
- FI Checklist preview reduced to next 1 checklist plus View All.
- Lead/Admin preview reduced to next 1 task plus View All.
- Same universal card rules apply in Operations and Update Center.
