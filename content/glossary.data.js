/* ============================================================================
   Glossary — language-NEUTRAL structure (the spine).
   ----------------------------------------------------------------------------
   Defined ONCE: id, symbol (LaTeX), tags, citations, relationships, and the
   viz a term links to. Human-readable text (term name, short gloss, formal
   statement) lives in per-locale overlays: glossary.en.js, glossary.es.js, …
   To translate a term, add its id to an overlay — never touch this file.

   cites[]   : { src, sec, page }  — src is a key in LA_SOURCES (sources.data.js).
               Books carry a section (§, from the official TOC) and the PRINTED
               page (verified offsets: Axler −13, Strang −10 from PDF sheet).
               Videos carry neither. Order = how we want them read (intuition
               first where the geometry leads, rigour after).
   seeAlso[] : ids of related terms → rendered as chips, the connective tissue.
   visual    : optional page that *shows* the term in motion.
   ============================================================================ */
(function () {
  window.LA_GLOSSARY = [
    /* ---- Vectors & spaces ----------------------------------------------- */
    {
      id: "vector",
      symbol: "\\mathbf{v}\\in\\mathbb{R}^n",
      tags: ["spaces", "core"],
      cites: [
        { src: "3b1b-vectors" },
        { src: "strang", sec: "§1.1", page: 2 },
        { src: "axler", sec: "§1A", page: 6 },
      ],
      seeAlso: ["vector-space", "linear-combination", "basis"],
    },
    {
      id: "vector-space",
      symbol: "V",
      tags: ["spaces"],
      cites: [
        { src: "axler", sec: "§1B", page: 12 },
        { src: "strang", sec: "§3.1", page: 123 },
      ],
      seeAlso: ["subspace", "basis", "dimension", "span"],
    },
    {
      id: "subspace",
      symbol: "U\\subseteq V",
      tags: ["spaces"],
      cites: [
        { src: "axler", sec: "§1C", page: 18 },
        { src: "strang", sec: "§3.1", page: 123 },
      ],
      seeAlso: ["vector-space", "span", "basis", "null-space"],
    },
    {
      id: "linear-combination",
      symbol: "a_1v_1+\\cdots+a_kv_k",
      tags: ["spaces"],
      cites: [
        { src: "3b1b-span" },
        { src: "strang", sec: "§1.1", page: 2 },
        { src: "axler", sec: "§2A", page: 28 },
      ],
      seeAlso: ["span", "basis", "linear-independence"],
    },
    {
      id: "span",
      symbol: "\\operatorname{span}(v_1,\\dots,v_k)",
      tags: ["spaces", "core"],
      cites: [
        { src: "3b1b-span" },
        { src: "axler", sec: "§2A", page: 28 },
        { src: "strang", sec: "§3.1", page: 123 },
      ],
      seeAlso: ["linear-combination", "basis", "linear-independence", "dimension"],
    },
    {
      id: "linear-independence",
      symbol: "a_1v_1+\\cdots+a_kv_k=0",
      tags: ["spaces"],
      cites: [
        { src: "3b1b-span" },
        { src: "axler", sec: "§2A", page: 31 },
        { src: "strang", sec: "§3.4", page: 164 },
      ],
      seeAlso: ["span", "basis", "dimension"],
    },
    {
      id: "basis",
      symbol: "\\{v_1,\\dots,v_n\\}",
      tags: ["spaces", "core"],
      cites: [
        { src: "3b1b-span" },
        { src: "strang", sec: "§3.4", page: 164 },
        { src: "axler", sec: "§2B", page: 39 },
      ],
      seeAlso: ["span", "linear-independence", "dimension", "standard-basis", "linear-map"],
    },
    {
      id: "standard-basis",
      symbol: "\\hat{\\imath},\\hat{\\jmath},\\hat{k}",
      tags: ["spaces"],
      visual: "3d.html",
      cites: [
        { src: "3b1b-span" },
        { src: "axler", sec: "§2B", page: 39 },
        { src: "strang", sec: "§1.1", page: 2 },
      ],
      seeAlso: ["basis", "span", "linear-map"],
    },
    {
      id: "dimension",
      symbol: "\\dim V",
      tags: ["spaces"],
      cites: [
        { src: "axler", sec: "§2C", page: 44 },
        { src: "strang", sec: "§3.4", page: 164 },
      ],
      seeAlso: ["basis", "span", "rank"],
    },

    /* ---- Maps & matrices ------------------------------------------------ */
    {
      id: "linear-map",
      symbol: "T : V \\to W",
      tags: ["maps", "core"],
      visual: "2d.html",
      cites: [
        { src: "3b1b-linear-transformations" },
        { src: "strang", sec: "§8.1", page: 401 },
        { src: "axler", sec: "§3A", page: 52 },
      ],
      seeAlso: ["matrix", "basis", "invertible", "determinant", "null-space"],
    },
    {
      id: "matrix",
      symbol: "A\\in\\mathbb{R}^{m\\times n}",
      tags: ["matrices", "core"],
      visual: "2d.html",
      cites: [
        { src: "3b1b-linear-transformations" },
        { src: "strang", sec: "§1.3", page: 22 },
        { src: "axler", sec: "§3C", page: 69 },
      ],
      seeAlso: ["linear-map", "matrix-multiplication", "determinant", "transpose", "identity"],
    },
    {
      id: "matrix-multiplication",
      symbol: "(AB)_{ij}=\\textstyle\\sum_k a_{ik}b_{kj}",
      tags: ["matrices"],
      cites: [
        { src: "3b1b-matrix-multiplication" },
        { src: "strang", sec: "§2.4", page: 70 },
        { src: "axler", sec: "§3C", page: 72 },
      ],
      seeAlso: ["matrix", "linear-map", "identity"],
    },
    {
      id: "identity",
      symbol: "I",
      tags: ["matrices"],
      cites: [
        { src: "strang", sec: "§2.4", page: 70 },
        { src: "axler", sec: "§3D", page: 82 },
      ],
      seeAlso: ["invertible", "matrix", "matrix-multiplication"],
    },
    {
      id: "transpose",
      symbol: "A^{\\mathsf T}",
      tags: ["matrices"],
      cites: [
        { src: "strang", sec: "§2.7", page: 109 },
        { src: "axler", sec: "§3F", page: 113 },
      ],
      seeAlso: ["matrix", "dot-product", "orthonormal"],
    },
    {
      id: "invertible",
      symbol: "A^{-1}A = I",
      tags: ["matrices", "core"],
      cites: [
        { src: "3b1b-inverse-matrices" },
        { src: "strang", sec: "§2.5", page: 83 },
        { src: "axler", sec: "§3D", page: 82 },
      ],
      seeAlso: ["singular", "determinant", "identity", "linear-map", "null-space"],
    },
    {
      id: "singular",
      symbol: "\\det(A)=0",
      tags: ["matrices"],
      cites: [
        { src: "3b1b-inverse-matrices" },
        { src: "strang", sec: "§5.1", page: 247 },
        { src: "axler", sec: "§3D", page: 82 },
      ],
      seeAlso: ["invertible", "determinant", "null-space"],
    },
    {
      id: "null-space",
      symbol: "\\mathcal N(A)=\\{x: Ax=0\\}",
      tags: ["maps"],
      cites: [
        { src: "3b1b-inverse-matrices" },
        { src: "strang", sec: "§3.2", page: 135 },
        { src: "axler", sec: "§3B", page: 59 },
      ],
      seeAlso: ["invertible", "singular", "rank", "linear-map"],
    },
    {
      id: "rank",
      symbol: "\\operatorname{rank}(A)",
      tags: ["matrices"],
      cites: [
        { src: "strang", sec: "§3.5", page: 181 },
        { src: "axler", sec: "§3C", page: 77 },
      ],
      seeAlso: ["dimension", "null-space", "linear-map"],
    },

    /* ---- Determinant & geometry ----------------------------------------- */
    {
      id: "determinant",
      symbol: "\\det(A),\\ |A|",
      tags: ["matrices", "geometry", "core"],
      visual: "2d.html",
      cites: [
        { src: "3b1b-determinant" },
        { src: "strang", sec: "§5.1", page: 247 },
        { src: "axler", sec: "§9C", page: 354 },
      ],
      seeAlso: ["invertible", "singular", "orientation", "area-volume", "eigenvalue"],
    },
    {
      id: "area-volume",
      symbol: "|\\det A|",
      tags: ["geometry"],
      visual: "3d.html",
      cites: [
        { src: "3b1b-determinant" },
        { src: "strang", sec: "§5.3", page: 273 },
        { src: "axler", sec: "§9C", page: 354 },
      ],
      seeAlso: ["determinant", "orientation"],
    },
    {
      id: "orientation",
      symbol: "\\operatorname{sign}\\det(A)",
      tags: ["geometry"],
      visual: "3d.html",
      cites: [
        { src: "3b1b-determinant" },
        { src: "strang", sec: "§5.1", page: 247 },
        { src: "axler", sec: "§9C", page: 357 },
      ],
      seeAlso: ["determinant", "area-volume"],
    },

    /* ---- Eigenstuff ----------------------------------------------------- */
    {
      id: "eigenvalue",
      symbol: "Av = \\lambda v",
      tags: ["eigen", "core"],
      cites: [
        { src: "3b1b-eigenvectors" },
        { src: "strang", sec: "§6.1", page: 288 },
        { src: "axler", sec: "§5A", page: 133 },
      ],
      seeAlso: ["eigenvector", "determinant", "linear-map"],
    },
    {
      id: "eigenvector",
      symbol: "v\\neq 0,\\ Av=\\lambda v",
      tags: ["eigen"],
      cites: [
        { src: "3b1b-eigenvectors" },
        { src: "strang", sec: "§6.1", page: 288 },
        { src: "axler", sec: "§5A", page: 133 },
      ],
      seeAlso: ["eigenvalue", "linear-map"],
    },

    /* ---- Inner product geometry ----------------------------------------- */
    {
      id: "dot-product",
      symbol: "u\\cdot v,\\ \\langle u,v\\rangle",
      tags: ["geometry"],
      cites: [
        { src: "3b1b-dot-products" },
        { src: "strang", sec: "§1.2", page: 11 },
        { src: "axler", sec: "§6A", page: 182 },
      ],
      seeAlso: ["transpose", "projection", "orthonormal"],
    },
    {
      id: "orthonormal",
      symbol: "q_i\\cdot q_j=\\delta_{ij}",
      tags: ["geometry"],
      cites: [
        { src: "strang", sec: "§4.4", page: 233 },
        { src: "axler", sec: "§6B", page: 197 },
      ],
      seeAlso: ["dot-product", "projection", "basis"],
    },
    {
      id: "projection",
      symbol: "P = \\tfrac{aa^{\\mathsf T}}{a^{\\mathsf T}a}",
      tags: ["geometry"],
      cites: [
        { src: "strang", sec: "§4.2", page: 206 },
        { src: "axler", sec: "§6C", page: 211 },
      ],
      seeAlso: ["dot-product", "orthonormal"],
    },

    /* ---- Named transformations (what the 2D viz shows) ------------------ */
    {
      id: "rotation",
      symbol: "\\begin{psmallmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{psmallmatrix}",
      tags: ["transforms", "geometry"],
      visual: "2d.html",
      cites: [
        { src: "3b1b-linear-transformations" },
        { src: "strang", sec: "§8.2", page: 411 },
      ],
      seeAlso: ["linear-map", "matrix", "shear", "orientation"],
    },
    {
      id: "shear",
      symbol: "\\begin{psmallmatrix}1&k\\\\0&1\\end{psmallmatrix}",
      tags: ["transforms", "geometry"],
      visual: "2d.html",
      cites: [
        { src: "3b1b-linear-transformations" },
        { src: "strang", sec: "§8.1", page: 401 },
      ],
      seeAlso: ["linear-map", "matrix", "rotation", "determinant"],
    },
  ];
})();
