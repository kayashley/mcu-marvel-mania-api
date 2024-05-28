// MONGO MOVIES DB

// movie 1 - Iron Man
var movie1 = {
  Name: "Iron Man",
  Rating: "PG-13",
  ReleaseDate: "May 2, 2008",
  Runtime: "2h 6m",
  Synopsis:
    "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.",
  Directors: ObjectId("66563c6f76c29aee626387ad"),
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f5976c29aee626387a5"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image: "https://i.ebayimg.com/images/g/5ogAAOSw6JlfVPKh/s-l1600.jpg",
};

db.movies.insertOne(movie1);
ObjectId("6656572676c29aee626387b8");

// movie 2 - The Incredible Hulk
var movie2 = {
  Name: "The Incredible Hulk",
  Rating: "PG-13",
  ReleaseDate: "Jun 13, 2008",
  Runtime: "1h 52m",
  Synopsis:
    "Scientist Bruce Banner (Edward Norton) desperately seeks a cure for the gamma radiation that contaminated his cells and turned him into The Hulk. Cut off from his true love Betty Ross (Liv Tyler) and forced to hide from his nemesis, Gen. Thunderbolt Ross (William Hurt), Banner soon comes face-to-face with a new threat: a supremely powerful enemy known as The Abomination (Tim Roth).",
  Directors: {
    Name: "Louis Leterrier",
    Birthyear: "Jun 17, 1973",
    Bio: 'Though Parisian director Louis Leterrier has only been making motion pictures for less than a decade, each production has been an action-packed blockbuster hit. He grew up in a film oriented family with a director father and costume designer mother. After studying film at the prestigious Tisch School of the Arts at NYU, Leterrier returned to his homeland and found himself as a production assistant for "Alien Resurrection."',
  },
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f5976c29aee626387a5"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image:
    "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_.jpg",
};

db.movies.insertOne(movie2);
ObjectId("6656573c76c29aee626387b9");

// movie 3 - Iron Man 2
var movie3 = {
  Name: "Iron Man 2",
  Rating: "PG-13",
  ReleaseDate: "May 7, 2010",
  Runtime: "2h 4m",
  Synopsis:
    'With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and "Rhodey" Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.',
  Directors: [ObjectId("66563c6f76c29aee626387ad")],
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f5976c29aee626387a5"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image: "https://m.media-amazon.com/images/I/71VZVXPhmKL.jpg",
};

db.movies.insertOne(movie3);
ObjectId("6656577376c29aee626387ba");

// movie 4 - Thor
var movie4 = {
  Name: "Thor",
  Rating: "PG-13",
  ReleaseDate: "May 6, 2011",
  Runtime: "1h 53m",
  Synopsis:
    "As the son of Odin (Anthony Hopkins), king of the Norse gods, Thor (Chris Hemsworth) will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki (Tom Hiddleston), Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.",
  Directors: {
    Name: "Kenneth Branagh",
    Birthyear: "Dec 10, 1960",
    Bio: 'Kenneth Branagh moved to England with his family when he was 10. This is when he began his love affair with Shakespeare, reading 25-cent paperbacks of his plays. Branagh began his career in theater and soon became a familiar face on the acclaimed 1984 BBC trilogy "Too Late to Talk to Billy," "A Matter of Choice for Billy" and "A Coming to Terms for Billy." After making a name for himself with "Another Country," he joined the Royal Shakespeare Company at age 23, and was the youngest "Henry V" in the troupe\'s history.',
  },
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image:
    "https://lh4.googleusercontent.com/proxy/7UcsctarTvP3r9VwOWxueUpKOfeO6NkaeTEEjdY1FZ7Qwg638PpkHgPDPGKiQPV7AVL58Sse_A2gcuNxtiXf5SwKwk7GOgK6sEE",
};

db.movies.insertOne(movie4);
ObjectId("6656578876c29aee626387bb");

// movie 5 - Captain America: The First Avenger
var movie5 = {
  Name: "Captain America: The First Avenger",
  Rating: "PG-13",
  ReleaseDate: "Jul 22, 2011",
  Runtime: "2h 4m",
  Synopsis:
    "It is 1941 and the world is in the throes of war. Steve Rogers (Chris Evans) wants to do his part and join America's armed forces, but the military rejects him because of his small stature. Finally, Steve gets his chance when he is accepted into an experimental program that turns him into a supersoldier called Captain America. Joining forces with Bucky Barnes (Sebastian Stan) and Peggy Carter (Hayley Atwell), Captain America leads the fight against the Nazi-backed HYDRA organization.",
  Directors: {
    Name: "Joe Johnston",
    Birthyear: "May 13, 1950",
    Bio: 'Despite having received his start in film as a part of George Lucas\' famed visual effects team on "Star Wars" (1977), and eventually directing several high-profile movies himself, Joe Johnston somehow managed to keep a remarkably low-profile during much of his career. Originally intending to pursue a career in industrial design, Johnston\'s professional path took an unexpected turn when he answered an ad looking for illustrators to work on a new science fiction movie. That movie turned out to be "Star Wars," and from there Johnston worked as a visual effects director on that film\'s two sequels, in addition to similar duties on Steven Spielberg\'s "Raiders of the Lost Ark" (1981).',
  },
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image:
    "https://m.media-amazon.com/images/M/MV5BNzAxMjg0NjYtNjNlOS00NTdlLThkMGEtMjAwYjk3NmNkOGFhXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_FMjpg_UX1000_.jpg",
};

db.movies.insertOne(movie5);
ObjectId("66566137f065c4f12c32542e");

// movie 6 - Marvel's the Avengers
var movie6 = {
  Name: "Marvel's the Avengers",
  Rating: "PG-13",
  ReleaseDate: "May 4, 2012",
  Runtime: "2h 23m",
  Synopsis:
    "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's \"dream team\" are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).",
  Directors: [ObjectId("66563c7d76c29aee626387ae")],
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image: "https://i.ebayimg.com/images/g/ZbUAAOSwXPtkxVyM/s-l1200.jpg",
};

db.movies.insertOne(movie6);
ObjectId("6656615cf065c4f12c32542f");

// movie 7 - Iron Man 3
var movie7 = {
  Name: "Iron Man 3",
  Rating: "PG-13",
  ReleaseDate: "May 3, 2013",
  Runtime: "2h 10m",
  Synopsis:
    "Plagued with worry and insomnia since saving New York from destruction, Tony Stark (Robert Downey Jr.), now, is more dependent on the suits that give him his Iron Man persona -- so much so that every aspect of his life is affected, including his relationship with Pepper (Gwyneth Paltrow). After a malevolent enemy known as the Mandarin (Ben Kingsley) reduces his personal world to rubble, Tony must rely solely on instinct and ingenuity to avenge his losses and protect the people he loves.",
  Directors: {
    Name: "Shane Black",
    Birthyear: "Dec 16, 1961",
    Bio: 'On his way to becoming one of the highest-paid screenwriters in motion picture history, Shane Black redefined the action movie by flipping its stale conventions upon its head while producing untold numbers of pale imitators. Black shot to the top of the class with his first script, "Lethal Weapon" (1987), which resuscitated the buddy cop genre on its way to becoming one of the biggest hits of the year.',
  },
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f5976c29aee626387a5"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image:
    "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg",
};

db.movies.insertOne(movie7);
ObjectId("66566168f065c4f12c325430");

// movie 8 - Thor: The Dark World
var movie8 = {
  Name: "Thor: The Dark World",
  Rating: "PG-13",
  ReleaseDate: "Nov 8, 2013",
  Runtime: "1h 51m",
  Synopsis:
    "In ancient times, the gods of Asgard fought and won a war against an evil race known as the Dark Elves. The survivors were neutralized, and their ultimate weapon -- the Aether -- was buried in a secret location. Hundreds of years later, Jane Foster (Natalie Portman) finds the Aether and becomes its host, forcing Thor (Chris Hemsworth) to bring her to Asgard before Dark Elf Malekith (Christopher Eccleston) captures her and uses the weapon to destroy the Nine Realms -- including Earth.",
  Directors: {
    Name: "Alan Taylor",
    Birthyear: "Jan 13, 1959",
    Bio: 'A former history major who switched to film after losing faith in the academic life, Alan Taylor scored critical approval with his first feature, "Palookaville" (1995), about three young men in Jersey City, NJ, mired in great-rich-quick schemes. Made in association with American Playhouse, the film, which won the Kodak Award at the Venice Film Festival, owed its inspiration to short stories by Italian writer Italo Calvini as well as several classic films, notably "Big Deal on Madonna Street" (1958).',
  },
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image:
    "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_.jpg",
};

db.movies.insertOne(movie8);
ObjectId("66566198b760d289fef564a6");

// movie 9 - Captain America: The Winter Soldier
var movie9 = {
  Name: "Captain America: The Winter Soldier",
  Rating: "PG-13",
  ReleaseDate: "Apr 4, 2014",
  Runtime: "2h 15m",
  Synopsis:
    "After the cataclysmic events in New York with his fellow Avengers, Steve Rogers, aka Captain America (Chris Evans), lives in the nation's capital as he tries to adjust to modern times. An attack on a S.H.I.E.L.D. colleague throws Rogers into a web of intrigue that places the whole world at risk. Joining forces with the Black Widow (Scarlett Johansson) and a new ally, the Falcon, Rogers struggles to expose an ever-widening conspiracy, but he and his team soon come up against an unexpected enemy.",
  Directors: [
    ObjectId("66563c8876c29aee626387af"),
    ObjectId("66563c9476c29aee626387b0"),
  ],
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image:
    "https://m.media-amazon.com/images/I/51QsG3nFvoL._AC_UF894,1000_QL80_.jpg",
};

db.movies.insertOne(movie9);
ObjectId("665661bd05f15ed0b0c553df");

// movie 10 - Guardians of the Galaxy
var movie10 = {
  Name: "Guardians of the Galaxy",
  Rating: "PG-13",
  ReleaseDate: "Aug 1, 2014",
  Runtime: "2h 1m",
  Synopsis:
    "Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe.",
  Directors: [ObjectId("66563ca176c29aee626387b1")],
  Genres: [
    ObjectId("66562f5976c29aee626387a5"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562f8076c29aee626387a6"),
    ObjectId("66562fa876c29aee626387a7"),
  ],
  Image:
    "https://m.media-amazon.com/images/I/71lbFfxfMtL._AC_UF894,1000_QL80_.jpg",
};

db.movies.insertOne(movie10);
ObjectId("665661d605f15ed0b0c553e0");

// movie 11 - Avengers: Age of Ultron
var movie11 = {
  Name: "Avengers: Age of Ultron",
  Rating: "PG-13",
  ReleaseDate: "May 1, 2015",
  Runtime: "2h 21m",
  Synopsis:
    "When Tony Stark (Robert Downey Jr.) jump-starts a dormant peacekeeping program, things go terribly awry, forcing him, Thor (Chris Hemsworth), the Incredible Hulk (Mark Ruffalo) and the rest of the Avengers to reassemble. As the fate of Earth hangs in the balance, the team is put to the ultimate test as they battle Ultron, a technological terror hell-bent on human extinction. Along the way, they encounter two mysterious and powerful newcomers, Pietro and Wanda Maximoff.",
  Directors: [ObjectId("66563c7d76c29aee626387ae")],
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f5976c29aee626387a5"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image:
    "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
};

db.movies.insertOne(movie11);
ObjectId("665661ff34dc53893791b74c");

// movie 12 - Ant-Man
var movie12 = {
  Name: "Ant-Man",
  Rating: "PG-13",
  ReleaseDate: "Jul 17, 2015",
  Runtime: "1h 57m",
  Synopsis:
    "Forced out of his own company by former protégé Darren Cross, Dr. Hank Pym (Michael Douglas) recruits the talents of Scott Lang (Paul Rudd), a master thief just released from prison. Lang becomes Ant-Man, trained by Pym and armed with a suit that allows him to shrink in size, possess superhuman strength and control an army of ants. The miniature hero must use his new skills to prevent Cross, also known as Yellowjacket, from perfecting the same technology and using it as a weapon for evil.",
  Directors: [ObjectId("66563cab76c29aee626387b2")],
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f8076c29aee626387a6"),
    ObjectId("66562fa876c29aee626387a7"),
  ],
  Image:
    "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_.jpg",
};

db.movies.insertOne(movie12);
ObjectId("6656621834dc53893791b74d");

// movie 13 - Captain America: Civil War
var movie13 = {
  Name: "Captain America: Civil War",
  Rating: "PG-13",
  ReleaseDate: "May 6, 2016",
  Runtime: "2h 26m",
  Synopsis:
    "Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage. The new status quo deeply divides members of the team. Captain America (Chris Evans) believes superheroes should remain free to defend humanity without government interference. Iron Man (Robert Downey Jr.) sharply disagrees and supports oversight. As the debate escalates into an all-out feud, Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner) must pick a side.",
  Directors: [
    ObjectId("66563c8876c29aee626387af"),
    ObjectId("66563c9476c29aee626387b0"),
  ],
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image:
    "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_.jpg",
};

db.movies.insertOne(movie13);
ObjectId("6656622434dc53893791b74e");

// movie 14 - Doctor Strange
var movie14 = {
  Name: "Doctor Strange",
  Rating: "PG-13",
  ReleaseDate: "Nov 4, 2016",
  Runtime: "1h 55m",
  Synopsis:
    "Dr. Stephen Strange's (Benedict Cumberbatch) life changes after a car accident robs him of the use of his hands. When traditional medicine fails him, he looks for healing, and hope, in a mysterious enclave. He quickly learns that the enclave is at the front line of a battle against unseen dark forces bent on destroying reality. Before long, Strange is forced to choose between his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.",
  Directors: {
    Name: "Scott Derrickson",
    Birthyear: "Jul 16, 1966",
    Bio: "Writer/director Scott Derrickson gave America nightmares with a series of slick scary movies. Seeing that so many of his films deal with the nature of good and evil, god and the devil, it should come as no surprise that Derrickson studied theology alongside literature, philosophy and film at Biola University, CA, a university known for its evangelical Christian viewpoint.",
  },
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image: "https://i.ebayimg.com/images/g/hjUAAOSwmLlX~m49/s-l1600.jpg",
};

db.movies.insertOne(movie14);
ObjectId("6656624b2c26b845bd52b8c2");

// movie 15 - Guardians of the Galaxy Vol. 2
var movie15 = {
  Name: "Guardians of the Galaxy Vol. 2",
  Rating: "PG-13",
  ReleaseDate: "May 5, 2017",
  Runtime: "2h 15m",
  Synopsis:
    "Peter Quill and his fellow Guardians are hired by a powerful alien race, the Sovereign, to protect their precious batteries from invaders. When it is discovered that Rocket has stolen the items they were sent to guard, the Sovereign dispatch their armada to search for vengeance. As the Guardians try to escape, the mystery of Peter's parentage is revealed.",
  Directors: ObjectId("66563ca176c29aee626387b1"),
  Genres: [
    ObjectId("66562f5976c29aee626387a5"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562f8076c29aee626387a6"),
    ObjectId("66562fa876c29aee626387a7"),
  ],
  Image:
    "https://m.media-amazon.com/images/I/71K+P8n6sGL._AC_UF894,1000_QL80_.jpg",
};

db.movies.insertOne(movie15);
ObjectId("665662592c26b845bd52b8c3");

// movie 16 - Spider-Man: Homecoming
var movie16 = {
  Name: "Spider-Man: Homecoming",
  Rating: "PG-13",
  ReleaseDate: "Jul 7, 2017",
  Runtime: "2h 13m",
  Synopsis:
    "Thrilled by his experience with the Avengers, young Peter Parker returns home to live with his Aunt May. Under the watchful eye of mentor Tony Stark, Parker starts to embrace his newfound identity as Spider-Man. He also tries to return to his normal daily routine -- distracted by thoughts of proving himself to be more than just a friendly neighborhood superhero. Peter must soon put his powers to the test when the evil Vulture emerges to threaten everything that he holds dear.",
  Directors: [ObjectId("66563cb676c29aee626387b3")],
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f8076c29aee626387a6"),
    ObjectId("66562fa876c29aee626387a7"),
  ],
  Image: "https://i.ebayimg.com/images/g/r5gAAOSwYRJdLBMA/s-l1600.jpg",
};

db.movies.insertOne(movie16);
ObjectId("6656626e2c26b845bd52b8c4");

// movie 17 - Thor: Ragnarok
var movie17 = {
  Name: "Thor: Ragnarok",
  Rating: "PG-13",
  ReleaseDate: "Nov 3, 2017",
  Runtime: "2h 10m",
  Synopsis:
    "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
  Directors: ObjectId("66563cc176c29aee626387b4"),
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f5976c29aee626387a5"),
    ObjectId("66562f8076c29aee626387a6"),
    ObjectId("66562fa876c29aee626387a7"),
  ],
  Image: "https://m.media-amazon.com/images/I/A1HBBNzBdxL.jpg",
};

db.movies.insertOne(movie17);
ObjectId("665662792c26b845bd52b8c5");

// movie 18 - Black Panther
var movie18 = {
  Name: "Black Panther",
  Rating: "PG-13",
  ReleaseDate: "Feb 16, 2018",
  Runtime: "2h 14m",
  Synopsis:
    "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.",
  Directors: ObjectId("66563ccf76c29aee626387b5"),
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image:
    "https://i.etsystatic.com/18242346/r/il/8f6455/2495450226/il_570xN.2495450226_cgbk.jpg",
};

db.movies.insertOne(movie18);
ObjectId("6656628e2c26b845bd52b8c6");

// movie 19 - Avengers: Infinity War
var movie19 = {
  Name: "Avengers: Infinity War",
  Rating: "PG-13",
  ReleaseDate: "Apr 27, 2018",
  Runtime: "2h 29m",
  Synopsis:
    "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.",
  Directors: [
    ObjectId("66563c8876c29aee626387af"),
    ObjectId("66563c9476c29aee626387b0"),
  ],
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f5976c29aee626387a5"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image:
    "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
};

db.movies.insertOne(movie19);
ObjectId("6656629b2c26b845bd52b8c7");

// movie 20 - Ant-Man and The Wasp
var movie20 = {
  Name: "Ant-Man and The Wasp",
  Rating: "PG-13",
  ReleaseDate: "Jul 6, 2018",
  Runtime: "1h 58m",
  Synopsis:
    "Scott Lang is grappling with the consequences of his choices as both a superhero and a father. Approached by Hope van Dyne and Dr. Hank Pym, Lang must once again don the Ant-Man suit and fight alongside the Wasp. The urgent mission soon leads to secret revelations from the past as the dynamic duo finds itself in an epic battle against a powerful new enemy.",
  Directors: ObjectId("66563cab76c29aee626387b2"),
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f5976c29aee626387a5"),
    ObjectId("66562fa876c29aee626387a7"),
  ],
  Image:
    "https://myhotposters.com/cdn/shop/products/mL1901_1024x1024.jpg?v=1571445494",
};

db.movies.insertOne(movie20);
ObjectId("665662bc2c26b845bd52b8c8");

// movie 21 - Captain Marvel
var movie21 = {
  Name: "Captain Marvel",
  Rating: "PG-13",
  ReleaseDate: "Mar 8, 2019",
  Runtime: "2h 4m",
  Synopsis:
    "Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury, Captain Marvel tries to uncover the secrets of her past while harnessing her special superpowers to end the war with the evil Skrulls.",
  Directors: [
    ObjectId("66563cdc76c29aee626387b6"),
    ObjectId("66563ce876c29aee626387b7"),
  ],
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f5976c29aee626387a5"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image:
    "https://m.media-amazon.com/images/I/71Y+lhdaLrL._AC_UF894,1000_QL80_.jpg",
};

db.movies.insertOne(movie21);
ObjectId("665662d42c26b845bd52b8c9");

// movie 22 - Avengers: Endgame
var movie22 = {
  Name: "Avengers: Endgame",
  Rating: "PG-13",
  ReleaseDate: "Apr 26, 2019",
  Runtime: "3h 1m",
  Synopsis:
    "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
  Directors: [
    ObjectId("66563c8876c29aee626387af"),
    ObjectId("66563c9476c29aee626387b0"),
  ],
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f5976c29aee626387a5"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image:
    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg",
};

db.movies.insertOne(movie22);
ObjectId("665662df2c26b845bd52b8ca");

// movie 23 - Spider-Man: Far From Home
var movie23 = {
  Name: "Spider-Man: Far From Home",
  Rating: "PG-13",
  ReleaseDate: "Jul 2, 2019",
  Runtime: "2h 9m",
  Synopsis:
    "Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe. Parker soon finds himself donning the Spider-Man suit to help Fury and fellow superhero Mysterio stop the evil entities from wreaking havoc across the continent.",
  Directors: ObjectId("66563cb676c29aee626387b3"),
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f5976c29aee626387a5"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image:
    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg",
};

db.movies.insertOne(movie23);
ObjectId("665662e82c26b845bd52b8cb");

// movie 24 - Black Widow
var movie24 = {
  Name: "Black Widow",
  Rating: "PG-13",
  ReleaseDate: "Jul 9, 2021",
  Runtime: "2h 13m",
  Synopsis:
    'In Marvel Studios\' action-packed spy thriller "Black Widow," Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.',
  Directors: {
    Name: "Cate Shortland",
    Birthyear: "Aug 10, 1968",
    Bio: "Cate Shortland is an Australian director and screenwriter. She received international acclaim for her 2004 romantic drama film Somersault, her 2012 historical drama film Lore, and her 2017 psychological thriller film Berlin Syndrome. She is best known for directing the 2021 superhero film Black Widow.",
  },
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
  ],
  Image:
    "https://m.media-amazon.com/images/I/71zEeojFg5L._AC_UF894,1000_QL80_.jpg",
};

db.movies.insertOne(movie24);
ObjectId("665662f32c26b845bd52b8cc");

// movie 25 - Shang-Chi and the Legend of the Ten Rings
var movie25 = {
  Name: "Shang-Chi and the Legend of the Ten Rings",
  Rating: "PG-13",
  ReleaseDate: "Sep 3, 2021",
  Runtime: "2h 13m",
  Synopsis:
    "Marvel Studios' \"Shang-Chi and The Legend of The Ten Rings\" stars Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film also stars Tony Leung as Wenwu, Awkwafina as Shang-Chi's friend Katy and Michelle Yeoh as Jiang Nan, as well as Fala Chen, Meng'er Zhang, Florian Munteanu and Ronny Chieng.",
  Directors: {
    Name: "Destin Daniel Cretton",
    Birthyear: "Nov 23, 1978",
    Bio: "Destin Yori Daniel Cretton is an American filmmaker. He is best known for his films Short Term 12, The Glass Castle, Just Mercy and the Marvel Studios film Shang-Chi and the Legend of the Ten Rings.",
  },
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image:
    "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
};

db.movies.insertOne(movie25);
ObjectId("665663062c26b845bd52b8cd");

// movie 26 - Eternals
var movie26 = {
  Name: "Eternals",
  Rating: "PG-13",
  ReleaseDate: "Nov 5, 2021",
  Runtime: "2h 37m",
  Synopsis:
    "Marvel Studios' Eternals features an exciting new team of Super Heroes in the Marvel Cinematic Universe, ancient aliens who have been living on Earth in secret for thousands of years. Following the events of Avengers: Endgame, an unexpected tragedy forces them out of the shadows to reunite against mankind's most ancient enemy, the Deviants.",
  Directors: {
    Name: "Chloé Zhao",
    Birthyear: "Mar 31, 1982",
    Bio: "Chloe Zhao's life was primarily guided by a quest for information. Born in China, she grew up in a place where she felt trapped, like she was never going to get out. When her family finally moved away to London when she was in high school, she then researched and learned what she had missed being in China.",
  },
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image: "https://m.media-amazon.com/images/I/61+uuv06fQL.jpg",
};

db.movies.insertOne(movie26);
ObjectId("665663152c26b845bd52b8ce");

// movie 27 - Spider-Man: No Way Home
var movie27 = {
  Name: "Spider-Man: No Way Home",
  Rating: "PG-13",
  ReleaseDate: "Dec 17, 2021",
  Runtime: "2h 28m",
  Synopsis:
    "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk. When he enlists Doctor Strange's help to restore his secret, the spell tears a hole in their world, releasing the most powerful villains who've ever fought a Spider-Man in any universe. Now, Peter will have to overcome his greatest challenge yet, which will not only forever alter his own future but the future of the Multiverse.",
  Directors: [ObjectId("66563cb676c29aee626387b3")],
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f8076c29aee626387a6"),
    ObjectId("66562fa876c29aee626387a7"),
  ],
  Image:
    "https://www.movieposters.com/cdn/shop/products/255053349_408225954164881_580470973376990445_n_558x.jpg?v=1637860151",
};

db.movies.insertOne(movie27);
ObjectId("6656632d2c26b845bd52b8cf");

// movie 28 - Doctor Strange in the Multiverse of Madness
var movie28 = {
  Name: "Doctor Strange in the Multiverse of Madness",
  Rating: "PG-13",
  ReleaseDate: "May 6, 2022",
  Runtime: "2h 6m",
  Synopsis:
    'In Marvel Studios\' "Doctor Strange in the Multiverse of Madness," the MCU unlocks the Multiverse and pushes its boundaries further than ever before. Journey into the unknown with Doctor Strange, who, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.',
  Directors: {
    Name: "Sam Raimi",
    Birthyear: "Oct 23, 1959",
    Bio: 'Born in a suburb of Detroit, Michigan in 1959, Sam Raimi began making movies with Bruce Campbell and some other friends when they were in their teens. The two would continue to collaborate repeatedly over the span of their careers. Raimi attended Michigan State University, but dropped out to make "The Evil Dead" (1981), starring Campbell.',
  },
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f8076c29aee626387a6"),
    ObjectId("66562fcb76c29aee626387a8"),
  ],
  Image:
    "https://i5.walmartimages.com/asr/4243a398-a9c7-47ec-b353-b3049ea26913.f21c6c8d05c7f94f99a7215ff05f5e2a.jpeg",
};

db.movies.insertOne(movie28);
ObjectId("665663512c26b845bd52b8d0");

// movie 29 - Thor: Love and Thunder
var movie29 = {
  Name: "Thor: Love and Thunder",
  Rating: "PG-13",
  ReleaseDate: "Jul 8, 2022",
  Runtime: "2h 5m",
  Synopsis:
    "\"Thor: Love and Thunder\" finds Thor (Chris Hemsworth) on a journey unlike anything he's ever faced -- a quest for inner peace. But his retirement is interrupted by a galactic killer known as Gorr the God Butcher (Christian Bale), who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie (Tessa Thompson), Korg (Taika Waititi) and ex-girlfriend Jane Foster (Natalie Portman), who -- to Thor's surprise -- inexplicably wields his magical hammer, Mjolnir, as the Mighty Thor. Together, they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher's vengeance and stop him before it's too late.",
  Directors: [ObjectId("66563cc176c29aee626387b4")],
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f8076c29aee626387a6"),
    ObjectId("66562fa876c29aee626387a7"),
  ],
  Image:
    "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
};

db.movies.insertOne(movie29);
ObjectId("6656635f2c26b845bd52b8d1");

// movie 30 - Black Panther: Wakanda Forever
var movie30 = {
  Name: "Black Panther: Wakanda Forever",
  Rating: "PG-13",
  ReleaseDate: "Nov 11, 2022",
  Runtime: "2h 14m",
  Synopsis:
    "In Marvel Studios' \"Black Panther: Wakanda Forever,\" Queen Ramonda (Angela Bassett), Shuri (Letitia Wright), M'Baku (Winston Duke), Okoye (Danai Gurira) and the Dora Milaje (including Florence Kasumba) fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia (Lupita Nyong'o) and Everett Ross (Martin Freeman) and forge a new path for the kingdom of Wakanda.",
  Directors: [ObjectId("66563ccf76c29aee626387b5")],
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image: "https://m.media-amazon.com/images/I/71nDLLIubWL.jpg",
};

db.movies.insertOne(movie30);
ObjectId("6656636c2c26b845bd52b8d2");

// movie 31 - Ant-Man and The Wasp: Quantumania
var movie31 = {
  Name: "Ant-Man and The Wasp: Quantumania",
  Rating: "PG-13",
  ReleaseDate: "Feb 17, 2023",
  Runtime: "2h 4m",
  Synopsis:
    "Super-Hero partners Scott Lang (Paul Rudd) and Hope van Dyne (Evangeline Lilly) return to continue their adventures as Ant-Man and the Wasp. Together, with Hope's parents Janet van Dyne (Michelle Pfeiffer) and Hank Pym (Michael Douglas), and Scott's daughter Cassie Lang (Kathryn Newton), the family finds themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
  Directors: [ObjectId("66563cab76c29aee626387b2")],
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f8076c29aee626387a6"),
    ObjectId("66562fa876c29aee626387a7"),
  ],
  Image:
    "https://m.media-amazon.com/images/M/MV5BODZhNzlmOGItMWUyYS00Y2Q5LWFlNzMtM2I2NDFkM2ZkYmE1XkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_.jpg",
};

db.movies.insertOne(movie31);
ObjectId("6656637a2c26b845bd52b8d3");

// movie 32 - Guardians of the Galaxy Vol. 3
var movie32 = {
  Name: "Guardians of the Galaxy Vol. 3",
  Rating: "PG-13",
  ReleaseDate: "May 5, 2023",
  Runtime: "2h 30m",
  Synopsis:
    'In Marvel Studios "Guardians of the Galaxy Vol. 3" our beloved band of misfits are looking a bit different these days. Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.',
  Directors: [ObjectId("66563ca176c29aee626387b1")],
  Genres: [
    ObjectId("66562f5976c29aee626387a5"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562f8076c29aee626387a6"),
    ObjectId("66562fa876c29aee626387a7"),
  ],
  Image:
    "https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
};

db.movies.insertOne(movie32);
ObjectId("665663892c26b845bd52b8d4");

// movie 33 - Guardians of the Galaxy Vol. 3
var movie33 = {
  Name: "The Marvels",
  Rating: "PG-13",
  ReleaseDate: "Nov 10, 2023",
  Runtime: "1h 45m",
  Synopsis:
    'Carol Danvers aka Captain Marvel has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan, Kamala Khan aka Ms. Marvel, and Carol\'s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team-up and learn to work in concert to save the universe as "The Marvels."',
  Directors: {
    Name: "Nia DaCosta",
    Birthyear: "Nov 8, 1989",
    Bio: "Nia DaCosta is an American film director, screenwriter, and producer. She made her feature film debut as a writer and director for her crime thriller film Little Woods. Nia garnered wide acclaim for winning the Nora Ephron Prize for Female Filmmakers at the Tribeca Film Festival.",
  },
  Genres: [
    ObjectId("66562e9f76c29aee626387a3"),
    ObjectId("66562ed176c29aee626387a4"),
    ObjectId("66562f8076c29aee626387a6"),
  ],
  Image:
    "https://m.media-amazon.com/images/M/MV5BM2U2YWU5NWMtOGI2Ni00MGMwLWFkNjItMjgyZWMxNjllNTMzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
};

db.movies.insertOne(movie33);
ObjectId("665663922c26b845bd52b8d5");
