B7 FI COMMAND CENTER V13.0.36 — SIGNAL LIGHT VISIBILITY REPAIR

Fixed mismatch between application tower classes (b1224-tower-red/yellow/green/blue/purple) and lighting stylesheet selectors.
Moved LIGHTS settings button to the upper right so it is not hidden behind the bottom footer.
Select LIGHTS: PULSE, STEADY, or OFF. Setting is saved in browser local storage.

IMPORTANT: Unzip the entire package to your command center folder, replacing existing files. Restart local server, then force refresh with Ctrl+Shift+R. Verify tab shows V13.0.36 and LIGHTS button appears at top right.

Not browser-verified. This is a targeted repair; other layout/brain issues remain outside scope.

V13.0.37: Replaced floating LIGHTS control with native navigation-bar button. Replaced pseudo-element lamp effect with real overlay elements, using MutationObserver for dynamically-rendered tool cards. Browser verification still required.

V13.0.38: Advanced LIGHTS dropdown in navigation. Pulse/Steady/Off, brightness 10-100%, pulse duration 0.5-3.0s, glow intensity 0-100%, smooth/double-flash. Saved per browser in localStorage. OFF darkens original image lamp with mask; status badge remains. This is a targeted lighting release; visual Edge verification still required.

V13.0.39: Four independent silver-bordered footer panels and shield-shaped initials/count badges in middle header. Existing IDs and multi-user data flow retained. Not browser-verified.
