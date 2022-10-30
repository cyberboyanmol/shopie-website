import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";

import { AllRoutes } from "../../../AppConstant";
import ProductDetailPage from "../ProductDetail/ProductDetailPage";
import WishList from "../WishList/WishList";

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
        {/* //
        cart page 
        checkout page 
         prodfile  page 5 
        
        */}
      </Routes>

      <Footer />
    </Suspense>
  );
};

export default Body;
