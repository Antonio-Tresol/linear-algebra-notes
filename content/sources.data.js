/* ============================================================================
   Citation registry — the ONE place sources are described.
   ----------------------------------------------------------------------------
   Glossary/notation entries cite a source by id and add a section + page; the
   bibliographic detail and the "where to get it" link live here, once.

   Page numbers in citations are the PRINTED page (what you see on the page),
   verified against the actual PDFs in this repo:
     • Axler  4th ed. : printed page = (PDF sheet index) − 13
     • Strang 5th ed. : printed page = (PDF sheet index) − 10   ← checked visually
   Sections (§) are quoted from each book's official table of contents and are
   stable across printings, so they are the primary locator; the page is second.

   `kind` drives the badge colour; `access` is shown honestly:
     axler  → open access, genuinely free PDF/HTML at linear.axler.net
     strang → paid; we link the official info page, not a download.
   ============================================================================ */
(function () {
  window.LA_SOURCES = {
    /* ---- Books ----------------------------------------------------------- */
    axler: {
      kind: "book",
      short: "Axler",
      author: "Sheldon Axler",
      title: "Linear Algebra Done Right",
      edition: "4th ed.",
      year: 2024,
      publisher: "Springer (Open Access)",
      access: "open",                       // free, legally
      url: "https://linear.axler.net/",
      urlLabel: "linear.axler.net",
    },
    strang: {
      kind: "book",
      short: "Strang",
      author: "Gilbert Strang",
      title: "Introduction to Linear Algebra",
      edition: "5th ed.",
      year: 2016,
      publisher: "Wellesley–Cambridge Press",
      access: "paid",
      url: "https://math.mit.edu/~gs/linearalgebra/",
      urlLabel: "math.mit.edu",
      // MIT OCW 18.06 uses this text and mirrors much of it for free:
      alsoUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
      alsoLabel: "MIT OCW 18.06 (free course)",
    },

    /* ---- Videos: 3Blue1Brown · Essence of Linear Algebra ----------------- */
    /* Per-lesson pages (each embeds the video + an interactive). The lesson
       slugs are the canonical 3blue1brown.com URLs. */
    "3b1b-series": {
      kind: "video", short: "3Blue1Brown",
      author: "Grant Sanderson (3Blue1Brown)",
      title: "Essence of Linear Algebra",
      access: "free",
      url: "https://www.3blue1brown.com/topics/linear-algebra",
      urlLabel: "3blue1brown.com",
    },
    "3b1b-vectors": {
      kind: "video", short: "3Blue1Brown",
      author: "3Blue1Brown", title: "Vectors, what even are they?",
      access: "free",
      url: "https://www.3blue1brown.com/lessons/vectors", urlLabel: "watch",
    },
    "3b1b-span": {
      kind: "video", short: "3Blue1Brown",
      author: "3Blue1Brown", title: "Linear combinations, span, and basis vectors",
      access: "free",
      url: "https://www.3blue1brown.com/lessons/span", urlLabel: "watch",
    },
    "3b1b-linear-transformations": {
      kind: "video", short: "3Blue1Brown",
      author: "3Blue1Brown", title: "Linear transformations and matrices",
      access: "free",
      url: "https://www.3blue1brown.com/lessons/linear-transformations", urlLabel: "watch",
    },
    "3b1b-matrix-multiplication": {
      kind: "video", short: "3Blue1Brown",
      author: "3Blue1Brown", title: "Matrix multiplication as composition",
      access: "free",
      url: "https://www.3blue1brown.com/lessons/matrix-multiplication", urlLabel: "watch",
    },
    "3b1b-3d-transformations": {
      kind: "video", short: "3Blue1Brown",
      author: "3Blue1Brown", title: "Three-dimensional linear transformations",
      access: "free",
      url: "https://www.3blue1brown.com/lessons/3d-transformations", urlLabel: "watch",
    },
    "3b1b-determinant": {
      kind: "video", short: "3Blue1Brown",
      author: "3Blue1Brown", title: "The determinant",
      access: "free",
      url: "https://www.3blue1brown.com/lessons/determinant", urlLabel: "watch",
    },
    "3b1b-inverse-matrices": {
      kind: "video", short: "3Blue1Brown",
      author: "3Blue1Brown", title: "Inverse matrices, column space and null space",
      access: "free",
      url: "https://www.3blue1brown.com/lessons/inverse-matrices", urlLabel: "watch",
    },
    "3b1b-dot-products": {
      kind: "video", short: "3Blue1Brown",
      author: "3Blue1Brown", title: "Dot products and duality",
      access: "free",
      url: "https://www.3blue1brown.com/lessons/dot-products", urlLabel: "watch",
    },
    "3b1b-eigenvectors": {
      kind: "video", short: "3Blue1Brown",
      author: "3Blue1Brown", title: "Eigenvectors and eigenvalues",
      access: "free",
      url: "https://www.3blue1brown.com/lessons/eigenvalues", urlLabel: "watch",
    },
    "3b1b-change-of-basis": {
      kind: "video", short: "3Blue1Brown",
      author: "3Blue1Brown", title: "Change of basis",
      access: "free",
      url: "https://www.3blue1brown.com/lessons/change-of-basis", urlLabel: "watch",
    },
  };
})();
