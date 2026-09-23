(function () {
  var form = document.getElementById("search-form");
  var input = document.getElementById("query");
  var typeFilter = document.getElementById("type-filter");
  var chips = document.getElementById("chips");
  var suggest = document.getElementById("suggest");
  var view = document.getElementById("view");
  var hero = document.getElementById("hero");
  var foot = document.getElementById("foot");
  var films = window.POFRAZE_FILMS || [];
  var catalogState = { type: "all", vibe: "all", q: "" };
  var chipsOpen = false;

  function ruPlural(n, one, few, many) {
    var mod10 = n % 10;
    var mod100 = n % 100;
    if (mod100 >= 11 && mod100 <= 14) return many;
    if (mod10 === 1) return one;
    if (mod10 >= 2 && mod10 <= 4) return few;
    return many;
  }

  function filmYear(film) {
    var y = Number(film && film.year);
    return y >= 1900 && y <= 2035 ? y : 0;
  }

  function safeColor(value) {
    var c = String(value || "").trim();
    if (/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(c)) return c;
    return "#3a322a";
  }

  function chipKey(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/ё/g, "е")
      .replace(/\s+/g, " ")
      .trim();
  }

  function chipTexts() {
    var seenChip = {};
    function take(list) {
      return (list || [])
        .map(function (text) {
          return window.PoFrazeSearch.workingQuery(text, films);
        })
        .filter(function (text) {
          if (!text) return false;
          if (/[a-z]/i.test(text) && !/[а-яё]/i.test(text)) return false;
          var key = chipKey(text);
          if (!key || seenChip[key]) return false;
          var older = Object.keys(seenChip);
          var i;
          for (i = 0; i < older.length; i += 1) {
            if (key.indexOf(older[i]) !== -1 || older[i].indexOf(key) !== -1) {
              if (key.length <= older[i].length) return false;
            }
          }
          seenChip[key] = 1;
          return true;
        });
    }
    return take(window.POFRAZE_CHIPS).concat(take(window.PoFrazeStore.history()));
  }

  function chipHtml() {
    var all = chipTexts();
    var shown = chipsOpen ? all : all.slice(0, 8);
    var chipButtons = shown
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
    if (all.length > 8) {
      chipButtons +=
        '<button class="chip chip-more" type="button" data-chips="' +
        (chipsOpen ? "less" : "more") +
        '">' +
        (chipsOpen ? "свернуть" : "ещё фразы") +
        "</button>";
    }
    return !shown.length
      ? ""
      : '<p class="chips-hint">Попробуй фразу</p>' + chipButtons;
  }

  function coverCard(film, sub) {
    var year = filmYear(film);
    var meta = sub || (year ? String(year) : film.type || "");
    return (
      '<button type="button" class="cover" data-open="' +
      escapeHtml(film.id) +
      '">' +
      poster(film, "poster-cover") +
      '<span class="cover-name">' +
      escapeHtml(film.title) +
      "</span>" +
      '<span class="cover-meta">' +
      escapeHtml(meta) +
      "</span></button>"
    );
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function highlight(quote, query) {
    var safe = escapeHtml(String(quote || "").replace(/\s+/g, " ").trim());
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
      safeColor(film.color) +
      '" data-poster-id="' +
      escapeHtml(film.id) +
      '"><span class="poster-ini">' +
      escapeHtml(film.initials || String(film.title || "?").slice(0, 2)) +
      '</span><img class="poster-img" alt="' +
      escapeHtml(film.title) +
      '"></div>'
    );
  }

  function watchRow(film) {
    return (
      '<p class="watch-label">Где смотреть легально</p><div class="watch">' +
      window.PoFrazeSearch.watchLinks(film)
        .map(function (link) {
          var rel = link.sponsored
            ? "noopener noreferrer sponsored nofollow"
            : "noopener noreferrer";
          return (
            '<a class="' +
            (link.primary ? "" : "ghost") +
            '" href="' +
            escapeHtml(link.href) +
            '" target="_blank" rel="' +
            rel +
            '" data-watch="' +
            escapeHtml(link.id) +
            '" data-film="' +
            escapeHtml(film.id) +
            '">' +
            link.name +
            "</a>"
          );
        })
        .join("") +
      "</div>" +
      '<p class="watch-note">' +
      (window.POFRAZE_CONFIG &&
      window.POFRAZE_CONFIG.partners &&
      window.POFRAZE_CONFIG.partners.admitadWrap
        ? "Реклама. Партнёрская ссылка: комиссия сайту, цена для вас та же."
        : "Кнопки открывают поиск на Кинопоиске, IVI, Okko и Premier.") +
      "</p>"
    );
  }

  function vibeBadges(film) {
    return (film.vibes || [])
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
    if (hash.indexOf("/catalog") === 0) return { name: "catalog" };
    if (hash.indexOf("/about") === 0) return { name: "about" };
    if (hash.indexOf("/saved") === 0) return { name: "saved" };
    if (hash.indexOf("/legal") === 0) return { name: "legal" };
    if (hash.indexOf("/privacy") === 0) return { name: "privacy" };
    if (hash.indexOf("/partners") === 0) return { name: "partners" };
    var params = new URLSearchParams(location.search);
    var titleId = params.get("t") || "";
    if (titleId) return { name: "title", id: titleId };
    var q = params.get("q") || "";
    var type = params.get("type") || "all";
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
    url.searchParams.delete("t");
    url.hash = "#/";
    history.pushState(null, "", url);
    render();
  }

  function goHome() {
    chipsOpen = false;
    var url = new URL(location.href);
    url.searchParams.delete("t");
    url.searchParams.delete("q");
    url.searchParams.delete("type");
    url.hash = "#/";
    history.pushState(null, "", url);
    render();
  }

  function goTitle(id) {
    var url = new URL(location.href);
    url.searchParams.set("t", id);
    url.searchParams.delete("q");
    url.hash = "#/t/" + encodeURIComponent(id);
    history.pushState(null, "", url);
    render();
  }

  function metaLine(film) {
    var year = filmYear(film);
    return (
      escapeHtml(film.type || "") +
      (year ? " · " + year : "") +
      (film.originalTitle ? " · " + escapeHtml(film.originalTitle) : "")
    );
  }

  function resultCard(row, query) {
    var film = row.film;
    return (
      '<article class="card clickable result-card" data-open="' +
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
      "</span></div>" +
      '<p class="quote' +
      (row.viaTitle ? " quote-title" : "") +
      '">' +
      "<span>" +
      (row.viaTitle ? "Совпало с названием" : "По фразе") +
      "</span>" +
      highlight(row.quote, query) +
      "</p>" +
      "</div></article>"
    );
  }

  function homeView(route) {
    hero.hidden = false;
    document.getElementById("eyebrow").textContent =
      films.length +
      " " +
      ruPlural(films.length, "тайтл", "тайтла", "тайтлов") +
      " · без регистрации";
    var query = route.q || "";
    var type = route.type || "all";
    typeFilter.value = ["фильм", "сериал"].indexOf(type) !== -1 ? type : "all";
    input.value = query;

    if (query.trim().length < 3) {
      chips.innerHTML = chipHtml();
      var seenShelf = {};
      var popular = [];
      [
        "brother",
        "matrix",
        "fight-club",
        "ivan-vasilievich",
        "irony-fate",
        "diamond-arm",
        "inception",
        "dark-knight",
        "breaking-bad",
        "got",
        "pulp",
        "interstellar",
        "gladiator",
        "home-alone",
        "hp1",
      ].forEach(function (id) {
        var film = window.PoFrazeSearch.getById(id, films);
        if (!film || seenShelf[film.id]) return;
        seenShelf[film.id] = 1;
        popular.push(film);
      });
      films
        .slice()
        .sort(function (a, b) {
          return (b.year || 0) - (a.year || 0);
        })
        .some(function (film) {
          if (popular.length >= 14) return true;
          if (seenShelf[film.id]) return false;
          seenShelf[film.id] = 1;
          popular.push(film);
          return false;
        });
      view.innerHTML =
        '<section class="home-recent">' +
        '<div class="shelf-head"><h2 class="page-title">Из каталога</h2>' +
        '<a class="shelf-more" href="#/catalog">Весь каталог →</a></div>' +
        '<div class="shelf">' +
        popular.map(function (film) {
          return coverCard(film);
        }).join("") +
        "</div></section>";
      return;
    }

    var found = window.PoFrazeSearch.search(query, films, {
      type: typeFilter.value,
      limit: 16,
    });
    if (found.length) window.PoFrazeStore.addHistory(query);
    if (window.PoFrazeTrack) window.PoFrazeTrack.search(query);

    if (!found.length) {
      chips.innerHTML = chipHtml();
      view.innerHTML =
        "<section class='empty'><h2>Так не нашли</h2><p>Попробуй короче, без фамилии актёра — или напиши название фильма. Ещё можно открыть <a href=\"#/catalog\">каталог</a>.</p></section>";
      return;
    }

    chips.innerHTML = "";
    view.innerHTML =
      '<p class="results-meta">Нашли ' +
      found.length +
      " " +
      ruPlural(found.length, "совпадение", "совпадения", "совпадений") +
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
    var quoteItems = (film.shownQuotes || film.quotes || [])
      .map(function (q) {
        return String(q || "").trim();
      })
      .filter(function (t, i, arr) {
        if (t.length < 4 || t.length > 90) return false;
        var k = t.toLowerCase().replace(/ё/g, "е");
        var titleK = String(film.title || "")
          .toLowerCase()
          .replace(/ё/g, "е");
        var origK = String(film.originalTitle || "")
          .toLowerCase()
          .replace(/ё/g, "е");
        if (k === titleK || k === origK) return false;
        if (film.wikiEn && k === String(film.wikiEn).toLowerCase()) return false;
        if (film.wikiRu && k === String(film.wikiRu).toLowerCase().replace(/ё/g, "е")) {
          return false;
        }
        var words = t.split(/\s+/);
        if (words.length < 2 && t.length < 12) return false;
        var caps = words.filter(function (w) {
          return /^[A-ZА-ЯЁ]/.test(w);
        }).length;
        if (words.length <= 5 && caps >= Math.ceil(words.length * 0.75)) return false;
        return arr.indexOf(t) === i;
      })
      .slice(0, 8)
      .map(function (q) {
        return "<li>«" + escapeHtml(q) + "»</li>";
      })
      .join("");
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
      (quoteItems
        ? "<h3>Фразы, по которым его ищут</h3><ul class='quotes-list'>" +
          quoteItems +
          "</ul>"
        : "") +
      "<h3>Похожие по настроению</h3>" +
      (similar.length
        ? '<div class="shelf">' +
          similar
            .map(function (row) {
              return coverCard(row.film, row.why.slice(0, 2).join(" · "));
            })
            .join("") +
          "</div>"
        : "<p class='orig'>Пока нет соседних по настроению.</p>") +
      "</article>";
  }

  function catalogView() {
    hero.hidden = true;
    var q = catalogState.q.trim().toLowerCase();
    var list = films.filter(function (film) {
      if (catalogState.type !== "all" && film.type !== catalogState.type) {
        return false;
      }
      if (
        catalogState.vibe !== "all" &&
        (film.vibes || []).indexOf(catalogState.vibe) === -1
      ) {
        return false;
      }
      if (!q) return true;
      var needle = q.replace(/ё/g, "е");
      var hay = (
        film.title +
        " " +
        (film.originalTitle || "") +
        " " +
        (film.watchQuery || "") +
        " " +
        (film.wikiEn || "") +
        " " +
        (film.wikiRu || "") +
        " " +
        (film.quotes || []).join(" ")
      )
        .toLowerCase()
        .replace(/ё/g, "е");
      return hay.indexOf(needle) !== -1;
    });
    list.sort(function (a, b) {
      function rank(title) {
        return /^\d/.test(String(title || "").trim()) ? 1 : 0;
      }
      var ra = rank(a.title);
      var rb = rank(b.title);
      if (ra !== rb) return ra - rb;
      return a.title.localeCompare(b.title, "ru");
    });
    var shown = list;
    var moreNote = "";
    if (!q && list.length > 72) {
      shown = list.slice(0, 72);
      moreNote = " На экране 72 обложки, остальные — через поиск по имени.";
    }
    var vibeOptions = Object.keys(window.POFRAZE_VIBES)
      .map(function (key) {
        var sel = catalogState.vibe === key ? " selected" : "";
        return (
          '<option value="' +
          key +
          '"' +
          sel +
          ">" +
          escapeHtml(window.POFRAZE_VIBES[key]) +
          "</option>"
        );
      })
      .join("");
    view.innerHTML =
      '<h2 class="page-title">Каталог</h2>' +
      '<p class="orig">' +
      films.length +
      " " +
      ruPlural(films.length, "название", "названия", "названий") +
      " — листай обложки или ищи по имени и реплике." +
      moreNote +
      "</p>" +
      '<div class="catalog-bar">' +
      '<input id="catalog-q" type="search" placeholder="название или реплика" value="' +
      escapeHtml(catalogState.q) +
      '" />' +
      '<select id="catalog-type">' +
      '<option value="all"' +
      (catalogState.type === "all" ? " selected" : "") +
      ">Все</option>" +
      '<option value="фильм"' +
      (catalogState.type === "фильм" ? " selected" : "") +
      ">Фильмы</option>" +
      '<option value="сериал"' +
      (catalogState.type === "сериал" ? " selected" : "") +
      ">Сериалы</option>" +
      "</select>" +
      '<select id="catalog-vibe"><option value="all">Любая атмосфера</option>' +
      vibeOptions +
      "</select></div>" +
      '<p class="results-meta">Показано ' +
      shown.length +
      (shown.length !== list.length ? " из " + list.length : "") +
      "</p>" +
      '<div class="cover-grid">' +
      (shown.length
        ? shown.map(function (film) {
            return coverCard(film);
          }).join("")
        : "<p class='orig'>Ничего не попало в фильтр.</p>") +
      "</div>";
    if (window.PoFrazePosters) window.PoFrazePosters.hydrate(view);
  }

  function aboutView() {
    hero.hidden = true;
    view.innerHTML =
      '<article class="title-page"><h1>О проекте</h1>' +
      "<p>По фразе угадывает фильм или сериал по куску диалога. Сначала фраза, потом название, потом куда смотреть легально.</p>" +
      "<p>Похожие подбираем по настроению, не по жанру из справочника.</p>" +
      "<p>В базе " +
      films.length +
      " " +
      ruPlural(films.length, "название", "названия", "названий") +
      ". Это не весь киномир. Постеры — с Википедии.</p>" +
      "<p>Сайт бесплатный. Если появятся деньги — с переходов «смотреть», не с платы за поиск.</p>" +
      '<h3>Спасибо</h3>' +
      "<p>Тем, кто ищет фильм по обрывку, а не по названию. Из-за вас это имеет смысл.</p>" +
      "<p>Дубляжу: мы ищем так, как фразу слышали, даже криво, а не как написали в оригинале.</p>" +
      "<p>Википедии — за постеры. Авторам фильмов и сериалов — за реплики; мы только помогаем вспомнить, откуда это.</p>" +
      "<p>Если фраза нашлась — спасибо, что зашли. Если нет — попробуй другими словами или открой каталог.</p>" +
      '<aside class="dedication">' +
      "<h3>Гузалии Гапуровой</h3>" +
      "<p>За помощь, её желание помочь мне в этом начинании. За её доброе сердце и открытую душу. За любовь, которая горячее любого чебурека из «Пятёрочки». И за понимание: она мой мотиватор и свет, который освещает мой путь.</p>" +
      "<p>Гузалия, ты — мой бескрайний космос и необъятный океан, и причина довести это до кнопки «Найти». Спасибо, что веришь в меня и даёшь проявлять себя во всех направлениях нашей с тобой жизни. Этот сайт — полностью твоя заслуга.</p>" +
      "</aside>" +
      "<p><a href='#/legal'>Соглашение</a> · <a href='#/privacy'>Персональные данные</a> · <a href='#/partners'>Партнёрские ссылки</a></p>" +
      '<p><a href="#/">К поиску</a> · <a href="#/catalog">В каталог</a></p></article>';
  }

  function legalView(kind) {
    hero.hidden = true;
    var pages = window.POFRAZE_LEGAL || {};
    var key = kind === "legal" ? "offer" : kind;
    var html = pages[key] ? pages[key]() : "<p>Страница не найдена.</p>";
    view.innerHTML =
      '<article class="title-page legal-page">' +
      html +
      '<p><a href="#/about">О проекте</a> · <a href="#/">К поиску</a></p></article>';
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
        "<section class='empty'><h2>Пока пусто</h2><p>На карточке фильма нажми «Сохранить». Список останется в этом браузере, без регистрации.</p><p><a href='#/'>К поиску</a></p></section>";
      return;
    }
    view.innerHTML =
      "<h2 class='page-title'>Сохранённое</h2><div class='cover-grid'>" +
      list
        .map(function (film) {
          return coverCard(film);
        })
        .join("") +
      "</div>";
  }

  function setPageMeta(title, desc) {
    document.title = title;
    var og = document.querySelector('meta[property="og:title"]');
    if (og) og.setAttribute("content", title);
    var md = document.querySelector('meta[name="description"]');
    if (md && desc) md.setAttribute("content", desc);
  }

  function cookieBar() {
    if (!window.PoFrazeTrack || !window.PoFrazeTrack.needsBanner()) {
      var old = document.getElementById("cookie-bar");
      if (old) old.remove();
      return;
    }
    if (document.getElementById("cookie-bar")) return;
    var bar = document.createElement("div");
    bar.id = "cookie-bar";
    bar.className = "cookie-bar";
    bar.innerHTML =
      "<p>Чтобы понять, какие фразы срабатывают, нужен счётчик Яндекс Метрики. Поиск без него работает. <a href='#/privacy'>Как обрабатываем данные</a></p>" +
      '<div><button type="button" data-consent="1">Разрешить</button>' +
      '<button type="button" class="ghost" data-consent="0">Нет</button></div>';
    document.body.appendChild(bar);
  }

  function render(opts) {
    opts = opts || {};
    suggest.hidden = true;
    var route = parseRoute();
    var legal =
      route.name === "legal" ||
      route.name === "privacy" ||
      route.name === "partners";
    document.body.classList.toggle(
      "page-detail",
      route.name === "title" ||
        route.name === "saved" ||
        route.name === "catalog" ||
        route.name === "about" ||
        legal
    );
    document.body.classList.toggle(
      "has-query",
      route.name === "home" && String(route.q || "").trim().length >= 3
    );
    Array.prototype.forEach.call(
      document.querySelectorAll(".nav a[data-nav]"),
      function (link) {
        link.classList.toggle(
          "is-active",
          link.getAttribute("data-nav") ===
            (route.name === "home" ? "home" : route.name)
        );
        if (link.classList.contains("is-active")) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      }
    );
    if (route.name === "title") titleView(route.id);
    else if (route.name === "saved") savedView();
    else if (route.name === "catalog") catalogView();
    else if (route.name === "about") aboutView();
    else if (legal) legalView(route.name);
    else homeView(route);

    if (route.name !== "home") chips.innerHTML = "";

    if (route.name === "home") {
      setPageMeta(
        "По фразе — найти фильм по реплике",
        "Вставь фразу из кино или сериала — найдём тайтл и куда смотреть легально."
      );
    } else if (route.name === "title") {
      var film = window.PoFrazeSearch.getById(route.id, films);
      setPageMeta(
        film
          ? film.title + " — По фразе"
          : "Тайтл — По фразе",
        film ? "Реплики и где смотреть «" + film.title + "»." : ""
      );
    } else if (route.name === "legal") {
      setPageMeta("Соглашение — По фразе");
    } else if (route.name === "privacy") {
      setPageMeta("Персональные данные — По фразе");
    } else if (route.name === "partners") {
      setPageMeta("Партнёрские ссылки — По фразе");
    } else if (route.name === "about") {
      setPageMeta("О проекте — По фразе");
    } else if (route.name === "catalog") {
      setPageMeta("Каталог — По фразе");
    } else if (route.name === "saved") {
      setPageMeta("Сохранённое — По фразе");
    }

    foot.textContent =
      "По фразе · " +
      films.length +
      " " +
      ruPlural(films.length, "тайтл", "тайтла", "тайтлов") +
      " · поиск по реплике и названию";
    if (window.PoFrazePosters) window.PoFrazePosters.hydrate(view);
    cookieBar();
    if (!opts.keepScroll) {
      window.scrollTo(0, 0);
    }
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
          escapeHtml(String(row.quote || "").trim()) +
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
    var homeLink = event.target.closest('a[href="#/"]');
    if (homeLink) {
      event.preventDefault();
      goHome();
      return;
    }
    var consent = event.target.closest("[data-consent]");
    if (consent && window.PoFrazeTrack) {
      if (consent.getAttribute("data-consent") === "1") window.PoFrazeTrack.accept();
      else window.PoFrazeTrack.decline();
      cookieBar();
      return;
    }
    var watch = event.target.closest("a[data-watch]");
    if (watch && window.PoFrazeTrack) {
      window.PoFrazeTrack.watch(
        watch.getAttribute("data-film"),
        watch.getAttribute("data-watch")
      );
    }
    var moreChips = event.target.closest("[data-chips]");
    if (moreChips) {
      chipsOpen = moreChips.getAttribute("data-chips") === "more";
      chips.innerHTML = chipHtml();
      return;
    }
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
    var catq = event.target.closest("#catalog-q");
    if (catq) return;
    var save = event.target.closest("[data-save]");
    if (save) {
      window.PoFrazeStore.toggleSaved(save.getAttribute("data-save"));
      render({ keepScroll: true });
    }
  });

  document.addEventListener("input", function (event) {
    if (event.target.id === "catalog-q") {
      catalogState.q = event.target.value;
      catalogView();
      var el = document.getElementById("catalog-q");
      if (el) {
        el.focus();
        try {
          el.setSelectionRange(el.value.length, el.value.length);
        } catch (err) {}
      }
    }
  });

  document.addEventListener("change", function (event) {
    if (event.target.id === "catalog-type") {
      catalogState.type = event.target.value;
      catalogView();
    }
    if (event.target.id === "catalog-vibe") {
      catalogState.vibe = event.target.value;
      catalogView();
    }
  });

  window.addEventListener("hashchange", render);
  window.addEventListener("popstate", render);
  render();
})();
