B7 FI COMMAND CENTER V14.0.0 — FOUNDATION REBUILD (TEST)

BASE: V13.0.41.

ACTUALLY CHANGED
- Consolidated the 31 existing CSS sources (of 34 referenced; 3 source files were missing) in their original cascade order into ONE css/command-center.css file. Removed obsolete individual CSS files from this build.
- Added a single final Raiders component styling section for Hybrid presentation, tower sizing, silver progress labels, and navigation.
- Preserved the existing application JS modules, images, Microsoft List integration, and application data schema; these have NOT been rewritten.

LIMITATIONS
- This is a first architecture consolidation, NOT a verified complete V14 rewrite.
- The browser-based Microsoft List multi-user workflow cannot be verified without live credentials.
- The header shield, footer, and all presentation interactions still require full visual/functional testing.
- No claims are made that all previously reported defects are resolved.

TEST
Open index.html from your normal deployment, hard-refresh, and compare Hybrid, Tool Card, Quarter Summary, footer, and header at 100% zoom.
