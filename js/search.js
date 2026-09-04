(function (root) {
  var EN_RU = {
    q: "й",
    w: "ц",
    e: "у",
    r: "к",
    t: "е",
    y: "н",
    u: "г",
    i: "ш",
    o: "щ",
    p: "з",
    "[": "х",
    "]": "ъ",
    a: "ф",
    s: "ы",
    d: "в",
    f: "а",
    g: "п",
    h: "р",
    j: "о",
    k: "л",
    l: "д",
    ";": "ж",
    "'": "э",
    z: "я",
    x: "ч",
    c: "с",
    v: "м",
    b: "и",
    n: "т",
    m: "ь",
    ",": "б",
    ".": "ю",
    "`": "ё",
  };

  function layoutFix(text) {
    if (!text || /[а-яё]/i.test(text) || !/[a-z\[\];',.`]/i.test(text)) {
      return text;
    }
    return text
      .split("")
      .map(function (ch) {
        var lower = ch.toLowerCase();
        var mapped = EN_RU[lower];
        if (!mapped) return ch;
        return ch === lower ? mapped : mapped.toUpperCase();
      })
      .join("");
  }

  function normalize(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/ё/g, "е")
      .replace(/nzt/g, "эн зет")
      .replace(/[^a-zа-я0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function variants(query) {
    var list = [query];
    var fixed = layoutFix(query);
    if (fixed && fixed !== query) list.push(fixed);
    return list;
  }

  function tokens(text) {
    return normalize(text).split(" ").filter(function (t) {
      return t.length >= 2;
    });
  }

  function levenshtein(a, b) {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    var prev = [];
    var i;
    var j;
    for (i = 0; i <= b.length; i += 1) prev[i] = i;
    for (i = 1; i <= a.length; i += 1) {
      var cur = [i];
      for (j = 1; j <= b.length; j += 1) {
        var cost = a[i - 1] === b[j - 1] ? 0 : 1;
        cur[j] = Math.min(cur[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
      }
      prev = cur;
    }
    return prev[b.length];
  }

  function quoteScore(query, quote) {
    var q = normalize(query);
    var hay = normalize(quote);
    if (!q || !hay) return 0;
    if (hay === q) return 100;
    if (hay.indexOf(q) !== -1) return 92;
    if (q.indexOf(hay) !== -1 && hay.length >= 8) return 80;

    var qt = tokens(q);
    var ht = tokens(hay);
    if (!qt.length) return 0;

    var hit = 0;
    qt.forEach(function (t) {
      if (ht.indexOf(t) !== -1) {
        hit += 1;
        return;
      }
      var fuzzy = ht.some(function (h) {
        if (Math.abs(h.length - t.length) > 2) return false;
        return levenshtein(t, h) <= (t.length <= 4 ? 1 : 2);
      });
      if (fuzzy) hit += 0.7;
    });

    var overlap = hit / qt.length;
    var consecutive = 0;
    var joined = ht.join(" ");
    for (var n = Math.min(qt.length, 4); n >= 2; n -= 1) {
      for (var i = 0; i <= qt.length - n; i += 1) {
        if (joined.indexOf(qt.slice(i, i + n).join(" ")) !== -1) {
          consecutive = n;
          n = 0;
          break;
        }
      }
    }

    return Math.round(overlap * 70 + consecutive * 8);
  }

  function bestQuote(film, query) {
    var best = { text: film.quotes[0], score: 0, viaTitle: false };
    variants(query).forEach(function (q) {
      film.quotes.forEach(function (quote) {
        var score = quoteScore(q, quote);
        if (score > best.score) best = { text: quote, score: score, viaTitle: false };
      });
      var titleScore = quoteScore(q, film.title + " " + (film.originalTitle || ""));
      if (titleScore > best.score) {
        best = {
          text: film.quotes[0],
          score: Math.min(titleScore, 74),
          viaTitle: true,
        };
      }
    });
    return best;
  }

  function confidence(score) {
    if (score >= 80) return { key: "sure", label: "точно" };
    if (score >= 58) return { key: "mid", label: "похоже" };
    return { key: "low", label: "возможно" };
  }

  function vibeLabel(key) {
    return (root.POFRAZE_VIBES && root.POFRAZE_VIBES[key]) || key;
  }

  function similarWithWhy(film, all, limit) {
    return all
      .filter(function (other) {
        return other.id !== film.id;
      })
      .map(function (other) {
        var shared = other.vibes.filter(function (v) {
          return film.vibes.indexOf(v) !== -1;
        });
        return { film: other, overlap: shared.length, why: shared.map(vibeLabel) };
      })
      .filter(function (row) {
        return row.overlap > 0;
      })
      .sort(function (a, b) {
        return b.overlap - a.overlap;
      })
      .slice(0, limit || 6);
  }

  function search(query, films, options) {
    options = options || {};
    var q = normalize(layoutFix(query));
    if (q.length < 3) return [];
    var type = options.type || "all";

    return films
      .filter(function (film) {
        return type === "all" || film.type === type;
      })
      .map(function (film) {
        var match = bestQuote(film, query);
        return {
          film: film,
          quote: match.text,
          score: match.score,
          viaTitle: !!match.viaTitle,
          confidence: confidence(match.score),
          similar: similarWithWhy(film, films, 5),
        };
      })
      .filter(function (row) {
        return row.score >= 42;
      })
      .sort(function (a, b) {
        return b.score - a.score;
      })
      .slice(0, options.limit || 5);
  }

  function getById(id, films) {
    for (var i = 0; i < films.length; i += 1) {
      if (films[i].id === id) return films[i];
    }
    return null;
  }

  function addParams(url, film, net) {
    try {
      var u = new URL(url);
      u.searchParams.set("utm_source", "pofraze");
      u.searchParams.set("utm_medium", "watch");
      u.searchParams.set("utm_campaign", net);
      u.searchParams.set("utm_content", String(film.id || ""));
      return u.toString();
    } catch (e) {
      return url;
    }
  }

  function wrapPartner(url) {
    var cfg = root.POFRAZE_CONFIG || {};
    var wrap = String((cfg.partners && cfg.partners.admitadWrap) || "").trim();
    if (!wrap) return url;
    var sep = wrap.indexOf("?") >= 0 ? "&" : "?";
    if (/ulp=/i.test(wrap)) return wrap + encodeURIComponent(url);
    return wrap + sep + "ulp=" + encodeURIComponent(url);
  }

  function watchLinks(film) {
    var q = encodeURIComponent(film.watchQuery);
    var raw = [
      {
        id: "kinopoisk",
        name: "Кинопоиск",
        href: "https://www.kinopoisk.ru/index.php?kp_query=" + q,
        primary: true,
      },
      {
        id: "ivi",
        name: "IVI",
        href: "https://www.ivi.ru/search/?q=" + q,
        primary: false,
      },
      {
        id: "okko",
        name: "Okko",
        href: "https://okko.tv/search/" + q,
        primary: false,
      },
      {
        id: "premier",
        name: "Premier",
        href: "https://premier.one/search?query=" + q,
        primary: false,
      },
    ];
    return raw.map(function (link) {
      var href = wrapPartner(addParams(link.href, film, link.id));
      return {
        id: link.id,
        name: link.name,
        href: href,
        primary: link.primary,
        sponsored: !!(root.POFRAZE_CONFIG && root.POFRAZE_CONFIG.partners && root.POFRAZE_CONFIG.partners.admitadWrap),
      };
    });
  }

  root.PoFrazeSearch = {
    search: search,
    getById: getById,
    similarWithWhy: similarWithWhy,
    watchLinks: watchLinks,
    layoutFix: layoutFix,
    vibeLabel: vibeLabel,
  };
})(window);
