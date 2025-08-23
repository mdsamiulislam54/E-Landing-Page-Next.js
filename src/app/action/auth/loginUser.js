"use server"
import { collection, dbConnection } from "@/lib/dbConnection";
import bcrypt from "bcrypt";

export async function LoginUser(payload) {
    if (!payload.email || !payload.password) {
        return {
            status: 400,
            message: "Email and password are required"
        };
    }

    try {
        const { email, password } = payload;
        const usersCollection = await dbConnection(collection.users);
        const user = await usersCollection.findOne({ email });

        if (!user) {
            return {
                status: 409,
                message: "User not found"
            };
        }

        // Compare plain password with hashed password
        const isPassword = await bcrypt.compare(password, user.password);

        if (!isPassword)  return null;

       return user
       

    } catch (error) {
        console.error("Error logging in user:", error);
        return {
            status: 500,
            message: "Failed to login user"
        };
    }
}
