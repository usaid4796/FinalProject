import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const safeWishlist = Array.isArray(wishlistItems) ? wishlistItems : [];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 dark:text-white">
        Your Wishlist
      </h1>

      {safeWishlist.length === 0 ? (
        <p className="text-center text-sm sm:text-base md:text-lg dark:text-gray-300">
          Your wishlist is empty.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {safeWishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col justify-between"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover rounded mb-3"
                />
                <h2 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mb-1 dark:text-white">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mb-1 line-clamp-2">
                  {item.description || "No description"}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base md:text-lg">
                    ${item.price}
                  </span>
                  <span className="text-sm sm:text-base text-yellow-500">⭐ {item.rating || 0}</span>
                </div>

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => {
                      addToCart(item);
                      removeFromWishlist(item.id);
                    }}
                    className="flex-1 bg-blue-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded hover:bg-blue-600 transition text-sm sm:text-base"
                  >
                    Move to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="flex-1 bg-red-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded hover:bg-red-600 transition text-sm sm:text-base"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center sm:text-right">
            <button
              onClick={() => clearWishlist()}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded text-sm sm:text-base md:text-lg transition"
            >
              Clear Wishlist
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Wishlist;
