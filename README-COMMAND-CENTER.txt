B7 FI COMMAND CENTER — V7.6.28
Build: 20260924-V7.6.28-STATUS-FOOTER-FIX

CHANGES
- Command Center status bar right section now shows LAST SYNC instead of LIVE.
- Left status section remains the Command Center state indicator (READY / UPDATED / ERROR).
- Center status section remains the current/live activity message.
- Footer is forced to exactly three equal sections: Administration Center | Last Activity | Last Sync.
- Removed legacy hidden footer telemetry from layout so it cannot create the large blank footer section.
- Footer center is now LAST ACTIVITY rather than duplicating the live activity-bar name.
- Preserves V7.6.27 multi-user synchronization and Quarter Summary fixes.

TEST
1. Extract the ZIP.
2. Run START-COMMAND-CENTER.bat.
3. Open http://localhost:5500/ at 100% browser zoom.
4. Verify footer has exactly three equal sections with no black gap.
5. In multi-user mode, make a change from the second laptop. Verify the top activity message updates and the right side shows LAST SYNC time.
