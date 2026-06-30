/* Ideas clave - Español overlay. Mismas claves de página que keyideas.en.js.
   Marcos basados en "La esencia del álgebra lineal" de 3Blue1Brown; cite enlaza
   el episodio. Sin rayas (—) ni construcción de negación-corrección. */
(function () {
  var K = (window.LA_KEYIDEAS = window.LA_KEYIDEAS || {});
  K.es = {
    "2d": [
      {
        title: "Una matriz es una transformación",
        body: "Imagina una matriz $2\\times2$ como una receta para mover todo el plano. La prueba visual de 3Blue1Brown para un movimiento lineal: las líneas de la malla siguen rectas y equiespaciadas, y el origen no se mueve. Lee la matriz por columnas para ver a dónde van $\\hat{\\imath}$ y $\\hat{\\jmath}$, y de ahí se sigue el camino de cualquier otro vector.",
        cite: "3b1b-linear-transformations",
      },
      {
        title: "Las columnas son a dónde va la base",
        body: "La primera columna es a dónde va $\\hat{\\imath}$, la segunda a dónde va $\\hat{\\jmath}$. Como todo vector es una combinación de $\\hat{\\imath}$ y $\\hat{\\jmath}$, el vector transformado $(x,y)$ pasa a ser $x$ por la primera columna más $y$ por la segunda. Esa única idea es todo lo que hace una matriz sobre un vector.",
        cite: "3b1b-linear-transformations",
      },
      {
        title: "El determinante es un factor de área",
        body: "Pasa el cuadrado unidad por la transformación y se convierte en un paralelogramo. Como lo expresa 3Blue1Brown, el determinante mide cuánto crece o se encoge el área, y ese mismo factor escala todas las regiones del plano.",
        cite: "3b1b-determinant",
      },
      {
        title: "El signo invierte, el cero colapsa",
        body: "Un determinante negativo voltea el plano, como dar la vuelta a una hoja de papel, así que la orientación se invierte. Un determinante de cero aplasta el cuadrado sobre una recta, lo que hace la matriz singular: el movimiento no se puede deshacer y se pierde información.",
        cite: "3b1b-determinant",
      },
    ],
    "3d": [
      {
        title: "Una matriz mueve todo el espacio",
        body: "Una matriz $3\\times3$ mueve el espacio tridimensional, y sus tres columnas te dicen a dónde van $\\hat{\\imath}$, $\\hat{\\jmath}$ y $\\hat{k}$. La regla de 3Blue1Brown se traslada desde el plano: fija esas tres imágenes y toda la transformación queda fijada.",
        cite: "3b1b-3d-transformations",
      },
      {
        title: "El determinante es un factor de volumen",
        body: "El cubo unidad se convierte en una caja inclinada, un paralelepípedo, y el determinante es el factor por el que cambia su volumen. Toda figura del espacio se escala por ese único número, igual que las áreas en el plano.",
        cite: "3b1b-determinant",
      },
      {
        title: "Volumen cero significa colapso",
        body: "Cuando el determinante es cero, el cubo se aplana en un plano o en una recta, sin volumen. Las tres columnas dejan de apuntar en direcciones independientes, la matriz es singular y el movimiento no se puede revertir.",
        cite: "3b1b-determinant",
      },
      {
        title: "El negativo invierte la quiralidad",
        body: "Un determinante negativo convierte un sistema de ejes dextrógiro en uno levógiro, como si el espacio se viera en un espejo. El tamaño del número da el escalado de volumen, y el signo menos registra la inversión de la orientación.",
        cite: "3b1b-determinant",
      },
    ],
    "matmul": [
      {
        title: "Multiplicar matrices compone aplicaciones",
        body: "Multiplicar dos matrices hace una transformación tras otra. 3Blue1Brown plantea el producto $AB$ como una sola matriz que captura el movimiento combinado, aplicando $B$ primero y luego $A$.",
        cite: "3b1b-matrix-multiplication",
      },
      {
        title: "El orden importa: haz B, luego A",
        body: "En $AB$ la matriz de la derecha actúa primero, así que $AB$ se lee como aplica $B$, luego $A$. Siguiendo la geometría, cambiar el orden suele enviar los vectores a otro sitio, por eso $AB \\neq BA$ en general.",
        cite: "3b1b-matrix-multiplication",
      },
      {
        title: "Los determinantes se multiplican",
        body: "Las áreas y los volúmenes se escalan paso a paso, así que $\\det(AB) = \\det(A)\\,\\det(B)$. El estiramiento total de una composición es el producto de los estiramientos individuales.",
        cite: "3b1b-determinant",
      },
      {
        title: "Un colapso lo colapsa todo",
        body: "Si cualquiera de las matrices tiene determinante cero, entonces $\\det(AB)$ también es cero, así que toda la composición es singular. Un solo paso que aplana el espacio no se puede rescatar con los pasos de alrededor.",
        cite: "3b1b-determinant",
      },
    ],
  };
})();
