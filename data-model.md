# Database Schema & Relations

## User Model

- **_id**: ObjectId (Primary Key)
- **name**: String (Required, Trimmed)
- **email**: String (Required, Unique, Lowercase, Trimmed)
- **password**: String (Required, MinLength: 6)
- **createdAt**: Date (Auto-generated)
- **updatedAt**: Date (Auto-generated)

## Todo Model

- **_id**: ObjectId (Primary Key)
- **title**: String (Required, Trimmed)
- **description**: String (Optional, Trimmed)
- **completed**: Boolean (Default: false)
- **user**: ObjectId (Reference to User, Required)
- **createdAt**: Date (Auto-generated)
- **updatedAt**: Date (Auto-generated)

## Relations

- A **User** can have many **Todos**
- A **Todo** belongs to one **User**
- When a User is deleted, their Todos are also deleted

## Indexes

- User.email: Unique Index
- Todo.user: Index for efficient querying