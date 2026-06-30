/* ============================================================================
   Linear Algebra, visually — shared runtime
   ----------------------------------------------------------------------------
   Zero-dependency. Exposes a small `window.LA` namespace used by every page:

     LA.cssVar(name)         read a CSS custom property off :root
     LA.canvasColors()       the themed canvas palette as a plain object
     LA.fmt(n)               tidy number → 2dp string ("-0" collapsed to "0")
     LA.easeInOut(t)         smoothstep easing for the matrix tweens
     LA.fitCanvas(cv, ctx)   size a canvas for the device pixel ratio
     LA.onThemeChange(fn)    run fn() whenever the light/dark theme flips
     LA.reduceMotion         honours prefers-reduced-motion
     LA.renderMarkdown(...)   cheatsheet: markdown + KaTeX (needs the CDN libs)

   The theme block at the very top runs synchronously in <head> so the correct
   theme is set before first paint — no flash of the wrong colours.
   ========================================================================== */
(function () {
  "use strict";

  var STORAGE_KEY = "la-theme";
  var LANG_KEY = "la-lang";
  var root = document.documentElement;

  /* --- Languages -----------------------------------------------------------
     To add a language: (1) add an entry here, (2) drop the matching overlay
     files (content/strings.<code>.js, glossary.<code>.js, notation.<code>.js,
     content/notes/<name>.<code>.md). No other code changes. */
  var LOCALES = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
  ];

  /* --- Theme: resolve & apply before paint -------------------------------- */
  function preferredTheme() {
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) { /* private mode */ }
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
  }

  // Run immediately (we are in <head>) to avoid a flash.
  applyTheme(preferredTheme());

  function setTheme(theme) {
    applyTheme(theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* ignore */ }
    // Let canvases re-read their palette and repaint.
    window.dispatchEvent(new CustomEvent("la:themechange", { detail: { theme: theme } }));
  }

  function toggleTheme() {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  }

  /* --- Locale: resolve & apply before paint ------------------------------- */
  function knownLocale(code) {
    for (var i = 0; i < LOCALES.length; i++) if (LOCALES[i].code === code) return true;
    return false;
  }

  function preferredLocale() {
    var stored = null;
    try { stored = localStorage.getItem(LANG_KEY); } catch (e) { /* private mode */ }
    if (stored && knownLocale(stored)) return stored;
    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return knownLocale(nav) ? nav : "en";
  }

  var currentLocale = preferredLocale();
  root.lang = currentLocale; // set <html lang> before paint

  // Look up a UI string for the active locale, falling back to English then key.
  // Strings live in window.LA_STRINGS[code] (loaded via content/strings.<code>.js).
  function t(key) {
    var S = window.LA_STRINGS || {};
    var v = (S[currentLocale] && S[currentLocale][key]);
    if (v == null) v = (S.en && S.en[key]);
    return v == null ? key : v;
  }

  // Pick the best available text field from a per-locale overlay object shaped
  // { en: {...}, es: {...} }, keyed by id. Falls back to English, then {}.
  function pickLocale(overlay, id) {
    if (!overlay) return {};
    var o = (overlay[currentLocale] && overlay[currentLocale][id]);
    if (o == null) o = (overlay.en && overlay.en[id]);
    return o || {};
  }

  function setLocale(code) {
    if (!knownLocale(code)) return;
    currentLocale = code;
    root.lang = code;
    try { localStorage.setItem(LANG_KEY, code); } catch (e) { /* ignore */ }
    window.dispatchEvent(new CustomEvent("la:langchange", { detail: { locale: code } }));
  }

  function onLangChange(fn) { window.addEventListener("la:langchange", fn); }

  /* --- Small utilities ---------------------------------------------------- */
  function cssVar(name) {
    return getComputedStyle(root).getPropertyValue(name).trim();
  }

  function canvasColors() {
    return {
      bg: cssVar("--canvas-bg"),
      gridOrig: cssVar("--grid-orig"),
      gridMoved: cssVar("--grid-moved"),
      axis: cssVar("--axis"),
      iHat: cssVar("--vec-i"),
      jHat: cssVar("--vec-j"),
      kHat: cssVar("--vec-k"),
      flip: cssVar("--vec-flip"),
      muted: cssVar("--muted"),
      mono: cssVar("--font-mono"),
    };
  }

  function fmt(n) {
    if (Math.abs(n) < 1e-9) n = 0;
    return (Math.round(n * 100) / 100).toFixed(2);
  }

  function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  // Size a canvas backing store to the CSS box × devicePixelRatio so lines stay
  // crisp on retina screens. Returns the CSS pixel dimensions for drawing math.
  function fitCanvas(canvas, ctx) {
    var rect = canvas.parentElement.getBoundingClientRect();
    var dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { W: rect.width, H: rect.height, dpr: dpr };
  }

  function onThemeChange(fn) {
    window.addEventListener("la:themechange", fn);
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- Chrome: nav + footer (injected so there is one source of truth) ---- */
  // `label` is a strings-table KEY, resolved through t() so the nav localises.
  var PAGES = [
    { id: "home", href: "index.html", label: "nav.home" },
    { id: "2d", href: "2d.html", label: "nav.2d" },
    { id: "3d", href: "3d.html", label: "nav.3d" },
    { id: "glossary", href: "glossary.html", label: "nav.glossary" },
    { id: "notation", href: "notation.html", label: "nav.notation" },
    { id: "notes", href: "notes.html", label: "nav.notes" },
  ];

  var SUN = '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var MOON = '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

  function langSelect() {
    if (LOCALES.length < 2) return "";
    var opts = LOCALES.map(function (l) {
      var sel = l.code === currentLocale ? " selected" : "";
      return '<option value="' + l.code + '"' + sel + ">" + l.label + "</option>";
    }).join("");
    return '<select class="lang-select" aria-label="' + t("nav.language") + '">' + opts + "</select>";
  }

  function buildNav() {
    var header = document.querySelector("header[data-nav]");
    if (!header) return;
    var current = document.body.dataset.page || "";

    var links = PAGES.map(function (p) {
      var cur = p.id === current ? ' aria-current="page"' : "";
      return '<a href="' + p.href + '"' + cur + ">" + t(p.label) + "</a>";
    }).join("");

    header.className = "site-header";
    header.innerHTML =
      '<div class="site-header__inner">' +
        '<a class="site-header__brand" href="index.html">' + t("site.brand") + "</a>" +
        '<nav class="site-nav" aria-label="Primary">' + links + "</nav>" +
        langSelect() +
        '<button class="theme-toggle" type="button" aria-label="' + t("nav.theme") + '" title="' + t("nav.theme") + '">' +
          SUN + MOON +
        "</button>" +
      "</div>";

    header.querySelector(".theme-toggle").addEventListener("click", toggleTheme);
    var sel = header.querySelector(".lang-select");
    if (sel) sel.addEventListener("change", function () { setLocale(sel.value); });
  }

  function buildFooter() {
    var footer = document.querySelector("footer[data-footer]");
    if (!footer) return;
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="site-footer__inner">' +
        "<span>" + t("site.footer") + "</span>" +
        '<span><a href="https://github.com/Antonio-Tresol" rel="noopener">@Antonio-Tresol</a></span>' +
      "</div>";
  }

  /* --- Cheatsheet: markdown + KaTeX (libs loaded by the page) -------------- */
  // marked treats `_` as emphasis, which would corrupt LaTeX like A_{ij}. So we
  // lift every $…$ / $$…$$ span out before marked runs, then drop the raw TeX
  // back in and let KaTeX auto-render find the delimiters.
  function renderMarkdown(targetEl, markdown) {
    var store = [];
    var protectedSrc = markdown
      .replace(/\$\$([\s\S]+?)\$\$/g, function (m) { store.push(m); return "@@LATEX" + (store.length - 1) + "@@"; })
      .replace(/\$([^$\n]+?)\$/g, function (m) { store.push(m); return "@@LATEX" + (store.length - 1) + "@@"; });

    var html = window.marked.parse(protectedSrc);
    html = html.replace(/@@LATEX(\d+)@@/g, function (_, i) { return store[+i]; });
    targetEl.innerHTML = html;

    if (window.renderMathInElement) {
      window.renderMathInElement(targetEl, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
        ],
        throwOnError: false,
      });
    }
  }

  /* --- Wire up chrome once the DOM exists ---------------------------------- */
  function init() { buildNav(); buildFooter(); }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  // Re-localise the injected chrome whenever the language flips.
  onLangChange(function () { buildNav(); buildFooter(); });

  window.LA = {
    cssVar: cssVar,
    canvasColors: canvasColors,
    fmt: fmt,
    easeInOut: easeInOut,
    clamp: clamp,
    fitCanvas: fitCanvas,
    onThemeChange: onThemeChange,
    setTheme: setTheme,
    toggleTheme: toggleTheme,
    reduceMotion: reduceMotion,
    renderMarkdown: renderMarkdown,
    // i18n
    t: t,
    pickLocale: pickLocale,
    setLocale: setLocale,
    onLangChange: onLangChange,
    locales: LOCALES,
    get locale() { return currentLocale; },
  };
})();
