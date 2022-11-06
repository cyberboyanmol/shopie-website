import React from "react";
import { useNavigate } from "react-router-dom";
import HeadingTag from "../../Reuseable/Heading/HeadingTag";
import HeadTag from "../../Reuseable/HeadTag/HeadTag";
import MobileTop from "../Shop/MobileTop/MobileTop";
import EmptyWishList from "../WishList/EmptyWishList/EmptyWishList";
import "./Cart.scss";
import CartProductContainer from "./CartProductContainer/CartProductContainer";
const Cart = () => {
  const navigate = useNavigate();
  const isEmpty = false;
  const isLogin = false; //if true means user logged in but it have empty wishlist  or if false then it have empty wishlist in this user can continue shopping or login
  const text = isEmpty
    ? isLogin
      ? `Hang your wishes where you can make them come true.`
      : `Sign in to link products to your account or view products already in your wishlist or bag`
    : "";
  const btnText = isEmpty
    ? isLogin
      ? `Add From Wishlist`
      : `Login /Register`
    : "";
  const title = "Your Bag is Empty !!";
  const condition = true;

  //event
  const addFromWishlist = () => {
    // navigate("/website/Wishlist");
    alert("Moving to wishlist page");
    // console.log("hey");
  };

  // const continue shoppping
  const ContinueShopping = () => {
    alert("moving to shopping main page");
  };

  const RedirectToLoginPage = () => {
    alert("redirect to login page ");
    // navigate("/login");
  };

  const ClickEvent2 = isEmpty
    ? isLogin
      ? addFromWishlist
      : RedirectToLoginPage
    : null;
  return (
    <div>
      <HeadTag text={"My Bag"} />
      <MobileTop
        title={"My Bag"}
        // Breadlink={[
        //   { text: "Home", link: "website" },
        //   { text: "WishList", link: "website/WishList" },
        // ]}
      />
      {/* <HeadingTag title={"My WishList"} /> */}

      {/* /  this component will run when wishlist is empty / */}
      {isEmpty ? (
        <EmptyWishList
          title={title}
          text={text}
          ClickEvent1={ContinueShopping}
          ClickEvent2={ClickEvent2}
          condition={condition}
          btnText={btnText}
        />
      ) : (
        <CartProductContainer />
        // <div>hkdhk</div>
      )}
    </div>
  );
};

export default Cart;
