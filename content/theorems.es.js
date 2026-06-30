/* Theorems text - Español overlay. Keyed by the ids in theorems.data.js.
   Only translatable prose lives here (name, note); the maths stays universal
   in the data file. One short sentence per note at most. */
(function () {
  var T = (window.LA_THEOREMS_TEXT = window.LA_THEOREMS_TEXT || {});
  T.es = {
    "unique-representation": {
      name: "Representación única en una base",
      note: "Una lista es una base exactamente cuando todo vector tiene un único conjunto de coordenadas en ella, que es lo que hace que las coordenadas estén bien definidas.",
    },
    "dimension-well-defined": {
      name: "La dimensión está bien definida",
      note: "Como toda base tiene la misma longitud, esa longitud común puede llamarse la dimensión sin ambigüedad.",
    },
    "rank-nullity": {
      name: "Rango-nulidad (Teorema fundamental de las aplicaciones lineales)",
      note: "Las direcciones que una aplicación conserva (rango) más las direcciones que colapsa (nulidad) siempre suman la dimensión del dominio.",
    },
    "four-subspaces": {
      name: "Dimensiones de los cuatro subespacios",
      note: "El planteamiento de Strang: el espacio fila y el espacio columna comparten el rango r, y los dos núcleos ocupan el resto a cada lado.",
    },
    "invertible-iff-bijective": {
      name: "Invertible significa inyectiva y suprayectiva",
      note: "Una aplicación lineal se puede deshacer exactamente cuando no pierde nada (inyectiva) y alcanza todo (suprayectiva).",
    },
    "inverse-of-product": {
      name: "Inversa de un producto",
      note: "Para deshacer dos aplicaciones aplicadas en orden, deshazlas en el orden inverso.",
    },
    "transpose-of-product": {
      name: "Traspuesta de un producto",
      note: "La traspuesta invierte el orden de un producto, igual que hace la inversa.",
    },
    "det-product": {
      name: "Determinante de un producto",
      note: "El determinante es multiplicativo, así que un único factor singular fuerza un producto singular.",
    },
    "invertible-iff-det": {
      name: "Invertible si y solo si el determinante es no nulo",
      note: "Un determinante cero significa que el espacio se aplanó, y una aplicación aplanada no se puede deshacer.",
    },
    "det-transpose": {
      name: "Determinante de una traspuesta",
      note: "Trasponer una matriz deja su determinante sin cambios, así que filas y columnas escalan el volumen por el mismo factor.",
    },
    "det-volume": {
      name: "El determinante como factor de volumen",
      note: "El determinante en valor absoluto es el factor por el que la aplicación escala toda área o volumen.",
    },
    "characteristic-equation": {
      name: "Ecuación característica",
      note: "Los valores propios son exactamente los números que hacen singular a A menos lambda I, es decir, las raíces de su determinante.",
    },
    "spectral-theorem": {
      name: "Teorema espectral (matrices simétricas reales)",
      note: "Toda matriz simétrica real tiene una base ortonormal de vectores propios, así que se diagonaliza mediante un cambio de base ortogonal.",
    },
    "cauchy-schwarz": {
      name: "Desigualdad de Cauchy-Schwarz",
      note: "El producto interno de dos vectores nunca supera el producto de sus longitudes, con igualdad solo cuando son paralelos.",
    },
    "pythagorean": {
      name: "Teorema de Pitágoras",
      note: "Para vectores ortogonales las longitudes al cuadrado simplemente se suman, exactamente como en los lados de un triángulo rectángulo.",
    },
    "orthonormal-independent": {
      name: "Las listas ortonormales son independientes",
      note: "Los vectores unitarios mutuamente perpendiculares son automáticamente independientes, así que toda lista ortonormal generadora es una base.",
    },
  };
})();
