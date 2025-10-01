import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const safeCart = Array.isArray(cart) ? cart : [];

  const total = safeCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br mt-10 from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white"
      >
        🛒 Your Cart
      </motion.h1>

      {safeCart.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-600 dark:text-gray-300 text-lg"
        >
          Your cart is empty. Add some products to get started!
        </motion.p>
      ) : (
        <>
          <div className="space-y-6 max-w-3xl mx-auto">
            <AnimatePresence>
              {safeCart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 hover:shadow-2xl hover:scale-[1.02] transition-all"
                >
                  {/* Item Info */}
                  <div className="text-left">
                    <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      ${item.price} × {item.quantity}{" "}
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        = ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>

                  {/* Quantity + Remove */}
                  <div className="flex items-center gap-3">
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                      -
                    </motion.button>
                    <span className="font-medium text-gray-900 dark:text-gray-200">
                      {item.quantity}
                    </span>
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                      +
                    </motion.button>

                    {/* ❌ Remove Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeFromCart(item.id)}
                      className="ml-3 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                      ✕
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Cart Total */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 max-w-3xl mx-auto p-6 bg-blue-600 text-white rounded-2xl shadow-2xl"
          >
            <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default CartPage;
