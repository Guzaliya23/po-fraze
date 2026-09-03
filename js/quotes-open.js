(function () {
  function norm(s) {
    return String(s || '')
      .toLowerCase()
      .replace(/\u0451/g, '\u0435')
      .replace(/\([^)]*\)/g, ' ')
      .replace(/[^a-z\u0430-\u044f0-9]+/g, ' ')
      .trim();
  }
  var map = {
    "»": [
      "Villa Balbianello",
      "Вилла Балбьянелло",
      "Felix Leiter",
      "James Bond",
      "Джеймс Бонд",
      "Mr. White",
      "Феликс Лейтер",
      "Steven Obanno",
      "Alexander Dimitrios",
      "Александр Димитриос",
      "Le Chiffre",
      "мистер Уайт",
      "Vesper Lynd",
      "Веспер Линд",
      "Adolph Gettler",
      "Villa La Gaeta",
      "René Mathis",
      "Рене Матис"
    ],
    "007 »": [
      "James Bond",
      "Gareth Mallory",
      "Гарет Мэллори",
      "Джеймс Бонд",
      "Eve Moneypenny",
      "Ив Манипенни",
      "Bill Tanner",
      "Билл Таннер",
      "Miss Moneypenny",
      "мисс Манипенни",
      "Raoul Silva",
      "Рауль Сильва"
    ],
    "101": [
      "Roger Radcliffe",
      "Cruella de Vil",
      "Anita Radcliffe",
      "Стервелла Де Виль"
    ],
    "101 dalmatians": [
      "Roger Radcliffe",
      "Cruella de Vil",
      "Anita Radcliffe",
      "Стервелла Де Виль"
    ],
    "12": [
      "Присяжный № 2",
      "Juror #10",
      "Juror #11",
      "Juror n.12",
      "Присяжный № 1",
      "Присяжный № 10",
      "Присяжный № 11",
      "Присяжный № 3",
      "Присяжный № 4",
      "Присяжный № 5",
      "Присяжный № 6",
      "Присяжный № 7",
      "Присяжный № 8",
      "Присяжный № 9"
    ],
    "12 angry men": [
      "Присяжный № 2",
      "Juror #10",
      "Juror #11",
      "Juror n.12",
      "Присяжный № 1",
      "Присяжный № 10",
      "Присяжный № 11",
      "Присяжный № 12",
      "Присяжный № 3",
      "Присяжный № 4",
      "Присяжный № 5",
      "Присяжный № 6",
      "Присяжный № 7",
      "Присяжный № 8",
      "Присяжный № 9"
    ],
    "13": [
      "Henry Hurt"
    ],
    "2": [
      "Michael Ransom",
      "Майкл Рэнсом",
      "Johnny Blaze",
      "Призрачный гонщик (Джонни Блейз)",
      "Henryk Kwinto",
      "Claudia Wolf",
      "Kathryn Merteuil",
      "Кэтрин Мёртей",
      "Джонни Блэйз",
      "Вальверде",
      "John McClane",
      "Джон Макклейн",
      "Val Verde",
      "Pepsi Perfect",
      "Griff Tannen",
      "Грифф Таннен",
      "Jennifer Parker",
      "Дженнифер Паркер",
      "Hill Valley",
      "Хилл-Вэлли",
      "Lena Kaligaris",
      "Edward Cullen",
      "Эдвард Каллен",
      "Holly Gennero"
    ],
    "2 broke girls": [
      "Earl Washington",
      "Caroline Wesbox Channing",
      "Maxine Black",
      "Vanko Oleg Golishevsky",
      "Zofia Kaczyński"
    ],
    "20 000": [
      "Pierre Aronnax",
      "Пьер Аронакс",
      "shipping agent",
      "Casey Moore",
      "first mate of Nautilus",
      "mate of Lincoln",
      "John Howard",
      "Captain Nemo",
      "Капитан Немо",
      "shipping clerk"
    ],
    "20 000 leagues under the sea": [
      "Pierre Aronnax",
      "Пьер Аронакс",
      "shipping agent",
      "Casey Moore",
      "first mate of Nautilus",
      "mate of Lincoln",
      "John Howard",
      "Captain Nemo",
      "Капитан Немо",
      "shipping clerk"
    ],
    "2001": [
      "spacesuits in fiction",
      "Poole versus HAL 9000",
      "space collective transportation"
    ],
    "2001 a space odyssey": [
      "spacesuits in fiction",
      "Poole versus HAL 9000",
      "space collective transportation"
    ],
    "2012": [
      "wikitext"
    ],
    "24": [
      "Nina Myers",
      "Нина Майерс",
      "Allison Taylor",
      "Марта Логан",
      "Эллисон Тейлор",
      "Айра Гейнс",
      "Майк Новик",
      "Карен Хэйз",
      "Karen Hayes",
      "Martha Logan",
      "Mike Novick",
      "Alberta Green",
      "Альберта Грин",
      "Andre Drazen",
      "Андре Дрэйзен",
      "Brian Hastings",
      "Counter Terrorist Unit",
      "Cheng Zhi",
      "Audrey Raines",
      "Одри Рейнс",
      "Шерри Палмер",
      "Райан Шаппелл",
      "Bill Buchanan",
      "Kim Bauer"
    ],
    "3": [
      "New York Stock Exchange",
      "Нью-Йоркская фондовая биржа",
      "John McClane",
      "Джон Макклейн",
      "Jonathan Clemens",
      "Leonard Dillon",
      "Newt Jorden",
      "Ребекка Джорден",
      "David Postlethwaite",
      "Francis Aaron",
      "Walter Golic",
      "Гарольд Эндрюс",
      "Джонатан Клеменс",
      "Дэвид Постлетуэйт",
      "Леонард Диллон",
      "Уолтер Голик",
      "Фрэнсис Аарон",
      "Ellen Ripley",
      "Эллен Рипли",
      "Fiorina 161",
      "Harold Andrews",
      "Robert Morse",
      "Xenomorph",
      "Weyland-Yutani Corporation"
    ],
    "300": [
      "wikitext"
    ],
    "4": [
      "David Sinclair",
      "Terry Lake",
      "Megan Reeves",
      "Меган Ривз",
      "Liz Warner",
      "Лиз Уорнер",
      "Дэвид Синклер",
      "Charlie Eppes",
      "Чарли Эпс",
      "Don Eppes",
      "Buck Winters",
      "Ian Edgerton",
      "Mildred Finch",
      "Айэн Эджертон",
      "Бак Винтерс",
      "Милдред Финч",
      "Терри Лейк",
      "Colby Granger",
      "Колби Грейнджер",
      "Alan Eppes",
      "Larry Fleinhardt",
      "Ларри Флейнхард",
      "Amita Ramanujan",
      "Амита Рамануджан"
    ],
    "4 0": [
      "John McClane",
      "Джон Макклейн",
      "Lucy McClane",
      "Люси Макклейн"
    ],
    "80": [
      "Wilbur Wright",
      "Уилбур Райт",
      "Orville Wright",
      "Орвил Райт",
      "London Hobo"
    ],
    "8½": [
      "Guido Anselmi"
    ],
    "9": [
      "Klingon forehead Ridges",
      "Deep Space 9",
      "Intrepid class",
      "Жан-Люк Пикар",
      "Julian Bashir",
      "Джулиан Башир",
      "Kira Nerys",
      "Кира Нерис",
      "Майлз О’Брайн",
      "Эзри Дакс",
      "Romulan Star Empire",
      "Jake Sisko",
      "Джейк Сиско",
      "Lwaxana Troi",
      "Galaxy class",
      "Kai Opaka",
      "Кай Опака",
      "Nausicaans",
      "Prophets of Bajor",
      "Species of Star Trek: Deep Space Nine",
      "Bareil Antos",
      "Барайл Антос",
      "Ромуланская Звёздная империя",
      "Бенджамин Сиско"
    ],
    "a beautiful mind": [
      "wikitext"
    ],
    "a fistful of dollars": [
      "wikitext"
    ],
    "a good day to die hard": [
      "John McClane",
      "Джон Макклейн",
      "Jack McClane",
      "Lucy McClane",
      "Джек Макклейн",
      "Люси Макклейн"
    ],
    "aaron stone": [
      "Charlie Landers / Aaron Stone",
      "Jason Landers"
    ],
    "alexander nevsky": [
      "Александр Ярославич Невский",
      "wikitext",
      "Nevsky Prospect"
    ],
    "alf": [
      "wikitext"
    ],
    "alice in wonderland": [
      "wikitext"
    ],
    "alien": [
      "Xenomorph",
      "Weyland-Yutani Corporation",
      "Joan Lambert",
      "USCSS Nostromo",
      "Arthur Dallas",
      "Dennis Monroe Parker",
      "Gilbert Kane",
      "Samuel Brett",
      "Артур Даллас",
      "Гилберт Кейн",
      "Деннис Монро Паркер",
      "Джоан Ламберт",
      "Сэмюэл Бретт",
      "Ellen Ripley",
      "Эллен Рипли",
      "Semiotic Standard"
    ],
    "alien 3": [
      "Jonathan Clemens",
      "Leonard Dillon",
      "Newt Jorden",
      "Ребекка Джорден",
      "David Postlethwaite",
      "Francis Aaron",
      "Walter Golic",
      "Гарольд Эндрюс",
      "Джонатан Клеменс",
      "Дэвид Постлетуэйт",
      "Леонард Диллон",
      "Уолтер Голик",
      "Фрэнсис Аарон",
      "Ellen Ripley",
      "Эллен Рипли",
      "Fiorina 161",
      "Harold Andrews",
      "Robert Morse",
      "Xenomorph",
      "Weyland-Yutani Corporation",
      "Роберт Морс"
    ],
    "aliens": [
      "Xenomorph",
      "Weyland-Yutani Corporation",
      "Scott Gorman",
      "Amanda Ripley",
      "Аманда Рипли",
      "Newt Jorden",
      "Ребекка Джорден",
      "USS Sulaco",
      "Carter Burke",
      "Скотт Горман",
      "M41A Pulse Rifle",
      "Dwayne Hicks",
      "Дуэйн Хикс",
      "Ellen Ripley",
      "Эллен Рипли",
      "William Hudson",
      "United States Colonial Marines",
      "Колониальные морпехи Соединённых штатов",
      "Уильям Хадсон",
      "Colette Ferro",
      "Cynthia Dietrich",
      "Daniel Spunkmeyer",
      "Jenette Vasquez",
      "Mark Drake"
    ],
    "all about eve": [
      "wikitext"
    ],
    "all quiet on the western front": [
      "wikitext"
    ],
    "amadeus": [
      "wikitext"
    ],
    "american beauty": [
      "Lester Burnham",
      "Лестер Бёрнем",
      "wikitext"
    ],
    "american history x": [
      "wikitext"
    ],
    "american horror story": [
      "Мэдисон Монтгомери",
      "Violet Harmon",
      "Вайолет Хармон",
      "The Countess",
      "Liz Taylor",
      "Sally McKenna",
      "Madison Montgomery",
      "wikitext"
    ],
    "american idol": [
      "wikitext",
      "Idolatry"
    ],
    "andrei rublev": [
      "wikitext"
    ],
    "angels demons": [
      "wikitext"
    ],
    "anna karenina": [
      "Анна Каренина"
    ],
    "annie hall": [
      "wikitext"
    ],
    "ant man": [
      "wikitext"
    ],
    "ant man and the wasp": [
      "wikitext"
    ],
    "apocalypse now": [
      "Colonel Kurtz",
      "Полковник Курц"
    ],
    "apocalypto": [
      "wikitext"
    ],
    "apollo 13": [
      "Henry Hurt",
      "wikitext"
    ],
    "around the world in 80 days": [
      "Wilbur Wright",
      "Уилбур Райт",
      "Orville Wright",
      "Орвил Райт",
      "London Hobo"
    ],
    "arrow": [
      "wikitext"
    ],
    "avatar": [
      "Parker Selfridge",
      "Паркер Селфридж",
      "Alpha Centauri",
      "Альфа Центавра",
      "Tree of Souls",
      "Omatikaya",
      "Polyphemus",
      "Miles Quaritch",
      "Майлз Куоритч",
      "Grace Augustine",
      "Грэйс Огустин",
      "Сильванин",
      "Resources Development Administration",
      "Jake Sully",
      "Джейк Салли",
      "unobtanium",
      "анобтаниум",
      "Оматикайя",
      "Корпорация по Освоению Природных Ресурсов",
      "wikitext"
    ],
    "avatar the way of water": [
      "wikitext"
    ],
    "avengers age of ultron": [
      "wikitext"
    ],
    "avengers infinity war": [
      "wikitext"
    ],
    "babylon 5": [
      "wikitext"
    ],
    "back to the future part ii": [
      "Pepsi Perfect",
      "Griff Tannen",
      "Грифф Таннен",
      "Jennifer Parker",
      "Дженнифер Паркер",
      "Hill Valley",
      "Хилл-Вэлли",
      "Marty McFly",
      "Марти Макфлай"
    ],
    "barbarella": [
      "Tau ceti 13"
    ],
    "barney friends": [
      "wikitext"
    ],
    "batman": [
      "wikitext"
    ],
    "batman begins": [
      "wikitext"
    ],
    "batman v superman dawn of justice": [
      "wikitext"
    ],
    "baywatch": [
      "wikitext"
    ],
    "beethoven s 3rd": [
      "Beethoven"
    ],
    "ben hur": [
      "wikitext"
    ],
    "beverly hills 90210": [
      "wikitext"
    ],
    "bicycle thieves": [
      "wikitext"
    ],
    "black swan": [
      "wikitext"
    ],
    "blackadder": [
      "Edmund Blackadder",
      "Anthony Cecil Hogmanay Melchett",
      "wikitext"
    ],
    "blood diamond": [
      "wikitext"
    ],
    "bones": [
      "wikitext"
    ],
    "borat": [
      "wikitext"
    ],
    "boys over flowers": [
      "wikitext"
    ],
    "brazil": [
      "Harry Tuttle"
    ],
    "breakfast at tiffany s": [
      "wikitext"
    ],
    "breaking bad": [
      "Мари Шрейдер",
      "Todd Alquist",
      "Тодд Элквист",
      "Mike Ehrmantraut",
      "Майк Эрмантраут",
      "Walter White Jr.",
      "Уолтер Уайт-младший",
      "Lydia Rodarte-Quayle",
      "Лидия Родарт-Куэйл",
      "Уолтер Уайт",
      "Gus Fring",
      "Густаво Фринг",
      "Jane Margolis",
      "Tuco Salamanca",
      "Туко Саламанка",
      "Hank Schrader",
      "Хэнк Шрейдер",
      "Hector Salamanca",
      "Stacey Ehrmantraut",
      "Гектор Саламанка",
      "Стэйси Эрмантраут",
      "Jesse Pinkman",
      "Джесси Пинкман",
      "Ted Beneke"
    ],
    "brokeback mountain": [
      "wikitext"
    ],
    "buffy the vampire slayer": [
      "Buffy Summers",
      "Баффи Саммерс",
      "wikitext"
    ],
    "burnt by the sun": [
      "wikitext"
    ],
    "californication": [
      "wikitext"
    ],
    "captain america civil war": [
      "wikitext"
    ],
    "captain america the first avenger": [
      "wikitext"
    ],
    "captain america the winter soldier": [
      "wikitext"
    ],
    "captain marvel": [
      "wikitext"
    ],
    "carrie": [
      "Carrie White",
      "Кэрри Уайт",
      "Billy Nolan",
      "Chris Hargensen",
      "Билли Нолан",
      "Крис Харгенсен",
      "Томми Росс",
      "Маргарет Уайт",
      "Rita Desjardin",
      "Рита Дежардин",
      "Sue Snell",
      "Сью Снелл",
      "Margaret White",
      "Tommy Ross"
    ],
    "cars": [
      "wikitext"
    ],
    "casino royale": [
      "Villa Balbianello",
      "Вилла Балбьянелло",
      "Felix Leiter",
      "James Bond",
      "Джеймс Бонд",
      "Mr. White",
      "Феликс Лейтер",
      "Steven Obanno",
      "Alexander Dimitrios",
      "Александр Димитриос",
      "Le Chiffre",
      "мистер Уайт",
      "Vesper Lynd",
      "Веспер Линд",
      "Adolph Gettler",
      "Villa La Gaeta",
      "René Mathis",
      "Рене Матис"
    ],
    "cast away": [
      "wikitext"
    ],
    "castle": [
      "wikitext",
      "Building"
    ],
    "catwoman": [
      "Patience Phillips",
      "Пэйшнс Филлипс",
      "Laurel Hedare",
      "Ophelia Powers",
      "Лорен Хедер",
      "Офелия Пауэрс"
    ],
    "charlie and the chocolate factory": [
      "wikitext"
    ],
    "charmed": [
      "The Hollow",
      "The Triad",
      "Билли Дженкинс",
      "Cole Turner",
      "Book of Shadows",
      "Chris Halliwell",
      "Power of Three",
      "Darklighter",
      "Phoebe Halliwell",
      "Фиби Холливелл",
      "Piper Halliwell",
      "Пайпер Холливелл",
      "Prue Halliwell",
      "Прю Холливелл",
      "Бальтазар",
      "Крис Холливелл",
      "Andy Trudeau",
      "Энди Трюдо",
      "Дэрилл Моррис",
      "Melinda Warren",
      "Мелинда Уоррен",
      "Drake dè Mon",
      "Дрейк де Мон",
      "Melinda Halliwell"
    ],
    "chasing amy": [
      "Silent Bob",
      "Jay and Silent Bob",
      "Джей и молчаливый Боб",
      "Молчаливый Боб",
      "Banky Edwards",
      "Бэнки Эдвардс"
    ],
    "chernobyl diaries": [
      "Chernobyl disaster",
      "авария на Чернобыльской АЭС"
    ],
    "chicago": [
      "wikitext"
    ],
    "chuck": [
      "John Casey",
      "Michael Tucker",
      "Sarah Walker",
      "Daniel Shaw",
      "Jeff Barnes",
      "Jill Roberts",
      "Майкл Такер",
      "Джон Кэйси",
      "Nicholas Quinn",
      "Morgan Grimes",
      "Lester Patel",
      "Ellie Woodcomb",
      "Bryce Larkin",
      "Chuck Bartowski",
      "Сара Уолкер",
      "Jeffster!",
      "Alexei Volkoff",
      "Devon Woodcomb",
      "Diane Beckman",
      "Stephen J. Bartowski",
      "Clyde Decker",
      "Gertrude Verbanski",
      "Langston Graham",
      "Mary Elizabeth Bartowski"
    ],
    "citizen kane": [
      "Чарльз Фостер Кейн",
      "Jedediah Leland",
      "Jim W. Gettys",
      "Susan Alexander Kane",
      "Charles Foster Kane",
      "wikitext"
    ],
    "city of god": [
      "wikitext",
      "Augustine of Hippo"
    ],
    "city of women": [
      "Город женщин"
    ],
    "columbo": [
      "wikitext"
    ],
    "controlled conversations": [
      "Ryszard Ochódzki"
    ],
    "crash": [
      "wikitext"
    ],
    "crash landing on you": [
      "wikitext",
      "World Without End (film)"
    ],
    "criminal minds": [
      "wikitext"
    ],
    "cruel intentions": [
      "Kathryn Merteuil",
      "Кэтрин Мёртей"
    ],
    "cruel intentions 2": [
      "Kathryn Merteuil",
      "Кэтрин Мёртей"
    ],
    "csi crime scene investigation": [
      "wikitext"
    ],
    "curb your enthusiasm": [
      "Larry David",
      "Groat's Disease",
      "Leon Black",
      "Cheryl David",
      "Jeff Greene",
      "Marty Funkhouser",
      "Susie Greene"
    ],
    "czterej pancerni i pies": [
      "Lidka Wiśniewska",
      "Grigorij Saakaszwili",
      "Tomasz Czereśniak",
      "Григорий Григорьевич Саакашвили"
    ],
    "dances with wolves": [
      "wikitext"
    ],
    "daredevil": [
      "wikitext"
    ],
    "dead poets society": [
      "Todd Anderson",
      "John Keating",
      "Neil Perry",
      "Charles Dalton",
      "Knox Overstreet",
      "Welton Academy",
      "Велтонская академия",
      "wikitext"
    ],
    "deep impact": [
      "Wolf-Biederman"
    ],
    "descendants of the sun": [
      "wikitext",
      "Heliodorus of Emesa"
    ],
    "desperate housewives": [
      "Andrew Van de Kamp",
      "Эндрю Ван де Камп",
      "Victor Lang",
      "Gabrielle Solis",
      "Rex Van de Kamp",
      "Danielle Van De Kamp",
      "Angie Bolen",
      "Dave Williams",
      "Zach Young",
      "Julie Mayer",
      "Orson Hodge",
      "Karl Mayer",
      "Paul Young",
      "Mary Alice Young",
      "Tom Scavo",
      "Wisteria Lane",
      "Вистерия Лейн",
      "John Rowland",
      "Mike Delfino",
      "Kayla Scavo",
      "Betty Applewhite",
      "Renee Perry",
      "Рене Перри",
      "Martha Huber"
    ],
    "dexter": [
      "Harry Morgan",
      "Thomas Matthews",
      "Brian Moser",
      "Брайан Мозер",
      "Томас Мэтьюз",
      "Arthur Mitchell",
      "Hannah McKay",
      "Rita Bennett",
      "Рита Беннетт",
      "Vince Masuka",
      "Винс Масука",
      "Joey Quinn",
      "Джозеф Куинн",
      "Debra Morgan",
      "Дебра Морган",
      "Артур Митчелл",
      "Ханна Маккей",
      "Angel Batista",
      "Анхель Батиста",
      "Lumen Pierce",
      "Люмен Пирс",
      "Laura Moser",
      "Frank Lundy",
      "Фрэнк Ланди"
    ],
    "die another day": [
      "James Bond",
      "Charles Robinson",
      "Джеймс Бонд",
      "Чарльз Робинсон",
      "Miss Moneypenny",
      "мисс Манипенни",
      "Dr. Alvarez",
      "доктор Альварес",
      "Gustav Graves",
      "Густав Грейвз",
      "Jinx Johnson",
      "Джинкс Джонсон",
      "Miranda Frost",
      "Миранда Фрост",
      "Damian Falco",
      "Домиан Фалько"
    ],
    "die hard": [
      "Joseph Takagi",
      "Джозеф Такаги",
      "Hans Gruber",
      "Ганс Грубер",
      "John McClane",
      "Джон Макклейн",
      "Lucy McClane",
      "Люси Макклейн",
      "Al Powell",
      "Holly Gennero",
      "Jack McClane",
      "Джек Макклейн",
      "Холли Дженнеро",
      "Nakatomi Plaza"
    ],
    "die hard 2": [
      "Вальверде",
      "John McClane",
      "Джон Макклейн",
      "Val Verde",
      "Holly Gennero",
      "Холли Дженнеро",
      "Al Powell"
    ],
    "die hard with a vengeance": [
      "New York Stock Exchange",
      "Нью-Йоркская фондовая биржа",
      "John McClane",
      "Джон Макклейн"
    ],
    "die sendung mit der maus": [
      "Шнаппи (персонаж)",
      "the mouse"
    ],
    "doctor strange": [
      "wikitext"
    ],
    "doctor who": [
      "Peri Brown",
      "Pete Tyler",
      "Пит Тайлер",
      "Professor Chronotis",
      "Professor Edward Travers",
      "Professor George Litefoot",
      "Sabalom Glitz",
      "силурианцы",
      "Stacy Townsend",
      "Tegan Jovanka",
      "The One Doctor",
      "time vortex",
      "временной вихрь",
      "Trinity Wells",
      "The Valeyard",
      "Vislor Turlough",
      "White Guardian",
      "Lucy Saxon",
      "Leadworth",
      "Fugitive Doctor",
      "Доктор-беглец",
      "Mary Shelley",
      "Sam Jones",
      "регенерация"
    ],
    "dogma": [
      "Silent Bob",
      "Buddy Christ",
      "Jay and Silent Bob",
      "Джей и молчаливый Боб",
      "Молчаливый Боб"
    ],
    "donnie darko": [
      "wikitext"
    ],
    "downfall": [
      "wikitext"
    ],
    "downton abbey": [
      "wikitext"
    ],
    "dr no": [
      "Miss Taro",
      "мисс Таро",
      "Honey Rider",
      "Хани Райдер",
      "Three Blind Mice",
      "James Bond",
      "Sylvia Trench",
      "Джеймс Бонд",
      "White bikini of Ursula Andress",
      "Белое бикини Урсулы Андресс",
      "Felix Leiter",
      "Феликс Лейтер",
      "Julius No",
      "Джулиус Но",
      "Miss Moneypenny",
      "мисс Манипенни",
      "Сильвия Тренч",
      "Annabel Chung",
      "Professor Dent",
      "профессор Дент",
      "wikitext"
    ],
    "dr seuss how the grinch stole christmas": [
      "Cindy Lou Who",
      "Augustus May-Who",
      "Martha May Whovier"
    ],
    "dr strangelove": [
      "Merkin Muffley",
      "Мёркин Маффли",
      "доктор Стрейнджлав",
      "wikitext"
    ],
    "due south": [
      "Ray Kowalski",
      "Benton Fraser",
      "Raymond Vecchio",
      "Renfield Turnbull",
      "Рэй Ковальски"
    ],
    "dunkirk": [
      "wikitext"
    ],
    "e t the extra terrestrial": [
      "Elliott Taylor",
      "Green Planet",
      "Зелёная планета",
      "Инопланетянин",
      "wikitext"
    ],
    "el chavo del ocho": [
      "wikitext",
      "Ramón Valdés"
    ],
    "er": [
      "wikitext"
    ],
    "eternal sunshine of the spotless mind": [
      "wikitext"
    ],
    "everybody hates chris": [
      "Greg Wuliger",
      "Joey Caruso",
      "Heisler Beer"
    ],
    "evil dead": [
      "Mia Allen"
    ],
    "eyes wide shut": [
      "wikitext"
    ],
    "fantastic beasts and where to find them": [
      "wikitext"
    ],
    "fear and loathing in las vegas": [
      "Raoul Duke",
      "Рауль Дюк"
    ],
    "firefly": [
      "Malcolm Reynolds",
      "River Tam",
      "Ривер Тэм",
      "Hoban Washburne",
      "Inara Serra",
      "Jayne Cobb",
      "Kaylee Frye",
      "Simon Tam",
      "Zoe Washburne",
      "Джейн Кобб",
      "Зои Уошбёрн",
      "Инара Серра",
      "Кейли Фрай",
      "Саймон Тэм",
      "Хобан Уошбёрн",
      "Adelai Niska",
      "Малькольм Рейнольдс",
      "Derrial Book",
      "Дерриал Бук"
    ],
    "first blood": [
      "wikitext"
    ],
    "for a few dollars more": [
      "wikitext"
    ],
    "frasier": [
      "wikitext"
    ],
    "freaky friday": [
      "Stacey Hinkhouse"
    ],
    "friday night lights": [
      "Julie Taylor",
      "Vince Howard",
      "Eric Taylor",
      "Buddy Garrity",
      "Becky Sproles",
      "Billy Riggins",
      "Jess Merriweather",
      "Landry Clarke",
      "Luke Cafferty",
      "Эрик Тейлор",
      "Tyra Collette",
      "Lyla Garrity",
      "Jason Street",
      "Matt Saracen",
      "Smash Williams",
      "Tim Riggins",
      "Tami Taylor"
    ],
    "fringe": [
      "William Bell",
      "September",
      "Уильям Белл",
      "Walter Bishop",
      "Peter Bishop",
      "12 Observers",
      "12 наблюдателей",
      "Питер Бишоп",
      "Massive Dynamic",
      "Olivia Dunham",
      "Оливия Данэм",
      "Уолтер Бишоп",
      "Astrid Farnsworth",
      "Астрид Фансворт",
      "Nina Sharp",
      "Нина Шарп",
      "Phillip Broyles",
      "Филлип Бройлз",
      "Lincoln Lee",
      "Fringe Division",
      "Подразделение «Грань»",
      "cortexiphan",
      "Walternate",
      "Уолтернейт"
    ],
    "from russia with love": [
      "James Bond",
      "Kronsteen",
      "Кронштейн",
      "Ernst Stavro Blofeld",
      "Эрнст Ставро Блофельд",
      "Sylvia Trench",
      "Джеймс Бонд",
      "Blofeld's cat",
      "Red Grant",
      "Ред Грант",
      "Miss Moneypenny",
      "мисс Манипенни",
      "Rosa Klebb",
      "Роза Клебб",
      "Татьяна Романова",
      "Tatiana Romanova",
      "Сильвия Тренч",
      "Ali Kerim Bey",
      "Али Керим Бей",
      "wikitext"
    ],
    "fun and fancy free": [
      "wikitext"
    ],
    "game of thrones": [
      "Beric Dondarrion",
      "Brienne of Tarth",
      "Берик Дондаррион",
      "Бриенна Тарт",
      "Samwell Tarly",
      "Сэмвелл Тарли",
      "Stannis Baratheon",
      "Arya Stark",
      "Tyrion Lannister",
      "Тирион Ланнистер",
      "Eddard Stark",
      "Эддард Старк",
      "Catelyn Stark",
      "Кейтилин Старк",
      "Джон Сноу",
      "Sansa Stark",
      "Санса Старк",
      "Арья Старк",
      "Bran Stark",
      "Бран Старк",
      "Ваес Дотрак",
      "Petyr Baelish",
      "Якен Хгар",
      "dire wolf"
    ],
    "gandhi": [
      "wikitext",
      "Mahatma Gandhi"
    ],
    "gangs of new york": [
      "wikitext"
    ],
    "ghost rider": [
      "Johnny Blaze",
      "Blackheart",
      "Призрачный гонщик (Джонни Блейз)",
      "Джонни Блэйз"
    ],
    "ghost rider spirit of vengeance": [
      "Johnny Blaze",
      "Призрачный гонщик (Джонни Блейз)",
      "Джонни Блэйз"
    ],
    "ghostbusters": [
      "эктоплазма",
      "Proton pack",
      "протонный ранец",
      "Ectoplasm",
      "Рэй Стентс",
      "Egon Spengler",
      "Иган Спенглер",
      "Ghost trap",
      "Gozer the Gozerian",
      "PKE Meter",
      "Vinz Clortho",
      "Винз Клорто",
      "Гозер-разрушитель",
      "Ловушка для привидений",
      "Winston Zeddemore",
      "Уинстон Зедмор",
      "Tobin's Spirit Guide",
      "Peter Venkman",
      "Питер Венкман",
      "Ray Stantz"
    ],
    "gilmore girls": [
      "wikitext"
    ],
    "ginger snaps back": [
      "Brigitte Fitzgerald",
      "Бриджит Фицджеральд",
      "Ginger Fitzgerald",
      "Джинджер Фицджеральд"
    ],
    "glee": [
      "Becky Jackson",
      "William McKinley High School",
      "Jake Puckerman",
      "Unique Adams",
      "The Dalton Academy Warblers",
      "Сэм Эванс",
      "Blaine Anderson",
      "Sam Evans",
      "Jean Sylvester",
      "Marley Rose",
      "Блейн Андерсон",
      "Ryder Lynn",
      "Shelby Corcoran",
      "Kitty Wilde",
      "Sebastian Smythe",
      "Roz Washington",
      "Artie Abrams",
      "Арти Абрамс",
      "Kurt Hummel",
      "Курт Хаммел",
      "Dave Karofsky",
      "Tina Cohen-Chang",
      "Terri Schuester",
      "Santana Lopez"
    ],
    "goal iii taking on the world": [
      "Santiago Muñez"
    ],
    "goldeneye": [
      "Miss Moneypenny",
      "мисс Манипенни",
      "Arecibo Radio Telescope",
      "James Bond",
      "Valentin Zukovsky",
      "Валентин Жуковский",
      "Джеймс Бонд",
      "Boris Grishenko",
      "Bill Tanner",
      "Билл Таннер",
      "General Ourumov",
      "Аркадий Григорович Урумов",
      "French frigate La Fayette",
      "Alec Trevelyan",
      "Алек Тревельян",
      "Xenia Onatopp",
      "Ксения Онатопп",
      "Natalya Simonova",
      "Наталья Симонова",
      "wikitext"
    ],
    "goldfinger": [
      "Auric Goldfinger",
      "Аурик Голдфингер",
      "Jill Masterson",
      "Джилл Мастертон",
      "James Bond",
      "Джеймс Бонд",
      "Pussy Galore",
      "Felix Leiter",
      "Феликс Лейтер",
      "Miss Moneypenny",
      "мисс Манипенни",
      "Пусси Галор",
      "Tilly Masterson",
      "Тилли Мастертон",
      "wikitext"
    ],
    "gone with the wind": [
      "Belle Watling",
      "Bonnie Blue Butler",
      "Бонни Батлер",
      "Melanie Hamilton",
      "Мелани Гамильтон",
      "wikitext"
    ],
    "good will hunting": [
      "wikitext"
    ],
    "goodfellas": [
      "Tommy DeVito",
      "Томми Девито"
    ],
    "gossip girl": [
      "wikitext"
    ],
    "gotham": [
      "wikitext"
    ],
    "green book": [
      "wikitext"
    ],
    "grey s anatomy": [
      "wikitext"
    ],
    "guardian the lonely and great god": [
      "wikitext",
      "Gong Yoo"
    ],
    "h o": [
      "Emma Gilbert",
      "Bella Hartley",
      "Белла Хартли",
      "Эмма Гилберт",
      "Rikki Chadwick",
      "Рикки Чедвик",
      "Will Benjamin",
      "Уилл Бенджамин",
      "Zane Bennett",
      "Зейн Беннетт",
      "Charlotte Watsford",
      "Шарлотта Уотсфорд",
      "Cleo Sertori",
      "Клео Сертори",
      "Lewis McCartney",
      "Льюис МакКартни"
    ],
    "h o just add water": [
      "Emma Gilbert",
      "Bella Hartley",
      "Белла Хартли",
      "Эмма Гилберт",
      "Rikki Chadwick",
      "Рикки Чедвик",
      "Will Benjamin",
      "Уилл Бенджамин",
      "Zane Bennett",
      "Зейн Беннетт",
      "Charlotte Watsford",
      "Шарлотта Уотсфорд",
      "Cleo Sertori",
      "Клео Сертори",
      "Lewis McCartney",
      "Льюис МакКартни"
    ],
    "hackers": [
      "Dade Murphy"
    ],
    "hannah montana": [
      "Jackson Stewart",
      "Джексон Стюарт",
      "Oliver Oken",
      "Оливер Окен",
      "Lilly Truscott",
      "Robby Stewart",
      "Лилли Траскотт",
      "Робби Стюарт",
      "Amber and Ashley",
      "Roxy Roker",
      "Miley Stewart",
      "Майли Стюарт",
      "wikitext"
    ],
    "harry potter and the chamber of secrets": [
      "Gilderoy Lockhart",
      "Гилдерой Локхарт",
      "Гарри Поттер",
      "Harry Potter",
      "Oliver Wood",
      "Оливер Вуд",
      "mandrake in the Harry Potter universe",
      "Whomping Willow",
      "Гремучая ива",
      "Percy Weasley",
      "Перси Уизли",
      "Armando Dippet",
      "Армандо Диппет",
      "мандрагора",
      "Garrick Ollivander",
      "Гаррик Олливандер",
      "Форд \"Англия",
      "Colin Creevey",
      "Mr. Weasley's Ford Anglia",
      "Колин Криви",
      "Basilisk in the Chamber of Secrets",
      "Василиск из Тайной комнаты",
      "Helena Ravenclaw",
      "Елена Когтевран"
    ],
    "harry potter and the deathly hallows part 1": [
      "wikitext"
    ],
    "harry potter and the goblet of fire": [
      "Chinese Fireball",
      "Китайский огненный шар",
      "Eloise Midgen",
      "Элоиза Мидген",
      "Fred Weasley",
      "George Weasley",
      "Джордж Уизли",
      "Фред Уизли",
      "Gregory Goyle",
      "Грегори Гойл",
      "Nigel Wolpert",
      "Найджел Вольперт",
      "Return of Lord Voldemort",
      "Возрождение Волан-де-Морта",
      "Arthur Weasley",
      "Артур Уизли",
      "Питер Петтигрю",
      "Alastor Moody",
      "Аластор Грюм",
      "James Potter",
      "Cornelius Fudge",
      "Корнелиус Фадж",
      "Sirius Black",
      "Ron Weasley"
    ],
    "harry potter and the half blood prince": [
      "wikitext"
    ],
    "harry potter and the order of the phoenix": [
      "Гарри Поттер",
      "Harry Potter",
      "Phineas Nigellus Black",
      "Финеас Найджел Блэк",
      "Beauxbatons",
      "Шармбатон",
      "Dumbledore's Army",
      "Отряд Дамблдора",
      "Augustus Rookwood",
      "Августус Руквуд",
      "Emmeline Vance",
      "Эммелина Вэнс",
      "Parvati Patil",
      "Парвати Патил",
      "Percy Weasley",
      "Перси Уизли",
      "Padma Patil",
      "Падма Патил",
      "Alice Longbottom",
      "Алиса Долгопупс",
      "Zacharias Smith",
      "Захария Смит",
      "Frank Longbottom",
      "Фрэнк Долгопупс"
    ],
    "harry potter and the philosopher s stone": [
      "Lord Voldemort",
      "Волан-де-Морт",
      "Severus Snape",
      "Северус Снегг",
      "Rubeus Hagrid",
      "Рубеус Хагрид",
      "Lee Jordan",
      "Ли Джордан",
      "Ginny Weasley",
      "Джинни Уизли",
      "Neville Longbottom",
      "Невилл Долгопупс",
      "Minerva McGonagall",
      "Минерва Макгонагал",
      "Petunia Dursley",
      "Петуния Дурсль",
      "Джеймс Поттер",
      "Argus Filch",
      "Vincent Crabbe",
      "Аргус Филч",
      "Винсент Крабб",
      "Молли Уизли",
      "Percy Weasley",
      "Перси Уизли"
    ],
    "harry potter and the prisoner of azkaban": [
      "Гарри Поттер",
      "Harry Potter",
      "Whomping Willow",
      "Гремучая ива",
      "Parvati Patil",
      "Парвати Патил",
      "Percy Weasley",
      "Перси Уизли",
      "Madam Rosmerta",
      "мадам Розмерта",
      "Padma Patil",
      "Падма Патил",
      "shrunken head",
      "Cornelius Fudge",
      "Корнелиус Фадж",
      "Marge Dursley",
      "Мардж Дурсль",
      "Eloise Midgen",
      "Элоиза Мидген",
      "Cottismore Croyne",
      "Коттисмор Кройн",
      "wikitext"
    ],
    "heat": [
      "Vincent Hanna",
      "Винсент Ханна",
      "Stress Fractures in Titanium"
    ],
    "heroes": [
      "wikitext"
    ],
    "high school musical 3 senior year": [
      "Sharpay Evans",
      "Шарпей Эванс",
      "Райан Эванс",
      "Troy Bolton",
      "Трой Болтон",
      "Ryan Evans"
    ],
    "highlander": [
      "Коннор Маклауд",
      "Connor MacLeod",
      "Juan Sánchez Villa-Lobos Ramírez",
      "Хуан Санчес Вилья-Лобос Рамирес",
      "бессмертные",
      "Heather MacLeod",
      "Хизер Маклауд"
    ],
    "homeland": [
      "Peter Quinn",
      "Nicholas Brody",
      "Abu Nazir",
      "Saul Berenson",
      "Сол Беренсон",
      "Carrie Mathison",
      "Кэрри Мэтисон",
      "Aileen Morgan"
    ],
    "house m d": [
      "Грегори Хаус",
      "James Wilson",
      "Mark Warner",
      "Robert Chase",
      "Роберт Чейз",
      "Eric Foreman",
      "Lisa Cuddy",
      "Лиза Кадди",
      "Эрик Форман",
      "Allison Cameron",
      "Эллисон Кэмерон",
      "Gregory House",
      "Jessica Adams",
      "Крис Тауб",
      "Джеймс Уилсон",
      "Lucas Douglas",
      "Лукас Дуглас",
      "Martha Masters",
      "Марта М. Мастерс",
      "Тринадцатая",
      "Amber Volakis",
      "Stacy Warner",
      "Стейси Уорнер",
      "Эмбер Волакис"
    ],
    "how i met your mother": [
      "Barney's apartment",
      "Marshall and Lily's house",
      "Robin's apartment",
      "Ted's apartment",
      "Ted's house",
      "Heisler Beer",
      "Anita Appleby",
      "Farhampton Inn",
      "Jessica Glitter",
      "Professor Vinick",
      "Steve 'Blitz' Henry",
      "Steve Biel",
      "The Wedding Bride",
      "Tony Grafanello",
      "Marvin Eriksen Jr.",
      "Робин Щербатски",
      "The Mother",
      "Maclaren's Pub",
      "Lily Aldrin",
      "Лили Олдрин",
      "Robin Scherbatsky",
      "Ted's daughter",
      "Ted's son"
    ],
    "how i unleashed world war ii": [
      "Grzegorz Brzęczyszczykiewicz",
      "Гжегож Бженчищикевич"
    ],
    "hugo": [
      "wikitext",
      "Victor Hugo"
    ],
    "icarly": [
      "Sam Puckett",
      "The Blowing",
      "Gibby Gibson",
      "23 Hour Fitness",
      "B. F. Wang's",
      "Build-A-Bra",
      "Butter Sock",
      "Chili My Bowl",
      "Color Me Pot",
      "Galini's Pie Shop",
      "Locker 239",
      "Oystamato",
      "SplashFace",
      "Yatsabishi",
      "Spencer Shay",
      "Ted Franklin",
      "Spaghettitaco",
      "Freddie Benson",
      "Carly Shay",
      "wikitext"
    ],
    "iii": [
      "Lava flea",
      "hyperspace",
      "Breha Organa",
      "Venator-class star destroyer",
      "Mon Calamari",
      "Мон-каламари",
      "Polis Massa system",
      "Приказ 66",
      "световой меч",
      "Граф Дуку",
      "Padmé Amidala",
      "Wilhuff Tarkin",
      "Лея Органа",
      "Падме Амидала",
      "Coruscant",
      "Luke Skywalker",
      "lightsaber",
      "Obi-Wan Kenobi",
      "Оби-Ван Кеноби",
      "Princess Leia",
      "Millennium Falcon",
      "Тысячелетний сокол",
      "Anakin Skywalker",
      "Count Dooku"
    ],
    "inception": [
      "Роберт Фишер",
      "Robert Fischer",
      "Peter Browning",
      "Dominick Cobb",
      "Питер Браунинг",
      "Доминик Кобб"
    ],
    "independence day": [
      "летающая тарелка",
      "Patricia Whitmore",
      "Патриция Уитмор",
      "Дэвид Левинсон",
      "flying saucer",
      "David Levinson",
      "Thomas Whitmore",
      "Steven Hiller",
      "Стивен Хиллер",
      "Томас Уитмор",
      "wikitext"
    ],
    "indiana jones and the kingdom of the crystal skull": [
      "Индиана Джонс",
      "Indiana Jones",
      "interdimensional hypothesis",
      "межпространственная гипотеза",
      "Mutt Williams",
      "Пёс Уильямс",
      "Marion Ravenwood",
      "Мэрион Рэйвенвуд",
      "Ирина Спалько",
      "wikitext"
    ],
    "indiana jones and the last crusade": [
      "wikitext"
    ],
    "indiana jones and the temple of doom": [
      "wikitext"
    ],
    "invasion of the body snatchers": [
      "pod people"
    ],
    "it s a wonderful life": [
      "wikitext"
    ],
    "it s always sunny in philadelphia": [
      "Frank Reynolds",
      "Фрэнк Рейнольдс",
      "Charlie Kelly",
      "Deandra Reynolds",
      "Heisler Beer"
    ],
    "it s okay to not be okay": [
      "wikitext",
      "Sophia Lillis"
    ],
    "iv": [
      "Luke Skywalker",
      "Chewbacca",
      "Оби-Ван Кеноби",
      "Princess Leia",
      "Люк Скайуокер",
      "Jabba the Hutt",
      "stormtrooper",
      "Wilhuff Tarkin",
      "Джабба Хатт",
      "имперские штурмовики",
      "Лея Органа",
      "Уилхуфф Таркин",
      "Darth Vader",
      "Death Star",
      "hyperspace",
      "lightsaber",
      "Звезда смерти",
      "Obi-Wan Kenobi",
      "Lak Sivrak",
      "Лак Сиврак",
      "Ponda Baba",
      "Momaw Nadon",
      "Garven Dreis",
      "Дарт Вейдер"
    ],
    "ivan s childhood": [
      "wikitext",
      "The Death of Ivan Ilyich"
    ],
    "joy ride": [
      "Rusty Nail"
    ],
    "jumanji": [
      "wikitext"
    ],
    "jurassic world": [
      "wikitext"
    ],
    "kamen rider ooo": [
      "Kamen Rider Birth"
    ],
    "kick ass": [
      "Frank d'Amico",
      "Damon Macready",
      "Деймон Маккриди"
    ],
    "king kong": [
      "Кинг-Конг",
      "Skull Island",
      "Остров Черепа",
      "Ann Darrow",
      "Энн Дэрроу"
    ],
    "kingdom of heaven": [
      "wikitext",
      "Kingdom of God"
    ],
    "kiss the girls": [
      "John Sampson",
      "Джон Сэмпсон"
    ],
    "kramer vs kramer": [
      "wikitext"
    ],
    "la dolce vita": [
      "Nadia Gray",
      "Надя Грей"
    ],
    "la que se avecina": [
      "Judith Becker",
      "Antonio Recio",
      "Maite Figueroa",
      "Rebeca Ortiz",
      "Raquel Villanueva",
      "Lola Trujillo",
      "Amador Rivas",
      "Berta Escobar",
      "Coque Calatrabo",
      "Estela Reynolds"
    ],
    "lawrence of arabia": [
      "wikitext",
      "T. E. Lawrence"
    ],
    "le gendarme se marie": [
      "Nicole Cruchot"
    ],
    "léon the professional": [
      "wikitext"
    ],
    "let the right one in": [
      "Oskar Eriksson",
      "Eva & Adam",
      "Оскар Эрикссон",
      "Ева и Адам"
    ],
    "lie to me": [
      "Кэл Лайтман",
      "Gillian Foster",
      "Eli Loker",
      "Ria Torres",
      "Илай Локер",
      "Риа Торрес"
    ],
    "life is beautiful": [
      "Doctor Lessing",
      "Dora Orefice",
      "Dora's mother",
      "Eliseo Orefice",
      "Ferrucio Papini",
      "Giosuè Orefice",
      "Guido Orefice"
    ],
    "life of pi": [
      "wikitext",
      "Yann Martel"
    ],
    "life or something like it": [
      "Lanie Kerrigan"
    ],
    "liv and maddie": [
      "wikitext"
    ],
    "live and let die": [
      "James Bond",
      "Джеймс Бонд",
      "Miss Moneypenny",
      "мисс Манипенни",
      "Solitaire",
      "Rosie Carver",
      "Рози Карвер",
      "Tee Hee Johnson",
      "Sheriff J.W. Pepper",
      "Барон Суббота",
      "Baron Samedi",
      "Felix Leiter",
      "Феликс Лейтер",
      "Dr. Kananga",
      "Доктор Кананга",
      "San Monique"
    ],
    "live free or die hard": [
      "John McClane",
      "Джон Макклейн",
      "Lucy McClane",
      "Люси Макклейн"
    ],
    "loki": [
      "wikitext"
    ],
    "lost": [
      "Juliet Burke",
      "Джульет Бёрк",
      "Дэниел Фарадей",
      "Ana Lucia Cortez",
      "Ben Linus",
      "Boone Carlyle",
      "Desmond Hume",
      "Ана-Люсия Кортес",
      "Бенджамин Лайнус",
      "Бун Карлайл",
      "Либби Смит",
      "Claire Littleton",
      "Ilana Verdansky",
      "Kate Austen",
      "Miles Straume",
      "Илана Верданская",
      "Кейт Остин",
      "Клэр Литтлтон",
      "Alexandra Rousseau",
      "Christian Shephard",
      "Martin Keamy",
      "Rose and Bernard Nadler",
      "Алекс Руссо",
      "Кристиан Шепард"
    ],
    "lost in translation": [
      "Charlotte",
      "Bob Harris",
      "Боб Харрис",
      "wikitext"
    ],
    "love actually": [
      "Billy Mack",
      "wikitext"
    ],
    "macgyver": [
      "wikitext"
    ],
    "mad men": [
      "wikitext"
    ],
    "malcolm in the middle": [
      "wikitext"
    ],
    "maleficent": [
      "wikitext"
    ],
    "mallrats": [
      "Jay and Silent Bob",
      "Джей и молчаливый Боб",
      "Молчаливый Боб",
      "Silent Bob"
    ],
    "man of steel": [
      "wikitext",
      "Superman"
    ],
    "marmaduke": [
      "Chupadogra",
      "Barbara Winslow",
      "Phil Winslow",
      "Brian Winslow",
      "Debbie Winslow"
    ],
    "marnie": [
      "Mark Rutland",
      "Марк Ратленд"
    ],
    "married with children": [
      "wikitext"
    ],
    "mary poppins": [
      "wikitext"
    ],
    "masters of the universe": [
      "Julia Winston",
      "Kevin Corrigan",
      "Джулия Уинстон",
      "Кевин Корриган"
    ],
    "matchstick men": [
      "Roy Waller",
      "Рой Валлер"
    ],
    "memento": [
      "wikitext"
    ],
    "men in black": [
      "Люди в чёрном",
      "Neuralyzer",
      "Нейрализатор",
      "агент Кей",
      "Frank the Pug",
      "Edgar the Bug",
      "Эдгар Жук",
      "Arquillian",
      "аркиллийцы",
      "Jack Jeebs",
      "Джек Джибс",
      "Noisy Cricket",
      "Дамский сверчок",
      "wikitext"
    ],
    "merlin": [
      "wikitext"
    ],
    "metropolis": [
      "wikitext"
    ],
    "midnight in paris": [
      "wikitext"
    ],
    "million dollar baby": [
      "wikitext"
    ],
    "minions": [
      "wikitext",
      "Minions: The Rise of Gru"
    ],
    "mirror": [
      "wikitext"
    ],
    "modern family": [
      "Pam Tucker",
      "DeDe Pritchett",
      "Donnie Pritchett",
      "Pilar Ramírez",
      "Sonia Ramírez",
      "Dylan Marshall",
      "Gloria Pritchett",
      "Alex Dunphy",
      "Barb Tucker",
      "Claire Dunphy",
      "Frank Dunphy",
      "Grace Dunphy",
      "Haley Dunphy",
      "Joe Pritchett",
      "Lily Tucker-Pritchett",
      "Manny Delgado",
      "Mitchell Pritchett",
      "Phil Dunphy",
      "Merle Tucker",
      "Cameron Tucker",
      "Javier Delgado",
      "Jay Pritchett",
      "Luke Dunphy"
    ],
    "money heist": [
      "wikitext",
      "Heist (film)"
    ],
    "monk": [
      "Charles Kroger",
      "Adrian Monk",
      "Эдриан Монк",
      "Jack Monk",
      "Julie Teeger",
      "wikitext"
    ],
    "monty python and the holy grail": [
      "Чёрный Рыцарь",
      "Black Knight",
      "Knights Who Say Ni!",
      "Рыцари, говорящие Ни",
      "Black Beast of Aaaaarrrrrrggghhh",
      "Holy Hand Grenade of Antioch",
      "Святая ручная граната Антиохийская",
      "Rabbit of Caerbannog"
    ],
    "monty python s flying circus": [
      "Johann Gambolputty",
      "Иоганн Гамболпутти",
      "The Colonel",
      "Silly Voices at the Police Station",
      "Mr Praline"
    ],
    "monty python s life of brian": [
      "Jesus Christ",
      "Иисус Христос",
      "Brian Cohen",
      "Брайан Коэн",
      "Biggus Dickus"
    ],
    "monty python s the meaning of life": [
      "Mr Creosote"
    ],
    "more than life at stake": [
      "Hermann Brunner",
      "Hans Kloss",
      "Герман Бруннер"
    ],
    "moscow does not believe in tears": [
      "wikitext"
    ],
    "mr bean": [
      "wikitext"
    ],
    "mr mrs smith": [
      "wikitext"
    ],
    "mr queen": [
      "wikitext",
      "Queen Victoria"
    ],
    "mr robot": [
      "wikitext"
    ],
    "mulholland drive": [
      "wikitext"
    ],
    "my name is earl": [
      "Heisler Beer",
      "Earl Hickey",
      "Catalina Aruca",
      "Darnell Turner",
      "Joy Turner"
    ],
    "my neighbor totoro": [
      "Mei Kusakabe",
      "Satsuki Kusakabe",
      "susuwatari",
      "Сусуватари",
      "wikitext",
      "We Bare Bears (season 1)"
    ],
    "mythbusters": [
      "wikitext"
    ],
    "ncis": [
      "James Palmer",
      "Richard Parsons",
      "Carol Wilson",
      "Gerald Jackson",
      "Michelle Lee",
      "Alejandro Rivera",
      "Cassie Yates",
      "Jonathan Cole",
      "Kasie Hines",
      "Sarah Porter",
      "Eric Beale",
      "Nate Getz",
      "Лерой Джетро Гиббс",
      "Alden Parker",
      "Jessica Knight",
      "Marie Foley",
      "Stephanie Flynn",
      "Ilan Bodnar",
      "Rebecca Chase",
      "Ari Haswari",
      "Ари Хасвари",
      "Sam Hanna",
      "Eli David",
      "Donald Mallard"
    ],
    "ncis los angeles": [
      "Nell Jones",
      "Owen Granger",
      "Eric Beale",
      "Dominic Vail",
      "Nate Getz",
      "Henrietta Lange",
      "Sam Hanna",
      "G. Callen",
      "Kensi Blye",
      "list of NCIS: Los Angeles characters",
      "Список персонажей телесериала «Морская полиция: Лос-Анджелес»",
      "Leon Vance",
      "Marty Deeks"
    ],
    "nosferatu": [
      "Count Orlok",
      "граф Орлок",
      "Thomas Hutter",
      "Ellen Hutter",
      "Томас Хуттер",
      "Элен Хуттер"
    ],
    "numbers": [
      "David Sinclair",
      "Terry Lake",
      "Megan Reeves",
      "Меган Ривз",
      "Liz Warner",
      "Лиз Уорнер",
      "Дэвид Синклер",
      "Charlie Eppes",
      "Чарли Эпс",
      "Don Eppes",
      "Buck Winters",
      "Ian Edgerton",
      "Mildred Finch",
      "Айэн Эджертон",
      "Бак Винтерс",
      "Милдред Финч",
      "Терри Лейк",
      "Colby Granger",
      "Колби Грейнджер",
      "Alan Eppes",
      "Larry Fleinhardt",
      "Ларри Флейнхард",
      "Amita Ramanujan",
      "Амита Рамануджан"
    ],
    "nurses": [
      "wikitext"
    ],
    "on the waterfront": [
      "wikitext"
    ],
    "once upon a time": [
      "Maleficent",
      "Малефисента",
      "Henry Daniel Mills",
      "Генри Миллс",
      "David Nolan",
      "Прекрасный принц",
      "Румпельштильцхен",
      "Emma Swan-Jones",
      "Killian Jones",
      "Киллиан Джонс",
      "Эмма Свон",
      "Queen Eva",
      "Storybrooke",
      "королева Ева",
      "Peter Pan",
      "King Arthur",
      "Maid Marian",
      "Питер Пэн",
      "Король Артур",
      "Ruby Lucas",
      "Руби Лукас",
      "Neal Nolan",
      "Prince Henry",
      "Белоснежка"
    ],
    "once upon a time in america": [
      "wikitext"
    ],
    "once upon a time in hollywood": [
      "wikitext"
    ],
    "once upon a time in the west": [
      "wikitext"
    ],
    "one flew over the cuckoo s nest": [
      "wikitext",
      "Ken Kesey"
    ],
    "one swallow brought spring": [
      "Saint-Barthélemy (Lans-en-Vercors)"
    ],
    "one tree hill": [
      "wikitext"
    ],
    "orange is the new black": [
      "wikitext"
    ],
    "out of africa": [
      "wikitext"
    ],
    "paradise falls": [
      "Bea Sutton"
    ],
    "people like us": [
      "Ike Rafferty"
    ],
    "perry mason": [
      "Paul Drake",
      "Della Street",
      "Делла Стрит",
      "Пол Дрейк"
    ],
    "peter pan": [
      "wikitext"
    ],
    "pirates of the caribbean at world s end": [
      "Flying Dutchman",
      "Джек Воробей",
      "James Norrington",
      "Джеймс Норрингтон",
      "Joshamee Gibbs",
      "Джошеми Гиббс",
      "Cutler Beckett",
      "Катлер Беккет",
      "Bill Turner",
      "Will Turner",
      "Ian Mercer",
      "Иэн Мерсер",
      "Elizabeth Swann",
      "Henry Turner",
      "Davy Jones",
      "Dead Man's Chest",
      "Летучий Голландец",
      "Captain Teague",
      "Капитан Тиг",
      "Hector Barbossa",
      "Гектор Барбосса",
      "Элизабет Суонн",
      "Уилл Тёрнер",
      "Captain Jack Sparrow"
    ],
    "pirates of the caribbean dead man s chest": [
      "Captain Jack Sparrow",
      "Джек Воробей",
      "James Norrington",
      "Джеймс Норрингтон",
      "Joshamee Gibbs",
      "Джошеми Гиббс",
      "Cutler Beckett",
      "Катлер Беккет",
      "Will Turner",
      "Elizabeth Swann",
      "Flying Dutchman",
      "Davy Jones",
      "Летучий Голландец",
      "Hector Barbossa",
      "Гектор Барбосса",
      "Элизабет Суонн",
      "Уилл Тёрнер",
      "Tia Dalma",
      "Дейви Джонс",
      "wikitext"
    ],
    "pirates of the caribbean dead men tell no tales": [
      "wikitext"
    ],
    "pirates of the caribbean on stranger tides": [
      "Captain Jack Sparrow",
      "Captain Teague",
      "Капитан Тиг",
      "Hector Barbossa",
      "Гектор Барбосса",
      "Джек Воробей",
      "Чёрная Борода",
      "Philip Swift",
      "Филип Свифт",
      "Joshamee Gibbs",
      "Джошеми Гиббс",
      "Blackbeard",
      "wikitext"
    ],
    "pirates of the caribbean the curse of the black pearl": [
      "Will Turner",
      "Анна-Мария",
      "Гектор Барбосса",
      "Уилл Тёрнер",
      "Theodore Groves",
      "Elizabeth Swann",
      "Hector Barbossa",
      "Элизабет Суонн",
      "Captain Jack Sparrow",
      "Джек Воробей",
      "Weatherby Swann",
      "Уитерби Суонн",
      "Теодор Гровс",
      "Lt. Gillette",
      "Prison Dog",
      "лейтенант Джиллетт",
      "Тюремная собака",
      "James Norrington",
      "Джеймс Норрингтон",
      "Joshamee Gibbs",
      "Джошеми Гиббс",
      "Jack the Monkey",
      "Обезьяна Джек",
      "Isla de Muerta"
    ],
    "planet of the apes": [
      "доктор Зейус",
      "Cornelius",
      "Dr. Zaius"
    ],
    "platoon": [
      "wikitext"
    ],
    "pretty little liars": [
      "Sara Harvey",
      "Alison DiLaurentis",
      "Элисон Дилаурентис",
      "Hanna Marin",
      "Courtney DiLaurentis",
      "Melissa Hastings",
      "Spencer Hastings",
      "Toby Cavanaugh",
      "CeCe Drake",
      "Ezra Fitz",
      "Mona Vanderwaal",
      "A (Pretty Little Liars)",
      "Sydney Driscoll",
      "Jenna Marshall",
      "Alex Drake",
      "Aria Montgomery",
      "Paige McCullers",
      "Emily Fields",
      "wikitext"
    ],
    "prison break": [
      "Aldo Burrows",
      "Альдо Барроуз",
      "Lincoln Burrows",
      "Линкольн Барроуз",
      "Roland Glenn",
      "Роланд Гленн",
      "John Abruzzi",
      "Джон Абруцци",
      "Michael Scofield",
      "Майкл Скофилд",
      "Сара Танкреди",
      "Nick Savrinn",
      "Ник Саврин",
      "Кэролин Рейнолдс",
      "Дэнни Хейл",
      "Terrence Steadman",
      "Терренс Стедман",
      "Alexander Mahone",
      "Александр Махоун",
      "Manche Sanchez",
      "Манче Санчес",
      "Sofia Lugo",
      "София Луго",
      "Nika Volek"
    ],
    "prometheus": [
      "Космические жокеи",
      "Kate Ford",
      "Кейт Форд",
      "Charlie Holloway",
      "Idris Janek",
      "Meredith Vickers",
      "Peter Weyland",
      "Rafe Millburn",
      "Sean Fifield",
      "Идрис Джанек",
      "Мэридит Виккерс",
      "Питер Вэйланд",
      "Рейф Милбёрн",
      "Чарли Холлоуэй",
      "Шон Файфилд",
      "Элизабет Шоу",
      "Elizabeth Shaw",
      "Engineers",
      "Emun Chance",
      "Бенедикт Равель",
      "Иман Ченс",
      "Weyland Corp",
      "wikitext"
    ],
    "psych": [
      "Henry Spencer",
      "Buzz McNab",
      "Woody the Coroner",
      "Shawn Spencer",
      "Шон Спенсер",
      "Carlton Lassiter",
      "Juliet O'Hara",
      "Karen Vick"
    ],
    "pulp fiction": [
      "Mia Wallace",
      "Миа Уоллес",
      "Vincent Vega",
      "Big Kahuna Burger",
      "Винсент Вега",
      "Jules Winnfield",
      "Джулс Уиннфилд",
      "Butch Coolidge",
      "Бутч Куллидж",
      "Red Apple cigarettes",
      "Marsellus Wallace",
      "Winston Wolfe",
      "Марселлас Уоллес",
      "Esmerelda Villalobos",
      "Fox Force Five"
    ],
    "quantum of solace": [
      "wikitext"
    ],
    "queer as folk": [
      "Brian Kinney",
      "Брайан Кинни",
      "Ben Bruckner",
      "Michael Novotny",
      "Debbie Novotny",
      "Дэбби Новотны",
      "Майкл Новотный",
      "Justin Taylor",
      "Lindsay Peterson",
      "Melanie Marcus",
      "Emmett Honeycutt",
      "Ted Schmidt",
      "Джастин Тейлор",
      "Suzie Smith"
    ],
    "rain man": [
      "wikitext"
    ],
    "raising hope": [
      "Heisler Beer"
    ],
    "rashomon": [
      "wikitext"
    ],
    "raumpatrouille": [
      "Atan Shubashi",
      "Dr. Schiller",
      "Hasso Sigbjörnson",
      "Helga Legrelle",
      "Major Cliff Allister McLane",
      "Mario de Monti",
      "Tamara Jagellovsk",
      "Orion 7/8"
    ],
    "rear window": [
      "Black-and-white dress of Grace Kelly",
      "Lisa Carol Fremont",
      "wikitext"
    ],
    "rebecca": [
      "wikitext"
    ],
    "red dwarf": [
      "Dave Lister",
      "Дэйв Листер",
      "Arnold Rimmer",
      "Арнольд Риммер",
      "Красный карлик",
      "Kristine Kochanski",
      "Кристин Кочански",
      "Silicon Heaven",
      "Talkie Toaster"
    ],
    "remember the titans": [
      "Bill Yoast",
      "Herman Boone",
      "Gerry Bertier"
    ],
    "reservoir dogs": [
      "Joe Cabot"
    ],
    "return of the jedi": [
      "wikitext"
    ],
    "riverdale": [
      "wikitext"
    ],
    "rizzoli isles": [
      "Jane Rizzoli",
      "Maura Isles",
      "Intense Woman"
    ],
    "robin hood": [
      "Lady Marian",
      "леди Мариан",
      "Vaisey, Sheriff of Nottingham",
      "Вэйзи, шериф Ноттингемский"
    ],
    "roman holiday": [
      "wikitext"
    ],
    "rookie blue": [
      "Chris Diaz",
      "Крис Диас",
      "Traci Nash",
      "Трэйси Нэш"
    ],
    "salatut elämät": [
      "Aki Nikkinen",
      "Aleksi Salin",
      "Iiris Kaukovaara",
      "Ken Ojala",
      "Panu Kaukovaara",
      "Ismo Laitela",
      "Iida Mustonen",
      "Miro Holm",
      "Seppo Taalasmaa",
      "Aamu Korhonen",
      "Sauli Kiviranta",
      "Sergei Kuula",
      "Toni Veijalainen",
      "Ulla Taalasmaa",
      "Niko Vainio",
      "Heidi Aaltonen",
      "Miia Laitela",
      "Helena Kuula",
      "Kalle Laitela",
      "Kari Taalasmaa",
      "Katariina Mäkelä",
      "Lasse Sievinen",
      "Oona Kiviranta",
      "Sampo Kaukovaara"
    ],
    "saludos amigos": [
      "wikitext"
    ],
    "sami swoi": [
      "Władysław Kargul",
      "Kazimierz Pawlak"
    ],
    "santa barbara": [
      "Michael Donnelly",
      "Scott Clark",
      "Megan Richardson",
      "Robert Barr",
      "Celeste DiNapoli",
      "Sasha Schmidt",
      "Иден Кэпвелл",
      "Mason Capwell",
      "Мейсон Кепвелл",
      "Quinn Armitage",
      "Laura Asher",
      "Amado Gonzalez",
      "Flame Beaufort",
      "Никки Альварес",
      "Suzanne Collier",
      "Rosa Andrade",
      "Marisa Perkins",
      "Мариса Перкинс",
      "Скотт Кларк",
      "Ruben Andrade",
      "Рубен Андраде",
      "Cassandra Benedict",
      "Lisa DiNapoli",
      "Brick Wallace"
    ],
    "saturday night live": [
      "Land Shark",
      "Wayne's World",
      "Matt Foley",
      "Pat Sullivan",
      "The Anal Retentive Chef",
      "Blizzard Man",
      "Celebrity Jeopardy!",
      "Church Chat",
      "Lothar of the Hill People",
      "Sprockets",
      "Denise McDenna",
      "Action 9 News",
      "Coffee Talk",
      "Dr. Hattie Davis",
      "Hans and Franz",
      "Nick Burns, Your Company's Computer Guy",
      "Ник Бернс",
      "Triumph the Insult Comic Dog",
      "Tonto, Tarzan, and Frankenstein",
      "Bill Swerski's Superfans",
      "Canteen Boy",
      "Debbie Downer",
      "Emily Litella",
      "Father Guido Sarducci"
    ],
    "scarface": [
      "Фрэнк Лопес",
      "Elvira Hancock",
      "Эльвира Хэнкок",
      "Gina Montana",
      "Джина Монтана",
      "Manny Ribera",
      "Мэнни Рибера",
      "Tony Montana",
      "Alejandro Sosa",
      "Алехандро Соса",
      "Тони Монтана",
      "Frank Lopez"
    ],
    "scent of a woman": [
      "wikitext"
    ],
    "scream": [
      "Тэйтум Райли",
      "Tatum Riley",
      "Billy Loomis",
      "Билли Лумис",
      "Стю Мэчер",
      "Stu Macher",
      "Cotton Weary",
      "Коттон Уири",
      "The Macher House",
      "Дом Мэчеров",
      "opening scenes of the Scream franchise",
      "Открывающая сцена (франшиза «Крик»)",
      "Casey Becker",
      "Кейси Бейкер",
      "Randy Meeks",
      "Рэнди Микс",
      "Ghostface",
      "Призрачное лицо"
    ],
    "seinfeld": [
      "Джерри Сайнфелд",
      "Джордж Костанза",
      "Jackie Chiles",
      "George Costanza",
      "Estelle Costanza",
      "Helen Seinfeld",
      "Susan Ross",
      "David Puddy",
      "J. Peterman",
      "Jack Klompus",
      "Tim Whatley",
      "Jerry Seinfeld",
      "Morty Seinfeld",
      "Elaine Benes",
      "Элейн Бенес",
      "Cosmo Kramer",
      "Космо Крамер",
      "Monk's Café",
      "Yev Kassem",
      "Uncle Leo",
      "Frank Costanza",
      "wikitext"
    ],
    "servant of the people": [
      "wikitext",
      "Servant leadership"
    ],
    "sesame street": [
      "Влас и Еник",
      "Telly Monster",
      "Oscar the Grouch",
      "Prairie Dawn",
      "Guy Smiley",
      "Abby Cadabby",
      "The Muppets",
      "Snuffleupagus",
      "The Ringmaster",
      "Baby Bear",
      "Kermit the Frog",
      "Лягушонок Кермит",
      "Cookie Monster",
      "Count von Count",
      "Граф фон Знак",
      "Countess Dahling von Dahling",
      "Mr. Hooper",
      "The Robinson family",
      "Two-Headed Monster",
      "Roosevelt Franklin",
      "Рузвельт Франклин",
      "Murray Monster",
      "Bert and Ernie",
      "Большая Птица"
    ],
    "seven": [
      "Tracy Mills",
      "William Somerset",
      "wikitext"
    ],
    "seven samurai": [
      "wikitext"
    ],
    "sex and the city": [
      "Samantha Jones",
      "Саманта Джонс",
      "Carrie Bradshaw",
      "Кэрри Брэдшоу",
      "Charlotte York Goldenblatt",
      "Miranda Hobbes",
      "Aidan Shaw",
      "wikitext"
    ],
    "shakespeare in love": [
      "wikitext"
    ],
    "shameless": [
      "Frank Gallagher",
      "Mickey Maguire",
      "Фрэнк Галлахер",
      "Ian Gallagher",
      "Mickey Milkovich",
      "Carl Gallagher",
      "Kevin Ball",
      "Fiona Gallagher",
      "Phillip Gallagher",
      "Debbie Gallagher",
      "Liam Gallagher",
      "Monica Gallagher",
      "Veronica Fisher",
      "Jasmine Hollander",
      "Miss June",
      "wikitext"
    ],
    "sherlock holmes": [
      "wikitext"
    ],
    "sherlock holmes a game of shadows": [
      "wikitext"
    ],
    "silent hill revelation": [
      "Claudia Wolf"
    ],
    "sin city": [
      "Jack Rafferty",
      "Nancy Callahan",
      "Basin City",
      "Roark family",
      "семья Рорк",
      "Commissioner Liebowitz",
      "Комиссар Лебовиц",
      "Dwight McCarthy",
      "Дуайт Маккарти",
      "Джеки-бой",
      "Нэнси Каллахан",
      "Бэйсин-Сити",
      "Burt Shlubb",
      "Roark Junior",
      "Бёрт Шлабб",
      "Рорк-младший",
      "Cardinal Roark",
      "кардинал Рорк",
      "The Girls of Old Town",
      "Девочки старого города",
      "wikitext"
    ],
    "skyfall": [
      "James Bond",
      "Gareth Mallory",
      "Гарет Мэллори",
      "Джеймс Бонд",
      "Eve Moneypenny",
      "Ив Манипенни",
      "Bill Tanner",
      "Билл Таннер",
      "Miss Moneypenny",
      "мисс Манипенни",
      "Raoul Silva",
      "Рауль Сильва",
      "wikitext"
    ],
    "sleepless in seattle": [
      "бессонница"
    ],
    "smallville": [
      "wikitext"
    ],
    "snowdrop": [
      "wikitext"
    ],
    "solaris": [
      "wikitext",
      "Stanisław Lem"
    ],
    "some like it hot": [
      "wikitext"
    ],
    "sons of anarchy": [
      "wikitext"
    ],
    "spartacus": [
      "I am Spartacus",
      "wikitext"
    ],
    "spectre": [
      "wikitext"
    ],
    "speed": [
      "Annie Porter",
      "Энни Портер"
    ],
    "spider man": [
      "wikitext"
    ],
    "spider man far from home": [
      "wikitext"
    ],
    "spider man homecoming": [
      "wikitext"
    ],
    "stalker": [
      "wikitext"
    ],
    "star trek deep space nine": [
      "Klingon forehead Ridges",
      "Deep Space 9",
      "Глубокий космос 9",
      "Intrepid class",
      "Жан-Люк Пикар",
      "Julian Bashir",
      "Джулиан Башир",
      "Kira Nerys",
      "Кира Нерис",
      "Майлз О’Брайн",
      "Эзри Дакс",
      "Romulan Star Empire",
      "Jake Sisko",
      "Джейк Сиско",
      "Lwaxana Troi",
      "Galaxy class",
      "Kai Opaka",
      "Кай Опака",
      "Nausicaans",
      "Prophets of Bajor",
      "Species of Star Trek: Deep Space Nine",
      "Bareil Antos",
      "Барайл Антос",
      "Ромуланская Звёздная империя"
    ],
    "star trek enterprise": [
      "wikitext"
    ],
    "star trek the next generation": [
      "Alyssa Ogawa",
      "Disruptor",
      "Жан-Люк Пикар",
      "Ian Andrew Troi",
      "Kestra Troi",
      "Lwaxana Troi",
      "USS Enterprise-D",
      "Энтерпрайз NCC-1701-D",
      "Samuel Clemens",
      "Самюэль Клеменс",
      "Thadiun Okona",
      "Klingon forehead Ridges",
      "Robin Lefler",
      "Galaxy class",
      "Nausicaans",
      "Cortin Zweller",
      "species of Star Trek: The Next Generation",
      "wikitext"
    ],
    "star trek the original series": [
      "USS Enterprise",
      "Leonard McCoy",
      "Леонард МакКой",
      "Samuel Kirk",
      "Сэмюэл Кирк",
      "Куда не ступала нога человека",
      "Павел Чехов",
      "Janice Rand",
      "Дженис Рэнд",
      "Christine Chapel",
      "Кристин Чапел",
      "Pavel Chekov",
      "Species of Star Trek: The Original Series",
      "Where no man has gone before",
      "Hikaru Sulu",
      "Хикару Сулу",
      "Монтгомери Скотт",
      "Nyota Uhura",
      "Нийота Ухура",
      "Joseph M'Benga",
      "Варп-двигатель",
      "Энтерпрайз NCC-1701",
      "warp drive",
      "Джеймс Тиберий Кирк"
    ],
    "star trek voyager": [
      "Joe Carey",
      "Intrepid class",
      "Lon Suder",
      "Samantha Wildman",
      "Transwarp drive",
      "USS Voyager",
      "Galaxy class",
      "Species of Star Trek: Voyager",
      "Delta Flyer",
      "B'Elanna Torres",
      "Б'Еланна Торрес",
      "Kathryn Janeway",
      "USS Вояджер",
      "Кэтрин Джейнвэй",
      "wikitext"
    ],
    "star wars episode i the phantom menace": [
      "wikitext"
    ],
    "star wars episode ii attack of the clones": [
      "wikitext"
    ],
    "star wars episode iii revenge of the sith": [
      "Lava flea",
      "hyperspace",
      "Breha Organa",
      "Venator-class star destroyer",
      "Mon Calamari",
      "Мон-каламари",
      "Polis Massa system",
      "Приказ 66",
      "световой меч",
      "Граф Дуку",
      "Padmé Amidala",
      "Wilhuff Tarkin",
      "Лея Органа",
      "Падме Амидала",
      "Coruscant",
      "Luke Skywalker",
      "lightsaber",
      "Obi-Wan Kenobi",
      "Оби-Ван Кеноби",
      "Princess Leia",
      "Millennium Falcon",
      "Тысячелетний сокол",
      "Anakin Skywalker",
      "Count Dooku"
    ],
    "star wars episode iv a new hope": [
      "Luke Skywalker",
      "Chewbacca",
      "Оби-Ван Кеноби",
      "Princess Leia",
      "Люк Скайуокер",
      "Jabba the Hutt",
      "stormtrooper",
      "Wilhuff Tarkin",
      "Джабба Хатт",
      "имперские штурмовики",
      "Лея Органа",
      "Уилхуфф Таркин",
      "Darth Vader",
      "Death Star",
      "hyperspace",
      "lightsaber",
      "Звезда смерти",
      "Obi-Wan Kenobi",
      "Lak Sivrak",
      "Лак Сиврак",
      "Ponda Baba",
      "Momaw Nadon",
      "Garven Dreis",
      "Дарт Вейдер"
    ],
    "star wars episode vii the force awakens": [
      "Luke Skywalker",
      "lightsaber",
      "Millennium Falcon",
      "световой меч",
      "Тысячелетний сокол",
      "Люк Скайуокер",
      "snowtrooper",
      "снежные штурмовики",
      "Chewbacca",
      "hyperspace",
      "Inner Rim",
      "Внутреннее Кольцо",
      "Princess Leia",
      "Supreme Leader Snoke",
      "верховный лидер Сноук",
      "Кайло Рен",
      "Poe Dameron",
      "По Дэмерон",
      "General Hux",
      "генерал Хакс",
      "Maz Kanata",
      "Маз Каната",
      "Nien Nunb",
      "Snap Wexley"
    ],
    "star wars the force awakens": [
      "wikitext"
    ],
    "stargate": [
      "Дэниел Джексон",
      "Джек О’Нилл",
      "Mobile Analytic Laboratory Probe",
      "Daniel Jackson",
      "Jack O'Neill"
    ],
    "stargate atlantis": [
      "wikitext"
    ],
    "stargate sg 1": [
      "wikitext"
    ],
    "storm of love": [
      "Julius König",
      "Johann Gruber",
      "Alexander Saalfeld",
      "Astrid Ostermeyer",
      "Brigitte König",
      "Charlotte Saalfeld",
      "Deborah Ann Williams",
      "Götz Zastrow",
      "Viktoria Tarrasch"
    ],
    "strike commando 2": [
      "Michael Ransom",
      "Майкл Рэнсом"
    ],
    "suicide squad": [
      "wikitext",
      "The Suicide Squad (film)"
    ],
    "suits": [
      "wikitext"
    ],
    "supernatural": [
      "Zachariah",
      "Gordon Walker",
      "Гордон Уокер",
      "Pamela Barnes",
      "Памела Барнс",
      "Linda Tran",
      "Kevin Tran",
      "Ava Wilson",
      "Meg Masters",
      "Эва Уилсон",
      "Mary Winchester",
      "Мег Мастерс",
      "Мэри Винчестер",
      "Becky Rosen",
      "Бекки Розен",
      "Benny Lafitte",
      "Бенни Лафитт",
      "Rufus Turner",
      "Линда Трен",
      "Руфус Тёрнер",
      "Кевин Трен",
      "Bela Talbot",
      "Jessica Moore",
      "Max Miller"
    ],
    "taxa": [
      "René Boye-Larsen"
    ],
    "taxi driver": [
      "Travis Bickle",
      "Трэвис Бикл",
      "бессонница"
    ],
    "teddy bear": [
      "Ryszard Ochódzki"
    ],
    "teen wolf": [
      "wikitext"
    ],
    "teenage mutant ninja turtles": [
      "Donatello",
      "Michelangelo",
      "April O'Neil",
      "Эйприл О’Нил",
      "Микеланджело",
      "Донателло",
      "Кейси Джонс",
      "Кэйси Джонс",
      "Дэниел Пеннингтон",
      "Чарльз Пеннингтон",
      "Черепашки-ниндзя",
      "O'Neil Farm",
      "Foot Clan",
      "Casey Jones and April O'Neil"
    ],
    "teletubbies": [
      "Tinky Winky",
      "Тинки-Винки",
      "flag of Teletubbies",
      "Tubby Custard",
      "Tubby Toast",
      "wikitext",
      "Unbreakable (film)"
    ],
    "tell no one": [
      "1 rue du Pont-Neuf"
    ],
    "terminator salvation": [
      "John Connor",
      "Джон Коннор",
      "Terminator",
      "Терминатор",
      "Kyle Reese",
      "Marcus Wright",
      "Маркус Райт",
      "Kate Brewster",
      "Кейт Брустер",
      "Блэр Уильямс"
    ],
    "terminator the sarah connor chronicles": [
      "Derek Reese",
      "James Ellison",
      "Джеймс Эллисон",
      "Cromartie",
      "Дерек Риз",
      "Heisler Beer",
      "Catherine Weaver",
      "Peter Silberman",
      "Питер Силберман",
      "Riley Dawson",
      "Райли Доусон",
      "Камерон Филлипс",
      "John Connor",
      "Джон Коннор",
      "Sarah Connor",
      "Сара Коннор",
      "Kyle Reese"
    ],
    "that 70s show": [
      "wikitext"
    ],
    "the 100": [
      "wikitext",
      "Kass Morgan"
    ],
    "the amazing spider man": [
      "wikitext"
    ],
    "the amazing spider man 2": [
      "wikitext"
    ],
    "the artist": [
      "wikitext"
    ],
    "the avengers": [
      "wikitext"
    ],
    "the aviator": [
      "wikitext"
    ],
    "the batman": [
      "wikitext"
    ],
    "the big bang theory": [
      "Charlie Tucker",
      "Mary Cooper",
      "ZanGen Pharmaceuticals",
      "Emily Sweeney",
      "Missy Cooper",
      "Мисси Купер",
      "Georgie Cooper",
      "Джорджи Купер",
      "Эмили Суини",
      "Connie Tucker",
      "Конни Такер",
      "Bert Kibbler",
      "Берт Кибблер",
      "Sheldon's spot",
      "Место Шелдона",
      "Leslie Winkle",
      "Лесли Уинкл",
      "Michael J. Massimino",
      "Майкл Джеймс Массимино",
      "Amy Farrah Fowler",
      "Эми Фара Фаулер",
      "Bernadette Rostenkowski-Wolowitz",
      "Бернадетт Ростенковски",
      "Footprints on the Moon"
    ],
    "the blacklist": [
      "wikitext"
    ],
    "the blues brothers": [
      "Bluesmobile",
      "Lake Wasapumani",
      "Wacker Drive"
    ],
    "the bold and the beautiful": [
      "Amber Moore",
      "Эмбер Мур",
      "Lauren Fenmore",
      "Katherine Chancellor",
      "Stephanie Forrester",
      "Donna Logan",
      "Jackie Marone",
      "Clarke Garrison",
      "Abby Carlton",
      "Bridget Forrester",
      "Taylor Forrester",
      "Karen Spencer",
      "Caroline Spencer",
      "Eric Forrester",
      "Кэролайн Спенсер"
    ],
    "the bourne identity": [
      "Jason Bourne",
      "Nicky Parsons",
      "Ники Парсонс",
      "Treadstone",
      "Тредстоун",
      "Джейсон Борн",
      "Alexander Conklin",
      "Александр Конклин",
      "Marie Kreutz",
      "Мария Кройтц",
      "Ward Abbott",
      "Уорд Эбботт",
      "wikitext"
    ],
    "the bourne ultimatum": [
      "Jason Bourne",
      "Pamela Landy",
      "Памела Лэнди",
      "Джейсон Борн",
      "Nicky Parsons",
      "Ники Парсонс",
      "Simon Ross",
      "Dr. Albert Hirsch",
      "Ezra Kramer",
      "Noah Vosen",
      "доктор Альберт Хирш",
      "Ноа Восен",
      "Саймон Росс",
      "Эзра Креймер",
      "wikitext"
    ],
    "the bridge on the river kwai": [
      "wikitext"
    ],
    "the cabin in the woods": [
      "Dana Polk"
    ],
    "the curious case of benjamin button": [
      "wikitext"
    ],
    "the da vinci code": [
      "Robert Langdon",
      "Prelature of the Holy Cross and Opus Dei",
      "Роберт Лэнгдон",
      "wikitext"
    ],
    "the dark knight rises": [
      "Женщина-кошка"
    ],
    "the day after tomorrow": [
      "wikitext"
    ],
    "the deer hunter": [
      "wikitext"
    ],
    "the diamond arm": [
      "wikitext"
    ],
    "the english patient": [
      "wikitext"
    ],
    "the falcon and the winter soldier": [
      "wikitext"
    ],
    "the fast and the furious": [
      "wikitext"
    ],
    "the fast and the furious tokyo drift": [
      "wikitext"
    ],
    "the fifth element": [
      "Korben Dallas",
      "Plavalaguna",
      "Плавалагуна",
      "The Divine Language",
      "божественный язык",
      "wikitext"
    ],
    "the flash": [
      "wikitext"
    ],
    "the fugitive": [
      "Richard Kimble",
      "Ричард Кимбл"
    ],
    "the gendarme of saint tropez": [
      "Nicole Cruchot"
    ],
    "the godfather": [
      "Mark McCluskey",
      "Марк Маккласки",
      "Paulie Gatto",
      "Полли Гато",
      "Vito Corleone",
      "Вито Корлеоне"
    ],
    "the good the bad and the ugly": [
      "Angel Eyes",
      "75 mm Whitworth gun, Model 1873 (Cartagena)",
      "wikitext"
    ],
    "the good wife": [
      "Elsbeth Tascioni",
      "Cary Agos",
      "Jackie Florrick",
      "Lockhart/Gardner",
      "Nick Savarese",
      "Owen Cavanaugh",
      "Jonas Stern",
      "Alicia Florrick",
      "Grace Florrick",
      "William Gardner",
      "Diane Lockhart",
      "Kalinda Sharma",
      "Калинда Шарма",
      "Peter Florrick"
    ],
    "the great dictator": [
      "Adenoid Hynkel",
      "Аденоид Хинкель",
      "Benzino Napaloni",
      "Бензино Напалони",
      "Osterlich",
      "wikitext",
      "Charlie Chaplin"
    ],
    "the handmaid s tale": [
      "wikitext"
    ],
    "the hobbit an unexpected journey": [
      "Arkenstone",
      "Аркенстон",
      "Frodo Baggins",
      "Фродо Бэггинс",
      "wikitext"
    ],
    "the hobbit the battle of the five armies": [
      "wikitext"
    ],
    "the hobbit the desolation of smaug": [
      "wikitext"
    ],
    "the hunger games": [
      "wikitext",
      "Suzanne Collins"
    ],
    "the hurt locker": [
      "wikitext"
    ],
    "the incredible hulk": [
      "wikitext"
    ],
    "the irony of fate": [
      "wikitext",
      "Hubert Parry"
    ],
    "the king s speech": [
      "wikitext"
    ],
    "the last airbender": [
      "airbending",
      "firebending",
      "магия воздуха",
      "магия огня",
      "waterbending",
      "магия воды",
      "earthbending",
      "магия земли"
    ],
    "the last emperor": [
      "wikitext"
    ],
    "the last samurai": [
      "wikitext"
    ],
    "the lives of others": [
      "wikitext"
    ],
    "the lord of the rings the fellowship of the ring": [
      "wikitext"
    ],
    "the lord of the rings the return of the king": [
      "wikitext"
    ],
    "the lord of the rings the two towers": [
      "wikitext"
    ],
    "the lost world jurassic park": [
      "wikitext"
    ],
    "the magnificent seven": [
      "Chris Adams",
      "Крис Адамс"
    ],
    "the mask": [
      "wikitext"
    ],
    "the matrix reloaded": [
      "wikitext"
    ],
    "the matrix revolutions": [
      "wikitext"
    ],
    "the mentalist": [
      "wikitext"
    ],
    "the mortal instruments city of bones": [
      "Jace Herondale",
      "Джейс Эрондейл",
      "Clary Fray",
      "Клэри Фрэй"
    ],
    "the mummy": [
      "wikitext"
    ],
    "the o c": [
      "wikitext"
    ],
    "the odyssey": [
      "wikitext"
    ],
    "the office": [
      "President Jackson",
      "Robert Lipton",
      "Dunder Mifflin Scranton",
      "Mose Schrute",
      "Kevin Malone",
      "Karen Filippelli",
      "Kelly Kapoor",
      "Michael Scott",
      "David Wallace",
      "Майкл Скотт",
      "Ryan Howard",
      "Erin Hannon",
      "Райан Ховард",
      "Jim Halpert",
      "Джим Халперт",
      "Pam Beesly",
      "Пэм Бисли",
      "Creed Bratton",
      "Крид Брэттон",
      "Анджела Мартин",
      "Darryl Philbin",
      "Gabe Lewis",
      "Jan Levinson",
      "Chris Finch"
    ],
    "the passion of the christ": [
      "Jesus Christ",
      "Иисус Христос",
      "Pontius Pilatus",
      "Понтий Пилат"
    ],
    "the penthouse war in life": [
      "wikitext",
      "Roger Waters"
    ],
    "the pianist": [
      "wikitext"
    ],
    "the pleasure garden": [
      "Isola Comacina",
      "Ponte della Civera"
    ],
    "the prestige": [
      "wikitext"
    ],
    "the sarah jane adventures": [
      "Сара Джейн Смит",
      "Clyde Langer",
      "Клайд Лангер",
      "Sarah Jane Smith",
      "Eleventh Doctor",
      "Одиннадцатый Доктор",
      "Luke Smith",
      "Tenth Doctor",
      "Десятый Доктор",
      "Рани Чандра",
      "Sky Smith",
      "Скай Смит",
      "Trinity Wells",
      "Alan Jackson",
      "Мария Джексон",
      "Мистер Смит",
      "Rani Chandra",
      "Maria Jackson"
    ],
    "the seventh seal": [
      "wikitext"
    ],
    "the sisterhood of the traveling pants": [
      "Lena Kaligaris"
    ],
    "the sisterhood of the traveling pants 2": [
      "Lena Kaligaris"
    ],
    "the sopranos": [
      "Carmine Lupertazzi",
      "Кармайн Лупертацци",
      "Artie Bucco",
      "Арти Букко",
      "Vito Spatafore",
      "Вито Спатафоре",
      "Dwight Harris",
      "Tony Soprano",
      "Тони Сопрано",
      "list of The Sopranos characters",
      "Список героев телесериала «Семья Сопрано»",
      "Bada Bing",
      "Soprano crime family",
      "преступная семья Сопрано",
      "Butch DeConcini",
      "Eugene Pontecorvo",
      "Little Carmine",
      "Бутч Декончини",
      "Дуайт Харрис",
      "Малыш Кармайн",
      "Юджин Понтекорво",
      "Little Paulie Germani",
      "Малыш Поли Джермани",
      "Gloria Trillo"
    ],
    "the sound of music": [
      "wikitext"
    ],
    "the terminal": [
      "wikitext"
    ],
    "the terminator": [
      "Sarah Connor",
      "Сара Коннор",
      "Terminator",
      "Терминатор",
      "Peter Silberman",
      "Питер Силберман",
      "I'll be back",
      "I’ll be back",
      "Kyle Reese",
      "wikitext"
    ],
    "the third man": [
      "wikitext"
    ],
    "the three caballeros": [
      "wikitext"
    ],
    "the truman show": [
      "wikitext"
    ],
    "the twilight saga breaking dawn part 2": [
      "Edward Cullen",
      "Эдвард Каллен"
    ],
    "the twilight saga new moon": [
      "wikitext"
    ],
    "the untouchables": [
      "Jimmy Malone",
      "Джимми Мэлоун"
    ],
    "the vampire diaries": [
      "Jeremy Gilbert",
      "Katherine Pierce",
      "Stefan Salvatore",
      "Кэтрин Пирс",
      "Стефан Сальваторе",
      "Matt Donovan",
      "Niklaus Mikaelson",
      "Клаус Майклсон",
      "Mystic Falls",
      "Elijah Mikaelson",
      "Элайджа Майклсон",
      "Hayley Marshall-Kenner",
      "Мистик-Фоллс",
      "Rebekah Mikaelson",
      "Ребекка Майклсон",
      "Tyler Lockwood",
      "Тайлер Локвуд",
      "Caroline Forbes",
      "Мэтт Донован",
      "Jenna Sommers",
      "Дженна Соммерс",
      "Bonnie Bennett",
      "Бонни Беннет",
      "Damon Salvatore"
    ],
    "the walking dead": [
      "wikitext"
    ],
    "the weather man": [
      "David Spritz",
      "Дэвид Сприц"
    ],
    "the west wing": [
      "wikitext"
    ],
    "the wild geese": [
      "Lieutenant Shaun Fynn",
      "лейтенант Шон Финн"
    ],
    "the wizard of oz": [
      "wikitext"
    ],
    "the wrestler": [
      "Randy Robinson"
    ],
    "the x files": [
      "Syndicate",
      "John Doggett",
      "Jimmy Bond",
      "Frank Black",
      "The Smoking Man",
      "Курильщик",
      "Jeffrey Spender",
      "Джеффри Спендер",
      "Jeremiah Smith",
      "Deep Throat",
      "Глубокая Глотка",
      "Umbrella Man",
      "Человек с зонтиком",
      "Knowle Rohrer",
      "Ноул Рорер",
      "The Lone Gunmen",
      "Одинокие стрелки",
      "Well-Manicured Man",
      "Alien Bounty Hunter",
      "Инопланетный охотник",
      "Diana Fowley",
      "Диана Фоули",
      "Samantha Mulder",
      "Саманта Малдер"
    ],
    "thor": [
      "wikitext"
    ],
    "thor ragnarok": [
      "wikitext"
    ],
    "titanic": [
      "Heart of the Ocean",
      "Jack Dawson",
      "Brock Lovett",
      "Lizzy Calvert",
      "Брок Лаветт",
      "Лиззи Кэлверт",
      "Джек Доусон",
      "Caledon Hockley",
      "Каледон Хокли",
      "Fabrizio De Rossi",
      "Ruth DeWitt Bukater",
      "Spicer Lovejoy",
      "Tommy Ryan",
      "Руфь Дьюитт Бьюкейтер",
      "Спайсер Лавджой",
      "Томми Райан",
      "Фабрицио Де Росси",
      "Rose DeWitt Bukater",
      "Роза Дьюитт Бьюкейтер"
    ],
    "top gear": [
      "wikitext"
    ],
    "torrente 4 lethal crisis": [
      "José Luis Torrente"
    ],
    "totally spies": [
      "wikitext"
    ],
    "trainspotting": [
      "Mark Renton",
      "Марк Рентон",
      "Perfect Day",
      "Francis Begbie",
      "wikitext"
    ],
    "transformers": [
      "wikitext"
    ],
    "transformers revenge of the fallen": [
      "Robert Epps",
      "Soundwave",
      "Mikaela Banes",
      "Саундвейв",
      "Роберт Эппс",
      "Микаэла Бейнс"
    ],
    "tron legacy": [
      "Sam Flynn",
      "light cycle"
    ],
    "troy": [
      "wikitext"
    ],
    "true beauty": [
      "wikitext"
    ],
    "true blood": [
      "wikitext"
    ],
    "twilight": [
      "wikitext"
    ],
    "twin peaks": [
      "The Giant",
      "Dale Cooper",
      "Leo Johnson",
      "Beth Ferguson",
      "Бет Фергюсон",
      "James Hurley",
      "Gordon Cole",
      "Audrey Horne",
      "Laura Palmer",
      "Одри Хорн",
      "Donna Hayward",
      "Донна Хейворд",
      "Ben Horne",
      "Sarah Palmer",
      "Bobby Briggs",
      "Бобби Бриггс",
      "Harry S. Truman",
      "Bernard Renault",
      "Shelly Johnson",
      "Lawrence Jacoby",
      "Лоуренс Джейкоби",
      "Norma Jennings",
      "Норма Дженнингс",
      "Lucy Moran"
    ],
    "two and a half men": [
      "wikitext"
    ],
    "unforgiven": [
      "Уильям Манни",
      "William Munny",
      "wikitext"
    ],
    "v": [
      "Evey Hammond",
      "Иви Хэммонд",
      "Norsefire",
      "Adam Susan",
      "Адам Сьюзэн"
    ],
    "v for vendetta": [
      "Evey Hammond",
      "Иви Хэммонд",
      "Norsefire",
      "Adam Susan",
      "Адам Сьюзэн",
      "wikitext"
    ],
    "vabank": [
      "Henryk Kwinto"
    ],
    "vabank ii point of no return": [
      "Henryk Kwinto"
    ],
    "venom": [
      "wikitext"
    ],
    "verbotene liebe": [
      "Christian Mann",
      "Maria di Balbi",
      "Stella Mann",
      "Lars Schneider",
      "Dana Wolf",
      "Oliver Sabel",
      "Marlene Wolf",
      "Henning von Anstetten",
      "Andi Fritzsche",
      "Annegret Wittkamp",
      "Ansgar von Lahnstein",
      "Arno Brandner",
      "Bernd von Beyenbach",
      "Carla von Lahnstein",
      "Charlie Schneider",
      "Clarissa von Anstetten",
      "Кларисса фон Анштеттен",
      "Constantin von Lahnstein",
      "Cécile de Maron",
      "David Brandner",
      "Elisabeth von Lahnstein",
      "Fabian Brandner",
      "Florian Brandner",
      "Gregor Mann"
    ],
    "veronica mars": [
      "Cindy \"Mac\" Mackenzie",
      "Синди «Мак» МакКензи",
      "Duncan Kane",
      "Дункан Кейн",
      "Logan Echolls",
      "Wallace Fennel",
      "Логан Экхоллз",
      "Уоллес Финнел",
      "Eli \"Weevil\" Navarro",
      "Элай «Слоник» Наварро",
      "Lilly Kane",
      "Neptune High",
      "Старшая школа Нептуна",
      "Stosh \"Piz\" Piznarski",
      "Стош «Пиз» Пизнарски",
      "Leo D'Amato",
      "Лео Д'Амато",
      "Julia Smith",
      "Neptune, California",
      "Лили Кейн",
      "Dick Casablancas",
      "Дик Касабланкес",
      "Jackie Cook",
      "Heisler Beer"
    ],
    "vertigo": [
      "wikitext"
    ],
    "victorious": [
      "Brain Squeezers",
      "Color Me Pot",
      "SplashFace",
      "pooka fish",
      "Alphabet Improv",
      "Queries for Couples",
      "Cat Valentine",
      "Robbie Shapiro",
      "Tori Vega",
      "Jade West",
      "wikitext"
    ],
    "vincenzo": [
      "wikitext",
      "Vincenzo Cuoco"
    ],
    "voyage to the bottom of the sea": [
      "Francis Ethelbert Sharkey",
      "USOS Seaview"
    ],
    "wandavision": [
      "wikitext"
    ],
    "wanted": [
      "Wesley Gibson",
      "Уэсли Гибсон",
      "wikitext"
    ],
    "war and peace": [
      "wikitext"
    ],
    "watchmen": [
      "Dollar Bill",
      "Доллар Билл",
      "Hooded Justice"
    ],
    "weeds": [
      "Nancy Botwin"
    ],
    "white collar": [
      "Peter Burke",
      "Clinton Jones",
      "Sara Ellis",
      "Heisler Beer",
      "Elizabeth Burke",
      "Neal Caffrey",
      "Нил Кэффри",
      "Diana Berrigan"
    ],
    "will grace": [
      "wikitext"
    ],
    "wizards of waverly place": [
      "wikitext"
    ],
    "wonder woman": [
      "wikitext"
    ],
    "world war z": [
      "Jerusalem International Airport"
    ],
    "wwe raw": [
      "wikitext"
    ],
    "wwe smackdown": [
      "wikitext"
    ],
    "x men": [
      "Professor X",
      "Профессор Икс",
      "Саблезубый",
      "Sabretooth",
      "Человек-лёд",
      "Wolverine",
      "Robert Kelly",
      "Kitty Pryde",
      "Китти Прайд",
      "Jean Grey",
      "Джин Грей",
      "Роберт Келли",
      "wikitext"
    ],
    "xena warrior princess": [
      "Gabrielle",
      "Aphrodite",
      "Brunhilda",
      "Salmoneus",
      "Арес (телеперсонаж)",
      "wikitext"
    ],
    "young sheldon": [
      "wikitext"
    ],
    "z": [
      "Jerusalem International Airport"
    ],
    "zandalee": [
      "Johnny Collins"
    ]
  };
  function addAll(film, list) {
    if (!list || !film || !film.quotes) return;
    list.forEach(function (q) {
      var t = String(q || '').trim();
      if (t.length < 3) return;
      if (film.quotes.indexOf(t) === -1) film.quotes.push(t);
    });
  }
  (window.POFRAZE_FILMS || []).forEach(function (film) {
    var keys = [norm(film.originalTitle), norm(film.wikiEn), norm(film.title)];
    keys.forEach(function (k) {
      if (!k || k.length < 4) return;
      addAll(film, map[k]);
    });
  });
})();
