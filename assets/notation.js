/* ============================================================================
   Notation renderer — groups LA_NOTATION.rows by section, paints a symbol
   table from the active-locale overlay, links symbols to glossary anchors,
   and lists the site's conventions. Re-renders on language change.
   ============================================================================ */
(function () {
  "use strict";
  var table, conv;

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

  function tx() {
    var O = window.LA_NOTATION_TEXT || {};
    return O[LA.locale] || O.en || {};
  }
  function rowText(id) {
    var O = window.LA_NOTATION_TEXT || {};
    var r = (O[LA.locale] && O[LA.locale].rows && O[LA.locale].rows[id]);
    if (!r) r = (O.en && O.en.rows && O.en.rows[id]);
    return r || {};
  }
  function groupLabel(g) {
    var t = tx();
    return (t.groups && t.groups[g]) || g;
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function render() {
    var data = window.LA_NOTATION || { groups: [], rows: [] };
    var html = "<thead><tr>" +
      "<th>" + LA.t("notation.colSymbol") + "</th>" +
      "<th>" + LA.t("notation.colName") + "</th>" +
      "<th>" + LA.t("notation.colMeaning") + "</th>" +
      "<th>" + LA.t("notation.colRead") + "</th>" +
      "</tr></thead><tbody>";

    data.groups.forEach(function (g) {
      html += '<tr class="notation-group"><td colspan="4">' + esc(groupLabel(g)) + "</td></tr>";
      data.rows.filter(function (r) { return r.group === g; }).forEach(function (r) {
        var t = rowText(r.id);
        var sym = r.link
          ? '<a href="glossary.html#' + r.link + '">$' + r.symbol + "$</a>"
          : "$" + r.symbol + "$";
        html += "<tr>" +
          '<td class="sym">' + sym + "</td>" +
          "<td>" + esc(t.name || r.id) + "</td>" +
          "<td>" + (t.meaning || "") + "</td>" +
          '<td class="read">' + esc(t.read || "") + "</td>" +
          "</tr>";
      });
    });
    html += "</tbody>";
    table.innerHTML = html;
    typeset(table);

    // conventions — render **bold** (math $...$ has no ** so this is safe), then KaTeX
    var list = (tx().conventions || []);
    conv.innerHTML = list.length
      ? "<ul>" + list.map(function (c) {
          return "<li>" + c.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>") + "</li>";
        }).join("") + "</ul>"
      : "";
    typeset(conv);
  }

  function init() {
    table = document.getElementById("notation-table");
    conv = document.getElementById("notation-conventions");
    if (!table) return;
    render();
    LA.onLangChange(function () {
      document.getElementById("notation-title").textContent = LA.t("notation.title");
      document.getElementById("notation-intro").textContent = LA.t("notation.intro");
      render();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
