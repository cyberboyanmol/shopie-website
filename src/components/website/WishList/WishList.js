import React from "react";
import { useNavigate } from "react-router-dom";
import HeadingTag from "../../Reuseable/Heading/HeadingTag";
import HeadTag from "../../Reuseable/HeadTag/HeadTag";
import MobileTop from "../Shop/MobileTop/MobileTop";
import EmptyWishList from "./EmptyWishList/EmptyWishList";
import "./WishList.scss";
import WishListProductContainer from "./WishListProductContainer/WishListProductContainer";
const WishList = () => {
  const navigate = useNavigate();
  const isEmpty = true;
  const isLogin = false; //if true means user logged in but it have empty wishlist  or if false then it have empty wishlist in this user can continue shopping or login

  const text = isEmpty
    ? isLogin
      ? `Hang your wishes where you can make them come true.`
      : `Sign in to link products to your account or view products already in your wishlist`
    : "";

  const btnText = "Login / register";
  const title = "Your Wishlist is Empty !!";
  const condition = isEmpty ? (isLogin ? false : true) : "";

  const ContinueShopping = () => {
    alert("moving to shopping main page");
    navigate("/website/shop");
  };

  const RedirectToLoginPage = () => {
    alert("redirect to login page ");
    navigate("/login");
  };
  return (
    <div>
      <HeadTag text={"My Wishlist"} />
      <MobileTop
        title={"My WishList"}
        // Breadlink={[
        //   { text: "Home", link: "website" },
        //   { text: "WishList", link: "website/WishList" },
        // ]}
      />
      {/* <HeadingTag title={"My WishList"} /> */}

      {/* /  this component will run when wishlist is empty / */}
      {isEmpty ? (
        <EmptyWishList
          btnText={btnText}
          title={title}
          text={text}
          condition={condition}
          ClickEvent1={ContinueShopping}
          ClickEvent2={RedirectToLoginPage}
        />
      ) : (
        <WishListProductContainer />
      )}
    </div>
  );
};

export default WishList;
