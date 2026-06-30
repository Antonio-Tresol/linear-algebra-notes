# Linear algebra, visually

Durable, visual notes for linear algebra. Definitions and notation are the
spine; interactive Canvas2D visualisations hang off them. Every definition
cites two standard texts, plus a video where one explains the idea best.

**Zero build step.** Plain HTML, Canvas2D, and a small shared CSS/JS layer, with
two CDN libraries (KaTeX for maths, marked for note prose). It deploys to GitHub
Pages with "deploy from branch": no Vite, no Actions, no `node_modules`.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Hub. |
| `2d.html` / `3d.html` | Interactive 2×2 / 3×3 linear transformations. |
| `glossary.html` | Cross-linked, fully-cited definitions; search and tag filter. |
| `notation.html` | Symbol and convention reference. |
| `notes.html` | Markdown note viewer (`?doc=<slug>`), with `[[wiki-link]]` hover-cards. |

## How it's wired

- **One design system.** `assets/shared.css` holds every colour token, and the
  canvases read the same tokens from JS (`LA.canvasColors()`) and repaint on
  theme toggle. Light/dark is persisted and respects the system preference.
- **Structured content, rendered everywhere.** Definitions live once in
  `content/glossary.data.js` (the language-neutral *spine*: id, symbol, tags,
  citations, relationships) and are rendered by `assets/glossary.js`.
- **Citations are verified.** Page numbers are the *printed* page, checked
  against the actual PDFs (Axler 4e is open access; Strang 5e is paid). Each cite
  leads with the section (§, stable across printings) then the page. Sources
  live once in `content/sources.data.js`.

## Internationalisation

Structure is defined once, and only text is translated, as drop-in overlays.
To add a language (say French, `fr`):

1. Register it in `assets/shared.js` → `LOCALES`.
2. Drop these overlay files. Any missing key or term falls back to English.
   - `content/strings.fr.js` for the UI chrome strings
   - `content/glossary.fr.js` for term name / short / formal, keyed by id
   - `content/notation.fr.js` for symbol names and meanings
   - `content/notes/<slug>.fr.md` for translated notes (optional)

No other code changes. LaTeX is never translated, since maths is universal. The
included Spanish (`es`) overlay is intentionally *partial*: it demonstrates the
fallback and is the template for a full translation.

## Adding a glossary term

Add an entry to `content/glossary.data.js` (id, symbol, tags, `cites`,
`seeAlso`, optional `visual`) and its text to `content/glossary.en.js`. Cite a
source by its `LA_SOURCES` key plus `{ sec, page }`.

## Adding a note

Drop `content/notes/<slug>.md` and add one line to `content/notes.index.js`.
Use `[[term-id]]` or `[[term-id|display text]]` to link the glossary with a
hover-card. Notes are fetched at runtime, so preview over http(s):

```sh
python -m http.server 8099   # then open http://localhost:8099/
```

## Citations

- **Axler**, *Linear Algebra Done Right*, 4th ed. (2024). Open access:
  <https://linear.axler.net/>
- **Strang**, *Introduction to Linear Algebra*, 5th ed. (2016),
  Wellesley–Cambridge Press: <https://math.mit.edu/~gs/linearalgebra/>
- **3Blue1Brown**, *Essence of Linear Algebra*:
  <https://www.3blue1brown.com/topics/linear-algebra>
