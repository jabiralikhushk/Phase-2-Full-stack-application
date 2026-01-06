# Frontend Specification - Hackathon Todo App

## Tech Stack
- Next.js 16+ (App Router)
- React 19+
- TypeScript
- Better Auth (for JWT handling)

## Directory Structure
```
frontend/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── auth/
│   │   ├── page.tsx
│   │   └── signup/page.tsx
│   └── dashboard/
│       └── page.tsx
├── components/
│   ├── TaskList.tsx
│   ├── TaskForm.tsx
│   └── TaskItem.tsx
├── lib/
│   └── api.ts
├── package.json
├── next.config.js
├── tsconfig.json
└── CLAUDE.md
```

## Authentication
- Better Auth integration for signup/login
- JWT token management
- Protected routes implementation
- Session handling

## API Integration
- Client-side API calls to backend
- JWT token attachment to requests
- Error handling for auth failures
- Loading states management

## Components
- TaskList: Displays user's tasks
- TaskForm: For creating/updating tasks
- TaskItem: Individual task with actions
- AuthPage: Login/signup forms
- Dashboard: Main authenticated view