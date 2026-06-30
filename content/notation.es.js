/* Notation text - Español overlay. Keyed by ids in notation.data.js. */
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
      "Los escalares vienen de $\\mathbb{R}$ salvo que se nombre un cuerpo $\\mathbb{F}$ (entonces $\\mathbb{R}$ o $\\mathbb{C}$).",
      "La traspuesta se escribe $A^{\\mathsf T}$ (no $A'$).",
      "$\\langle u,v\\rangle$ y $u\\cdot v$ significan aquí el mismo producto interno estándar.",
    ],
    rows: {
      R: { name: "Números reales", meaning: "La recta real; escalares ordinarios.", read: "R" },
      Rn: { name: "Espacio real n-dimensional", meaning: "Todas las listas de longitud $n$ de números reales.", read: "R-n" },
      F: { name: "Un cuerpo", meaning: "Escalares que puedes usar, normalmente $\\mathbb{R}$ o $\\mathbb{C}$.", read: "F" },
      V: { name: "Espacios vectoriales", meaning: "Espacios abstractos donde viven los vectores.", read: "V, W" },
      subset: { name: "Subespacio", meaning: "$U$ es un subespacio dentro de $V$.", read: "U en V" },
      dim: { name: "Dimensión", meaning: "Número de vectores en una base de $V$.", read: "dim V" },

      vec: { name: "Vector", meaning: "Una flecha / una lista de coordenadas.", read: "v" },
      comp: { name: "Componente", meaning: "La $i$-ésima entrada del vector $v$.", read: "v sub i" },
      ijk: { name: "Base estándar (3D)", meaning: "Vectores unitarios a lo largo de $x,y,z$.", read: "i con sombrero, j con sombrero, k con sombrero" },
      ei: { name: "Base estándar", meaning: "$e_i$ tiene un $1$ en la posición $i$, si no $0$.", read: "e sub i" },
      zero: { name: "Vector cero", meaning: "El origen; el neutro aditivo.", read: "cero" },
      norm: { name: "Norma / longitud", meaning: "Longitud de $v$, $\\sqrt{v\\cdot v}$.", read: "norma de v" },

      A: { name: "Matriz", meaning: "Una aplicación lineal escrita como cuadrícula.", read: "A, B" },
      aij: { name: "Entrada", meaning: "Fila $i$, columna $j$ de $A$.", read: "a sub i j" },
      I: { name: "Matriz identidad", meaning: "Diagonal de $1$s; la aplicación que no hace nada.", read: "I" },
      transpose: { name: "Traspuesta", meaning: "Reflejar a través de la diagonal.", read: "A traspuesta" },
      inverse: { name: "Inversa", meaning: "Deshace $A$, cuando existe.", read: "A inversa" },
      det: { name: "Determinante", meaning: "Factor de escala (con signo) de área/volumen.", read: "det A" },
      rank: { name: "Rango", meaning: "Dimensión del espacio columna.", read: "rango de A" },
      null: { name: "Núcleo (espacio nulo)", meaning: "Todos los $x$ con $Ax=0$.", read: "núcleo de A" },

      dot: { name: "Producto interno / escalar", meaning: "Número que mide la alineación.", read: "u punto v" },
      span: { name: "Espacio generado", meaning: "Todas las combinaciones lineales.", read: "espacio generado por" },
      map: { name: "Aplicación lineal", meaning: "$T$ lleva $V$ a $W$, de forma lineal.", read: "T de V a W" },
      compose: { name: "Composición", meaning: "Haz $B$, luego $A$.", read: "A B" },
      eig: { name: "Ecuación de valores propios", meaning: "$v$ escalado por $\\lambda$ bajo $A$.", read: "A v igual a lambda v" },

      perp: { name: "Ortogonal", meaning: "$u$ y $v$ se cortan en ángulo recto.", read: "u perp v" },
      iso: { name: "Isomorfo", meaning: "Misma estructura, reetiquetada.", read: "V iso W" },
      implies: { name: "Implica / si y solo si", meaning: "Consecuencia lógica; en ambos sentidos.", read: "implica; si y solo si" },
      forall: { name: "Cuantificadores", meaning: "Para todo; existe; elemento de.", read: "para todo; existe; en" },
    },
  };
})();
