B7 FI COMMAND CENTER — V7.6.19
Build: 20260923-V7.6.19-PRESENTATION-FLEET-NAV-PRESENCE

WHAT IS NEW
- Quarter Summary SYSTEM rows now show one tool image for every actual tool in that family.
- Shipped tools remain visible with a large red X overlay, creating a visual quarter countdown.
- Tool images are clickable and open the corresponding tool.
- Quarter Summary top numbers are larger and progress bars are taller.
- Days progress wording now matches the tools progress style: DAY X OF Y · Z DAYS LEFT.
- Update Command Center TOOL UTID submenu now matches the TOOL TYPE navigation control styling.
- KLA header user badges use more of the available height; KLA logo is taller and visually balanced with the badges.
- Package documentation consolidated into this single README text file.

PRESERVED FROM V7.6.18
- Multi-user shared List create/update synchronization.
- Shared delete correction/verification path.
- Faster approximately 3-second shared polling.
- Command Center Activity footer.
- KLA connection panel behavior and header presence positions.

TEST FOCUS
1. Multi-user: add/update/delete a temporary tool on Laptop 1 and verify Laptop 2 follows automatically.
2. Quarter Summary Presentation Mode: verify every tool family shows the correct number of tool images and shipped tools have red X overlays.
3. Verify DAY X OF Y · Z DAYS LEFT wording and larger hero numbers/bars.
4. Update Command Center: verify TOOL UTID dropdown visually matches TOOL TYPE dropdown.
5. Header: verify four user positions and taller KLA logo fit cleanly inside the KLA border box.

START
Run start-command-center.bat and keep the server window open.
Open http://localhost:5500/ and test at 100% browser zoom.
