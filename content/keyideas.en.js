/* Key ideas to remember - English overlay. Keyed by page id ("2d", "3d", "matmul").
   Each entry: { title (3-6 words), body (1-2 sentences), cite (a LA_SOURCES id) }.
   The framings follow 3Blue1Brown's "Essence of Linear Algebra"; cite links the
   exact episode. British spelling; no em dashes; no negation-correction phrasing. */
(function () {
  var K = (window.LA_KEYIDEAS = window.LA_KEYIDEAS || {});
  K.en = {
    "2d": [
      {
        title: "A matrix is a transformation",
        body: "Picture a $2\\times2$ matrix as a recipe for moving the whole plane. 3Blue1Brown's visual test for a linear move: grid lines stay straight and evenly spaced, and the origin stays put. Read the matrix by its columns to see where $\\hat{\\imath}$ and $\\hat{\\jmath}$ land, and the path of every other vector follows.",
        cite: "3b1b-linear-transformations",
      },
      {
        title: "Columns are where the basis lands",
        body: "The first column is where $\\hat{\\imath}$ lands, the second where $\\hat{\\jmath}$ lands. Since any vector is a combination of $\\hat{\\imath}$ and $\\hat{\\jmath}$, the transformed vector $(x,y)$ becomes $x$ times the first column plus $y$ times the second. That one idea is the whole of how a matrix acts on a vector.",
        cite: "3b1b-linear-transformations",
      },
      {
        title: "The determinant is an area factor",
        body: "Send the unit square through the transformation and it becomes a parallelogram. As 3Blue1Brown puts it, the determinant measures how much the area grows or shrinks, and that same factor scales every region of the plane.",
        cite: "3b1b-determinant",
      },
      {
        title: "Sign flips, zero collapses",
        body: "A negative determinant flips the plane over, like turning a sheet of paper face down, so orientation reverses. A determinant of zero squashes the square flat onto a line, which makes the matrix singular: the move cannot be undone and information is lost.",
        cite: "3b1b-determinant",
      },
    ],
    "3d": [
      {
        title: "A matrix moves all of space",
        body: "A $3\\times3$ matrix moves three-dimensional space, with its three columns telling you where $\\hat{\\imath}$, $\\hat{\\jmath}$ and $\\hat{k}$ land. 3Blue1Brown's rule carries over from the plane: fix those three images and the whole transformation is fixed.",
        cite: "3b1b-3d-transformations",
      },
      {
        title: "The determinant is a volume factor",
        body: "The unit cube becomes a slanted box, a parallelepiped, and the determinant is the factor by which its volume changes. Every shape in space scales by that one number, just as areas did in the plane.",
        cite: "3b1b-determinant",
      },
      {
        title: "Zero volume means collapse",
        body: "When the determinant is zero the cube is flattened into a plane or a line, leaving no volume. The three columns stop pointing in independent directions, the matrix is singular, and the move cannot be reversed.",
        cite: "3b1b-determinant",
      },
      {
        title: "Negative flips handedness",
        body: "A negative determinant turns a right-handed set of axes into a left-handed one, as though space were seen in a mirror. The size of the number gives the volume scaling, and the minus sign records the flip in orientation.",
        cite: "3b1b-determinant",
      },
    ],
    "matmul": [
      {
        title: "Multiplying matrices composes maps",
        body: "Multiplying two matrices does one transformation after another. 3Blue1Brown frames the product $AB$ as a single matrix that captures the combined motion, applying $B$ first and then $A$.",
        cite: "3b1b-matrix-multiplication",
      },
      {
        title: "Order matters: do B, then A",
        body: "In $AB$ the right-hand matrix acts first, so $AB$ reads as apply $B$, then $A$. Following the geometry, swapping the order usually sends vectors somewhere else, which is why $AB \\neq BA$ in general.",
        cite: "3b1b-matrix-multiplication",
      },
      {
        title: "Determinants multiply",
        body: "Areas and volumes scale one step at a time, so $\\det(AB) = \\det(A)\\,\\det(B)$. The total stretch of a composition is the product of the individual stretches.",
        cite: "3b1b-determinant",
      },
      {
        title: "One collapse collapses everything",
        body: "If either matrix has determinant zero, then $\\det(AB)$ is zero as well, so the whole composition is singular. A single step that flattens space cannot be rescued by the steps around it.",
        cite: "3b1b-determinant",
      },
    ],
  };
})();
