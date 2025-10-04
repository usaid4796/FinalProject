import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

  const safeCart = Array.isArray(cartItems) ? cartItems : [];

  const total = safeCart.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0);

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {safeCart.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">Your cart is empty for now.</p>
      ) : (
        <div className="space-y-4 max-w-4xl mx-auto">
          {safeCart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-800 dark:bg-gray-700 shadow-md rounded-xl p-4 transition hover:scale-[1.01]"
            >
              <div className="flex items-center gap-4">
                <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded" />
                <div className="text-left">
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-300 dark:text-gray-200">${item.price.toFixed(2)} each</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                  className="px-3 py-1 rounded bg-gray-700 dark:bg-gray-600 text-white"
                >
                  -
                </button>
                <span className="w-8 text-center">{item.quantity || 1}</span>
                <button
                  onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                  className="px-3 py-1 rounded bg-gray-700 dark:bg-gray-600 text-white"
                >
                  +
                </button>
                <div className="ml-4 text-right">
                  <div className="font-semibold">${((item.price || 0) * (item.quantity || 1)).toFixed(2)}</div>
                  <button onClick={() => removeFromCart(item.id)} className="text-sm text-red-500 mt-1">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6 p-4 rounded-xl shadow-lg bg-blue-600 dark:bg-blue-500 text-white text-right">
            <div className="text-lg">
              Total: <span className="font-bold">${total.toFixed(2)}</span>
            </div>
            <div className="mt-2">
              <button
                onClick={() => clearCart()}
                className="bg-white dark:bg-gray-800 text-blue-600 dark:text-white px-4 py-2 rounded"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
