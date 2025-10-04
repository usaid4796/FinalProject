import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const safeWishlist = Array.isArray(wishlistItems) ? wishlistItems : [];

  return (
     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Wishlist</h1>

      {safeWishlist.length === 0 ? (
        <p className="text-gray-600 text-center">No wishlist items yet.</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-4">
          {safeWishlist.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded shadow">
              <div className="flex items-center gap-4">
                <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => { addToCart(item); removeFromWishlist(item.id); }} className="bg-blue-500 text-white px-3 py-1 rounded">Move to Cart</button>
                <button onClick={() => removeFromWishlist(item.id)} className="text-red-500 px-3 py-1 rounded">Remove</button>
              </div>
            </div>
          ))}

          <div className="mt-4 text-right">
            <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => clearWishlist()}>Clear Wishlist</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
// import React from "react";
// import { useWishlist } from "../context/WishlistContext";
// import { Link } from "react-router-dom";

// const Wishlist = () => {
//   const { wishlistItems, removeFromWishlist } = useWishlist();

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-10 px-4">
//       <div className="max-w-6xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold mb-6 text-center">Your Wishlist</h2>
//         {wishlistItems.length === 0 ? (
//           <p className="text-center">
//             Your wishlist is empty.{" "}
//             <Link to="/all-products" className="text-blue-500 hover:underline">
//               Go shopping
//             </Link>
//           </p>
//         ) : (
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {wishlistItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="border dark:border-gray-700 rounded-lg p-4 flex flex-col items-center bg-white dark:bg-slate-700 transition"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-32 h-32 object-contain mb-3"
//                 />
//                 <h3 className="font-semibold text-lg text-center mb-2">{item.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-3">${item.price}</p>
//                 <button
//                   onClick={() => removeFromWishlist(item.id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;
