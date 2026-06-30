/* UI chrome strings — English (the fallback locale).
   Loaded as a plain global so the site works on file:// with no fetch/CORS.
   To add a language, copy this file to strings.<code>.js and translate the
   right-hand sides, then register the locale in assets/shared.js (LOCALES). */
(function () {
  var S = (window.LA_STRINGS = window.LA_STRINGS || {});
  S.en = {
    "site.brand": "Linear algebra, visually",
    "site.footer": "Visual notes for linear algebra — built with plain HTML, Canvas2D and KaTeX.",

    "nav.home": "Home",
    "nav.2d": "2D",
    "nav.3d": "3D",
    "nav.glossary": "Glossary",
    "nav.notation": "Notation",
    "nav.notes": "Notes",
    "nav.theme": "Toggle light or dark theme",
    "nav.language": "Language",

    "glossary.title": "Glossary",
    "glossary.intro": "Cross-linked definitions. Every term cites where it is developed in two standard texts, plus a video when one explains it well. Search, or filter by tag.",
    "glossary.search": "Search terms, symbols, definitions…",
    "glossary.allTags": "All",
    "glossary.formal": "Formal",
    "glossary.seeAlso": "See also",
    "glossary.sources": "Sources",
    "glossary.count": "{n} of {total} terms",
    "glossary.none": "No terms match.",
    "glossary.copyLink": "Copy link to this term",

    "notation.title": "Notation & conventions",
    "notation.intro": "Every symbol used across these notes, what to read it as, and the conventions this site commits to.",
    "notation.colSymbol": "Symbol",
    "notation.colName": "Name",
    "notation.colMeaning": "Meaning",
    "notation.colRead": "Read as",

    "notes.title": "Notes",
    "notes.intro": "Longer-form notes. Hover any underlined term for its definition.",
    "notes.loading": "Loading…",
    "notes.missing": "Note not found.",
    "notes.index": "All notes",
    "notes.serveHint": "Notes are fetched at runtime, so this page needs to be served over http(s) (GitHub Pages or a local server), not opened as a file://.",

    "cite.free": "free",
    "cite.openAccess": "open access — free PDF",
    "cite.paid": "paid",
    "cite.video": "video",

    "home.eyebrow": "Visual notes",
    "home.title": "Linear algebra you can see",
    "home.lede": "Durable, visual notes for linear algebra — the thing to reach for when you've forgotten what a determinant <em>means</em>, not just how to compute one. Definitions and notation are the spine; the interactive visualisations hang off them. Every definition cites two standard texts and, where one explains it best, a video.",
    "home.2d.kicker": "Interactive",
    "home.2d.title": "2D transformations",
    "home.2d.desc": "Type a 2×2 matrix and watch the grid bend. The shaded unit square's area is the determinant.",
    "home.3d.kicker": "Interactive",
    "home.3d.title": "3D transformations",
    "home.3d.desc": "Orbit a 3×3 transformation. The unit cube's signed volume is the determinant.",
    "home.glossary.kicker": "Reference",
    "home.glossary.title": "Glossary",
    "home.glossary.desc": "Cross-linked, fully-cited definitions. Search or filter by tag; follow 'see also' chips between ideas.",
    "home.notation.kicker": "Reference",
    "home.notation.title": "Notation",
    "home.notation.desc": "Every symbol used here, what to read it as, and the conventions this site commits to.",
    "home.notes.kicker": "Notes",
    "home.notes.title": "Notes",
    "home.notes.desc": "Longer-form notes with hover-card definitions on any underlined term.",
  };
})();
