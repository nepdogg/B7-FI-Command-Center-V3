B7 FI Command Center V11.14.0 - Flow Recovery Candidate

Root cause corrected: the old V11.5 CSS reserved sticky shell height as body margin, but later CSS changed the shell from fixed to sticky (in document flow). That double counted shell height and created a huge blank gap before the tool card. New final CSS restores normal 6px spacing while keeping shell sticky.

Also retains prior badge sizing, narrows header panel gaps, and synchronizes visible version/tab.

Test: 1) Back up production data and prior ZIP. 2) Extract to separate folder and run launcher. 3) On Live Operations verify card starts immediately after page navigation. 4) Scroll and verify header stays sticky. 5) Try 75%, 100%, 125% zoom and test tools/quarter presentation. 6) Verify multi-user connection separately.

Not verified: browser rendering, multi-user sync, full presentation behavior. Do not overwrite production before confirming.
