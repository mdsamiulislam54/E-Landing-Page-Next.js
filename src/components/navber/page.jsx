"use client"; 

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-4 container mx-auto px-4 max-w-screen-xl'>
      <div>
        <h1 className='text-2xl font-bold'>
          <Link href="/">NextBuy</Link>
        </h1>
      </div>
      <div>
        <ul className='flex space-x-4'>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link
          href="/login"
          className='inline-flex items-center justify-center rounded-xl bg-white px-5 py-2 font-medium text-gray-800 transition hover:bg-transparent hover:text-white hover:outline hover:outline-2 hover:outline-white'
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
