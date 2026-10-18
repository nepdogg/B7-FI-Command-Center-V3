B7 FI COMMAND CENTER — LEGACY FEATURE RESTORATION BASELINE (TEST ONLY)

This is a preserved V11.17.70 codebase, NOT a fully repaired V13 and NOT a production-ready build.

WHY THIS PACKAGE: V13 removed many pre-V13 workflows. This package retains the older app.js, multiuser-test.js, Microsoft authentication library reference, operational pages, Brain logic and related CSS. The original README is retained below as README-ORIGINAL.txt.

MULTIUSER: Code is present, but Microsoft List connectivity, authentication, list permissions, conflict handling, and concurrent edits have NOT been verified. Microsoft authentication requires tenant configuration and network access. Do not treat a sign-in badge as proof of connectivity.

SAFETY: Back up the current site and Microsoft List before any deployment. Use a separate test URL/folder. Do not reset lists, run shared scenarios, or write real production data during testing.

REQUIRED BEFORE PRODUCTION: Authenticated multiuser read/write testing on two machines; tool edit save/refresh; priority save/refresh; volunteer row retention; screenshot/report; status, shipping, cycle, quarter, and archive workflows; viewport zoom checks.

This package does NOT claim to fix the previously reported bugs. It is a recoverable, full-feature source baseline for properly rebuilding V13 without deleting features.
