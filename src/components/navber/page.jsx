import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-4 max-w-7xl mx-auto'>
        <div>
            <h1>
                <Link href="/">NextBuy</Link>
            </h1>
        </div>
        <div className=''>
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
            <Link href="/cart">Login</Link>
        </div>
    </nav>
  )
}

export default Navbar