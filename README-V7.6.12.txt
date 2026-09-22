B7 FI Command Center V7.6.12 — Multi-User Auto Sync + UI Stabilization

Changes:
- KLA logo is now the one-click Multi-User sign-in/connect control.
- Existing Microsoft session is reused when available.
- Shared Microsoft List tools load immediately after connection.
- Automatic background shared-data sync every 15 seconds; browser refresh is no longer the normal sync method.
- Background sync pauses while a form/modal field is actively being edited to reduce edit disruption.
- Tools Active page restored to two Universal Tool Cards per row on desktop/large FI monitors.
- Tool-family status dividers restored as full-width horizontal status strips.
- User/presence area moved toward the visual center of the footer.
- V7.6.11 global progress-bar convention retained.
- Multi-User Diagnostics retained in Administration Center for troubleshooting.

TEST:
1. Run START-COMMAND-CENTER.bat and open http://localhost:5500/
2. Click the centered KLA logo. Complete Microsoft sign-in if prompted.
3. Confirm shared tools load without stepping through Diagnostics.
4. On laptop 2, edit/add a tool. Leave laptop 1 open for 15–30 seconds; verify the change appears without browser refresh.
5. Verify CY26Q3 Tools Active shows two cards per row and full-width family dividers.
6. Verify Presentation Mode and Quarter Summary remain intact.
7. Different-KLA-user validation is still required before production sign-off.
