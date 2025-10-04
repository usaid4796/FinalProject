import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Top Rated", link: "#TopRated" },
  { id: 3, name: "Products", link: "#Products" },
  { id: 4, name: "Testimonials", link: "#Testimonials" },
  { id: 5, name: "Contact Us", link: "#ContactUs" },
  { id: 6, name: "All Products", link: "/all-products" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
      {/* Top section */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl flex items-center gap-2">
            <FiShoppingBag size="28" />
            ShopMe
          </Link>

          {/* Right section */}
          <div className="flex items-center gap-4">
            {/* Auth */}
            {user ? (
              <>
                <span className="hidden sm:block">Hi, {user.name}</span>
                <button
                  onClick={logout}
                  className="hidden sm:block bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hidden sm:block bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="hidden sm:block bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600"
                >
                  Sign Up
                </Link>
              </>
            )}

            {/* Wishlist */}
            <Link to="/wishlist" className="hover:text-blue-500 hidden sm:block">
              Wishlist
            </Link>

            {/* ✅ Cart (badge removed) */}
            <button
              onClick={() => navigate("/cart")}
              className="hidden lg:flex bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full items-center gap-2 transition-all duration-200 group"
            >
              <span className="group-hover:block hidden font-medium">Cart</span>
              <FaCartShopping className="text-xl" />
            </button>

            {/* Dark Mode Toggle */}
            <DarkMode />

            {/* Hamburger Menu */}
            <div className="lg:hidden">
              <button onClick={() => setOpen((s) => !s)}>
                {open ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-center">
        <ul className="flex items-center gap-4 py-2">
          {Menu.map((m) =>
            m.link.startsWith("#") ? (
              <li key={m.id}>
                <a href={m.link} className="px-4 hover:text-primary duration-200">
                  {m.name}
                </a>
              </li>
            ) : (
              <li key={m.id}>
                <Link to={m.link} className="px-4 hover:text-primary duration-200">
                  {m.name}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>

      {/* ✅ Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white dark:bg-slate-800 shadow-md animate-slideDown">
          <ul className="flex flex-col items-center gap-4 py-4">
            {Menu.map((m) => (
              <li key={m.id} className="w-full text-center">
                {m.link.startsWith("#") ? (
                  <a
                    href={m.link}
                    className="px-4 hover:text-primary duration-200"
                    onClick={() => setOpen(false)}
                  >
                    {m.name}
                  </a>
                ) : (
                  <Link
                    to={m.link}
                    className="px-4 hover:text-primary duration-200"
                    onClick={() => setOpen(false)}
                  >
                    {m.name}
                  </Link>
                )}
              </li>
            ))}

            {/* Wishlist */}
            <li className="w-full text-center">
              <Link
                to="/wishlist"
                onClick={() => setOpen(false)}
                className="px-4 hover:text-primary duration-200"
              >
                Wishlist
              </Link>
            </li>

            {/* ✅ Cart (centered properly now) */}
            <li className="w-full flex justify-center">
              <button
                onClick={() => {
                  navigate("/cart");
                  setOpen(false);
                }}
                className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-2"
              >
                <FaCartShopping />
                <span>Cart</span>
              </button>
            </li>

            {/* Auth buttons */}
            <li className="w-full text-center">
              {user ? (
                <>
                  <div className="mb-2">Hi, {user.name}</div>
                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="bg-red-500 text-white px-4 py-1 rounded-lg"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="bg-blue-500 text-white px-4 py-1 rounded-lg"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setOpen(false)}
                    className="bg-green-500 text-white px-4 py-1 rounded-lg mt-2 block"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
