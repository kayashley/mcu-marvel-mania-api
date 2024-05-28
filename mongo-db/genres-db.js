// MONGO GENRES DB

// genre 1 - ACTION
var genre1 = {
  Name: "Action",
  Description:
    "Action movies are thrilling to watch and leave audience members on the edge of their seats.",
};

db.genres.insertOne(genre1);
ObjectId("66562e9f76c29aee626387a3");

// genre 2 - ADVENTURE
var genre2 = {
  Name: "Adventure",
  Description:
    "These films generally take place in exotic locations and play on historical myths. Revolving around conquests and explorations of a protagonist.",
};

db.genres.insertOne(genre2);
ObjectId("66562ed176c29aee626387a4");

// genre 3 - SCI-FI
var genre3 = {
  Name: "Sci-Fi",
  Description:
    "Science fiction spans a wide range of themes that often explore time travel, space travel, are set in the future, and deal with the consequences of technological and scientific advances. Sci-fi movies typically involve meticulous world-building with strong attention to detail for the audience to believe the story and universe.",
};

db.genres.insertOne(genre3);
ObjectId("66562f5976c29aee626387a5");

// genre 4 - FANTASY
var genre4 = {
  Name: "Fantasy",
  Description:
    "Fantasy genre feature magical and supernatural elements that do not exist in the real world. Although some films juxtapose a real-world setting with fantastical elements, many create entirely imaginary universes with their own laws, logic, and populations of imaginary races and creatures.",
};

db.genres.insertOne(genre4);
ObjectId("66562f8076c29aee626387a6");

// genre 5 - COMEDY
var genre5 = {
  Name: "Comedy",
  Description:
    "Designed to elicit laughter from the audience. Comedies are light-hearted dramas, crafted to amuse, entertain, and provoke enjoyment.",
};

db.genres.insertOne(genre5);
ObjectId("66562fa876c29aee626387a7");

// genre 6 - HORROR
var genre6 = {
  Name: "Horror",
  Description:
    "Horror movies often include serial killers or monsters as persistent, evil antagonists to play on viewers’ fears or nightmares.",
};

db.genres.insertOne(genre6);
ObjectId("66562fcb76c29aee626387a8");
