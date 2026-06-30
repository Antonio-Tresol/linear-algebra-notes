/* UI chrome strings — Español. A complete overlay (proves the i18n plumbing).
   Any missing key falls back to English automatically (see LA.t in shared.js). */
(function () {
  var S = (window.LA_STRINGS = window.LA_STRINGS || {});
  S.es = {
    "site.brand": "Álgebra lineal, visual",
    "site.footer": "Notas visuales de álgebra lineal, hechas con HTML, Canvas2D y KaTeX.",

    "nav.home": "Inicio",
    "nav.2d": "2D",
    "nav.3d": "3D",
    "nav.glossary": "Glosario",
    "nav.notation": "Notación",
    "nav.notes": "Notas",
    "nav.theme": "Cambiar tema claro u oscuro",
    "nav.language": "Idioma",

    "glossary.title": "Glosario",
    "glossary.intro": "Definiciones enlazadas. Cada término cita dónde se desarrolla en dos textos de referencia, y un vídeo cuando lo explica bien. Busca o filtra por etiqueta.",
    "glossary.search": "Buscar términos, símbolos, definiciones…",
    "glossary.allTags": "Todas",
    "glossary.formal": "Formal",
    "glossary.seeAlso": "Véase también",
    "glossary.sources": "Fuentes",
    "glossary.count": "{n} de {total} términos",
    "glossary.none": "Ningún término coincide.",
    "glossary.copyLink": "Copiar enlace a este término",

    "notation.title": "Notación y convenciones",
    "notation.intro": "Cada símbolo usado en estas notas, cómo leerlo y las convenciones que adopta este sitio.",
    "notation.colSymbol": "Símbolo",
    "notation.colName": "Nombre",
    "notation.colMeaning": "Significado",
    "notation.colRead": "Se lee",

    "notes.title": "Notas",
    "notes.intro": "Notas más extensas. Pasa el cursor sobre un término subrayado para ver su definición.",
    "notes.loading": "Cargando…",
    "notes.missing": "Nota no encontrada.",
    "notes.index": "Todas las notas",
    "notes.serveHint": "Las notas se cargan en tiempo de ejecución, así que esta página debe servirse por http(s) (GitHub Pages o un servidor local), no abrirse como file://.",

    "cite.free": "gratis",
    "cite.openAccess": "acceso abierto, PDF gratuito",
    "cite.paid": "de pago",
    "cite.video": "vídeo",

    "home.eyebrow": "Notas visuales",
    "home.title": "Álgebra lineal que puedes ver",
    "home.lede": "Notas visuales y duraderas de álgebra lineal: lo que buscas cuando olvidaste qué <em>significa</em> un determinante, no solo cómo calcularlo. Las definiciones y la notación son la columna; las visualizaciones interactivas cuelgan de ellas. Cada definición cita dos textos de referencia y, cuando lo explica mejor, un vídeo.",
    "home.2d.kicker": "Interactivo",
    "home.2d.title": "Transformaciones 2D",
    "home.2d.desc": "Escribe una matriz 2×2 y mira cómo se dobla la malla. El área del cuadrado unidad sombreado es el determinante.",
    "home.3d.kicker": "Interactivo",
    "home.3d.title": "Transformaciones 3D",
    "home.3d.desc": "Orbita una transformación 3×3. El volumen con signo del cubo unidad es el determinante.",
    "home.glossary.kicker": "Referencia",
    "home.glossary.title": "Glosario",
    "home.glossary.desc": "Definiciones enlazadas y citadas. Busca o filtra por etiqueta; sigue las fichas de 'véase también' entre ideas.",
    "home.notation.kicker": "Referencia",
    "home.notation.title": "Notación",
    "home.notation.desc": "Cada símbolo usado aquí, cómo leerlo y las convenciones que adopta este sitio.",
    "home.notes.kicker": "Notas",
    "home.notes.title": "Notas",
    "home.notes.desc": "Notas extensas con definiciones emergentes en cualquier término subrayado.",
  };
})();
