(function (root) {
  var cfg = root.POFRAZE_CONFIG || {};
  var KEY = "pofraze-metrics";

  function id() {
    return Number(cfg.metricaId) || 0;
  }

  function consented() {
    try {
      return localStorage.getItem(KEY) === "1";
    } catch (e) {
      return false;
    }
  }

  function setConsent(on) {
    try {
      if (on) localStorage.setItem(KEY, "1");
      else localStorage.setItem(KEY, "0");
    } catch (e) {}
  }

  function loadMetrica() {
    var counter = id();
    if (!counter || root.ym) return;
    root.ym = root.ym || function () {
      (root.ym.a = root.ym.a || []).push(arguments);
    };
    root.ym.l = Date.now();
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/tag.js";
    document.head.appendChild(s);
    root.ym(counter, "init", {
      clickmap: true,
      referrer: document.referrer,
      accurateTrackBounce: true,
      webvisor: false,
    });
  }

  function goal(name, params) {
    var counter = id();
    if (!counter || !consented() || typeof root.ym !== "function") return;
    root.ym(counter, "reachGoal", name, params || {});
  }

  if (id() && consented()) loadMetrica();

  root.PoFrazeTrack = {
    needsBanner: function () {
      if (!id()) return false;
      try {
        return localStorage.getItem(KEY) == null;
      } catch (e) {
        return false;
      }
    },
    accept: function () {
      setConsent(true);
      loadMetrica();
    },
    decline: function () {
      setConsent(false);
    },
    goal: goal,
    search: function (q) {
      if (q && q.length >= 3) goal("search", { query: String(q).slice(0, 80) });
    },
    watch: function (filmId, net) {
      goal("watch", { film: filmId, net: net });
    },
  };
})(window);
