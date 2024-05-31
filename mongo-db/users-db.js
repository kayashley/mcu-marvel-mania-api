// MONGO USERS DB

// user1
var user1 = {
  Username: "User1",
  Password: "12345",
  Email: "user1@email.com",
  Birthday: "0000-00-0",
  FavoriteMovies: [ObjectId("6656572676c29aee626387b8")],
};

db.users.insertOne(user1);
ObjectId("66577ce3d42075717c3404db");

db.users.updateOne(
  { _id: ObjectId("66577ce3d42075717c3404db") },
  { $set: { Birthday: "Jan 1, 2001" } }
);

db.users.updateOne(
  { _id: ObjectId("66577ce3d42075717c3404db") },
  { $set: { FavoriteMovies: ObjectId("6656572676c29aee626387b8") } }
);

db.users.findOne(ObjectId("66577ce3d42075717c3404db"));

// user2
var user2 = {
  Username: "User2",
  Password: "12345",
  Email: "user2@email.com",
  Birthday: "0000-00-0",
  FavoriteMovies: [ObjectId("6656577376c29aee626387ba")],
};

db.users.insertOne(user2);
ObjectId("66577ceed42075717c3404dc");

db.users.updateOne(
  { _id: ObjectId("66577ceed42075717c3404dc") },
  { $set: { Birthday: "Jan 1, 2001" } }
);

db.users.updateOne(
  { _id: ObjectId("66577ceed42075717c3404dc") },
  { $set: { FavoriteMovies: ObjectId("6656577376c29aee626387ba") } }
);

// user3
var user3 = {
  Username: "User3",
  Password: "12345",
  Email: "user3@email.com",
  Birthday: "0000-00-0",
  FavoriteMovies: [ObjectId("66566168f065c4f12c325430")],
};

db.users.insertOne(user3);
ObjectId("66577cf7d42075717c3404dd");

db.users.updateOne(
  { _id: ObjectId("66577cf7d42075717c3404dd") },
  { $set: { Birthday: "Jan 1, 2001" } }
);

db.users.updateOne(
  { _id: ObjectId("66577cf7d42075717c3404dd") },
  { $set: { FavoriteMovies: ObjectId("66566168f065c4f12c325430") } }
);

db.users.findOne(ObjectId("66577cf7d42075717c3404dd"));
