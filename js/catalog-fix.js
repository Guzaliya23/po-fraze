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

  function yearFromWiki(film) {
    var texts = [film.wikiEn, film.wikiRu, film.originalTitle, film.title];
    var i;
    var m;
    for (i = 0; i < texts.length; i += 1) {
      m = String(texts[i] || "").match(/\((\d{4})\s+film\)/i);
      if (m) return Number(m[1]);
      m = String(texts[i] || "").match(/фильм,\s*(\d{4})/i);
      if (m) return Number(m[1]);
      m = String(texts[i] || "").match(/\((\d{4})\)/);
      if (m) {
        var y = Number(m[1]);
        if (y >= 1888 && y <= 2030) return y;
      }
    }
    return 0;
  }

  var years = {
    interstellar: 2014,
    "star wars episode iii revenge of the sith": 2005,
    "avatar the way of water": 2022,
    orlando: 1992,
    "city of god": 2002,
    "terminator 2 judgment day": 1991,
    matrix: 1999,
    cars: 2006,
    avatar: 2009,
    gladiator: 2000,
    "dark knight": 2008,
    "dark knight rises": 2012,
    "harry potter and the goblet of fire": 2005,
    "harry potter and the prisoner of azkaban": 2004,
    "apocalypse now": 1979,
    "great dictator": 1940,
    "american beauty": 1999,
    "life is beautiful": 1997,
  };

  var extraQuotes = {
    wdq42051: ["исполни приказ", "приказ 66"],
    wdq3604746: ["это наш дом"],
  };

  var vibes = {
    wdq13417189: ["space", "family", "slow"],
    wdq42051: ["fantasy", "war", "space"],
    wdq3604746: ["fantasy", "family", "space"],
    wdq188384: ["slow", "romance", "mind-power"],
  };

  (window.POFRAZE_FILMS || []).forEach(function (film) {
    var extracted = yearFromWiki(film);
    var y = years[key(film.originalTitle)] || years[key(film.title)] || extracted;
    var nowY = 2026;
    if (y) {
      if (!film.year || film.year < 1888 || film.year > nowY + 1 || Math.abs(film.year - y) >= 3) {
        film.year = y;
      }
    }
    if (vibes[film.id]) film.vibes = vibes[film.id];

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
