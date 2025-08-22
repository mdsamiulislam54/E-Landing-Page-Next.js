import { getProductsId } from '@/lib/getProductsById';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ProductsDetails = async ({ params }) => {
  const { id } = await params;
  const products = await getProductsId(id);

  return (
    <div className='py-10 '>
      <div className='container max-w-screen mx-auto px-4 flex justify-between min-h-screen'>
        <div className='flex-1 mb-4 w-full mx-auto '>
          <Image src={products.image} alt={products.title} width={400} height={200} />
        </div>
        <div className='flex-1 space-y-2'>
          <h1 className='text-2xl font-bold'>{products.name}</h1>
          <p className='text-sm font-semibold'>Price: ${products.price}</p>
          <p className='text-sm font-semibold'>Brand: {products.brand}</p>
          <p className='text-sm font-semibold'>Color: {products.color}</p>
          <ul className='flex items-center space-x-2'>
            <strong>Size:</strong>
            {
              products.size.map((size, index) => (
                <li key={index} className='text-sm font-semibold'>{size}</li>
              ))
            }
          </ul>
          <ul className='flex flex-col  space-y-2 mb-4'>
            <strong>Feature:</strong>
            {
              products.features.map((features, index) => (
                <li key={index} className='text-sm font-semibold  pl-4 '>{features}</li>
              ))
            }
          </ul>
          <strong className='my-3'>Description</strong>
          <p className='text-gray-600 text-sm tracking-wide mb-4'>{products.description}</p>

           <Link
          href="/page/products"
          className="inline-flex items-center justify-center rounded-xl bg-gray-800 px-5 py-3 font-medium text-gray-100 transition-all duration-500 hover:bg-gray-100 hover:text-gray-800  hover:outline-2 hover:outline-gray-800"
        >
          Buy Now
        </Link>

        </div>

       
      </div>
    </div>
  )
}

export default ProductsDetails 