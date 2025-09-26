// import React, { useState } from "react";
// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaBars, FaTimes } from "react-icons/fa";
// import DarkMode from "./DarkMode";
// import { FiShoppingBag } from "react-icons/fi";

// const Menu = [
//   { id: 1, name: "Home", link: "/#" },
//   { id: 2, name: "Top Rated", link: "/#services" },
//   { id: 3, name: "Kids Wear", link: "/#" },
//   { id: 4, name: "Mens Wear", link: "/#" },
//   { id: 5, name: "Electronics", link: "/#" },
//   { id: 6, name: "AllProducts", link: "/#" },
// ];

// const Navbar = ({ handleOrderPopup }) => {
//   const [open, setOpen] = useState(false); // mobile menu
//   const [showSearch, setShowSearch] = useState(false); // mobile search

//   return (
//     <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
//       {/* upper Navbar */}
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center gap-3">
//             <a href="#" className="font-bold text-xl items-center flex gap-1">
//               <FiShoppingBag size="30" />
//               ShopMe
//             </a>
//           </div>

//           {/* search bar (desktop) */}
//           <div className="relative group hidden lg:block">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-[200px] sm:w-[200px] group-hover:w-[250px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2
//                 text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800 "
//             />
//             <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3" />
//           </div>

//           <div className="flex items-center gap-4">
//             {/* search icon (mobile) */}
//             <button
//               className="lg:hidden text-xl"
//               onClick={() => setShowSearch(!showSearch)}
//             >
//               <IoMdSearch />
//             </button>

//             {/* Order button only on large screens */}
//             <button
//               onClick={() => handleOrderPopup()}
//               className="hidden lg:flex bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full items-center gap-3 group"
//             >
//               <span className="group-hover:block hidden transition-all font-medium duration-200">
//                 Cart
//               </span>
//               <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
//             </button>

//             {/* Darkmode Switch */}
//             <div>
//               <DarkMode />
//             </div>

//             {/* Hamburger Menu (mobile) */}
//             <div className="lg:hidden">
//               <button onClick={() => setOpen(!open)}>
//                 {open ? (
//                   <FaTimes className="text-2xl" />
//                 ) : (
//                   <FaBars className="text-2xl" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* mobile search bar toggle */}
//         {showSearch && (
//           <div className="container mt-2 lg:hidden">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800"
//             />
//           </div>
//         )}
//       </div>

//       {/* lower Navbar (desktop) */}
//       <div data-aos="zoom-in" className="hidden lg:flex justify-center ">
//         <ul className="flex items-center gap-4 pb-1.5 pt-1.5">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block px-4 hover:text-primary duration-200"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Mobile menu dropdown */}
//       {open && (
//         <div className="lg:hidden bg-white dark:bg-slate-800 shadow-md">
//           <ul className="flex flex-col items-center gap-4 py-4">
//             {Menu.map((data) => (
//               <li key={data.id}>
//                 <a
//                   href={data.link}
//                   className="inline-block px-4 hover:text-primary duration-200"
//                   onClick={() => setOpen(false)}
//                 >
//                   {data.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
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
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="/" className="font-bold text-xl flex items-center gap-1">
              <FiShoppingBag size="30" />
              ShopMe
            </a>
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
            {/* Mobile search icon */}
            <button
              className="lg:hidden text-xl"
              onClick={() => setShowSearch(!showSearch)}
            >
              <IoMdSearch />
            </button>

            {/* Cart button */}
            <button
              onClick={() => navigate("/cart")}
              className="hidden lg:flex bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full items-center gap-2 transition-all duration-200 group"
            >
              <span className="group-hover:block hidden font-medium">
                Cart
              </span>
              <FaCartShopping className="text-xl" />
            </button>

            {/* Dark mode */}
            <DarkMode />

            {/* Hamburger menu */}
            <div className="lg:hidden">
              <button onClick={() => setOpen(!open)}>
                {open ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile search bar */}
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
              <a
                href={item.link}
                className="px-4 hover:text-primary duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white dark:bg-slate-800 shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            {Menu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="px-4 hover:text-primary duration-200"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            {/* Mobile Cart button */}
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
