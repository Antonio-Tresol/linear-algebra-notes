/* ============================================================================
   Notes renderer — loads a Markdown note by ?doc=<slug>, renders it with
   marked + KaTeX (via LA.renderMarkdown), rewrites [[wiki-links]] into glossary
   links with inline hover-cards, and falls back across locales:
       content/notes/<slug>.<locale>.md  →  content/notes/<slug>.md
   Notes are fetched at runtime, so this page needs http(s) (Pages or a local
   server), not file://.
   ============================================================================ */
(function () {
  "use strict";
  var indexEl, docEl, card;

  /* --- [[wiki-link]] → anchor (pre-markdown, as raw HTML marked passes through) */
  function preWiki(md) {
    return md.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, function (_, id, label) {
      id = id.trim();
      var text = (label || id).trim();
      return '<a class="wikilink" data-term="' + id + '" href="glossary.html#' + id + '">' + text + "</a>";
    });
  }

  function shortFor(id) {
    var O = window.LA_GLOSSARY_TEXT || {};
    var e = (O[LA.locale] && O[LA.locale][id]) || (O.en && O.en[id]);
    return e || null;
  }

  /* --- hover cards -------------------------------------------------------- */
  function ensureCard() {
    if (card) return card;
    card = document.createElement("div");
    card.className = "wiki-card";
    card.style.display = "none";
    document.body.appendChild(card);
    return card;
  }

  function showCard(link) {
    var id = link.dataset.term;
    var e = shortFor(id);
    var c = ensureCard();
    if (!e) { c.style.display = "none"; return; }
    c.innerHTML = '<p class="wiki-card__term">' + (e.term || id) + "</p>" +
      '<p class="wiki-card__short">' + (e.short || "") + "</p>" +
      '<p class="wiki-card__more">' + LA.t("glossary.seeAlso").toLowerCase() +
      ' → glossary.html#' + id + "</p>";
    c.style.display = "block";
    var r = link.getBoundingClientRect();
    var top = window.scrollY + r.bottom + 8;
    var left = window.scrollX + r.left;
    left = Math.min(left, window.scrollX + document.documentElement.clientWidth - c.offsetWidth - 16);
    c.style.top = top + "px";
    c.style.left = Math.max(8, left) + "px";
    if (window.renderMathInElement) {
      window.renderMathInElement(c, { delimiters: [{ left: "$", right: "$", display: false }], throwOnError: false });
    }
  }
  function hideCard() { if (card) card.style.display = "none"; }

  function wireHovers() {
    docEl.querySelectorAll(".wikilink").forEach(function (a) {
      a.addEventListener("mouseenter", function () { showCard(a); });
      a.addEventListener("mouseleave", hideCard);
      a.addEventListener("focus", function () { showCard(a); });
      a.addEventListener("blur", hideCard);
    });
  }

  /* --- note loading ------------------------------------------------------- */
  function fetchFirst(urls) {
    // try urls in order, resolve with first that returns ok text
    function attempt(i) {
      if (i >= urls.length) return Promise.reject(new Error("not found"));
      return fetch(urls[i]).then(function (r) {
        if (r.ok) return r.text();
        return attempt(i + 1);
      }).catch(function () { return attempt(i + 1); });
    }
    return attempt(0);
  }

  function noteMeta(slug) {
    return (window.LA_NOTES || []).filter(function (n) { return n.slug === slug; })[0];
  }
  function localized(map) {
    if (!map) return "";
    return map[LA.locale] || map.en || "";
  }

  function renderIndex() {
    var notes = window.LA_NOTES || [];
    indexEl.innerHTML = '<p class="label">' + LA.t("notes.index") + "</p>" +
      notes.map(function (n) {
        return '<a class="hub-card" style="margin-bottom:10px" href="notes.html?doc=' + n.slug + '">' +
          '<div class="hub-card__body"><div class="hub-card__title">' + localized(n.title) + "</div>" +
          '<p class="hub-card__desc">' + localized(n.blurb) + "</p></div></a>";
      }).join("");
  }

  function loadDoc(slug) {
    docEl.innerHTML = '<p class="gloss-count">' + LA.t("notes.loading") + "</p>";
    var base = "content/notes/" + slug;
    fetchFirst([base + "." + LA.locale + ".md", base + ".md"]).then(function (md) {
      LA.renderMarkdown(docEl, preWiki(md));
      wireHovers();
    }).catch(function () {
      docEl.innerHTML = '<p class="gloss-count">' + LA.t("notes.missing") +
        ' <span style="display:block;margin-top:8px">' + LA.t("notes.serveHint") + "</span></p>";
    });
  }

  function currentSlug() {
    return new URLSearchParams(location.search).get("doc");
  }

  function init() {
    indexEl = document.getElementById("notes-index");
    docEl = document.getElementById("notes-doc");
    if (!docEl) return;

    var slug = currentSlug();
    renderIndex();
    if (slug) loadDoc(slug);
    else docEl.innerHTML = "";

    LA.onLangChange(function () {
      document.getElementById("notes-title").textContent = LA.t("notes.title");
      document.getElementById("notes-intro").textContent = LA.t("notes.intro");
      renderIndex();
      var s = currentSlug();
      if (s) loadDoc(s);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
