B7 FI Command Center V13.0.25 TEST

Root cause: js/b7-badge-source-v12.0.62.js runs a MutationObserver and rewrites the identity and date badges as centered flex columns after render, defeating previous CSS and markup fixes. This build corrects that runtime logic to preserve two-column label/value layout.

Also corrects the broken photo-tower stylesheet reference and adjusts image/tower row spacing.

Please verify in browser at your normal zoom and test multiuser behavior.
