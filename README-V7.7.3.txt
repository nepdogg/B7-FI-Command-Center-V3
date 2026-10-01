B7 FI COMMAND CENTER V7.7.3 — SINGLE UNIVERSAL TOOL CARD LOCK

PURPOSE
Stop repeated Tool Card regressions and reduce testing time. This build treats the Universal Tool Card as one component with one internal geometry in all three locations: CY26Q3/CY26Q4 Tools pages, Live Operations Tool Carousel, and Tool Presentation Mode.

CHANGES
- One liveToolCard() renderer remains the only Universal Tool Card renderer.
- One final V7.7.3 stylesheet owns all internal Universal Tool Card geometry.
- Canonical three-column proportions locked to 29% / 36% / 35% everywhere.
- Canonical left-column order locked everywhere:
  Priority -> Identity -> Driver -> Quarter Lifecycle -> Normal/Reduced Process -> 28 badges -> Update Tool Status.
- Quarter Lifecycle slot is always reserved so a tool without a Quarter Close/Carryover alert cannot shift the 28 badges to a different location.
- Final-day Q3 tools use QUARTER CLOSE — MUST SHIP TODAY in that slot.
- After quarter transition, unfinished prior-quarter tools use QUARTER CARRYOVER — SHIP ASAP in the exact same slot.
- 28-badge matrix locked to 2 x 14 everywhere, including System Wafers dual-line badge.
- Middle column locked to the same six sections and proportions everywhere.
- Right column locked to the same eight progress sections everywhere.
- Presentation Mode is no longer allowed to redefine Tool Card internal geometry; it only sizes the outer host and bottom navigation.
- Live Operations browser-zoom layout no longer has a 520/620px minimum-height floor. It uses the available CSS viewport after the sticky shell/footer allowance.
- Live Operations System Status and Tool carousels remain equal-height with a 4px center gutter.
- Tools page uses the same card with a consistent card aspect ratio; only the outer host changes.
- Three status bars continue using the shared Brain message pool with three different queue positions and rotate every 8 seconds.
- Tool Edit remains vertically scrollable; footer remains in normal document flow.

IMPORTANT TESTS
1. Open the same UTID on CY26Q3/CY26Q4 Tools page, Live Operations carousel, and Tool Presentation Mode. Confirm identical order, badge matrix, three-column proportions, progress sections, and Quarter Lifecycle slot.
2. Check a shipped tool and an unshipped tool. The absence of a carryover alert must NOT move Driver, Process, badges, or Update Tool Status.
3. At final quarter day, confirm QUARTER CLOSE — MUST SHIP TODAY appears between Driver and Process.
4. After quarter transition, confirm prior-quarter unfinished tool changes to QUARTER CARRYOVER — SHIP ASAP in the same location.
5. Test browser zoom 100%, 90%, 80%, 75%, 67%, 110%, and 125%. Live Operations should continue using the available viewport rather than collapsing into a fixed-height strip.
6. Confirm System Status and Tool carousels remain equal height with the small center gap.
7. Confirm the three status bars do not remain on the same message; they should rotate every 8 seconds.

BUILD RULE
Do not add page-specific Universal Tool Card internal CSS in future builds. New contexts may size only the Universal Tool Card host. Any Tool Card internal change must be made once in the canonical UTC component/style so every location changes together.
