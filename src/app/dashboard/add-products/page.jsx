"use client";
import { useState } from "react";

export default function AddProductForm() {
    const [form, setForm] = useState({
        name: "",
        brand: "",
        price: "",
        color: "",
        size: [],
        features: [],
        image: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // size and features handle as array
        if (name === "size" || name === "features") {
            setForm({ ...form, [name]: value.split(",").map((v) => v.trim()) });
        } else {
            setForm({ ...form, [name]: value });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                alert("Product added successfully!");
                setForm({ name: "", brand: "", price: "", color: "", size: [], features: [], image: "", description: "" });
            } else {
                const data = await res.json();
                alert("Failed: " + data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong!");
        }
    };


    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-xl mt-10">
            <h1 className="text-2xl font-bold mb-6">Add Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="Vintage Rock Band Tee"
                    />
                </div>

                <div>
                    <label className="block font-medium">Brand</label>
                    <input
                        type="text"
                        name="brand"
                        required
                        value={form.brand}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="Rebel Roots"
                    />
                </div>

                <div>
                    <label className="block font-medium">Price</label>
                    <input
                        type="number"
                        name="price"
                        required
                        value={form.price}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="1299"
                    />
                </div>

                <div>
                    <label className="block font-medium">Color</label>
                    <input
                        type="text"
                        required
                        name="color"
                        value={form.color}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="Faded Black"
                    />
                </div>

                <div>
                    <label className="block font-medium">Size (comma separated)</label>
                    <input
                        type="text"
                        name="size"
                        required
                        value={form.size.join(", ")}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="S, M, L, XL"
                    />
                </div>

                <div>
                    <label className="block font-medium">Features (comma separated)</label>
                    <input
                        type="text"
                        name="features"
                        required
                        value={form.features.join(", ")}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="Soft cotton, Pre-shrunk, Classic fit"
                    />
                </div>

                <div>
                    <label className="block font-medium">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        required
                        value={form.image}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="https://m.media-amazon.com/images/I/61Q1S0k+nkL._AC_SX679_.jpg"
                    />
                </div>

                <div>
                    <label className="block font-medium">Description</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        required
                        className="w-full border rounded px-3 py-2"
                        rows={5}
                        placeholder="Product description here..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-700 transition"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
}
