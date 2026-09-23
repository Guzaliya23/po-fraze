(function () {
  function norm(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/\u0451/g, "\u0435")
      .replace(/\([^)]*\)/g, " ")
      .replace(/[^a-z\u0430-\u044f0-9]+/g, " ")
      .trim();
  }

  var list = window.POFRAZE_FILMS || [];
  var curated = [];
  var wiki = [];
  list.forEach(function (film) {
    if (film.watchQuery === "skip" || film.watchQuery === "skip-dup") return;
    if (String(film.id).indexOf("wdq") === 0) wiki.push(film);
    else curated.push(film);
  });

  function mergeQuotes(into, from) {
    if (!from || !from.quotes) return;
    if (!into.quotes) into.quotes = [];
    from.quotes.forEach(function (q) {
      if (into.quotes.indexOf(q) === -1) into.quotes.push(q);
    });
  }

  var seen = {};
  function mark(film) {
    var a = norm(film.originalTitle);
    var b = norm(film.title);
    if (a) seen[a] = film;
    if (b) seen[b] = film;
  }
  function known(film) {
    var a = norm(film.originalTitle);
    var b = norm(film.title);
    return (a && seen[a]) || (b && seen[b]);
  }

  var unique = [];
  curated.forEach(function (film) {
    var hit = known(film);
    if (hit) {
      mergeQuotes(hit, film);
      return;
    }
    mark(film);
    unique.push(film);
  });

  var extra = [];
  wiki.forEach(function (film) {
    var hit = known(film);
    if (hit) {
      mergeQuotes(hit, film);
      return;
    }
    mark(film);
    extra.push(film);
  });

  window.POFRAZE_FILMS = unique.concat(extra);
})();
