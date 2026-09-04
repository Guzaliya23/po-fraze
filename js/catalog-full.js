(function () {
  var palette = [
    "#c9a36a", "#8fa3b8", "#d4b8a0", "#7dcf9f", "#9bb8d4", "#e0a070",
    "#e8d48a", "#d9784a", "#9aa0aa", "#e2c27a", "#7aa0d4", "#e07090",
    "#8ab4d4", "#c47a3a", "#b0a090", "#c9d48a", "#d0b48c", "#f090c0",
  ];

  function color(id) {
    var n = 0;
    for (var i = 0; i < id.length; i += 1) n += id.charCodeAt(i);
    return palette[n % palette.length];
  }

  function ini(title) {
    var p = title.replace(/[«»"]/g, "").split(/\s+/).filter(Boolean);
    if (!p.length) return "??";
    if (p.length === 1) return p[0].slice(0, 2).toUpperCase();
    return (p[0][0] + p[1][0]).toUpperCase();
  }

  function f(id, title, original, year, type, vibes, quotes, watch) {
    return {
      id: id,
      title: title,
      originalTitle: original || "",
      year: year,
      type: type,
      initials: ini(title),
      color: color(id),
      vibes: vibes,
      quotes: quotes,
      watchQuery: watch || title,
    };
  }

  window.pofrazeFilm = f;

  window.POFRAZE_FILMS = window.POFRAZE_FILMS.concat([
    f("godfather", "Крёстный отец", "The Godfather", 1972, "фильм", ["crime", "family", "slow"], ["я сделаю ему предложение от которого он не сможет отказаться", "это семейное дело", "сонни"], "Крёстный отец"),
    f("godfather-2", "Крёстный отец 2", "The Godfather Part II", 1974, "фильм", ["crime", "family", "slow"], ["храните друзей близко", "врагов ещё ближе", "майкл корлеоне"], "Крёстный отец 2"),
    f("goodfellas", "Славные парни", "Goodfellas", 1990, "фильм", ["crime", "chaotic", "street"], ["я всегда хотел быть гангстером", "как в песне", "весёлый"], "Славные парни"),
    f("scarface", "Лицо со шрамом", "Scarface", 1983, "фильм", ["crime", "ambition", "chaotic"], ["скажи привет моему маленькому другу", "мир мой", "кокаин"], "Лицо со шрамом"),
    f("taxi-driver", "Таксист", "Taxi Driver", 1976, "фильм", ["dark", "street", "slow"], ["ты говоришь со мной", "городской дождь", "travis"], "Таксист"),
    f("silence-lambs", "Молчание ягнят", "The Silence of the Lambs", 1991, "фильм", ["dark", "mind-power", "slow"], ["good evening clarice", "fava beans and a nice chianti", "Hannibal"], "Молчание ягнят"),
    f("se7en", "Семь", "Se7en", 1995, "фильм", ["dark", "crime", "slow"], ["что в коробке", "семь смертных грехов", "дождь"], "Семь"),
    f("usual-suspects", "Подозрительные лица", "The Usual Suspects", 1995, "фильм", ["crime", "mind-power", "heist"], ["кто такой кайзер сёзе", "величайший трюк дьявола", "verbal"], "Подозрительные лица"),
    f("die-hard", "Крепкий орешек", "Die Hard", 1988, "фильм", ["tempo", "crime", "irony"], ["йиппи кай эй", "теперь я босиком", "наккатоми"], "Крепкий орешек"),
    f("jaws", "Челюсти", "Jaws", 1975, "фильм", ["horror", "tempo", "slow"], ["нам понадобится лодка побольше", "акула", "пляж закрыт"], "Челюсти"),
    f("alien", "Чужой", "Alien", 1979, "фильм", ["horror", "space", "slow"], ["в космосе никто не услышит твой крик", "ксеноморф", "рипли"], "Чужой"),
    f("aliens", "Чужие", "Aliens", 1986, "фильм", ["horror", "tempo", "war"], ["get away from her you bitch", "морпехи", "рипли"], "Чужие"),
    f("predator", "Хищник", "Predator", 1987, "фильм", ["tempo", "war", "horror"], ["если оно кровоточит мы можем его убить", "джунгли", "голландец"], "Хищник"),
    f("rocky", "Рокки", "Rocky", 1976, "фильм", ["sport", "ambition", "family"], ["адриан", "yo adrian", "я не останусь на полу", "филадельфия"], "Рокки"),
    f("star-wars", "Звёздные войны: Новая надежда", "Star Wars", 1977, "фильм", ["fantasy", "space", "war"], ["да пребудет с тобой сила", "это не луна", "эти не те дроиды"], "Звёздные войны Новая надежда"),
    f("empire", "Империя наносит ответный удар", "The Empire Strikes Back", 1980, "фильм", ["fantasy", "space", "family"], ["я твой отец", "нет это неправда", "йода"], "Империя наносит ответный удар"),
    f("indiana", "Индиана Джонс: В поисках утраченного ковчега", "Raiders of the Lost Ark", 1981, "фильм", ["tempo", "comedy", "fantasy"], ["это принадлежит в музее", "змеи почему змеи", "ковчег"], "Индиана Джонс ковчег"),
    f("jurassic", "Парк Юрского периода", "Jurassic Park", 1993, "фильм", ["tempo", "kids", "horror"], ["жизнь находит путь", "у нас динозавры", "не экономьте на охране"], "Парк Юрского периода"),
    f("et", "Инопланетянин", "E.T.", 1982, "фильм", ["kids", "family", "space"], ["phone home", "позвони домой", "et"], "Инопланетянин"),
    f("kill-bill", "Убить Билла", "Kill Bill", 2003, "фильм", ["tempo", "crime", "dark"], ["жёлтый комбинезон", "five point palm exploding heart technique", "невеста"], "Убить Билла"),
    f("django", "Джанго освобождённый", "Django Unchained", 2012, "фильм", ["war", "crime", "irony"], ["i like the way you die boy", "the d is silent", "я джанго"], "Джанго освобождённый"),
    f("inglourious", "Бесславные ублюдки", "Inglourious Basterds", 2009, "фильм", ["war", "irony", "dark"], ["я говорю на итальянском", "карточка", "нацисты"], "Бесславные ублюдки"),
    f("reservoir", "Бешеные псы", "Reservoir Dogs", 1992, "фильм", ["crime", "heist", "chaotic"], ["кто кого сдал", "ухо", "мистер розовый"], "Бешеные псы"),
    f("amelie", "Амели", "Amélie", 2001, "фильм", ["romance", "comedy", "slick-urban"], ["маленькие радости", "монмартр", "гном"], "Амели"),
    f("life-beautiful", "Жизнь прекрасна", "Life Is Beautiful", 1997, "фильм", ["family", "war", "irony"], ["это игра", "концлагерь", "папа"], "Жизнь прекрасна"),
    f("spirited", "Унесённые призраками", "Spirited Away", 2001, "фильм", ["fantasy", "kids", "slow"], ["хаку", "баня духов", "тихиро"], "Унесённые призраками"),
    f("your-name", "Твоё имя", "Your Name", 2016, "фильм", ["romance", "fantasy", "kids"], ["как тебя зовут", "комета", "тела меняются"], "Твоё имя"),
    f("oldboy", "Олдбой", "Oldboy", 2003, "фильм", ["dark", "crime", "chaotic"], ["15 лет", "молоток", "кто меня закрыл"], "Олдбой"),
    f("train-busan", "Поезд в Пусан", "Train to Busan", 2016, "фильм", ["horror", "tempo", "family"], ["зомби в поезде", "пусан", "отец"], "Поезд в Пусан"),
    f("arrival", "Прибытие", "Arrival", 2016, "фильм", ["space", "slow", "mind-power"], ["язык меняет мышление", "гептаподы", "время"], "Прибытие"),
    f("martian", "Марсианин", "The Martian", 2015, "фильм", ["space", "comedy", "tempo"], ["я буду заниматься наукой", "картошка", "марс"], "Марсианин"),
    f("gravity", "Гравитация", "Gravity", 2013, "фильм", ["space", "slow", "tempo"], ["отсоединись", "кислород", "земля"], "Гравитация"),
    f("lalaland", "Ла-Ла Ленд", "La La Land", 2016, "фильм", ["romance", "ambition", "slick-urban"], ["город звёзд", "джаз", "лос анджелес"], "Ла-Ла Ленд"),
    f("get-out", "Прочь", "Get Out", 2017, "фильм", ["horror", "mind-power", "dark"], ["погружение", "чай", "уезжай"], "Прочь"),
    f("quiet-place", "Тихое место", "A Quiet Place", 2018, "фильм", ["horror", "family", "slow"], ["не издавай звука", "монстры слышат", "беременность"], "Тихое место"),
    f("conjuring", "Заклятие", "The Conjuring", 2013, "фильм", ["horror", "family", "dark"], ["эннбель", "warren", "дом"], "Заклятие"),
    f("it", "Оно", "It", 2017, "фильм", ["horror", "kids", "dark"], ["мы все плывём", "клоун пеннивайз", "дерри"], "Оно"),
    f("scream", "Крик", "Scream", 1996, "фильм", ["horror", "irony", "tempo"], ["какой твой любимый фильм ужасов", "правила ужастиков", "кто звонит"], "Крик"),
    f("frozen", "Холодное сердце", "Frozen", 2013, "фильм", ["kids", "fantasy", "family"], ["отпусти и забудь", "let it go", "эльза"], "Холодное сердце"),
    f("moana", "Моана", "Moana", 2016, "фильм", ["kids", "fantasy", "family"], ["океан выбрал", "maui", "остров"], "Моана"),
    f("toy-story", "История игрушек", "Toy Story", 1995, "фильм", ["kids", "comedy", "family"], ["до бесконечности и далее", "я ковбой", "базз"], "История игрушек"),
    f("nemo", "В поисках Немо", "Finding Nemo", 2003, "фильм", ["kids", "family", "comedy"], ["просто плыви", "немо", "акулы"], "В поисках Немо"),
    f("up", "Вверх", "Up", 2009, "фильм", ["kids", "family", "romance"], ["приключение ждёт", "шарики", "элли"], "Вверх"),
    f("coco", "Тайна Коко", "Coco", 2017, "фильм", ["kids", "family", "fantasy"], ["remember me", "помните меня", "гитара"], "Тайна Коко"),
    f("inside-out", "Головоломка", "Inside Out", 2015, "фильм", ["kids", "mind-power", "comedy"], ["радость", "печаль", "штаб эмоций"], "Головоломка"),
    f("walle", "ВАЛЛ-И", "WALL·E", 2008, "фильм", ["kids", "space", "romance"], ["eve", "земля замусорена", "робот"], "ВАЛЛ-И"),
    f("httyd", "Как приручить дракона", "How to Train Your Dragon", 2010, "фильм", ["kids", "fantasy", "family"], ["беззубик", "викинг не дружит с драконом", "иккинг"], "Как приручить дракона"),
    f("despicable", "Гадкий я", "Despicable Me", 2010, "фильм", ["kids", "comedy", "family"], ["миньоны", "я злодей", "гру"], "Гадкий я"),
    f("iron-man", "Железный человек", "Iron Man", 2008, "фильм", ["tempo", "ambition", "comedy"], ["я железный человек", "джарвис", "старк"], "Железный человек"),
    f("guardians", "Стражи Галактики", "Guardians of the Galaxy", 2014, "фильм", ["comedy", "space", "tempo"], ["я грут", "i am groot", "микс кассета"], "Стражи Галактики"),
    f("black-panther", "Чёрная пантера", "Black Panther", 2018, "фильм", ["tempo", "family", "fantasy"], ["ваканда навсегда", "wakanda forever", "баст"], "Чёрная пантера"),
    f("logan", "Логан", "Logan", 2017, "фильм", ["dark", "family", "slow"], ["я старый", "росомаха", "лоры"], "Логан"),
    f("dark-knight-rises", "Тёмный рыцарь: Возрождение легенды", "The Dark Knight Rises", 2012, "фильм", ["dark", "crime", "slick-urban"], ["зачем нам орёл", "бэйн", "готэм"], "Тёмный рыцарь Возрождение"),
  ]);
  window.POFRAZE_ADD = f;
})();
