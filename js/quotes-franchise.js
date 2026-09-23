(function () {
  var packs = [
    {
      re: /гарри поттер|harry potter/,
      lines: [
        "ты волшебник гарри",
        "хогвартс",
        "платформа девять и три четверти",
        "экспеллиармус",
      ],
    },
    {
      re: /властелин колец|lord of the rings|хоббит|the hobbit/,
      lines: ["ты не пройдёшь", "одно кольцо", "моя прелесть", "гендальф"],
    },
    {
      re: /зв[её]здн\w+ войн|star wars/,
      lines: ["да пребудет с тобой сила"],
    },
    {
      re: /мандал[ао]рец|the mandalorian/,
      lines: ["таков путь", "это путь"],
    },
    {
      re: /андор|andor/,
      lines: ["восстания строятся на надежде"],
    },
    {
      re: /форсаж|fast and the furious|furious \d|tokyo drift/,
      lines: ["семья торетто", "я живу на четверть мили", "доминик"],
    },
    {
      re: /пираты карибского|pirates of the caribbean/,
      lines: ["где весь ром", "джек воробей", "компас"],
    },
    {
      re: /мстители|avengers/,
      lines: ["мстители общий сбор"],
    },
    {
      re: /железный человек|iron man/,
      lines: ["я железный человек"],
    },
    {
      re: /стражи галактики|guardians of the galaxy/,
      lines: ["я есть грут"],
    },
    {
      re: /человек-паук|spider-man|человек паук/,
      lines: ["с большой силой приходит большая ответственность"],
    },
    {
      re: /терминатор|terminator/,
      lines: ["я вернусь", "hasta la vista baby"],
    },
    {
      re: /чужой:|чужие\b|alien \(|aliens\b|alien:/,
      lines: ["в космосе никто не услышит твой крик"],
    },
    {
      re: /джон уик|john wick/,
      lines: ["баба яга", "континенталь"],
    },
    {
      re: /голодн\w+ игр|hunger games/,
      lines: ["да пребудут шансы в вашу пользу", "кетнисс"],
    },
    {
      re: /сумерки|twilight saga|the twilight/,
      lines: ["лев полюбил ягнёнка", "эдвард каллен"],
    },
    {
      re: /трансформер|transformers/,
      lines: ["автоботы", "оптимус прайм"],
    },
    {
      re: /миссия невыполнима|mission:? impossible/,
      lines: ["плёнка самоуничтожится", "если вы примете это задание"],
    },
    {
      re: /кр[её]стный отец|the godfather/,
      lines: ["предложение от которого невозможно отказаться"],
    },
    {
      re: /матрица|the matrix/,
      lines: ["ложки нет", "красная таблетка"],
    },
    {
      re: /один дома|home alone/,
      lines: ["счастливого рождества грязное животное"],
    },
    {
      re: /кингсмен|kingsman/,
      lines: ["манеры делают человека"],
    },
    {
      re: /казино рояль|скайфолл|не время умирать|casino royale|skyfall|james bond|\b007\b/,
      lines: ["бонд джеймс бонд"],
    },
    {
      re: /борн|bourne identity|bourne supremacy|bourne ultimatum/,
      lines: ["ясон борн"],
    },
    {
      re: /история игрушек|toy story/,
      lines: ["к бесконечности и далее"],
    },
    {
      re: /форс-?мажор|suits\b/,
      lines: ["харви спектр", "я не учился в гарварде"],
    },
    {
      re: /менталист|the mentalist/,
      lines: ["красный джон", "патрик джейн"],
    },
    {
      re: /игра в кальмара|squid game/,
      lines: ["красный свет зелёный свет", "игрок 456"],
    },
    {
      re: /фоллаут|fallout/,
      lines: ["война никогда не меняется"],
    },
  ];

  function hay(film) {
    return [
      film.title,
      film.originalTitle,
      film.watchQuery,
      film.wikiEn,
      film.wikiRu,
    ]
      .join(" ")
      .toLowerCase()
      .replace(/ё/g, "е");
  }

  (window.POFRAZE_FILMS || []).forEach(function (film) {
    var text = hay(film);
    if (!film.quotes) film.quotes = [];
    packs.forEach(function (pack) {
      if (!pack.re.test(text)) return;
      pack.lines.forEach(function (q) {
        if (film.quotes.indexOf(q) === -1) film.quotes.push(q);
      });
    });
  });
})();
