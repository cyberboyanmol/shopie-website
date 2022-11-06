import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";

import { AllRoutes } from "../../../AppConstant";
import ProductDetailPage from "../ProductDetail/ProductDetailPage";
import WishList from "../WishList/WishList";
import Cart from "../Cart/Cart";

const Body = () => {
  const Home = lazy(() => import("../Home/Home"));
  const Shop = lazy(() => import("../Shop/Shop"));
  return (
    <Suspense fallback={<div>SHop Pages</div>}>
      <Routes>
        <Route path="" element={<Home />} />
        {AllRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={`${route.link}`}
              element={<Shop route={route} />}
            />
          );
        })}

        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/Wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        {/* //
        cart page 
        checkout page 
         prodfile  page 5 
        
        */}
        <Route path="/*" element={<h1>PAge not found</h1>} />
      </Routes>

      <Footer />
    </Suspense>
  );
};

export default Body;
