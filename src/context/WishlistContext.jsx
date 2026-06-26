// // import React, { createContext, useContext, useState, useEffect } from "react";

// // const WishlistContext = createContext();

// // export const WishlistProvider = ({ children }) => {
// //   const { user } = useAuth();
// //   const [wishlistItems, setWishlistItems] = useState(() => {
// //     if (typeof window !== "undefined" && user) {
// //       return JSON.parse(localStorage.getItem(`wishlist_${user.email}`)) || [];
// //     }
// //     return [];
// //   });

// //   useEffect(() => {
// //     if (user) {
// //       const saved =
// //         JSON.parse(localStorage.getItem(`wishlist_${user.email}`)) || [];
// //       setWishlistItems(saved);
// //     }
// //   }, [user]);

// //   useEffect(() => {
// //     if (user) {
// //       localStorage.setItem(
// //         `wishlist_${user.email}`,
// //         JSON.stringify(wishlistItems),
// //       );
// //     }
// //   }, [wishlistItems, user]);

// //   const addToWishlist = (item) => {
// //     if (!wishlistItems.find((i) => i.id === item.id)) {
// //       setWishlistItems([...wishlistItems, item]);
// //     }
// //   };

// //   const removeFromWishlist = (id) => {
// //     setWishlistItems(wishlistItems.filter((item) => item.id !== id));
// //   };

// //   return (
// //     <WishlistContext.Provider
// //       value={{ wishlistItems, addToWishlist, removeFromWishlist }}
// //     >
// //       {children}
// //     </WishlistContext.Provider>
// //   );
// // };

// // export const useWishlist = () => useContext(WishlistContext);
// import { createContext, useContext, useState, useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const { user, isAuthenticated } = useAuth0();

//   const [wishlistItems, setWishlistItems] = useState([]);

//   // Load wishlist when user logs in
//   useEffect(() => {
//     if (isAuthenticated && user?.email) {
//       const saved =
//         JSON.parse(localStorage.getItem(`wishlist_${user.email}`)) || [];

//       setWishlistItems(saved);
//     } else {
//       setWishlistItems([]);
//     }
//   }, [isAuthenticated, user]);

//   // Save wishlist whenever it changes
//   useEffect(() => {
//     if (isAuthenticated && user?.email) {
//       localStorage.setItem(
//         `wishlist_${user.email}`,
//         JSON.stringify(wishlistItems),
//       );
//     }
//   }, [wishlistItems, isAuthenticated, user]);

//   // Add to wishlist (no duplicates)
//   const addToWishlist = (item) => {
//     setWishlistItems((prev) => {
//       if (prev.find((i) => i.id === item.id)) return prev;
//       return [...prev, item];
//     });
//   };

//   // Remove from wishlist
//   const removeFromWishlist = (id) => {
//     setWishlistItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   return (
//     <WishlistContext.Provider
//       value={{
//         wishlistItems,
//         addToWishlist,
//         removeFromWishlist,
//       }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => useContext(WishlistContext);
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();

  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    if (!isAuthenticated || !user?.email) {
      setWishlistItems([]);
      return;
    }

    try {
      const saved =
        JSON.parse(localStorage.getItem(`wishlist_${user.email}`)) || [];

      setWishlistItems(saved);
    } catch {
      setWishlistItems([]);
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    if (!isAuthenticated || !user?.email) return;

    localStorage.setItem(
      `wishlist_${user.email}`,
      JSON.stringify(wishlistItems),
    );
  }, [wishlistItems, isAuthenticated, user]);

  const addToWishlist = (item) => {
    setWishlistItems((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };
  const clearWishlist = () => {
    setWishlistItems([]);
  };
  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }

  return context;
};
