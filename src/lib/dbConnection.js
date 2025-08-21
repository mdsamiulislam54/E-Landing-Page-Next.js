import { MongoClient } from "mongodb"
export const collection = {
    products: "products",
}
export  const dbConnection = async (dbCollection)=>{
    const client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

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