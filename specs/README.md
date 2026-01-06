# Specifications for My Bonsai App

This directory contains all the specifications for the My Bonsai App project.

## API Specifications

### Todo Endpoints

#### GET /api/todos
- Description: Retrieve all todos
- Response: 200 OK with array of todos
- Example Response:
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "title": "Sample task",
      "description": "A sample todo item",
      "completed": false,
      "createdAt": "2023-01-01T00:00:00Z",
      "updatedAt": "2023-01-01T00:00:00Z"
    }
  ]
}
```

#### POST /api/todos
- Description: Create a new todo
- Request Body:
```json
{
  "title": "New task",
  "description": "Description of the task"
}
```
- Response: 201 Created with the created todo

#### PUT /api/todos/:id
- Description: Update an existing todo
- Request Body:
```json
{
  "title": "Updated task",
  "description": "Updated description",
  "completed": true
}
```
- Response: 200 OK with updated todo

#### DELETE /api/todos/:id
- Description: Delete a todo
- Response: 200 OK with success message

## Database Schema

### Todos Table
- id (string, primary key)
- title (string, not null)
- description (string, optional)
- completed (boolean, default: false)
- createdAt (datetime, not null)
- updatedAt (datetime, not null)

## UI/UX Specifications

### Color Palette
- Primary: #4a7c59 (Forest Green)
- Secondary: #d8e8d2 (Light Green)
- Accent: #f8b739 (Golden Yellow)
- Background: #f9f9f9 (Light Gray)
- Text: #333333 (Dark Gray)

### Components
- Todo List: Displays all todos with checkboxes
- Todo Item: Individual todo with title, description, and actions
- Add Todo Form: Form to create new todos
- Filter Controls: Buttons to filter todos (All, Active, Completed)