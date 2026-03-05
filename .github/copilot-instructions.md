Purpose
-------
This file gives concise, actionable guidance for AI coding agents working on this repository so they can be immediately productive.

Big picture
-----------
- This is a small static website composed of HTML, scoped CSS and per-section JavaScript.
- Entry point: [index.html](index.html). Styles live under `css/`, scripts under `js/`, and static media under `assets/`.

Key files & structure
---------------------
- [index.html](index.html) — single-page entry that includes global assets.
- `css/var.css` — centralized CSS variables. Changing color/spacing tokens should be done here.
- `css/global.css` — site-wide utility and base styles.
- Per-section CSS folders (e.g. [css/header/header.css](css/header/header.css)) — styles scoped to a section; prefer editing these for visual changes to that section.
- Per-section JS folders (e.g. [js/header/header.js](js/header/header.js)) — DOM behavior for the matching section.
- `assets/` — images and other static files referenced from HTML/CSS.

Project-specific conventions
---------------------------
- CSS layering: `var.css` defines variables, `global.css` provides base rules, then section CSS files override or extend base styles.
- Keep styles for a UI section together in its folder (e.g., header styles in `css/header/`).
- JS is organized per-section and manipulates the DOM elements present in the corresponding HTML markup in `index.html`.
- When changing structure/markup in `index.html`, search for corresponding selectors in both `css/*` and `js/*` and update them together.

Common workflows
----------------
- Run locally with a simple static server. Example (from repo root):

```bash
python3 -m http.server 8000
# or, if you have npm installed:
npx serve .
```

- Debugging: open `http://localhost:8000` in a browser and use DevTools. Search for selectors referenced in `js/` when investigating behavior.

Editing examples (explicit)
--------------------------
- To change header appearance:
  - Edit [css/header/header.css](css/header/header.css)
  - If behavior needs updating, edit [js/header/header.js](js/header/header.js)
  - Verify markup in [index.html](index.html) matches class/ID selectors used by both files.

- To adjust a global color or spacing token:
  - Edit [css/var.css](css/var.css) and then check affected sections in the browser.

Dependencies & build
--------------------
- There is no automated build or package manifest in the repository; the site is delivered as static files. Assume no bundler or transpiler unless you add one.

What to avoid
-------------
- Do not add heavy build tooling without discussing with maintainers — this repo is intentionally simple and static.
- Avoid changing CSS variable names in `var.css` without updating all dependent files.

When in doubt
------------
- If you cannot find a selector or behavior, search across `css/` and `js/` for the class or ID.
- Ask the user to confirm any structural changes to `index.html` before making wide-scope edits.

Next step
---------
If this looks good I will commit this file. Tell me what else you'd like included or any project-specific rules to capture.
