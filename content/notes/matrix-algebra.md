# Matrix Algebra Cheatsheet

The core idea: matrix algebra is mostly like scalar algebra, except for a few rules that break. Learn the differences, not the similarities.

---

## Rule 1: Order matters

[[matrix-multiplication|Multiplication]] does **not** commute:

$$AB \neq BA \quad \text{(in general)}$$

So when you multiply both sides of an equation, do it on the **same side** on both sides, and keep track of which side.

| You have | Multiply by $A^{-1}$ on the | You get |
|---|---|---|
| $AX = B$ | left | $X = A^{-1}B$ |
| $XA = B$ | right | $X = BA^{-1}$ |

Same goal, different answer, because the side $A$ sits on decides everything. Never silently flip a factor across.

---

## Rule 2: No division, only inverses (which may not exist)

There is no $\frac{B}{A}$. The only move is multiplying by an [[invertible|inverse]] $A^{-1}$, defined by:

$$A^{-1}A = I \qquad A A^{-1} = I$$

where $I$ is the [[identity]] (ones on the diagonal, zeros elsewhere), the matrix version of the number $1$: $IM = MI = M$.

Key difference from numbers: with scalars only $0$ has no inverse. With matrices, **many nonzero matrices have no inverse**.

- **Invertible** (non-singular): an inverse exists.
- **[[singular|Singular]]** (non-invertible): no inverse.

Quick test: $A$ is [[invertible]] exactly when its [[determinant]] is nonzero, $\det(A) \neq 0$.

Example of a nonzero singular matrix:

$$A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}, \qquad \det(A) = (1)(4) - (2)(2) = 0$$

Before you ever "cancel" an $A$, you are assuming it is invertible. Always check.

---

## Rule 3: What survives, and the traps

### Safe habits (work exactly like numbers)

- Addition commutes and associates: $A + B = B + A$, and $(A+B)+C = A+(B+C)$.
- Multiplication associates (regrouping is fine): $(AB)C = A(BC)$.
- Distribution holds, but respect the side:

$$A(B+C) = AB + AC \qquad (B+C)A = BA + CA$$

So: **regrouping is allowed, reordering is not.**

### Trap 1: the squared binomial

$$(A+B)^2 = A^2 + AB + BA + B^2$$

You may **not** collapse the middle to $2AB$ unless $A$ and $B$ commute ($AB = BA$). Same for the difference of squares:

$$(A+B)(A-B) = A^2 - AB + BA - B^2 \neq A^2 - B^2 \quad \text{(in general)}$$

### Trap 2: cancellation can fail

$$AB = AC \;\not\Rightarrow\; B = C$$

You can only cancel $A$ if it is invertible (then you are really left-multiplying by $A^{-1}$). A sharp version:

$$AB = 0 \;\not\Rightarrow\; A = 0 \text{ or } B = 0$$

$$\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$$

Two nonzero matrices, zero product.

---

## Rule 4: Inverse and transpose reverse the order

Distributing an inverse or a [[transpose]] over a product **flips the order**:

$$(AB)^{-1} = B^{-1}A^{-1} \qquad (AB)^T = B^T A^T$$

Intuition for the inverse: $AB$ means "do $B$, then $A$". To undo it, reverse the steps, undo $A$ first. Socks and shoes.

Stacking over three factors:

$$(ABC)^{-1} = C^{-1}B^{-1}A^{-1} \qquad (ABC)^T = C^T B^T A^T$$

Useful identity: transposing twice returns the original, $(A^T)^T = A$. Likewise $(A^{-1})^{-1} = A$.

---

## Rule 5: The reassuring bits

- A **scalar** $c$ (a plain number) commutes with everything: $cA = Ac$. This is the one place reordering is always fine.
- $A + 0 = A$, where $0$ is the zero matrix.
- $AI = IA = A$.
- $(cA)^T = c A^T$ and $(cA)^{-1} = \frac{1}{c}A^{-1}$ for $c \neq 0$.

---

## Worked example (chains several rules)

Solve for $X$:

$$(AX)^T = B$$

Transpose both sides (Rule 4 flip plus double-transpose):

$$AX = B^T$$

Left-multiply by $A^{-1}$, assuming $A$ is invertible (Rule 2, Rule 1):

$$X = A^{-1}B^T$$

---

## Canonical algorithms

### Transpose

The simplest of the three. Reflect across the main diagonal: entry $(i,j)$ becomes entry $(j,i)$.

$$(A^T)_{ij} = A_{ji}$$

An $m \times n$ matrix becomes $n \times m$. Row $i$ of $A$ becomes column $i$ of $A^T$.

$$\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}^T = \begin{pmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{pmatrix}$$

No conditions, always defined, costs nothing.

---

### Determinant

**2x2 (memorise this one):**

$$\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$$

**General $n \times n$: cofactor (Laplace) expansion.** Pick any row or column, then sum entry times signed minor across it. Expanding along row $i$:

$$\det(A) = \sum_{j=1}^{n} (-1)^{i+j}\, a_{ij}\, M_{ij}$$

where $M_{ij}$ is the **minor**, the determinant of the submatrix left after deleting row $i$ and column $j$. The factor $(-1)^{i+j}$ is the checkerboard sign pattern:

$$\begin{pmatrix} + & - & + \\ - & + & - \\ + & - & + \end{pmatrix}$$

The term $(-1)^{i+j}M_{ij}$ is called the **cofactor** $C_{ij}$. Tip: expand along whichever row or column has the most zeros, since a zero entry kills its whole term.

Worked 3x3 (expanding along the top row):

$$\det\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 10 \end{pmatrix} = 1\det\begin{pmatrix} 5 & 6 \\ 8 & 10 \end{pmatrix} - 2\det\begin{pmatrix} 4 & 6 \\ 7 & 10 \end{pmatrix} + 3\det\begin{pmatrix} 4 & 5 \\ 7 & 8 \end{pmatrix}$$

$$= 1(50 - 48) - 2(40 - 42) + 3(32 - 35) = 2 + 4 - 9 = -3$$

**Faster in practice: row-reduce to triangular form.** Reduce $A$ to upper triangular by Gaussian elimination, then the determinant is the product of the diagonal entries, adjusted for the row operations:

- Adding a multiple of one row to another: no change.
- Swapping two rows: multiply by $-1$.
- Scaling a row by $c$: multiply by $c$ (so divide it back out).

Cofactor expansion is $O(n!)$ and only sane by hand for small $n$. Row reduction is $O(n^3)$ and is what you actually use for larger matrices.

---

### Inverse

**2x2 closed form (memorise):** swap the diagonal, negate the off-diagonal, divide by the determinant.

$$\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

Undefined when $ad - bc = 0$, exactly the singular case.

**General method 1: Gauss-Jordan elimination.** Augment $A$ with the identity, then row-reduce the left block to $I$. Whatever the right block becomes is $A^{-1}$.

$$[\,A \mid I\,] \;\xrightarrow{\text{row reduce}}\; [\,I \mid A^{-1}\,]$$

If the left block cannot be reduced to $I$ (a zero row appears), $A$ is singular and has no inverse. This is the practical workhorse, $O(n^3)$.

**General method 2: adjugate formula.** Mostly of theoretical value, but worth knowing:

$$A^{-1} = \frac{1}{\det(A)}\,\operatorname{adj}(A)$$

where the **adjugate** $\operatorname{adj}(A)$ is the transpose of the cofactor matrix, $\operatorname{adj}(A)_{ij} = C_{ji}$. Note the transpose flips $ij$ to $ji$. For a 2x2 this reproduces the closed form above. It makes the singularity condition obvious: if $\det(A) = 0$ you are dividing by zero, so no inverse exists.

---

## The mental checklist

Before applying any scalar habit, ask: am I about to

- reorder a product? (not allowed unless they commute)
- collect $AB + BA$ into $2AB$? (not allowed unless they commute)
- cancel a common factor? (only if it is invertible)
- divide? (does not exist, use an inverse)
- distribute an inverse or transpose? (remember to flip the order)

If yes to any, stop and check the relevant rule.

---

*Related visual: [the 2×2 transformation](2d.html) shows how the determinant becomes the area of the transformed unit square. See also the [[determinant]] and [[invertible]] glossary entries.*
