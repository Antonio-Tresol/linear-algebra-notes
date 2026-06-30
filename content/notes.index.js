/* Notes index — list of available notes. Add a note: drop content/notes/<slug>.md
   (and optionally <slug>.<locale>.md) and add one entry here. Titles are
   per-locale; any missing locale falls back to English. */
(function () {
  window.LA_NOTES = [
    {
      slug: "matrix-algebra",
      title: { en: "Matrix algebra cheatsheet", es: "Resumen de álgebra matricial" },
      blurb: {
        en: "The rules that break when you move from numbers to matrices.",
        es: "Las reglas que se rompen al pasar de números a matrices.",
      },
    },
  ];
})();
