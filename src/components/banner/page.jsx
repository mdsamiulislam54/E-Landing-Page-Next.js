import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BannerImages from '../../acesst/banner.png'

const Banner = () => {
    return (
        <div className='bg-gray-100 py-8'>
            <div className='container mx-auto px-4 max-w-screen-xl min-h-[70vh] flex items-center justify-between'>
            <div className='flex-1'>
                <span className='text-sm font-bold text-gray-600 mb-4'>50% OFF</span>
                <h1 className='text-4xl font-bold mb-4 '>Premium Quality T-Shirts</h1>
                <p className='text-sm tracking-wide text-gray-600 mb-4'>Express your style with our premium collection of comfortable and stylish t-shirts. Made from 100% cotton for everyday wear.</p>
                <div className="flex space-x-4  text-sm text-gray-600 mb-8">
                    <li className="">100% Cotton</li>
                    <li className="">Free Shipping</li>
                    <li className="">30-Day Returns</li>
                </div>
                  <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-xl bg-gray-800 px-5 py-3 font-medium text-gray-100 transition-all duration-500 hover:bg-gray-100 hover:text-gray-800  hover:outline-2 hover:outline-gray-800"
          >
                    Shop Now
          </Link>
            </div>
            <div className='flex-1 flex justify-cente4'>
                <Image src={BannerImages} width={500} height={500} alt='banner images'/>
            </div>
            </div>
        </div>
    )
}

export default Banner