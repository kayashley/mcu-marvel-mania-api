//  MONGO DIRECTORS DB

// director 1 - Jon Favreau
var director1 = {
  Name: "Jon Favreau",
  Birthyear: "Oct 19, 1966",
  Bio: 'Actor, producer, writer and director Jon Favreau hit unlikely pay dirt when "Swingers" (1996), his low-budget, autobiographical indie about struggling young actors, turned he and co-star/real-life best friend Vince Vaughn into hot property seemingly overnight. Favreau parlayed his rising profile into a number of supporting big-screen roles as cynical side men, but he was more anxious to get behind the camera and direct bigger features.',
};

db.directors.insertOne(director1);
ObjectId("66563c6f76c29aee626387ad");

// director 2 - Joss Whedon
var director2 = {
  Name: "Joss Whedon",
  Birthyear: "Jun 23, 1964",
  Bio: 'A third-generation television writer, it came as little surprise when scripter Joss Whedon followed in his relatives\' footsteps, although his astonishing success as series creator, producer, screenwriter and feature film director surely impressed even his formidable family. Receiving his start as a writer on the sitcom "Roseanne" (ABC, 1988-1997) and serving as a script doctor on several noted studio films, Whedon later created the cult hit "Buffy the Vampire Slayer" (The WB, 1997-2001; UPN, 2001-03), developed from a campy horror comedy of the same name he had also written years earlier.',
};

db.directors.insertOne(director2);
ObjectId("66563c7d76c29aee626387ae");

// director 3 - Anthony Russo
var director3 = {
  Name: "Anthony Russo",
  Birthyear: "Feb 3, 1970",
  Bio: "Successful summer blockbusters can sometimes come from the most innocent places. Anthony Russo, along with his brother and co-director Joe, carved a niche in directing cult TV shows and the occasional comedy movie.",
};

db.directors.insertOne(director3);
ObjectId("66563c8876c29aee626387af");

// director 4 - Joe Russo
var director4 = {
  Name: "Joe Russo",
  Birthyear: "Jul 18, 1971",
  Bio: "Successful summer blockbusters can sometimes come from the most innocent places. Joe Russo, along with his brother and co-director Anthony, first made their names by directing cult TV shows and the occasional low-budget indie comedy.",
};

db.directors.insertOne(director4);
ObjectId("66563c9476c29aee626387b0");

// director 5 - James Gunn
var director5 = {
  Name: "James Gunn",
  Birthyear: "Aug 5, 1966",
  Bio: 'Screenwriter and director James Gunn applied his fondness for the comic book idiom -- as well as a healthy dash of irreverent humor -- to a host of popular genre films, including "Scooby-Doo" (2002), a remake of George A. Romero\'s "Dawn of the Dead" (2004), and the Marvel Cinematic Universe bockbuster "Guardians of the Galaxy" (2014).',
};

db.directors.insertOne(director5);
ObjectId("66563ca176c29aee626387b1");

// director 6 - Peyton Reed
var director6 = {
  Name: "Peyton Reed",
  Birthyear: "Jul 3, 1964",
  Bio: 'Peyton Reed could thank fellow filmmaker Edgar Wright for his big break. After a long established deal that would have had Wright-the writer/director behind "Shaun of the Dead" (2004) and "Scott Pilgrim vs. the World" (2010)-adapting the Ant-Man comic to screen for Marvel Studios was nullified due to creative differences, Reed was brought in to fill his shoes on the production. Having cut his teeth on studio comedies like "Bring It On" (2000), "The Break-Up" (2006), and "Yes-Man" (2008), Reed was deemed an amenable choice for Marvel and Disney\'s "Ant-Man" (2015) picture: his first true step toward blockbuster moviemaking.',
};

db.directors.insertOne(director6);
ObjectId("66563cab76c29aee626387b2");

// director 7 - Jon Watts
var director7 = {
  Name: "Jon Watts",
  Birthyear: "Jun 28, 1981",
  Bio: "Born and raised in the small town of Fountain, Colorado, Jon Watts turned to making short videos before he graduated from high school. His creative output led to a scholarship to attend New York University. After graduating, Watts joined Park Pictures, a production company making music videos, internet content, and short films.",
};

db.directors.insertOne(director7);
ObjectId("66563cb676c29aee626387b3");

// director 8 - Taika Waititi
var director8 = {
  Name: "Taika Waititi",
  Birthyear: "Aug 16, 1975",
  Bio: 'Kiwi filmmaker Taika Waititi\'s gift for uproarious and absurd humor served him well as director on such films as "What We Do in the Shadows" (2014), "Hunt for the Wilderpeople" (2016) and "Thor: Ragnarok" (2017), which freely mixed humor with horror, action-adventure and other genres.',
};

db.directors.insertOne(director8);
ObjectId("66563cc176c29aee626387b4");

// director 9 - Ryan Coogler
var director9 = {
  Name: "Ryan Coogler",
  Birthyear: "May 23, 1986",
  Bio: 'American director Ryan Coogler found success early in his career with short films and his lauded feature-length film debut "Fruitvale Station" (2013) before going on to become one of the most commercially successful black filmmakers in history.',
};

db.directors.insertOne(director9);
ObjectId("66563ccf76c29aee626387b5");

// director 10 - Anna Boden
var director10 = {
  Name: "Anna Boden",
  Birthyear: "Oct 20, 1979",
  Bio: "Born in Massachusetts, Anna Boden grew up with a love for movies. She took that fascination with the medium to college, when she attended Columbia University to study film. It was at Columbia that her eventual career would take shape.",
};

db.directors.insertOne(director10);
ObjectId("66563cdc76c29aee626387b6");

// director 11 - Ryan Fleck
var director11 = {
  Name: "Ryan Fleck",
  Birthyear: "Sep 20, 1976",
  Bio: 'Ryan Fleck, born in California in 1976, pursued his filmmaking dream across the country, as he attended the prestigious Tisch School of the Arts at New York University. For his thesis at Tisch, he worked on a short film called "Struggle" (2002) that was his debut as a writer and director.',
};

db.directors.insertOne(director11);
ObjectId("66563ce876c29aee626387b7");

// UPDATE DIRECTORS DB -- ADDING OTHER DIRECTORS

// director 12 - Louis Leterrier
var director12 = {
  Name: "Louis Leterrier",
  Birthyear: "Jun 17, 1973",
  Bio: 'Though Parisian director Louis Leterrier has only been making motion pictures for less than a decade, each production has been an action-packed blockbuster hit. He grew up in a film oriented family with a director father and costume designer mother. After studying film at the prestigious Tisch School of the Arts at NYU, Leterrier returned to his homeland and found himself as a production assistant for "Alien Resurrection."',
};

db.directors.insertOne(director12);
ObjectId("665a36fb35077c2407c590a7");

db.movies.updateOne(
  { _id: ObjectId("6656573c76c29aee626387b9") },
  { $set: { Directors: ObjectId("665a36fb35077c2407c590a7") } }
);

db.movies.findOne({ _id: ObjectId("6656573c76c29aee626387b9") });

// director 13 - Kenneth Branagh
var director13 = {
  Name: "Kenneth Branagh",
  Birthyear: "Dec 10, 1960",
  Bio: 'Kenneth Branagh moved to England with his family when he was 10. This is when he began his love affair with Shakespeare, reading 25-cent paperbacks of his plays. Branagh began his career in theater and soon became a familiar face on the acclaimed 1984 BBC trilogy "Too Late to Talk to Billy," "A Matter of Choice for Billy" and "A Coming to Terms for Billy." After making a name for himself with "Another Country," he joined the Royal Shakespeare Company at age 23, and was the youngest "Henry V" in the troupe\'s history.',
};

db.directors.insertOne(director13);
ObjectId("665a3b8102b3896e3a39d7d4");

db.movies.updateOne(
  { _id: ObjectId("6656578876c29aee626387bb") },
  { $set: { Directors: ObjectId("665a3b8102b3896e3a39d7d4") } }
);

db.movies.findOne({ _id: ObjectId("6656578876c29aee626387bb") });

// director 14 - Joe Johnston
var director14 = {
  Name: "Joe Johnston",
  Birthyear: "May 13, 1950",
  Bio: 'Despite having received his start in film as a part of George Lucas\' famed visual effects team on "Star Wars" (1977), and eventually directing several high-profile movies himself, Joe Johnston somehow managed to keep a remarkably low-profile during much of his career. Originally intending to pursue a career in industrial design, Johnston\'s professional path took an unexpected turn when he answered an ad looking for illustrators to work on a new science fiction movie. That movie turned out to be "Star Wars," and from there Johnston worked as a visual effects director on that film\'s two sequels, in addition to similar duties on Steven Spielberg\'s "Raiders of the Lost Ark" (1981).',
};

db.directors.insertOne(director14);
ObjectId("665a3c1d02b3896e3a39d7d5");

db.movies.updateOne(
  { _id: ObjectId("66566137f065c4f12c32542e") },
  { $set: { Directors: ObjectId("665a3c1d02b3896e3a39d7d5") } }
);

db.movies.findOne({ _id: ObjectId("66566137f065c4f12c32542e") });

// director 15 - Shane Black
var director15 = {
  Name: "Shane Black",
  Birthyear: "Dec 16, 1961",
  Bio: 'On his way to becoming one of the highest-paid screenwriters in motion picture history, Shane Black redefined the action movie by flipping its stale conventions upon its head while producing untold numbers of pale imitators. Black shot to the top of the class with his first script, "Lethal Weapon" (1987), which resuscitated the buddy cop genre on its way to becoming one of the biggest hits of the year.',
};

db.directors.insertOne(director15);
ObjectId("665a3cdc02b3896e3a39d7d6");

db.movies.updateOne(
  { _id: ObjectId("66566168f065c4f12c325430") },
  { $set: { Directors: ObjectId("665a3cdc02b3896e3a39d7d6") } }
);

db.movies.findOne({ _id: ObjectId("66566168f065c4f12c325430") });

// director 16 - Alan Taylor
var director16 = {
  Name: "Alan Taylor",
  Birthyear: "Jan 13, 1959",
  Bio: 'A former history major who switched to film after losing faith in the academic life, Alan Taylor scored critical approval with his first feature, "Palookaville" (1995), about three young men in Jersey City, NJ, mired in great-rich-quick schemes. Made in association with American Playhouse, the film, which won the Kodak Award at the Venice Film Festival, owed its inspiration to short stories by Italian writer Italo Calvini as well as several classic films, notably "Big Deal on Madonna Street" (1958).',
};

db.directors.insertOne(director16);
ObjectId("665a3d9d02b3896e3a39d7d7");

db.movies.updateOne(
  { _id: ObjectId("66566198b760d289fef564a6") },
  { $set: { Directors: [ObjectId("665a3d9d02b3896e3a39d7d7")] } }
);

db.movies.findOne({ _id: ObjectId("66566198b760d289fef564a6") });

// director 17 - Scott Derrickson
var director17 = {
  Name: "Scott Derrickson",
  Birthyear: "Jul 16, 1966",
  Bio: "Writer/director Scott Derrickson gave America nightmares with a series of slick scary movies. Seeing that so many of his films deal with the nature of good and evil, god and the devil, it should come as no surprise that Derrickson studied theology alongside literature, philosophy and film at Biola University, CA, a university known for its evangelical Christian viewpoint.",
};

db.directors.insertOne(director17);
ObjectId("665a3e7b02b3896e3a39d7d8");

db.movies.updateOne(
  { _id: ObjectId("6656624b2c26b845bd52b8c2") },
  { $set: { Directors: [ObjectId("665a3e7b02b3896e3a39d7d8")] } }
);

db.movies.findOne({ _id: ObjectId("6656624b2c26b845bd52b8c2") });

// director 18 - Cate Shortland
var director18 = {
  Name: "Cate Shortland",
  Birthyear: "Aug 10, 1968",
  Bio: "Cate Shortland is an Australian director and screenwriter. She received international acclaim for her 2004 romantic drama film Somersault, her 2012 historical drama film Lore, and her 2017 psychological thriller film Berlin Syndrome. She is best known for directing the 2021 superhero film Black Widow.",
};

db.directors.insertOne(director18);
ObjectId("665a3f4938611a8f29f9af85");

db.movies.updateOne(
  { _id: ObjectId("665662f32c26b845bd52b8cc") },
  { $set: { Directors: [ObjectId("665a3f4938611a8f29f9af85")] } }
);

db.movies.findOne({ _id: ObjectId("665662f32c26b845bd52b8cc") });

// director 19 - Destin Daniel Cretton
var director19 = {
  Name: "Destin Daniel Cretton",
  Birthyear: "Nov 23, 1978",
  Bio: "Destin Yori Daniel Cretton is an American filmmaker. He is best known for his films Short Term 12, The Glass Castle, Just Mercy and the Marvel Studios film Shang-Chi and the Legend of the Ten Rings.",
};

db.directors.insertOne(director19);
ObjectId("665a3fcd38611a8f29f9af86");

db.movies.updateOne(
  { _id: ObjectId("665663062c26b845bd52b8cd") },
  { $set: { Directors: [ObjectId("665a3fcd38611a8f29f9af86")] } }
);

db.movies.findOne({ _id: ObjectId("665663062c26b845bd52b8cd") });

// director 20 - Chloé Zhao
var director20 = {
  Name: "Chloé Zhao",
  Birthyear: "Mar 31, 1982",
  Bio: "Chloe Zhao's life was primarily guided by a quest for information. Born in China, she grew up in a place where she felt trapped, like she was never going to get out. When her family finally moved away to London when she was in high school, she then researched and learned what she had missed being in China.",
};

db.directors.insertOne(director20);
ObjectId("665a406c38611a8f29f9af87");

db.movies.updateOne(
  { _id: ObjectId("665663152c26b845bd52b8ce") },
  { $set: { Directors: [ObjectId("665a406c38611a8f29f9af87")] } }
);

db.movies.findOne({ _id: ObjectId("665663152c26b845bd52b8ce") });

// director 21 - Sam Raimi
var director21 = {
  Name: "Sam Raimi",
  Birthyear: "Oct 23, 1959",
  Bio: 'Born in a suburb of Detroit, Michigan in 1959, Sam Raimi began making movies with Bruce Campbell and some other friends when they were in their teens. The two would continue to collaborate repeatedly over the span of their careers. Raimi attended Michigan State University, but dropped out to make "The Evil Dead" (1981), starring Campbell.',
};

db.directors.insertOne(director21);
ObjectId("665a412838611a8f29f9af88");

db.movies.updateOne(
  { _id: ObjectId("665663512c26b845bd52b8d0") },
  { $set: { Directors: [ObjectId("665a412838611a8f29f9af88")] } }
);

db.movies.findOne({ _id: ObjectId("665663512c26b845bd52b8d0") });

// director 22 - Nia DaCosta
var director22 = {
  Name: "Nia DaCosta",
  Birthyear: "Nov 8, 1989",
  Bio: "Nia DaCosta is an American film director, screenwriter, and producer. She made her feature film debut as a writer and director for her crime thriller film Little Woods. Nia garnered wide acclaim for winning the Nora Ephron Prize for Female Filmmakers at the Tribeca Film Festival.",
};

db.directors.insertOne(director22);
ObjectId("665a41e338611a8f29f9af89");

db.movies.updateOne(
  { _id: ObjectId("665663922c26b845bd52b8d5") },
  { $set: { Directors: [ObjectId("665a41e338611a8f29f9af89")] } }
);

db.movies.findOne({ _id: ObjectId("665663922c26b845bd52b8d5") });
