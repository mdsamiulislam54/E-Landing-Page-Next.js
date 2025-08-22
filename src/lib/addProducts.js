import { collection, dbConnection } from "./dbConnection"

export const AddProducts = async (data)=>{
    try {
        const productCollection = await dbConnection(collection.products);
        const result = await productCollection.insertOne(data);
        return result; 
    } catch (error) {
        console.error("Error adding product:", error);
        throw error; 
    } 
}