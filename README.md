# B7 FI Command Center V6.5.91

## V6.5.91 — Priority + All WIP + Single Source Lock
- Live Operations carousel is always sorted by the selected Priority source, highest priority first.
- Updated Command Center includes every active work-in-progress tool across all quarters; only Shipped and Archived tools are excluded.
- Badge editors and Tool Edit now share canonical option lists and write the same fields on the master tool record.
- Customer Source and STR badge editors expose the exact Required + Status selections used by Tool Edit.
- FACTD is no longer a separate Tool Edit selector; it remains a state of Options Testing.
- System Wafers, NC Close, and EQ Checklists were added to Tool Edit so they use the same fields as their badges.
- Legacy badge values are normalized into the current canonical values when data loads.

# B7 FI Command Center V6.5.91

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

## V6.5.91 — Presentation Tool Edit Internal Scroll Lock
- Fixes the regression where Presentation Mode showed SAVE UPDATES / CANCEL / X but the Tool Edit content could no longer scroll.
- Presentation Tool Edit is now split into two independent layers: a fixed 56px action bar and a dedicated `#app` editor scroll viewport below it.
- The normal Presentation header/footer are hidden only while the full Tool Edit overlay is open so they cannot consume or lock scroll space.
- The outer page remains overflow-locked; only the Tool Edit workspace scrolls. This prevents Presentation wallboard scaling/overflow rules from taking control again.
- SAVE UPDATES, CANCEL, and X remain visible at all scroll positions and still return to the originating Presentation view.
- Regular Live Operations and Universal Tool Card geometry are unchanged.


## V6.5.91 Presentation Tool Edit scroll fix
Presentation-launched Tool Edit is now detached from the `presentation-mode` wallboard CSS while editing. Fullscreen remains active, the browser document owns vertical scrolling, and Save/Cancel/X restore the same Presentation Mode view.


## V6.5.91 — Presentation Tool Edit Overlay Lock
- Restores UPDATE TOOL STATUS in Presentation Mode as a true overlay instead of navigating to the normal Tool Edit route.
- Presentation Mode stays visible and unchanged behind the editor.
- The overlay uses one dedicated scroll owner (`.presentation-tool-overlay-scroll`) with a fixed action header.
- SAVE UPDATES, CANCEL, and X remain visible at all times.
- Save writes the edited tool to the same source-of-truth record, refreshes the Presentation card, and closes the overlay.
- Cancel/X discard unsaved changes after confirmation and return to the unchanged Presentation view.
- Regular Live Operations / Tools Tool Edit routing is unchanged.


## V6.5.91 changes
- Replaced the Future Badge placeholder with POD. Default is NEED TO REQUEST POD (red); POD REQUESTED is green.
- Next System Tasks now displays up to five AUTO tasks and supports five MANUAL tasks.
- Presentation Mode redistributes the middle column to give Next System Tasks more room while reducing Live System Status and Lead Notes / Reminders by approximately one display line each.
- Presentation tool area uses more of the available vertical wallboard space with a tighter gap below the presentation controls.
- Existing V6.5.88 Presentation Tool Edit overlay behavior is preserved.


## V6.5.91 — Five-Task Parity + Operational Status Color Lock
- Regular Live Operations UTC now reserves enough middle-column height to display the same five Next System Tasks as Presentation Mode.
- Next System Tasks remains one shared AUTO/MANUAL list (maximum 5) across both views.
- Ship Countdown large text and MFG Ship Date now use time-to-ship urgency colors: >14 days white, 8–14 cyan, 4–7 yellow, 1–3 orange, today/overdue red, shipped green.
- FI Status large text now conveys schedule condition: Ahead/On Schedule green; Behind/System Line Down/At Risk red; Waiting for Parts orange; Packing cyan; neutral states white.
- These colors use the same shared UTC markup in regular Live Operations and Presentation Mode.
