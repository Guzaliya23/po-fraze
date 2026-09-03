(function () {
  function add(film, q) {
    var t = String(q || "").replace(/\s+/g, " ").trim();
    if (t.length < 6) return;
    if (film.quotes.indexOf(t) === -1) film.quotes.push(t);
  }

  (window.POFRAZE_FILMS || []).forEach(function (film) {
    var keep = film.quotes.length;
    var seen = {};
    film.quotes.slice().forEach(function (quote) {
      var words = String(quote || "")
        .toLowerCase()
        .replace(/ё/g, "е")
        .replace(/[^a-zа-я0-9\s]/g, " ")
        .split(/\s+/)
        .filter(function (w) {
          return w.length >= 3;
        });
      var n;
      var i;
      for (n = 2; n <= Math.min(5, words.length); n += 1) {
        for (i = 0; i + n <= words.length; i += 1) {
          var chunk = words.slice(i, i + n);
          var long = chunk.some(function (w) {
            return w.length >= 5;
          });
          if (n === 2 && !long) continue;
          var phrase = chunk.join(" ");
          if (phrase.length < 8) continue;
          if (seen[phrase]) continue;
          seen[phrase] = 1;
          add(film, phrase);
        }
      }
    });
    if (film.quotes.length > 90) {
      film.quotes = film.quotes.slice(0, Math.max(keep, 90));
    }
  });
})();
