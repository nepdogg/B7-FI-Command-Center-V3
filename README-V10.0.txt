B7 FI COMMAND CENTER V10.0.6 — UNIFIED MODERN SHELL + BUBBLE TOOL CARD

This test build preserves the existing Command Center data/Brain/workflow logic and applies the requested V10 visual corrections.

CHANGES
- Header is exactly three visible sections: Command Center / KLA connection / current Center + quarter.
- Removed legacy header side/user boxes from the visible header geometry.
- Main navigation and page navigation rails no longer use enclosing border boxes.
- Main navigation buttons, page navigation buttons, carousel controls, and action buttons use the same modern rounded style.
- Removed the obsolete Status Carousel page-control allocation; the remaining Live Operations controls dynamically consume the full page-navigation width.
- Leads Alert, System Status, and Command Center status bars now match navigation-button height.
- Live Operations remains one large Tool Card carousel.
- Removed column divider lines and residual outer Tool Card frame treatment.
- Tool photo is now a rounded information bubble.
- Middle-column sections are rounded bubbles with consistent spacing.
- Right-column progress sections are individual rounded bubbles; divider-line layout removed.
- Tool Readiness remains directly after the progress stack instead of being pinned to the bottom.
- Existing three-wide operational badges and full-width System Wafers badge are preserved.
- Existing click/update behavior and Brain/data logic are preserved.

TESTING
1. Start at 100% browser zoom and verify the three-section header.
2. Verify all three status bars match the navigation-bar control height.
3. Verify the page navigation has no dead Status Carousel space and fills the width.
4. Verify Live Operations Tool Card bubbles and all clickable badges/actions.
5. Test browser zoom at 90%, 80%, 75%, 67%, 110%, and 125%.
6. Verify Tool Card carousel previous/pause/next and all update actions still work.
