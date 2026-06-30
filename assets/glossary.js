/* ============================================================================
   Glossary renderer — reads LA_GLOSSARY (spine) + LA_GLOSSARY_TEXT (locale
   overlay) + LA_SOURCES (citations) and paints searchable, tag-filtered,
   cross-linked, fully-cited term cards. Re-renders on language change.
   Depends on: shared.js (LA.*), marked, KaTeX auto-render — all loaded by the
   page before this file.
   ============================================================================ */
(function () {
  "use strict";

  var grid, countEl, searchEl, tagWrap;
  var state = { q: "", tag: null };

  /* --- inline markdown that won't eat LaTeX underscores ------------------- */
  function mdInline(src) {
    if (src == null) return "";
    var store = [];
    var safe = String(src)
      .replace(/\$\$([\s\S]+?)\$\$/g, function (m) { store.push(m); return "@@TEX" + (store.length - 1) + "@@"; })
      .replace(/\$([^$\n]+?)\$/g, function (m) { store.push(m); return "@@TEX" + (store.length - 1) + "@@"; });
    var html = window.marked ? window.marked.parseInline(safe) : safe;
    return html.replace(/@@TEX(\d+)@@/g, function (_, i) { return store[+i]; });
  }

  function typeset(el) {
    if (window.renderMathInElement) {
      window.renderMathInElement(el, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
        ],
        throwOnError: false,
      });
    }
  }

  /* --- citations ---------------------------------------------------------- */
  function accessLabel(access) {
    if (access === "open") return LA.t("cite.openAccess");
    if (access === "paid") return LA.t("cite.paid");
    if (access === "free") return LA.t("cite.free");
    return access || "";
  }

  function renderCite(cite) {
    var s = (window.LA_SOURCES || {})[cite.src];
    if (!s) return "";
    var isVideo = s.kind === "video";
    var badgeCls = isVideo ? "cite__badge--video" : "cite__badge--book";
    var parts = [];
    parts.push('<span class="cite__badge ' + badgeCls + '">' + esc(s.short) + "</span>");

    var body = [];
    if (isVideo) {
      body.push("<i>" + esc(s.title) + "</i>");
    } else {
      var where = [];
      if (cite.sec) where.push('<span class="cite__where">' + esc(cite.sec) + "</span>");
      if (cite.page != null) where.push('<span class="cite__page">p. ' + cite.page + "</span>");
      var loc = where.join(" ");
      var title = "<i>" + esc(s.title) + "</i>" + (s.edition ? ", " + esc(s.edition) : "");
      body.push((loc ? loc + ", " : "") + title);
    }
    var links = ['<a class="cite__link" href="' + s.url + '" target="_blank" rel="noopener">' + esc(s.urlLabel) + " ↗</a>"];
    if (s.alsoUrl) links.push('<a class="cite__link" href="' + s.alsoUrl + '" target="_blank" rel="noopener">' + esc(s.alsoLabel) + " ↗</a>");
    body.push("· " + links.join(" · "));
    body.push('<span class="cite__access">(' + esc(accessLabel(s.access)) + ")</span>");

    parts.push('<span class="cite__body">' + body.join(" ") + "</span>");
    return '<div class="cite">' + parts.join("") + "</div>";
  }

  function renderCites(cites) {
    if (!cites || !cites.length) return "";
    return '<div class="cites"><p class="cites__label">' + LA.t("glossary.sources") + "</p>" +
      cites.map(renderCite).join("") + "</div>";
  }

  /* --- theorem snapshots: the literal statements anchored to this term ----- */
  function renderTheorems(termId) {
    var all = window.LA_THEOREMS || [];
    var hits = all.filter(function (th) { return (th.relatedTerms || []).indexOf(termId) >= 0; });
    if (!hits.length) return "";
    var rows = hits.map(function (th) {
      var t = LA.pickLocale(window.LA_THEOREMS_TEXT, th.id);
      var h = '<div class="theorem">';
      if (t.name) h += '<p class="theorem__name">' + esc(t.name) + "</p>";
      h += '<div class="theorem__statement">$$' + th.statement + "$$</div>";
      if (t.note) h += '<p class="term__short" style="font-size:13px;margin:6px 0 0">' + mdInline(t.note) + "</p>";
      if (th.cites && th.cites.length) {
        h += '<p class="theorem__cite">' + th.cites.map(function (c) {
          var s = (window.LA_SOURCES || {})[c.src] || {};
          var loc = (c.sec ? '<span class="cite__where">' + esc(c.sec) + "</span>" : "") +
            (c.page != null ? " p. " + c.page : "");
          return (s.short ? esc(s.short) + " " : "") + loc;
        }).join(" · ") + "</p>";
      }
      return h + "</div>";
    }).join("");
    return '<div class="theorems"><p class="theorems__label">' + LA.t("glossary.theorems") + "</p>" + rows + "</div>";
  }

  /* --- a term card -------------------------------------------------------- */
  function textOf(id) { return LA.pickLocale(window.LA_GLOSSARY_TEXT, id); }

  function renderTerm(entry) {
    var tx = textOf(entry.id);
    var html = '<article class="term" id="' + entry.id + '">';
    html += '<div class="term__head">';
    html += '<h2 class="term__name">' + esc(tx.term || entry.id) + "</h2>";
    if (entry.symbol) html += '<span class="term__symbol">$' + entry.symbol + "$</span>";
    html += '<a class="term__anchor" href="#' + entry.id + '" title="' + LA.t("glossary.copyLink") + '">#</a>';
    html += "</div>";

    if (tx.short) html += '<p class="term__short">' + mdInline(tx.short) + "</p>";

    if (entry.visual) {
      html += '<p class="term__short" style="font-size:13px"><a href="' + entry.visual + '">▶ ' +
        "see it move</a></p>";
    }

    if (tx.formal) {
      html += '<div class="term__formal"><span class="label" style="margin-bottom:6px">' +
        LA.t("glossary.formal") + "</span>" + mdInline(tx.formal) + "</div>";
    }

    if (entry.tags && entry.tags.length) {
      html += '<div class="term__tags">' +
        entry.tags.map(function (t) { return '<span class="term__tag">' + esc(t) + "</span>"; }).join("") + "</div>";
    }

    if (entry.seeAlso && entry.seeAlso.length) {
      var chips = entry.seeAlso.map(function (id) {
        var t = textOf(id);
        return '<a href="#' + id + '">' + esc(t.term || id) + "</a>";
      }).join("");
      html += '<p class="seealso"><span class="seealso__label">' + LA.t("glossary.seeAlso") + ":</span> " + chips + "</p>";
    }

    html += renderTheorems(entry.id);
    html += renderCites(entry.cites);
    html += "</article>";
    return html;
  }

  /* --- search + filter ---------------------------------------------------- */
  function matches(entry) {
    if (state.tag && (!entry.tags || entry.tags.indexOf(state.tag) < 0)) return false;
    if (!state.q) return true;
    var tx = textOf(entry.id);
    var hay = [entry.id, entry.symbol, tx.term, tx.short, tx.formal,
      (entry.tags || []).join(" ")].join(" ").toLowerCase();
    return hay.indexOf(state.q) >= 0;
  }

  function render() {
    var list = (window.LA_GLOSSARY || []).filter(matches);
    grid.innerHTML = list.length
      ? list.map(renderTerm).join("")
      : '<p class="gloss-count">' + LA.t("glossary.none") + "</p>";
    typeset(grid);
    countEl.textContent = LA.t("glossary.count")
      .replace("{n}", list.length)
      .replace("{total}", (window.LA_GLOSSARY || []).length);
  }

  function allTags() {
    var set = {};
    (window.LA_GLOSSARY || []).forEach(function (e) {
      (e.tags || []).forEach(function (t) { set[t] = 1; });
    });
    return Object.keys(set).sort();
  }

  function buildControls() {
    searchEl.placeholder = LA.t("glossary.search");
    searchEl.value = state.q;
    var chips = ['<button class="tag-chip" data-tag="" aria-pressed="' + (!state.tag) + '">' +
      LA.t("glossary.allTags") + "</button>"];
    allTags().forEach(function (t) {
      chips.push('<button class="tag-chip" data-tag="' + t + '" aria-pressed="' + (state.tag === t) + '">' + esc(t) + "</button>");
    });
    tagWrap.innerHTML = chips.join("");
    tagWrap.querySelectorAll(".tag-chip").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.tag = btn.dataset.tag || null;
        buildControls();
        render();
      });
    });
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function init() {
    grid = document.getElementById("gloss-grid");
    countEl = document.getElementById("gloss-count");
    searchEl = document.getElementById("gloss-search");
    tagWrap = document.getElementById("tag-filters");
    if (!grid) return;

    searchEl.addEventListener("input", function () {
      state.q = searchEl.value.trim().toLowerCase();
      render();
    });

    buildControls();
    render();

    // Re-localise everything when the language flips.
    LA.onLangChange(function () {
      document.getElementById("gloss-title").textContent = LA.t("glossary.title");
      document.getElementById("gloss-intro").textContent = LA.t("glossary.intro");
      buildControls();
      render();
    });

    // If we arrived with a #hash, scroll to it after first paint.
    if (location.hash) {
      var el = document.getElementById(location.hash.slice(1));
      if (el) el.scrollIntoView();
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
