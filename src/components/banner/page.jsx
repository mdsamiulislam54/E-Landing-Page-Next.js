import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div>
        <div>
            <span>50% OFF</span>
             <h1>Premium Quality T-Shirts</h1>
             <p>Express your style with our premium collection of comfortable and stylish t-shirts. Made from 100% cotton for everyday wear.</p>
             <Link href="/products" className="bg-blue-500 text-white px-4 py-2 rounded">Shop Now</Link>
               <div className="features">
                    <div className="feature">100% Cotton</div>
                    <div className="feature">Free Shipping</div>
                    <div className="feature">30-Day Returns</div>
                </div>
        </div>
    </div>
  )
}

export default Banner