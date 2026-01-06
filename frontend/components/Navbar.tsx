import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='bg-gray-800 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='text-xl font-bold'>
          Bonsai App
        </Link>
        <div className='flex space-x-4'>
          <Link
            href='/'
            className={'px-3 py-2 rounded-md ' + (pathname === '/' ? 'bg-gray-700' : 'hover:bg-gray-700')}
          >
            Home
          </Link>
          <Link
            href='/login'
            className={'px-3 py-2 rounded-md ' + (pathname === '/login' ? 'bg-gray-700' : 'hover:bg-gray-700')}
          >
            Login
          </Link>
          <Link
            href='/signup'
            className={'px-3 py-2 rounded-md ' + (pathname === '/signup' ? 'bg-gray-700' : 'hover:bg-gray-700')}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;