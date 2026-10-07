B7 FI COMMAND CENTER — V11.4.0 GLOBAL LAYOUT + EDITOR RECOVERY

Primary changes
- Global sticky shell locked: Header + Center Navigation + 3 Status Bars + Page Navigation.
- Removed artificial normal-page viewport spacer so page bodies begin directly below Page Navigation.
- Global single-row Page Navigation geometry; Tools TOOL TYPE menu retained.
- Header rebuilt as one equal-height 3-column row.
- Priority/Tool Identity and Tool Status are two separate top bubbles on full Universal Tool Cards.
- Priority badge internals have no divider/bubble around LEADS PRIORITY; uppercase dynamic sizing increased.
- Tool Edit now uses left section navigation and displays one update section at a time.
- Administration Center now uses the same left-navigation / one-section-at-a-time design.
- Tool Card Presentation Mode constrained inside one fully visible bordered viewport above bottom navigation.
- Quarter Summary Presentation keeps its working layout and expands to consume unused bottom space.
- Presentation quarter navigation retains direct Tools and Summary destinations for lifecycle quarters.
- Responsive/zoom stabilization removes the old 1180px minimum page width and prevents artificial blank bands.
- Existing local/shared data key and application data schema preserved.

Deployment
Replace the complete site contents with this package. Confirm the upper-left header reads V11.4.0. Hard refresh once (Ctrl+F5).
