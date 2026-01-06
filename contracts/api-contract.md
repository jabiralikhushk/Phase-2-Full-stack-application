# API Contract Specification  
  
## Authentication Endpoints  
  
### POST /api/auth/register  
- **Description**: Register a new user  
- **Request Body**:  
  - name (string, required)  
  - email (string, required, unique)  
  - password (string, required, min 6 chars)  
- **Response**: 201 Created  
  - _id (string)  
  - name (string)  
  - email (string)  
  - token (string)  
  
### POST /api/auth/login  
- **Description**: Authenticate user and return token  
- **Request Body**:  
  - email (string, required)  
  - password (string, required)  
- **Response**: 200 OK  
  - _id (string)  
  - name (string)  
  - email (string)  
  - token (string)  
  
### GET /api/auth/me  
- **Description**: Get current user info  
- **Headers**: Authorization: Bearer {token}  
- **Response**: 200 OK  
  - _id (string)  
  - name (string)  
  - email (string)  
  
## Todo Endpoints  
  
### GET /api/todos  
- **Description**: Get all todos for authenticated user  
- **Headers**: Authorization: Bearer {token}  
- **Response**: 200 OK  
  - Array of todo objects  
  
### POST /api/todos  
- **Description**: Create a new todo  
- **Headers**: Authorization: Bearer {token}  
- **Request Body**:  
  - title (string, required)  
  - description (string, optional)  
- **Response**: 201 Created  
  - _id (string)  
  - title (string)  
  - description (string)  
  - completed (boolean)  
  - user (string)  
  - createdAt (string)  
  - updatedAt (string)  
  
### GET /api/todos/:id  
- **Description**: Get a specific todo  
- **Headers**: Authorization: Bearer {token}  
- **Response**: 200 OK  
  - _id (string)  
  - title (string)  
  - description (string)  
  - completed (boolean)  
  - user (string)  
  - createdAt (string)  
  - updatedAt (string)  
  
### PUT /api/todos/:id  
- **Description**: Update a specific todo  
- **Headers**: Authorization: Bearer {token}  
- **Request Body**:  
  - title (string, optional)  
  - description (string, optional)  
  - completed (boolean, optional)  
- **Response**: 200 OK  
  - _id (string)  
  - title (string)  
  - description (string)  
  - completed (boolean)  
  - user (string)  
  - createdAt (string)  
  - updatedAt (string)  
  
### DELETE /api/todos/:id  
- **Description**: Delete a specific todo  
- **Headers**: Authorization: Bearer {token}  
- **Response**: 200 OK  
  - message (string) 
