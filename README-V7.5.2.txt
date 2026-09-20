B7 FI COMMAND CENTER V7.5.2 — PROTOTYPE RESTORE + GEOMETRY LOCK

Critical repair:
- Restores the BUILD constant accidentally removed in V7.5.1. That missing constant caused shell() to throw before navigation/status/workspace rendering, producing the blank body seen in V7.5.1.
- Keeps the V7.5.1 prototype geometry layer after repairing application rendering.
- Header remains three physical sections: Command Center / KLA / Active Page.
- Footer remains six blue status cells with a separate black seven-user badge row.
- Version cell is two lines.
- Existing application and multi-user logic are preserved.

Test at 100% browser zoom.
