B7 FI Command Center V7.6.4

Changes:
- Removed the outer frame and padding around the 2x2 footer user badge area.
- User badges now fill the entire fifth footer section.
- Fixed a V7.6.3 render-blocking JavaScript error caused by the removed footer version element still being referenced by setTheme().
- The version reference is now null-safe, allowing Live Operations and all other centers/pages to render normally.
- Preserves V7.6.3 header, navigation hover/cursor behavior, consolidated carousel controls, connection-state colors, and V7.6.2 UTC geometry refinements.
