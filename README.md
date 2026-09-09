# B7 FI Command Center V6.5.80

## Native Combo Clean Rewrite Lock — 9/8/26

This build removes the accumulated custom dropdown/datalist/portal behavior from the editable Tool Information controls and replaces it with one shared implementation used throughout the Command Center.

### Editor control rewrite
- Flexible structured fields now use one control everywhere: an editable text input plus a native pull-down selector.
- The native selector is browser-owned, so its option list is not clipped by the Universal Tool Card, modal, Presentation Mode, or full Tool Edit page.
- Removed dependency on custom dropdown portal positioning and dropdown click routing.
- Removed Tool Edit / daily datalist behavior for these shared structured fields.
- The same combo binder is used after normal page renders and modal renders.

### Tool Type / Model
- Tool Type continues to support predefined selection plus manual text entry.
- Model choices are refreshed from the selected Tool Type only.
- Known Tool Types reject models outside their defined catalog at Save.
- Zephyr model catalog: C200, C205, C300, C305.
- Changing to a known Tool Type clears an incompatible existing Model when the Tool Type change is committed.

### Scope
- Universal Tool Card visual layout is unchanged.
- Tool Edit layout is unchanged.
- Presentation Mode layout is unchanged.
- This release is a control-layer cleanup, not a redesign.
