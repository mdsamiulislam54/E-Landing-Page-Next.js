import { MongoClient } from "mongodb"
export const collection = {
    products: "products",
    users: "user",
}
export  const dbConnection = async (dbCollection)=>{
    const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI, );

    return client.connect()
    .then(()=>{
        console.log("Connected to MongoDB");
        const db = client.db();
        return db.collection(dbCollection);
    })
    .catch((error)=>{
        console.error("MongoDB connection error:", error);
        throw error;
        
    })
}