import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Products = async () => {
  const products = await fetch("http://localhost:3000/api/products").then(res => res.json());
  console.log(products);
  return (
    <div className='bg-gray-100 py-16'>
      <div className='container max-w-screen-xl mx-auto px-4 py-8'>
        <h1 className='text-center font-bold text-4xl tracking-wide mb-16'>Products</h1>
        <div className='grid sm:grid-cols-2 md:grid-cols-4  gap-4'>
          {
            products.slice(0, 8).map((product) => {
              return (
                <div key={product._id} className='bg-white p-4 rounded-sm  hover:shadow-lg transition-shadow duration-300'>
                  <div className="relative w-full h-30 mb-4 ">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'contain', borderRadius: '0.5rem' }}
                    />
                  </div>
                  <div>
                    <h2 className='text-sm font-medium my-2'>{product.name}</h2>
                    <p className='text-sm text-gray-600'>
                     <strong> Price:</strong> <span className='text-sm font-semibold'>৳{product.price}</span>
                    </p>
                    <Link href={`/products/${product._id}`} className='text-blue-500 hover:underline mt-2 inline-block'>
                      View Details
                    </Link>
                  </div>

                </div>
              )
            })
          }
        </div>
        <div className='mt-8 text-center'>
             <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-xl bg-gray-800 px-5 py-3 font-medium text-gray-100 transition-all duration-500 hover:bg-gray-100 hover:text-gray-800  hover:outline-2 hover:outline-gray-800"
          >
            View All Products
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Products