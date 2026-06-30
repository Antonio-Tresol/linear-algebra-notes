/* Glossary text — English overlay. Keyed by the ids in glossary.data.js.
   Only translatable prose lives here; LaTeX stays out (math is universal). */
(function () {
  var T = (window.LA_GLOSSARY_TEXT = window.LA_GLOSSARY_TEXT || {});
  T.en = {
    "vector": {
      term: "Vector",
      short: "An arrow from the origin, or equally a list of numbers, the coordinates of its tip. Both pictures are the same object seen two ways.",
      formal: "An element of a vector space. In $\\mathbb{R}^n$, an ordered list $(x_1,\\dots,x_n)$ that you can add componentwise and scale by a number.",
    },
    "vector-space": {
      term: "Vector space",
      short: "Any setting where you can add things and scale them by numbers and the usual algebra holds. Arrows, polynomials, and functions all qualify.",
      formal: "A set $V$ with addition and scalar multiplication satisfying commutativity, associativity, an additive identity $0$, additive inverses, and the distributive/identity laws for scalars.",
    },
    "subspace": {
      term: "Subspace",
      short: "A vector space living inside a bigger one: a line or plane through the origin that is closed under adding and scaling.",
      formal: "A subset $U\\subseteq V$ that is itself a vector space: it contains $0$ and is closed under addition and scalar multiplication.",
    },
    "linear-combination": {
      term: "Linear combination",
      short: "What you get by scaling some vectors and adding the results. The single most-used move in all of linear algebra.",
      formal: "For vectors $v_1,\\dots,v_k$ and scalars $a_1,\\dots,a_k$, the vector $a_1v_1+\\cdots+a_kv_k$.",
    },
    "span": {
      term: "Span",
      short: "Everything you can reach from a set of vectors using linear combinations: the whole line, plane, or space they generate.",
      formal: "$\\operatorname{span}(v_1,\\dots,v_k)$ is the set of all linear combinations $a_1v_1+\\cdots+a_kv_k$. It is the smallest subspace containing those vectors.",
    },
    "linear-independence": {
      term: "Linear independence",
      short: "No vector in the set is reachable from the others, so none is redundant. Remove any one and the span shrinks.",
      formal: "$v_1,\\dots,v_k$ are **linearly independent** if $a_1v_1+\\cdots+a_kv_k=0$ forces every $a_i=0$. Otherwise they are dependent.",
    },
    "basis": {
      term: "Basis",
      short: "A minimal set of vectors that builds the whole space: independent (no redundancy) and spanning (reaches everything). The coordinate frame you measure in.",
      formal: "A list $v_1,\\dots,v_n$ that is linearly independent and spans $V$. Then every $v\\in V$ has *unique* coordinates: $v=a_1v_1+\\cdots+a_nv_n$.",
    },
    "standard-basis": {
      term: "Standard basis (î, ĵ, k̂)",
      short: "The default axes: unit vectors pointing along each coordinate direction. A matrix's columns are exactly where these land.",
      formal: "In $\\mathbb{R}^n$, the vectors $e_1,\\dots,e_n$ with a single $1$ and the rest $0$. In $\\mathbb{R}^3$ they are written $\\hat{\\imath},\\hat{\\jmath},\\hat{k}$.",
    },
    "dimension": {
      term: "Dimension",
      short: "How many independent directions a space has, the number of vectors in any basis. A line is 1, a plane is 2.",
      formal: "$\\dim V$ is the length of any basis of $V$. Every basis of a finite-dimensional space has the same length, so this is well defined.",
    },
    "linear-map": {
      term: "Linear map",
      short: "A function between vector spaces that respects addition and scaling: straight lines stay straight, the origin stays put, and grid spacing stays even.",
      formal: "A function $T:V\\to W$ is **linear** if $T(u+v)=Tu+Tv$ and $T(\\lambda v)=\\lambda\\,Tv$. Once you know where the basis vectors go, you know the whole map.",
    },
    "matrix": {
      term: "Matrix",
      short: "A rectangular grid of numbers that encodes a linear map. Read it by columns: each column is where one basis vector lands.",
      formal: "An $m\\times n$ array $A$. Acting on $x\\in\\mathbb{R}^n$ by $x\\mapsto Ax$ gives a linear map $\\mathbb{R}^n\\to\\mathbb{R}^m$ whose columns are $A e_1,\\dots,A e_n$.",
    },
    "matrix-multiplication": {
      term: "Matrix multiplication",
      short: "Composing two maps into one: $AB$ means 'do $B$, then $A$'. Not commutative; order is everything.",
      formal: "For $A\\in\\mathbb{R}^{m\\times n}$, $B\\in\\mathbb{R}^{n\\times p}$, the product $AB$ has entries $(AB)_{ij}=\\sum_{k} a_{ik}b_{kj}$, and represents the composition $A\\circ B$.",
    },
    "identity": {
      term: "Identity matrix",
      short: "The do-nothing map: every vector stays exactly where it is. The matrix version of the number $1$.",
      formal: "$I$ has $1$s on the diagonal and $0$s elsewhere. For every conformable $M$, $IM=MI=M$.",
    },
    "transpose": {
      term: "Transpose",
      short: "Flip a matrix across its main diagonal, so rows become columns. Reverses the order of a product: $(AB)^{\\mathsf T}=B^{\\mathsf T}A^{\\mathsf T}$.",
      formal: "$(A^{\\mathsf T})_{ij}=A_{ji}$. An $m\\times n$ matrix becomes $n\\times m$. Symmetric means $A=A^{\\mathsf T}$.",
    },
    "invertible": {
      term: "Invertible matrix",
      short: "A map you can undo. There is an $A^{-1}$ that exactly reverses it. Equivalent to: determinant nonzero, columns independent, nothing collapsed.",
      formal: "$A\\in\\mathbb{R}^{n\\times n}$ is **invertible** if there is $A^{-1}$ with $A^{-1}A=AA^{-1}=I$. Holds $\\iff\\det(A)\\neq0\\iff$ the columns are independent $\\iff Ax=0$ only at $x=0$.",
    },
    "singular": {
      term: "Singular matrix",
      short: "A map with no inverse: it squashes space into a lower dimension, so information is lost and you cannot undo it.",
      formal: "A square matrix with $\\det(A)=0$. Equivalently its columns are dependent and its null space contains a nonzero vector.",
    },
    "null-space": {
      term: "Null space (kernel)",
      short: "All the vectors a map sends to zero. Bigger null space means more collapse, and a singular, non-invertible map.",
      formal: "$\\mathcal N(A)=\\{x: Ax=0\\}$, a subspace of the domain. $A$ is injective $\\iff \\mathcal N(A)=\\{0\\}$.",
    },
    "rank": {
      term: "Rank",
      short: "The number of independent directions that survive the map: the dimension of its output (column) space. How much room the image fills.",
      formal: "$\\operatorname{rank}(A)=\\dim(\\text{column space of }A)$. Rank–nullity: $\\operatorname{rank}(A)+\\dim\\mathcal N(A)=n$.",
    },
    "determinant": {
      term: "Determinant",
      short: "The signed factor by which a linear map scales area (2D) or volume (3D). Zero means space was flattened; negative means orientation flipped.",
      formal: "For $A\\in\\mathbb{F}^{n\\times n}$, the unique alternating multilinear function of the columns with $\\det(I)=1$. In $2\\times2$: $\\det\\begin{psmallmatrix}a&b\\\\c&d\\end{psmallmatrix}=ad-bc$. Then $A$ is invertible $\\iff\\det(A)\\neq0$.",
    },
    "area-volume": {
      term: "Area / volume scaling",
      short: "Feed the unit square (or cube) through a map; the image's area (or volume) is $|\\det A|$. That is what the determinant *measures*.",
      formal: "A linear map $A$ multiplies every area in $\\mathbb{R}^2$ (or volume in $\\mathbb{R}^3$) by the constant factor $|\\det A|$, independent of the region.",
    },
    "orientation": {
      term: "Orientation",
      short: "Handedness. A positive determinant keeps it; a negative one mirrors space, swapping left-handed for right-handed.",
      formal: "The sign of $\\det(A)$. $\\det>0$ preserves orientation, $\\det<0$ reverses it, $\\det=0$ collapses to lower dimension.",
    },
    "eigenvalue": {
      term: "Eigenvalue",
      short: "A stretch factor along a special direction the map doesn't rotate off its own line.",
      formal: "A scalar $\\lambda$ with $Av=\\lambda v$ for some nonzero $v$. Equivalently $\\det(A-\\lambda I)=0$ (the characteristic equation).",
    },
    "eigenvector": {
      term: "Eigenvector",
      short: "A nonzero direction the map only scales, never knocks off its line. The amount it scales by is the eigenvalue.",
      formal: "A nonzero $v$ with $Av=\\lambda v$ for some scalar $\\lambda$. Eigenvectors for distinct eigenvalues are linearly independent.",
    },
    "dot-product": {
      term: "Dot product (inner product)",
      short: "Multiplies two vectors into one number that measures alignment: length × length × cosine of the angle between them. Zero means perpendicular.",
      formal: "$u\\cdot v=\\sum_i u_i v_i = \\|u\\|\\,\\|v\\|\\cos\\theta$. It defines length ($\\|v\\|=\\sqrt{v\\cdot v}$) and angle; $u\\cdot v=0$ means orthogonal.",
    },
    "orthonormal": {
      term: "Orthonormal set",
      short: "Vectors that are mutually perpendicular and each of length one: a perfectly square, unit-scaled coordinate frame.",
      formal: "Vectors with $q_i\\cdot q_j=\\delta_{ij}$ (1 if $i=j$, else 0). An orthonormal basis makes coordinates trivial: $a_i=q_i\\cdot v$.",
    },
    "projection": {
      term: "Projection",
      short: "The shadow of a vector onto a line or subspace: the closest point in it. The error you drop is perpendicular to the subspace.",
      formal: "Onto the line through $a$: $P=\\dfrac{aa^{\\mathsf T}}{a^{\\mathsf T}a}$, with $Pb$ the nearest point of the line to $b$ and $b-Pb\\perp a$.",
    },
    "rotation": {
      term: "Rotation",
      short: "Turns space about the origin by an angle, keeping every length and angle, and orientation too. A rigid spin.",
      formal: "In $\\mathbb{R}^2$, $R_\\theta=\\begin{psmallmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{psmallmatrix}$, with $\\det=1$ and $R^{\\mathsf T}R=I$ (orthogonal).",
    },
    "shear": {
      term: "Shear",
      short: "Slides space parallel to a line, like pushing a deck of cards sideways. Areas are untouched ($\\det=1$), but angles bend.",
      formal: "E.g. $\\begin{psmallmatrix}1&k\\\\0&1\\end{psmallmatrix}$ fixes the $x$-axis and slides each point horizontally by $k$ times its height. Determinant $1$.",
    },
  };
})();
