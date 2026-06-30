/* Glossary text - Español overlay. Keyed by the ids in glossary.data.js.
   Only translatable prose lives here; LaTeX stays out (maths is universal). */
(function () {
  var T = (window.LA_GLOSSARY_TEXT = window.LA_GLOSSARY_TEXT || {});
  T.es = {
    "vector": {
      term: "Vector",
      short: "Una flecha desde el origen o, de igual modo, una lista de números, las coordenadas de su punta. Ambas imágenes son el mismo objeto visto de dos maneras.",
      formal: "Un elemento de un espacio vectorial. En $\\mathbb{R}^n$, una lista ordenada $(x_1,\\dots,x_n)$ que puedes sumar componente a componente y escalar por un número.",
    },
    "vector-space": {
      term: "Espacio vectorial",
      short: "Cualquier contexto donde puedes sumar cosas y escalarlas por números y se cumple el álgebra de siempre. Flechas, polinomios y funciones valen todos.",
      formal: "Un conjunto $V$ con suma y multiplicación por escalares que satisface conmutatividad, asociatividad, un elemento neutro $0$, inversos aditivos y las leyes distributivas y de identidad para los escalares.",
    },
    "subspace": {
      term: "Subespacio",
      short: "Un espacio vectorial que vive dentro de otro mayor: una recta o un plano por el origen, cerrado bajo la suma y el escalado.",
      formal: "Un subconjunto $U\\subseteq V$ que es a su vez un espacio vectorial: contiene a $0$ y es cerrado bajo la suma y la multiplicación por escalares.",
    },
    "linear-combination": {
      term: "Combinación lineal",
      short: "Lo que obtienes al escalar unos vectores y sumar los resultados. La operación más usada en toda el álgebra lineal.",
      formal: "Para vectores $v_1,\\dots,v_k$ y escalares $a_1,\\dots,a_k$, el vector $a_1v_1+\\cdots+a_kv_k$.",
    },
    "span": {
      term: "Espacio generado",
      short: "Todo lo que puedes alcanzar a partir de un conjunto de vectores usando combinaciones lineales: la recta, el plano o el espacio entero que generan.",
      formal: "$\\operatorname{span}(v_1,\\dots,v_k)$ es el conjunto de todas las combinaciones lineales $a_1v_1+\\cdots+a_kv_k$. Es el menor subespacio que contiene a esos vectores.",
    },
    "linear-independence": {
      term: "Independencia lineal",
      short: "Ningún vector del conjunto es alcanzable a partir de los demás, así que ninguno es redundante. Quita uno cualquiera y el espacio generado se encoge.",
      formal: "$v_1,\\dots,v_k$ son **linealmente independientes** si $a_1v_1+\\cdots+a_kv_k=0$ obliga a que cada $a_i=0$. En caso contrario son dependientes.",
    },
    "basis": {
      term: "Base",
      short: "Un conjunto mínimo de vectores que construye todo el espacio: independiente (sin redundancia) y generador (alcanza todo). El marco de coordenadas en el que mides.",
      formal: "Una lista $v_1,\\dots,v_n$ que es linealmente independiente y genera $V$. Entonces todo $v\\in V$ tiene coordenadas *únicas*: $v=a_1v_1+\\cdots+a_nv_n$.",
    },
    "standard-basis": {
      term: "Base estándar (î, ĵ, k̂)",
      short: "Los ejes por defecto: vectores unitarios que apuntan en cada dirección coordenada. Las columnas de una matriz son exactamente a dónde van a parar estos.",
      formal: "En $\\mathbb{R}^n$, los vectores $e_1,\\dots,e_n$ con un único $1$ y el resto $0$. En $\\mathbb{R}^3$ se escriben $\\hat{\\imath},\\hat{\\jmath},\\hat{k}$.",
    },
    "dimension": {
      term: "Dimensión",
      short: "Cuántas direcciones independientes tiene un espacio, el número de vectores en cualquier base. Una recta es 1, un plano es 2.",
      formal: "$\\dim V$ es la longitud de cualquier base de $V$. Toda base de un espacio de dimensión finita tiene la misma longitud, así que esto está bien definido.",
    },
    "linear-map": {
      term: "Aplicación lineal",
      short: "Una función entre espacios vectoriales que respeta la suma y el escalado: las rectas siguen rectas, el origen no se mueve y la malla queda uniforme.",
      formal: "Una función $T:V\\to W$ es **lineal** si $T(u+v)=Tu+Tv$ y $T(\\lambda v)=\\lambda\\,Tv$. Una vez sabes a dónde van los vectores de la base, conoces toda la aplicación.",
    },
    "matrix": {
      term: "Matriz",
      short: "Una cuadrícula rectangular de números que codifica una aplicación lineal. Léela por columnas: cada columna es a dónde va a parar un vector de la base.",
      formal: "Una tabla $m\\times n$ $A$. Actuando sobre $x\\in\\mathbb{R}^n$ por $x\\mapsto Ax$ da una aplicación lineal $\\mathbb{R}^n\\to\\mathbb{R}^m$ cuyas columnas son $A e_1,\\dots,A e_n$.",
    },
    "matrix-multiplication": {
      term: "Multiplicación de matrices",
      short: "Componer dos aplicaciones en una: $AB$ significa 'haz $B$, luego $A$'. No es conmutativa; el orden lo es todo.",
      formal: "Para $A\\in\\mathbb{R}^{m\\times n}$, $B\\in\\mathbb{R}^{n\\times p}$, el producto $AB$ tiene entradas $(AB)_{ij}=\\sum_{k} a_{ik}b_{kj}$, y representa la composición $A\\circ B$.",
    },
    "identity": {
      term: "Matriz identidad",
      short: "La aplicación que no hace nada: cada vector se queda exactamente donde está. La versión matricial del número $1$.",
      formal: "$I$ tiene $1$s en la diagonal y $0$s en el resto. Para toda $M$ compatible, $IM=MI=M$.",
    },
    "transpose": {
      term: "Traspuesta",
      short: "Refleja una matriz a través de su diagonal principal, de modo que las filas pasan a ser columnas. Invierte el orden de un producto: $(AB)^{\\mathsf T}=B^{\\mathsf T}A^{\\mathsf T}$.",
      formal: "$(A^{\\mathsf T})_{ij}=A_{ji}$. Una matriz $m\\times n$ pasa a ser $n\\times m$. Simétrica significa $A=A^{\\mathsf T}$.",
    },
    "invertible": {
      term: "Matriz invertible",
      short: "Una aplicación que se puede deshacer. Existe una $A^{-1}$ que la revierte exactamente. Equivale a: determinante no nulo, columnas independientes, nada colapsado.",
      formal: "$A\\in\\mathbb{R}^{n\\times n}$ es **invertible** si existe $A^{-1}$ con $A^{-1}A=AA^{-1}=I$. Esto ocurre $\\iff\\det(A)\\neq0\\iff$ las columnas son independientes $\\iff Ax=0$ solo en $x=0$.",
    },
    "singular": {
      term: "Matriz singular",
      short: "Una aplicación sin inversa: aplasta el espacio en una dimensión menor, así que se pierde información y no puedes deshacerla.",
      formal: "Una matriz cuadrada con $\\det(A)=0$. De forma equivalente, sus columnas son dependientes y su núcleo (espacio nulo) contiene un vector no nulo.",
    },
    "null-space": {
      term: "Núcleo (espacio nulo)",
      short: "Todos los vectores que una aplicación envía a cero. Un núcleo mayor significa más colapso, y una aplicación singular y no invertible.",
      formal: "$\\mathcal N(A)=\\{x: Ax=0\\}$, un subespacio del dominio. $A$ es inyectiva $\\iff \\mathcal N(A)=\\{0\\}$.",
    },
    "rank": {
      term: "Rango",
      short: "El número de direcciones independientes que sobreviven a la aplicación: la dimensión de su espacio de salida (espacio columna). Cuánto sitio ocupa la imagen.",
      formal: "$\\operatorname{rank}(A)=\\dim(\\text{espacio columna de }A)$. Rango-nulidad: $\\operatorname{rank}(A)+\\dim\\mathcal N(A)=n$.",
    },
    "determinant": {
      term: "Determinante",
      short: "El factor con signo por el que una aplicación lineal escala el área (2D) o el volumen (3D). Cero significa que el espacio se aplanó; negativo, que la orientación se invirtió.",
      formal: "Para $A\\in\\mathbb{F}^{n\\times n}$, la única función multilineal alternada de las columnas con $\\det(I)=1$. En $2\\times2$: $\\det\\begin{psmallmatrix}a&b\\\\c&d\\end{psmallmatrix}=ad-bc$. Entonces $A$ es invertible $\\iff\\det(A)\\neq0$.",
    },
    "area-volume": {
      term: "Escalado de área / volumen",
      short: "Pasa el cuadrado (o cubo) unidad por una aplicación; el área (o volumen) de la imagen es $|\\det A|$. Eso es lo que *mide* el determinante.",
      formal: "Una aplicación lineal $A$ multiplica toda área en $\\mathbb{R}^2$ (o volumen en $\\mathbb{R}^3$) por el factor constante $|\\det A|$, independiente de la región.",
    },
    "orientation": {
      term: "Orientación",
      short: "Quiralidad. Un determinante positivo la conserva; uno negativo refleja el espacio, intercambiando levógiro por dextrógiro.",
      formal: "El signo de $\\det(A)$. $\\det>0$ conserva la orientación, $\\det<0$ la invierte, $\\det=0$ colapsa a una dimensión menor.",
    },
    "eigenvalue": {
      term: "Valor propio",
      short: "Un factor de estiramiento a lo largo de una dirección especial que la aplicación no saca de su propia recta al rotar.",
      formal: "Un escalar $\\lambda$ con $Av=\\lambda v$ para algún $v$ no nulo. De forma equivalente $\\det(A-\\lambda I)=0$ (la ecuación característica).",
    },
    "eigenvector": {
      term: "Vector propio",
      short: "Una dirección no nula que la aplicación solo escala, sin sacarla nunca de su recta. La cantidad por la que escala es el valor propio.",
      formal: "Un $v$ no nulo con $Av=\\lambda v$ para algún escalar $\\lambda$. Los vectores propios de valores propios distintos son linealmente independientes.",
    },
    "dot-product": {
      term: "Producto escalar (producto interno)",
      short: "Multiplica dos vectores en un único número que mide su alineación: longitud × longitud × coseno del ángulo entre ellos. Cero significa perpendiculares.",
      formal: "$u\\cdot v=\\sum_i u_i v_i = \\|u\\|\\,\\|v\\|\\cos\\theta$. Define la longitud ($\\|v\\|=\\sqrt{v\\cdot v}$) y el ángulo; $u\\cdot v=0$ significa ortogonales.",
    },
    "orthonormal": {
      term: "Conjunto ortonormal",
      short: "Vectores mutuamente perpendiculares y cada uno de longitud uno: un marco de coordenadas perfectamente cuadrado y a escala unitaria.",
      formal: "Vectores con $q_i\\cdot q_j=\\delta_{ij}$ (1 si $i=j$, si no 0). Una base ortonormal hace triviales las coordenadas: $a_i=q_i\\cdot v$.",
    },
    "projection": {
      term: "Proyección",
      short: "La sombra de un vector sobre una recta o subespacio: el punto más cercano dentro de él. El error que descartas es perpendicular al subespacio.",
      formal: "Sobre la recta que pasa por $a$: $P=\\dfrac{aa^{\\mathsf T}}{a^{\\mathsf T}a}$, con $Pb$ el punto de la recta más cercano a $b$ y $b-Pb\\perp a$.",
    },
    "rotation": {
      term: "Rotación",
      short: "Gira el espacio alrededor del origen un ángulo, conservando toda longitud y ángulo, y también la orientación. Un giro rígido.",
      formal: "En $\\mathbb{R}^2$, $R_\\theta=\\begin{psmallmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{psmallmatrix}$, con $\\det=1$ y $R^{\\mathsf T}R=I$ (ortogonal).",
    },
    "shear": {
      term: "Cizalla",
      short: "Desliza el espacio paralelamente a una recta, como empujar una baraja de cartas de lado. Las áreas no cambian ($\\det=1$), pero los ángulos se doblan.",
      formal: "Por ejemplo $\\begin{psmallmatrix}1&k\\\\0&1\\end{psmallmatrix}$ fija el eje $x$ y desliza cada punto horizontalmente $k$ veces su altura. Determinante $1$.",
    },
  };
})();
