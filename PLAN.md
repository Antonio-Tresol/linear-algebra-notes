# Plan — `linear-algebra-notes`

Visual, durable notes for linear algebra. The thing you reach for when you've
forgotten what a determinant *means*, not just how to compute one. Definitions,
notation and the connections between concepts are the spine; the interactive
visualisations hang off them.

> Status: **proposal — awaiting your review.** Nothing below is built yet except
> the shared foundation (`assets/shared.css`, `assets/shared.js`), which already
> exists and still holds.

---

## 1. Principles (decided)

- **Zero build step.** Plain HTML + Canvas2D + a tiny shared JS/CSS layer.
  Deploys to GitHub Pages with "deploy from branch" — no Vite, no Actions, no
  `node_modules`. Confirmed the right call for a handful of pages.
- **Reasonable dependencies only.** Canvas2D for the geometry (no React, no
  WebGPU, no Three.js — they'd be net-negative for shapes a few `lineTo` calls
  draw). Two CDN libraries, both genuinely earned:
  - **KaTeX** — typeset the maths (`$…$`, `$$…$$`), fast and offline-capable.
  - **marked** — render note/definition prose written in Markdown.
- **One source of truth for everything.** Design tokens live once in
  `shared.css`; the canvas reads the *same* tokens from JS. Definitions live once
  in a structured data file and are rendered everywhere from it.
- **Aesthetic** borrowed from `gemma3-refusal-axis`: neutral surfaces, near-black
  text, single clay-orange accent, Inter / Source Serif 4 / JetBrains Mono.
- **Light/dark toggle** (your call) — persisted, respects system preference, no
  flash, and restyles the canvases too.
- **Repo:** `linear-algebra-notes`, standalone, your GitHub account.

---

## 2. What makes this *notes*, not a demo — the definitions layer

This is the part you flagged as most important. Three connected pieces:

### 2a. Glossary — cross-linked definitions
Every term is a structured record, not free text, so we can render it many ways
and wire relationships between terms:

```js
{
  id: "determinant",
  term: "Determinant",
  symbol: "\\det(A),\\ |A|",        // KaTeX
  tags: ["matrix", "invertibility"],
  short: "The signed factor by which a map scales area (2D) or volume (3D).",
  formal: "For A\\in\\mathbb{R}^{n\\times n}, \\det(A)=\\sum_{\\sigma}\\dots",
  seeAlso: ["singular-matrix", "invertible", "orientation", "area-scaling"],
  visual: "2d.html",               // optional: jump to the viz that shows it
}
```

- Rendered to **`glossary.html`**: searchable, filterable by tag, each term with
  a stable anchor (`glossary.html#determinant`).
- "See also" renders as chips linking to the related terms → this is where
  **connecting concepts** becomes real and navigable.

### 2b. Notation & conventions — the reference table
A dedicated **`notation.html`**: every symbol you use (\\(A^{T}\\), \\(\\hat{\\imath}\\),
\\(\\langle u,v\\rangle\\), \\(\\|v\\|\\), \\(\\mathbb{R}^{n}\\), …), what it means, and the
conventions this site commits to (row vs column vectors, index order, etc.).
Driven by the same structured-data approach as the glossary.

### 2c. `[[wiki-links]]` — connections woven through the prose
In any Markdown note, writing `[[determinant]]` becomes a link to that glossary
entry, and (optional, recommended) a **hover-card** showing the short definition
inline. This means your notes *and* your definitions form one connected web —
read a note, hover an unfamiliar term, see its definition, click to its full
entry and related concepts. Low cost, high payoff for "notes that don't let me
forget."

---

## 3. Information architecture

| Page | Purpose |
|---|---|
| `index.html` | Hub: orientation + entry points. Optional small concept map. |
| `2d.html` | Interactive 2×2 linear transformation (exists, to be refactored). |
| `3d.html` | Interactive 3×3 linear transformation (exists, to be refactored). |
| `glossary.html` | Cross-linked definitions, searchable, tag-filtered. |
| `notation.html` | Symbol & convention reference. |
| `notes.html` | One Markdown renderer; viewer for any note via `?doc=…`. |

`notes.html?doc=matrix-algebra` renders `content/notes/matrix-algebra.md`. Adding
a note later = drop a `.md` file + one line in the notes index. No new HTML.

---

## 4. File structure

```
linear-algebra-notes/
├── index.html
├── 2d.html
├── 3d.html
├── glossary.html
├── notation.html
├── notes.html
├── assets/
│   ├── shared.css        ✅ built — tokens, theme, chrome
│   ├── shared.js         ✅ built — theme/nav/utils/md+katex
│   ├── glossary.js       glossary renderer (search/filter/anchors)
│   └── notes.js          notes index + ?doc= loader, [[wiki-link]] rewriter
├── content/
│   ├── glossary.data.js  the definitions (single source of truth)
│   ├── notation.data.js  the symbol table
│   └── notes/
│       └── matrix-algebra.md   (your existing cheatsheet, moved here)
├── .nojekyll
└── README.md
```

> Note: `content/*.data.js` are plain `window.X = [...]` assignments loaded by a
> `<script>` tag — keeps zero-build (no fetch/CORS issues, works offline and on
> `file://`). Notes stay as `.md` and are fetched at runtime (fine on Pages).

---

## 5. Phases

1. **Foundation** ✅ — `shared.css` + `shared.js` (tokens, theme, nav, utils,
   markdown+KaTeX renderer). Done.
2. **Visualisations** — split the two existing files onto the shared system;
   make canvas colours theme-aware (re-read tokens + redraw on toggle); keep
   `prefers-reduced-motion` and `aria-label`s.
3. **Definitions layer** — `glossary.html` + `glossary.js` + a *starter*
   `glossary.data.js`; `notation.html` + `notation.data.js`.
4. **Notes** — `notes.html` renderer + `[[wiki-link]]` rewriting + hover-cards;
   move the matrix-algebra cheatsheet into `content/notes/`.
5. **Hub** — `index.html` tying it together (+ optional concept map).
6. **Content intake** — fold in **your second source**: extract its terms into
   the glossary, its symbols into notation, its longer explanations into notes.
7. **Ship** — repo `linear-algebra-notes`, push, enable Pages, verify (render,
   theme toggle, math, links) in a real browser.

> **Your second source** lands in Phase 6. Phases 2–5 build the *machinery*;
> the source fills it with content. I'll seed the glossary with the concepts the
> existing viz + cheatsheet already cover (basis, î/ĵ/k̂, linear map, matrix,
> determinant, area/volume scaling, orientation, singular/invertible, inverse,
> transpose, identity, shear, rotation, projection/collapse) so the structure is
> real and reviewable before your material arrives.

---

## 6. Decisions I'd like you to confirm

1. **Glossary as structured data** (`glossary.data.js`) rather than free-form
   Markdown — needed for cross-linking, tagging and "see also". *Recommend yes.*
2. **`[[wiki-link]]` hover-cards** in notes (inline definition on hover, click to
   full entry). Small amount of code, big payoff for connecting concepts.
   *Recommend yes.*
3. **"Connecting concepts" — how visual?**
   - (a) Start text-first: rich "see also" links + a relationships list per term.
   - (b) Add a small **concept-map graph** (SVG/Canvas) on the home page showing
     how the core ideas link. More work; can come after content lands.
   *Recommend (a) now, (b) later once the term set is stable.*
4. **Note format for the cheatsheet:** keep it as Markdown source of truth,
   rendered at runtime (so you keep editing in Markdown). *Recommend yes.*

---

## 7. Open input from you

- Drop the **second source** whenever ready — it shapes Phase 6 content.
- Any specific notation conventions you want pinned (e.g. column-vectors,
  1-indexed, \\(A^{\\mathsf T}\\) vs \\(A'\\))?
- Topics beyond transformations/matrix-algebra you want stubs for now
  (eigenvalues, dot/inner product, rank, span, basis change, orthogonality…)?
