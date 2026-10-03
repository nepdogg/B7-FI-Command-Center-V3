B7 FI COMMAND CENTER — V10.0.8 MODERN PROTOTYPE PARITY TEST

This build continues the V10 rewrite using the modern Tool Card prototype as the visual reference.

V10.0.8 CHANGES
- Rebuilt the Tool Intelligence / Tool Status Bar toward the prototype: stronger priority block, severity treatment, larger primary message, tool identity, and View Details control.
- Removed the outer Tool Card and Tool Status row framing so individual bubbles provide the structure.
- Removed the enclosing border boxes around Main Navigation and Page Navigation.
- Page Navigation now uses the same rounded-button visual language as Main Navigation and dynamically consumes available width.
- Leads Alert, System Status, and Command Center bars now use the same 42px height as navigation controls.
- Added the tool Alias to every middle-column and right-column section title, with UTID fallback when Alias is blank.
- Removed the internal divider-line treatment from the top three middle-column status bubbles.
- Increased Tool Card typography and progress-bar height for wallboard readability.
- Kept System Wafers as a full-width badge with the additional-wafer tally.
- Reworked normal-mode sizing so browser zoom changes expand/reflow the CSS viewport instead of scaling a fixed dashboard.
- Preserved the sticky shell and isolated Presentation Mode sizing from normal Live Operations sizing.

TEST FIRST
1. Live Operations at browser zoom 100%, 90%, 80%, 75%, and 67%. Confirm the dashboard uses the available viewport and does not collapse into the top of the screen.
2. Confirm Header -> Main Navigation -> three Status Bars -> Page Navigation remains sticky.
3. Confirm Main Navigation and Page Navigation have no enclosing border rectangle and share the same rounded style.
4. Confirm all three status bars are the same height as the navigation controls.
5. Confirm Tool Status Bar resembles the modern prototype and responds to normal/warning/critical/complete tool states.
6. Confirm every Tool Card section title begins with the tool Alias; tools without an Alias should show the UTID.
7. Confirm the top three middle bubbles have no internal cyan divider bars.
8. Confirm Presentation Mode still fits the complete Tool Card above its bottom navigation.

DATA SAFETY
This package does not intentionally reset production/local tool data. Keep the previous working build available while testing V10.0.8.
