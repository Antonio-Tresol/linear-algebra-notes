/* Notation text — Español overlay (partial). Missing rows fall back to English. */
(function () {
  var T = (window.LA_NOTATION_TEXT = window.LA_NOTATION_TEXT || {});
  T.es = {
    groups: {
      sets: "Conjuntos y espacios",
      vectors: "Vectores",
      matrices: "Matrices",
      operations: "Operaciones y aplicaciones",
      relations: "Relaciones y lógica",
    },
    conventions: [
      "Los vectores son **columnas** por defecto; un vector fila se escribe $v^{\\mathsf T}$.",
      "Los índices empiezan en **1**: $a_{ij}$ es fila $i$, columna $j$, con $i$ primero.",
      "Los escalares vienen de $\\mathbb{R}$ salvo que se nombre un cuerpo $\\mathbb{F}$.",
      "La traspuesta se escribe $A^{\\mathsf T}$ (no $A'$).",
      "$\\langle u,v\\rangle$ y $u\\cdot v$ son el mismo producto interno estándar.",
    ],
    rows: {
      R: { name: "Números reales", meaning: "La recta real; escalares ordinarios.", read: "R" },
      Rn: { name: "Espacio real n-dimensional", meaning: "Listas de $n$ números reales.", read: "R-n" },
      vec: { name: "Vector", meaning: "Una flecha / una lista de coordenadas.", read: "v" },
      A: { name: "Matriz", meaning: "Una aplicación lineal como cuadrícula.", read: "A, B" },
      det: { name: "Determinante", meaning: "Factor de escala (con signo) de área/volumen.", read: "det A" },
      I: { name: "Matriz identidad", meaning: "Diagonal de $1$s; la aplicación que no hace nada.", read: "I" },
    },
  };
})();
