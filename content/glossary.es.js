/* Glossary text — Español overlay (partial, on purpose).
   Terms not translated here fall back to English automatically, so a language
   can ship incrementally. This file proves the overlay plumbing end to end. */
(function () {
  var T = (window.LA_GLOSSARY_TEXT = window.LA_GLOSSARY_TEXT || {});
  T.es = {
    "linear-map": {
      term: "Aplicación lineal",
      short: "Una función entre espacios vectoriales que respeta la suma y el escalado: las rectas siguen rectas, el origen no se mueve y la malla queda uniforme.",
      formal: "Una función $T:V\\to W$ es **lineal** si $T(u+v)=Tu+Tv$ y $T(\\lambda v)=\\lambda\\,Tv$ para todo $u,v\\in V$ y todo escalar $\\lambda$. Conociendo a dónde van los vectores de la base, conoces toda la aplicación.",
    },
    "determinant": {
      term: "Determinante",
      short: "El factor con signo por el que una aplicación lineal escala el área (2D) o el volumen (3D). Cero significa que el espacio se aplanó; negativo, que la orientación se invirtió.",
      formal: "Para $A\\in\\mathbb{F}^{n\\times n}$, $\\det(A)$ es la única función multilineal alternada de las columnas con $\\det(I)=1$. En $2\\times2$: $\\det\\begin{psmallmatrix}a&b\\\\c&d\\end{psmallmatrix}=ad-bc$. Entonces $A$ es invertible $\\iff \\det(A)\\neq 0$.",
    },
    "invertible": {
      term: "Matriz invertible",
      short: "Una aplicación que se puede deshacer. Existe una $A^{-1}$ que la revierte exactamente. Equivale a: determinante no nulo, columnas independientes, nada colapsado.",
      formal: "$A\\in\\mathbb{F}^{n\\times n}$ es **invertible** si existe $A^{-1}$ con $A^{-1}A=AA^{-1}=I$. Esto ocurre $\\iff\\det(A)\\neq0\\iff$ las columnas son linealmente independientes $\\iff Ax=0$ solo en $x=0$.",
    },
  };
})();
