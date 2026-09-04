(function () {
  var extra = {
    limitless: [
      "nzt",
      "энзет",
      "я вижу всё",
      "мозг на сто процентов",
      "eddie morra",
      "limitless",
    ],
    brother: [
      "в чем сила",
      "сила в правде брат",
      "данила багров",
      "крылья",
      "я тебя не трогал",
    ],
    "brother-2": [
      "вы кто такие",
      "давайте до свидания",
      "чикаго",
      "русский с американцем",
    ],
    "fight-club": [
      "второе правило бойцовского клуба",
      "его зовут тайлер дёрден",
      "мы продаём мыло",
      "ты не твои вещи",
      "first rule of fight club",
    ],
    matrix: [
      "there is no spoon",
      "ложку не существует",
      "follow the white rabbit",
      "red pill",
      "синяя таблетка",
      "нео",
      "я знаю кунг фу",
    ],
    inception: [
      "we need to go deeper",
      "идея как вирус",
      "kick",
      "тотем",
      "dream within a dream",
    ],
    pulp: [
      "royal with cheese",
      "big kahuna burger",
      "ezekiel 25 17",
      "танцуй",
      "чемоданчик марселласа",
    ],
    "diamond-arm": [
      "ключ от квартиры где деньги лежат",
      "наш человек в гаване",
      "чёрный кот",
      "сеня",
      "лучше гор могут быть только горы",
    ],
    "ivan-vasilievich": [
      "я требую продолжения банкета",
      "царь очень занят",
      "японский магнитофон",
      "машина времени шурика",
      "швед",
    ],
    "gentlemen-luck": [
      "птичку жалко",
      "кузькина мать",
      "доцент",
      "васютка",
    ],
    meeting: [
      "вор должен сидеть в тюрьме",
      "жили бы на одну зарплату",
      "шарапов",
      "жеглов",
    ],
    joker: [
      "you get what you deserve",
      "you wouldn't get it",
      "arthur fleck",
      "put on a happy face",
    ],
    "dark-knight": [
      "why so serious",
      "почему так серьёзно",
      "either die a hero",
      "live long enough to see yourself become the villain",
      "some men just want to watch the world burn",
    ],
    wolf: [
      "sell me this pen",
      "продай ручку",
      "jordan belfort",
      "i'm not leaving",
    ],
    social: [
      "a million dollars isn't cool",
      "you better lawyer up",
      "facebook",
      "winklevoss",
    ],
    drive: [
      "i drive",
      "five minutes",
      "scorpion jacket",
    ],
    interstellar: [
      "do not go gentle",
      "love is the one thing",
      "murphy's law",
      "black hole",
      "cooper",
    ],
    gladiator: [
      "are you not entertained",
      "strength and honor",
      "maximus",
      "руки в грязи",
    ],
    leon: [
      "i like milk",
      "plant",
      "mathilda",
      "everyone has a choice",
    ],
    shutter: [
      "this is a live monster",
      "which would be worse",
      "teddy daniels",
    ],
    "breaking-bad": [
      "i am the one who knocks",
      "say my name",
      "heisenberg",
      "yeah science",
      "i am the danger",
      "я тот кто стучит в дверь",
    ],
    got: [
      "winter is coming",
      "you know nothing jon snow",
      "a lannister always pays his debts",
      "chaos is a ladder",
      "драконы",
      "iron throne",
      "валенуар",
    ],
    "irony-fate": [
      "с легким паром",
      "третья улица строителей дом 25",
      "заливная рыба",
      "надежда",
      "ипполит",
    ],
    godfather: [
      "i'll make him an offer he can't refuse",
      "sleeps with the fishes",
      "leave the gun take the cannoli",
      "i'm gonna make him an offer",
    ],
    "star-wars": [
      "may the force be with you",
      "help me obi wan",
      "that's no moon",
      "use the force",
      "i am your father",
    ],
    empire: [
      "i am your father",
      "no i am your father",
      "do or do not there is no try",
      "luke i am your father",
      "я твой отец",
    ],
    forrest: [
      "life is like a box of chocolates",
      "run forrest run",
      "stupid is as stupid does",
      "jenny",
    ],
    shawshank: [
      "hope is a good thing",
      "get busy living",
      "andy dufresne",
      "red",
    ],
    "home-alone": [
      "keep the change ya filthy animal",
      "merry christmas ya filthy animal",
      "kevin mccallister",
    ],
    terminator: [
      "i'll be back",
      "hasta la vista baby",
      "i'll be back",
    ],
    "terminator-2": [
      "i'll be back",
      "hasta la vista baby",
      "come with me if you want to live",
      "я вернусь",
    ],
    casablanca: [
      "here's looking at you kid",
      "play it sam",
      "we'll always have paris",
    ],
    hp1: [
      "you're a wizard harry",
      "yer a wizard",
      "hogwarts",
      "ты волшебник гарри",
      "девять и три четверти",
    ],
    lotr: [
      "you shall not pass",
      "my precious",
      "one ring to rule them all",
      "frodo",
      "gandalf",
      "ты не пройдёшь",
    ],
    frozen: [
      "let it go",
      "the cold never bothered me",
      "do you want to build a snowman",
      "эльза",
    ],
    "iron-man": [
      "i am iron man",
      "jarvis",
      "i love you 3000",
    ],
    avengers: [
      "i am iron man",
      "avengers assemble",
      "on your left",
      "я железный человек",
    ],
    office: [
      "that's what she said",
      "bears beets battlestar galactica",
      "i declare bankruptcy",
    ],
    mandalorian: [
      "this is the way",
      "i have spoken",
      "baby yoda",
      "grogu",
    ],
    "death-note": [
      "i am justice",
      "kira",
      "я бог нового мира",
    ],
    "one-piece": [
      "i'm gonna be king of the pirates",
      "meat",
      "nakama",
    ],
    naruto: [
      "believe it",
      "dattebayo",
      "я стану хокаге",
    ],
    "white-sun": [
      "восток дело тонкое",
      "таможня дает добро",
      "гильзы",
      "петруха",
    ],
    mimino: [
      "ларису ивановну хочу",
      "палермо",
      "валерико",
    ],
    "dog-heart": [
      "разруха не в клозетах а в головах",
      "дать шприц",
      "абвырвалг",
    ],
    friends: [
      "how you doing",
      "we were on a break",
      "pivot",
      "central perk",
      "у нас был перерыв",
      "джо",
    ],
    stalker: [
      "зона",
      "комната",
      "желание",
      "проводник",
    ],
  };

  (window.POFRAZE_FILMS || []).forEach(function (film) {
    var add = extra[film.id];
    if (add) {
      add.forEach(function (q) {
        if (film.quotes.indexOf(q) === -1) film.quotes.push(q);
      });
    }
    film.quotes = film.quotes.filter(function (q) {
      var t = String(q || "").trim();
      if (t.length < 2 || t === "skip") return false;
      if (t.indexOf("insta") !== -1) return false;
      if (t === "discrete") return false;
      return true;
    });
  });

  var seen = {};
  window.POFRAZE_FILMS = window.POFRAZE_FILMS.filter(function (film) {
    if (film.watchQuery === "skip" || film.watchQuery === "skip-dup") return false;
    if (seen[film.id]) return false;
    seen[film.id] = true;
    return true;
  });
})();
