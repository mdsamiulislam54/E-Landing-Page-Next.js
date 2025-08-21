// lib/getProducts.js
import { collection, dbConnection } from "@/lib/dbConnection";

export const getProducts = async () => {
  try {
    const productsCollection = await dbConnection(collection.products); 
    const products = await productsCollection.find({}).toArray();
    return products; 
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
