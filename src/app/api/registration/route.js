import { dbConnection, collection } from "@/lib/dbConnection";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password)
      return new Response(JSON.stringify({ message: "All fields required" }), { status: 400 });

    const usersCollection = await dbConnection(collection.users);
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser)
      return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await usersCollection.insertOne({ name, email, password: hashedPassword });

    return new Response(JSON.stringify({ message: "User registered", user: result }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
}
