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
