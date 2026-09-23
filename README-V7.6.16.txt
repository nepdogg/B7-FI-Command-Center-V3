B7 FI Command Center — V7.6.16

GLOBAL STICKY COMMAND SHELL HARD LOCK

Built from V7.6.15 and preserves its UTC, Status Center, Quarter Summary, Presentation Mode, multi-user, desktop shortcut, favicon/icon, and progress-bar work.

V7.6.16 priority fix:
- Header title/KLA/page title, main center navigation, Leads Alert, System Status, and page navigation/action bar are now one sticky shell.
- Removed normal-mode overflow ancestors that prevented CSS sticky positioning from following the browser viewport.
- Page content scrolls beneath the command shell.
- Presentation and screenshot modes retain their independent full-screen behavior.
- Tool-type jump offsets continue to account for the measured sticky-shell height.

Test at browser zoom 100%.
