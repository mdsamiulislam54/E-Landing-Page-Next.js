"use server"
import { collection, dbConnection } from "@/lib/dbConnection";
import bcrypt from "bcrypt";
export async function RegisterUser(payload) {
    if(!payload.email && !payload.password) {
        return {
            status: 400,
            message: "Email and password are required"
        };
    }

    try {
        const { email, password,name } = payload;
        const usersCollection = await dbConnection(collection.users);
        const existingUser = await usersCollection.findOne({ email });

        if (existingUser) {
            return {
                status: 409,
                message: "User already exists"
            };

        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const useData = {
            name: payload.name || "Anonymous",
            email,
            password : hashedPassword


        };

        const newUser = await usersCollection.insertOne(useData);
        return {
            status: 201,
            message: "User registered successfully",
            user: newUser
        };
    } catch (error) {
        console.error("Error registering user:", error);
        return {
            status: 500,
            message: "Failed to register user"
        };
    }
}