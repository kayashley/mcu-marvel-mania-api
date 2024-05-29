// MONGO USERS DB

// user1
var user1 = {
  Username: "User1",
  Password: "12345",
  Email: "user1@email.com",
  Birthday: "0000-00-0",
  FavoriteMovies: ["Iron Man"],
};

db.users.insertOne(user1);
ObjectId("66577ce3d42075717c3404db");

// user2
var user2 = {
  Username: "User2",
  Password: "12345",
  Email: "user2@email.com",
  Birthday: "0000-00-0",
  FavoriteMovies: ["Iron Man 2"],
};

db.users.insertOne(user2);
ObjectId("66577ceed42075717c3404dc");

// user3
var user3 = {
  Username: "User3",
  Password: "12345",
  Email: "user3@email.com",
  Birthday: "0000-00-0",
  FavoriteMovies: ["Iron Man 3"],
};

db.users.insertOne(user3);
ObjectId("66577cf7d42075717c3404dd");
