B7 FI COMMAND CENTER V8.0 — MODERN DESIGN PREVIEW
===================================================

PURPOSE
This is a NEW clean-core visual/interaction prototype based on the modern Command Center concept shown in ChatGPT. It does NOT load any V7 CSS or V7 application JavaScript.

SAFETY / DATA
- V8 uses its own browser storage key: b7fi-command-center-v8-preview
- On first launch it will COPY existing V7 Local Production data if that data is available in the same browser/origin.
- V8 does NOT write changes back to the V7 production storage key.
- Tool edits made in V8 remain in the V8 sandbox only.
- Microsoft List multi-user writes are intentionally NOT enabled in this preview build. This prevents the new prototype from changing the production list while the new architecture is being evaluated.

WHAT IS INCLUDED
- Modern dark/neon Command Center visual system based on the generated concept.
- Sticky application shell.
- Three independently rotating status channels.
- Operations Center / Live Operations.
- Quarter Pulse + Live Fleet overview.
- Modern Tool Carousel.
- One reusable Tool Card component.
- One reusable Quarter Summary component.
- Quarter Summary Presentation Mode with CY26Q3 <-> CY26Q4 controls.
- Tools, Daily Status, Shipping, Priority, Status, Cycle Time, Meeting, Action, Reference, Search, Archive and Administration pages.
- Tool edit modal with sandbox persistence.
- Quarter carryover detection and badge treatment.
- Responsive layout without whole-application transform scaling.
- Local launcher BAT and desktop-shortcut creator.

FIRST TEST AT WORK
1. Keep the current V7 folder/repository as your fallback.
2. Run V8 from a separate folder first with START-COMMAND-CENTER.bat.
3. Verify whether your V7 production tools were copied into the V8 sandbox. If not, the V8 demo fleet will appear.
4. Test browser zoom at 67%, 75%, 80%, 90%, 100%, 110% and 125%.
5. Test navigation and Presentation Mode.
6. Do NOT treat V8 Preview edits as production updates yet; Microsoft List writes are disabled in this preview.

DESIGN ARCHITECTURE
Data -> derived operational state -> shared components -> pages.
There is one Tool Card renderer and one Quarter Summary renderer. Pages host those components rather than maintaining independent copies.

VERSION
V8.0.0-preview
