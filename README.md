# SpotifyClone

A lightweight Spotify-inspired backend built with Node.js, Express, and MongoDB. The project currently focuses on core authentication flow and a starting structure for music-related features.

## Overview

This project was created to model a simplified music streaming app backend. It includes:

- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Cookie-based token storage
- MongoDB integration with Mongoose
- Initial data models for users and music

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- cookie-parser

## Project Structure

```bash
SpotifyClone_Sheriyans/
├── src/
│   ├── app.js
│   ├── controller/
│   │   ├── auth.controller.js
│   │   └── music.controller.js
│   ├── db/
│   │   └── db.js
│   ├── model/
│   │   ├── music.model.js
│   │   └── user.model.js
│   └── routes/
│       ├── auth.routes.js
│       └── music.routes.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Features

### Authentication
The API exposes auth endpoints under `/api/auth`:

- `POST /api/auth/register`
- `POST /api/auth/login`

The registration flow:

- validates the username/email combination
- checks if the user already exists
- hashes the password with bcrypt
- creates a user in MongoDB
- creates a JWT token and stores it in a cookie

The login flow:

- finds the user by username or email
- verifies the password
- creates a JWT token
- sets it as a cookie in the response

### User Model
The user schema includes:

- `username` (required, unique)
- `email` (required, unique)
- `password` (required)
- `role` (`user` or `artist`, default: `user`)

### Music Model
A music schema has been started with fields such as:

- `uri`
- `title`
- `artist`

This is scaffolded and can be expanded for album, playlist, track, and streaming features.

## Environment Variables

Create a `.env` file in the project root with the following values:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Example:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/SpotifyClone
JWT_SECRET=supersecretjwtkey
```

## Installation

1. Clone the repository
2. Open the project directory
3. Install dependencies:

```bash
npm install
```

## Running the Project

Start the server:

```bash
npm start
```

For development with auto-reload:

```bash
npm run dev
```

The app listens on port `3000` by default.

## API Example

### Register user

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "email": "john@example.com",
    "password": "secret123",
    "role": "user"
  }'
```

### Login user

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "password": "secret123"
  }'
```

## Notes

This is a backend-first starter project. Most of the app logic is set up for authentication and basic music-domain scaffolding, but additional features like:

- playlist management
- artist pages
- track upload
- recommendation engine
- playback controls
- frontend UI

would need to be implemented next.

## License

This project is currently using the package license defined in `package.json` (`ISC`).
