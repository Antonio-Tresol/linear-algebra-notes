/* Notation text — English overlay. Keyed by ids in notation.data.js. */
(function () {
  var T = (window.LA_NOTATION_TEXT = window.LA_NOTATION_TEXT || {});
  T.en = {
    groups: {
      sets: "Sets & spaces",
      vectors: "Vectors",
      matrices: "Matrices",
      operations: "Operations & maps",
      relations: "Relations & logic",
    },
    conventions: [
      "Vectors are **columns** by default; a row vector is written $v^{\\mathsf T}$.",
      "Indices are **1-based**: $a_{ij}$ is row $i$, column $j$, with $i$ first.",
      "Scalars come from $\\mathbb{R}$ unless a field $\\mathbb{F}$ is named (then $\\mathbb{R}$ or $\\mathbb{C}$).",
      "Transpose is written $A^{\\mathsf T}$ (not $A'$).",
      "$\\langle u,v\\rangle$ and $u\\cdot v$ mean the same standard inner product here.",
    ],
    rows: {
      R: { name: "Real numbers", meaning: "The number line; ordinary scalars.", read: "R" },
      Rn: { name: "Real n-space", meaning: "All length-$n$ lists of real numbers.", read: "R-n" },
      F: { name: "A field", meaning: "Scalars you may use — usually $\\mathbb{R}$ or $\\mathbb{C}$.", read: "F" },
      V: { name: "Vector spaces", meaning: "Abstract spaces where vectors live.", read: "V, W" },
      subset: { name: "Subspace", meaning: "$U$ is a subspace sitting inside $V$.", read: "U in V" },
      dim: { name: "Dimension", meaning: "Number of vectors in a basis of $V$.", read: "dim V" },

      vec: { name: "Vector", meaning: "An arrow / a list of coordinates.", read: "v" },
      comp: { name: "Component", meaning: "The $i$-th entry of vector $v$.", read: "v sub i" },
      ijk: { name: "Standard basis (3D)", meaning: "Unit vectors along $x,y,z$.", read: "i-hat, j-hat, k-hat" },
      ei: { name: "Standard basis", meaning: "$e_i$ has a $1$ in slot $i$, else $0$.", read: "e sub i" },
      zero: { name: "Zero vector", meaning: "The origin; additive identity.", read: "zero" },
      norm: { name: "Norm / length", meaning: "Length of $v$, $\\sqrt{v\\cdot v}$.", read: "norm of v" },

      A: { name: "Matrix", meaning: "A linear map written as a grid.", read: "A, B" },
      aij: { name: "Entry", meaning: "Row $i$, column $j$ of $A$.", read: "a sub i j" },
      I: { name: "Identity matrix", meaning: "Diagonal of $1$s; the do-nothing map.", read: "I" },
      transpose: { name: "Transpose", meaning: "Reflect across the diagonal.", read: "A transpose" },
      inverse: { name: "Inverse", meaning: "Undoes $A$, when it exists.", read: "A inverse" },
      det: { name: "Determinant", meaning: "Signed area/volume scale factor.", read: "det A" },
      rank: { name: "Rank", meaning: "Dimension of the column space.", read: "rank of A" },
      null: { name: "Null space", meaning: "All $x$ with $Ax=0$.", read: "null of A" },

      dot: { name: "Inner / dot product", meaning: "Number measuring alignment.", read: "u dot v" },
      span: { name: "Span", meaning: "All linear combinations.", read: "span of" },
      map: { name: "Linear map", meaning: "$T$ sends $V$ into $W$, linearly.", read: "T from V to W" },
      compose: { name: "Composition", meaning: "Do $B$, then $A$.", read: "A B" },
      eig: { name: "Eigen-equation", meaning: "$v$ scaled by $\\lambda$ under $A$.", read: "A v equals lambda v" },

      perp: { name: "Orthogonal", meaning: "$u$ and $v$ meet at a right angle.", read: "u perp v" },
      iso: { name: "Isomorphic", meaning: "Same structure, relabelled.", read: "V iso W" },
      implies: { name: "Implies / iff", meaning: "Logical consequence; both ways.", read: "implies; iff" },
      forall: { name: "Quantifiers", meaning: "For all; there exists; element of.", read: "for all; exists; in" },
    },
  };
})();
