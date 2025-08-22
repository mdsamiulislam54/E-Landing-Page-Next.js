"use client";

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const { data: session, status } = useSession();
  console.log('session', session);

  return (
    <nav className='flex justify-between items-center py-4 container mx-auto px-4 max-w-screen-xl'>
      <div>
        <h1 className='text-2xl font-bold'>
          <Link href="/">NextBuy</Link>
        </h1>
      </div>

      <div>
        <ul className='flex space-x-4'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/page/products">Products</Link></li>
          <li><Link href="/dashboard/add-products">Add Products</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className='space-x-4'>
        {!session ? (
          <Link
            href="/login"
            className='inline-flex items-center justify-center rounded-xl bg-white px-5 py-2 font-medium text-gray-800 transition hover:bg-transparent hover:text-white hover:outline hover:outline-2 hover:outline-white'
          >
            Login
          </Link>
        ) : (
          <button
            onClick={() => signOut()}
            className='inline-flex items-center justify-center rounded-xl bg-white px-5 py-2 font-medium text-gray-800 transition hover:bg-transparent hover:text-white hover:outline hover:outline-2 hover:outline-white'
          >
            Sign Out
          </button>
        )}
        {
          !session && (
             <Link
            href="/registration"
            className='inline-flex items-center justify-center rounded-xl bg-white px-5 py-2 font-medium text-gray-800 transition hover:bg-transparent hover:text-white hover:outline hover:outline-2 hover:outline-white'
          >
            Register
          </Link>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;
