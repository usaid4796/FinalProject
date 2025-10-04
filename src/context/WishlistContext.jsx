import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { user } = useAuth();
  const [wishlistItems, setWishlistItems] = useState(() => {
    if (typeof window !== "undefined" && user) {
      return JSON.parse(localStorage.getItem(`wishlist_${user.email}`)) || [];
    }
    return [];
  });

  useEffect(() => {
    if (user) {
      const saved = JSON.parse(localStorage.getItem(`wishlist_${user.email}`)) || [];
      setWishlistItems(saved);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`wishlist_${user.email}`, JSON.stringify(wishlistItems));
    }
  }, [wishlistItems, user]);

  const addToWishlist = (item) => {
    if (!wishlistItems.find((i) => i.id === item.id)) {
      setWishlistItems([...wishlistItems, item]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
