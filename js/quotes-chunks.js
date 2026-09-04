(function () {
  var STOP = {
    the: 1,
    and: 1,
    you: 1,
    that: 1,
    this: 1,
    for: 1,
    with: 1,
    are: 1,
    was: 1,
    not: 1,
    but: 1,
    his: 1,
    her: 1,
    she: 1,
    him: 1,
    they: 1,
    have: 1,
    from: 1,
    это: 1,
    что: 1,
    как: 1,
    для: 1,
    или: 1,
    его: 1,
    ее: 1,
    её: 1,
    она: 1,
    они: 1,
    был: 1,
    была: 1,
    мне: 1,
    тебя: 1,
    тебя: 1,
    все: 1,
    ещё: 1,
    еще: 1,
  };

  function words(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/ё/g, "е")
      .replace(/[^a-zа-я0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")
      .filter(function (w) {
        return w.length >= 2;
      });
  }

  function useful(chunk) {
    var w = chunk.split(" ");
    if (w.length < 3) return false;
    var real = 0;
    for (var i = 0; i < w.length; i += 1) {
      if (!STOP[w[i]] && w[i].length > 2) real += 1;
    }
    return real >= 2 && chunk.length >= 10 && chunk.length <= 80;
  }

  (window.POFRAZE_FILMS || []).forEach(function (film) {
    if (!film.quotes) return;
    var extra = [];
    var seen = {};
    film.quotes.forEach(function (q) {
      seen[String(q).toLowerCase()] = 1;
    });
    film.quotes.forEach(function (q) {
      if (extra.length >= 10) return;
      var w = words(q);
      if (w.length < 4) return;
      var n;
      for (n = 3; n <= 5; n += 1) {
        if (w.length < n) continue;
        var i;
        for (i = 0; i <= w.length - n; i += 1) {
          var chunk = w.slice(i, i + n).join(" ");
          if (!useful(chunk) || seen[chunk]) continue;
          seen[chunk] = 1;
          extra.push(chunk);
          if (extra.length >= 10) return;
        }
      }
    });
    extra.forEach(function (c) {
      film.quotes.push(c);
    });
  });
})();
