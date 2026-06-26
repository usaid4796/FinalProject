import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-xu214bbgrmirsg5b.us.auth0.com"
    clientId="uvX358VciWoCg79yD2MRpHt8SmviN5pa"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  </Auth0Provider>,
);
