import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Top Rated", link: "/#services" },
  { id: 3, name: "Kids Wear", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 5, name: "Electronics", link: "/#" },
  { id: 6, name: "All Products", link: "/all-products" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false); // mobile menu
  const [showSearch, setShowSearch] = useState(false); // mobile search
  const navigate = useNavigate();

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

          {/* Desktop Search */}
          <div className="relative group hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="w-[200px] group-hover:w-[250px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-slate-800"
            />
            <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3" />
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Search Icon */}
            <button
              className="lg:hidden text-xl"
              onClick={() => setShowSearch(!showSearch)}
            >
              <IoMdSearch />
            </button>

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
                {open ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showSearch && (
          <div className="container mt-2 lg:hidden">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-slate-800"
            />
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-center">
        <ul className="flex items-center gap-4 py-2">
          {Menu.map((item) => (
            <li key={item.id}>
              <Link to={item.link} className="px-4 hover:text-primary duration-200">
                {item.name}
              </Link>
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
                <Link
                  to={item.link}
                  className="px-4 hover:text-primary duration-200"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
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
