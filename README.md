## MCU Marvel Mania API

Welcome to the **MCU Marvel Mania API**, a Node.js and Express backend service for the Marvel Mania app. This API provides endpoints to manage and retrieve data related to Marvel Cinematic Universe (MCU). The API connects to MongoDB Atlas for online storage.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies](#technologies)
- [Database](#database)
- [Postman Collection](#postman-collection)
- [Contact](#contact)

## About

The **MCU Marvel Mania API** serves as the backend for the MCU Marvel Mania app, providing data and functionality for the frontend application. This API handles CRUD operations for movies and user data. It is built using Node.js and Express.js and is hosted on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for online data storage.

## Features

- **Movies**: CRUD operations for movies
- **Users**: CRUD operations for creating users and updating user information
- **Data Storage**: Utilizes MongoDB Atlas for persistent data storage

## Installation

1. **Clone the Repository**

```bash
git clone https://github.com/kayashley/mcu-movie-app-api.git
cd mcu-movie-app-api
```

2. **Install Dependencies**

Make sure you have Node.js and npm installed. Then run:

```bash
npm install
```

## Usage

To start the local API server, run:

```bash
node server.js
```

## API Endpoints

Endpoints available in the API:

_Movies_

- GET /movies
  Retrieves all movies

```bash
GET /movies
```

- GET /movies/:Name
  Retrieves movie by name

```bash
GET /movies/:Name
```

- GET /movies/genres/:genreId
  Retrieves movie by genreId

```bash
GET /movies/genres/:genreId
```

- GET /movies/genres/:Name
  Retrieves movie by genre name

```bash
GET /movies/genres/:Name
```

- GET /movies/directors/:directorId
  Retrieves director by directorId

```bash
GET /movies/directors/:directorId
```

- GET /movies/directors/:Name
  Retrieves director by name

```bash
GET /movies/directors/:Name
```

_Users_

- GET /users
  Retrieves all users

```bash
GET /users
```

- GET /users/:Username
  Retrieves user by username

```bash
GET /users/:Username
```

- POST /users
  Creates a user

```bash
POST /users
```

- POST /users/:Username/movies/:MovieID
  Adds to users favorite movies list

```bash
POST /users/:Username/movies/:MovieID
```

- PUT /users/:Username
  Updates user changes

```bash
PUT /users/:Username
```

- DELETE /users/:Username
  Deletes user

```bash
DELETE /users/:Username
```

- DELETE /users/:Username
  Deletes user

```bash
DELETE /users/:Username
```

- DELETE /users/:Username/movies/:MovieID
  Deletes favorite movie from users favorites list

```bash
DELETE /users/:Username
```

## Technologies

**MCU Marvel Mania API** uses the following technologies:

- Node.js - JS runtime
- Express.js - fast framework for Node.js
- MongoDB Atlas - cloud database service for MongoDB
- Mongoose - ongoDB object modeling tool for Node.js

## Postman Collection

I have created a Postman Collection for testing and exploring the API before hosting the API through MongoDB Atlas.

## Database

The backend API connects to MongoDB Atlas for data storage and uses a connection string used in a '.env' file.

## Contact

For any questions or suggestions, please contact me:

Name: Kayla Chan
Email: kayashchan@gmail.com
GitHub: kayashley

Feel free to open an issue or send a pull request!
