import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";

import { AllRoutes } from "../../../AppConstant";
import ProductDetailPage from "../ProductDetail/ProductDetailPage";
import WishList from "../WishList/WishList";
import Cart from "../Cart/Cart";
import Profile from "../Profile/Profile";
import { useMediaQuery } from "react-responsive";
import MobileProfile from "../Profile/MobileProfile/MobileProfile";
import Overview from "../Profile/Overview/Overview";
import Address from "../Profile/Address/Address";
import Orders from "../Profile/My Orders/Orders";

const Body = () => {
  const Home = lazy(() => import("../Home/Home"));
  const Shop = lazy(() => import("../Shop/Shop"));
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 650px)" });
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
        {isTabletOrMobile ? (
          <Route path="/profile" element={<MobileProfile />} />
        ) : (
          <Route path="/profile/*" element={<Profile />} />
        )}

        {/* //Need to optimise the code using array of object consist link and corresponsidng component  */}
        {isTabletOrMobile && (
          <Route path="/profile/overview" element={<Overview />} />
        )}
        {isTabletOrMobile && (
          <Route path="/profile/orders" element={<Orders />} />
        )}
        {isTabletOrMobile && (
          <Route path="/profile/address" element={<Address />} />
        )}

        <Route path="/*" element={<h1>PAge not found</h1>} />
      </Routes>

      <Footer />
    </Suspense>
  );
};

export default Body;
