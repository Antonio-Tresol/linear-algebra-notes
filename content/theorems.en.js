/* Theorems text — English overlay. Keyed by the ids in theorems.data.js.
   Only translatable prose lives here (name, note); the maths stays universal
   in the data file. British spelling; one short sentence per note at most. */
(function () {
  var T = (window.LA_THEOREMS_TEXT = window.LA_THEOREMS_TEXT || {});
  T.en = {
    "unique-representation": {
      name: "Unique representation in a basis",
      note: "A list is a basis exactly when every vector has one and only one set of coordinates in it, which is what makes coordinates well defined.",
    },
    "dimension-well-defined": {
      name: "Dimension is well defined",
      note: "Because every basis has the same length, that common length can be called the dimension without ambiguity.",
    },
    "rank-nullity": {
      name: "Rank-nullity (Fundamental Theorem of Linear Maps)",
      note: "The directions a map keeps (rank) plus the directions it collapses (nullity) always add up to the dimension of the domain.",
    },
    "four-subspaces": {
      name: "Dimensions of the four subspaces",
      note: "Strang's framing: the row and column spaces share the rank r, and the two null spaces take up the slack on each side.",
    },
    "invertible-iff-bijective": {
      name: "Invertible means injective and surjective",
      note: "A linear map can be undone exactly when it loses nothing (injective) and reaches everything (surjective).",
    },
    "inverse-of-product": {
      name: "Inverse of a product",
      note: "To undo two maps applied in order, undo them in the reverse order.",
    },
    "transpose-of-product": {
      name: "Transpose of a product",
      note: "The transpose reverses the order of a product, just as the inverse does.",
    },
    "det-product": {
      name: "Determinant of a product",
      note: "The determinant is multiplicative, so a single singular factor forces a singular product.",
    },
    "invertible-iff-det": {
      name: "Invertible if and only if the determinant is nonzero",
      note: "A zero determinant means space was flattened, and a flattened map cannot be undone.",
    },
    "det-transpose": {
      name: "Determinant of a transpose",
      note: "Transposing a matrix leaves its determinant unchanged, so rows and columns scale volume by the same factor.",
    },
    "det-volume": {
      name: "Determinant as a volume factor",
      note: "The absolute determinant is the factor by which the map scales every area or volume.",
    },
    "characteristic-equation": {
      name: "Characteristic equation",
      note: "Eigenvalues are exactly the numbers that make A minus lambda I singular, that is, the roots of its determinant.",
    },
    "spectral-theorem": {
      name: "Spectral theorem (real symmetric matrices)",
      note: "Every real symmetric matrix has an orthonormal basis of eigenvectors, so it diagonalises by an orthogonal change of basis.",
    },
    "cauchy-schwarz": {
      name: "Cauchy-Schwarz inequality",
      note: "The inner product of two vectors never exceeds the product of their lengths, with equality only when they are parallel.",
    },
    "pythagorean": {
      name: "Pythagorean theorem",
      note: "For orthogonal vectors the squared lengths simply add, exactly as for the sides of a right triangle.",
    },
    "orthonormal-independent": {
      name: "Orthonormal lists are independent",
      note: "Mutually perpendicular unit vectors are automatically independent, so any orthonormal spanning list is a basis.",
    },
  };
})();
