# Bonsai App - Full-Stack Todo Application

A modern full-stack todo application built with Next.js, TypeScript, Tailwind CSS, Node.js, and MongoDB.

## Features

- User authentication (register/login)
- Todo management (CRUD operations)
- Responsive design
- Secure API with JWT authentication
- Modern UI with Tailwind CSS
- TypeScript for type safety

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local instance or Atlas)

## Setup Instructions

### 1. Clone the repository

```bash
# If you're setting this up from scratch
# Create a new directory and initialize the project
```

### 2. Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Install root dependencies
cd ..
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Backend Environment Variables
MONGODB_URI=mongodb://localhost:27017/bonsai-app
JWT_SECRET=your-super-secret-jwt-key-change-in-production
PORT=5000

# Frontend Environment Variables
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 4. Run the Application

#### Development Mode

```bash
# Run both frontend and backend concurrently
npm run dev
```

Or run them separately:

```bash
# Terminal 1: Start the backend
cd backend
npm run dev

# Terminal 2: Start the frontend
cd frontend
npm run dev
```

#### Production Mode

```bash
# Build the frontend
cd frontend
npm run build

# Start the backend
cd ..
cd backend
npm start
```

## Project Structure

```
my-bonsai-app/
├── README.md
├── .env
├── .gitignore
├── backend/
│   ├── server.js
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── User.js
│   │   └── Todo.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── todos.js
│   └── utils/
│       └── jwt.js
└── frontend/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── login/
    │   │   └── page.tsx
    │   ├── signup/
    │   │   └── page.tsx
    │   └── dashboard/
    │       └── page.tsx
    ├── components/
    │   ├── ui/
    │   │   ├── Button.tsx
    │   │   ├── Input.tsx
    │   │   ├── Card.tsx
    │   │   └── Form.tsx
    │   ├── Navbar.tsx
    │   ├── LoginForm.tsx
    │   ├── SignupForm.tsx
    │   └── TodoList.tsx
    ├── hooks/
    │   ├── useAuth.ts
    │   └── useTodos.ts
    ├── lib/
    │   ├── api.ts
    │   └── utils.ts
    ├── public/
    ├── .env
    ├── next.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── tsconfig.json
    └── package.json
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login existing user
- `GET /api/auth/me` - Get current user info

### Todos

- `GET /api/todos` - Get all todos for logged in user
- `POST /api/todos` - Create a new todo
- `GET /api/todos/:id` - Get a specific todo
- `PUT /api/todos/:id` - Update a specific todo
- `DELETE /api/todos/:id` - Delete a specific todo

## Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run dev:backend` - Start only the backend in development mode
- `npm run dev:frontend` - Start only the frontend in development mode
- `npm run build` - Build the frontend for production
- `npm run start` - Start the backend in production mode
- `npm run install-all` - Install dependencies for all parts of the application

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.