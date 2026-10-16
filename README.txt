B7 FI COMMAND CENTER V11.17.38 — UNIVERSAL BADGE PARITY TEST

Based on the complete V11.17.37 test package.

FIXED IN THIS BUILD
- Corrected the missing canonical CSS reference: index.html pointed to v11.17.36 but the shipped file is v11.17.35.
- Added a final shared badge semantic color stylesheet for Live Operations, Presentation Mode, and compact Tools Center cards.
- Unified critical/red, attention/warning/amber, complete/green, purple, and idle/blue tone mapping across c11 and v10 badge families.
- Preserved all 30 badges, existing badge order, click-to-edit actions, Microsoft List integration, and tool data.
- Preserved existing presentation-specific geometry and compact Tools Center geometry; only badge colors/styles changed.

TEST PLAN
1. Extract to a NEW folder. Keep the previous version and production data backups untouched.
2. Launch with START-COMMAND-CENTER.bat and verify styles load (browser DevTools Network should show no missing CSS).
3. Choose the SAME UTID in Live Operations, Presentation Mode and Tools Center; compare all badge statuses and colors.
4. Verify red, green, yellow and inactive states; wafer and equipment tracking badges.
5. Click a badge in each view and ensure the correct tool and badge editor opens.
6. Test at 100% and 80% zoom. Do not run shared data resets or scenario imports.

LIMITATIONS
- Visual parity was corrected at the stylesheet level and source inspected, but browser screenshots and Microsoft List behavior could not be validated in your corporate environment.
- The compact Tools Center remains a different geometry from the full three-column Tool Card by design.
- This targeted release does not include the broader Brain and workflow overhaul.
