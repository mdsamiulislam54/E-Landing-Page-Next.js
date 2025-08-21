import { collection, dbConnection } from "@/lib/dbConnection";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const productsCollection = await dbConnection(collection.products);
    const products = await productsCollection.find({}).toArray();
    console.log(products);


    return NextResponse.json(products);

  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
