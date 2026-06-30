/* Key ideas to remember — English overlay. Keyed by page id ("2d", "3d", "matmul").
   Each entry: { title (3-6 words), body (1-2 sentences, plain language, light KaTeX). } */
(function () {
  var K = (window.LA_KEYIDEAS = window.LA_KEYIDEAS || {});
  K.en = {
    "2d": [
      {
        title: "A matrix is a transformation",
        body: "A $2\\times2$ matrix is not a static grid of numbers; it is a recipe for moving the whole plane. Read it by its columns and you see exactly where the basis vectors $\\hat{\\imath}$ and $\\hat{\\jmath}$ land, and once you know that, the fate of every other vector is fixed."
      },
      {
        title: "Columns are where the basis lands",
        body: "The first column is the image of $\\hat{\\imath}$, the second is the image of $\\hat{\\jmath}$. Any vector is just a combination of those two, so the transformation carries it to the same combination of the new column vectors."
      },
      {
        title: "The determinant is an area factor",
        body: "Take the unit square spanned by $\\hat{\\imath}$ and $\\hat{\\jmath}$; the transformation turns it into a parallelogram, and the determinant is exactly how many times bigger (or smaller) that parallelogram is. Every region in the plane is scaled by this same factor."
      },
      {
        title: "Sign flips, zero collapses",
        body: "A negative determinant means the plane has been flipped over, like turning a sheet of paper face down, so orientation reverses. A determinant of zero means the square has been squashed flat onto a line: the map is singular, it cannot be undone, and information is lost."
      }
    ],
    "3d": [
      {
        title: "A matrix moves all of space",
        body: "A $3\\times3$ matrix is a way of moving three-dimensional space, and its three columns tell you where $\\hat{\\imath}$, $\\hat{\\jmath}$ and $\\hat{k}$ end up. Pin down those three images and you have pinned down the entire transformation."
      },
      {
        title: "The determinant is a volume factor",
        body: "The unit cube becomes a slanted box (a parallelepiped) under the transformation, and the determinant is the factor by which its volume changes. Whatever shape you start with, its volume is multiplied by this one number."
      },
      {
        title: "Zero volume means collapse",
        body: "When the determinant is zero, the cube has been flattened into a plane or even a line, so it has no volume left. The columns no longer point in three independent directions, the map is singular, and it cannot be reversed."
      },
      {
        title: "Negative flips handedness",
        body: "A negative determinant means a right-handed set of axes has become left-handed, as though space were viewed in a mirror. The volume scales by the size of the number; the minus sign records the flip in orientation."
      }
    ],
    "matmul": [
      {
        title: "Multiplying matrices composes maps",
        body: "Multiplying two matrices is the same as doing one transformation after another. The product $AB$ is a single matrix that performs the combined motion in one step."
      },
      {
        title: "Order matters: do B, then A",
        body: "In $AB$ the right-hand matrix acts first, so $AB$ means \"apply $B$, then apply $A$\". Swapping them usually lands vectors somewhere else, which is why $AB \\neq BA$ in general."
      },
      {
        title: "Determinants multiply",
        body: "Because areas and volumes scale step by step, $\\det(AB) = \\det(A)\\,\\det(B)$. The total stretch of a composition is just the product of the individual stretches."
      },
      {
        title: "One collapse collapses everything",
        body: "If either matrix has determinant zero, then $\\det(AB)$ is zero too, so the whole composition is singular. A single step that squashes space flat can never be undone by the steps around it."
      }
    ]
  };
})();
