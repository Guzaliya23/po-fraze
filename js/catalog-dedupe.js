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
    if (String(film.id).indexOf("wdq") === 0) wiki.push(film);
    else curated.push(film);
  });

  var seen = {};
  function mark(film) {
    var a = norm(film.originalTitle);
    var b = norm(film.title);
    if (a) seen[a] = true;
    if (b) seen[b] = true;
  }
  function known(film) {
    var a = norm(film.originalTitle);
    var b = norm(film.title);
    return (a && seen[a]) || (b && seen[b]);
  }

  curated.forEach(mark);
  var extra = [];
  wiki.forEach(function (film) {
    if (known(film)) return;
    mark(film);
    extra.push(film);
  });

  window.POFRAZE_FILMS = curated.concat(extra);
})();
