B7 FI COMMAND CENTER — V8.1 FULL MODERN PREVIEW

PURPOSE
This is the expanded modern-design preview. It combines the V8 visual direction with a substantially more complete editing/workflow layer so the design can be evaluated as a real Command Center rather than only a visual mockup.

WHAT IS INCLUDED
- Modern V8 application shell and all major Centers.
- One Universal Tool Card renderer.
- One Quarter Summary renderer and Presentation Mode.
- Full Tool Control Center opened from any tool card/table row.
- Tool editor sections: Overview, FI Progress, Lead/Admin, all 28 operational badges, System Wafers, Customer Source, STR, Packing/Shipping, History, Admin.
- System Wafer workflow with additional Shiny/Haze/DSW65/DSW65F counters.
- Quick Update page for morning/daily multi-tool edits.
- Quarter/carryover derived state, status bars, cycle time, shipping, priorities, search, archive, meetings/actions/reference/admin views.
- Local persistence in a V8.1-specific browser-storage sandbox.

DATA SAFETY
V8.1 does NOT write to Microsoft Lists and does NOT overwrite V7 browser storage. It first looks for an existing V8.1 sandbox. If none exists, it can copy V8 preview/V7 browser data into its own sandbox. All edits made in this preview stay in the V8.1 sandbox.

START
Windows: double-click START-COMMAND-CENTER.bat, then open the local page if your browser does not open automatically.
GitHub Pages: deploy the folder contents as a separate test site/folder from V7.

FIRST TEST
1. Open Live Operations.
2. Click UPDATE TOOL STATUS on a tool.
3. Walk through every Tool Control Center section.
4. Change a few fields and Save Tool.
5. Reopen the tool and confirm the values persisted.
6. Open Operations > Quick Update and test multi-tool edits.
7. Check Quarter Summary and Presentation Mode.
8. Test browser zoom at 67%, 75%, 80%, 90%, 100%, 110%, and 125%.

IMPORTANT
This is a functional design preview, not yet the production Microsoft List replacement. Microsoft authentication/list write-through, final archive snapshot automation, and every legacy V7 edge case still need migration/validation before production cutover.
