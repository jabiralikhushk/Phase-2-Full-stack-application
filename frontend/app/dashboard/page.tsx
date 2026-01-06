'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';
import api from '@/lib/api';

interface Todo {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

const DashboardPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }
    fetchTodos();
  }, [router]);

  const fetchTodos = async () => {
    try {
      const res = await api.get('/api/todos');
      setTodos(res.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTodo(prev => ({ ...prev, [name]: value }));
  };

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.title.trim()) return;

    try {
      const res = await api.post('/api/todos', newTodo);
      setTodos([res.data, ...todos]);
      setNewTodo({ title: '', description: '' });
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to add todo');
    }
  };

  const toggleTodo = async (id: string) => {
    try {
      const todo = todos.find(t => t._id === id);
      if (!todo) return;

      const res = await api.put('/api/todos/' + id, {
        completed: !todo.completed,
      });

      setTodos(todos.map(t => (t._id === id ? res.data : t)));
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to update todo');
    }
  };

  const deleteTodo = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this todo?')) return;

    try {
      await api.delete('/api/todos/' + id);
      setTodos(todos.filter(t => t._id !== id));
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to delete todo');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-xl'>Loading...</div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center'>
          <h1 className='text-3xl font-bold text-gray-900'>My Bonsai App</h1>
          <Button variant='secondary' onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>
      <main className='max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8'>
        {error && (
          <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4' role='alert'>
            <span className='block sm:inline'>{error}</span>
          </div>
        )}
        <Card className='mb-8'>
          <h2 className='text-xl font-semibold mb-4'>Add New Todo</h2>
          <form onSubmit={handleAddTodo} className='space-y-4'>
            <Input
              label='Title'
              id='title'
              name='title'
              type='text'
              placeholder='What needs to be done?'
              value={newTodo.title}
              onChange={handleInputChange}
              required
            />
            <div className='mb-4'>
              <label htmlFor='description' className='block text-sm font-medium text-gray-700 mb-1'>
                Description
              </label>
              <textarea
                id='description'
                name='description'
                placeholder='Add details...'
                value={newTodo.description}
                onChange={handleInputChange}
                className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
            <Button type='submit' variant='primary'>
              Add Todo
            </Button>
          </form>
        </Card>
        <div>
          <h2 className='text-xl font-semibold mb-4'>Your Todos ({todos.length})</h2>
          {todos.length === 0 ? (
            <p className='text-gray-500'>No todos yet. Add one above!</p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {todos.map(todo => (
                <Card key={todo._id} className={todo.completed ? 'bg-green-50' : ''}>
                  <div className='flex justify-between items-start'>
                    <div>
                      <h3 className={'font-medium ' + (todo.completed ? 'line-through text-gray-500' : 'text-gray-900')}>
                        {todo.title}
                      </h3>
                      {todo.description && (
                        <p className={'mt-1 text-sm ' + (todo.completed ? 'line-through text-gray-500' : 'text-gray-600')}>
                          {todo.description}
                        </p>
                      )}
                      <p className='mt-2 text-xs text-gray-500'>
                        Created: {new Date(todo.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className='flex space-x-2'>
                      <Button
                        variant={todo.completed ? 'secondary' : 'primary'}
                        onClick={() => toggleTodo(todo._id)}
                        className='text-xs'
                      >
                        {todo.completed ? 'Undo' : 'Complete'}
                      </Button>
                      <Button
                        variant='danger'
                        onClick={() => deleteTodo(todo._id)}
                        className='text-xs'
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;