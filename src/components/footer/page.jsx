

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-10">
      <div className="container max-w-screen mx-auto grid md:grid-cols-4 gap-8 px-6">
      
        <div>
          <h2 className="text-xl font-bold mb-4">NextBuy</h2>
          <p className="text-sm text-gray-400">
            Best online store for your needs. Quality products at the best price.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-400">About</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-gray-400">Products</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-400">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400">Contact</Link>
            </li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm">Email: support@myshop.com</p>
          <p className="text-sm">Phone: +880 1234-567890</p>
          <p className="text-sm">Address: Dhaka, Bangladesh</p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <Link href="https://facebook.com"><FaFacebook size={24} /></Link>
            <Link href="https://twitter.com"><FaTwitter size={24} /></Link>
            <Link href="https://instagram.com"><FaInstagram size={24} /></Link>
            <Link href="https://linkedin.com"><FaLinkedin size={24} /></Link>
          </div>

          <h3 className="text-lg font-semibold mb-4">Payment</h3>
          <div className="flex space-x-4">
            <FaCcVisa size={36} />
            <FaCcMastercard size={36} />
            <FaCcPaypal size={36} />
          </div>
        </div>
      </div>

     
      <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </div>
  );
}
