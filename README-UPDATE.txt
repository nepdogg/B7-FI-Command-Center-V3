V11.17.41 — zoom/layout regression recovery TEST

Removes duplicate shell height padding from v40 while keeping the sticky header in normal document flow. Relaxes fixed card height, improves badge readability, and prevents global canvas scaling in normal mode.

Test at 67%, 80%, 100%, 125% zoom; inspect header gap, card, badges, footer. Not browser-verified; not a confirmed fix. Preserve existing production version and data. No Microsoft List changes. Deploy full package to a separate test URL.
