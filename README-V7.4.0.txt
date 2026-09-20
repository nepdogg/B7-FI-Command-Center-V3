B7 FI COMMAND CENTER V7.4.0 — PROTOTYPE NATIVE LAYOUT

This release changes the implementation strategy. The approved prototype is now the desktop layout blueprint.

Key changes:
- 1448px prototype reference canvas with native browser zoom.
- Header, KLA/mode center, navigation, alert bars and page bar rebuilt to prototype proportions.
- Live Operations uses the prototype 48/52 workspace split.
- Quarter status snapshot rebuilt with prototype hero-card, status-box and family-table density.
- Universal Tool Card uses prototype column proportions with a narrower progress column and restored taller 28-badge matrix.
- Presence strip and system footer rebuilt as two independent prototype-height rows.
- No CSS transform or page zoom is used in normal desktop mode.
- Existing Command Center data, multi-user, editing, navigation and application logic are retained.

GitHub: replace the repository contents with this package, then hard-refresh once. Confirm the browser tab/footer show V7.4.0.
