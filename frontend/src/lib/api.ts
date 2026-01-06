// frontend/src/lib/api.ts
import { Task, CreateTaskData, UpdateTaskData } from '@/types/task';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// Get JWT token from wherever it's stored (localStorage, cookies, etc.)
const getAuthToken = (): string | null => {
  if (typeof window !== 'undefined') {
    // In browser environment
    return localStorage.getItem('auth_token');
  }
  return null;
};

// Set up default headers for API requests
const getHeaders = (): HeadersInit => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const token = getAuthToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};

// Handle API errors, especially auth-related ones
const handleApiError = async (response: Response): Promise<void> => {
  if (response.status === 401) {
    // Unauthorized - token is invalid or expired
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_id');
      // Redirect to login page
      window.location.href = '/auth';
    }
    throw new Error('Unauthorized: Please log in again');
  } else if (response.status === 403) {
    // Forbidden - user doesn't have permission
    throw new Error('Access forbidden: You do not have permission to perform this action');
  } else if (response.status === 422) {
    // Validation error
    const errorData = await response.json();
    throw new Error(`Validation error: ${errorData.detail || 'Invalid input'}`);
  } else if (!response.ok) {
    // Other error
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `API error: ${response.status} ${response.statusText}`);
  }
};

// API functions for tasks
export const taskApi = {
  // Get all tasks for a user
  getTasks: async (userId: string): Promise<Task[]> => {
    const response = await fetch(`${API_BASE_URL}/${userId}/tasks`, {
      method: 'GET',
      headers: getHeaders(),
    });

    await handleApiError(response);
    return response.json();
  },

  // Create a new task
  createTask: async (userId: string, taskData: CreateTaskData): Promise<Task> => {
    const response = await fetch(`${API_BASE_URL}/${userId}/tasks`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(taskData),
    });

    await handleApiError(response);
    return response.json();
  },

  // Update a task
  updateTask: async (userId: string, taskId: number, taskData: UpdateTaskData): Promise<Task> => {
    const response = await fetch(`${API_BASE_URL}/${userId}/tasks/${taskId}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(taskData),
    });

    await handleApiError(response);
    return response.json();
  },

  // Delete a task
  deleteTask: async (userId: string, taskId: number): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/${userId}/tasks/${taskId}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });

    await handleApiError(response);
  },

  // Toggle task completion
  toggleTaskCompletion: async (userId: string, taskId: number): Promise<Task> => {
    const response = await fetch(`${API_BASE_URL}/${userId}/tasks/${taskId}/complete`, {
      method: 'PATCH',
      headers: getHeaders(),
    });

    await handleApiError(response);
    return response.json();
  },
};