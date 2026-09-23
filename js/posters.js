(function (root) {
  var CACHE_KEY = "pofraze-posters-v5";
  var MISS_MS = 3 * 24 * 60 * 60 * 1000;
  var cache = {};
  try {
    cache = JSON.parse(localStorage.getItem(CACHE_KEY) || "{}");
  } catch (err) {
    cache = {};
  }

  var queue = [];
  var active = 0;

  function save() {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
    } catch (err) {}
  }

  function cacheGet(id) {
    var row = cache[id];
    if (row == null) return undefined;
    if (typeof row === "string") return row || undefined;
    if (row.url) return row.url;
    if (Date.now() - Number(row.t || 0) < MISS_MS) return "";
    return undefined;
  }

  function cacheSet(id, url) {
    if (url) cache[id] = { url: url, t: Date.now() };
    else cache[id] = { url: "", t: Date.now() };
    save();
  }

  function filmById(id) {
    var list = root.POFRAZE_FILMS || [];
    for (var i = 0; i < list.length; i += 1) {
      if (list[i].id === id) return list[i];
    }
    return null;
  }

  function wikiHost(lang) {
    return "https://" + lang + ".wikipedia.org/w/api.php";
  }

  function wikiDataId(film) {
    var m = String(film.id || "").match(/^wdq(\d+)$/i);
    return m ? "Q" + m[1] : "";
  }

  function commonsThumb(file) {
    return (
      "https://commons.wikimedia.org/wiki/Special:FilePath/" +
      encodeURIComponent(String(file || "").replace(/ /g, "_")) +
      "?width=480"
    );
  }

  function thumbFromSummary(page) {
    if (!page) return "";
    if (page.thumbnail && page.thumbnail.source) return page.thumbnail.source;
    if (page.originalimage && page.originalimage.source) return page.originalimage.source;
    return "";
  }

  function fetchSummary(lang, title) {
    if (!title) return Promise.resolve("");
    return fetch(
      "https://" +
        lang +
        ".wikipedia.org/api/rest_v1/page/summary/" +
        encodeURIComponent(title)
    )
      .then(function (res) {
        return res.json();
      })
      .then(thumbFromSummary)
      .catch(function () {
        return "";
      });
  }

  function fetchPageImage(lang, title) {
    if (!title) return Promise.resolve("");
    var url =
      wikiHost(lang) +
      "?action=query&format=json&origin=*&prop=pageimages&pithumbsize=480&redirects=1&titles=" +
      encodeURIComponent(title);
    return fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        var pages = data && data.query && data.query.pages;
        if (!pages) return "";
        var id;
        for (id in pages) {
          if (Object.prototype.hasOwnProperty.call(pages, id)) {
            var th = pages[id].thumbnail;
            if (th && th.source) return th.source;
          }
        }
        return "";
      })
      .catch(function () {
        return "";
      });
  }

  function fetchWikidataImage(qid) {
    if (!qid) return Promise.resolve("");
    var url =
      "https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&origin=*&props=claims&ids=" +
      encodeURIComponent(qid);
    return fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        var ent = data && data.entities && data.entities[qid];
        var claim =
          ent &&
          ent.claims &&
          ent.claims.P18 &&
          ent.claims.P18[0] &&
          ent.claims.P18[0].mainsnak &&
          ent.claims.P18[0].mainsnak.datavalue &&
          ent.claims.P18[0].mainsnak.datavalue.value;
        return claim ? commonsThumb(claim) : "";
      })
      .catch(function () {
        return "";
      });
  }

  function searchQueryList(film, lang) {
    var kind =
      film.type === "сериал"
        ? lang === "ru"
          ? "сериал"
          : "television series"
        : lang === "ru"
          ? "фильм"
          : "film";
    var name =
      lang === "en" && film.originalTitle ? film.originalTitle : film.title;
    var list = [];
    if (lang === "en" && film.wikiEn) list.push(film.wikiEn);
    if (lang === "ru" && film.wikiRu) list.push(film.wikiRu);
    var year = Number(film.year) >= 1900 ? String(film.year) : "";
    if (film.originalTitle) {
      if (year) list.push(film.originalTitle + " " + year + " " + kind);
      if (year) list.push(film.originalTitle + " " + year);
      list.push(film.originalTitle + " " + kind);
    }
    if (year) list.push(name + " " + year + " " + kind);
    if (year) list.push(film.title + " " + year);
    list.push(name);
    list.push(film.title);
    return list.filter(function (q, i, arr) {
      return q && arr.indexOf(q) === i;
    });
  }

  function requestThumb(lang, query) {
    var searchUrl =
      wikiHost(lang) +
      "?action=query&list=search&format=json&origin=*&srlimit=1&srsearch=" +
      encodeURIComponent(query);
    return fetch(searchUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        var hit =
          data &&
          data.query &&
          data.query.search &&
          data.query.search[0];
        if (!hit || !hit.title) return "";
        return fetchPageImage(lang, hit.title).then(function (url) {
          return url || fetchSummary(lang, hit.title);
        });
      })
      .catch(function () {
        return "";
      });
  }

  function firstUrl(tasks) {
    return tasks.reduce(function (chain, fn) {
      return chain.then(function (url) {
        if (url) return url;
        return fn();
      });
    }, Promise.resolve(""));
  }

  function fetchUrl(film) {
    var hit = cacheGet(film.id);
    if (hit !== undefined) return Promise.resolve(hit);
    var tasks = [];
    var qid = wikiDataId(film);
    if (film.wikiEn) {
      tasks.push(function () {
        return fetchPageImage("en", film.wikiEn);
      });
      tasks.push(function () {
        return fetchSummary("en", film.wikiEn);
      });
    }
    if (film.wikiRu) {
      tasks.push(function () {
        return fetchPageImage("ru", film.wikiRu);
      });
      tasks.push(function () {
        return fetchSummary("ru", film.wikiRu);
      });
    }
    if (qid) {
      tasks.push(function () {
        return fetchWikidataImage(qid);
      });
    }
    var first = film.originalTitle || film.wikiEn ? "en" : "ru";
    var second = first === "en" ? "ru" : "en";
    searchQueryList(film, first)
      .slice(0, 4)
      .forEach(function (q) {
        tasks.push(function () {
          return requestThumb(first, q);
        });
      });
    searchQueryList(film, second)
      .slice(0, 3)
      .forEach(function (q) {
        tasks.push(function () {
          return requestThumb(second, q);
        });
      });
    return firstUrl(tasks)
      .catch(function () {
        return "";
      })
      .then(function (url) {
        cacheSet(film.id, url || "");
        return url || "";
      });
  }

  function pump() {
    while (active < 4 && queue.length) {
      (function (job) {
        active += 1;
        fetchUrl(job.film)
          .then(function (url) {
            if (url) job.onUrl(url);
          })
          .finally(function () {
            active -= 1;
            pump();
          });
      })(queue.shift());
    }
  }

  function apply(el, url) {
    var img = el.querySelector("img");
    if (!img || !url) return;
    img.onload = function () {
      el.classList.add("has-image");
    };
    img.onerror = function () {};
    img.alt = "";
    img.src = url;
  }

  function hydrate(scope) {
    var nodes = (scope || document).querySelectorAll("[data-poster-id]");
    if (!nodes.length) return;
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          var id = entry.target.getAttribute("data-poster-id");
          var film = filmById(id);
          if (!film) return;
          var ready = cacheGet(id);
          if (ready) {
            apply(entry.target, ready);
            return;
          }
          if (ready === "") return;
          queue.push({
            film: film,
            onUrl: function (url) {
              apply(entry.target, url);
            },
          });
          pump();
        });
      },
      { rootMargin: "160px" }
    );
    nodes.forEach(function (node) {
      io.observe(node);
    });
  }

  root.PoFrazePosters = { hydrate: hydrate };
})(window);
