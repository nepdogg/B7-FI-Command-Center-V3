B7 FI Command Center V13.0.2 — Navigation and Identity Row Repair

Changes:
- Forces the actual generated navigation bar/buttons to Raiders black/silver, including active silver tab.
- Identity fields display LABEL LEFT / VALUE RIGHT in Live Operations and Presentation Mode.
- FI milestone date badges also use horizontal label/value arrangement.
- One consolidated CSS file with new rules at end; a small navigation JS module addresses dynamic inline styling.
- Existing tool data, Microsoft List integration, and edit handlers remain unchanged.

TEST: Deploy all files, wait for GitHub Pages deployment, hard refresh. Verify nav and tool fields at 100% and presentation zoom. Test Microsoft List sync separately. Browser appearance and sync have not been verified in this build.
