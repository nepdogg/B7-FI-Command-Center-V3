B7 FI Command Center V12.0.31 — Three-Column and Not-in-FI Tower Repair (TEST)

Based on the user-supplied V12.0.30 ZIP.

Changes:
- Added scoped CSS enforcing three equal-width columns for the Universal Tool Card in Live Operations and Tool Card Presentation; the new photo/tower arrangement remains inside the first column.
- Updated the existing tower-unknown.png asset to remove the misleading illuminated green hotspot. The five lenses remain visible with no active lamp for tools not in FI.
- Kept the simplified neutral Priority/Alias header, enlarged photo, no legend/status banner, and segmented progress bars.
- Preserved existing app JavaScript and Microsoft Lists integration without changes to business logic.

Testing:
1. Start locally and inspect Live Operations at 100% browser zoom: left Tool Information, middle FI/System Status, right Progress.
2. Check an Engineering/Not in FI tool: all five signal lamps should be off.
3. Check FI Critical, Attention, Normal, Packing, and Shipped tools.
4. Test Tool Card Presentation and Hybrid Mode.
5. Verify Microsoft Lists connection and sync independently; this build does not claim to repair connectivity.

Validation: JS syntax and ZIP integrity checked. Browser appearance and Microsoft Lists were not verified end-to-end. Keep V12.0.30 as backup.
