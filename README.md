# blog-backend

A simple backend API for managing login accounts. It uses Express for routing, Prisma for database access, and PostgreSQL for storage.

## About

This project is a backend exercise that exposes login-related endpoints under `/api`. It stores login records with hashed passwords and issues JWT tokens for authentication.

## Features

- Register a login with `POST /api/cadastrar-login`
- Authenticate with `POST /api/login`
- List all login records with `GET /api/get-login`
- Update login details with `PUT /api/login/:id`
- Delete a login record with `DELETE /api/delete-login/:id`
- Use JWT for token creation
- Hash passwords with bcrypt before saving

## Built With

- Node.js as the runtime
- Express for server and routing
- Prisma as the ORM
- PostgreSQL as the database engine
- bcrypt for password hashing
- jsonwebtoken for JWT token creation
- dotenv and nodemon for environment and development

## Project Structure

blog-backend/
├── .gitignore
├── prisma/
│ ├── migrations/
│ └── schema.prisma
├── sqls/
│ └── CreateDb.sql
├── src/
│ ├── app.js
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ └── login.controller.js
│ ├── routes/
│ │ └── login.routes.js
│ ├── services/
│ │ └── login.service.js
│ └── utils/
├── package.json
├── prisma.config.ts
├── server.js
└── README.md

## How to Run

1. Install dependencies with `npm install`.
2. Create a PostgreSQL database and add `DATABASE_URL` to `.env`.
3. Run Prisma migrations with `npx prisma migrate dev`.
4. Start the server with `npm run dev`.

## API Endpoints

- `POST /api/cadastrar-login` registers a new login account
- `POST /api/login` authenticates a login and returns a JWT
- `GET /api/get-login` returns all login records
- `PUT /api/login/:id` updates a login record
- `DELETE /api/delete-login/:id` deletes a login record

## Database

The Prisma schema includes these models:

- `User`: stores `id`, `name`, `email`, and `role`
- `Login`: stores `id`, `login`, `password`, `permission`, and `createdAt`

## Environment Variables

- `DATABASE_URL`: the PostgreSQL connection string used by Prisma
- `JWT_SECRET`: secret used to sign JWT tokens

## What I Practiced

- Building a REST API with Express
- Using Prisma to access PostgreSQL data
- Hashing passwords with bcrypt
- Creating JWT tokens for authentication
- Loading environment variables with dotenv
