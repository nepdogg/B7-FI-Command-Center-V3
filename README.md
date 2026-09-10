# B7 FI Command Center V6.5.87

**Presentation Full-Screen Tool Edit Lock** — Presentation Tool Edit now uses true browser/document scrolling instead of a nested popup scroller. Save Updates, Cancel, and X remain fixed while all editor fields can be reached.

# B7 FI Command Center V6.5.84 — Render Recovery + Presentation Scroll Lock

This build is based on V6.5.82 and repairs the render-stopping regression found during Presentation Mode testing.

## Fixes
- Repairs the `nextSystemTasksAuto()` FACTD / Options Testing scope error that could stop Live Operations / Presentation tool cards from rendering.
- Keeps FACTD merged into Options Testing and preserves the open Future Badge position.
- Preserves Lamp Off, System Power semantics, shared STR / Customer Source / Lamp source-of-truth behavior, and the V6.5.81 editor controls.
- Presentation Mode > Update Tool Status now uses normal browser-page scrolling instead of trapping the full Tool Edit page inside the scaled wallboard frame.
- Internal version/build identifiers and cache-busting references updated to V6.5.84.
- Universal Tool Card layout remains unchanged.

## Validation
- JavaScript syntax check passed.
- Static render-path review confirms `nextSystemTasksAuto()` now defines the combined Options Testing / FACTD state locally before use.
- Automated browser execution was not available in this environment, so please validate the live UI interaction in your normal browser during testing.


## V6.5.84 — Presentation Tool Edit Actions Lock
- Keeps the working full-page Presentation Tool Edit scrolling behavior.
- Adds a fixed, always-visible Tool Edit action bar in Presentation Mode with CANCEL, SAVE UPDATES, and X.
- SAVE UPDATES saves the active tool and returns to the same Presentation Mode source view.
- CANCEL and X discard/confirm unsaved changes through the normal cancel path and return to Presentation Mode.
- Presentation click shielding is disabled while the full Tool Edit route is active, so all Tool Edit fields and action buttons remain interactive.
- Regular Live Operations Universal Tool Card layout is unchanged.

## V6.5.87 — Presentation Tool Edit Internal Scroll Lock
- Fixes the regression where Presentation Mode showed SAVE UPDATES / CANCEL / X but the Tool Edit content could no longer scroll.
- Presentation Tool Edit is now split into two independent layers: a fixed 56px action bar and a dedicated `#app` editor scroll viewport below it.
- The normal Presentation header/footer are hidden only while the full Tool Edit overlay is open so they cannot consume or lock scroll space.
- The outer page remains overflow-locked; only the Tool Edit workspace scrolls. This prevents Presentation wallboard scaling/overflow rules from taking control again.
- SAVE UPDATES, CANCEL, and X remain visible at all scroll positions and still return to the originating Presentation view.
- Regular Live Operations and Universal Tool Card geometry are unchanged.


## V6.5.87 Presentation Tool Edit scroll fix
Presentation-launched Tool Edit is now detached from the `presentation-mode` wallboard CSS while editing. Fullscreen remains active, the browser document owns vertical scrolling, and Save/Cancel/X restore the same Presentation Mode view.
