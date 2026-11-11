B7 FI Command Center V11.18.08 — Sticky Header Content Offset TEST
Baseline: V11.18.07. Fixes top of Quarter Summary and other pages being hidden by fixed header.
Added an in-flow spacer after the sticky shell, dynamically matched to actual rendered shell height via ResizeObserver. This avoids fragile fixed padding and responds to browser zoom, window resize and header height changes.
Keeps sticky header, navigation, status panels, and prior changes.
TEST: quarter summary top counters at 100%; scroll down/up; resize laptop; zoom 80/100/125%; check live operations, tools, presentation mode and popups.
Not browser verified. Do not deploy as production until visual and shared-data testing passes.
