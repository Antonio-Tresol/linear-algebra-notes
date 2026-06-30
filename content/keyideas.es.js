/* Key ideas to remember - Español overlay. Keyed by page id ("2d", "3d", "matmul").
   Each entry: { title (3-6 words), body (1-2 sentences, plain language, light KaTeX). } */
(function () {
  var K = (window.LA_KEYIDEAS = window.LA_KEYIDEAS || {});
  K.es = {
    "2d": [
      {
        title: "Una matriz es una transformación",
        body: "Una matriz $2\\times2$ no es una cuadrícula estática de números; es una receta para mover todo el plano. Léela por sus columnas y verás exactamente a dónde van a parar los vectores de la base $\\hat{\\imath}$ y $\\hat{\\jmath}$, y en cuanto sabes eso, queda fijado el destino de cualquier otro vector."
      },
      {
        title: "Las columnas son donde aterriza la base",
        body: "La primera columna es la imagen de $\\hat{\\imath}$, la segunda es la imagen de $\\hat{\\jmath}$. Cualquier vector no es más que una combinación de esos dos, así que la transformación lo lleva a la misma combinación de los nuevos vectores columna."
      },
      {
        title: "El determinante es un factor de área",
        body: "Toma el cuadrado unidad generado por $\\hat{\\imath}$ y $\\hat{\\jmath}$; la transformación lo convierte en un paralelogramo, y el determinante es exactamente cuántas veces más grande (o más pequeño) es ese paralelogramo. Toda región del plano se escala por este mismo factor."
      },
      {
        title: "El signo invierte, el cero colapsa",
        body: "Un determinante negativo significa que el plano se ha dado la vuelta, como poner una hoja de papel boca abajo, así que la orientación se invierte. Un determinante cero significa que el cuadrado se ha aplastado sobre una recta: la aplicación es singular, no se puede deshacer y se pierde información."
      }
    ],
    "3d": [
      {
        title: "Una matriz mueve todo el espacio",
        body: "Una matriz $3\\times3$ es una forma de mover el espacio tridimensional, y sus tres columnas te dicen a dónde van a parar $\\hat{\\imath}$, $\\hat{\\jmath}$ y $\\hat{k}$. Fija esas tres imágenes y habrás fijado toda la transformación."
      },
      {
        title: "El determinante es un factor de volumen",
        body: "El cubo unidad se convierte en una caja inclinada (un paralelepípedo) bajo la transformación, y el determinante es el factor por el que cambia su volumen. Sea cual sea la forma de partida, su volumen se multiplica por este único número."
      },
      {
        title: "Volumen cero significa colapso",
        body: "Cuando el determinante es cero, el cubo se ha aplastado en un plano o incluso en una recta, así que no le queda volumen. Las columnas ya no apuntan en tres direcciones independientes, la aplicación es singular y no se puede revertir."
      },
      {
        title: "El negativo invierte la quiralidad",
        body: "Un determinante negativo significa que un conjunto de ejes dextrógiro se ha vuelto levógiro, como si el espacio se viera en un espejo. El volumen se escala por el tamaño del número; el signo menos registra la inversión de la orientación."
      }
    ],
    "matmul": [
      {
        title: "Multiplicar matrices compone aplicaciones",
        body: "Multiplicar dos matrices es lo mismo que hacer una transformación tras otra. El producto $AB$ es una única matriz que realiza el movimiento combinado en un solo paso."
      },
      {
        title: "El orden importa: haz B, luego A",
        body: "En $AB$ la matriz de la derecha actúa primero, así que $AB$ significa \"aplica $B$, luego aplica $A$\". Intercambiarlas suele llevar los vectores a otro sitio, por lo que $AB \\neq BA$ en general."
      },
      {
        title: "Los determinantes se multiplican",
        body: "Como las áreas y los volúmenes se escalan paso a paso, $\\det(AB) = \\det(A)\\,\\det(B)$. El estiramiento total de una composición no es más que el producto de los estiramientos individuales."
      },
      {
        title: "Un colapso lo colapsa todo",
        body: "Si cualquiera de las dos matrices tiene determinante cero, entonces $\\det(AB)$ también es cero, así que toda la composición es singular. Un solo paso que aplaste el espacio nunca puede deshacerse con los pasos que lo rodean."
      }
    ]
  };
})();
