B7 FI COMMAND CENTER V7.7.2 — CANONICAL UTC + BROWSER ZOOM RECOVERY
Build: 2026-10-01

PURPOSE
This build stops the V7.7.1 Tool Card regression and makes one Universal Tool Card geometry authoritative across:
- Operations Center > Live Operations Tool Carousel
- Operations Center > CY26Q3/CY26Q4 Tools pages
- Tool Presentation Mode

LATEST CHANGES
1. Universal Tool Card parity
   - Same three equal columns in Tools, Live Operations, and Presentation Mode.
   - Same section order, same 28-badge matrix, same progress layout, same card proportions.
   - Presentation Mode changes only the host/viewport, not the Tool Card internals.

2. Browser zoom recovery
   - Removed the final fixed-row dependency from the canonical card.
   - Tool Card internals now use card-relative container units so changing Edge/Chrome browser zoom does not leave the card content miniature at the top of a large empty card.
   - Live Operations keeps both carousel frames equal height with a 4px center gutter.
   - Normal shell remains sticky through page navigation; footer stays in document flow.

3. Carryover / quarter-close banner location
   - Driver
   - Quarter Close / Quarter Carryover banner when applicable
   - Reduced Process / Normal Process
   - 28 operational badges
   - Update Tool Status
   The banner is not one of the 28 badges.

4. Status-bar rotation
   - All three status bars use the shared Brain message pool.
   - The three bars display different available messages at the same time.
   - Rotation advances by a three-message group every 8 seconds so the display changes instead of repeatedly walking the same adjacent set.

5. V7.7.1 functionality retained
   - Quarter-close/final-day Brain messages.
   - Q3 -> Q4 carryover lifecycle and carryover escalation.
   - Quarter Summary final-day Presentation KPI protection.
   - Q3/Q4 Presentation Summary switch controls.
   - Cycle-time final/shipped locking and percent/day labels.
   - Multi-user/sync/auth code retained unchanged except version cache tags.

TEST THIS BUILD
A. Browser zoom regression
   Test 100%, 90%, 80%, 75%, 67%, then 110% and 125%.
   Check Live Operations, Tools, Shipping, Action Center, Tool Edit, Quarter Summary.
   Expected: workspace uses the browser area; no miniature Tool Card contents floating at the top of a large empty card.

B. Universal Tool Card parity
   Open the SAME UTID on Tools, Live Operations carousel, and Tool Presentation Mode.
   Expected: same three-column proportions, same 28 badge positions/sizes, same Driver/Process ordering, same progress geometry.

C. Carryover lifecycle
   Final day: unshipped current-quarter tool shows QUARTER CLOSE — MUST SHIP TODAY.
   New quarter: prior-quarter unfinished tool shows QUARTER CARRYOVER — SHIP ASAP between Driver and Process.
   After shipment: carryover banner changes to CARRYOVER SHIPPED / READY TO ARCHIVE.

D. Status bars
   Watch for at least 24 seconds.
   Expected: three bars can show any Brain message, but use different available messages simultaneously and rotate to new groups every 8 seconds.

IMPORTANT
- This build does not clear or reset Microsoft List or local production data.
- Keep V7.6.58 / V7.7.0 / V7.7.1 as fallback builds while testing.
- Exactly one README TXT is included in this package.
