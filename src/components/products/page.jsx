import Image from 'next/image';
import React from 'react'

const Products = async () => {
    const products = await fetch("http://localhost:3000/api/products").then(res => res.json());
    console.log(products);
  return (
    <div>
        <h1>Products</h1>
        <div>
            {
              products.map((product)=>{
                return (
                    <div key={product._id}>
                      <Image src={product.image} width={100} height={100} alt={product.name}/>
                        <h2>{product.name}</h2>
                        
                    </div>
                )
              })
            }
        </div>
    </div>
  )
}

export default Products