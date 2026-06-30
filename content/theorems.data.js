/* ============================================================================
   Theorems — language-NEUTRAL structure.
   ----------------------------------------------------------------------------
   Literal snapshots of the load-bearing theorems behind the glossary. Each
   carries its actual statement (LaTeX, no surrounding $; the renderer adds
   them) and VERIFIED citations to one of the two course books.

   cites[] : { src, sec, page } — src is a key in LA_SOURCES (sources.data.js):
             only `axler` and `strang`. `sec` is the book's official section
             label (stable across printings); `page` is the PRINTED page,
             from verified PDF-sheet offsets (Axler −13, Strang −10). Strang
             pages were confirmed by rendering each page to an image; Axler by
             clean text extraction. Order = intuition/most-canonical first.
   relatedTerms[] : ids from glossary.data.js — the terms each theorem anchors.

   Translatable prose (name, note) lives in the per-locale overlay
   theorems.en.js — never here.
   ============================================================================ */
(function () {
  window.LA_THEOREMS = [
    /* ---- Bases & dimension --------------------------------------------- */
    {
      id: "unique-representation",
      statement: "v = a_1 v_1 + \\cdots + a_n v_n \\quad\\text{exists and is unique}",
      relatedTerms: ["basis", "linear-independence", "span"],
      cites: [
        { src: "axler", sec: "§2B", page: 39 },
      ],
    },
    {
      id: "dimension-well-defined",
      statement: "\\text{Any two bases of a finite-dimensional space have the same length.}",
      relatedTerms: ["dimension", "basis"],
      cites: [
        { src: "axler", sec: "§2C", page: 44 },
      ],
    },

    /* ---- Linear maps ---------------------------------------------------- */
    {
      id: "rank-nullity",
      statement: "\\dim V = \\dim\\operatorname{null} T + \\dim\\operatorname{range} T",
      relatedTerms: ["rank", "null-space", "dimension", "linear-map"],
      cites: [
        { src: "axler", sec: "§3B", page: 62 },
        { src: "strang", sec: "§3.5", page: 181 },
      ],
    },
    {
      id: "four-subspaces",
      statement: "\\dim C(A)=\\dim C(A^{\\mathsf T})=r,\\quad \\dim N(A)=n-r,\\quad \\dim N(A^{\\mathsf T})=m-r",
      relatedTerms: ["rank", "null-space", "dimension", "transpose"],
      cites: [
        { src: "strang", sec: "§3.5", page: 181 },
      ],
    },
    {
      id: "invertible-iff-bijective",
      statement: "T \\text{ is invertible} \\quad\\Leftrightarrow\\quad T \\text{ is injective and surjective}",
      relatedTerms: ["invertible", "linear-map", "null-space"],
      cites: [
        { src: "axler", sec: "§3D", page: 83 },
      ],
    },

    /* ---- Inverses & transposes (algebra of products) -------------------- */
    {
      id: "inverse-of-product",
      statement: "(AB)^{-1} = B^{-1}A^{-1}",
      relatedTerms: ["invertible", "matrix-multiplication", "identity"],
      cites: [
        { src: "strang", sec: "§2.5", page: 83 },
      ],
    },
    {
      id: "transpose-of-product",
      statement: "(AB)^{\\mathsf T} = B^{\\mathsf T}A^{\\mathsf T}",
      relatedTerms: ["transpose", "matrix-multiplication"],
      cites: [
        { src: "strang", sec: "§2.7", page: 110 },
      ],
    },

    /* ---- Determinant ---------------------------------------------------- */
    {
      id: "det-product",
      statement: "\\det(AB) = (\\det A)(\\det B)",
      relatedTerms: ["determinant", "matrix-multiplication", "invertible"],
      cites: [
        { src: "strang", sec: "§5.1", page: 251 },
        { src: "axler", sec: "§9C", page: 357 },
      ],
    },
    {
      id: "invertible-iff-det",
      statement: "A \\text{ is invertible} \\quad\\Leftrightarrow\\quad \\det A \\neq 0",
      relatedTerms: ["invertible", "singular", "determinant"],
      cites: [
        { src: "axler", sec: "§9C", page: 357 },
        { src: "strang", sec: "§5.1", page: 250 },
      ],
    },
    {
      id: "det-transpose",
      statement: "\\det(A^{\\mathsf T}) = \\det A",
      relatedTerms: ["determinant", "transpose"],
      cites: [
        { src: "axler", sec: "§9C", page: 360 },
      ],
    },
    {
      id: "det-volume",
      statement: "\\text{volume of the image box} = |\\det A|",
      relatedTerms: ["area-volume", "determinant", "orientation"],
      cites: [
        { src: "strang", sec: "§5.3", page: 278 },
      ],
    },

    /* ---- Eigenstuff ----------------------------------------------------- */
    {
      id: "characteristic-equation",
      statement: "\\lambda \\text{ is an eigenvalue of } A \\quad\\Leftrightarrow\\quad \\det(A-\\lambda I)=0",
      relatedTerms: ["eigenvalue", "eigenvector", "determinant", "singular"],
      cites: [
        { src: "strang", sec: "§6.1", page: 288 },
        { src: "axler", sec: "§9C", page: 358 },
      ],
    },
    {
      id: "spectral-theorem",
      statement: "S = S^{\\mathsf T} \\quad\\Rightarrow\\quad S = Q\\Lambda Q^{\\mathsf T},\\ \\ Q^{\\mathsf T}Q = I",
      relatedTerms: ["eigenvalue", "eigenvector", "orthonormal", "transpose", "basis"],
      cites: [
        { src: "strang", sec: "§6.4", page: 338 },
        { src: "axler", sec: "§7B", page: 245 },
      ],
    },

    /* ---- Inner-product geometry ----------------------------------------- */
    {
      id: "cauchy-schwarz",
      statement: "|\\langle u,v\\rangle| \\le \\|u\\|\\,\\|v\\|",
      relatedTerms: ["dot-product", "projection", "orthonormal"],
      cites: [
        { src: "axler", sec: "§6A", page: 189 },
      ],
    },
    {
      id: "pythagorean",
      statement: "\\langle u,v\\rangle = 0 \\quad\\Rightarrow\\quad \\|u+v\\|^2 = \\|u\\|^2 + \\|v\\|^2",
      relatedTerms: ["dot-product", "orthonormal", "projection"],
      cites: [
        { src: "axler", sec: "§6A", page: 187 },
      ],
    },
    {
      id: "orthonormal-independent",
      statement: "\\langle e_i,e_j\\rangle = \\delta_{ij} \\quad\\Rightarrow\\quad e_1,\\dots,e_m \\text{ are linearly independent}",
      relatedTerms: ["orthonormal", "linear-independence", "basis", "dot-product"],
      cites: [
        { src: "axler", sec: "§6B", page: 198 },
      ],
    },
  ];
})();
