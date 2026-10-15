B7 FI COMMAND CENTER V11.17.24 — TEST BUILD

Changes:
- Driver badge now opens a driver assignment editor with existing roster and free-text entry.
- Badge faces display their current saved status beneath the badge name, retaining existing color-coded tones.
- Tools page and Live Operations use the same 28 standard badge slots plus Computer and Component tracking.
- In native fullscreen Presentation Mode, the badge editor modal is placed inside the fullscreen element so its save controls are accessible.
- Local save/read-back logic from V11.17.23 is preserved.

Test: change Driver, POD, Options and Laser statuses; save; refresh; compare Tools, Live and Presentation. Repeat in fullscreen. Check browser storage and Microsoft List status independently.

IMPORTANT: Microsoft List synchronization has not been verified. Do not use as the sole authoritative production database. Back up V11.17.23 and tool data.
