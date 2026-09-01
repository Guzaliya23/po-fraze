(function () {
  function norm(s) {
    return String(s || '')
      .toLowerCase()
      .replace(/\u0451/g, '\u0435')
      .replace(/\([^)]*\)/g, ' ')
      .replace(/[^a-z\u0430-\u044f0-9]+/g, ' ')
      .trim();
  }
  var afi = {
    "2001 a space odyssey": [
      "Open the pod bay doors, HAL."
    ],
    "42nd street": [
      "Sawyer, you're going out a youngster, but you've got to come back a star!"
    ],
    "a few good men": [
      "You can't handle the truth!"
    ],
    "a league of their own": [
      "There's no crying in baseball!"
    ],
    "a streetcar named desire": [
      "Stella! Hey, Stella!",
      "I have always depended on the kindness of strangers."
    ],
    "airplane": [
      "Striker: \"Surely you can't be serious.\" Rumack: \"I am serious ... and don't call me Shirley."
    ],
    "all about eve": [
      "Fasten your seatbelts. It's going to be a bumpy night."
    ],
    "animal crackers": [
      "One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know."
    ],
    "annie hall": [
      "La-dee-da, la-dee-da."
    ],
    "apocalypse now": [
      "I love the smell of napalm in the morning."
    ],
    "apollo 13": [
      "Houston, we have a problem."
    ],
    "auntie mame": [
      "Life is a banquet, and most poor suckers are starving to death!"
    ],
    "beyond the forest": [
      "What a dump."
    ],
    "bonnie and clyde": [
      "We rob banks."
    ],
    "caddyshack": [
      "Cinderella story. Outta nowhere. A former greenskeeper, now, about to become the Masters champion. It looks like a mirac...It's in the hole! It's in the hole! It's in the hole!"
    ],
    "casablanca": [
      "Here's looking at you, kid.",
      "Louis, I think this is the beginning of a beautiful friendship.",
      "Play it, Sam. Play 'As Time Goes By.'",
      "Round up the usual suspects.",
      "We'll always have Paris.",
      "Of all the gin joints in all the towns in all the world, she walks into mine."
    ],
    "chinatown": [
      "Forget it, Jake, it's Chinatown."
    ],
    "citizen kane": [
      "Rosebud."
    ],
    "cool hand luke": [
      "What we've got here is failure to communicate."
    ],
    "dead poets society": [
      "Carpe diem. Seize the day, boys. Make your lives extraordinary."
    ],
    "dirty dancing": [
      "Nobody puts Baby in a corner."
    ],
    "dirty harry": [
      "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?"
    ],
    "dog day afternoon": [
      "Attica! Attica!"
    ],
    "dr no": [
      "Bond. James Bond."
    ],
    "dr strangelove": [
      "Gentlemen, you can't fight in here! This is the War Room!"
    ],
    "dracula": [
      "Listen to them. Children of the night. What music they make."
    ],
    "e t the extra terrestrial": [
      "E.T. phone home."
    ],
    "field of dreams": [
      "If you build it, he will come."
    ],
    "forrest gump": [
      "My mama always said life was like a box of chocolates. You never know what you're gonna get."
    ],
    "frankenstein": [
      "It's alive! It's alive!"
    ],
    "funny girl": [
      "Hello, gorgeous."
    ],
    "goldfinger": [
      "A martini. Shaken, not stirred."
    ],
    "gone with the wind": [
      "Frankly, my dear, I don't give a damn.",
      "After all, tomorrow is another day!",
      "As God is my witness, I'll never be hungry again."
    ],
    "grand hotel": [
      "I want to be alone."
    ],
    "in the heat of the night": [
      "They call me Mister Tibbs!"
    ],
    "jaws": [
      "You're gonna need a bigger boat."
    ],
    "jerry maguire": [
      "Show me the money!",
      "You had me at 'hello.'"
    ],
    "king kong": [
      "Oh, no, it wasn't the airplanes. It was Beauty killed the Beast.\"<!-- The AFI quotes it as \"it was\", not \"twas\" -->"
    ],
    "knute rockne all american": [
      "Tell 'em to go out there with all they got and win just one for the Gipper."
    ],
    "little caesar": [
      "Mother of mercy, is this the end of Rico?"
    ],
    "love story": [
      "Love means never having to say you're sorry."
    ],
    "marathon man": [
      "Is it safe?"
    ],
    "midnight cowboy": [
      "I'm walkin' here! I'm walkin' here!"
    ],
    "mommie dearest": [
      "No wire hangers, ever!"
    ],
    "moonstruck": [
      "Snap out of it!"
    ],
    "national lampoon s animal house": [
      "Toga! Toga!"
    ],
    "network": [
      "I'm as mad as hell, and I'm not going to take this anymore!"
    ],
    "now voyager": [
      "Oh, Jerry, {{not a typo|don't let's}} ask for the moon. We have the stars.",
      "Oh, Jerry, don't let's ask for the moon. We have the stars."
    ],
    "on golden pond": [
      "Listen to me, mister. You're my knight in shining armor. Don't you forget it. You're going to get back on that horse, and I'm going to be right behind you, holding on tight, and away we're gonna go, go, go!"
    ],
    "on the waterfront": [
      "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am."
    ],
    "planet of the apes": [
      "Take your stinking paws off me, you damned dirty ape.\"<!-- According to http://connect.afi.com/site/DocServer/quotes100.pdf?docID=242, it is \"Get...\" --><!-- Verified as \"Get...\" April 2010: [http://connect.afi.com/site/DocServer/quotes100.pdf?docID=242] --><!-- It's \"Get\" in both the nominations and selected lists available for download. !-->"
    ],
    "poltergeist": [
      "They're here!"
    ],
    "psycho": [
      "A boy's best friend is his mother."
    ],
    "rocky": [
      "Yo, Adrian!"
    ],
    "scarface": [
      "Say 'hello' to my little friend!"
    ],
    "shane": [
      "Shane. Shane. Come back!"
    ],
    "she done him wrong": [
      "Why don't you come up sometime and see me?"
    ],
    "some like it hot": [
      "Well, nobody's perfect."
    ],
    "sons of the desert": [
      "Well, here's another nice mess you've gotten me into!"
    ],
    "soylent green": [
      "Soylent Green is people!"
    ],
    "star wars": [
      "May the Force be with you."
    ],
    "sudden impact": [
      "Go ahead, make my day."
    ],
    "sunset boulevard": [
      "All right, Mr. DeMille, I'm ready for my close-up.",
      "I am big! It's the pictures that got small."
    ],
    "taxi driver": [
      "You talkin' to me?"
    ],
    "terminator 2 judgment day": [
      "Hasta la vista, baby."
    ],
    "the adventures of sherlock holmes": [
      "Elementary, my dear Watson."
    ],
    "the godfather": [
      "I'm gonna make him an offer he can't refuse."
    ],
    "the godfather part ii": [
      "Keep your friends close, but your enemies closer."
    ],
    "the graduate": [
      "Plastics.",
      "Mrs. Robinson, you're trying to seduce me. Aren't you?"
    ],
    "the jazz singer": [
      "Wait a minute, wait a minute. You ain't heard nothin' yet!"
    ],
    "the lord of the rings the two towers": [
      "My precious."
    ],
    "the maltese falcon": [
      "The stuff that dreams are made of."
    ],
    "the naughty nineties": [
      "Who's on first?"
    ],
    "the pride of the yankees": [
      "Today, I consider myself the luckiest man on the face of the Earth."
    ],
    "the shining": [
      "Here's Johnny!"
    ],
    "the silence of the lambs": [
      "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti."
    ],
    "the sixth sense": [
      "I see dead people."
    ],
    "the terminator": [
      "I'll be back."
    ],
    "the treasure of the sierra madre": [
      "Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!"
    ],
    "the wizard of oz": [
      "Toto, I've a feeling we're not in Kansas anymore.",
      "There's no place like home.",
      "I'll get you, my pretty, and your little dog too!",
      "There's no place like home.\" (also said earlier in the movie)"
    ],
    "titanic": [
      "I'm the king of the world!"
    ],
    "to have and have not": [
      "You know how to whistle, don't you, Steve? You just put your lips together and blow."
    ],
    "top gun": [
      "I feel the need—the need for speed!"
    ],
    "wall street": [
      "Greed, for lack of a better word, is good."
    ],
    "when harry met sally": [
      "I'll have what she's having."
    ],
    "white heat": [
      "Made it, Ma! Top of the world!"
    ],
    "yankee doodle dandy": [
      "My mother thanks you. My father thanks you. My sister thanks you. And I thank you.\"<ref>\"During the 'Gay Nineties' period, George M. coined [this as] his famous curtain speech{{nbsp}}...\" --",
      "My mother thanks you. My father thanks you. My sister thanks you. And I thank you."
    ]
  };
  var extraByNorm = {
    "2001 a space odyssey": [
      "open the pod bay doors hal",
      "im sorry dave im afraid i cant do that"
    ],
    "3 idiots": [
      "all is well"
    ],
    "a christmas story": [
      "youll shoot your eye out"
    ],
    "a few good men": [
      "you cant handle the truth",
      "РїСЂР°РІРґСѓ С‚С‹ РЅРµ РІС‹РґРµСЂР¶РёС€СЊ"
    ],
    "a streetcar named desire": [
      "stella",
      "kindness of strangers"
    ],
    "airplane": [
      "dont call me shirley",
      "surely you cant be serious"
    ],
    "akira": [
      "kaneda"
    ],
    "alien": [
      "in space no one can hear you scream"
    ],
    "aliens": [
      "get away from her you bitch"
    ],
    "all about eve": [
      "fasten your seatbelts its going to be a bumpy night"
    ],
    "amadeus": [
      "too many notes"
    ],
    "amelie": [
      "times are hard for dreamers"
    ],
    "andor": [
      "rebellions are built on hope"
    ],
    "annie hall": [
      "la dee da"
    ],
    "apocalypse now": [
      "i love the smell of napalm in the morning"
    ],
    "apollo 13": [
      "houston we have a problem",
      "С…СЊСЋСЃС‚РѕРЅ Сѓ РЅР°СЃ РїСЂРѕР±Р»РµРјР°"
    ],
    "arcane": [
      "oil and water"
    ],
    "arrival": [
      "if you could see your whole life from start to finish"
    ],
    "attack on titan": [
      "tatakae"
    ],
    "avatar": [
      "i see you"
    ],
    "avengers endgame": [
      "avengers assemble",
      "on your left"
    ],
    "back to the future": [
      "roads where were going we dont need roads",
      "great scott"
    ],
    "barbie": [
      "im just ken"
    ],
    "better call saul": [
      "its all good man"
    ],
    "black panther": [
      "wakanda forever"
    ],
    "blade runner": [
      "like tears in rain"
    ],
    "blade runner 2049": [
      "dying for the right cause is the most human thing we can do"
    ],
    "braveheart": [
      "freedom"
    ],
    "breakfast at tiffanys": [
      "i think its a lovely idea"
    ],
    "breaking bad": [
      "i am the one who knocks",
      "say my name"
    ],
    "bridgerton": [
      "dear gentle reader"
    ],
    "casablanca": [
      "heres looking at you kid",
      "play it sam",
      "well always have paris"
    ],
    "catch me if you can": [
      "people only know what you tell them",
      "the yankees win"
    ],
    "chernobyl": [
      "what is the cost of lies"
    ],
    "children of men": [
      "everything is a mythical mystical metaphor",
      "in 20 years babies became myth"
    ],
    "chinatown": [
      "forget it jake its chinatown"
    ],
    "chungking express": [
      "if memories could be canned"
    ],
    "cinema paradiso": [
      "living here day by day you think its the center of the world"
    ],
    "citizen kane": [
      "rosebud",
      "СЂРѕР·Р°Р±Р°Рґ"
    ],
    "city of god": [
      "if you run the beast catches you"
    ],
    "cool hand luke": [
      "what weve got here is failure to communicate"
    ],
    "coraline": [
      "be wise be smart think first"
    ],
    "cowboy bebop": [
      "see you space cowboy"
    ],
    "crouching tiger hidden dragon": [
      "a sword by itself rules nothing"
    ],
    "dark": [
      "the question is not if but when"
    ],
    "dead poets society": [
      "carpe diem seize the day",
      "Р»РѕРІРё РјРѕРјРµРЅС‚"
    ],
    "death note": [
      "i am justice"
    ],
    "demon slayer kimetsu no yaiba": [
      "total concentration"
    ],
    "die hard": [
      "yippee ki yay",
      "now i have a machine gun ho ho ho"
    ],
    "dirty dancing": [
      "nobody puts baby in a corner",
      "РјР°Р»С‹С€РєСѓ РІ СѓРіРѕР»"
    ],
    "dirty harry": [
      "do i feel lucky",
      "do you feel lucky punk"
    ],
    "district 9": [
      "to everyone who is trying to come to south africa"
    ],
    "donnie darko": [
      "why are you wearing that stupid man suit"
    ],
    "dr no": [
      "bond james bond",
      "Р±РѕРЅРґС‹ РґР¶РµР№РјСЃ Р±РѕРЅРґ",
      "РјРµРЅСЏ Р·РѕРІСѓС‚ Р±РѕРЅРґ"
    ],
    "dracula": [
      "listen to them children of the night"
    ],
    "dune": [
      "fear is the mind killer",
      "the spice must flow"
    ],
    "dune part two": [
      "lisan al gaib"
    ],
    "e t the extra terrestrial": [
      "et phone home"
    ],
    "elf": [
      "smiling s my favorite"
    ],
    "everything everywhere all at once": [
      "in another life i would have really liked just doing laundry"
    ],
    "ex machina": [
      "is it strange to have made something that hates you"
    ],
    "fallout": [
      "war never changes"
    ],
    "field of dreams": [
      "if you build it he will come",
      "if you build it they will come"
    ],
    "fight club": [
      "the first rule of fight club"
    ],
    "forrest gump": [
      "life is like a box of chocolates",
      "run forrest run",
      "stupid is as stupid does"
    ],
    "frankenstein": [
      "its alive"
    ],
    "friends": [
      "we were on a break",
      "how you doin"
    ],
    "from": [
      "dont go out at night"
    ],
    "frozen": [
      "let it go"
    ],
    "game of thrones": [
      "winter is coming",
      "you know nothing jon snow"
    ],
    "ghost in the shell": [
      "if a technological feat is possible"
    ],
    "gladiator": [
      "are you not entertained"
    ],
    "goldfinger": [
      "shaken not stirred",
      "РІР·Р±РѕР»С‚Р°С‚СЊ РЅРѕ РЅРµ СЃРјРµС€РёРІР°С‚СЊ"
    ],
    "gone girl": [
      "im the best kind of wife"
    ],
    "gone with the wind": [
      "frankly my dear i dont give a damn",
      "tomorrow is another day",
      "frankly my dear",
      "РЅРµ РѕС‚РґР°Рј Рё Р»РѕРјР°РЅРѕРіРѕ РіСЂРѕС€Р°"
    ],
    "goodfellas": [
      "as far back as i can remember i always wanted to be a gangster"
    ],
    "gravity": [
      "in space"
    ],
    "harry potter and the philosophers stone": [
      "youre a wizard harry"
    ],
    "harry potter and the sorcerers stone": [
      "youre a wizard harry"
    ],
    "heat": [
      "dont let yourself get attached to anything you are not willing to walk out on in 30 seconds"
    ],
    "her": [
      "sometimes i think i have felt everything im ever gonna feel"
    ],
    "home alone": [
      "keep the change ya filthy animal"
    ],
    "house of the dragon": [
      "fire and blood",
      "a son for a son"
    ],
    "howls moving castle": [
      "heres another curse for you"
    ],
    "in the mood for love": [
      "he remembers those vanished years"
    ],
    "inception": [
      "we need to go deeper"
    ],
    "indiana jones and the raiders of the lost ark": [
      "why did it have to be snakes"
    ],
    "interstellar": [
      "do not go gentle into that good night"
    ],
    "invincible": [
      "think mark think"
    ],
    "iron man": [
      "i am iron man"
    ],
    "its a wonderful life": [
      "every time a bell rings an angel gets his wings"
    ],
    "jaws": [
      "youre gonna need a bigger boat"
    ],
    "jerry maguire": [
      "show me the money",
      "you had me at hello",
      "РїРѕРєР°Р¶Рё РјРЅРµ РґРµРЅСЊРіРё"
    ],
    "john wick": [
      "people keep asking if im back"
    ],
    "jujutsu kaisen": [
      "throughout heaven and earth i alone am the honored one"
    ],
    "jurassic park": [
      "life finds a way"
    ],
    "king kong": [
      "it was beauty killed the beast"
    ],
    "la la land": [
      "city of stars"
    ],
    "life is beautiful": [
      "buongiorno principessa"
    ],
    "lock stock and two smoking barrels": [
      "its been emotional"
    ],
    "love story": [
      "love means never having to say youre sorry"
    ],
    "lucifer": [
      "what is it you truly desire"
    ],
    "mad max fury road": [
      "witness me"
    ],
    "memento": [
      "i have to believe in a world outside my own mind"
    ],
    "memories of murder": [
      "the rain"
    ],
    "miracle on 34th street": [
      "i believe in santa claus"
    ],
    "mission impossible": [
      "this message will self destruct"
    ],
    "money heist": [
      "bella ciao"
    ],
    "moneyball": [
      "how can you not be romantic about baseball"
    ],
    "moonrise kingdom": [
      "i love you but you dont know what youre talking about"
    ],
    "my neighbor totoro": [
      "totoro"
    ],
    "naruto": [
      "believe it",
      "i will become hokage"
    ],
    "nausicaa of the valley of the wind": [
      "its so beautiful"
    ],
    "neon genesis evangelion": [
      "the fate of destruction is also the joy of rebirth"
    ],
    "network": [
      "im as mad as hell",
      "РЅРµ СЃРѕР±РёСЂР°СЋСЃСЊ СЌС‚Рѕ Р±РѕР»СЊС€Рµ С‚РµСЂРїРµС‚СЊ"
    ],
    "nightcrawler": [
      "if it bleeds it leads"
    ],
    "no country for old men": [
      "call it"
    ],
    "oceans eleven": [
      "because the house always wins"
    ],
    "oldboy": [
      "laugh and the world laughs with you",
      "15 years"
    ],
    "on the waterfront": [
      "i coulda been a contender",
      "СЏ РјРѕРі Р±С‹С‚СЊ РїСЂРµС‚РµРЅРґРµРЅС‚РѕРј"
    ],
    "one piece": [
      "im going to be king of the pirates"
    ],
    "one punch man": [
      "ok"
    ],
    "oppenheimer": [
      "now i am become death destroyer of worlds"
    ],
    "pan s labyrinth": [
      "a long time ago in the underground realm"
    ],
    "parasite": [
      "you know what kind of plan never fails",
      "jessica only child of a wealthy family",
      "they are rich but still nice"
    ],
    "peaky blinders": [
      "by order of the peaky blinders"
    ],
    "pirates of the caribbean the curse of the black pearl": [
      "why is the rum gone",
      "savvy"
    ],
    "planet of the apes": [
      "you damned dirty ape",
      "take your stinking paws off me"
    ],
    "poltergeist": [
      "theyre here"
    ],
    "predator": [
      "get to the chopper"
    ],
    "princess mononoke": [
      "see with eyes unclouded"
    ],
    "prisoners": [
      "i pray we dont find her"
    ],
    "psycho": [
      "a boys best friend is his mother",
      "shower"
    ],
    "pulp fiction": [
      "royale with cheese"
    ],
    "raging bull": [
      "i coulda been a contender"
    ],
    "requiem for a dream": [
      "be excited be be excited"
    ],
    "rick and morty": [
      "wubba lubba dub dub",
      "im pickle rick"
    ],
    "rocky": [
      "yo adrian"
    ],
    "roman holiday": [
      "each belongs to each other"
    ],
    "saving private ryan": [
      "earn this"
    ],
    "scarface": [
      "say hello to my little friend"
    ],
    "schindlers list": [
      "whoever saves one life saves the world entire"
    ],
    "se7en": [
      "whats in the box"
    ],
    "severance": [
      "the work is mysterious and important",
      "devour feculence"
    ],
    "sherlock": [
      "the game is on"
    ],
    "shogun": [
      "crimp",
      "anjin"
    ],
    "singin in the rain": [
      "im singing in the rain"
    ],
    "slow horses": [
      "slough house"
    ],
    "slumdog millionaire": [
      "it is written"
    ],
    "snatch": [
      "do you know what nemesis means"
    ],
    "some like it hot": [
      "well nobodys perfect",
      "РЅРёРєС‚Рѕ РЅРµ СЃРѕРІРµСЂС€РµРЅРµРЅ"
    ],
    "south park": [
      "oh my god they killed kenny"
    ],
    "soylent green": [
      "soylent green is people"
    ],
    "spider man": [
      "with great power comes great responsibility"
    ],
    "spirited away": [
      "once you meet someone you never really forget them",
      "chihiro"
    ],
    "spy x family": [
      "waku waku"
    ],
    "squid game": [
      "red light green light"
    ],
    "star wars": [
      "may the force be with you"
    ],
    "stranger things": [
      "friends dont lie",
      "she is our friend and she is crazy"
    ],
    "succession": [
      "you are not serious people"
    ],
    "sudden impact": [
      "go ahead make my day",
      "СЃРґРµР»Р°Р№ РјРѕР№ РґРµРЅСЊ"
    ],
    "sunset boulevard": [
      "im ready for my close up",
      "i am big its the pictures that got small"
    ],
    "supernatural": [
      "saving people hunting things the family business"
    ],
    "taxi driver": [
      "you talkin to me"
    ],
    "ted lasso": [
      "be curious not judgemental"
    ],
    "terminator 2 judgment day": [
      "hasta la vista baby"
    ],
    "the avengers": [
      "avengers assemble"
    ],
    "the bear": [
      "yes chef"
    ],
    "the big lebowski": [
      "the dude abides"
    ],
    "the big short": [
      "truth is like poetry"
    ],
    "the boys": [
      "homelander",
      "supe"
    ],
    "the crown": [
      "i am aware of my duty"
    ],
    "the dark knight": [
      "why so serious"
    ],
    "the deer hunter": [
      "one shot"
    ],
    "the departed": [
      "im the guy who does his job you must be the other guy"
    ],
    "the diplomat": [
      "ambassador"
    ],
    "the godfather": [
      "im gonna make him an offer he cant refuse"
    ],
    "the godfather part ii": [
      "keep your friends close but your enemies closer"
    ],
    "the graduate": [
      "plastics",
      "mrs robinson"
    ],
    "the grand budapest hotel": [
      "there are still faint glimmers of civilization"
    ],
    "the green mile": [
      "on the day of my judgment"
    ],
    "the handmaiden": [
      "count your blessings"
    ],
    "the hobbit an unexpected journey": [
      "im going on an adventure"
    ],
    "the intouchables": [
      "1 plus 1"
    ],
    "the italian job": [
      "hang on lads ive got a great idea"
    ],
    "the last of us": [
      "endure and survive",
      "look for the light"
    ],
    "the lion king": [
      "hakuna matata"
    ],
    "the lord of the rings the fellowship of the ring": [
      "you shall not pass",
      "one ring to rule them all"
    ],
    "the lord of the rings the return of the king": [
      "my friends you bow to no one"
    ],
    "the lord of the rings the two towers": [
      "my precious",
      "РјРѕСЏ РїСЂРµР»РµСЃС‚СЊ"
    ],
    "the maltese falcon": [
      "the stuff that dreams are made of"
    ],
    "the mandalorian": [
      "this is the way"
    ],
    "the martian": [
      "im going to have to science the shit out of this"
    ],
    "the matrix": [
      "there is no spoon"
    ],
    "the night agent": [
      "white house"
    ],
    "the nightmare before christmas": [
      "whats this"
    ],
    "the office": [
      "thats what she said"
    ],
    "the philadelphia story": [
      "the time to make up your mind about people is never"
    ],
    "the pianist": [
      "i will play for you"
    ],
    "the prestige": [
      "are you watching closely"
    ],
    "the rings of power": [
      "the sea is always right"
    ],
    "the royal tenenbaums": [
      "im going to kill myself tomorrow"
    ],
    "the sandman": [
      "dream of the endless"
    ],
    "the shawshank redemption": [
      "get busy living or get busy dying"
    ],
    "the shining": [
      "heres johnny",
      "redrum",
      "all work and no play"
    ],
    "the silence of the lambs": [
      "hello clarice",
      "fava beans and a nice chianti",
      "i ate his liver with some fava beans"
    ],
    "the simpsons": [
      "doh",
      "eat my shorts"
    ],
    "the sixth sense": [
      "i see dead people",
      "СЏ РІРёР¶Сѓ РјС‘СЂС‚РІС‹С…"
    ],
    "the social network": [
      "a million dollars isnt cool you know whats cool a billion dollars"
    ],
    "the sopranos": [
      "those who want respect give respect"
    ],
    "the sound of music": [
      "these are a few of my favorite things"
    ],
    "the terminator": [
      "ill be back",
      "СЏ РІРµСЂРЅСѓСЃСЊ"
    ],
    "the truman show": [
      "good morning and in case i dont see ya"
    ],
    "the umbrella academy": [
      "number five"
    ],
    "the usual suspects": [
      "the greatest trick the devil ever pulled"
    ],
    "the vampire diaries": [
      "hello brother"
    ],
    "the wheel of time": [
      "the wheel weaves as the wheel wills"
    ],
    "the wire": [
      "all the pieces matter"
    ],
    "the witcher": [
      "toss a coin to your witcher"
    ],
    "the wizard of oz": [
      "toto ive a feeling were not in kansas anymore",
      "theres no place like home",
      "ill get you my pretty",
      "РЅРµ РІ РєР°РЅР·Р°СЃРµ"
    ],
    "there will be blood": [
      "i drink your milkshake"
    ],
    "titanic": [
      "im the king of the world",
      "never let go"
    ],
    "top gun": [
      "i feel the need the need for speed"
    ],
    "train to busan": [
      "hold the door"
    ],
    "trainspotting": [
      "choose life"
    ],
    "true detective": [
      "time is a flat circle"
    ],
    "wall street": [
      "greed is good",
      "Р¶Р°РґРЅРѕСЃС‚СЊ СЌС‚Рѕ С…РѕСЂРѕС€Рѕ"
    ],
    "wednesday": [
      "i am not in the business of making friends"
    ],
    "west side story": [
      "when youre a jet"
    ],
    "when harry met sally": [
      "ill have what shes having"
    ],
    "whiplash": [
      "not quite my tempo",
      "there are no two words in the english language more harmful than good job"
    ],
    "yellowjackets": [
      "it was the wilderness"
    ],
    "your name": [
      "kimi no na wa"
    ],
    "zodiac": [
      "this is the zodiac speaking"
    ]
  };
  function addAll(film, list) {
    if (!list) return;
    list.forEach(function (q) {
      var t = String(q || "").trim();
      if (t.length < 3) return;
      if (film.quotes.indexOf(t) === -1) film.quotes.push(t);
    });
  }
  (window.POFRAZE_FILMS || []).forEach(function (film) {
    var keys = [norm(film.originalTitle), norm(film.wikiEn), norm(film.title)];
    keys.forEach(function (k) {
      if (!k) return;
      addAll(film, afi[k]);
      addAll(film, extraByNorm[k]);
    });
  });
})();
