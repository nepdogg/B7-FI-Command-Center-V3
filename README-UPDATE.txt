V12.0.68 - Browser zoom regression repair.
Built from V12.0.67. Removed fractional app-frame width and CSS zoom rules introduced in V12.0.67. Full-width natural reflow; preserves V12.0.65 badge geometry.
Testing: Edge zoom 50%, 67%, 75%, 100%, 125%; compare Live Operations, navigation, footer, presentation mode. Visual browser verification not completed.
