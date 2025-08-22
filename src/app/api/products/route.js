import { collection, dbConnection } from "@/lib/dbConnection";
import { NextResponse } from "next/server";

export async  function POST (req){
    try {
        const data = await req.json();
        const productsCollection = await dbConnection(collection.products);
        const products = await productsCollection.insertOne(data)
        return NextResponse.json({ message: "Product added successfully", product: products });
        
       
    } catch (error) {
        console.error("Error adding product:", error);
        return new Response.json({ message: "Failed to add product" }, { status: 500 });
    }
}
