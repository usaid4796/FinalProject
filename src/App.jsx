import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

// Pages
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products />
              <TopProducts />
              <Banner />
              <Subscribe />
              <Testimonials />
              <Footer />
            </>
          }
        />
        {/* All Products Page */}
        <Route path="/all-products" element={<AllProducts />} />
        {/* Cart Page */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
