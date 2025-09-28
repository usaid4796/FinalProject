import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Top Rated", link: "#TopRated" },
  { id: 3, name: "Products", link: "#Products" },
  { id: 4, name: "Testimonials", link: "#Testimonials" },
  { id: 5, name: "Contact Us", link: "#ContactUs" },
  { id: 6, name: "All Products", link: "/all-products" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false); // mobile menu
  const navigate = useNavigate();

  // ✅ Smooth scrolling effect
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="font-bold text-xl flex items-center gap-1">
              <FiShoppingBag size="30" />
              ShopMe
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Cart Button */}
            <button
              onClick={() => navigate("/cart")}
              className="hidden lg:flex bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full items-center gap-2 transition-all duration-200 group"
            >
              <span className="group-hover:block hidden font-medium">Cart</span>
              <FaCartShopping className="text-xl" />
            </button>

            {/* Dark Mode */}
            <DarkMode />

            {/* Hamburger Menu */}
            <div className="lg:hidden">
              <button onClick={() => setOpen(!open)}>
                {open ? (
                  <FaTimes className="text-2xl" />
                ) : (
                  <FaBars className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-center">
        <ul className="flex items-center gap-4 py-2">
          {Menu.map((item) => (
            <li key={item.id}>
              {item.link.startsWith("#") ? (
                <a href={item.link} className="px-4 hover:text-primary duration-200">
                  {item.name}
                </a>
              ) : (
                <Link to={item.link} className="px-4 hover:text-primary duration-200">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white dark:bg-slate-800 shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            {Menu.map((item) => (
              <li key={item.id}>
                {item.link.startsWith("#") ? (
                  <a
                    href={item.link}
                    className="px-4 hover:text-primary duration-200"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.link}
                    className="px-4 hover:text-primary duration-200"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            {/* Mobile Cart Button */}
            <li>
              <button
                onClick={() => {
                  navigate("/cart");
                  setOpen(false);
                }}
                className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-2 mt-2"
              >
                <span>Cart</span>
                <FaCartShopping />
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
