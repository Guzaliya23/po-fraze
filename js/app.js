(function () {
  var form = document.getElementById("search-form");
  var input = document.getElementById("query");
  var typeFilter = document.getElementById("type-filter");
  var chips = document.getElementById("chips");
  var suggest = document.getElementById("suggest");
  var view = document.getElementById("view");
  var hero = document.getElementById("hero");
  var foot = document.getElementById("foot");
  var films = window.POFRAZE_FILMS;

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function highlight(quote, query) {
    var safe = escapeHtml(quote);
    var source = window.PoFrazeSearch.layoutFix(query);
    var words = source
      .split(/\s+/)
      .filter(function (w) {
        return w.length >= 3;
      })
      .map(function (w) {
        return w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      });
    if (!words.length) return "«" + safe + "»";
    var re = new RegExp("(" + words.join("|") + ")", "ig");
    return "«" + safe.replace(re, "<mark>$1</mark>") + "»";
  }

  function poster(film, extraClass) {
    return (
      '<div class="poster ' +
      (extraClass || "") +
      '" style="background:' +
      film.color +
      '">' +
      escapeHtml(film.initials) +
      "</div>"
    );
  }

  function watchRow(film) {
    return (
      '<p class="watch-label">Где смотреть</p><div class="watch">' +
      window.PoFrazeSearch.watchLinks(film)
        .map(function (link) {
          return (
            '<a class="' +
            (link.primary ? "" : "ghost") +
            '" href="' +
            link.href +
            '" target="_blank" rel="noopener noreferrer">' +
            link.name +
            "</a>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function vibeBadges(film) {
    return film.vibes
      .map(function (v) {
        return (
          '<span class="badge">' +
          escapeHtml(window.PoFrazeSearch.vibeLabel(v)) +
          "</span>"
        );
      })
      .join("");
  }

  function parseRoute() {
    var hash = (location.hash || "#/").replace(/^#/, "");
    if (hash.indexOf("/t/") === 0) {
      return { name: "title", id: decodeURIComponent(hash.slice(3)) };
    }
    if (hash.indexOf("/saved") === 0) return { name: "saved" };
    var q = new URLSearchParams(location.search).get("q") || "";
    var type = new URLSearchParams(location.search).get("type") || "all";
    if (hash.indexOf("/q/") === 0) {
      q = decodeURIComponent(hash.slice(3));
    }
    return { name: "home", q: q, type: type };
  }

  function goSearch(query, type) {
    var q = query.trim();
    var t = type || typeFilter.value;
    var url = new URL(location.href);
    if (q) url.searchParams.set("q", q);
    else url.searchParams.delete("q");
    if (t && t !== "all") url.searchParams.set("type", t);
    else url.searchParams.delete("type");
    url.hash = "#/";
    history.pushState(null, "", url);
    render();
  }

  function goTitle(id) {
    location.hash = "#/t/" + encodeURIComponent(id);
  }

  function metaLine(film) {
    return (
      escapeHtml(film.type) +
      " · " +
      film.year +
      (film.originalTitle ? " · " + escapeHtml(film.originalTitle) : "")
    );
  }

  function resultCard(row, query) {
    var film = row.film;
    return (
      '<article class="card clickable" data-open="' +
      escapeHtml(film.id) +
      '">' +
      poster(film) +
      "<div>" +
      "<h2>" +
      escapeHtml(film.title) +
      "</h2>" +
      '<p class="orig">' +
      metaLine(film) +
      "</p>" +
      '<div class="badges"><span class="badge ' +
      row.confidence.key +
      '">' +
      row.confidence.label +
      " · " +
      row.score +
      "</span>" +
      vibeBadges(film) +
      "</div>" +
      '<p class="quote">' +
      (row.viaTitle ? "Совпало с названием. Реплика: " : "Похожая реплика: ") +
      highlight(row.quote, query) +
      "</p>" +
      watchRow(film) +
      "</div></article>"
    );
  }

  function homeView(route) {
    hero.hidden = false;
    document.getElementById("eyebrow").textContent =
      films.length + " тайтлов · без регистрации";
    var query = route.q || "";
    var type = route.type || "all";
    typeFilter.value = ["фильм", "сериал"].indexOf(type) !== -1 ? type : "all";
    input.value = query;

    var history = window.PoFrazeStore.history();
    chips.innerHTML = (query ? [] : window.POFRAZE_CHIPS)
      .concat(query ? [] : history.slice(0, 3))
      .filter(function (item, i, arr) {
        return arr.indexOf(item) === i;
      })
      .map(function (text) {
        return (
          '<button class="chip" type="button" data-q="' +
          escapeHtml(text) +
          '">' +
          escapeHtml(text) +
          "</button>"
        );
      })
      .join("");

    if (query.trim().length < 3) {
      view.innerHTML =
        '<section class="empty"><h2>Как это работает</h2><ol>' +
        "<li>Вставляешь обрывок диалога — даже с английской раскладкой.</li>" +
        "<li>Получаешь несколько тайтлов с уверенностью и цитатой.</li>" +
        "<li>Открываешь карточку: где смотреть и похожие по вайбу.</li>" +
        "</ol><p class='hint'>Касса продукта — переход в кинотеатр, не подписка на поиск.</p></section>";
      return;
    }

    window.PoFrazeStore.addHistory(query);
    var found = window.PoFrazeSearch.search(query, films, {
      type: typeFilter.value,
      limit: 5,
    });

    if (!found.length) {
      view.innerHTML =
        "<section class='empty'><h2>Пока не нашли</h2><p>Попробуй короче, без имени актёра, или выбери пример. База растёт, но это ещё не все фильмы мира.</p></section>";
      return;
    }

    view.innerHTML =
      '<p class="results-meta">Нашли ' +
      found.length +
      " по запросу «" +
      escapeHtml(query.trim()) +
      "»</p>" +
      '<div class="cards">' +
      found.map(function (row) {
        return resultCard(row, query);
      }).join("") +
      "</div>";
  }

  function titleView(id) {
    var film = window.PoFrazeSearch.getById(id, films);
    hero.hidden = true;
    if (!film) {
      view.innerHTML =
        "<section class='empty'><h2>Тайтл не найден</h2><p><a href='#/'>Вернуться к поиску</a></p></section>";
      return;
    }
    var saved = window.PoFrazeStore.isSaved(film.id);
    var similar = window.PoFrazeSearch.similarWithWhy(film, films, 6);
    view.innerHTML =
      '<article class="title-page">' +
      '<p class="crumb"><a href="#/">← к поиску</a></p>' +
      '<div class="title-head">' +
      poster(film, "poster-lg") +
      "<div>" +
      "<h1>" +
      escapeHtml(film.title) +
      "</h1>" +
      '<p class="orig">' +
      metaLine(film) +
      "</p>" +
      '<div class="badges">' +
      vibeBadges(film) +
      "</div>" +
      '<button type="button" class="save-btn" data-save="' +
      escapeHtml(film.id) +
      '">' +
      (saved ? "В сохранённом" : "Сохранить") +
      "</button>" +
      "</div></div>" +
      watchRow(film) +
      "<h3>Реплики в базе</h3><ul class='quotes-list'>" +
      film.quotes
        .map(function (q) {
          return "<li>«" + escapeHtml(q) + "»</li>";
        })
        .join("") +
      "</ul>" +
      "<h3>Похожие по атмосфере</h3>" +
      (similar.length
        ? '<div class="similar-grid">' +
          similar
            .map(function (row) {
              return (
                '<button type="button" class="mini" data-open="' +
                escapeHtml(row.film.id) +
                '">' +
                poster(row.film, "poster-sm") +
                "<span><strong>" +
                escapeHtml(row.film.title) +
                "</strong><em>" +
                escapeHtml(row.why.slice(0, 3).join(" · ")) +
                "</em></span></button>"
              );
            })
            .join("") +
          "</div>"
        : "<p class='orig'>Пока не к чему привязать.</p>") +
      "</article>";
  }

  function savedView() {
    hero.hidden = true;
    var ids = window.PoFrazeStore.savedIds();
    var list = ids
      .map(function (id) {
        return window.PoFrazeSearch.getById(id, films);
      })
      .filter(Boolean);
    if (!list.length) {
      view.innerHTML =
        "<section class='empty'><h2>Пока пусто</h2><p>Сохраняй тайтлы с карточки — список останется в этом браузере.</p><p><a href='#/'>К поиску</a></p></section>";
      return;
    }
    view.innerHTML =
      "<h2 class='page-title'>Сохранённое</h2><div class='similar-grid'>" +
      list
        .map(function (film) {
          return (
            '<button type="button" class="mini" data-open="' +
            escapeHtml(film.id) +
            '">' +
            poster(film, "poster-sm") +
            "<span><strong>" +
            escapeHtml(film.title) +
            "</strong><em>" +
            metaLine(film) +
            "</em></span></button>"
          );
        })
        .join("") +
      "</div>";
  }

  function render() {
    suggest.hidden = true;
    var route = parseRoute();
    document.body.classList.toggle(
      "page-detail",
      route.name === "title" || route.name === "saved"
    );
    if (route.name === "title") titleView(route.id);
    else if (route.name === "saved") savedView();
    else homeView(route);
    foot.textContent =
      "По фразе · " + films.length + " тайтлов · поиск по реплике";
  }

  function showSuggest() {
    var q = input.value.trim();
    if (q.length < 3 || hero.hidden) {
      suggest.hidden = true;
      return;
    }
    var found = window.PoFrazeSearch.search(q, films, {
      type: typeFilter.value,
      limit: 4,
    });
    if (!found.length) {
      suggest.hidden = true;
      return;
    }
    suggest.hidden = false;
    suggest.innerHTML = found
      .map(function (row) {
        return (
          '<button type="button" class="suggest-item" data-open="' +
          escapeHtml(row.film.id) +
          '"><strong>' +
          escapeHtml(row.film.title) +
          "</strong><span>" +
          escapeHtml(row.quote) +
          "</span></button>"
        );
      })
      .join("");
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    goSearch(input.value, typeFilter.value);
  });

  typeFilter.addEventListener("change", function () {
    if (input.value.trim().length >= 3) goSearch(input.value, typeFilter.value);
  });

  var suggestTimer;
  input.addEventListener("input", function () {
    clearTimeout(suggestTimer);
    suggestTimer = setTimeout(showSuggest, 180);
  });

  document.addEventListener("click", function (event) {
    var open = event.target.closest("[data-open]");
    if (open) {
      if (event.target.closest("a")) return;
      goTitle(open.getAttribute("data-open"));
      return;
    }
    var qbtn = event.target.closest("[data-q]");
    if (qbtn) {
      goSearch(qbtn.getAttribute("data-q"), typeFilter.value);
      return;
    }
    var save = event.target.closest("[data-save]");
    if (save) {
      window.PoFrazeStore.toggleSaved(save.getAttribute("data-save"));
      render();
    }
  });

  window.addEventListener("hashchange", render);
  window.addEventListener("popstate", render);
  render();
})();
