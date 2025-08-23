"use client";


import { RegisterUser } from "@/app/action/auth/registerUser";
import { set } from "mongoose";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    // const router = useRouter();
    const [name, setName] = useState("");


    const handleCredentialsLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

     

        // Prepare user data
        const userData = { email, password, name };
        console.log("User Data:", userData);
        const res = await RegisterUser(userData);
        if (res.status === 201) {
            alert("Registration successful! Please log in.");
        } else {
            alert(`Registration failed: ${res.message}`);
        }
        setLoading(false);
        // Redirect to login page after successful registration
        redirect("/login");
      


    };

    const handleGoogleLogin = () => {
        signIn("google", { callbackUrl: "/" });
        console.log("Google login initiated",);
    };
    return (
        <form onSubmit={handleCredentialsLogin} className="space-y-4">
            <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                    type="text"
                    placeholder="Enter your Name"

                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
                    required
                />
            </div>
            {/* Email */}
            <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
                    required
                />
            </div>

            {/* Password */}
            <div>
                <label className="block text-gray-700 mb-1">Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
                    required
                />
            </div>

            {/* Login Button */}
            <button
                type="submit"
                className="w-full bg-gray-800 text-white font-semibold py-2 rounded-lg hover:bg-gray-900 transition"
            >
                 {loading ? "Sign Up..." : "Sign Up"}
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-2 text-gray-400">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Google Login */}
            <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
            >
                <img
                    src="https://www.svgrepo.com/show/355037/google.svg"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                />
                Continue with Google
            </button>

        </form>
    )
}

export default Register