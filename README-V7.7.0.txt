B7 FI COMMAND CENTER — V7.7.0 QUARTER TRANSITION STABILITY
Date: 09/30/2026

PURPOSE
Production-safe stabilization build for the real CY26Q3 -> CY26Q4 transition test on 10/01/2026. This build is based on V7.6.58 rather than a risky overnight V8 rewrite. V8 Clean Core can follow after the real transition behavior is observed.

CLEANUP
- Consolidated the 23 runtime CSS patch files into one css/command-center.css file.
- Startup launcher hides routine HTTP GET/304 request spam and writes server output to the Windows TEMP server log.
- Existing data keys are preserved. This build is intended to open the existing V7 production/shared data without a reset.

QUARTER BRAIN / TRANSITION
- Calendar automatically changes the active quarter on 10/01.
- Active operational fleet = active-quarter tools + unfinished prior-quarter carryover tools.
- Live Operations Tool Carousel intentionally remains broader and shows every non-archived tool.
- Quarter-specific Summary pages remain quarter-specific.
- Quarter Close archive is created only on/after the first day of the next quarter, exactly once.
- Quarter Close snapshot preserves the result at the boundary (example: 23/24 shipped, 1 did not ship) and records missed UTIDs.
- Final day now displays LAST DAY OF THE QUARTER / FINAL DAY / QUARTER ENDS TODAY instead of 0 days remaining.
- Ended quarter displays QUARTER ENDED and explicitly reports tools that DID NOT SHIP.
- When remaining tools are at/below the configured UTID threshold, their UTIDs are listed in quarter-close messaging.

COMMAND CENTER BRAIN SETTINGS
Administration Center now includes Command Center Brain Settings:
- Awareness: 15 days default
- Attention: 10 days default
- Urgent: 5 days default
- Critical: 2 days default
- Remaining-UTID listing threshold: 5 tools default
- Carryover escalation: Enabled default
- Brain Current Decision diagnostic panel

STATUS BARS
- Quarter-close state now feeds Leads Alert, System Status and Command Center status bars.
- Final Day with unshipped tools becomes a critical fleet message.
- Carryover becomes a critical fleet message after the new quarter activates.
- Remaining UTIDs are included when the fleet is small enough.

CARRYOVER TOOL
- Added a full-width QUARTER CARRYOVER — SHIP ASAP banner to the Universal Tool Card.
- Banner appears automatically for a tool that missed its original quarter and remains operational.
- Banner changes to CARRYOVER SHIPPED / READY TO ARCHIVE after shipment and remains until archive.
- Carryover is not hard-coded to Q3/Q4.

CYCLE TIME
- FI cycle time continues until the tool is Shipped, then freezes.
- Shipped timestamp is persisted; legacy shipped tools fall back to their ship date.
- Cycle Time Center progress bar now displays elapsed days / target days / percentage.
- Over-target values show +N OVER while the bar remains capped at full width.
- Shipped tools show SHIPPED · FINAL LOCKED.

PRESENTATION MODE
- Fixed right-column progress rows so all nine progress sections reserve visible bar height.
- Fixed middle-column grid to account for all six sections.
- Quarter Summary presentation navigation is explicitly interactive, including next-quarter Summary links.
- Quarter Summary tool/reveal controls are re-enabled in Presentation Mode.

ZOOM / GEOMETRY
- Removed the 900px Live Operations height cap that caused dead black space when browser zoom was reduced.
- Live Operations now consumes the available viewport height while preserving the sticky shell and normal-flow footer.
- Footer remains non-sticky.

SYNC / LOGIN
- Existing Microsoft session restore now also attempts silent SSO before requiring a KLA-logo click.
- Shared saves show SYNCING then SYNCED after verified write/readback.
- Background sync heartbeat updates the footer even when no remote data changed.
- Footer sync cell now explicitly displays MULTI-USER / LIST CONNECTED / SYNC STATE / timestamp.
- Background polling remains 3 seconds. User saves do not wait for the poll; they queue an immediate shared write.

10/01 FIRST-DAY TEST
1. Back up current production/shared data before replacing files.
2. Keep V7.6.58 available as fallback.
3. Start V7.7.0 and confirm the header version.
4. Confirm CY26Q4 becomes ACTIVE automatically.
5. Confirm the unfinished CY26Q3 tool remains operational and gets the full Carryover banner.
6. Confirm CY26Q3 Summary remains available and says QUARTER ENDED / 1 TOOL DID NOT SHIP / 23 OF 24 if that is the actual close result.
7. Confirm Archive Center creates the immutable CY26Q3 close snapshot only after the date has changed to 10/01.
8. Confirm Live Operations carousel contains Q4 plus the Q3 carryover (and other non-archived tools by design).
9. Confirm Morning Status/Priority/Shipping/Cycle automatic operational views exclude future quarters and include active quarter + carryover.
10. Update a tool and confirm footer transitions SYNCING -> SYNCED and another computer receives it on background sync.
11. Test browser zoom 100%, 90%, 80%, 75%, 67%.
12. Test Tool Presentation progress bars and Q3 Summary -> Q4 Summary -> Q3 Summary navigation.

IMPORTANT
Do not Master Reset or Clear Microsoft List for the quarter-transition test. Those controls are destructive by design.
