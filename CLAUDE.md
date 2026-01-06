# Hackathon Todo App - Spec Kit Plus

This repository contains the specification and implementation for a secure multi-user todo application. The app implements JWT-based authentication with user data isolation.

## Project Structure

```
hackathon-todo-app/
├── frontend/           # Next.js 16+ frontend with Better Auth
├── backend/            # Python FastAPI backend with SQLModel
├── specs/              # Project specifications and documentation
├── CLAUDE.md           # Root project specification
├── sp.constitution     # Project governance rules
├── sp.plan            # Implementation plan
├── sp.specify         # Technical specifications
└── sp.tasks           # Implementation tasks
```

## Project Overview

The Hackathon Todo App is a secure, multi-user todo application that implements JWT-based authentication with user data isolation. The application follows modern security practices with stateless authentication.

## Tech Stack

- Frontend: Next.js 16+ with App Router, TypeScript
- Backend: Python FastAPI with SQLModel
- Database: Neon Serverless PostgreSQL
- Authentication: Better Auth (frontend), JWT verification (backend)
- ORM: SQLModel for database operations

## Features

1. User authentication with Better Auth
2. JWT-based secure API access
3. User data isolation - users only see their own tasks
4. Create, read, update, and delete tasks
5. Mark tasks as complete/incomplete
6. Responsive design for mobile and desktop

## API Specification

The backend exposes JWT-protected endpoints for managing tasks:

- `GET /api/{user_id}/tasks` - Get user's tasks
- `POST /api/{user_id}/tasks` - Create a new task for user
- `PUT /api/{user_id}/tasks/{id}` - Update a user's task
- `DELETE /api/{user_id}/tasks/{id}` - Delete a user's task
- `PATCH /api/{user_id}/tasks/{id}/complete` - Toggle task completion

## Security Features

- All API endpoints require JWT authentication
- User ID validation to prevent unauthorized access
- Data isolation to ensure users only access their own data
- JWT signature verification
- Input validation and sanitization

## Development Workflow

1. Clone the repository
2. Install Python dependencies with Poetry in backend/
3. Install Node.js dependencies with npm in frontend/
4. Run development servers for both frontend and backend
5. Frontend will be available at http://localhost:3000
6. Backend API will be available at http://localhost:4000

## Environment Variables

- `DATABASE_URL` - Connection string for Neon PostgreSQL
- `JWT_SECRET` - Secret key for JWT verification
- `FRONTEND_URL` - URL for the frontend application