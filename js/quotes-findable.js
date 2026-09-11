(function () {
  function add(film, text) {
    var t = String(text || "").trim();
    if (t.length < 3) return;
    if (!film.quotes) film.quotes = [];
    if (film.quotes.indexOf(t) === -1) film.quotes.push(t);
  }

  (window.POFRAZE_FILMS || []).forEach(function (film) {
    add(film, film.title);
    add(film, film.originalTitle);
    add(film, film.watchQuery);
    add(film, film.wikiRu);
    add(film, film.wikiEn);
  });
})();
