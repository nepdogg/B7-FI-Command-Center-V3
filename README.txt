B7 FI COMMAND CENTER — V12.1.0 REPAIR PREVIEW
==============================================
STATUS: LIMITED SOURCE-LEVEL REPAIR. NOT A VERIFIED FULL REBUILD.

Changes from V12.0 Foundation Test:
- Corrected the visible header version to V12.1.0 and updated asset cache identifiers.
- Added scoped repairs to shipping-plan chart sizing and readable shipping/cycle tables.
- Added scoped layout rules for short administration pages and viewport flexibility.
- Preserved the existing tool data structures, image assets, Microsoft List code and workflows.
- Still uses the inherited consolidated CSS and JavaScript, not a clean rewrite.

Checks performed:
- ZIP integrity and JavaScript syntax.
- Automated browser rendering could not be executed in this environment (browser navigation blocked).
- Microsoft List authentication and shared write/read were NOT tested.
- Full regression testing and functional issue fixes remain outstanding.

SAFETY: Keep V11/V12 backup. Do not overwrite production or rely on this build for live operational decisions. Test in a separate folder and with nonproduction records. Browser local storage is origin-specific.
