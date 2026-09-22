B7 FI Command Center V7.6.6

Multi-user Microsoft List bridge fixes:
- Preserves V7.6.5 page rendering, navigation, footer, and local-production behavior.
- One Microsoft List row remains one B7 FI tool. No chunk rows.
- Tool Data (Multiple lines of text) is now the authoritative shared-row marker.
- Existing rows with valid Tool Data load even if the Title column is blank.
- Blank legacy Titles are repaired to B7TOOL:<UTID> when shared mode starts.
- Friendly List columns (UTID, Code Name, FI Status, Model, Customer, Sales Order, MFG Ship Date, Quarter, Family) override matching Tool Data values when edited directly in Microsoft Lists.
- Shared rows are de-duplicated by tool ID when loaded.
- Shared row metadata is not written back into Tool Data.
- Refresh/session restore refuses to replace the Command Center with zero tools when List rows exist but Tool Data cannot be decoded.
- Local Production remains isolated and Start / Return to Production restores the local production dataset.

Required Microsoft List schema:
- Title (default)
- Tool Data — Multiple lines of text

Recommended optional columns:
UTID, Code Name, FI Status, Model, Customer, Sales Order, MFG Ship Date, Quarter, Family, Last Updated By, Revision.
