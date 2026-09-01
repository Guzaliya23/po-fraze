(function (root) {
  var CACHE_KEY = "pofraze-posters-v2";
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

  function summaryUrl(lang, title) {
    return (
      "https://" +
      lang +
      ".wikipedia.org/api/rest_v1/page/summary/" +
      encodeURIComponent(title)
    );
  }

  function thumbFromPage(page) {
    if (!page) return "";
    if (page.thumbnail && page.thumbnail.source) return page.thumbnail.source;
    if (page.originalimage && page.originalimage.source) return page.originalimage.source;
    return "";
  }

  function fetchSummary(lang, title) {
    if (!title) return Promise.resolve("");
    return fetch(summaryUrl(lang, title))
      .then(function (res) {
        return res.json();
      })
      .then(thumbFromPage)
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
    if (film.originalTitle) {
      list.push(film.originalTitle + " " + film.year + " " + kind);
      list.push(film.originalTitle + " " + film.year);
      list.push(film.originalTitle + " " + kind);
    }
    list.push(name + " " + film.year + " " + kind);
    list.push(film.title + " " + film.year);
    list.push(name);
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
        return fetchSummary(lang, hit.title);
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
    if (cache[film.id] !== undefined) {
      return Promise.resolve(cache[film.id]);
    }
    var tasks = [];
    if (film.wikiEn) {
      tasks.push(function () {
        return fetchSummary("en", film.wikiEn);
      });
    }
    if (film.wikiRu) {
      tasks.push(function () {
        return fetchSummary("ru", film.wikiRu);
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
        cache[film.id] = url || "";
        save();
        return cache[film.id];
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
          if (cache[id]) {
            apply(entry.target, cache[id]);
            return;
          }
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
