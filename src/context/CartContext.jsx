// import { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const { user } = useAuth();
//   const [cartItems, setCartItems] = useState(() => {
//     // Load from localStorage immediately on mount
//     if (typeof window !== "undefined" && user) {
//       return JSON.parse(localStorage.getItem(`cart_${user.email}`)) || [];
//     }
//     return [];
//   });

//   useEffect(() => {
//     if (user) {
//       const savedCart =
//         JSON.parse(localStorage.getItem(`cart_${user.email}`)) || [];
//       setCartItems(savedCart);
//     }
//   }, [user]);

//   useEffect(() => {
//     if (user) {
//       localStorage.setItem(`cart_${user.email}`, JSON.stringify(cartItems));
//     }
//   }, [cartItems, user]);

//   const addToCart = (item) => {
//     const updatedCart = [...cartItems, item];
//     setCartItems(updatedCart);
//   };

//   const removeFromCart = (id) => {
//     setCartItems(cartItems.filter((i) => i.id !== id));
//   };

//   const updateQuantity = (id, quantity) => {
//     setCartItems(cartItems.map((i) => (i.id === id ? { ...i, quantity } : i)));
//   };

//   const clearCart = () => setCartItems([]);

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();

  const [cartItems, setCartItems] = useState([]);

  // Load cart when user logs in
  useEffect(() => {
    if (isAuthenticated && user?.email) {
      const savedCart =
        JSON.parse(localStorage.getItem(`cart_${user.email}`)) || [];

      setCartItems(savedCart);
    } else {
      setCartItems([]);
    }
  }, [isAuthenticated, user]);

  // Save cart whenever it changes
  useEffect(() => {
    if (isAuthenticated && user?.email) {
      localStorage.setItem(`cart_${user.email}`, JSON.stringify(cartItems));
    }
  }, [cartItems, isAuthenticated, user]);

  // Add item
  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  // Remove item
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i)),
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    if (isAuthenticated && user?.email) {
      localStorage.removeItem(`cart_${user.email}`);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
