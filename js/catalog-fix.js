(function () {
  function key(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/ё/g, "е")
      .replace(/^the\s+/, "")
      .replace(/[^a-zа-я0-9]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  var years = {
    interstellar: 2014,
    "star wars episode iii revenge of the sith": 2005,
    "avatar the way of water": 2022,
    orlando: 1992,
    "city of god": 2002,
    "terminator 2 judgment day": 1991,
    "the matrix": 1999,
    matrix: 1999,
  };

  var extraQuotes = {
    wdq42051: ["да пребудет с тобой сила", "исполни приказ"],
    wdq3604746: ["эйва", "это наш дом"],
    wdq13417189: ["не уходи смиренно в эту добрую ночь"],
  };

  (window.POFRAZE_FILMS || []).forEach(function (film) {
    var y = years[key(film.originalTitle)] || years[key(film.title)];
    if (y && (film.year > y + 2 || film.year < 1888)) film.year = y;

    var titleK = key(film.title);
    var origK = key(film.originalTitle);
    film.quotes = (film.quotes || []).filter(function (q) {
      var k = key(q);
      if (!k) return false;
      if (k === titleK || k === origK) return false;
      return true;
    });
    var extra = extraQuotes[film.id];
    if (extra) {
      extra.forEach(function (q) {
        if (film.quotes.indexOf(q) === -1) film.quotes.push(q);
      });
    }
    if (!film.quotes.length) film.quotes = [film.title];
  });
})();
