# Verification / 验收记录

2026-11-02, version 1.0.0.

- Node tests: backup merge, deletion markers, invalid backups, edit-time conflict handling, hinted-versus-independent checks, spaced review retention, transaction equation and insurance/inventory cost conservation.
- Content validation: 7 lectures, 70 nodes, 140 questions; unique stable IDs, source page bounds, valid prerequisite/related links, acyclic prerequisites, complete worked examples and English field parity.
- Browser: all 70 lesson routes opened in both Chinese and English, with no page errors or missing two-question checks; no Chinese teaching-body leakage in English mode.
- Responsive: 320, 390, 768, 1024 and 1440 CSS-pixel widths checked on representative map, lesson, notes and review pages; no horizontal overflow.
- Flow checks: wrong-answer feedback, error review, hinted retry, ten-question English check, search, interaction outputs, note auto-save and unchanged user text after language switching.
- Backups: independent browser context imported a generated backup; both notes and attempts were preserved. Invalid input retained existing state; JSON download succeeded.
- Privacy: text resembling an HTML script remains escaped text. No source PDFs, slide screenshots, credentials or personal learning records are included in publication files.
- Offline: service worker cached the app, a Lecture 7 page opened offline, and an offline note survived reload.

These are browser/viewport checks, not physical Huawei-tablet or Android-device certification. There is no remote database or automatic cross-device sync in this release.

GitHub Pages publicly deployed on 2026-11-02 after explicit user authorization. Production checks verified the map, Lecture 7, English switching, mobile layout, answer feedback, note persistence after reload, JSON backup download and relative-path assets. Production URL: https://clarafdu.github.io/accounting-learning-studio/ . Browser QA used isolated contexts; test notes are not included in source or shared with visitors.
