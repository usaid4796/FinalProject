import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import ScrollToHash from "./components/Navbar/ScrollToHash";

import AllProducts from "./pages/AllProducts";
import CartPage from "./pages/Cart";
import Wishlist from "./pages/WishList";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <ScrollToHash />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />

              <div id="Products">
                <Products />
              </div>

              <div id="TopRated">
                <TopProducts />
              </div>

              <Banner />
              <Subscribe />

              <div id="Testimonials">
                <Testimonials />
              </div>

              <div id="ContactUs">
                <Footer />
              </div>
            </>
          }
        />

        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
};

export default App;
