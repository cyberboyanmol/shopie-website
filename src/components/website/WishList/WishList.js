import React from "react";
import HeadTag from "../../Reuseable/HeadTag/HeadTag";
import MobileTop from "../Shop/MobileTop/MobileTop";
import "./WishList.scss";
const WishList = () => {
  return (
    <div>
      <HeadTag text={"My Wishlist"} />
      <MobileTop
        title={"My WishList"}
        Breadlink={[
          { text: "Home", link: "website" },
          { text: "WishList", link: "website/WishList" },
        ]}
      />
      {/* <h1> My wishlist</h1> */}
    </div>
  );
};

export default WishList;
