# Roadmap — `linear-algebra-notes` v2

Feature backlog for the visual notes site. The v1 site (hub, 2D/3D transforms,
matmul, glossary with theorem snapshots, notation, notes, key ideas, full
en/es) is built and live. This document captures the next wave so we do not
forget it. Each epic is scoped enough for an agent team to pick up.

**House rules for every item** (carry over from v1):
- Zero build step. Plain HTML + Canvas2D + the shared `LA.*` layer. KaTeX for maths.
- Language-neutral data + per-locale overlays. Everything ships **en + es**, complete and one-to-one.
- Cite sources (Axler / Strang with verified section + printed page, 3Blue1Brown lessons). Offsets: Axler −13, Strang −10 (Strang pages verified by rendering).
- British spelling. No em dashes. No "is not X; it is Y" negation-correction. Lean on cited 3Blue1Brown framings.
- Theme-aware canvas (`LA.canvasColors()` + `LA.onThemeChange`), `prefers-reduced-motion`, `aria-label`s, keyboard where sensible.
- Bump the asset cache version (`?v=…` in the HTML) on every deploy.

---

## Epic A — Transformation pages as tabbed modes (2D and 3D)

**Why:** the 2D/3D pages currently do one thing. Group related views as tabs on
the same page so a learner explores one matrix three ways. Animations always
start from the identity ("from the origin").

- **Tabs:** `Transform` (current behaviour) · `Inverse` · `Compose`.
- **Inverse in action** (the big missing one):
  - Show `A` and compute `A⁻¹`; draw the inverse grid.
  - Animate `A` then `A⁻¹` and watch space return to the identity (undo). Button: "Apply then undo".
  - When `det(A)=0`: state plainly there is no inverse, show the collapse, link `glossary.html#singular`.
- **Compose (multiply) as a tab:** fold the matmul experience into the 2D page as the `Compose` tab, and **add the same Compose mode to 3D** (currently missing). Keep the two-stage "do B, then A" animation, always starting from identity. Decide whether standalone `matmul.html` redirects to `2d.html#compose` or stays as an alias.
- Tabs must be keyboard-accessible (`role="tablist"`, arrow keys) and remember the chosen tab per session.

**Files:** refactor `2d.html`/`3d.html` into a shared mode controller; likely a new `assets/transform.js` shared by both so 2D and 3D do not duplicate. New strings under `viz.tab.*`.

---

## Epic B — Concept visualisations (the educational gaps)

Each is a small, focused interactive (new page under a "Concepts" nav group, or
sections that compose into one "Subspaces explorer"). All cited, all key-ideas style.

- **Span:** drag 2 (or 3) vectors; show what they span (a line, a plane, or all of space) and the shaded region; call out the moment they become dependent and the span collapses to a lower dimension. Cite 3b1b "span".
- **Column space:** the span of the columns = the image/reach of the map. Show which outputs are reachable.
- **Null space (kernel):** the input directions sent to `0`. For a singular map, draw the line/plane of vectors that collapse to the origin. Tie to "why the map is not invertible".
- **Rank & full rank:** rank = dimension of the column space = number of independent directions that survive. Show rank 2 / rank 1 / rank 0 in 2D and rank 3/2/1/0 in 3D as the columns lose independence. "Full rank" = nothing collapses.
- **Why `det(A)=0` is what it is:** dedicated explainer. As columns become dependent, the unit square/cube flattens, area/volume → 0, and the map stops being invertible. Connect det 0 ⇔ dependent columns ⇔ nonzero null space ⇔ not full rank. This is the conceptual hub linking B together.
- **Identity as "do nothing":** a short visual showing `I` leaves every vector fixed; use as the baseline every animation departs from.
- Rank–nullity should fall out visually (surviving directions + collapsed directions = input dimension), linking to the `rank-nullity` theorem already in the glossary.

**Files:** `concepts/*.html` or a `subspaces.html` explorer + `content/*.data.js` for any structured bits. New nav group.

---

## Epic C — Draggable shapes in the space

**Why:** seeing a familiar shape get transformed makes the map concrete.

- A **palette** of shapes to drop into the input plane: point, vector/arrow, line segment, unit square, circle, triangle, regular polygon, an "F" or arrow blob (orientation-revealing, like 3b1b), a cloud of points.
- **Place and drag** a shape around the input space; its transformed image updates live under the current matrix. Show input shape (faint) and image (solid) together.
- Multiple shapes at once; select, move, delete. Snap-to-grid optional.
- Works in 2D first; 3D later (drag in a plane, or pick depth).
- Orientation-revealing shapes (the "F") make flips obvious, reinforcing the determinant sign.

**Files:** `assets/shapes.js` (shape models + hit-testing + drag), integrates into the Transform/Compose canvases. Touch interactions + `prefers-reduced-motion`.

---

## Epic D — Visual exercises with deterministic checking

**Why:** let a learner test understanding and get instant, deterministic feedback.

- **Deterministic checker**: every exercise has an algorithmic pass condition (compare the user's matrix / placed vector / answer to a target within a tolerance), so no human grading.
- **Exercise types** (each maps to a concept above):
  - "Make `î` land on `(2,1)` and `ĵ` on `(-1,1)`" (build the matrix).
  - "Build a matrix that doubles every area" / "halves it" / "leaves area unchanged".
  - "Make this transformation singular" (force `det = 0`).
  - "Find a matrix that flips orientation but preserves area" (det `-1`).
  - "Compose these two given maps to reach the target grid."
  - "Where does the point `(3,2)` go under `A`?" (drag the image to the right spot).
  - "Give a nonzero vector in the null space of this singular `A`."
  - "What is the rank of this matrix?" (multiple choice, checked).
  - "Find `A⁻¹`" (enter it; checked against the true inverse).
- **Feedback**: pass/fail, the numeric gap, a hint, and a "show me" that animates the correct answer. Track completion in `localStorage`.
- All prompts/hints i18n + cited.

**Files:** `exercises.html` + `content/exercises.data.js` (each exercise: id, type, setup, target, tolerance, hint, cite) + `assets/exercises.js` (driver + checkers). New nav entry.

---

## Epic E — Cross-cutting / polish

- New nav structure (probably groups: Explore [2D, 3D, Compose], Concepts [span, subspaces, det], Practice [exercises], Reference [glossary, notation, notes]). Keep the nav from getting crowded; consider a dropdown.
- Extend `keyideas` and theorem links to the new pages.
- Accessibility pass on tabs, drag (keyboard alternative), exercises.
- Update README + this roadmap as items land. Tick them off below.

---

## Suggested execution order (each wave = an agent team, verified + deployed before the next)

1. **Wave 1 — Interactive core:** Epic A (tabs + inverse + 3D compose) and Epic C (draggable shapes). Highest "feel" upgrade; shapes ride on the Transform/Compose canvases.
2. **Wave 2 — Concept visualisations:** Epic B (span, column/null space, rank, det=0, identity). The educational core; the `det=0` explainer ties it together.
3. **Wave 3 — Exercises:** Epic D, once the concepts exist to test.
4. **Wave 4 — Polish:** Epic E nav/accessibility/docs.

> Status: **backlog, not started.** Tick items as agent teams complete them.
