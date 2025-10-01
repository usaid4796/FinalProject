import React, { useState, useEffect } from "react";
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("");

  // Fetch products
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=270")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  // Fetch categories
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Filter products by category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Sort products by price
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  // Format category name
  const formatCategory = (cat) =>
    cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " ");

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center">All Products</h1>
      <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
        Browse and shop the latest products.
      </p>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded transition ${
            selectedCategory === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
          }`}
        >
          All
        </button>

        {categories.map((cat) => {
          const catName = typeof cat === "string" ? cat : cat.name;
          const catSlug = typeof cat === "string" ? cat : cat.slug;
          return (
            <button
              key={catSlug}
              onClick={() => setSelectedCategory(catSlug)}
              className={`px-4 py-2 rounded transition ${
                selectedCategory === catSlug
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
              }`}
            >
              {formatCategory(catName)}
            </button>
          );
        })}
      </div>

      {/* Price Sort */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <span>Sort by price:</span>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-2 py-1 rounded bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
        >
          <option value="">Select</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="border dark:border-gray-700 p-4 rounded shadow hover:shadow-lg dark:shadow-gray-800 transition bg-white dark:bg-gray-800"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h2 className="font-semibold text-lg mb-1">{product.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">
              Brand: {product.brand || "N/A"}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">
              Category: {product.category}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-400 line-clamp-2">
              {product.description}
            </p>
            <div className="mt-2 flex justify-between items-center">
              
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                ${product.price}
              </span>
              <span className="text-sm text-yellow-500">
                ⭐ {product.rating}
              </span>
            </div>

            {/* Cart Button */}
            <button className="mt-3 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
