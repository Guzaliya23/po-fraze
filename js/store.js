(function (root) {
  var HISTORY = "pofraze-history";
  var SAVED = "pofraze-saved";

  function read(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || "[]");
    } catch (err) {
      return [];
    }
  }

  function write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function addHistory(query) {
    var q = String(query || "").trim();
    if (q.length < 3) return;
    var list = read(HISTORY).filter(function (item) {
      return item.toLowerCase() !== q.toLowerCase();
    });
    list.unshift(q);
    write(HISTORY, list.slice(0, 8));
  }

  function history() {
    return read(HISTORY);
  }

  function isSaved(id) {
    return read(SAVED).indexOf(id) !== -1;
  }

  function toggleSaved(id) {
    var list = read(SAVED);
    var i = list.indexOf(id);
    if (i === -1) list.unshift(id);
    else list.splice(i, 1);
    write(SAVED, list.slice(0, 40));
    return i === -1;
  }

  function savedIds() {
    return read(SAVED);
  }

  root.PoFrazeStore = {
    addHistory: addHistory,
    history: history,
    isSaved: isSaved,
    toggleSaved: toggleSaved,
    savedIds: savedIds,
  };
})(window);
