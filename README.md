# B7 FI Command Center V6.5.81
## Editor Control + Presentation Scroll Rebuild Lock

This build is a focused reliability rebuild of the Tool Information editing controls and Presentation Tool Edit scrolling. The Universal Tool Card layout is unchanged.

### Editor control rebuild
- Flexible fields now show the editable value and a full-width `SELECT PREDEFINED` native pull-down in the same field.
- The same component is used by Tool Edit, Live Operations card editors, and Presentation Mode card editors.
- A single direct selection function copies a predefined selection into the editable value; no overlay/portal menu is used.
- Tool Type immediately refreshes Model selections.
- Models are strictly filtered to the selected Tool Type when that Tool Type has a defined model catalog.
- Zephyr models are exactly: C200, C205, C300, C305.
- Manual/custom text entry remains available where the field allows it.

### Presentation Tool Edit scrolling
- `Update Tool Status` opened from Presentation Mode now switches the editor to a normal full-screen scrolling workspace while Presentation Mode remains active.
- The 1920x1080 wallboard transform is removed while Tool Edit is open so the browser can scroll the entire editor normally.
- Returning to Live Operations automatically restores the Presentation wallboard scaling.
- `renderToolEditorPage()` now explicitly re-applies the Presentation layout change when Tool Edit is opened directly from a card.

### Validation
- JavaScript syntax checked with Node.
- Static checks confirm the Zephyr model catalog, strict Tool Type → Model filtering, shared universal combo component, and Presentation Tool Edit re-fit path.
