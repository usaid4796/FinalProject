// import React from "react";
// import { useCart } from "../context/CartContext";

// const CartPage = () => {
//   const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

//   const safeCart = Array.isArray(cartItems) ? cartItems : [];

//   const total = safeCart.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0);

//   return (
//     <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//       <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

//       {safeCart.length === 0 ? (
//         <p className="text-center text-gray-600 dark:text-gray-300">Your cart is empty for now.</p>
//       ) : (
//         <div className="space-y-4 max-w-4xl mx-auto">
//           {safeCart.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center justify-between bg-gray-800 dark:bg-gray-700 shadow-md rounded-xl p-4 transition hover:scale-[1.01]"
//             >
//               <div className="flex items-center gap-4">
//                 <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded" />
//                 <div className="text-left">
//                   <h2 className="font-semibold">{item.title}</h2>
//                   <p className="text-sm text-gray-300 dark:text-gray-200">${item.price.toFixed(2)} each</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
//                   className="px-3 py-1 rounded bg-gray-700 dark:bg-gray-600 text-white"
//                 >
//                   -
//                 </button>
//                 <span className="w-8 text-center">{item.quantity || 1}</span>
//                 <button
//                   onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
//                   className="px-3 py-1 rounded bg-gray-700 dark:bg-gray-600 text-white"
//                 >
//                   +
//                 </button>
//                 <div className="ml-4 text-right">
//                   <div className="font-semibold">${((item.price || 0) * (item.quantity || 1)).toFixed(2)}</div>
//                   <button onClick={() => removeFromCart(item.id)} className="text-sm text-red-500 mt-1">
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <div className="mt-6 p-4 rounded-xl shadow-lg bg-blue-600 dark:bg-blue-500 text-white text-right">
//             <div className="text-lg">
//               Total: <span className="font-bold">${total.toFixed(2)}</span>
//             </div>
//             <div className="mt-2">
//               <button
//                 onClick={() => clearCart()}
//                 className="bg-white dark:bg-gray-800 text-blue-600 dark:text-white px-4 py-2 rounded"
//               >
//                 Clear Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;
import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const safeCart = Array.isArray(cartItems) ? cartItems : [];
  const total = safeCart.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0);

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center dark:text-white">
        Your Cart
      </h1>

      {safeCart.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg">
          Your cart is empty for now.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {safeCart.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col h-full"
              >
                <div className="flex flex-col h-full">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover rounded mb-3 flex-shrink-0"
                  />
                  <h2 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mb-1 dark:text-white">
                    {item.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mb-1 line-clamp-2">
                    {item.description || "No description available"}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base md:text-lg">
                      ${item.price.toFixed(2)}
                    </span>
                    <span className="text-yellow-500 text-sm sm:text-base">⭐ {item.rating || 0}</span>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                      className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white px-2 sm:px-3 py-1 sm:py-2 rounded"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity || 1}</span>
                    <button
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                      className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white px-2 sm:px-3 py-1 sm:py-2 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white px-2 sm:px-3 py-1 sm:py-2 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl shadow-lg bg-blue-600 dark:bg-blue-500 text-white text-right max-w-6xl mx-auto">
            <div className="text-lg sm:text-xl md:text-2xl">
              Total: <span className="font-bold">${total.toFixed(2)}</span>
            </div>
            <div className="mt-2">
              <button
                onClick={() => clearCart()}
                className="bg-white dark:bg-gray-800 text-blue-600 dark:text-white px-4 sm:px-6 py-2 sm:py-3 rounded"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
