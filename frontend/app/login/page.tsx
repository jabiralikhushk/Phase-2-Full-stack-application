'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';
import api from '@/lib/api';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Redirect if already logged in
    if (localStorage.getItem('token')) {
      router.push('/dashboard');
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await api.post('/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <Card className='max-w-md w-full'>
        <div className='text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900'>Sign in to your account</h2>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          {error && (
            <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' role='alert'>
              <span className='block sm:inline'>{error}</span>
            </div>
          )}
          <Input
            label='Email Address'
            id='email'
            name='email'
            type='email'
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            label='Password'
            id='password'
            name='password'
            type='password'
            placeholder='Enter your password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div>
            <Button
              type='submit'
              variant='primary'
              className='w-full'
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
          </div>
        </form>
        <div className='mt-4 text-center'>
          <p className='text-sm text-gray-600'>
            Don't have an account?{' '}
            <Link href='/signup' className='font-medium text-blue-600 hover:text-blue-500'>
              Sign up
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;