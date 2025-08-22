// lib/getProducts.js
import { collection, dbConnection } from "@/lib/dbConnection";
import { ObjectId } from "mongodb";

export const getProductsId = async (id) => {
    console.log("Fetching product with ID:", id);
  try {
    const productsCollection = await dbConnection(collection.products); 
    const products = await productsCollection.findOne({ _id: new ObjectId(id) })
    return products; 
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
