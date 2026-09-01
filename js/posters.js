(function (root) {
  var CACHE_KEY = "pofraze-posters-v1";
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

  function searchQuery(film, lang) {
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
    return (name + " " + film.year + " " + kind).trim();
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
        var summary =
          "https://" +
          lang +
          ".wikipedia.org/api/rest_v1/page/summary/" +
          encodeURIComponent(hit.title);
        return fetch(summary).then(function (res) {
          return res.json();
        }).then(function (page) {
          if (page.thumbnail && page.thumbnail.source) return page.thumbnail.source;
          if (page.originalimage && page.originalimage.source) {
            return page.originalimage.source;
          }
          return "";
        });
      });
  }

  function fetchUrl(film) {
    if (cache[film.id] !== undefined) {
      return Promise.resolve(cache[film.id]);
    }
    var first = film.originalTitle ? "en" : "ru";
    var second = first === "en" ? "ru" : "en";
    return requestThumb(first, searchQuery(film, first))
      .then(function (url) {
        if (url) return url;
        return requestThumb(second, searchQuery(film, second));
      })
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
    while (active < 3 && queue.length) {
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
      { rootMargin: "120px" }
    );
    nodes.forEach(function (node) {
      io.observe(node);
    });
  }

  root.PoFrazePosters = { hydrate: hydrate };
})(window);
