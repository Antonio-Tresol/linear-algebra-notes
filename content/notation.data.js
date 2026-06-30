/* ============================================================================
   Notation — language-NEUTRAL structure. Symbols + grouping live here; the
   readable name/meaning/"read as" live in notation.<locale>.js overlays.
   `link` optionally points at a glossary anchor for the full definition.
   ============================================================================ */
(function () {
  window.LA_NOTATION = {
    groups: ["sets", "vectors", "matrices", "operations", "relations"],
    rows: [
      { group: "sets", id: "R", symbol: "\\mathbb{R}" },
      { group: "sets", id: "Rn", symbol: "\\mathbb{R}^n", link: "vector" },
      { group: "sets", id: "F", symbol: "\\mathbb{F}" },
      { group: "sets", id: "V", symbol: "V,\\,W", link: "vector-space" },
      { group: "sets", id: "subset", symbol: "U\\subseteq V", link: "subspace" },
      { group: "sets", id: "dim", symbol: "\\dim V", link: "dimension" },

      { group: "vectors", id: "vec", symbol: "\\mathbf{v},\\ v", link: "vector" },
      { group: "vectors", id: "comp", symbol: "v_i" },
      { group: "vectors", id: "ijk", symbol: "\\hat{\\imath},\\hat{\\jmath},\\hat{k}", link: "standard-basis" },
      { group: "vectors", id: "ei", symbol: "e_1,\\dots,e_n", link: "standard-basis" },
      { group: "vectors", id: "zero", symbol: "\\mathbf{0}" },
      { group: "vectors", id: "norm", symbol: "\\|v\\|", link: "dot-product" },

      { group: "matrices", id: "A", symbol: "A,\\,B", link: "matrix" },
      { group: "matrices", id: "aij", symbol: "a_{ij}" },
      { group: "matrices", id: "I", symbol: "I", link: "identity" },
      { group: "matrices", id: "transpose", symbol: "A^{\\mathsf T}", link: "transpose" },
      { group: "matrices", id: "inverse", symbol: "A^{-1}", link: "invertible" },
      { group: "matrices", id: "det", symbol: "\\det(A),\\ |A|", link: "determinant" },
      { group: "matrices", id: "rank", symbol: "\\operatorname{rank}(A)", link: "rank" },
      { group: "matrices", id: "null", symbol: "\\mathcal N(A)", link: "null-space" },

      { group: "operations", id: "dot", symbol: "u\\cdot v,\\ \\langle u,v\\rangle", link: "dot-product" },
      { group: "operations", id: "span", symbol: "\\operatorname{span}(\\cdots)", link: "span" },
      { group: "operations", id: "map", symbol: "T:V\\to W", link: "linear-map" },
      { group: "operations", id: "compose", symbol: "AB,\\ A\\circ B", link: "matrix-multiplication" },
      { group: "operations", id: "eig", symbol: "Av=\\lambda v", link: "eigenvalue" },

      { group: "relations", id: "perp", symbol: "u\\perp v", link: "orthonormal" },
      { group: "relations", id: "iso", symbol: "V\\cong W" },
      { group: "relations", id: "implies", symbol: "\\implies,\\ \\iff" },
      { group: "relations", id: "forall", symbol: "\\forall,\\ \\exists,\\ \\in" },
    ],
  };
})();
